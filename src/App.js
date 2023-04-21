
import { useState } from 'react';
import './App.css';
import { dinamicProducts } from './data';


function App() {
  const [dinamicIndex, setDinamicIndex] = useState(0);

  

  const nextProduct = () => {
    if(dinamicIndex === dinamicProducts.length - 1)return;
    
    setDinamicIndex(dinamicIndex + 1)
  }

  const previousProduct= () => {
    if(dinamicIndex === 0)return;

    setDinamicIndex(dinamicIndex - 1);
  }
 
  return (
    <div className="App">
    <h1>{dinamicProducts[dinamicIndex].title}</h1>
    <p><img src={dinamicProducts[dinamicIndex].img} alt="imagem promocional" /></p>
    <button onClick={() => previousProduct()} > Previous</button>
    <button onClick={() => nextProduct()} > next</button>
    {dinamicIndex}
    </div>
  );
}

export default App;
