import { addDoc, collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { db } from "../../firebase";

const CreateDoctor = () => {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);

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

  useEffect(() => {
    console.log(doctors);
  }, [doctors]);

  const [doctorDetail, setDoctorDetail] = useState({
    name: "",
    email: "",
    password: "",
    role: "doctor",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "doctors"), doctorDetail);
      console.log("Document written with ID: ", docRef.id);
      alert("Doctor Created successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setDoctorDetail((prev) => ({
      ...prev,
      name: "",
      email: "",
      password: "",
    }));
    navigate("/doctorsLists");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Doctor Registration</h1>
        <Input
          type="text"
          placeholder="Name"
          value={doctorDetail.name}
          onChange={(value) => {
            setDoctorDetail((prev) => ({
              ...prev,
              name: value,
            }));
          }}
        />
        <Input
          type="email"
          placeholder="Email"
          value={doctorDetail.email}
          onChange={(value) => {
            setDoctorDetail((prev) => ({
              ...prev,
              email: value,
            }));
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          value={doctorDetail.password}
          onChange={(value) => {
            setDoctorDetail((prev) => ({
              ...prev,
              password: value,
            }));
          }}
        />
        <Button title="Submit" />
      </form>
    </div>
  );
};

export default CreateDoctor;
