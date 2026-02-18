import React from "react";
import { useFormik } from "formik";

const UserForm = ({ onAdd }) => {
  const formik = useFormik({
    initialValues: {
      UserId: "",
      UserName: "",
      Password: "",
      Age: "",
      Mobile: "",
      Subscribed: false
    },

    onSubmit: (values, { resetForm }) => {
      onAdd(values);    
      resetForm();       
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginBottom: "20px" }}>

      <input type="text" name="UserId" placeholder="User ID" onChange={formik.handleChange} value={formik.values.UserId} required
      />

      <input type="text" name="UserName" placeholder="User Name" onChange={formik.handleChange} value={formik.values.UserName} />

      <input type="password" name="Password" placeholder="Password" onChange={formik.handleChange} value={formik.values.Password}/>

      <input type="number" name="Age" placeholder="Age" onChange={formik.handleChange} value={formik.values.Age}/>

      <input type="text" name="Mobile" placeholder="Mobile" onChange={formik.handleChange} value={formik.values.Mobile} />

      <label> Subscribed
    <input type="checkbox" name="Subscribed" onChange={formik.handleChange} checked={formik.values.Subscribed}
    />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
