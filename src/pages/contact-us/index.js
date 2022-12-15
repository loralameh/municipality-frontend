import React from "react";
import { Form, Field, ErrorMessage } from "formik";

//mui components
import { TextField, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

//validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "features/user/userSlice";
import { setSnackbar } from "features/snackBar/snackBarSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const { snackBarSettings, isLoading, user } = useSelector(
    (store) => store.user
  );

  const validation = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      type: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("البريد الالكتروني الدي ادخلته غير صالح")
        .required("البريد الالكتروني مطلوب"),
      password: Yup.string().required("كلمة السر مطلوبة"),
    }),
    onSubmit: (values) => {
      console.log("login", values);
      // dispatch(loginUser(values));
    },
  });

  return (
    <>
      <TextField
        name="name"
        label="الاسم "
        fullWidth
        margin="normal"
        onChange={validation.handleChange}
        error={validation.touched.name && Boolean(validation.errors.name)}
        helperText={validation.touched.name && validation.errors.name}
      />
      <TextField
        name="email"
        label="البريد الالكتروني"
        fullWidth
        margin="normal"
        onChange={validation.handleChange}
        error={validation.touched.email && Boolean(validation.errors.email)}
        helperText={validation.touched.email && validation.errors.email}
      />
      <TextField
        name="message"
        label="الرسالة"
        fullWidth
        margin="normal"
        multiline
        rows="4"
        onChange={validation.handleChange}
        error={validation.touched.message && Boolean(validation.errors.message)}
        helperText={validation.touched.message && validation.errors.message}
      />

      <LoadingButton
        type="submit"
        fullWidth
        loading={isLoading}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        ارسال
      </LoadingButton>
    </>
  );
};

export default ContactForm;
