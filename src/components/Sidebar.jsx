import { Link } from "react-router-dom"
import sidebar from "../logo.svg"
import "../css/Menu.css"

export default function Sidebar(){

    return (
        <>
        <div className="sidebar">
        
        <div className="sidebar-img">
            <img src={sidebar} alt="sidebar"/>
        
        <ul>
        <li><Link className="sidebar-menu" to="/">Category1</Link></li>
        <li><Link className="sidebar-menu" to="#">Category2</Link></li>
        <li><Link className="sidebar-menu" to="#">Category3</Link></li>
        <li><Link className="sidebar-menu" to="#">Category4</Link></li>
        </ul>
        
        </div>
        </div>
        
        </>

    );
}