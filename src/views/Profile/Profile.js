import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Profile = () => {
  // Giả sử đây là thông tin người dùng lấy từ API hoặc State Management
  const user = {
    avatar:
      "https://cloudfront-us-east-1.images.arcpublishing.com/gray/OKL3YQRDPRGRDKEM46PFW67ZMQ.jpg",
    userName: "User01",
    email: "user01@example.com",
    fullName: "John Doe",
    address: "123 Main Street, Anytown, USA",
    phoneNumber: "+123456789",
  };

  return (
    <Container>
      <Row className="mt-5">
        {/* Card bên phải */}
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={user.avatar} />
            <Card.Body>
              <Card.Title>{user.userName}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card bên trái */}
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Thông Tin Cá Nhân</Card.Title>
              <Card.Text>
                <strong>Họ và Tên:</strong> {user.fullName}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {user.email}
              </Card.Text>
              <Card.Text>
                <strong>Địa chỉ:</strong> {user.address}
              </Card.Text>
              <Card.Text>
                <strong>Số điện thoại:</strong> {user.phoneNumber}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
