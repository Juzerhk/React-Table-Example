// Function returns the data fetching from the api
export async function  getRestaurantData(link) {
    
    try {
        const response = await fetch(link);
        const restaurantList = await response.json();
        // console.log('function ', restaurantList);
        return restaurantList;
    } catch(e) {
        console.log('Error fetching data from the server: ', e);
        return null;
    }
}

// Big array, containing more number of objects
export const bigArray = [
    [
      {
        "id": 1,
        "name": "Chunky Cheese",
        "desc": "Say cheese!",
        "phone": "555 0505",
        "address": {
          "country": "USA",
          "city": "Quahog",
          "street": "Spooner St",
          "number": 42
        }
      },
      {
        "id": 2,
        "name": "Pete's Pizza",
        "desc": "Enjoy a tasty slice of life",
        "phone": "555 8384",
        "address": {
          "country": "UK",
          "city": "London",
          "street": "Fake St",
          "number": 66
        }
      }
    ],
    [
      {
        "id": 3,
        "name": "Sally's Seafood",
        "desc": "Yarg maytee. Feast yer gills on our octopus pie",
        "phone": "555 0987",
        "address": {
          "country": "Portugal",
          "city": "Lisbon",
          "street": "Phony Road",
          "number": 123
        }
      },
      {
        "id": 4,
        "name": "Billy's Burgers",
        "desc": "Joy between the buns",
        "phone": "555 5748",
        "address": {
          "country": "Germany",
          "city": "Bielefeld",
          "street": "Phony Road",
          "number": 51
        }
      }
    ],
    [
      {
        "id": 5,
        "name": "Patty's Patties",
        "desc": "Emphatic patties on the patio",
        "phone": "555 4433",
        "address": {
          "country": "Slovakia",
          "city": "Bratislava",
          "street": "Hostel Road",
          "number": 50
        }
      },
      {
        "id": 6,
        "name": "Shelly's Shellfish",
        "desc": "The world's your oyster",
        "phone": "555 2002",
        "address": {
          "country": "Italy",
          "city": "Rome",
          "street": "Via Bogus",
          "number": 43
        }
      }
    ],
    [
      {
        "id": 7,
        "name": "Keith's Quiche",
        "desc": "Farmer's delight",
        "phone": "555 9999",
        "address": {
          "country": "Germany",
          "city": "Bielefeld",
          "street": "Forged Ave",
          "number": 720
        }
      },
      {
        "id": 8,
        "name": "Katie's Cajun",
        "desc": "Southern fried warmth",
        "phone": "555 6789",
        "address": {
          "country": "USA",
          "city": "New Orleans",
          "street": "Mock blvd",
          "number": 3
        }
      }
    ],
    [
      {
        "id": 9,
        "name": "Patty's Patties",
        "desc": "Emphatic patties on the patio",
        "phone": "555 4433",
        "address": {
          "country": "Slovakia",
          "city": "Bratislava",
          "street": "Hostel Road",
          "number": 50
        }
      },
      {
        "id": 10,
        "name": "Shelly's Shellfish",
        "desc": "The world's your oyster",
        "phone": "555 2002",
        "address": {
          "country": "Italy",
          "city": "Rome",
          "street": "Via Bogus",
          "number": 43
        }
      }
    ],
    [
      {
        "id": 11,
        "name": "Patty's Patties",
        "desc": "Emphatic patties on the patio",
        "phone": "555 4433",
        "address": {
          "country": "Slovakia",
          "city": "Bratislava",
          "street": "Hostel Road",
          "number": 50
        }
      },
      {
        "id": 12,
        "name": "Shelly's Shellfish",
        "desc": "The world's your oyster",
        "phone": "555 2002",
        "address": {
          "country": "Italy",
          "city": "Rome",
          "street": "Via Bogus",
          "number": 43
        }
      }
    ],
    [
      {
        "id": 13,
        "name": "Patty's Patties",
        "desc": "Emphatic patties on the patio",
        "phone": "555 4433",
        "address": {
          "country": "Slovakia",
          "city": "Bratislava",
          "street": "Hostel Road",
          "number": 50
        }
      },
      {
        "id": 14,
        "name": "Shelly's Shellfish",
        "desc": "The world's your oyster",
        "phone": "555 2002",
        "address": {
          "country": "Italy",
          "city": "Rome",
          "street": "Via Bogus",
          "number": 43
        }
      }
    ],
    [
      {
        "id": 15,
        "name": "Patty's Patties",
        "desc": "Emphatic patties on the patio",
        "phone": "555 4433",
        "address": {
          "country": "Slovakia",
          "city": "Bratislava",
          "street": "Hostel Road",
          "number": 50
        }
      },
      {
        "id": 16,
        "name": "Shelly's Shellfish",
        "desc": "The world's your oyster",
        "phone": "555 2002",
        "address": {
          "country": "Italy",
          "city": "Rome",
          "street": "Via Bogus",
          "number": 43
        }
      }
    ],
    [
      {
        "id": 17,
        "name": "Patty's Patties",
        "desc": "Emphatic patties on the patio",
        "phone": "555 4433",
        "address": {
          "country": "Slovakia",
          "city": "Bratislava",
          "street": "Hostel Road",
          "number": 50
        }
      },
      {
        "id": 18,
        "name": "Shelly's Shellfish",
        "desc": "The world's your oyster",
        "phone": "555 2002",
        "address": {
          "country": "Italy",
          "city": "Rome",
          "street": "Via Bogus",
          "number": 43
        }
      }
    ],
    [
      {
        "id": 19,
        "name": "Patty's Patties",
        "desc": "Emphatic patties on the patio",
        "phone": "555 4433",
        "address": {
          "country": "Slovakia",
          "city": "Bratislava",
          "street": "Hostel Road",
          "number": 50
        }
      },
      {
        "id": 20,
        "name": "Shelly's Shellfish",
        "desc": "The world's your oyster",
        "phone": "555 2002",
        "address": {
          "country": "Italy",
          "city": "Rome",
          "street": "Via Bogus",
          "number": 43
        }
      }
    ],
    [
      {
        "id": 21,
        "name": "Patty's Patties",
        "desc": "Emphatic patties on the patio",
        "phone": "555 4433",
        "address": {
          "country": "Slovakia",
          "city": "Bratislava",
          "street": "Hostel Road",
          "number": 21
        }
      },
      {
        "id": 22,
        "name": "Shelly's Shellfish",
        "desc": "The world's your oyster",
        "phone": "555 2002",
        "address": {
          "country": "Italy",
          "city": "Rome",
          "street": "Via Bogus",
          "number": 22
        }
      }
    ],
    [
      {
        "id": 23,
        "name": "Patty's Patties",
        "desc": "Emphatic patties on the patio",
        "phone": "555 4433",
        "address": {
          "country": "Slovakia",
          "city": "Bratislava",
          "street": "Hostel Road",
          "number": 23
        }
      },
      {
        "id": 24,
        "name": "Shelly's Shellfish",
        "desc": "The world's your oyster",
        "phone": "555 2002",
        "address": {
          "country": "Italy",
          "city": "Rome",
          "street": "Via Bogus",
          "number": 24
        }
      }
    ],
    [
      {
        "id": 25,
        "name": "Patty's Patties",
        "desc": "Emphatic patties on the patio",
        "phone": "555 4433",
        "address": {
          "country": "Slovakia",
          "city": "Bratislava",
          "street": "Hostel Road",
          "number": 25
        }
      },
      {
        "id": 26,
        "name": "Shelly's Shellfish",
        "desc": "The world's your oyster",
        "phone": "555 2002",
        "address": {
          "country": "Italy",
          "city": "Rome",
          "street": "Via Bogus",
          "number": 26
        }
      }
    ],
  ]