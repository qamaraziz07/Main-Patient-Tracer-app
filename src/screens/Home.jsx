import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <div>

      <h1>Patient Tracker App</h1>
    </div>
    <div className="form">

      <Button
        title="ADMIN "
        onClick={() => {
          navigate("/admin");
        }}
        />
      
      <Button
        title="DOCTOR"
        onClick={() => {
          navigate("/doctorLogin");
        }}
      />
        <Button
          title="PATIENT "
          onClick={() => {
            navigate("/patientLogin");
          }}
        />
    </div>
    </>

  );
};

export default Home;
