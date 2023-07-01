import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

const Hamburger = () => {
  return (
    <div className="Hamburger">
        <h4>Hamburger PopUP</h4>
        <Popup trigger={<button>Click to open popup </button>}
        position="right center">
            <div>Pop up</div>
            <button>Click Here</button>
        </Popup>
    </div>
  )
};

export default Hamburger