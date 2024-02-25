import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import ModalConfirmDelete from "./ModalConfirmDelete";
import TableAution from "src/views/Aution/TableAution";
import ChangeTabAution from "./ChangeTabAution";
import { NavLink, Link, useNavigate } from "react-router-dom";
function Aution() {
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

  const navigate = useNavigate();
  const handleUpdateUser = (aution) => {
    // Chuyển hướng đến trang UpdateUser và truyền dữ liệu userEditData
    navigate(`/aution-detail/${aution.id}`);
    console.log("Update user at id:", aution.id);
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
}

export default Aution;
