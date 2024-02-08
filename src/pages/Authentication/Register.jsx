import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { ButtonBase, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { registerUserAction } from '../../redux/Auth/auth.action';
import { useNavigate } from 'react-router-dom';


const initialValues={
  firstName:"",
  lastName:"",
  email :"", 
  password:"",
  gender:""
};

const validationSchema={
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().min(6, "Password must be atleast 6 characters").required("Password is required"),
  gender: Yup.string().required("Gender is required")
};


const Register = () => {

  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    values.gender = gender;
    console.log("Handle Submit", values);
    dispatch(registerUserAction({data: values}));
  }

  const handleChange = (e) => {
    setGender(e.target.value);
  }

  return (
    <>
      <Formik 
        onSubmit={handleSubmit} 
        initialValues={initialValues} 
        // validationSchema={validationSchema}
      >
        <Form className="space-y-5">
          <div className='space-y-5'>
            <div>
              <Field 
                as={TextField} 
                name="firstName" 
                placeholder="First Name" 
                type="text" 
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="firstName" component={"div"} className='text-red-500'/>
            </div>
            <div>
              <Field 
                as={TextField} 
                name="lastName" 
                placeholder="Last Name" 
                type="text" 
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="lastName" component={"div"} className='text-red-500'/>
            </div>
            <div>
              <Field 
                as={TextField} 
                name="email" 
                placeholder="Email" 
                type="email" 
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="email" component={"div"} className='text-red-500'/>
            </div>
            <div>
              <Field 
                as={TextField} 
                name="password" 
                placeholder="Password" 
                type="password" 
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="password" component={"div"} className='text-red-500'/>
            </div>
            <div>
            <RadioGroup
              aria-label="gender"
              name="gender"
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />

              <ErrorMessage name="gender" component={"div"} className='text-red-500'/>

            </RadioGroup>
            </div>
          </div>
          <Button 
            sx={{padding:".8rem 0rem"}} 
            fullWidth 
            type='submit' 
            variant="contained" 
            color="primary"
          >
            Register
          </Button>
        </Form>
      </Formik>
      <div className='flex gap-2 justify-center items-center pt-5'>
        <p>Already have an account ?</p>
        <Button onClick={() => navigate("/login")}>login</Button>
      </div>
    </>
  )
}

export default Register;