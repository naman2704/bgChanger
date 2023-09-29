import { useState } from 'react';
import ColorButton from './components/ColorButton';

function App() {
  const colorFromLocalStorage = localStorage.getItem('backgroundColor') || 'olive';
  const [color, setColor] = useState(colorFromLocalStorage);
  return (
    <div className="w-full h-screen duration-200"
      style={{
        backgroundColor: color
      }}
    >
      <div 
        className="bg-grey-100 fixed bottom-12 inset-x-0 flex flex-wrap shadow-lg bg-white rounded-3xl w-fit"
        style={{
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <div className="color-bar shadow-lg px-5 py-3">
          <ColorButton 
            btnColor="violet"
            setBackgroudColor={setColor}
          />
          <ColorButton 
            btnColor="indigo"
            setBackgroudColor={setColor}
          />
          <ColorButton 
            btnColor="blue"
            setBackgroudColor={setColor}
          />
          <ColorButton 
            btnColor="green"
            setBackgroudColor={setColor}
          />
          <ColorButton 
            btnColor="yellow"
            btnTxtColor="black"
            setBackgroudColor={setColor}
          />
          <ColorButton 
            btnColor="orange"
            setBackgroudColor={setColor}
          />
          <ColorButton 
            btnColor="red"
            setBackgroudColor={setColor}
          />
        </div>
      </div>
    </div>
  )
}

export default App
