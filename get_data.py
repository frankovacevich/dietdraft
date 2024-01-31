import csv
import json
import requests
from io import StringIO

url = "https://docs.google.com/spreadsheets/u/1/d/1rdlyYMqmWA6FnUneMAa71odaipJKO2Cq5ivrjIcpC-0/gviz/tq?tqx=out:csv"
r = requests.get(url)

csv_file_like = StringIO(r.text)
csv_reader = csv.reader(csv_file_like)

rows = [row for row in csv_reader]
rows, headers = rows[1:], rows[0]
headers = [header[:-1] for header in headers]
data = [{headers[i]: row[i] for i in range(len(headers))} for row in rows]
data = [d for d in data if d["category"] != ""]

for food in data:
    food["protein"] = float(food["protein"])
    food["fat"] = float(food["fat"])
    food["carbs"] = float(food["carbs"])

with open("client/public/data.json", "w+") as f:
    json.dump(data, f)
