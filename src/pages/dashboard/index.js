import React from "react";
import { Container, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import SBreadCrumb from "../../components/Breadcrumb";
import SButton from "../../components/Button";
import SNavbar from "../../components/Navbar";

export default function DashboardPage() {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/signin" replace={true} />;
  return (
    <>
      <SNavbar />
      <Container className="mt-3">
        <SBreadCrumb />
        <SButton>Tambah</SButton>
        <Table className="mt-3" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Fauzan</td>
              <td>Fadilah</td>
              <td>@zan</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Fauzan</td>
              <td>Fadilah</td>
              <td>@zan</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Fauzan</td>
              <td>Fadilah</td>
              <td>@zan</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
