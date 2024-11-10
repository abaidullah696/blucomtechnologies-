import React from "react";
import MultiStepForm from "./MultiStepForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h4>Let's Build Your Brand</h4>
      
      {/* <label htmlFor="brand-idea">Choose your brand idea:</label>
      <select id="brand-idea" name="brand-idea">
        <option value="innovation">Innovation</option>
        <option value="creativity">Creativity</option>
        <option value="strategy">Strategy</option>
        <option value="visual-design">Visual Design</option>
      </select> */}
      <MultiStepForm />
    </div>
  );
}

export default App;
