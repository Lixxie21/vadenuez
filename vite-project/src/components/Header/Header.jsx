import logo from "../../assets/images/logo-mexico.jpeg";
import "./Header.css";

function Header(){
    return (
    <header className="header">
        <img className="header__logo" src={logo} alt="Magical Mexico"></img>
    </header>
    );
}

export default Header;