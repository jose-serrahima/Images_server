# Images server

Early version of web interface and api-rest to operate (debian-live-config)[https://github.com/nodiscc/debian-live-config]

## Requirements

* SO: Debian 10 or upper
* NodeJS 14 or upper

## Instructions

* Clone this repository on local system/server. 
* On server-config folder you will find 2 scripts to configure your host.
* Install npm packages `npm i` on both, api and ui folders.

*Note*: Add your current user to sudoers.

## Execution

* Api: on api folder execute `ng serve`
* UI: on ui folder execute `npm start`
    * If your host is a server remember to use `--host=ip` to serve it on your ip addres.
