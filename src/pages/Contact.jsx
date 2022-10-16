import React from 'react'

const Contact = () => {
  return (
    // <div className="flex flex-col md:flex-row">
    //   <div className="bg-orange-500 w-80">Left</div>
    //   <div className="bg-teal-500 w-80 h-80">Right</div>
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="bg-orange-500 w-80">Left</div>
      <div className="bg-teal-500 w-80 h-80">Right</div>
      <div className="bg-orange-500 w-80">Left</div>
      <div className="bg-teal-500 w-80 h-80">Right</div>
    </div>
  );
}

export default Contact