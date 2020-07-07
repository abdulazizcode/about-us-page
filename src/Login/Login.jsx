import React from "react";
import "./Login.css";


const Login = () =>{
    return(
        <main className="main-login__container">
            <div className="login-title__container">
                <h2 className="login-title">Login</h2>
                <p> Tap into data that helps you grow.
                    Check on sales,chart you progress adn attact new 
                    customers with special offers.
                </p>
            </div>

            <form className="main-form__container">
                 <label>Email</label>
                 <input type="email" placeholder="e.g user@email.com"/>
                 <div className="flex-align">
                   <a href="#" className="forgot-password">Forgot your password?</a>
                 </div>
                 <label>Password</label>
                 <input type="password" placeholder ="e.g. ************"/>

                 <div className="flex-center">
                     <button className="btn-login">Login</button>
                 </div>
                 
            </form>
        </main>
    );
}

export default Login;