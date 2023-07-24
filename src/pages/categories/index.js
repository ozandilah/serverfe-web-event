import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import SBreadCrumb from "../../components/Breadcrumb";
import SButton from "../../components/Button";
import SNavbar from "../../components/Navbar";
import axios from "axios";
import { config } from "../../configs";

export default function Categories() {
  const token = localStorage.getItem("token");

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const [isLoading, setisLoading] = useState(false);
  console.log("data");
  console.log(data);

  useEffect(() => {
    const getCategoriesAPI = async () => {
      setisLoading(true);
      try {
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res.data);
        setisLoading(false);
        setData(res.data.data);
      } catch (error) {
        setisLoading(false);
        console.log(error);
      }
    };
    getCategoriesAPI();
  }, []);

  if (!token) return <Navigate to="/signin" replace={true} />;
  return (
    <>
      {console.log("render")}
      <SNavbar />
      <Container className="mt-3">
        <SBreadCrumb textSecound="Categories" />

        <SButton action={() => navigate("/categories/create")}>Tambah</SButton>
        <Table className="mt-3" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Spinner />
            ) : (
              data.map((data, index) => (
                <tr key={index}>
                  <td>{(index += 1)}</td>
                  <td>{data.name}</td>
                  <td>Fadilah</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
