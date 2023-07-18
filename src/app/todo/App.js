import { Navigation } from './components/Navigation/Navigation';
import { Content } from './components/Content/Content';
import { Signin } from './components/Signin/Signin';
import { Register } from './components/Register/Register';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'signin',
      list: 'List #1',
      listData1: [],
      listData2: [],
      listData3: [],
      doneData1: [],
      doneData2: [],
      doneData3: [],
      email: '',
      password: ''
    }
  }

  routing = (list) => {
      if (list === 'list1') {
          this.setState({route: list});
          this.setState({list: 'List #1'});

      } else if (list === 'list2') {
          this.setState({route: list});
          this.setState({list: 'List #2'});

      } else if (list === 'list3') {
          this.setState({route: list});
          this.setState({list: 'List #3'});
      } else if (list === 'register') {
        this.setState({route: list})
      } else if (list === 'signin') {
        this.setState({route: list})
      }
  }

  setData = (list, arrayData) => {
    if (list === 'List #1') {
      this.setState({listData1: arrayData});

    } else if (list === 'List #2') {
        this.setState({listData2: arrayData});

    } else if (list === 'List #3') {
        this.setState({listData3: arrayData});
    }
  }

  saveData = () => {
    fetch('https://to-do-server.adaptable.app/update', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                listData1: this.state.listData1,
                listData2: this.state.listData2,
                listData3: this.state.listData3,

                doneData1: this.state.doneData1,
                doneData2: this.state.doneData2,
                doneData3: this.state.doneData3,
            })
        }).then(res => res.json()).then(data => {
            if (data.status) {
                console.log("successful update", this.state.listData1);
            } else {
              console.log("unsuccessful update")
            }
        })
  }

  setDoneData = (list, arrayData) => {
    if (list === 'List #1') {
      this.setState({doneData1: arrayData});

    } else if (list === 'List #2') {
        this.setState({doneData2: arrayData});

    } else if (list === 'List #3') {
        this.setState({doneData3: arrayData});
    }
  }

  setEmail = (value) => {
    this.setState({email: value});
  }

  setPassword = (value) => {
    this.setState({password: value});
  }

  render() {
    const { route, list, listData1, listData2, listData3, doneData1, doneData2, doneData3, email, password } = this.state;
    return (
      <div>
        {route === 'signin'
          ? <Signin list={list} setDoneData={this.setDoneData} setData={this.setData} routing={this.routing} setEmail={this.setEmail} setPassword={this.setPassword} email={email} password={password}/>
          : route === 'register'
          ? <Register routing={this.routing}/>
          : route === 'list1' 
          ? <div className='App'>
            <Navigation routing={this.routing}/>
            <Content key='1' saveData={this.saveData} setEmail={this.setEmail} setPassword={this.setPassword} routing={this.routing} list={list} listData={listData1} setData={this.setData} setDoneData={this.setDoneData} doneData={doneData1}/>
          </div> 
          : (route === 'list2'
          ? <div className='App'>
                <Navigation routing={this.routing}/>
                <Content key='2' saveData={this.saveData} setEmail={this.setEmail} setPassword={this.setPassword} routing={this.routing} list={list} listData={listData2} setData={this.setData} setDoneData={this.setDoneData} doneData={doneData2}/>
            </div>
          : <div className='App'>
                <Navigation routing={this.routing}/>
                <Content key='3' saveData={this.saveData} setEmail={this.setEmail} setPassword={this.setPassword} routing={this.routing} list={list} listData={listData3} setData={this.setData} setDoneData={this.setDoneData} doneData={doneData3}/>
            </div> 
            )
        }
        
      </div>
    );
  }
}

export default App;
