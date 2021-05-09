#!/usr/bin/python
import json
import os

#Recover al packages names and decription for filter search
directory = r'../api/api/list'
f = open(directory+"/sections/section_list.json", "w")

str_json ="[\n";

for filename in os.listdir(directory):
	if filename.endswith(".json"):
		route=os.path.join(directory, filename)
		g = open(route).read()
		data = json.loads(g)
		str_json = str_json + '\t{"name": "'+ data['name'] + '", "desc" : "' + data['desc'] + '"},\n';
	else:
		continue

# Delete last \n
str_json = str_json[:str_json.rfind('\n')]
# Delete last ,
str_json = str_json[:-1]
# Adds clousure to json
str_json += '\n]'
f.write (str_json)
f.close()