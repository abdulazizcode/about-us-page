import React from "react";



const Restore = () =>{
    return(
        <main className="main-login__container">
            <div className="login-title__container">
                <h2 className="login-title login-title-extra">Forgot you password ?</h2>
                <p className="login-restore-p">
                    Please input your email address
                </p>
            </div>

            <form className="main-form__container">
                 <label>Email Address</label>
                 <input type="email" placeholder="e.g user@email.com"/>
             

                 <div className="flex-center">
                     <button className="btn-login btn-extra">Send me Instructions</button>
                 </div>
                 
            </form>
        </main>
    );
}

export default Restore;