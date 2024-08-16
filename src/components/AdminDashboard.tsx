import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Menu Management</h3>
        <button>Add New Item</button>
        <button>Edit Menu</button>
      </div>
      <div>
        <h3>Order Management</h3>
        <button>View All Orders</button>
        <button>Export Orders to CSV</button>
      </div>
      <div>
        <h3>Reports</h3>
        <button>Generate Daily Report</button>
        <button>Generate Monthly Report</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
