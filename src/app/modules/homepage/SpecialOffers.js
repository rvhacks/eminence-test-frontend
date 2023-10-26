import React from "react";

const SpecialOffers = () => {
  return (
    <div>
      <section className="special-offers-section">
        <h2>Special Offers</h2>
        <div className="special-offers-container">
          <div className="offer-item">
            <h3>50% Off on Selected Items</h3>
            <p>Use code SPECIAL50 at checkout</p>
          </div>
          <div className="offer-item">
            <h3>Free Shipping on Orders Over $50</h3>
            <p>Automatically applied at checkout</p>
          </div>
          {/* Add more offer items as needed */}
        </div>
      </section>
    </div>
  );
};

export default SpecialOffers;
