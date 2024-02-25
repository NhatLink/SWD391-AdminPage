import React from "react";
import ModalConfirmDelete from "./ModalConfirmDelete";
import { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CAvatar,
  CBadge,
  CButton,
  CCollapse,
} from "@coreui/react";
import TableAccount from "./TableAccount";
import { useNavigate } from "react-router-dom";
// import DocsExample  from 'src/components/DocsExample'
function Account() {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  const [userDeleteData, setUserDeleteData] = useState({});
  const handleUpdate = (user) => {
    console.log("Update item with id:", user.id);
    navigate(`/update-user/${user.id}`, { state: { userEditData: user } });
    // Thêm logic update tại đây
  };

  const handleDelete = (user) => {
    console.log("Delete item with id:", user.id);
    setUserDeleteData(user);
    setShowDelete(true);
  };
  const usersData = [
    {
      id: 1,
      name: "Samppa Nori",
      avatar: "1.jpg",
      registered: "2022/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 2,
      name: "Estavan Lykos",
      avatar: "2.jpg",
      registered: "2022/02/07",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 3,
      name: "Chetan Mohamed",
      avatar: "3.jpg",
      registered: "2022/02/07",
      role: "Admin",
      status: "Inactive",
      _selected: true,
    },
    {
      id: 4,
      name: "Derick Maximinus",
      avatar: "4.jpg",
      registered: "2022/03/19",
      role: "Member",
      status: "Pending",
    },
    {
      id: 5,
      name: "Friderik Dávid",
      avatar: "5.jpg",
      registered: "2022/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 6,
      name: "Yiorgos Avraamu",
      avatar: "6.jpg",
      registered: "2022/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 7,
      name: "Avram Tarasios",
      avatar: "7.jpg",
      registered: "2022/02/07",
      role: "Staff",
      status: "Banned",
      _selected: true,
    },
    {
      id: 8,
      name: "Quintin Ed",
      avatar: "8.jpg",
      registered: "2022/02/07",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Enéas Kwadwo",
      avatar: "9.jpg",
      registered: "2022/03/19",
      role: "Member",
      status: "Pending",
    },
    {
      id: 10,
      name: "Agapetus Tadeáš",
      avatar: "10.jpg",
      registered: "2022/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 11,
      name: "Carwyn Fachtna",
      avatar: "11.jpg",
      registered: "2022/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 12,
      name: "Nehemiah Tatius",
      avatar: "12.jpg",
      registered: "2022/02/07",
      role: "Staff",
      status: "Banned",
      _selected: true,
    },
    {
      id: 13,
      name: "Ebbe Gemariah",
      avatar: "13.jpg",
      registered: "2022/02/07",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 14,
      name: "Eustorgios Amulius",
      avatar: "14.jpg",
      registered: "2022/03/19",
      role: "Member",
      status: "Pending",
    },
    {
      id: 15,
      name: "Leopold Gáspár",
      avatar: "15.jpg",
      registered: "2022/01/21",
      role: "Staff",
      status: "Active",
    },
  ];

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị các user có trong hệ thống{" "}
            </p>
            <p className="small d-none d-md-flex me-auto">
              {/* <CCardBody> */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              {/* </CCardBody> */}
            </p>

            <TableAccount
              data={usersData}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <ModalConfirmDelete
        showProp={showDelete}
        handleClose={() => {
          setShowDelete(false);
        }}
        userDeleteData={userDeleteData}
      />
    </CRow>
  );
}

export default Account;
