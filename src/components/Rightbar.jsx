import rightbarimg from "../logo.svg";
import "../css/Menu.css"
import { Link } from "react-router-dom";

export default function Rightbar(){
    return (
    <>
    <div className="rightbar">
       
        <div className="rightbar-img">
            <img src={rightbarimg} alt="" />
            <ul>
        <li><Link className="sidebar-menu" to="/">Right1</Link></li>
        <li><Link className="sidebar-menu" to="#">Right2</Link></li>
        <li><Link className="sidebar-menu" to="#">Right3</Link></li>
        <li><Link className="sidebar-menu" to="#">Right4</Link></li>
        </ul>
        

        </div>

    </div>
    </>

    );
}