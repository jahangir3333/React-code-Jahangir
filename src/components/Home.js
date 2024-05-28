import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import reactlogo from "../logo.svg";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";
import "../css/style.css"
import Login from "./Login";
import content_logo from "../images/content.ico";

function Home(){
    return(
    <>
    
    <Header/>
    {/* <Menu/> */}
    {/* <Sidebar/> */}
    <div className="container">
    
    <div className="content">
    <div className="content-header">
    <img src={content_logo} alt="content"/>
    <h2>CONTENT</h2>
    </div>
    
    
    <img src={reactlogo} alt="logo-home" height="100px" width="100px"/>
    </div>
    <Login/>
    
    <Outlet/>  
    
    </div> 
    
    <Footer/>
 
    </>

    );
}


export default Home;