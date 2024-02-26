import React, { useState } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import ModalConfirmDelete from "./ModalConfirmDelete";
import ModalConfirmTransaction from "./ModalConfirmTransaction";
import TableTrannsacton from "./TableTransaction";
import ChangeTabTransaction from "./ChangeTabTransaction";
import { useNavigate } from "react-router-dom";

function TransactionRequest() {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmData, setConfirmData] = useState({});
  const [data, setData] = useState([
    { id: 1, name: "Transac 1", money: 110000, status: "unpaid" },
    { id: 2, name: "Transac 2", money: 500000, status: "unpaid" },
    // Thêm dữ liệu mẫu khác tại đây
  ]);
  const data1 = [
    { id: 3, name: "Transac 3", money: 150000, status: "paid" },
    { id: 4, name: "Transac 4", money: 250000, status: "paid" },
    // Thêm dữ liệu mẫu khác tại đây
  ];
  const handleDelete = (transaction) => {
    console.log("Delete item with id:", transaction);
    setDeleteData(transaction);
    setShowDelete(true);
  };

  const navigate = useNavigate();
  const handleConfirm = (transaction) => {
    // Chuyển hướng đến trang UpdateUser và truyền dữ liệu userEditData
    console.log("confirm trans at id:", transaction);
    setConfirmData(transaction);
    setShowConfirm(true);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Aution</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị các đấu giá có trong hệ thống
            </p>
            <ChangeTabTransaction
              requestContent={
                <div>
                  {
                    <TableTrannsacton
                      data={data}
                      onConfirm={handleConfirm}
                      onDelete={handleDelete}
                    />
                  }
                </div>
              }
              historyContent={
                <div>
                  {<TableTrannsacton data={data1} onDelete={handleDelete} />}
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
      <ModalConfirmTransaction
        showProp={showConfirm}
        handleClose={() => {
          setShowConfirm(false);
        }}
        confirmData={confirmData}
      />
    </CRow>
  );
}

export default TransactionRequest;
