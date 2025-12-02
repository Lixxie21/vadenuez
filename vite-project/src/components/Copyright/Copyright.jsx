import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "./Copyright.css";

function Copyright(){
    const { copyright } = useContext(AppContext);
    return(
        <>
        <div className="copyright">
            <p className="copyright__paragraph"></p>
        </div>
        </>
    );
}

export default Copyright;