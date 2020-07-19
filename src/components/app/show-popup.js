import React from 'react';
import '../css/popup.css';
const Popup = (props) => {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1 className='tittle'>{props.text}</h1>
            <div className='popup-actions'>
               
                <button className='restart-btn1' onClick={props.restart}>Restart</button>
                <button className='close-btn' onClick={props.closePopup}>Close</button>
            </div>
          </div>
        </div>
      );
    }
 export default Popup;   