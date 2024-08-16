import React from 'react';

type MenuItemProps = {
  name: string;
  price: number;
  description: string;
};

const MenuItem = ({ name, price, description }: MenuItemProps) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
};

export default MenuItem;
