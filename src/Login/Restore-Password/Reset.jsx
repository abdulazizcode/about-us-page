import React from "react";



const Reset = () =>{
    return(
        <main className="main-login__container">
            <div className="login-title__container">
                <h2 className="login-title login-title-extra">Reset Password ?</h2>
                <p className="login-restore-p">
                    An email with a verification code was just send to user@gmail.com
                </p>
            </div>

            <form className="main-form__container">
                 <label>Enter Code</label>
                 <input className="worning-red" type="text" placeholder="Try again later, you reached maximum number of attemtps"/>
             

                 <div className="flex-center">
                     <button className="btn-login btn-extra">Confirm</button>
                 </div>
                 <button className="btn-login-resend">Resend code</button>
            </form>
        </main>
    );
}

export default Reset;