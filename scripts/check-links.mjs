
const baseUrl = 'http://localhost:3000';
const visited = new Set();
const broken = [];
const queue = ['/'];

async function checkLinks() {
  console.log('Starting link check...');
  
  while (queue.length > 0) {
    const currentPath = queue.shift();
    if (visited.has(currentPath)) continue;
    visited.add(currentPath);

    try {
      const response = await fetch(baseUrl + currentPath);
      console.log(`Checking ${currentPath}: ${response.status}`);

      if (response.status >= 400) {
        broken.push({ path: currentPath, status: response.status });
        continue;
      }

      // Only parse HTML for internal links if it's a page
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('text/html')) {
        const text = await response.text();
        // Simple regex to find hrefs (not perfect but good enough for local check)
        const hrefs = text.match(/href=["']([^"']+)["']/g);
        
        if (hrefs) {
          for (const href of hrefs) {
            const match = href.match(/href=["']([^"']+)["']/);
            if (match) {
              let link = match[1];
              
              // Handle relative links
              if (link.startsWith('/')) {
                // Ignore hash links on same page for now unless we track them, but strict paths
                if (!visited.has(link) && !queue.includes(link)) {
                    // Filter out non-page assets if possible or just check HEAD later?
                    // For now, simple crawl
                    if (!link.startsWith('//')) queue.push(link);
                }
              }
            }
          }
        }
      }

    } catch (err) {
      console.error(`Error fetching ${currentPath}:`, err);
      broken.push({ path: currentPath, error: err.message });
    }
  }

  console.log('\n--- Report ---');
  if (broken.length === 0) {
    console.log('All links are working perfect!');
  } else {
    console.log('Found broken links:');
    broken.forEach(b => console.log(`${b.path} -> ${b.status || b.error}`));
  }
}

checkLinks();
