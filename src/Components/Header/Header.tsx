import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";
import "./Header.scss"


const Header = () => {
  return (
      <div>
      <div className="black-banner">
          
      <div className="logo-placeholder">Pi</div>
      <LoginForm />
      <SubscribeForm />
      <SearchBar />
    </div>
    </div>
  );
};

export default Header;
