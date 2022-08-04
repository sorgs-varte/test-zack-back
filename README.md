# Getting Started with test-zack-back

This project is a NodeJS project with a MongoDB database. 

## Two way to start

1. Dev Container

If you have docker-desktop, VSCode and "Remote-Container" extension on it you have just to : 

> `F1` + Remote-Container: Rebuild and Reopen in a container

on VSCode.

Then run this command : 

`pm2 start index.js` 

2. Local

Run locally the project but you have to install MongoDB on your computer and start it. 

Then you can run this command : 

`npm install`

and 

`node index.js`

## Available routes

>`GET /signalements`

return : 

```json
"message": "ok",
    "signalements": [
        {
            "_id": "62eb2c88face47bb94c6d952",
            "date": "2022-08-04T02:17:13.128Z",
            "creneau": "7-8",
            "alerteur": "bonjour@bonjour.com",
            "animal": "Chien",
            "couleur": "noir",
            "adresse": {
                "numero": 1,
                "numeroExtension": "",
                "typeVoie": "route",
                "nomVoie": "des pommes",
                "codePostal": 21270,
                "ville": "Dijon"
            },
            "statut": "Signalé",
            "collier": false,
            "etat": "Bon",
            "created_at": "2022-08-04T02:18:48.474Z",
            "updatedAt": "2022-08-04T02:18:48.474Z",
            "__v": 0
        }
    ]
}
```
_____

>`POST /signalement`

### body : 

```json
{
    "date":"2022-12-12",
    "creneau":"11-12",
    "alerteur":"gard@bobby.com",
    "animal":"chat",
    "couleur":"noir",
    "adresse":{
        "numero":13,
        "numeroExtension": null,
        "typeVoie":"rue",
        "nomVoie":"des portugais",
        "codePostal":"75009",
        "ville":"Paris"
    },
    "collier":false,
    "etat":"bon"
}
```

### return : 

```json
{
    "message": "everything ok",
    "signalement": {
        "date": "2022-12-12T00:00:00.000Z",
        "creneau": "11-12",
        "alerteur": "gard@bobby.com",
        "animal": "chat",
        "couleur": "noir",
        "adresse": {
            "numero": 13,
            "numeroExtension": null,
            "typeVoie": "rue",
            "nomVoie": "des portugais",
            "codePostal": 75009,
            "ville": "Paris"
        },
        "statut": "Signalé",
        "collier": false,
        "etat": "bon",
        "_id": "62eb2b17face47bb94c6d94f",
        "created_at": "2022-08-04T02:12:39.602Z",
        "updatedAt": "2022-08-04T02:12:39.602Z",
        "__v": 0
    }
}
```
____

>`PUT /signalement/{id}`

### body :

```json
{
    "newSignalement":{
        "date":"2022-12-12",
        "creneau":"10-11",
        "alerteur":"garfield@bob.com",
        "animal":"chat",
        "couleur":"roux",
        "adresse":{
            "numero":12,
            "numeroExtension": null,
            "typeVoie":"rue",
            "nomVoie":"des italiens",
            "codePostal":"75009",
            "ville":"Paris"
        }
    }
}
``` 

### return :

```json
{
    "message": "ok"
}
```

____

>`GET /brigades`

### return : 

```json
{
    "message": "ok",
    "brigades": [
        {
            "_id": "62e9d53b446042807430628d",
            "code": "75009-A",
            "created_at": "2022-08-03T01:54:03.550Z",
            "updatedAt": "2022-08-03T01:54:03.550Z",
            "__v": 0
        }
    ]
}
```

____

>`POST /brigade`

### body :

```json
{
    "code" : "75009-B"
}
```

### return : 

```json
{
    "message": "everything ok",
    "brigade": {
        "code": "75009-B",
        "_id": "62e9d541446042807430628f",
        "created_at": "2022-08-03T01:54:09.705Z",
        "updatedAt": "2022-08-03T01:54:09.705Z",
        "__v": 0
    }
}
```

___

>`PUT /brigade/{id}`

### body :

```json
{
    "newBrigade": {
        "code" : "75008-B"
    }
}
```

### return :

```json
{
    "message": "ok"
}
```

___

>`DELETE /brigade/{id}`

### return :

```json
{
    "message": "ok"
}
```