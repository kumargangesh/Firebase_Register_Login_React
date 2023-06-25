import React from 'react';
import "./FirstFile.css";

function First(props) {
  return (
    <div>
        <form className="form" onSubmit={props.create}>
            <h2>Registration Form</h2>
            <p>{props.status}</p>
            <button type="buttom" className="b1">Google</button>
            <button type="buttom" className="b2">Facebook</button>
            <input type="text" name="USERNAME" placeholder="UserName" className="i1"/>
            <input type="email" name="EMAIL" placeholder="Email" className="i1"/>
            <input type="password" name="PASSWORD" placeholder="Password" className="i1"/>
            <button type="submit" className="b3">CREATE ACCOUNT</button>
            <a href="#" onClick={props.toggle}>Already have an account</a>
        </form>
    </div>
  )
}

export default First;
