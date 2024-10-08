import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Layout from "./../components/Layout/Layout";
import "../styles/homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const img1 =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const img2 =
    "https://img.mensxp.com/media/content/2020/Jul/header_5f0983fa18ce3.jpeg?w=820&h=540&cc=1";
  return (
    <Layout>
      <div className="container mt-3">
        <Slider />
        <div className="row">
          <h1>Category</h1>
          <div className="col-md-5">
            <div className="Imagecontainer">
              <img src={img1} alt="Rent" style={{ width: "100%" }} />
              <button
                className="btn"
                onClick={() => navigate("/category/rent")}
              >
                FIND APARTMENT
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <div className="Imagecontainer">
              <img src={img2} alt="Rent" style={{ width: "100%" }} />
              <button
                className="btn"
                onClick={() => navigate("/category/sale")}
              >
                FIND ROOMMATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;