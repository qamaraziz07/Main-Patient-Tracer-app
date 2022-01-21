import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
  } from "firebase/auth";
  import React, { useState } from "react";
  import { useNavigate, useParams } from "react-router";
  import Button from "../../components/Button";
  import Input from "../../components/Input";
  import { auth } from "../../firebase";
  
  const CreatePatient = () => {
    const navigate = useNavigate();
  
    const { id } = useParams();
  
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        await sendEmailVerification(auth.currentUser);
        const userID = userCredential.user.uid;
        navigate(`/register/${userID}.${id}`);
        console.log(userCredential);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    return (
      <div className="form">
        <h1>Create Patient</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(value) => {
              setUser((prev) => ({
                ...prev,
                email: value,
              }));
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(value) => {
              setUser((prev) => ({
                ...prev,
                password: value,
              }));
            }}
          />
          <Button type="submit" title="Created Patient"/>
          <br />
          
          <Button
            title="See Your Patients"
            onClick={() => {
              navigate(`/doctorPatients/${id}`);
            }}
          />
        </form>
      </div>
    );
  };
  
  export default CreatePatient;
  