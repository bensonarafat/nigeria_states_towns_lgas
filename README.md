## Nigeris States, Towns and Local Government Area

[![Node.js CI](https://github.com/bensonarafat/nigeria_states_towns_lgas/actions/workflows/node.js.yml/badge.svg)](https://github.com/bensonarafat/nigeria_states_towns_lgas/actions/workflows/node.js.yml)

> ## Important!! Important
> If you currently trying to access this API but not going. This is because i just hit a limit on render and i need to subscribe to their plan.
> Its not of me to ask but i can't do anything right now.
> You could read my post and support the API so i can go back online here -> https://buymeacoffee.com/bensonarafat/help-nigeria-state-local-api
> Thanks,
> Ben. 

API Endpoint

```curl
https://nigeria-states-towns-lga.onrender.com/api
```
API Overview:

Your API provides information about Nigeria State, Towns, Local Government Areas, languages spoken, hospitals, airports, universities, polytechnics, and more. Here's how to interact with it with some examples:

### Get All States and their details
1. Method: `GET`
2. Endpoint: `https://nigeria-states-towns-lga.onrender.com/api/all`
3. Description: Retrieve a list of all states in Nigeria.
4. Response: An array of state objects, each containing information about the state.

### Response Example 

```json
[
  {
    "name": "Abia State",
    "capital": "Umuahia",
    "state_code": "ABIA",
    "creation_date": "1991",
    "location": {
      "latitude": "5.4527",
      "longitude": "7.5248"
    },
    "total_area": "6320",
    "population": 4112230,
    "towns": [
      {
        ...
```

### Get only states information
1. Method: `GET`
2. Endpoint: `https://nigeria-states-towns-lga.onrender.com/api/states`
3. Description: Retrieve a list of all states in Nigeria.
4. Response: Returns a list of states in nigeria only

### Response Example 

```json
[
  {
    "name": "Abia State",
    "capital": "Umuahia",
    "state_code": "ABIA",
    "creation_date": "1991",
    "location": {
      "latitude": "5.4527",
      "longitude": "7.5248"
    },
    "total_area": "6320",
    "population": 4112230,
    "postal_code": null,
    "religions": []
  },
  {
    "name": "Adamawa",
    "capital": "Yola",
    ...
```

### Get Towns in a State
1. Method: `GET`
2. Endpoint: `https://nigeria-states-towns-lga.onrender.com/api/{state_code}/towns`
3. Description: Retrieve a list of towns within a specific state by providing the state_code.
4. Response: An array of towns objects within the specified state.

### Example

```curl
https://nigeria-states-towns-lga.onrender.com/api/FCT/towns
```
### Response 

```json
[
  {
    "name": "Lokogoma",
    "location": {
      "latitude": null,
      "longitude": null
    },
    "population": null,
    "postal_code": null,
    "total_area": null,
    "creation_date": null
  },
  {
    "name": "Galadimawa",
    "location": {
      "latitude": null,
      "longitude": null
    },
```

### Get LGA in a State
1. Method: `GET`
2. Endpoint: `https://nigeria-states-towns-lga.onrender.com/api/{state_code}/lgas`
3. Description: Retrieve a list of LGA within a specific state by providing the state_code.
4. Response: An array of lga objects within the specified state.

### Example

```curl
https://nigeria-states-towns-lga.onrender.com/api/ABIA/lgas
```
### Response 

```json
[
  {
    "name": "Aba North",
    "location": {
      "latitude": null,
      "longitude": null
    },
    "total_area": null,
    "postal_code": null,
    "population": null,
    "creation_date": null
  },
  {
    "name": "Aba South",
    "location": {
      "latitude": null,
      "longitude": null
    },
    ..
```

## Others
You can also get items for any of the states. Examples: like the National Resources, Languages spoken, Ethnic Groups, Religions etc. 

### Example


1. Method: `GET`
2. Endpoint: `https://nigeria-states-towns-lga.onrender.com/api/{state_code}/{type}`
3. Description: Retrieve a list of items within a specific state by providing the state_code and type.
4. Response: An array of items objects within the specified state.


```curl
https://nigeria-states-towns-lga.onrender.com/api/FCT/airports
```

### Response 

```json
[
  "Nnamdi Azikiwe International Airport"
]
```

Read more: [here](https://bensonarafat.medium.com/using-the-nigeria-state-town-and-local-government-api-d73451696c54)

## Contributing

Contributions are done in two ways

Firstly, contributing to this `repository`

In case of any problems look at [existing issues](https://github.com/bensonarafat/nigeria_states_towns_lgas/issues), if you cannot find anything related to your problem then open an issue.
Create an issue before opening a [pull request](https://github.com/bensonarafat/nigeria_states_towns_lgas/pulls) for non trivial fixes.
In case of trivial fixes open a [pull request](https://github.com/bensonarafat/nigeria_states_towns_lgas/pulls) directly.

Secondary, contributing to the live update app [`https://nigeria-locality.vercel.app/`](https://nigeria-locality.vercel.app/) and it's repository [here](https://github.com/bensonarafat/nga-locality)

## Support Me

<a href="https://www.buymeacoffee.com/bensonarafat"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="150" /></a>
