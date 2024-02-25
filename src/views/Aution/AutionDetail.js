import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
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
const AutionDetail = () => {
  const { autionId } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  const location = useLocation();
  const userEditData = useMemo(
    () => location.state?.userEditData || {},
    [location.state?.userEditData]
  );
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thông Tin Chi Tiết Autionn với ID {autionId} </strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị chi tiết 1 auction trong hệ thống
            </p>
            <CButton color="primary" onClick={() => navigate(-1)}>
              Quay Lại
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AutionDetail;
