/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { useState, useEffect } from "react";

export const useCustomForm = (callback, validate) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(inputs));
    setIsSubmitting(true);
  };

  // const handleSubmit = event => {
  //   if (event) event.preventDefault();
  //   setErrors(validate(inputs));
  //   setIsSubmitting(true);
  // };

  const hanldeInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  console.log(inputs);

  return {
    handleSubmit,
    hanldeInputChange,
    inputs,
    errors
  };
};
