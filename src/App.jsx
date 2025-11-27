import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div className="main-wrapper" style={{ backgroundColor: backgroundColor }}>
      <h1>Генератор рандомного цвета</h1>
      <button onClick={generateRandomColor}>Клик</button>
    </div>
  );
}

export default App;
