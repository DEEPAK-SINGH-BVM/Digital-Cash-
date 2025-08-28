import React from 'react'

const DashButton = ({button}) => {
  return (
    <div>
    
      <button className="cursor-pointer hover:border-sky-300 hover:text-sky-300 mt-5 text-white p-4 border border-1  border-white w-[200px]  rounded-sm font-semibold">
        {button}
      </button>
    </div>
  );
}

export default DashButton;