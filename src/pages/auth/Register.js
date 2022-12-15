import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

//mui components
import {
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

//components
import Copyright from "components/shared/navigation/Copyright";

//images
import team from "assets/images/team.jpg";
import Logo from "assets/images/logo.png";

//validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux call
import { registerUser } from "features/user/userSlice";
import { setSnackbar } from "features/snackBar/snackBarSlice";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { snackBarSettings, isLoading, user } = useSelector(
    (store) => store.user
  );

  useEffect(() => {
    console.log("user changed");
    if (user?.token != null) {
      console.log("user changed and found");
      dispatch(setSnackbar(snackBarSettings));
      navigate("/");
    }
  }, [user]);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("الاسم مطلوب"),
      email: Yup.string()
        .email("البريد الالكتروني الدي ادخلته غير صالح")
        .required("البريد الالكتروني مطلوب"),
      password: Yup.string()
        .required("كلمة السر مطلوبة")
        .min(6, "كلمة السر قصيرة"),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "كلمة السر غير مطابقة"
      ),
    }),
    onSubmit: (values) => {
      console.log("register", values);
      dispatch(registerUser(values));
    },
  });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${team})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ display: "block" }}
            alt="municipality logo"
            src={Logo}
            // sx={{ m: 1, bgcolor: "secondary.main" }}
          />

          <Typography component="h1" variant="h5">
            تسجيل حساب
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={validation.handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="الاسم "
              name="name"
              autoComplete="name"
              autoFocus
              value={validation.values.name}
              onChange={validation.handleChange}
              error={validation.touched.name && Boolean(validation.errors.name)}
              helperText={validation.touched.name && validation.errors.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="البريد الالكتروني"
              name="email"
              autoComplete="email"
              value={validation.values.email}
              onChange={validation.handleChange}
              error={
                validation.touched.email && Boolean(validation.errors.email)
              }
              helperText={validation.touched.email && validation.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="كلمة السر"
              type="password"
              autoComplete="current-password"
              value={validation.values.password}
              onChange={validation.handleChange}
              error={
                validation.touched.password &&
                Boolean(validation.errors.password)
              }
              helperText={
                validation.touched.password && validation.errors.password
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              name="passwordConfirmation"
              label=" تأكيد كلمة السر"
              id="passwordConfirmation"
              autoComplete="current-password"
              value={validation.values.passwordConfirmation}
              onChange={validation.handleChange}
              error={
                validation.touched.passwordConfirmation &&
                Boolean(validation.errors.passwordConfirmation)
              }
              helperText={
                validation.touched.passwordConfirmation &&
                validation.errors.passwordConfirmation
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="تذكرني"
            />

            <LoadingButton
              type="submit"
              fullWidth
              loading={isLoading}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              دخول
            </LoadingButton>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  نسيت كلمة السر؟
                </Link>
              </Grid>
              <Grid item>
                <Typography>
                  لدي حساب؟
                  <Link href="/login" variant="body2">
                    تسجيل الدخول
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 15 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
