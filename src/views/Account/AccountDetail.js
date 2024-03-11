import React, { useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChangeTabAution from "../Aution/ChangeTabAution";
import ModalConfirmDelete from "../Aution/ModalConfirmDelete";
import TableAution from "../Aution/TableAution";
import { actAllUserGetAsync } from "src/store/user/action";
import { actProductGetByUserIdAsync } from "src/store/product/action";
import {
  actNotYetAuctionGetIDAsync,
  actAboutToAuctionGetIDAsync,
  actAuctioningAuctionGetIDAsync,
  actAuctionedAuctionGetIDAsync,
  actNotYetAuctionGetMemberAsync,
  actAboutToAuctionGetMemberAsync,
  actAuctioningAuctionGetMemberAsync,
  actAuctionedAuctionGetMemberAsync,
} from "src/store/auction/action";
import CustomTable from "../Aution/TableAution";
import TableProduct from "../Product/TableProduct";
import { useDispatch, useSelector } from "react-redux";
const DetailUser = () => {
  const { userId } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [userEditData, setUserEditData] = useState();
  // const [notYet, setNotYet] = useState();
  // const [aboutTo, setAboutTo] = useState();
  // const [auctioning, setAuctioning] = useState();
  // const [auctined, setAuctined] = useState();
  const token = localStorage.getItem("ACCESS_TOKEN");
  const allUser = useSelector((state) => state.USER.allUser);
  const products = useSelector((state) => state.PRODUCT.products);
  const notYetAuction = useSelector((state) => state.AUCTION.notYetAuctionId);
  const aboutToAuction = useSelector((state) => state.AUCTION.aboutToAuctionId);
  const auctioningAuction = useSelector((state) => state.AUCTION.auctioningId);
  const auctionedAuction = useSelector((state) => state.AUCTION.auctinedId);
  const notYetAuctionMember = useSelector(
    (state) => state.AUCTION.notYetAuctionMember
  );
  const aboutToAuctionMember = useSelector(
    (state) => state.AUCTION.aboutToAuctionMember
  );
  const auctioningAuctionMember = useSelector(
    (state) => state.AUCTION.auctioningMember
  );
  const auctionedAuctionMember = useSelector(
    (state) => state.AUCTION.auctinedMember
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actAllUserGetAsync(token));
    dispatch(actProductGetByUserIdAsync(userId, token));
    dispatch(actNotYetAuctionGetIDAsync(userId, token));
    dispatch(actAboutToAuctionGetIDAsync(userId, token));
    dispatch(actAuctioningAuctionGetIDAsync(userId, token));
    dispatch(actAuctionedAuctionGetIDAsync(userId, token));
    dispatch(actNotYetAuctionGetMemberAsync(userId, token));
    dispatch(actAboutToAuctionGetMemberAsync(userId, token));
    dispatch(actAuctioningAuctionGetMemberAsync(userId, token));
    dispatch(actAuctionedAuctionGetMemberAsync(userId, token));
    dispatch(actAllUserGetAsync(token));
  }, [dispatch, token, userId]);
  useEffect(() => {
    const item = allUser.find((i) => i._id === userId);
    // const notYet = notYetAuction.find((i) => i.host_id === userId);
    // const aboutTo = aboutToAuction.find((i) => i.host_id === userId);
    // const auctioning = auctioningAuction.find((i) => i.host_id === userId);
    // const auctined = auctionedAuction.find((i) => i.host_id === userId);
    setUserEditData(item);
    // setNotYet(notYet);
    // setAboutTo(aboutTo);
    // setAuctioning(auctioning);
    // setAuctined(auctined);
  }, [allUser, userId]);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({});
  console.log("Item data ", userEditData);
  // const handleDelete = (aution) => {
  //   console.log("Delete item with id:", aution.id);
  //   setDeleteData(aution);
  //   setShowDelete(true);
  // };
  const handleDetailAuction = (aution) => {
    // Chuyển hướng đến trang UpdateUser và truyền dữ liệu userEditData
    navigate(`/aution-detail/${aution._id}`);
    console.log("Update user at id:", aution.id);
  };

  const handleDetailProduct = (user) => {
    console.log("Update item with id:", user._id);
    navigate(`/product-detail/${user._id}`);
  };

  const handleUpdateUser = (aution) => {
    // Chuyển hướng đến trang UpdateUser và truyền dữ liệu userEditData
    // navigate(`/aution-detail/${aution.id}`);
    // console.log("Update user at id:", aution.id);
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
                  <Image
                    src={userEditData?.image}
                    alt="Orchid"
                    style={{ width: "50%", height: "auto" }}
                    roundedCircle
                  />
                  <Card.Body>
                    <Card.Title>Full Name: {userEditData?.fullName}</Card.Title>
                    <Card.Text>{userEditData?.email}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Card bên trái */}
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>Thông Tin Cá Nhân</Card.Title>
                    <Card.Text>
                      <strong>Họ và Tên:</strong> {userEditData?.name}
                    </Card.Text>
                    <Card.Text>
                      <strong>Email:</strong> {userEditData?.email}
                    </Card.Text>
                    <Card.Text>
                      <strong>Registered:</strong> {userEditData?.registered}
                    </Card.Text>
                    <Card.Text>
                      <strong>Role:</strong> {userEditData?.role}
                    </Card.Text>
                    <Card.Text>
                      <strong>status:</strong> {userEditData?.status}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CCardBody>
        </CCard>
      </CCol>
      {userEditData?.role_id?.title === "HOST" && (
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                Thông Tin Chi Tiết Product Người Dùng ID {userId}{" "}
              </strong>
            </CCardHeader>
            <CCardBody>
              <TableProduct
                data={products}
                onUpdate={handleDetailProduct}
                // onDelete={handleDelete}
              />
            </CCardBody>
          </CCard>
        </CCol>
      )}

      {userEditData?.role_id?.title === "HOST" && (
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Aution</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Hiện thị các đấu giá mà user đã tạo
              </p>
              <ChangeTabAution
                chuaDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={notYetAuctionMember}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                sapDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={aboutToAuctionMember}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                dangDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={auctioningAuctionMember}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                daDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={auctionedAuctionMember}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
              />
            </CCardBody>
          </CCard>
        </CCol>
      )}

      {userEditData?.role_id?.title === "MEMBER" && (
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Aution Member</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Hiện thị các đấu giá mà user đã đăng kí
              </p>
              <ChangeTabAution
                chuaDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={notYetAuction}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                sapDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={aboutToAuction}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                dangDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={auctioningAuction}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                daDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={auctionedAuction}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
              />
            </CCardBody>
          </CCard>
        </CCol>
      )}
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
