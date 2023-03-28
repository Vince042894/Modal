import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(false); //Modal

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isCancelled, setIsCancelled] = useState(false);
  const [status, setStatus] = useState(true);

  // function handle cancelation

  function handleChange() {
    setIsCancelled(!isCancelled);
    setTimeout(() => {
      setShow(false);
    }, 2000);
    setStatus(!status);
  }

  return (
    <div>
      <div className="container">
        <h1>Your Subscriptions</h1>
        <table>
          <thead>
            <tr>
              <th>Subscription</th>
              <th>Next Rebill</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$49.99 per month</td>
              <td>December 13, 2020</td>
              <td>
                <Button variant="primary" onClick={handleShow}>
                  {status ? "Cancel" : "Cancelled"}
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>
          {isCancelled
            ? "Are you sure you want to cancel your subscription?"
            : "Subscription successfully cancelled"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleChange}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
