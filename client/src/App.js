import React from "react";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./components/context/AccountProvider";
function App() {
  const clientId =
    "80604844024-g8b40o136bng2l8i6vk8l7dcbre1l9cf.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
