import React from 'react';

const Carts = () => {
    return (
        <>
             <div>
                <div className="card w-96 bg-white rounded-3xl card-lg shadow-sm">
  <div className="card-body">
    <h2 className=" text-center text-3xl font-medium">Favourite Items</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                </div>
        </>
    );
};

export default Carts;