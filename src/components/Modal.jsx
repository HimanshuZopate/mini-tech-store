import React from 'react'

const Modal = ({children, onClose}) => {
  return (
    <div style={{position:"fixed", top:0, left:0, right:0, bottom:0, backgroundColor:"rgba(0,0,0,0.5)"}}>
        <div style={{background:"white", margin:"100px auto", padding:"20px", width:"300px", borderRadius:"8px"}}>
            {/*This is the magic! It will render whatever you put inside <Modal>...</Modal> in app.jsx */}
            {children}

            <button onClick={onClose} style={{marginTop:"20px"}}>Close</button>

        </div>
        
    </div>
  )
}

export default Modal