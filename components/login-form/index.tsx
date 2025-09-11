"use client";
import Input from "@/components/input";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup"; // your reusable input component
import { useLang } from "@/shared/hooks/language";
import { Button } from "../button";

interface LoginFormProps {
  type?: "login" | "signup";
  setIsLogin:Function;
  isLogin:Boolean;
}

const LoginForm = ({ type = "login",setIsLogin,isLogin }: LoginFormProps) => {
  const [loginWithPhone, setLoginWithPhone] = useState(false);
  const [isSignup, setIsSignup] = useState<boolean>(false)
  const [locale] = useLang();

  const validationSchema = Yup.object().shape({
    email: !loginWithPhone
      ? Yup.string()
        .email(locale.invalid_email)
        .required(locale.required_email)
      : Yup.string(),
    phone: loginWithPhone
      ? Yup.string().required(locale.required_phone)
      : Yup.string(),
    password: Yup.string()
      .required(locale.required_password)
      .min(6, locale.invalid_password),
  });

  return (
    <div className="mx-auto p-6 border rounded-2xl shadow-sm">
      <Formik
        initialValues={{ email: "", phone: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Submitted:", values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4">
            {/* Toggle login with email/phone */}
            {!isSignup ? (
              <>
                {!loginWithPhone && (
                  <div>
                    <Input
                      name="email"
                      placeholder={locale.email_placeholder}
                      error={touched.email && errors.email ? errors.email : ""}
                    />
                    <Input
                      name="password"
                      type="password"
                      placeholder={locale.password_placeholder}
                      error={touched.password && errors.password ? errors.password : ""}
                    />
                  </div>
                )}
                {loginWithPhone && (
                  <Input
                    name="phone"
                    placeholder={locale.phone_placeholder}
                    error={touched.phone && errors.phone ? errors.phone : ""}
                  />
                )}
                <Button>
                  {type === "login" ? locale.login_button : locale.signup_button}
                </Button>
                <Button variant="outline">
                  <div className="flex justify-between items-center text-sm">
                    <span onClick={() => setLoginWithPhone(!loginWithPhone)}>
                      {loginWithPhone ? "Login with Email" : "Login with Phone"}
                    </span>
                  </div>
                </Button>
              </>
            ) : (
              <div>
                hello
              </div>
            )}

            <p className="text-sm text-center mt-2">
              {!isLogin ? <p className="text-base"> 
                {locale.new_user} 
                <span className="font-bold text-lg cursor-pointer px-2" onClick={()=>{setIsLogin(false)}}>{locale?.signup}</span></p> 
                : 
                <p>{locale.already_registered}<span className=" px-2 font-bold text-lg cursor-pointer" onClick={()=>{setIsLogin(true)}}>{locale?.login}</span></p>}
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

