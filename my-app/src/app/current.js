// import React from 'react';
// // import logo from '../logo.svg';
// import './App.css';
// import { getRestaurantData } from './fetchData';
// import ReactTable from 'react-bootstrap/Table';
// import Spinner from 'react-bootstrap/Spinner'

// const link = "https://waraclecodetesting.azurewebsites.net/api/restaurants";
// // const itemsPerPage = 5;


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
//           restaurantData: this.filterRestaurantData(data),
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

//   /**
//    * Function returns the table along with its content
//    * Also displays error message if data is not available
//    */
//   getTable() {
//     console.log('get Table ', this.state.restaurantData.length);
//     const { restaurantData } = this.state;
//     return (
//       restaurantData.length > 0 ?
//         <ReactTable striped bordered hover size="sm">
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


// .App {
//     text-align: center;
//   }
  
//   .App-logo {
//     height: 40vmin;
//   }
  
//   .App-header {
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     background-image: url("./resources/istockphoto-1058741602-1024x1024.jpg");
  
//   }
  
//    h2 {
//     font-family: cursive;
//     /* padding: 2vmin; */
//   }
  
//   .App-link {
//     color: #09d3ac;
//   }
  
//   thead {
//     background: #395870;
//     color: #fff;
//   }
  
//   .pagination{
//     float: right;
//   }
  
//   .page-link{
  
//     color: #09d3ac;
//   }
  