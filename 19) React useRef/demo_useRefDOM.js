import { useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

/*
By clicking the button,
the input field will get focus.
*/
