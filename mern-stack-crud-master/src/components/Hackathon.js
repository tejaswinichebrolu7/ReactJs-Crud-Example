import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Hackathon extends Component {

  constructor() {
    super();
    this.state = {
      hackathon : {
      name : '',
      status : '',
      startDate : '',
      endDate : '',
      emailAddress : '',
    },
      
    };
  }
  onChange = (e) => {
    const state = this.state.hackathon
    state[e.target.name] = e.target.value;
    this.setState({ hackathon : state });
  }

  componentDidMount() {
    console.log(this.props.match);
    if(this.props.match.params.id){
    axios.get('/api/hackathon/'+this.props.match.params.id)
      .then(res => {
        this.setState({ hackathon : res.data });
        console.log(this.state);
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, status, startDate, endDate, emailAddress } = this.state.hackathon;
    if(this.props.match.params.id == undefined){
    axios.post('/api/hackathon', { name, status, startDate, endDate, emailAddress })
      .then((result) => {
        this.props.history.push("/")
      });
    }
    else{
      axios.put('/api/hackathon/'+this.props.match.params.id, { name, status, startDate, endDate, emailAddress })
      .then((result) => {
        this.props.history.push("/")
      });
    }
  }

  render() {
    const { name, status, startDate, endDate, emailAddress } = this.state.hackathon;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Create hackathon
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Hackathon List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="status">Status:</label>
                <input type="text" class="form-control" name="status" value={status} onChange={this.onChange} placeholder="Status" />
              </div>
              <div class="form-group">
                <label for="startDate">Start Date:</label>
                <input type="date" class="form-control" name="startDate" value={startDate} onChange={this.onChange} placeholder="StartDate" />
              </div>
              <div class="form-group">
                <label for="endDate">End Date:</label>
                <input type="date" class="form-control" name="endDate" value={endDate} onChange={this.onChange} placeholder="End Date" />
              </div>
              <div class="form-group">
                <label for="emailAddress">Email Address:</label>
                <input type="email" class="form-control" name="emailAddress" value={emailAddress} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Hackathon;
