import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import Image from "assets/images/contactus.jpg";
//validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "features/user/userSlice";
import { setSnackbar } from "features/snackBar/snackBarSlice";

//mui components
import Grid from "@mui/material/Grid";
import { TextField, Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

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
    <Grid container spacing={2}>
      <Typography
        sx={{
          color: "black",
          p: 4,
        }}
      >
        نحن نقدر مدخلات وتعليقات أهالي البلد. يرجى استخدام النموذج المقدم
        لمشاركة أفكاركم واقتراحاتكم واهتماماتكم معنا. ونعدكم بقراءة كل رسالة
        بعناية ومراعاة جميع وجهات النظر بينما نعمل على تلبية احتياجات بلديتنا .
        نشكرك على ثقتك بنا. إذا كانت لديك أي أسئلة أخرى ، فلا تتردد في التواصل
        معنا
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
          placeholder="كيف يمكننا مساعدتك ..."
          fullWidth
          margin="normal"
          multiline
          rows="4"
          onChange={validation.handleChange}
          error={
            validation.touched.message && Boolean(validation.errors.message)
          }
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
      </Grid>
    </Grid>
  );
};

export default ContactForm;
