
import os
import re

root_dir = r"d:/projects/Vexel System/Vexel-Systems_Web"
app_dir = os.path.join(root_dir, "app")
public_dir = os.path.join(root_dir, "public")

# 1. Map all valid routes
valid_routes = {"/", ""}
for root, dirs, files in os.walk(app_dir):
    if "page.tsx" in files:
        rel_path = os.path.relpath(root, app_dir)
        if rel_path == ".":
            route = "/"
        else:
            route = "/" + rel_path.replace("\\", "/")
        valid_routes.add(route)

# 2. Map all valid assets
valid_assets = set()
for root, dirs, files in os.walk(public_dir):
    for f in files:
        rel_path = os.path.relpath(os.path.join(root, f), public_dir)
        valid_assets.add("/" + rel_path.replace("\\", "/"))

# Dynamic route prefixes
dynamic_prefixes = ["/services/", "/products/", "/blog/", "/events/", "/pricing/", "/portfolio/"]

def is_valid_route(link):
    if "?" in link: link = link.split("?")[0]
    if "#" in link: link = link.split("#")[0]
    if link in valid_routes: return True
    for prefix in dynamic_prefixes:
        if link.startswith(prefix): return True
    return False

def is_valid_asset(link):
    return link in valid_assets

link_errors = []
asset_errors = []

for root, dirs, files in os.walk(root_dir):
    if ".next" in root or "node_modules" in root or ".git" in root or "public" in root:
        continue
    for f in files:
        if f.endswith((".tsx", ".ts", ".js", ".jsx")):
            path = os.path.join(root, f)
            with open(path, "r", encoding="utf-8", errors="ignore") as file:
                content = file.read()
                # Find hrefs
                hrefs = re.findall(r'href=["\'](/[^"\']+)["\']', content)
                for h in hrefs:
                    if not is_valid_route(h) and not is_valid_asset(h):
                        link_errors.append((path, h))
                
                # Find srcs
                srcs = re.findall(r'src=["\'](/[^"\']+)["\']', content)
                for s in srcs:
                    if not is_valid_asset(s):
                        asset_errors.append((path, s))

print("Broken Internal Links:")
for p, l in sorted(set(link_errors)):
    print(f"{p}: {l}")

print("\nBroken Assets:")
for p, s in sorted(set(asset_errors)):
    print(f"{p}: {s}")
