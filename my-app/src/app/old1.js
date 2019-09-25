// import React from 'react';
// // import logo from '../logo.svg';
// import './App.css';
// import { getRestaurantData } from './fetchData';
// import ReactTable from 'react-bootstrap/Table';
// // import ReactPagination from "react-js-pagination";
// import Pagination from "react-js-pagination";
// import Spinner from 'react-bootstrap/Spinner'

// const link = "https://waraclecodetesting.azurewebsites.net/api/restaurants";
// const itemsPerPage = 5;
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
// ]

// class App extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       restaurantData: null,
//       activePage: 1,
//       pageRange: 1,
//       updated: false,
//     }
//   }

//   componentDidMount() {
//     getRestaurantData(link)
//       .then(data => (
//         this.setState({
//           restaurantData: this.filterRestaurantData(arr),
//         })
//       ))
//   }

//   /**
//    * Function used to filter the data array as per the criteria
//    * All the cities with bielefeld are filtered out
//    */
//   filterRestaurantData(data) {
//     if (data !== null) {
//       var filteredData = data.flat(Infinity).filter((dataFilter) => dataFilter.address.city !== 'Bielefeld');
//       console.log('filterData', filteredData);
//       return filteredData;
//     } return [];
//   }

//   /**
//    * Function to count the description characters.
//    * If the characters are above 20, it is wrapped by ellipsis 
//    * @param {*} description 
//    */
//   checkDescriptionLength(description) {
//     if (description.length > 20) {
//       description = description.slice(0, 20) + '...';
//       return description;
//     }
//     return description;
//   }

//   getPagination() {
//     const { restaurantData, pageRange } = this.state;

//     return(
//         restaurantData.length<=itemsPerPage ?
//           <Pagination
//             itemClass="page-item"
//             linkClass="page-link"
//             hideNavigation
//             hideFirstLastPages
//             activePage={this.state.activePage}
//             itemsCountPerPage={itemsPerPage}
//             totalItemsCount={restaurantData.length}
//             // pageRangeDisplayed={5}
//             onChange={this.handlePageChange()}
//           />
//           :
//           <Pagination
//             itemClass="page-item"
//             linkClass="page-link"
//             // hideNavigation
//             activePage={this.state.activePage}
//             itemsCountPerPage={itemsPerPage}
//             totalItemsCount={restaurantData.length}
//             pageRangeDisplayed={pageRange}
//             onChange={this.handlePageChange()}
//           />
//     );
//   }

//   handlePageChange() {
//       console.log('active page is');
//       const { restaurantData } = this.state;

//       if(restaurantData.length > 0){

//         var pageRange = Math.ceil(restaurantData.length/itemsPerPage); 
//         console.log('page range', pageRange);
//         if(this.state.updated === false){
//           this.setState({
//             pageRange: pageRange,
//             updated: true,
//           });
//         }    
//       }
//   }


//   /**
//    * Function returns the table along with its content
//    * Also displays error message if data is not available
//    */
//   getTable() {
//     console.log('get Table ', this.state.restaurantData.length);
//     const { restaurantData } = this.state;
//     return (
//       restaurantData.length > 0 ?
//       <div style={{width: '90%'}}>
//         <ReactTable Pagination={Pagination} striped bordered hover size="sm">
//           <thead>
//             <tr>
//               <th row='0' rowSpan="2">Name</th>
//               <th row='0' rowSpan="2">Description</th>
//               <th row='0' rowSpan="2">Phone</th>
//               <th row="0" colSpan="4" scope="colgroup">Address</th>
//             </tr>
//             <tr>
//               <th row='1'>Country</th>
//               <th row='1'>City</th>
//               <th row='1'>Street</th>
//               <th row='1'>Number</th>
//             </tr>
//           </thead>

//           {restaurantData.map((data, index) =>
//             (
//               <tbody key={data.id}>
//                 <tr key={"row" + data.id}>
//                   <td key={"name" + data.id}>{data.name}</td>
//                   <td title={data.desc} key={"desc" + data.id}>{this.checkDescriptionLength(data.desc)}</td>
//                   <td key={"phone" + data.id}>{data.phone}</td>
//                   <td key={"country" + data.id}>{data.address.country}</td>
//                   <td key={"city" + data.id}>{data.address.city}</td>
//                   <td key={"street" + data.id}>{data.address.street}</td>
//                   <td key={"number" + data.id}>{data.address.number}</td>
//                 </tr>
//               </tbody>
//             )
//            )
//          }

//         </ReactTable>
//           {/* {this.getPagination()} */}
//         </div>
//         :
//         <div>
//           Oops, sorry unable to find any data
//         </div>
//     );
//   }
//   render() {

//     console.log('state', this.state.restaurantData);
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h2>Waracle's Restaurant List</h2>
//           {
//             this.state.restaurantData != null ?
//               this.getTable()
//               :
//               <Spinner animation="grow" />
//           }
//         </header>
//       </div>
//     );
//   }
// }
// export default App;
