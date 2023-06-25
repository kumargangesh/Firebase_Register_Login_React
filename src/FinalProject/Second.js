import React from 'react';
import "./FirstFile.css";

function Second(props) {
  return (
    <div>
        <form className="form" onSubmit={props.login}>
            <h2>Login Form</h2>
            <p>{props.status}</p>
            <button type="buttom" className="b1">Google</button>
            <button type="buttom" className="b2">Facebook</button>
            <input type="email" name="EMAIL" placeholder="Email" className="i1"/>
            <input type="password" name="PASSWORD" placeholder="Password" className="i1"/>
            <button type="submit" className="b3">LOG IN</button>
            <a href="#" onClick={props.toggle}>New, Create an account</a>
        </form>
    </div>
  )
}

export default Second;
