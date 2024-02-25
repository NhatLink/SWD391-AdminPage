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

const CustomTable = (props) => {
  const { data, onUpdate, onDelete } = props;
  // Define PropTypes
  CustomTable.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>ID</CTableHeaderCell>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {data.map((item, index) => (
          <CTableRow key={index}>
            <CTableDataCell>{item.id}</CTableDataCell>
            <CTableDataCell>{item.name}</CTableDataCell>
            <CTableDataCell>
              {item.status === "active" ? (
                <CBadge color="success">Active</CBadge>
              ) : (
                <CBadge color="warning">Not Active</CBadge>
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

export default CustomTable;
