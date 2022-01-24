import React from "react";

const InputImage = ({ title, error, onChange, value, ...props }) => {
  return (
        <>
      <div>
      <label> {value ? (<img src={URL.createObjectURL(value)} alt="" width="150" />) : ("No file chosen")}
        <input
          {...props}
          style={{
            ...props.style,
            display: "none"
          }}
          type="file"
          onChange={(e) => {
            // console.log({res: e.target.files})
            onChange(e.target.files);
            e.target.value = null;
          }}
          accept="image/*"
          // style={{ display: "none" }}
        />

      </label>
    </div>
    </>
  );
};

export default InputImage;
