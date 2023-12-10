import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  // Gantilah logika berikut sesuai dengan cara Anda menyimpan informasi akun
  var penggunaPunyaAkun = false;

  const handleLogin = (e) => {
    e.preventDefault();
    // Logika autentikasi atau pengecekan akun dapat ditambahkan di sini
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="src/assets/bgh3.jpeg"
            alt="Placeholder"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <Form className="mt-3" onSubmit={handleLogin}>
            <h2 className="text-center mb-4">Login to Your Account</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>

            <p className="mt-3 text-center">
              <Link to="/signup">Create an account</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;