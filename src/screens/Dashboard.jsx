import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { fetchUsers } from "../redux/slices/userSlice";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import Card from "../components/Card";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch from Redux store
  const { products, loading: productsLoading, error: productsError } = useSelector((state) => state.products);
  const { users, loading: usersLoading, error: usersError } = useSelector((state) => state.users);
  const { userInfo } = useSelector((state) => state.auth);

  // Redirect if not logged in
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      dispatch(fetchProducts());
      dispatch(fetchUsers());
    }
  }, [dispatch, userInfo, navigate]);

  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">E-Commerce</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Users</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                Settings
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#">Logout</a>
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
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
            {productsLoading ? <Spinner /> : productsError ? <Message variant="danger">{productsError}</Message> : (
              <div className="row">
                {products.map((product) => (
                  <div key={product.uuid} className="col-12 col-md-6 col-lg-4">
                    <Card product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Users Section */}
          <div className="col-12 col-md-6">
            <h3 className="mb-3">Users</h3>
            {usersLoading ? <Spinner /> : usersError ? <Message variant="danger">{usersError}</Message> : <Table users={users} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
