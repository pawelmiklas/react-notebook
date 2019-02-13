import React, { Component } from 'react';
import Header from './header/Header';
import List from './list/List';
import { GlobalStyle, GlobalStyleBody } from './Style';

class App extends Component {
  state = {
    data: [
      { id: 0, text: 'Go fishing in the Northwest Territories', date: '2021-11-07', color: 'red', isDone: false },
      { id: 1, text: 'Learn to ski', date: '2019-06-15', color: 'blue', isDone: false },
      { id: 2, text: 'Explore all 5 of Hawaii’s islands', date: '2019-11-01', color: 'green', isDone: true },
    ],
    textValue: '',
    colorValue: 'green',
    dateValue: new Date().toISOString().split("T")[0],
  }

  handleForm = (e) => {
    const type = e.target.type;
    const value = e.target.value;
    if (type === 'select-one') {
      this.setState({
        colorValue: value
      })
    } else if (type === 'date') {
      this.setState({
        dateValue: value
      })
    } else if (type === 'text') {
      this.setState({
        textValue: value
      })
    }
  }

  handlePushData = (e) => {
    e.preventDefault();
    if (this.state.textValue.length > 3) {
      const length = this.state.data.length;
      const data = this.state.data;
      const newitem = { id: length + 1, text: this.state.textValue, date: this.state.dateValue, color: this.state.colorValue };
      data.push(newitem);
      this.setState({
        data,
        textValue: '',
        colorValue: 'green',
        dateValue: new Date().toISOString().split("T")[0],
      })
    } else {
      alert('Your task is to short!');
    }
  }

  handleRemoveItem = (e) => {
    const id = e;
    const data = this.state.data;
    const newData = data.filter(item => item.id !== id);
    this.setState({
      data: newData
    })
  }

  handleIsDoneItem = (e) => {
    const id = e;
    const data = this.state.data;
    data.forEach(item => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
    });
    this.setState({
      data
    })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <GlobalStyleBody />
        <Header
          textValue={this.state.textValue}
          dateValue={this.state.dateValue}
          colorValue={this.state.colorValue}
          change={this.handleForm}
          submit={this.handlePushData}
        />
        <List
          data={this.state.data}
          remove={this.handleRemoveItem}
          done={this.handleIsDoneItem}
        />
      </>
    );
  }
}

export default App;
