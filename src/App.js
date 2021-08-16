import './App.css';
import { Component } from 'react';
import Form from './components/form';
import Header from './components/header';
import Instructions from './components/instructions';
import Result from './components/result';

export default class App extends Component {
  
  state = {
    result: null,
    level: 4
  }

  onLevelChange = (newLevel) => {
    this.setState({ 
      level: newLevel 
    })
  }

  kurwafikacja = (rawText) => {
    
    const { level } = this.state,
          rawArray = rawText.split(' '),
          kurwa = 'kurwa';

    let finalArray = [],
        finalText = '',
        chunk = [];

    do{
      chunk = rawArray.splice(0, level);
      if(chunk.length >= level) chunk.push(kurwa);
      finalArray = finalArray.concat(chunk);
    } while (chunk.length > level)


    finalText = finalArray.join(' ');

    this.setState({
      result: finalText
    })


  }
  
  render(){

    const { result, level } = this.state;

    return(
      <>
        <Header/>
        <Instructions/>
        <Form 
          onSubmit={ this.kurwafikacja } 
          lvl={ level }
          onLevelChange = { this.onLevelChange }
          />
        { result ? <Result content={ result } /> : null }
      </>
    )
  }
}

