import React from 'react'

const Loader = () => {
  return (
      <div className="flex justify-center items-center h-full">
          <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-black"></div>
      </div>
  );
}

export default Loader