import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
  Card,
  Table,
  Alert,
} from "react-bootstrap";

function InputOutput(props) {
  const [amount, setAmount] = useState(0);
  const [service, setService] = useState(0);
  const [customer, setCustomer] = useState("");
  const [tip, setTip] = useState(0);
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(parseFloat(event.target.value) || 0);
  };

  const handleServiceChange = (event) => {
    setService(parseFloat(event.target.value) || 0);
  };

  const handleCustomerChange = (event) => {
    const customerName = event.target.value;
    setCustomer(customerName);
    setTip(amount * service);
  };

  const handleAddCustomer = () => {
    if (customer && tip) {
      props.AddCustomerName(
        `${customer} Offering a Tip Of - Rs. ${tip.toFixed(2)}`
      );
      props.AddTip(tip);
    }
  };

  const handleCalculateTotals = () => {
    const totalTipAmount = props.totaltip.reduce(
      (prev, next) => prev + next,
      0
    );
    setTotalTip(totalTipAmount);
    setTotalCustomer(props.customername.length);
  };

  return (
    <>
      <div className="bg-light p-4">
        <Form className="container">
          <Form.Group className="mb-3" controlId="formBillAmount">
            <Form.Label>Enter Bill Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Bill Amount"
              onChange={handleAmountChange}
              min="0"
            />
          </Form.Group>
          <hr className="my-4" />
        </Form>

        <Form className="container">
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="How Was The Service"
              >
                <Form.Select
                  aria-label="Service quality"
                  value={service}
                  onChange={handleServiceChange}
                >
                  <option value="0">Choose Our Services</option>
                  <option value="0.20">Excellent (20%)</option>
                  <option value="0.15">Good (15%)</option>
                  <option value="0.10">Not So Good (10%)</option>
                  <option value="0.05">Bad (5%)</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Customer Name"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={handleCustomerChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <div className="d-flex justify-content-center mt-4">
            <Button
              variant="warning"
              style={{ width: "250px", fontWeight: "600" }}
              onClick={handleAddCustomer}
            >
              Add Customer
            </Button>
          </div>
          <hr className="my-4" />

          <Card className="mb-4">
            <Card.Header
              className="text-center"
              style={{ fontSize: "30px", fontWeight: "bolder" }}
            >
              Customer List
            </Card.Header>
            <Card.Body>
              {props.customername.map((ele, index) => (
                <Alert key={index} variant="info">
                  {ele}
                </Alert>
              ))}
            </Card.Body>
          </Card>
        </Form>

        <div className="d-flex justify-content-center mb-4">
          <Button
            variant="warning"
            style={{ width: "250px", fontWeight: "600" }}
            onClick={handleCalculateTotals}
          >
            Calculate Tip & Customer
          </Button>
        </div>

        <Table striped bordered hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th>Total Customers</th>
              <th>Total Tip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalCustomer}</td>
              <td>Rs. {totalTip.toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default InputOutput;
