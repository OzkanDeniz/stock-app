import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { object, string, number, date, InferType } from "yup";
// import { login } from "../services/useApiRequests";
import useApiRequests from "../services/useApiRequests";

const Login = () => {

  const {login} = useApiRequests()
  const loginSchema = object({
    password: string()
      .required("Şifre zorunludur!")
      .min(8, "Şifre en az 8 karakter içermelidir!")
      .max(16, "Şifre en fazla 16 karakter içermelidir!")
      .matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir!")
      .matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir!")
      .matches(
        /[@$!%*?&]+/,
        "Şifre en az bir özel karakter (@$!%*?&) içermelidir!"
      ),

    email: string()
      .email("Lütfen geçerli email giriniz")
      .required("Email zorunludur!"),
  });

  return ( 
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              //? POST  (login)
              login(values)
              //? Formu temizleme
              //? Mesaj  (Toast)
              //? Routing  (Stock)
              //? Global state güncellemesi  (yani Redux güncellemesi)
              actions.resetForm(); //submite basınca formu resetliyor yani formdaki yazıları siliyor
              actions.setSubmitting(false); //? isSubmitting (Boolean)
            }}
          >
            {({
              isSubmitting,
              handleChange,
              values,
              touched,
              errors,
              handleBlur,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    // onChange={(e)=> [e.target.id] = e.target.value} //normalde ilgili textfield objesinin güncellenmesi böyle sağlanırdı önceden
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)} //errors hataları validation formikten ten gelir fakat bu projede yup tan validateSchemadan gelecek
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur} //EVENT = {FONSİYON} İKİLİSİ
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
