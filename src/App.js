import { BrowserRouter, Routes, Route} from "react-router-dom"
import Error from "./components/Error"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Form from "./components/Form"
import MyForm from "./components/Myform"
import Submitform from "./components/Submitform"




function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Home />}>
          
          <Route path="form" element={<Form/>}/>          
          <Route path="myform" element={<MyForm/>}/>
          <Route path="submitform" element={<Submitform/>}/>
          <Route path="*" element={<Error/>}/>
         </Route> 
          
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App
