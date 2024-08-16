import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Your Company Name</h1>
        <nav>
          <a href="/" style={{ margin: '0 10px' }}>Home</a>
          <a href="/menu" style={{ margin: '0 10px' }}>Menu</a>
          <a href="/order" style={{ margin: '0 10px' }}>Order</a>
          <a href="/admin" style={{ margin: '0 10px' }}>Admin</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
