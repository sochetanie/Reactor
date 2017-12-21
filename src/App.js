import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import LoginPage from './components/Login'
import WhatWeDo from './components/WhatWeDo'
import image3 from './images/3.png'
import image4 from './images/4.png'
import image5 from './images/5.png'
import image6 from './images/6.png'
import CenterSection from './components/CenterSection'
import {Jumbotron, Navbar, Nav, NavItem} from 'react-bootstrap'
const API_URL = 'http://dev3.apppartner.com/Reactors/scripts/add-email.php'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      email:'',
      showLoginSection: false,
    }
  }

  changeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  subscribe = () => {
    let data = new FormData()
    data.append('email', this.state.email)
    axios.post(API_URL, data, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(res=>{
      alert(res.data.message)
    })
  }

  Login = () => {
    this.setState({showLoginSection: !this.state.showLoginSection})
  }

  render() {
    return (
      <div className="App">
        <div hidden={(this.state.showLoginSection===true)?true:false}>
        <Jumbotron className='Jumbotron'>
          <Navbar className='navbar'>
            <Nav pullLeft>
                <NavItem>
                  <p>Reactor</p>
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem>
                  <a onClick={this.Login}>Log In</a>
                </NavItem>
              </Nav>
          </Navbar>
          <h1>Hello, welcome to Reactor</h1>
        </Jumbotron></div>
        {(this.state.showLoginSection===false) ? <div>
          <WhatWeDo />
          < CenterSection />
          <div className='cities'>
          <div className='cities-phrase'>
            <h4>Maui By Air The Best Way Around The Island</h4>
          </div>
          <div className="row city" >
              <div className="col-lg-3">
                  <img  alt='alla' src={image3}/>
                  <h4>East Josianefurt</h4>
                  <small>085 Daron Via</small>
              </div>
              <div className="col-lg-3">
                  <img  alt='alla' src={image4}/>
                <h4>South Christopherport</h4>
                <small>162 Chandler Ville</small>
              </div>
              <div className="col-lg-3">
                <img alt='alla' src={image5}/>
                <h4>Concepcionbury</h4>
                <small>7643 Kylie Burgs</small>
              </div>
              <div className="col-lg-3">
                <img alt='alla' src={image6}/>
                <h4>Reychester</h4>
                <small>5590 Gabe Views Apt. 044</small>
              </div>
            </div>
          <hr />
        </div>
        <div className="row">
          <table className="table">
            <thead className='thead'> 
              <h2>SUBSCRIBE TO NEWSLETTER</h2>
            </thead>
              <tr>
                <td>
                  <input className='news' name="email" value={this.state.email} onChange={this.changeEmail} placeholder='Your Email'/>
                  <button className="btn btn-round-lg btn-primary" onClick={this.subscribe}>Subscribe</button>
                </td>
              </tr>
            </table>
        </div>
           </div>: null
        }
        {(this.state.showLoginSection === false) ?
          <footer className='footer'>
            <div className='footerP'>
              <p>Footer</p>
            </div>
          </footer> : null
        }
        {(this.state.showLoginSection) ? 
          <div>
            <div>
              <span onClick={this.Login} className='reactorSpan'>Reactor</span>
            </div>
            <LoginPage />
          </div> : null
        }
    </div>
    )
  }
}

