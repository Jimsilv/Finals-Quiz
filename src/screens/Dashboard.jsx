import React, { useEffect, useState } from 'react';
import axios from '../axios';
import Card from '../components/Card';
import Table from '../components/Table';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch products and users from the backend
    axios.get('products/')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));

    axios.get('accounts/users/')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">E-Commerce</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Users</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Settings
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#">Logout</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {/* Dashboard Section */}
      <div className="container mt-4">
        <h2 className="mb-4">Dashboard</h2>

        <div className="row">
          {/* Products Section */}
          <div className="col-12 col-md-6 mb-4">
            <h3 className="mb-3">Products</h3>
            <div className="row">
              {products.map((product) => (
                <div key={product.uuid} className="col-12 col-md-6 col-lg-4">
                  <Card product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Users Section */}
          <div className="col-12 col-md-6">
            <h3 className="mb-3">Users</h3>
            <Table users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
