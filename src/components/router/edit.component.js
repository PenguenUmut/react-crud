import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          person_name: '',
          business_name: '',
          business_gst_number:''
        }
    }
    componentDidMount() {
        console.log('Getting data with id for editing..');
        console.log('http://localhost:4000/business/edit/' + this.props.match.params.id);
        this.setState({
            person_name: 'Umut',
            business_name: 'Yazılım',
            business_gst_number: '101'
        });
    }
    onChangePersonName(e) {
      this.setState({
        person_name: e.target.value
      });
    }
    onChangeBusinessName(e) {
      this.setState({
        business_name: e.target.value
      })  
    }
    onChangeGstNumber(e) {
      this.setState({
        business_gst_number: e.target.value
      })
    }
    onSubmit(e) {
      e.preventDefault();
      const obj = {
        person_name: this.state.person_name,
        business_name: this.state.business_name,
        business_gst_number: this.state.business_gst_number
      };
      console.log('Updating data with PUT method with id and object..');
      console.log('http://localhost:8080/api/business/' + this.props.match.params.id, obj);
      this.props.history.push('/index');
    }
    render() {
      return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input type="text" className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName} />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" className="form-control" 
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName} />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" className="form-control" 
                      value={this.state.business_gst_number}
                      onChange={this.onChangeGstNumber} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Update Business" className="btn btn-primary"/>
                </div>
            </form>
        </div>
      )
    }
}

export default Edit;