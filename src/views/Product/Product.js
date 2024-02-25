import React from "react";
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
import TableAccount from "./TableProduct";
import { useNavigate } from "react-router-dom";
// import DocsExample  from 'src/components/DocsExample'
function Product() {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const handleUpdate = (user) => {
    console.log("Update item with id:", user.id);
    navigate(`/update-user/${user.id}`, { state: { userEditData: user } });
    // Thêm logic update tại đây
  };

  const handleDelete = (user) => {
    console.log("Delete item with id:", user.id);
    // Cập nhật state để loại bỏ item đã xóa
    // setData(data.filter((item) => item.id !== id));
  };
  const orchidAuctionData = [
    {
      id: 1,
      name: "Phalaenopsis amabilis",
      image: "phalaenopsis-amabilis.jpg",
      registered: "2023/01/15",
      category: "Phalaenopsis",
      currentBid: 50,
    },
    {
      id: 2,
      name: "Cattleya labiata",
      image: "cattleya-labiata.jpg",
      registered: "2023/02/20",
      category: "Cattleya",
      currentBid: 75,
    },
    {
      id: 3,
      name: "Dendrobium nobile",
      image: "dendrobium-nobile.jpg",
      registered: "2023/01/30",
      category: "Dendrobium",
      status: "Inactive",
      _selected: true,
    },
    {
      id: 4,
      name: "Vanda coerulea",
      image: "vanda-coerulea.jpg",
      registered: "2023/03/12",
      category: "Vanda",
      currentBid: 100,
    },
    {
      id: 5,
      name: "Oncidium Sharry Baby",
      image: "oncidium-sharry-baby.jpg",
      registered: "2023/02/05",
      category: "Oncidium",
      currentBid: 55,
    },
    {
      id: 6,
      name: "Paphiopedilum Maudiae",
      image: "paphiopedilum-maudiae.jpg",
      registered: "2023/01/20",
      category: "Paphiopedilum",
      currentBid: 65,
    },
    {
      id: 7,
      name: "Miltonia spectabilis",
      image: "miltonia-spectabilis.jpg",
      registered: "2023/02/28",
      category: "Miltonia",
      currentBid: 30,
      _selected: true,
    },
    {
      id: 8,
      name: "Cyrtopodium punctatum",
      image: "cyrtopodium-punctatum.jpg",
      registered: "2023/03/05",
      category: "Cyrtopodium",
      currentBid: 45,
    },
    {
      id: 9,
      name: "Laelia anceps",
      image: "laelia-anceps.jpg",
      registered: "2023/02/15",
      category: "Laelia",
      currentBid: 70,
    },
    {
      id: 10,
      name: "Masdevallia veitchiana",
      image: "masdevallia-veitchiana.jpg",
      registered: "2023/01/25",
      category: "Masdevallia",
      currentBid: 85,
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
              data={orchidAuctionData}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Product;
