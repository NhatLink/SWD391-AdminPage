import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import { Row, Col, Card } from "react-bootstrap";
import { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ChangeTabAution from "../Aution/ChangeTabAution";
import ModalConfirmDelete from "../Aution/ModalConfirmDelete";
import TableAution from "../Aution/TableAution";
const DetailUser = () => {
  const { userId } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  const location = useLocation();
  const userEditData = useMemo(
    () => location.state?.userEditData || {},
    [location.state?.userEditData]
  );
  const [showDelete, setShowDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({});
  const [data, setData] = useState([
    { id: 1, name: "Aution 1", status: "active" },
    { id: 2, name: "Aution 2", status: "active" },
    // Thêm dữ liệu mẫu khác tại đây
  ]);
  const data1 = [
    { id: 3, name: "Aution 3", status: "active" },
    { id: 4, name: "Aution 4", status: "active" },
    // Thêm dữ liệu mẫu khác tại đây
  ];
  const [data2, setData2] = useState([
    { id: 5, name: "Aution 5", status: "active" },
    { id: 6, name: "Aution 6", status: "active" },
    // Thêm dữ liệu mẫu khác tại đây
  ]);

  const handleDelete = (aution) => {
    console.log("Delete item with id:", aution.id);
    setDeleteData(aution);
    setShowDelete(true);
  };

  const handleUpdateUser = (aution) => {
    // Chuyển hướng đến trang UpdateUser và truyền dữ liệu userEditData
    navigate(`/aution-detail/${aution.id}`);
    console.log("Update user at id:", aution.id);
  };
  return (
    <CRow>
      <CCol xs={6}>
        <CButton className="mb-4" color="primary" onClick={() => navigate(-1)}>
          Quay Lại
        </CButton>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thông Tin Chi Tiết Người Dùng ID {userId} </strong>
          </CCardHeader>
          <CCardBody>
            <Row className="mt-1">
              {/* Card bên phải */}
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src={userEditData.avatar} />
                  <Card.Body>
                    <Card.Title>{userEditData.name}</Card.Title>
                    <Card.Text>{userEditData.email}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Card bên trái */}
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>Thông Tin Cá Nhân</Card.Title>
                    <Card.Text>
                      <strong>Họ và Tên:</strong> {userEditData.name}
                    </Card.Text>
                    <Card.Text>
                      <strong>Email:</strong> {userEditData.email}
                    </Card.Text>
                    <Card.Text>
                      <strong>Registered:</strong> {userEditData.registered}
                    </Card.Text>
                    <Card.Text>
                      <strong>Role:</strong> {userEditData.role}
                    </Card.Text>
                    <Card.Text>
                      <strong>status:</strong> {userEditData.status}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thông Tin Chi Tiết Product Người Dùng ID {userId} </strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị chi tiết 1 user trong hệ thống
            </p>
            <div>
              {/* Hiển thị thông tin dựa trên ID lấy được */}
              <p>Người Dùng: {userEditData.id}</p>
              <p>Người Dùng: {userEditData.name}</p>
              <p>Người Dùng: {userEditData.avatar}</p>
              <p>Người Dùng: {userEditData.registered}</p>
              <p>Người Dùng: {userEditData.role}</p>
              <p>Người Dùng: {userEditData.status}</p>
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Aution</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị các đấu giá có trong hệ thống
            </p>
            <ChangeTabAution
              chuaDienRaContent={
                <div>
                  {
                    <TableAution
                      data={data}
                      onUpdate={handleUpdateUser}
                      onDelete={handleDelete}
                    />
                  }
                </div>
              }
              sapDienRaContent={
                <div>
                  {
                    <TableAution
                      data={data1}
                      onUpdate={handleUpdateUser}
                      onDelete={handleDelete}
                    />
                  }
                </div>
              }
              dangDienRaContent={
                <div>
                  {
                    <TableAution
                      data={data2}
                      onUpdate={handleUpdateUser}
                      onDelete={handleDelete}
                    />
                  }
                </div>
              }
            />
          </CCardBody>
        </CCard>
      </CCol>
      <ModalConfirmDelete
        showProp={showDelete}
        handleClose={() => {
          setShowDelete(false);
        }}
        deleteData={deleteData}
      />
    </CRow>
  );
};

export default DetailUser;
