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
import PropTypes from "prop-types"; // Import PropTypes

const TableAccount = (props) => {
  const { data, onUpdate, onDelete } = props;

  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>ID</CTableHeaderCell>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>image</CTableHeaderCell>
          <CTableHeaderCell>Registered</CTableHeaderCell>
          <CTableHeaderCell>category</CTableHeaderCell>
          <CTableHeaderCell>currentBid</CTableHeaderCell>
          <CTableHeaderCell>Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {data.map((item, index) => (
          <CTableRow key={index}>
            <CTableDataCell>{item.id}</CTableDataCell>
            <CTableDataCell>{item.name}</CTableDataCell>
            <CTableDataCell>{item.image}</CTableDataCell>
            <CTableDataCell>{item.registered}</CTableDataCell>
            <CTableDataCell>{item.category}</CTableDataCell>
            <CTableDataCell>{item.currentBid}</CTableDataCell>
            {/* <CTableDataCell>
              {item.status === "Active" ? (
                <CBadge color="success">Active</CBadge>
              ) : (
                <CBadge color="danger">Banned</CBadge>
              )}
            </CTableDataCell> */}
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
      avatar: PropTypes.string, // Assuming avatar, registered, role, and status are optional
      registered: PropTypes.string,
      role: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TableAccount;
