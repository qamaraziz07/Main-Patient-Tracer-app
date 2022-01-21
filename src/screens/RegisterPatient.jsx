import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Input from "../components/Input";
import { useNavigate, useParams } from "react-router";
import { db } from "../firebase";
import Button from "../components/Button";

const RegisterPatient = () => {
  const { id } = useParams();

  const patientId = id.split(".")[0];
  const doctorId = id.split(".")[1];

  const navigate = useNavigate();
  const [patientDetail, setPatientDetail] = useState({
    name: "",
    age: 0,
    disease: "",
    date: "",
    patientId: patientId,
    doctorId: doctorId,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "patients"), patientDetail);
      console.log("Document written with ID: ", docRef.id);
      alert("Patient Created successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setPatientDetail((prev) => ({
      ...prev,
      name: "",
      age: 0,
      disease: "",
      date: "",
      patientId: "",
      
    }));
    navigate(`/patientDetails/${patientId}`);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Register Patients</h1>
        <Input
          required={true}
          placeholder="Name"
          type="text"
          value={patientDetail.name}
          onChange={(value) => {
            setPatientDetail((prev) => ({
              ...prev,
              name: value,
            }));
          }}
        />
        <Input
          required={true}
          type="number"
          placeholder="Age"
          value={patientDetail.age}
          onChange={(value) => {
            setPatientDetail((prev) => ({
              ...prev,
              age: value,
            }));
          }}
        />
        <Input
          required={true}
          type="text"
          placeholder="Disease"
          value={patientDetail.disease}
          onChange={(value) => {
            setPatientDetail((prev) => ({
              ...prev,
              disease: value,
            }));
          }}
        />
        <Input
          required={true}
          type="date"
          value={patientDetail.date}
          onChange={(value) => {
            setPatientDetail((prev) => ({
              ...prev,
              date: value,
            }));
          }}
        />
        <Button type="submit" title="Register" />
      </form>
    </div>
  );
};

export default RegisterPatient;
