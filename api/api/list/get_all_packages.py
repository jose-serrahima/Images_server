import sys
sys.path.append('/home/serra/bin')

import htql
import urllib.request
import os

base="https://packages.debian.org/es/stable/";


# Recover html
fp = urllib.request.urlopen(base)
mybytes = fp.read()
mystr = mybytes.decode("utf8")
fp.close()

# Recover blocks from html
blocks = htql.query(mystr, "<dl>.<dt sep>2-0 {Item=<a>:tx; Ref=<a>:href,value; Description=<dd>:tx } \n")
# loop blocks
for x in blocks:
	# Recover html pacakges
	fp = urllib.request.urlopen(base+x[1])
	mybytes = fp.read()
	mystr = mybytes.decode("utf8")
	fp.close()

	# Remove strong tags
	mystr = mystr.replace('<strong class=\'pmarker\'>','').replace('</strong>', '')

	# Start new string with packages
	json ="";
	json = '{ \n\
	\"name\" : \"' + x[0] + '\",\n \
	\"desc\" : \"' + x[2] + '\",\n \
	\"prog\" : [\n';
	# Recover packages from html
	packages = htql.query(mystr, "<dl>.<dt sep>2-0 {Item=<a>:tx; Version=<a>:xx; Description=<dd>:tx } \n")
	# Loop packages
	for y in packages:
		json += '\t\t{"item": "'+ y[0] + '", "version" : "' + y[1] + '", "description" : "' + y[2] + '"},\n';		
	# Delete last \n
	json = json[:json.rfind('\n')]
	# Delete last ,
	json = json[:-1]
	# Adds clousure to json
	json += '\n\t]\n}'
	# Write file
	f = open(x[0].lower().replace(" ", "_").replace("/", "_")+".json", "w")
	f.write (json)
	f.close()