import React, { useEffect } from "react";
import { Form, Field, ErrorMessage } from "formik";
import Image from "assets/images/contactus.jpg";
//validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { createContactUsMessage } from "features/contact-us/ContactUsSlice";
import { setSnackbar } from "features/snackBar/snackBarSlice";

//mui components
import Grid from "@mui/material/Grid";
import { TextField, Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const ContactForm = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const { snackBarSettings, isLoading } = useSelector(
    (store) => store.contactUs
  );

  useEffect(() => {
    if (user) {
      dispatch(setSnackbar(snackBarSettings));
    }
  }, [dispatch, snackBarSettings]);

  const validation = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required("الرسالة مطلوبة"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("login", values);
      dispatch(createContactUsMessage(values));
      resetForm();
    },
  });
  return (
    <Grid container spacing={2}>
      <Typography
        sx={{
          color: "black",
          p: 4,
        }}
      >
        نحن نقدر آراء وتعليقات أهالي البلد. يرجى استخدام النموذج المقدم لمشاركة
        أفكاركم واقتراحاتكم واهتماماتكم معنا. ونعدكم بقراءة كل رسالة بعناية
        ومراعاة جميع وجهات النظر بينما نعمل على تلبية احتياجات بلديتنا . نشكرك
        على ثقتك بنا. إذا كانت لديك أي أسئلة أخرى ، فلا تتردد في التواصل معنا
      </Typography>
      <Grid item display={{ xs: "none", md: "block" }} md={6}>
        <Box
          sx={{
            backgroundImage: `url(${Image})`,
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: 4,
            m: 0,
          }}
        >
          <Typography
            sx={{
              color: "black",
              p: 4,
            }}
            variant="h2"
          >
            نسعى لتقديم الافضل لكم !
          </Typography>
          <Typography
            sx={{
              color: "black",
              px: 4,
            }}
            variant="h4"
          >
            لأنو رأيك بهمنا ...
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          name="name"
          label="الاسم "
          fullWidth
          margin="normal"
          disabled
          value={validation.values.name}
          // onChange={validation.handleChange}
          // error={validation.touched.name && Boolean(validation.errors.name)}
          // helperText={validation.touched.name && validation.errors.name}
        />
        <TextField
          name="email"
          label="البريد الالكتروني"
          fullWidth
          margin="normal"
          disabled
          value={validation.values.email}
          // onChange={validation.handleChange}
          // error={validation.touched.email && Boolean(validation.errors.email)}
          // helperText={validation.touched.email && validation.errors.email}
        />
        <TextField
          name="message"
          label="الرسالة"
          placeholder="كيف يمكننا مساعدتك ..."
          fullWidth
          margin="normal"
          multiline
          rows="4"
          value={validation.values.message}
          onChange={validation.handleChange}
          error={
            validation.touched.message && Boolean(validation.errors.message)
          }
          helperText={validation.touched.message && validation.errors.message}
        />

        <LoadingButton
          onClick={validation.handleSubmit}
          fullWidth
          loading={isLoading}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          ارسال
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
