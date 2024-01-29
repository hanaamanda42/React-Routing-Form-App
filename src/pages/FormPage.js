// src/pages/FormPage.js
import React, { useState } from "react";
import axios from "axios";

const FormPage = () => {
  const [formData] = useState({
  });

  const handleChange = (e) => {

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    try {
    
      const response = await axios.post("https://bit.ly/API-TEST", formData);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error while submitting form:", error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        {/* Example input field */}
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        {/* Add more input fields as needed */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
