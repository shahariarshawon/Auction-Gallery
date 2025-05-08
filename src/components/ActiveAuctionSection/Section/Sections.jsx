import React from 'react';
import Section from './Section';

const Sections = ({handleData}) => {
    return (
        <>
            <div className="flex-3/5 bg-white rounded-3xl ">
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl ">
        
        <th className='text-center'>Items</th>
        <th className="text-center ">Current Bid</th>
        <th className="text-center">Time Left</th>
        <th className="text-center">Bid Now</th>
      </tr>
    </thead>
    <tbody className="text-lg text-center">
      <Section Data={handleData}></Section>
    </tbody>
    
  
  </table>
</div>
                </div>
        </>
    );
};

export default Sections;