
# Backend REST server for saving user interface settings

---
## Installing npm packages

If **Node.js** and **npm** aren't already on your machine, [install them](http://blog.npmjs.org/post/85484771375/how-to-install-npm). 

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers: You must run all of these commands in administrator mode**.

```bash
npm install
```

## Server setup

1. For data storage, MongoDB is used, so need to [install it](https://www.mongodb.com/download-center) on your machine. The settings for database server are in `config\database.js`.

2. You can change the server *port* settings in `server.js`
 

## Starting the server
To start the server run:

```bash
npm start
```


## REST API

1. To *get* user settings use:
 
```bash
GET http://[domain]:[port]/users/settings/[user_id]
```
 
2. To *set* user settings use:
  
```bash
POST http://[domain]:[port]/users/settings/[user_id]

{ [Stringified settings object] }

 ```