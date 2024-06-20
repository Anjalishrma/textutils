import React, { useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState(""); 

  const handleUpClick = ()=>{
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Uppercase has been enabled", "success");
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowercase has been enabled", "success");
  }

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
  }

  const removeExtraSpace = ()=>{ 
    let newText = text.split(/[ ]+/);
    setText(newText.join(""))
  }

  // const handleCopyToClipboard = () => {
  //   if (!navigator.clipboard) {
  //     // Clipboard API not supported, fallback to execCommand
  //     textAreaRef.current.select();
  //     document.execCommand('copy');
  //     setText(text);
  //     return;
  //   }

  //   navigator.clipboard
  //     .writeText(text)
  //     .then(() => {
  //       console.log('Text copied to clipboard');
  //       setText(text);
  //     })
  //     .catch((err) => {
  //       console.error('Unable to copy text to clipboard', err);
  //     });
  // };

  const handleCopyToClipboard = ()=>{ 
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  

  const handleOnChange = (event)=>{
    // console.log("handleOnChange");
    setText(event.target.value);
  }


  // text = "new text" // wrong way to set the text
  // setText= "new text" // correct way to set the text
  return (
    <>
      <div className="container" style={{color: props.mode==="dark"?"white" : "black"}}> 
          <h1>{props.heading}</h1> 
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"white" : "grey", color: props.mode==="dark"?"white" : "black"}} ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleCopyToClipboard} >Copy To Clipboard</button>
          <button className="btn btn-primary my-3 mx-2" onClick={removeExtraSpace} >Remove extra space</button>
      </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white" : "black"}}>
        <h2>Text Summary Here</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text.trim().split(/\s+/).filter(word => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview above it here"}</p>
      </div>
    </>
  )
}
