import React, { Component } from 'react';
import TableRow from '../TableRow';

class Index extends Component {
    constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
        console.log('Getting datas with GET method without params..');
        console.log('http://localhost:8080/api/business');
        this.setState({
            business : [{
                _id:1,
                person_name: 'Umut',
                business_name: 'Development',
                business_gst_number: '101'
                },{
                _id:2,
                person_name: 'Penguen',
                business_name: 'Other',
                business_gst_number: '202'
                },{
                _id:3,
                person_name: 'Person Name',
                business_name: 'Business Name',
                business_gst_number: '303'
                }]
        });
    }
    tabRow(){
      return this.state.business.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }
    render() {
      return (
        <div>
          <h3 align="center">Business List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Person</th>
                <th>Business</th>
                <th>GST Number</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }

  export default Index;