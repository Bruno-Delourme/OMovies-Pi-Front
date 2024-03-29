import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import SubscribeForm from "./SubscribeForm/SuscribeForm";

const Header = () => {
  return (
    <div>
      <LoginForm />
      <SubscribeForm />
      <SearchBar />
    </div>
  );
};

export default Header;
