import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

/** this belongs to vid no -> 12
 */
// function App() {
//   const [mode, setmode] = useState("dark");

//   const toggleMode = () => {
//     if (mode == "light") {
//       setmode("dark");
//       document.body.style.backgroundColor = "#212529";
//     } else {
//       setmode("light");
//       document.body.style.backgroundColor = "white";
//     }
//   };
//   return (
//     <>
//       {/* we can write navbar using self-closing tag */}
//       <Navbar mode={mode} toggleMode={toggleMode} />

//       {/* crating another componet called TextForm */}
//       <div className="container">
//         <TextForm heading="Enter the text to Analyze : "></TextForm>
//       </div>

//       {/* <About></About> */}
//     </>
//   );
// }

//*********************************************************************************** */

function App() {
  const [mode, setmode] = useState("dark");
  const [alert, setalert] = useState(null);

  // our alert is going to be an object by defalut it is null
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode == "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* we can write navbar using self-closing tag */}
      <Navbar mode="TextUtils" toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      {/* crating another componet called TextForm */}
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to Analyze : "
          mode={mode}
        ></TextForm>
      </div>

      {/* <About></About> */}
    </>
  );
}

export default App;
