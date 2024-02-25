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
  CRow,
} from "@coreui/react";
import PropTypes from "prop-types"; // Import PropTypes

const TableTrannsacton = ({ data = [], onUpdate, onDelete }) => {
  // Cung cấp giá trị mặc định cho data
  return (
    <CRow>
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
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell>ID</CTableHeaderCell>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Money</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
            <CTableHeaderCell>Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>{item.id}</CTableDataCell>
              <CTableDataCell>{item.name}</CTableDataCell>
              <CTableDataCell>{item.money}</CTableDataCell>
              <CTableDataCell>
                {item.status === "paid" ? (
                  <CBadge color="success">Paid</CBadge>
                ) : (
                  <CBadge color="warning">Unpaid</CBadge>
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
    </CRow>
  );
};

TableTrannsacton.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      money: PropTypes.number.isRequired,
      status: PropTypes.string, // Giả sử rằng status cũng là một phần của data object
    })
  ), // Không còn là isRequired
  onUpdate: PropTypes.func, // Không bắt buộc
  onDelete: PropTypes.func, // Không bắt buộc
};

export default TableTrannsacton;
