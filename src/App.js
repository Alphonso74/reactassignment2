import React, {Component} from 'react';
import './App.css';
import UserOutput from './Components/userOutput/UserOutput';
import UserInput from './Components/userInput/UserInput';
import TitleToolBar from './Components/titleToolBar/TitleToolBar';
import ValidationComponent from './Components/validationComponent/ValidationComponent';
import CharComponent from './Components/charComponents/CharComponents'

class App extends Component {
  state = {

       username: '',
       stringlength: 0


  };



  nameChangedHandler = (event) => {

    this.setState( {
       username: event.target.value,
        stringlength: event.target.value.length

    } );
      // console.log(this.state.length)
  };


  deleteCharHandler = (index) => {

    const text = this.state.username.split('');
    text.splice(index,1);
    const updatedText = text.join('');

    this.setState({
        username: updatedText,
        stringlength: updatedText.length});

  };

  render () {
    const style = {
      backgroundColor: ' light blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const charList = this.state.username.split('').map( (char,index) => {

        return <CharComponent character = {char} key={index} clicked = {() => this.deleteCharHandler(index)}/>
    });

    return (
        <div className="App">

          <TitleToolBar/>

          <UserOutput username = {this.state.username}/>

            {charList}

          <UserInput change = {this.nameChangedHandler} currentName = {this.state.username} stringLength = {this.state.stringlength}/>

          <ValidationComponent stringLength = {this.state.stringlength} />

          <button style={style} onClick={() => window.location.reload(false)}>Refresh Page</button>
        </div>
    );
  }
}

export default App;
