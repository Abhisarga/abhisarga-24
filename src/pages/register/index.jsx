import classes from "./style.module.css";
import { Link } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import { usePostRequest } from "../../hooks/fetcher";
import schema from "../../utils/schema";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Hash from "../../utils/hash-client";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { data, trigger } = usePostRequest(schema.mutations.auth.register);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (data) {
      if (data?.Register?.status === "success") {
        navigate("/");
      } else {
        setErrorText(data?.Register?.data);
      }
    }
  }, [data]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = " name is required!";
    }

    if (!values.email) {
      errors.email = "email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.Institute) {
      errors.Institute = " Institute name is required!";
    }
    if (!values.phone) {
      errors.phone = " phone number is required!";
    } else if (
      !/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/.test(
        values.phone
      )
    ) {
      errors.phone = "Please enter a valid phone number with country code +91";
    }

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

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      college: "",
    },
    validate,
    onSubmit: async (values) => {
      await trigger({
        user: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          college: values.Institute,
          password: await Hash.create(values.password),
        },
      });
    },
  });

  return (
    <div className={classes.loginContainer}>
      <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
        <Input
          type="text"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        ></Input>
        <Input
          type="email"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Input
          label="Phone"
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        ></Input>
        <Input
          label="Institute"
          type="text"
          id="Institute"
          name="Institute"
          value={formik.values.Institute}
          onChange={formik.handleChange}
          error={formik.errors.Institute}
          autoComplete="Institute"
        ></Input>

        <Input
          type="password"
          label="Password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Button type="submit" radius="full" size="lg">
          register
        </Button>
        <p className={classes.errorMessage}>
          {formik.errors?.name ||
            formik.errors?.email ||
            formik.errors?.phone ||
            formik.errors?.Institute ||
            formik.errors?.password ||
            errorText ||
            " "}
        </p>
      </form>

      <div className={classes.registerLink}>
        <p>Already registered?</p>
        <Link to="/login" className={classes.rlink}>
          login now!
        </Link>
      </div>
    </div>
  );
};

export default Register;
