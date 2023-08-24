# Nigeria State and Region API
**Introduction to using the api** 

Locus is an awesome api to fetch all states, Towns and region in Nigerian!! 
I was in of it, when i made it. So feel free to use it for your own need. 

API endpoint `https://locus.fkkas.com/api/` 

Send a `GET` request to get all states in Nigeria
`curl https://locus.fkkas.com/api/states` 

**Response**
```javascript
  { 
    data: [
      {
      id: 6, 
      name: "Abia", 
      alias: "abia"
      }, 
      {
      "id":1,
      "name":"Abuja (FCT)",
      "alias":"abuja"
      }
     ]
   }
```
Send a `GET` request to get all state regions by adding the state `alias` to `curl https://locus.fkkas.com/api/regions/{alias}` 

**Example**
`curl https://locus.fkkas.com/api/regions/abuja`

```javascript
  { 
    data: [
        {
        "id":6,
        "name":"Abaji"
        },
      {
      "id":7,
      "name":"Apo District"
      }, 
      {
      "id":8,
      "name":"Asokoro",
      }
     ]
   }
```

Send a `GET` request to get all in nigeria `curl https://locus.fkkas.com/api/all` 

**Response** 
```javascript
  { 
    data: [
      {
      id: 6, 
      name: "Abia", 
      alias: "abia"
      }, 
      {
      "id":1,
      "name":"Abuja (FCT)",
      "alias":"abuja"
      }
     ]
   }
```


## Contributing

Contributions are welcome.
In case of any problems look at [existing issues](https://github.com/bensonarafat/nigeria-state-city-api/issues), if you cannot find anything related to your problem then open an issue.
Create an issue before opening a [pull request](https://github.com/bensonarafat/nigeria-state-city-api/pulls) for non trivial fixes.
In case of trivial fixes open a [pull request](https://github.com/bensonarafat/nigeria-state-city-api/pulls) directly.

**You can contribute in two ways**
- Updating the `MySQL` file 
- And updating the `laravel` code 

**Updating the MySQL file**

- Go to the `sql/db.sql` directory
- To add new states: go to the *states table* and update it at the end of the list 
- To add new region: go to the *regions table* and add the new list at the bottom remember to add the state_id 

**Updating the Laravel code: You need to install it** 

## Installation
- Run the command `composer install`
- If `.env` file diesn't exist, run the command `cp .env.example .env`
- Run the command `php artisan key:generate`
- Run the command `php artisan migrate` 
- You will be also asked to create the database, type `y` or `yes` 
-  If the above didn't prompt on your termial then do this. In the `.env` Update the database name with the one you created, to allow connection to a database else skip this step.
- Run `php artisan serve` to start server 
- Open your brower and enter the url, which might be `http://127.0.0.1:8000`
