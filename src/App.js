import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import './main.css';
import Privacy from "./Privacy/Privacy";
import Terms from "./Terms/Terms";
import Cookie from "./Cookie/Cookie";
import { BrowserRouter, Route } from "react-router-dom";



const App = () =>{
    return(
        <BrowserRouter>
                 <main>
                    <Header/>
                    <Route path='/about' component={About}></Route>
                    <Route path='/privacy' component={Privacy}></Route>
                    <Route path='/terms' component={Terms}></Route>
                    <Route path='/cookie' component={Cookie}></Route>
                    <Footer/>
                </main>
        </BrowserRouter>

    );
}

export default App;