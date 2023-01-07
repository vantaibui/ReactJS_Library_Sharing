import React, { useState } from 'react';

const FormControls = () => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setValues((prevState) => {
      // cần khi thực hiện 1 số logic
    //   return {
    //     ...prevState,
    //     [name]: value
    //   }
    // });
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" defaultValue="" onChange={(e) => handleChange(e)} />
      <input name="password" defaultValue="" onChange={(e) => handleChange(e)} />

      <button type="submit">Submit</button>
    </form>
  )
}

export default FormControls