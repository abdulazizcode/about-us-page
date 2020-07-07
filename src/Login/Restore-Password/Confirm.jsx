import React from "react";



const Confirm = () =>{
    return(
        <main className="main-login__container">
            <div className="login-title__container">
                <h2 className="login-title login-title-extra">Reset Password</h2>
                <p className="login-restore-p">
                    Please input your email address to 
                    sent you code to you email to confirm you email address
                </p>
            </div>

            <form className="main-form__container">
                 <label>Email Address</label>
                 <input type="email" placeholder="e.g user@email.com"/>
             

                 <div className="flex-center">
                     <button className="btn-login btn-login-reset">Confirm</button>
                 </div>
                 <button className="btn-login-resend">Resend code</button>
                 
            </form>
        </main>
    );
}

export default Confirm;