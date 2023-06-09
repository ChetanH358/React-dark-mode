import React, { useState } from "react";

export default function TextForm(props) {
  let handleUpcaseClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    // setText("you have clicked on handleUpcaseClick");
    setText(newText);
    props.showAlert("converted to uppercase ! ", "success");
  };

  const handleOnChange = (event) => {
    // console.log({ text });
    console.log("On change");
    setText(event.target.value);
    // console.log({ text });
    // console.log("*******************************************************");
  };

  let handleLowercaseClick = () => {
    console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    // setText("you have clicked on handleUpcaseClick");
    setText(newText);
    props.showAlert("converted to LowerCase ! ", "success");
  };

  let clearTextArea = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Area is Cleared ! ", "success");
  };

  // copy the given text
  const handlecopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    console.log(text.value);
    props.showAlert("Text is copied to clipboard ! ", "success");
  };

  //removes extraspaces
  const HandleExtraspaces = () => {
    // used regex function ->
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces trimmed ! ", "success");
  };

  // Using Array Destructuring syntax []
  const [text, setText] = useState("");
  //
  // const [text, setText] = useState("Enter text here");

  // text = "new text"; // wrong way to change the state
  // setText = "new text"; // correct way to change the state

  // return (
  //   <div>
  //     <h4>{props.heading}</h4>
  //     <div className="mb-3 my-3">
  //       {/* <label for="myBox" className="form-label">
  //         Example textarea
  //       </label> */}
  //       <textarea
  //         className="form-control"
  //         value={text} // Enter text here comes inside text area // using states inside value
  //         onChange={handleOnChange}
  //         id="myBox"
  //         rows="8"
  //       ></textarea>
  //       <button className="btn btn-primary my-3" onClick={handleUpcaseClick}>
  //         Convert to Uppercase
  //       </button>
  //     </div>
  //   </div>
  // );

  //****************************************************************************************************************************************** */

  return (
    <>
      <div className="container">
        <h4>{props.heading}</h4>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text} // < Enter text here > comes inside text area // using states inside value // to chage all to uppercase when cliked on button (displays)
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleUpcaseClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleLowercaseClick}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={clearTextArea}>
            Clear Text
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handlecopy}>
            Copy Text
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={HandleExtraspaces}
          >
            Clear Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h2> Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it "}
        </p>
      </div>
    </>
  );
}
