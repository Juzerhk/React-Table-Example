// import React from 'react';
// // import logo from '../logo.svg';
// import './App.css';
// import { getRestaurantData } from './fetchData';
// import Table from 'react-bootstrap/Table'
// import Spinner from 'react-bootstrap/Spinner'
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// const link = "https://waraclecodetesting.azurewebsites.net/api/restaurants";

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
//          restaurantData: this.filterRestaurantData(data),
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

//   getTable() {
//     console.log('get Table ');
//     return(
//       this.state.restaurantData.length > 0 ?
//             <Table striped bordered hover size="sm">
//               <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Description</th>
//                     <th>Phone</th>
//                     <th colSpan="4" scope="colgroup">Address</th>
//                     </tr>
//                     <tr>
//                     <th scope="col">Country</th>
//                     <th scope="col">City</th>
//                     <th scope="col">Street</th>
//                     <th scope="col">Number</th>
//                   </tr>
//                 </thead>
              
//               { this.state.restaurantData.map((data, index) => 
//                 (
//                   <tbody key={data.id}>
//                       <tr key={"row"+data.id}>
//                         <td key={"name"+data.id}>{data.name}</td>
//                         <td title={data.desc} key={"desc"+data.id}>{this.checkDescriptionLength(data.desc)}</td>
//                         <td key={"phone"+data.id}>{data.phone}</td>
//                         <td key={"country"+data.id}>{data.address.country}</td>
//                         <td key={"city"+data.id}>{data.address.city}</td>
//                         <td key={"street"+data.id}>{data.address.street}</td>
//                         <td key={"number"+data.id}>{data.address.number}</td>
//                       </tr>                 
//                   </tbody>
//                   ) 
//                 ) 
//               }
//             </Table>
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
