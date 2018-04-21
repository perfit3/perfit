import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Components
import Landing from '../components/landing/landing'
import Header from '../components/header'
import Footer from '../components/footer'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component ={Landing}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;