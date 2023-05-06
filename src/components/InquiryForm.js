import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../styles/InquiryForm.css";

export default function InquiryForm() {
  return (
    <div>
      <h1 className="form-header text-center" id="inquiry-form">Inquiry Form</h1>
      <Form className="m-5 form-txt">
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <FloatingLabel
              controlId="floatingInput"
              label="First name"
              className="mb-3"
            >
              <Form.Control required type="text" placeholder="First name" />
            </FloatingLabel>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <FloatingLabel
              controlId="floatingInput"
              label="Last name"
              className="mb-3"
            >
              <Form.Control required type="text" placeholder="Last name" />
            </FloatingLabel>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Form.Select aria-label="Default select example" className="mb-3">
          <option>Which service are you interested in?</option>
          <option value="1">Flight + Hotel Bundle</option>
          <option value="2">Cruise Planning</option>
          <option value="3">Wedding Travel</option>
          <option value="3">Itinerary Creation</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" className="mb-3">
          <option>When would you like to take your trip?</option>
          <option value="1">0-3 months</option>
          <option value="2">3-6 months</option>
          <option value="3">6-12 months</option>
          <option value="3">1 year+</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" className="mb-3">
          <option>What kind of trip is it?</option>
          <option value="1">Solo</option>
          <option value="2">Couple</option>
          <option value="3">Group</option>
          <option value="3">Family</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" className="mb-3">
          <option>Special occasion?</option>
          <option value="1">Birthday</option>
          <option value="2">Anniversary</option>
          <option value="3">Honeymoon</option>
          <option value="3">Graduation</option>
          <option value="3">Other</option>
          <option value="3">Just because</option>
        </Form.Select>
        <Button variant="outline-light" type="submit" className="mb-4 btn-bg">
          Submit
        </Button>
      </Form>
    </div>
  );
}
