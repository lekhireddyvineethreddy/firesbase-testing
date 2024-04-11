import React, { useState } from 'react';
import axios from 'axios';

const FirebaseForm = () => {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('', formData);
      console.log('Form data sent to Firebase successfully!', response.data);
      setFormData({});
    } catch (error) {
      console.error('Error sending form data to Firebase: ', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input 
        type="text" 
        name="name" 
        value={formData.name || ''} 
        onChange={handleInputChange} 
        placeholder="Enter your name"
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email || ''} 
        onChange={handleInputChange} 
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FirebaseForm;
