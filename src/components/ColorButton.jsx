/* import React from 'react'*/

function ColorButton({ btnColor, btnTxtColor="white", setBackgroudColor }) {
  return (
    <button className="rounded-full px-4 py-2 text-white capitalize m-1 shadow-lg" 
        style={{
            backgroundColor: btnColor,
            color: btnTxtColor
        }}
        onClick={() => {
            setBackgroudColor(btnColor);
            localStorage.setItem('backgroundColor', btnColor);
        }}
    >{btnColor}</button>
  )
}

export default ColorButton