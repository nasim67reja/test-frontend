import React from 'react';
import { ErrorMessage, useField } from 'formik';
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input
        {...field}
        {...props}
        placeholder={label}
        className={`shipping_input_box w-full outline-none focus:border-b focus:border-teal-500 focus:ring-0 focus:outline-none rounded-md ${
          meta.touched && meta.error && 'is_invalid'
        }`}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="error"
      />
    </div>
  );
};
