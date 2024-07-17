import { Col, Container, Row } from "react-bootstrap";
import RegisterForm from "../../Form/Register/RegisterForm";
import UserList from "../../Grid/UserList";

const UserPage = () => {
    return (
        <Container>

            <h1>User register</h1>
            <Row className="mb-3">                
                <Col md="4">
                    <RegisterForm />
                </Col>
            </Row>
            <Row>
                <Col>
                    <UserList />
                </Col>
            </Row>
        </Container>
    )
}
export default UserPage;