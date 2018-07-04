import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hackathons: []
    };
    this.deleteHackathon = this.deleteHackathon.bind(this);
  }

  componentDidMount() {
    axios.get('/api/hackathon')
      .then(res => {
        this.setState({ hackathons: res.data });
        console.log(this.state.hackathons);
      });
  }

  deleteHackathon(id){
    console.log("coming.............");
    axios.delete('/api/hackathon/'+id )
      .then(res => {
        console.log("coming");
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Hackathon entries
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/hackathon"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Hackathon</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Email address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.hackathons.map(hackathon =>
                  <tr>
                    <td><Link to={`/show/${hackathon._id}`}>{hackathon.name}</Link></td>
                    <td>{hackathon.status}</td>
                    <td>{hackathon.startDate}</td>
                    <td>{hackathon.endDate}</td>
                    <td>{hackathon.emailAddress}</td>
                    <td>
                    <a href={`/show/${hackathon._id}`} class="glyphicon glyphicon-eye-open"></a>
                    <a href={`/edit/${hackathon._id}`} class="glyphicon glyphicon-pencil"></a>
                    <a onclick={this.deleteHackathon(hackathon._id)} class="glyphicon glyphicon-trash"></a> 
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
