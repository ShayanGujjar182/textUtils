import React, {useState} from 'react'

export default function Form(props) {
  const [text, setText] = useState('')
  const ConverttoUpCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase', 'success')
  }
  const ConverttoloCase = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase', 'success')
  }
  const handleClearText = () =>{
    setText("");
    props.showAlert('Text Cleared', 'success')
  }
  const onChangehandler = (event) =>{
    setText(event.target.value);
  }

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to Clipboard', 'success')
  }
  const handleRemoveSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert('Extra Spaces removed', 'success')
  }

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={onChangehandler} style={{color:props.mode==='dark'? 'white' : 'black', backgroundColor: props.mode==='light'? 'white' : '#333d66'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={ConverttoUpCase}>Convert to UpperCase</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1" onClick={ConverttoloCase}>Convert to LowerCase</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlecopy}>Copy to Clipboard</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'? 'white' : 'black'}} >
      <h1>Your Text Summary</h1>
      {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters <br/>
      {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to Read
      <h2>Preview</h2>
      <p> {text.length>0?text:'Nothing To Preview'} </p>
    </div>
    </>
  )
}
