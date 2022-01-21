import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button";
import { db } from "../../firebase";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    onSnapshot(collection(db, "doctors"), (snapshot) => {
      setDoctors(
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
    <div className="doctorList">
      <h1>All Doctors</h1>
      {doctors
        ? doctors.map((doctor, ind) => {
            return (
              <div key={ind} className="doctorDetails">
                <h2>
                  Name: <b>{doctor.name}</b>
                </h2>
                <h2>
                  Email: <b>{doctor.email}</b>
                </h2>
                <h2>
                  <Button
                    title="See Patients"
                    onClick={() => {
                      navigate(`/doctorPatients/${doctor.id}`);
                    }}
                  />
                </h2>
              </div>
            );
          })
        : "No Doctor"}
    </div>
  );
};

export default DoctorList;
