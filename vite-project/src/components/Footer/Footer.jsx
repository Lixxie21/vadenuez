import {useState} from "react";
import "./Footer.css";

function Footer(){
    const [x1, setx1] = useState("STAR VALUE");
    let nombre = "webos";
    nombre = "webos 2";

    //setx1("webos 3");
    return(
        <>
        <footer className="footer site__section">
            <p className="footer__text">© 2025 Magical Mexico — Diana Irely Pinales Martínez</p>
        </footer>
        </>
    );
}

export default Footer;