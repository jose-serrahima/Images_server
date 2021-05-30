import json
import os

# Reads all files on a proyect, get selected packages from them 
# and creates end files ready for start execution

# Change directory to read from here
directory = r'../configuration'

for filename in os.listdir(directory):
	if filename.endswith(".json"):
		with open(os.path.join(directory+filename),'r') as file:
			my_json=json.load(file)
			g = open(filename+".list.chroot", "w")
			for k in my_json["prog"]:
				if k["selected"]:
					g.write(k["name"]+"\n")
			g.close()
		file.close()
		continue
	else:
		continue

# Delete empty files

# TODO: delete extension file for destiny files

directory2 = './'

for filename in os.listdir(directory2):
	if os.stat(filename).st_size == 0:
		os.remove(filename) 
		continue
	else:
		continue