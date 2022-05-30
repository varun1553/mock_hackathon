import React from 'react';

const Signup = () => {
  return (
    <div className="auth__container container">

            <div className="auth__content">
                <h1 className="auth__title">Start exploring camps from all around the world.</h1>

                <form method="get" className="auth__form">
                    <div className="input-group">
                        <label for="username" className="input-group__label">Username</label>
                        <input className="input-group__input" type="text" id="username" placeholder="shruthibandar_05" />
                    </div>
                    <div className="input-group">
                        <label for="password" className="input-group__label">Password</label>
                        <input className="input-group__input" type="password" id="password" placeholder="Choose Password" />
                    </div>
                    <a href="#" className="btn btn--dark btn--block input-group__btn">Create an account</a>
                </form>         

                <a href="./login.html" className="auth__help">
                    Already a user? 
                    <span className="auth__help-span">Sign in</span>
                </a>
            </div>

        </div>
  );
}

export default Signup;