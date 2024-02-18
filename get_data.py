import csv
import json
import requests
from io import StringIO

url = "https://docs.google.com/spreadsheets/u/1/d/1d6RKA-GsM2IiFmZEQtNHsrXuF-ZXw4BTqmaK2tT5cuw/gviz/tq?tqx=out:csv"
r = requests.get(url)

csv_file_like = StringIO(r.text)
csv_reader = csv.reader(csv_file_like)

rows = [row for row in csv_reader]
rows, headers = rows[1:], rows[0]
headers = [header[:-1] for header in headers]
data = [{headers[i]: row[i] for i in range(len(headers))} for row in rows]
data = [d for d in data if d["category"] != ""]

for i in range(len(data)):
    food = data[i]
    data[i] = {
        "id": food["id"],
        "name": food["name"],
        "icon": food["icon"],
        "category": food["category"],
        "description": food["description"],
        "protein": float(food["protein"]),
        "fat": float(food["fat"]),
        "carbs": float(food["carbs"]),
        "b": food["b"],
        "s": food["s"],
        "l": food["l"],
        "d": food["d"],
    }

with open("client/public/data.json", "w+") as f:
    json.dump(data, f, indent=2)
