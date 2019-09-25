// import React from 'react';
// // import logo from '../logo.svg';
// import './App.css';
// import { getRestaurantData } from './fetchData';
// import Spinner from 'react-bootstrap/Spinner'
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// const link = "https://waraclecodetesting.azurewebsites.net/api/restaurants";

// const arr = [
//   [
//     {
//       "id": 1,
//       "name": "Chunky Cheese",
//       "desc": "Say cheese!",
//       "phone": "555 0505",
//       "address": {
//         "country": "USA",
//         "city": "Quahog",
//         "street": "Spooner St",
//         "number": 42
//       }
//     },
//     {
//       "id": 2,
//       "name": "Pete's Pizza",
//       "desc": "Enjoy a tasty slice of life",
//       "phone": "555 8384",
//       "address": {
//         "country": "UK",
//         "city": "London",
//         "street": "Fake St",
//         "number": 66
//       }
//     }
//   ],
//   [
//     {
//       "id": 3,
//       "name": "Sally's Seafood",
//       "desc": "Yarg maytee. Feast yer gills on our octopus pie",
//       "phone": "555 0987",
//       "address": {
//         "country": "Portugal",
//         "city": "Lisbon",
//         "street": "Phony Road",
//         "number": 123
//       }
//     },
//     {
//       "id": 4,
//       "name": "Billy's Burgers",
//       "desc": "Joy between the buns",
//       "phone": "555 5748",
//       "address": {
//         "country": "Germany",
//         "city": "Bielefeld",
//         "street": "Phony Road",
//         "number": 51
//       }
//     }
//   ],
//   [
//     {
//       "id": 5,
//       "name": "Patty's Patties",
//       "desc": "Emphatic patties on the patio",
//       "phone": "555 4433",
//       "address": {
//         "country": "Slovakia",
//         "city": "Bratislava",
//         "street": "Hostel Road",
//         "number": 50
//       }
//     },
//     {
//       "id": 6,
//       "name": "Shelly's Shellfish",
//       "desc": "The world's your oyster",
//       "phone": "555 2002",
//       "address": {
//         "country": "Italy",
//         "city": "Rome",
//         "street": "Via Bogus",
//         "number": 43
//       }
//     }
//   ],
//   [
//     {
//       "id": 7,
//       "name": "Keith's Quiche",
//       "desc": "Farmer's delight",
//       "phone": "555 9999",
//       "address": {
//         "country": "Germany",
//         "city": "Bielefeld",
//         "street": "Forged Ave",
//         "number": 720
//       }
//     },
//     {
//       "id": 8,
//       "name": "Katie's Cajun",
//       "desc": "Southern fried warmth",
//       "phone": "555 6789",
//       "address": {
//         "country": "USA",
//         "city": "New Orleans",
//         "street": "Mock blvd",
//         "number": 3
//       }
//     }
//   ],
//   [
//     {
//       "id": 9,
//       "name": "Patty's Patties",
//       "desc": "Emphatic patties on the patio",
//       "phone": "555 4433",
//       "address": {
//         "country": "Slovakia",
//         "city": "Bratislava",
//         "street": "Hostel Road",
//         "number": 50
//       }
//     },
//     {
//       "id": 10,
//       "name": "Shelly's Shellfish",
//       "desc": "The world's your oyster",
//       "phone": "555 2002",
//       "address": {
//         "country": "Italy",
//         "city": "Rome",
//         "street": "Via Bogus",
//         "number": 43
//       }
//     }
//   ],
//   [
//     {
//       "id": 11,
//       "name": "Patty's Patties",
//       "desc": "Emphatic patties on the patio",
//       "phone": "555 4433",
//       "address": {
//         "country": "Slovakia",
//         "city": "Bratislava",
//         "street": "Hostel Road",
//         "number": 50
//       }
//     },
//     {
//       "id": 12,
//       "name": "Shelly's Shellfish",
//       "desc": "The world's your oyster",
//       "phone": "555 2002",
//       "address": {
//         "country": "Italy",
//         "city": "Rome",
//         "street": "Via Bogus",
//         "number": 43
//       }
//     }
//   ],
//   [
//     {
//       "id": 13,
//       "name": "Patty's Patties",
//       "desc": "Emphatic patties on the patio",
//       "phone": "555 4433",
//       "address": {
//         "country": "Slovakia",
//         "city": "Bratislava",
//         "street": "Hostel Road",
//         "number": 50
//       }
//     },
//     {
//       "id": 14,
//       "name": "Shelly's Shellfish",
//       "desc": "The world's your oyster",
//       "phone": "555 2002",
//       "address": {
//         "country": "Italy",
//         "city": "Rome",
//         "street": "Via Bogus",
//         "number": 43
//       }
//     }
//   ],
//   [
//     {
//       "id": 15,
//       "name": "Patty's Patties",
//       "desc": "Emphatic patties on the patio",
//       "phone": "555 4433",
//       "address": {
//         "country": "Slovakia",
//         "city": "Bratislava",
//         "street": "Hostel Road",
//         "number": 50
//       }
//     },
//     {
//       "id": 16,
//       "name": "Shelly's Shellfish",
//       "desc": "The world's your oyster",
//       "phone": "555 2002",
//       "address": {
//         "country": "Italy",
//         "city": "Rome",
//         "street": "Via Bogus",
//         "number": 43
//       }
//     }
//   ],
//   [
//     {
//       "id": 17,
//       "name": "Patty's Patties",
//       "desc": "Emphatic patties on the patio",
//       "phone": "555 4433",
//       "address": {
//         "country": "Slovakia",
//         "city": "Bratislava",
//         "street": "Hostel Road",
//         "number": 50
//       }
//     },
//     {
//       "id": 18,
//       "name": "Shelly's Shellfish",
//       "desc": "The world's your oyster",
//       "phone": "555 2002",
//       "address": {
//         "country": "Italy",
//         "city": "Rome",
//         "street": "Via Bogus",
//         "number": 43
//       }
//     }
//   ],
//   [
//     {
//       "id": 19,
//       "name": "Patty's Patties",
//       "desc": "Emphatic patties on the patio",
//       "phone": "555 4433",
//       "address": {
//         "country": "Slovakia",
//         "city": "Bratislava",
//         "street": "Hostel Road",
//         "number": 50
//       }
//     },
//     {
//       "id": 20,
//       "name": "Shelly's Shellfish",
//       "desc": "The world's your oyster",
//       "phone": "555 2002",
//       "address": {
//         "country": "Italy",
//         "city": "Rome",
//         "street": "Via Bogus",
//         "number": 43
//       }
//     }
//   ],
//   [
//     {
//       "id": 21,
//       "name": "Patty's Patties",
//       "desc": "Emphatic patties on the patio",
//       "phone": "555 4433",
//       "address": {
//         "country": "Slovakia",
//         "city": "Bratislava",
//         "street": "Hostel Road",
//         "number": 21
//       }
//     },
//     {
//       "id": 22,
//       "name": "Shelly's Shellfish",
//       "desc": "The world's your oyster",
//       "phone": "555 2002",
//       "address": {
//         "country": "Italy",
//         "city": "Rome",
//         "street": "Via Bogus",
//         "number": 22
//       }
//     }
//   ],
//   [
//     {
//       "id": 23,
//       "name": "Patty's Patties",
//       "desc": "Emphatic patties on the patio",
//       "phone": "555 4433",
//       "address": {
//         "country": "Slovakia",
//         "city": "Bratislava",
//         "street": "Hostel Road",
//         "number": 23
//       }
//     },
//     {
//       "id": 24,
//       "name": "Shelly's Shellfish",
//       "desc": "The world's your oyster",
//       "phone": "555 2002",
//       "address": {
//         "country": "Italy",
//         "city": "Rome",
//         "street": "Via Bogus",
//         "number": 24
//       }
//     }
//   ],
//   [
//     {
//       "id": 25,
//       "name": "Patty's Patties",
//       "desc": "Emphatic patties on the patio",
//       "phone": "555 4433",
//       "address": {
//         "country": "Slovakia",
//         "city": "Bratislava",
//         "street": "Hostel Road",
//         "number": 25
//       }
//     },
//     {
//       "id": 26,
//       "name": "Shelly's Shellfish",
//       "desc": "The world's your oyster",
//       "phone": "555 2002",
//       "address": {
//         "country": "Italy",
//         "city": "Rome",
//         "street": "Via Bogus",
//         "number": 26
//       }
//     }
//   ],
// ]

// class App extends React.Component {
  
// constructor() {
//   super()
//   this.state = {
//     restaurantData: null,
//   }
// }

// componentDidMount() {
//   console.log('CDM started');
//   getRestaurantData(link)
//     .then(data => (
//       this.setState({
//         // restaurantData: this.filterRestaurantData(arr),
//         restaurantData: this.filterRestaurantData(data),
//       })  
//     ))
//   console.log('CDM ended');
//   }

  
//   filterRestaurantData(data) {
//     console.log('filterRestaurantData ', data);
//     if (data !== null) {
//       var filteredData = data.flat(Infinity).filter((dataFilter) => dataFilter.address.city !== 'Bielefeld');
//       console.log('filterData', filteredData);
//       return filteredData;      
//     } return [];
//   }

//   checkDescriptionLength(desc) {
//     console.log('Description',desc, desc.length);
//     if(desc.length > 20) {
//       desc = desc.slice(0, 20) + '...';
//       return desc;
//     }
//     return desc;
//   }

//   showDescription(cell, row, name) {
//     if(name === 'country'){
//       return cell.country;
//     } else if (name === 'city'){
//       return cell.city;
//     } else if (name === 'street'){
//       return cell.street;
//     } else if (name === 'number'){
//       return cell.number;
//     }
//   }
  
//   // renderShowsTotal(start, to, total) {
//   //   return (
//   //     <p style={ { color: '#007bff', marginLeft: '-5rem'} }>
//   //       <h4>Displaying rows from { start } to { to }, Total is { total }</h4>
//   //     </p>
//   //   );
//   // }

//   getTable() {
//     const { restaurantData } = this.state;
//     console.log('get Boot', this.state.restaurantData);
//     const add = this.state.restaurantData.map((data) => data.address);
//     console.log('add',add);

//     const options = {
//       page: 1,  // which page you want to show as default
//       sizePerPageList: [ {
//         text: '5', value: 5
//       }, {
//         text: '10', value: 10
//       }, {
//         text: 'All', value:  restaurantData.length
//       } ], // you can change the dropdown list for size per page
//       sizePerPage: 5,  // which size per page you want to locate as default
//       pageStartIndex: 1, // where to start counting the pages
//       paginationSize: 3,  // the pagination bar size.
//       prePage: 'Prev', // Previous page button text
//       nextPage: 'Next', // Next page button text
//       firstPage: 'First', // First page button text
//       lastPage: 'Last', // Last page button text
//       paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
//       paginationPosition: 'bottom'  // default is bottom, top and both is all available
//       // hideSizePerPage: true > You can hide the dropdown for sizePerPage
//       // alwaysShowAllBtns: true // Always show next and previous button
//       // withFirstAndLast: false > Hide the going to First and Last page button
//     };


//     return(
//       restaurantData.length > 0 ?

//             <BootstrapTable data={ restaurantData} pagination={ true } options={ options }  >
//               <TableHeaderColumn row='0' rowSpan="2" isKey dataField='name'>Name</TableHeaderColumn>
//               <TableHeaderColumn row='0' rowSpan="2" dataField='desc' columnTitle={restaurantData.map((data) => data.desc)} dataFormat={(cell, row)=>this.checkDescriptionLength(cell,row)}>Description</TableHeaderColumn>
//               <TableHeaderColumn row='0' rowSpan="2" dataField='phone'>Phone</TableHeaderColumn>
//               <TableHeaderColumn row='0' colSpan="4" >Address</TableHeaderColumn>
//               <TableHeaderColumn row='1' dataField="address" dataFormat={(cell, row)=>this.showDescription(cell,row,'country')}>Country</TableHeaderColumn>
//               <TableHeaderColumn row='1' dataField="address" dataFormat={(cell, row) => this.showDescription(cell,row,'city')}>City</TableHeaderColumn>
//               <TableHeaderColumn row='1' dataField="address" dataFormat={(cell, row) => this.showDescription(cell,row,'street')}>Street</TableHeaderColumn>
//               <TableHeaderColumn row='1' dataField="address" dataFormat={(cell, row) => this.showDescription(cell,row,'number')}>Number</TableHeaderColumn>
//             </BootstrapTable>
//               // <theadnumber
//               //     <tr>
//               //       <th>Name</th>
//               //       <th>Description</th>
//               //       <th>Phone</th>
//               //       <th colSpan="4" scope="colgroup">Address</th>
//               //       </tr>
//               //       <tr>
//               //       <th scope="col">Country</th>
//               //       <th scope="col">City</th>
//               //       <th scope="col">Street</th>
//               //       <th scope="col">Number</th>
//               //     </tr>
//               //   </thead>
              
//               // { this.state.restaurantData.map((data, index) => 
//               //   (
//               //     <tbody key={data.id}>
//               //         <tr key={"row"+data.id}>
//               //           <td key={"name"+data.id}>{data.name}</td>
//               //           <td title={data.desc} key={"desc"+data.id}>{this.checkDescriptionLength(data.desc)}</td>
//               //           <td key={"phone"+data.id}>{data.phone}</td>
//               //           <td key={"country"+data.id}>{data.address.country}</td>
//               //           <td key={"city"+data.id}>{data.address.city}</td>
//               //           <td key={"street"+data.id}>{data.address.street}</td>
//               //           <td key={"number"+data.id}>{data.address.number}</td>
//               //         </tr>                 
//               //     </tbody>
//               //     ) 
//               //   ) 
//               // }
//             // </BootstrapTable>
//             : 
//               <div>
//                 Oops, sorry unable to find any data
//               </div>
//           );
//   }
//   render() {
    
//   console.log('state', this.state.restaurantData);
//       return (
//       <div className="App">
//         <header className="App-header">
//          <h2>Waracle's Restaurant List</h2> 
//          {
//            this.state.restaurantData != null ?
//             this.getTable()
//             :
//             <Spinner animation="grow" />
//           }
//         </header>
//       </div>
//     );
//   }
// }
// export default App;
