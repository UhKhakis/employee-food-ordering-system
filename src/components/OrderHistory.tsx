import React from 'react';

const OrderHistory = () => {
  // Example data, replace with API data in a real implementation
  const orders = [
    { id: 1, item: 'Pizza', date: '2024-08-10', time: '12:00 PM' },
    { id: 2, item: 'Burger', date: '2024-08-11', time: '1:00 PM' },
  ];

  return (
    <div>
      <h2>Your Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.date} - {order.time}: {order.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
