# MySQL Monitor

A simple MySQL monitoring app built with Node.js, Angular.js, & Socket.io

See the [screenshots](#screenshots).

## [Download](https://github.com/afaqurk/mysql-monitor/archive/master.zip) MySQL Monitor
* [Download link](https://github.com/afaqurk/mysql-monitor/archive/master.zip).
* You can also clone the repo to easily get future updates by running `git pull`

## Installation 

Navigate to the mysql-monitor root folder.

### 1. Dependencies
Install dependencies
```
sudo npm install
```

### 2. Update Config
Update `config.json` to match your DB credentials. 

Sample config settings
```
{
  "host" : "localhost",
  "user" : "root",
  "password" : "root",
  "port": 3306
}
```

### 3. Start server
Start the Node.js server which powers **mysql-monitor** 
```
sudo node server
```

## Screenshots
![](https://raw.githubusercontent.com/afaqurk/mysql-monitor/demo/screenshots/full.png)
![](https://github.com/afaqurk/mysql-monitor/blob/demo/screenshots/filter.png)
