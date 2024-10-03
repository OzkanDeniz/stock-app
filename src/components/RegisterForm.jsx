import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Form } from "formik";
import { object, string } from "yup";

export const registerSchema = object({
  username: string().max(20, "Kullanıcı adı 10 karakterden az olmalıdır"),
  password: string().max(20, "Kullanıcı adı 10 karakterden az olmalıdır"),
  email: string().max(20, "Kullanıcı adı 10 karakterden az olmalıdır"),
  firstName: string().max(20, "Kullanıcı adı 10 karakterden az olmalıdır"),
  lastName: string().max(20, "Kullanıcı adı 10 karakterden az olmalıdır"),
});

const RegisterForm = ({ values, handleChange, errors, tocuhed, handleBlur }) => {
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="User Name"
          name="username"
          id="userName"
          type="text"
          variant="outlined"
        />
        <TextField
          label="First Name"
          name="first_name"
          id="firstName"
          type="text"
          variant="outlined"
        />
        <TextField
          label="Last Name"
          name="last_name"
          id="last_name"
          type="text"
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
        />
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Box>
    </Form>
  );
};

export default RegisterForm;
