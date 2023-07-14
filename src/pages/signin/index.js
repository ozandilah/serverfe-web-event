import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import axios from "axios";
import SAlert from "../../components/Alert";
import { Navigate, useNavigate } from "react-router-dom";
import { config } from "../../configs";
import SForm from "./form";

function PageSignIn() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "danger",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${config.api_host_dev}/cms/auth/sigin`,
        form
      );
      console.log(res.data.data.token);
      localStorage.setItem("token", res.data.data.token);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: error?.response?.data?.msg ?? "Internal Server Error",
        type: "danger",
      });
      console.log(error.response.data.msg);
    }
  };

  if (token) return <Navigate to="/" replace={true} />;
  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <SAlert message={alert.message} type={alert.type} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title>Form Login</Card.Title>
          <SForm
            form={form}
            handleChange={handleChange}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignIn;
