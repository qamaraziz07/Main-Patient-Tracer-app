import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../firebase";

const PatientDetails = () => {
  const { id } = useParams();
  const [patients, setPatients] = useState([]);
  const [patientDetails, setPatientDetails] = useState([]);

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

  useEffect(() => {
    const search = patients?.filter((ele) => {
      return ele.patientId === id;
    });
    setPatientDetails(search);
  }, [patients, id]);

  return (
    <div className="singlePatient">
      <h1>Patient Details</h1>
      {patientDetails.map((ele, ind) => {
        return (
          <div className="patientDetail" key={ ind}>
            <p>
              Patient Name: <b> {ele.name}</b>
            </p>
            <p>
              Patient Age: <b>{ele.age}</b>
            </p>
            <p>
              Patient Disease: <b>{ele.disease}</b>
            </p>
            <p>
              Date of Registration: <b> {ele.date}</b>
            </p>
           
          </div>
        );
      })}
    </div>
  );
};

export default PatientDetails;
