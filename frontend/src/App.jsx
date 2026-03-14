import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div>
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/"></Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/users">Danh sách người dùnga</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     
      <Routes>
        <Route path="/" element={<h2 className="text-center mt-5">Trang chủ</h2>} />
       
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;