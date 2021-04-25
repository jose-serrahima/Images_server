#!/usr/bin/python
import json

f = open('/home/serra/Tmp/Scripts/prueba.json',)
data = json.load(f)

for i in data['bloques']:
	g = open(i['block']+".txt", "w")
	for j in i['programs']:
		g.write(j+"\n")
	g.close()

f.close()