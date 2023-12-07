import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Bagian foto */}
          <img
            src="src/assets/bgh3.jpeg"
            alt="Placeholder"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          {/* Bagian form login */}
          <Form className="mt-3">
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
              <a href="#">Forgot password?</a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
