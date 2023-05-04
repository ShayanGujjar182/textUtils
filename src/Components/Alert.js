import React from 'react'

export default function Alert(props) {
    const Capitalize = (word) =>{
        let newword = word.toLowerCase();
        return newword.charAt(0).toUpperCase() + newword.slice(1)
    }
  return (
    <div style={{height: '60px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
        <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>}
    </div>
  )
}
