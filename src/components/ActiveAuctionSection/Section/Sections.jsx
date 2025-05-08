import React from 'react';

const Sections = () => {
    return (
        <>
            <div className="flex-3/5 bg-white rounded-3xl">
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl ">
        
        <th >Items</th>
        <th className="text-center ">Current Bid</th>
        <th className="text-center">Time Left</th>
        <th className="text-center">Bid Now</th>
      </tr>
    </thead>
    <tbody className="text-lg text-center">
      
    </tbody>
    
  
  </table>
</div>
                </div>
        </>
    );
};

export default Sections;