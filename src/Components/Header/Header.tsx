import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";

function Header () {
    return (
        <><LoginForm /><SubscribeForm /><SearchBar /></>
    );
}

export default Header;