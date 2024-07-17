import { useState,useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../../../reducers/userSlice";

const RegisterForm = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() !== false) {
            dispatch(addUser({
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value
            }));
            firstNameRef.current.value = "";
            lastNameRef.current.value = "";
            emailRef.current.value = "";
            setValidated(false);
        }
    };
    return (<Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter first name" ref={firstNameRef} />
            <Form.Control.Feedback type="invalid">First name is required</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" ref={lastNameRef} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email address" ref={emailRef} />
            <Form.Control.Feedback type="invalid">Email address is invalid</Form.Control.Feedback>
        </Form.Group>
        <Row className="form-group">
            <Col>
                <Button type="submit" className="btn btn-primary me-2">Submit</Button>
                <Button type="reset" className="btn btn-primary">Reset</Button>
            </Col>
        </Row>
    </Form>
    )
}
export default RegisterForm;