import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "features/user/userSlice";
import { setSnackbar } from "features/snackBar/snackBarSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { snackBarSettings, isLoading, user } = useSelector(
    (store) => store.user
  );

  useEffect(() => {
    if (user) {
      dispatch(setSnackbar(snackBarSettings));
      navigate("/");
    }
  }, [user, dispatch, navigate, snackBarSettings]);

  const validation = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("البريد الالكتروني الدي ادخلته غير صالح")
        .required("البريد الالكتروني مطلوب"),
      password: Yup.string().required("كلمة السر مطلوبة"),
    }),
    onSubmit: (values) => {
      console.log("login", values);
      dispatch(loginUser(values));
    },
  });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* {snackBarSettings && <SnackBar set={snackBarSettings} />} */}
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
            تسجيل دخول
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
              id="email"
              label="البريد الالكتروني"
              name="email"
              autoComplete="email"
              autoFocus
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
                  ليس لديك حساب؟
                  <Link href="/register" variant="body2">
                    سجل حساب
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
