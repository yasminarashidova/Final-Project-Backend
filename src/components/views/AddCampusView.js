import React, { useState } from "react";

const AddCampusView = ({ handleSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: ""
  });
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let err = "";
    if ((field === "name" || field === "address") && !value.trim()) {
      err = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    }
    if (field === "imageUrl" && value && !/^https?:\/\//.test(value)) {
      err = "Image URL must be valid.";
    }
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(form).forEach((field) => {
      const err = validate(field, form[field]);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      handleSubmit(form);
    }
  };

  return (
    <div>
      <h1>Add New Campus</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div>
          <label>Address: </label>
          <input name="address" value={form.address} onChange={handleChange} />
          {errors.address && <span style={{ color: "red" }}>{errors.address}</span>}
        </div>
        <div>
          <label>Description: </label>
          <input name="description" value={form.description} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL: </label>
          <input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
          {errors.imageUrl && <span style={{ color: "red" }}>{errors.imageUrl}</span>}
        </div>
        <button type="submit">Add Campus</button>
      </form>
    </div>
  );
};

export default AddCampusView; 