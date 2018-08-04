import React, { Component } from 'react';

import { Home, Form, Confirm } from './components';

import './App.css';

// Pages
const HOME = 'home';
const FORM = 'form';
const CONFIRM = 'confirm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: HOME };

    this.register = this.register.bind(this);
    this.save = this.save.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  register() {
    this.setState({ page: FORM });
  }

  save(person) {
    // Check if person is valid

    // Goto to Confirm page
    this.setState({
      page: CONFIRM,
      person,
    });
  }

  confirm(person) {
    console.log('sent',person);
    alert("Sent");
  }

  render() {
    return (
      <div className="Router">
        { this.state.page === HOME && <Home register={this.register} /> }
        { this.state.page === FORM && <Form save={this.save} person={this.state.person} /> }
        { this.state.page === CONFIRM && <Confirm confirm={this.confirm} /> }
      </div>
    );
  }
}

export default App;
