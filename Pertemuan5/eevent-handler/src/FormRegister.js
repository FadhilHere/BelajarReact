import React, { useState } from "react";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    //update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    //Perform validation
    if (name === "username" && value === "") {
      setFormErrors({
        ...formErrors,
        username: "Username is required.",
      });
    } else if (name === "password" && value === "") {
      setFormErrors({
        ...formErrors,
        password: "Password is required.",
      });
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      setFormErrors({
        ...formErrors,
        email: "Invalid email address",
      });
    } else {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Perform validation before submitting the form
    const validationErrors = Object.keys(formData).reduce((errors, name) => {
      if (formData[name] === "") {
        errors[name] = `${
          name.charAt(0).toUpperCase() + name.slice(1)
        } is required.`;
      } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(formData[name])) {
        errors[name] = "Invalid email address.";
      }
      return errors;
    }, {});

    // Update form errors
    setFormErrors(validationErrors);

    //Check if there are any validation errors
    if (Object.values(validationErrors).every((error) => error === "")) {
      // Perform custom business logic or submit the form
      console.log("Form submitted successfully!");
      console.log("Form data:", formData);
    } else {
      console.log("Form validation failed. Please check the errors.");
    }
  };

  const [file, setFile] = useState();
  function handleChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <form>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} accept="image/*" />
      {file && (
        <img
          src={file}
          alt="Uploaded Image"
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        />
      )}
      <br />
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.username}</span>
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.password}</span>
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.email}</span>
      </label>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default FormRegister;
