import React, { useState } from 'react';

const OrderForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [menuItems, setMenuItems] = useState(['Pizza', 'Burger', 'Salad']); // Example menu items
  const [selectedItem, setSelectedItem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', { employeeId, selectedItem, pickupTime });
    // Add API call to submit the order
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employee ID:
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        />
      </label>
      <label>
        Select Item:
        <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} required>
          <option value="">Select a menu item</option>
          {menuItems.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pickup Time:
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
