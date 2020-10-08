import React, {Component} from 'react';
import './App.css';
import UserOutput from './Components/userOutput/UserOutput';
import UserInput from './Components/userInput/UserInput';
import TitleToolBar from './Components/titleToolBar/TitleToolBar'

class App extends Component {
  state = {

       username: 'Alphonso74'


  };

  nameChangedHandler = (event) => {
    this.setState( {
      username: event.target.value

    } )
  };


  render () {
    const style = {
      backgroundColor: ' light blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
        <div className="App">

          <TitleToolBar/>

          <UserOutput username = {this.state.username}> Holy Cow Watch it GO! - Two Way Binding! </UserOutput>

          <UserInput change = {this.nameChangedHandler} currentName = {this.state.username}/>

          <button style={style} onClick={() => window.location.reload(false)}>Refresh Page</button>
        </div>
    );
  }
}

export default App;
