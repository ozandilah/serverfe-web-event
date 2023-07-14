import React from "react";
import { Container, Nav, Navbar, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import SBreadCrumb from "../../components/Breadcrumb";
import SButton from "../../components/Button";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/signin" replace={true} />;
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Semina</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Categories</Nav.Link>
              <Nav.Link href="#features">Talents</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
