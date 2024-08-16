import React from 'react';
import MenuItem from '../components/MenuItem';

const MenuPage = () => {
  // Example data, replace with API data in a real implementation
  const menuItems = [
    { name: 'Pizza', price: 12.99, description: 'Delicious cheese pizza' },
    { name: 'Burger', price: 10.99, description: 'Juicy beef burger with fries' },
    { name: 'Salad', price: 8.99, description: 'Fresh garden salad' },
  ];

  return (
    <div>
      <h1>Menu</h1>
      {menuItems.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} description={item.description} />
      ))}
    </div>
  );
};

export default MenuPage;
