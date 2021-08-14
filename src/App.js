import './App.css';
import { Component } from 'react';
import Form from './components/form';
import Header from './components/header';
import Instructions from './components/instructions';
import Result from './components/result';

export default class App extends Component {
  
  state = {
    result: null
  }
    
    onSubmit = (rawText) => {
      this.setState({
        result: rawText
      })
    }
  
  render(){

    const { result } = this.state;

    return(
      <>
        <Header/>
        <Instructions/>
        <Form onSubmit={ this.onSubmit }/>
        <Result content={ result } 
        onSubmit={ this.onSubmit }/>
      </>
    )
  }
}

