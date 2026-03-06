import re
from datetime import datetime, timedelta

def generate_dates(count, start_date, end_date):
    delta = (end_date - start_date).days
    dates = []
    for i in range(count):
        # Evenly distribute or just increment
        current_date = start_date + timedelta(days=(i * delta // count))
        dates.append(current_date.strftime("%b %d, %2026"))
    return dates

with open("d:/projects/Vexel System/Vexel-Systems_Web/lib/blog-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Find all date lines
matches = list(re.finditer(r'date:\s*"([^"]*)"', content))
count = len(matches)

start_date = datetime(2026, 1, 1)
end_date = datetime(2026, 3, 7)
new_dates = generate_dates(count, start_date, end_date)

new_content = content
offset = 0
for i, match in enumerate(matches):
    start, end = match.span(1)
    new_date = new_dates[i]
    # Correcting the replacement to handle the previous matches moving
    new_content = new_content[:start+offset] + new_date + new_content[end+offset:]
    offset += len(new_date) - (end - start)

with open("d:/projects/Vexel System/Vexel-Systems_Web/lib/blog-data.ts", "w", encoding="utf-8") as f:
    f.write(new_content)
