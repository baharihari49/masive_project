import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Profile() {
  const [userData, setUserData] = useState({
    nama: 'John Doe',
    email: 'john.doe@example.com',
    alamat: 'Jl. Contoh No. 123',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logika untuk menyimpan perubahan profil dapat ditambahkan di sini
    console.log('Profil berhasil diperbarui:', userData);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 position-relative">
          {/* Background image */}
          <img
            src="src/assets/bgh3.jpeg"
            alt="Background"
            className="img-fluid"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          {/* Circular profile image */}
          <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle" style={{ width: '200px', height: '200px', border: '5px solid #fff', zIndex: 1 }}>
            <img
              src="src/assets/bgh3.jpeg"
              alt="User Profile"
              className="img-fluid"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* User profile information form */}
          <div className="mt-3 ">
            <h2 className="mb-4">Edit Profile</h2>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formNama">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" name="nama" value={userData.nama} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formNama">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" value={userData.nama} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="email" name="pass" value={userData.email} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" name="phone" value={userData.email} onChange={handleInputChange} />
              </Form.Group>
              <br/>
              <Button variant="primary" type="submit" className="w-100 navy-button">
                Update
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
