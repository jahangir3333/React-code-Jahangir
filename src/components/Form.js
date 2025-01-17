import { useState } from 'react';
import '../css/Menu.css'

function Form() {
  const [name, setName] = useState("");

  return (
    <>
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
    </>
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

export default Form;