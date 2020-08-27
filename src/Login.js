import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default class Login extends React.Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    };

    const logout = () => {
      console.log("logged out");
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

              <GoogleLogout
                clientId="80581960464-bvpktqd6ocihkc8hlhe0ngup63vgq5ph.apps.googleusercontent.com"
                onLogoutSuccess={logout}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
