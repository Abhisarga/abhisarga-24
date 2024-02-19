import { Button, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePostRequest } from "../../hooks/fetcher";
import schema from "../../utils/schema";
import classes from "./style.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { data, trigger } = usePostRequest(schema.mutations.auth.login);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (data) {
      if (data?.data?.Login?.status === "success") {
        formik.resetForm();
        navigate("/");
      } else {
        console.log(data);
        setErrorText(data?.data?.Login?.data);
        formik.setValues((prev) => ({ ...prev, password: "" }));
        formik.setFieldTouched("password", false);
      }
    }
  }, [data]);

  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (
      !/^.{8,}$/.test(values.password) ||
      !/[a-z]/.test(values.password) ||
      !/[A-Z]/.test(values.password) ||
      !/\d/.test(values.password) ||
      !/[@$!%*?&]/.test(values.password)
    ) {
      errors.password =
        "The password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    if (!values.email) {
      errors.email = "email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      await trigger({
        email: values.email,
        password: values.password,
      });
      console.log(values.email, values.password);
    },
  });

  return (
    <div className={classes.loginContainer}>
      <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
        <Input
          type="email"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          autoComplete="email"
        />

        <Input
          type="password"
          label="Password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          autoComplete="password"
        />

        <Button type="submit" radius="full" size="lg">
          Login
        </Button>
        <p className={classes.errorMessage}>
          {formik.errors.email || formik.errors.password || errorText || " "}
        </p>
      </form>

      <div className={classes.registerLink}>
        <p>New here?</p>
        <Link to="/register" className={classes.rlink}>
          register now!
        </Link>
      </div>
    </div>
  );
};

export default Login;
