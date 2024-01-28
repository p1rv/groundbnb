import { Formik, Form } from "formik";
import * as Yup from "yup";

import { IRegisterValues, initialValues } from "./Register.consts";
import TextInput from "../../components/TextInput";
import { PropsWithChildren } from "react";
import Button from "../../components/Button";

interface IRegisterProps {
  onSubmit: (values: IRegisterValues) => void;
  redirectToLogin: () => void;
  error?: string;
}

const Register: React.FC<PropsWithChildren<IRegisterProps>> = ({ onSubmit, redirectToLogin, error }) => {
  return (
    <div
      style={{ backgroundImage: `url('background.jpg')` }}
      className="flex min-h-[100vh] font-nunito"
    >
      <div className="flex flex-1 text-blue text-8xl justify-center items-center">
        <span>groundbnb</span>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          nick: Yup.string().min(4, "Minimum 4 character long").required("Nick is necessary"),
          email: Yup.string().email("Incorrect email address").required("Email is necessary"),
          password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is necessary"),
        })}
      >
        {({ values, handleChange, touched, errors }) => (
          <div className="flex-1 bg-blue flex justify-center items-center">
            <Form className="bg-blueWhite flex flex-col justify-center items-center p-12 gap-y-4 rounded-[20px]">
              <div className="flex flex-col gap-y-10 mb-6">
                {error && <div>{error}</div>}
                <TextInput
                  name="nick"
                  type="nick"
                  placeholder="nick"
                  value={values.nick}
                  handleChange={handleChange}
                  error={errors.nick}
                  touched={touched.nick}
                />
                <TextInput
                  name="email"
                  type="email"
                  placeholder="email"
                  value={values.email}
                  handleChange={handleChange}
                  error={errors.email}
                  touched={touched.email}
                />
                <TextInput
                  name="password"
                  type="password"
                  placeholder="password"
                  value={values.password}
                  handleChange={handleChange}
                  error={errors.password}
                  touched={touched.password}
                />
              </div>
              <Button
                type="submit"
                fill
                className="!w-full"
              >
                Register
              </Button>
              <Button
                className="!w-full"
                onClick={redirectToLogin}
              >
                Login
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
