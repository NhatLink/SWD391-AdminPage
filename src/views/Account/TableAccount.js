import React from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CBadge,
} from "@coreui/react";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types"; // Import PropTypes

const TableAccount = (props) => {
  const { data, onUpdate, onDelete } = props;

  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>ID</CTableHeaderCell>
          <CTableHeaderCell>UserName</CTableHeaderCell>
          <CTableHeaderCell>FullName</CTableHeaderCell>
          <CTableHeaderCell>Email</CTableHeaderCell>
          {/* <CTableHeaderCell>Gender</CTableHeaderCell> */}
          {/* <CTableHeaderCell>Avatar</CTableHeaderCell> */}
          {/* <CTableHeaderCell>Phone</CTableHeaderCell>
          <CTableHeaderCell>Address</CTableHeaderCell> */}
          <CTableHeaderCell>Role</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {data.map((item, index) => (
          <CTableRow key={index}>
            <CTableDataCell>{index + 1}</CTableDataCell>
            {/* <CTableDataCell style={{ minWidth: "auto", width: "auto" }}>
              <Image
                src={item.image}
                alt="Orchid"
                style={{ width: "10%", height: "auto" }}
                roundedCircle
              />
            </CTableDataCell> */}
            <CTableDataCell>{item.username}</CTableDataCell>
            <CTableDataCell>{item.fullName}</CTableDataCell>
            <CTableDataCell>{item.email}</CTableDataCell>
            {/* <CTableDataCell>{item.gender}</CTableDataCell> */}
            {/* <CTableDataCell>{item.phone}</CTableDataCell>
            <CTableDataCell>{item.address}</CTableDataCell> */}
            <CTableDataCell>{item.role_id.title}</CTableDataCell>
            <CTableDataCell>
              {item.status === true ? (
                <CBadge color="success">Active</CBadge>
              ) : (
                <CBadge color="danger">Banned</CBadge>
              )}
            </CTableDataCell>
            <CTableDataCell>
              {onUpdate && (
                <CButton color="success" onClick={() => onUpdate(item)}>
                  Detail
                </CButton>
              )}{" "}
              {onDelete && (
                <CButton color="danger" onClick={() => onDelete(item)}>
                  Delete
                </CButton>
              )}
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
};

TableAccount.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      registered: PropTypes.string,
      role: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TableAccount;
