import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

export default function Modal({ children, open, classname = '' }) {
    const dialog = useRef();
    
    useEffect(()=> {
        const modal = dialog.current;
        
        if(open) {
            modal.showModal()
        }
        return () => {
            modal.close()
        }
    }, [open])

    
    
  return createPortal(
    <dialog ref={dialog} className={`modal ${classname}`} >
      {children}
    </dialog>,
    document.getElementById('modal')
  )
}
