import React from "react";
import { GoogleLogin } from "react-google-login";

export default class Login extends React.Component {
  responseGoogle = (response) => {
    console.log(response);
  };
  render() {
    return (
      <div className="Login">
        <form>
          <fieldset>
            <legend>Login</legend>
            <label>
              User name:{"  "}
              <input
                type="text"
                name="user"
                id="user"
                aria-label="Enter your user name"
                aria-required="true"
                required
              ></input>
            </label>
            <br />
            <label>
              Password:{"  "}
              <input type="password" />
            </label>
            <div>
              <button type="button">Login</button>
            </div>
            <div>
              <GoogleLogin
                onSuccess={this.responseGoogle()}
                onFailure={this.responseGoogle()}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
