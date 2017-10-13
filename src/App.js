import React, { Component } from 'react';
import { Select } from 'antd';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  const sqrt = Math.sqrt(i);
  if (Math.round(sqrt) === sqrt) {
    children.push(<Option key={i.toString(36) + i} disabled={true}>{i.toString(36) + i}</Option>)
  } else {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['g16', 'p25']}
          onChange={handleChange}
        >
          {children}
        </Select>
      </div>
    );
  }
}

export default App;
