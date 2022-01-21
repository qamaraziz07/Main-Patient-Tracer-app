import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase";

const DoctorPatients = () => {
  const [patients, setPatients] = useState([]);
  const [registerDocPatients, setregisterDocPatients] = useState([]);

  const { id } = useParams();

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
    const search = patients.filter((pat) => {
      return pat.doctorId === id;
    });
    setregisterDocPatients(search);
  }, [patients, id]);

  return (
    <div className="patientsList">
      <h1> Patients </h1>
      {registerDocPatients.map((patient, ind) => {
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
            
          </div>
        );
      })}
    </div>
  );
};

export default DoctorPatients;
