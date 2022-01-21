import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const PatientsList = () => {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "patients"), (snapshot) => {
      setPatients(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);

  return (
    <div className="patientsList">
      <h1>Patients Lists</h1>
      
      <button
        onClick={() => {
          navigate("/search");
        }}
        style={{ padding: "10px", margin: "10px", fontSize: "20px" }}
      >
        Search Patients
      </button>
      {patients?.map((patient, ind) => {
        return (
          <div className="patientDetail" key={ind}>
            <p>
              Patient Name: <b> {patient.name}</b>
            </p>
            <p>
              Patient Age: <b>{patient.age}</b>
            </p>
            <p>
              Patient Disease: <b>{patient.disease}</b>
            </p>
            <p>
              Date of Registration: <b> {patient.date}</b>
            </p>
            <img
              className="center"
              src={patient.imageUrl}
              alt="file"
              width={200}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PatientsList;
