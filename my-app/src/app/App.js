import React from 'react';
import './App.css';
import { getRestaurantData } from './fetchData';
import Spinner from 'react-bootstrap/Spinner'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const link = "https://waraclecodetesting.azurewebsites.net/api/restaurants";

class App extends React.Component {
  _isMounted= false;

constructor() {
  super()
  this.state = {
    restaurantData: null,
  }
}

componentDidMount() {
    this._isMounted = true;

  getRestaurantData(link)
    .then(data => { 
        if(this._isMounted) {
            this.setState({
              /* Import bigArray from fetchData.js to display more data in the table and
                  then uncomment Line A and comment Line B
              */
              // restaurantData: this.filterRestaurantData(bigArray),  // Line A
              restaurantData: this.filterRestaurantData(data),  // Line B
            })  
          }
      })
  }
  
  componentWillUnmount(){
    this._isMounted = false;
  }

  flattenArray(array, depth, currentDepth = 0) {
    if (currentDepth === depth) {
      return array;
    }
  
    return array.reduce((acc, item) => {
      return acc.concat(
        Array.isArray(item) ? this.flattenArray(item, depth, currentDepth + 1) : item
      );
    }, []);
  }

  /**
   * Function used to filter the data array as per the criteria
   * All the cities with bielefeld are filtered out
   */
  filterRestaurantData(data) {
    // Uncomment the console statements in this func to see the difference
    // console.log('Before Filtering', data);

    if (data !== null) {
        var filteredData =  this.flattenArray(data).filter((dataFilter) => dataFilter.address.city !== 'Bielefeld');
        /* Wanted to use .flat() of javascript which flattens the array but it throws error
           when running the test case since it only works with latest browser hence not using it 
        */
        // var filteredData = data.flat(Infinity).filter((dataFilter) => dataFilter.address.city !== 'Bielefeld');
        // console.log('After Filtering', filteredData);
        return filteredData;      
    } return [];
  }

  checkDescriptionLength(desc) {
    if(desc.length > 20) {
      desc = desc.slice(0, 20) + '...';
      return desc;
    }
    return desc;
  }

  showDescription(cell, row, name) {
    if(name === 'country'){
      return cell.country;
    } else if (name === 'city'){
      return cell.city;
    } else if (name === 'street'){
      return cell.street;
    } else if (name === 'number'){
      return cell.number;
    }
  }

    /**
   * Function returns the table along with its content
   * Also displays error message if data is not available
   */
  getTable() {
    const { restaurantData } = this.state;

    const options = {
        page: 1,  // which page you want to show as default
        sizePerPageList: [ {
          text: '5', value: 5
        }, {
          text: '10', value: 10
        }, {
          text: 'All', value:  restaurantData.length
        } ], // you can change the dropdown list for size per page
        sizePerPage: 5,  // which size per page you want to locate as default
        pageStartIndex: 1, // where to start counting the pages
        paginationSize: 3,  // the pagination bar size.
        prePage: 'Prev', // Previous page button text
        nextPage: 'Next', // Next page button text
        firstPage: 'First', // First page button text
        lastPage: 'Last', // Last page button text
        paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
        paginationPosition: 'bottom'  // default is bottom, top and both is all available
        // hideSizePerPage: true > You can hide the dropdown for sizePerPage
        // alwaysShowAllBtns: true // Always show next and previous button
        // withFirstAndLast: false > Hide the going to First and Last page button
      };

    return(
      restaurantData.length > 0 ?
            <BootstrapTable data={restaurantData} pagination={ true } options={ options } >
              <TableHeaderColumn row='0' rowSpan="2" isKey dataField='name'>Name</TableHeaderColumn>
              <TableHeaderColumn row='0' rowSpan="2" dataField='desc' columnTitle>Description</TableHeaderColumn>
              <TableHeaderColumn row='0' rowSpan="2" dataField='phone'>Phone</TableHeaderColumn>
              <TableHeaderColumn row='0' colSpan="4" thStyle={ { textAlign: 'center' } } >Address</TableHeaderColumn>
              <TableHeaderColumn row='1' dataField="address" dataFormat={(cell, row)=>this.showDescription(cell,row,'country')}>Country</TableHeaderColumn>
              <TableHeaderColumn row='1' dataField="address" dataFormat={(cell, row) => this.showDescription(cell,row,'city')}>City</TableHeaderColumn>
              <TableHeaderColumn row='1' dataField="address" dataFormat={(cell, row) => this.showDescription(cell,row,'street')}>Street</TableHeaderColumn>
              <TableHeaderColumn row='1' dataField="address" dataFormat={(cell, row) => this.showDescription(cell,row,'number')}>Number</TableHeaderColumn>
            </BootstrapTable>
            : 
            <div>
              Oops, sorry unable to find any data
            </div>
          );
    }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <a href="/" >
              <img src={require('./resources/52172.svg')} alt=""></img>
            </a>
            <h2>Waracle's Restaurant List</h2> 
            {
              this.state.restaurantData != null ?
                this.getTable()
                :
                <Spinner animation="grow" />
              }
          </header>
          <footer style={{fontStyle: 'italic'}}>
            ©Copyright 2019 Juzer Kanchwala All Rights Reserved
          </footer>
        </div>
      );
    }
}
export default App;
