import "./App.css";

import Main from "./components/main/Main";
import { Counter } from "./components/counter/Counter";
import ImageC from "./components/imagec/ImageC";

function App() {
  return (
    <div id="app">
      <ImageC />
      <Counter />

      {/* <h2 id="title">App Component</h2>

      <Main /> */}
    </div>
  );
}

export default App;
