import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import Input from "../components/Input";
import { auth } from "../firebase";
import Button from "../components/Button";

const PatientLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      const userID = userCredential.user.uid;
      navigate(`/patientDetails/${userID}`);
      console.log(userCredential);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="form">
      <h1>Login</h1>
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
          type="Password"
          placeholder="password"
          value={user.password}
          onChange={(value) => {
            setUser((prev) => ({
              ...prev,
              password: value,
            }));
          }}
        />
        <Button type="submit" title="Login" />
      </form>
      
      <Button
        title="Sign Up"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default PatientLogin;
