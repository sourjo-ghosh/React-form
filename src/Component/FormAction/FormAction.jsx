import React from "react";

const FormAction = () => {
  const HandleFormAction = (formData) => {
    console.log(formData.get('name'))
    console.log(formData.get('email'))
    // console.log(formData);
  };
  return (
    <div>
      <form action={HandleFormAction}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FormAction;
