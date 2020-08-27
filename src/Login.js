import React from "react";
import { GoogleLogin } from "react-google-login";

export default class Login extends React.Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    };

    return (
      <div className="Login">
        <form>
          <fieldset>
            <legend>Login</legend>
            <div>
              <GoogleLogin
                clientId="80581960464-bvpktqd6ocihkc8hlhe0ngup63vgq5ph.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
