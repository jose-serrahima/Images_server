#!/bin/bash

echo "*** Updating package list ... ***"

python3 '../tools/Python_scripts/get_all_packages.py';

echo "*** Updating finished ***"


echo "*** Creating section list ... ***"

python3 '../tools/Python_scripts/create_sections_list.py';

echo "*** Section finished ***"