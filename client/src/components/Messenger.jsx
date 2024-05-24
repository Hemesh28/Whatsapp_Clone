import LoginDialog from "./account/LoginDialog";
import { AppBar,Toolbar, styled }  from "@mui/material";
import React from "react";
// import styled from "@emotion/styled";





 const Header = styled(AppBar)`
 height: 220px;
 background-color:#00bfa5;
 box-shadow : none;
 `;

const Messenger = () => {
    return (

        <React.Fragment>
    
          <Header>
    
            <Toolbar></Toolbar>
    
          </Header>
    
          <LoginDialog />;
    
        </React.Fragment>
    
      );
};

export default Messenger;