import React, { Component } from 'react'
import onboard from '../images/onboarding-bg.png'
import axios from 'axios'
const LOGIN_URL = 'http://dev3.apppartner.com/Reactors/scripts/user-signup.php'

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            username : '',
            password : '',
            email : '',
            isSignUp: true,
            isPlaceholder: false,
        }
    }

    changeValues = (e) => {
        if(e.target.name==='username'){
            this.setState({username : e.target.value})
        }
        else if(e.target.name==='email'){
            this.setState({email : e.target.value})
        }
        else if(e.target.name==='password'){
            this.setState({password : e.target.value})
        }
    }
    
    LoginOnClick = () => {
      let form = new FormData()
      form.append('username',this.state.email)
      form.append('password',this.state.password)
      form.append('email',this.state.email)
      axios.post(LOGIN_URL, form,{
        headers:{
        'content-type': 'multipart/form-data'//'application/json'
        }
        }).then(res=>{alert('Signup success')})
        .catch(err=> {
        alert('Error!')
        console.warn(err)
      })
    }

    changeActiveTap = (e) => {
        this.setState({isSignUp: !this.state.isSignUp})
    }

    render(){
        return(
        <div className='login'>
            <center className="form-group login-center">
                <table id="signUpLoginTable">
                <tbody>
                <tr>
                  <td>
                    <h3 className={this.state.isSignUp? "active-tap": "anything"} onClick={this.changeActiveTap}>SIGN UP</h3>
                    <h3 className={!this.state.isSignUp? "active-tap": "anything"} onClick={this.changeActiveTap}>LOGIN</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="transparent-inputs">
                      <input className="form-control l user" placeholder='Username' type="text" name="username" onChange={this.changeValues} value={this.state.username} style={(this.state.isSignUp===false)? {display:'none'} : {display:'block'} }/>
                    </div>
                  </td>
                 </tr>
                  <tr>
                    <td>
                      <div className="transparent-inputs">
                        <input className="form-control l email" placeholder='Email' type="text" name="email" onChange={this.changeValues} value={this.state.email} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="transparent-inputs">
                        <input placeholder='Password' className="form-control l pass" name="password" type="password" onChange={this.changeValues} value={this.state.password} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <button className="form-control btn"onClick={this.LoginOnClick}>
                            {(this.state.isSignUp===false)? "LOGIN" : "SIGN UP"}
                      </button>
                    </td>
                  </tr>
                  </tbody>
                  </table>
            </center>
        </div>)
    }
}
