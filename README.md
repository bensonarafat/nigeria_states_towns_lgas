## Nigeris States, Towns and Local Government Area

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
        ...
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
    ...
```

### Get Towns in a State
1. Method: `GET`
2. Endpoint: `https://nigeria-states-towns-lga.onrender.com/api/{state_code}/towns`
3. Description: Retrieve a list of towns within a specific state by providing the state_code.
4. Response: An array of state objects within the specified town.

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
4. Response: An array of state objects within the specified lgas.

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
    ..
    ..
```

## Others
You can also re