import React from 'react';

const PromotionEmail = () => {
  const containerStyle = {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '20px',
    maxWidth: '600px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9'
  };

  const headerStyle = {
    backgroundColor: '#004080',
    color: '#fff',
    padding: '15px',
    textAlign: 'center',
    fontSize: '22px',
    borderRadius: '4px 4px 0 0'
  };

  const contentStyle = {
    padding: '20px',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333'
  };

  const footerStyle = {
    paddingTop: '10px',
    fontSize: '12px',
    color: '#555',
    borderTop: '1px solid #ddd',
    marginTop: '20px',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        Window Nation Promotion
      </div>
      <div style={contentStyle}>
        <h2>Get a Vacation Voucher!</h2>
        <p>
          Limited to the first 100 customers. Offer good while supplies last.
          Minimum purchases apply. Payment in full required.
        </p>
        <p>
          Offer valid at initial consultation only. Rules subject to change.
          Taxes, port charges and process fees not included. Must provide own
          transportation to and from departure ports or resort.
        </p>
      </div>
      <div style={footerStyle}>
        &copy; {new Date().getFullYear()} Window Nation. All rights reserved.
      </div>
    </div>
  );
};

export default PromotionEmail;
