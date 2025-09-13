"use client";
import Input from "@/components/input";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLang } from "@/shared/hooks/language";
import { Button } from "../button";
import PhoneInput from "../mobile-input";
import CustomPhoneInput from "../mobile-input";
import { DEFAULT_COUNTRY_CODE } from "@/lib/config";

interface LoginFormProps {
  setIsLogin: (isLogin: boolean) => void;
}

const LoginForm = ({ setIsLogin }: LoginFormProps) => {
  const [loginWithPhone, setLoginWithPhone] = useState(false);
  const [locale] = useLang();

  const validationSchema = Yup.object().shape({
    email: !loginWithPhone
      ? Yup.string()
          .email(locale.invalid_email || "Invalid email")
          .required(locale.required_email || "Email is required")
      : Yup.string(),
    phone: loginWithPhone
      ? Yup.string().required(locale.required_phone || "Phone is required")
      : Yup.string(),
    password: Yup.string()
      .required(locale.required_password || "Password is required")
      .min(6, locale.invalid_password || "Password must be at least 6 characters"),
  });

  return (
    <div className={`mx-auto p-6 border rounded-2xl shadow-sm min-w-[350px]`}>
      <Formik
        initialValues={{ email: "", phone: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Login Form Submitted:", values);
        }}
      >
        {({ values, errors, touched ,setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            {/* Email/Phone login fields */}
            {!loginWithPhone && (
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder={locale.email_placeholder || "Email Address"}
                  error={touched.email && errors.email ? errors.email : ""}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder={locale.password_placeholder || "Password"}
                  error={touched.password && errors.password ? errors.password : ""}
                />
              </div>
            )}
            
            {loginWithPhone && (
              <div>
                <CustomPhoneInput
                  value={values.phone}
                  defaultCountry={DEFAULT_COUNTRY_CODE}
                  inputClass="my-2"
                  // error={touched.phone && errors.phone ? errors.phone : ""}
                  onChange={(value)=>{console.log(value,"abcd")}}
                />      
              </div>
            )}

            {/* Submit button */}
            <Button type="submit">
              {locale.login_button || "Login"}
            </Button>

            {/* Toggle between email/phone */}
            <Button 
              type="button" 
              variant="outline"
              onClick={() => setLoginWithPhone(!loginWithPhone)}
            >
              <div className="flex justify-between items-center text-sm">
                <span>
                  {loginWithPhone ? "Login with Email" : "Login with Phone"}
                </span>
              </div>
            </Button>

            {/* Switch to signup */}
            <p className="text-sm text-center mt-2">
              {locale.new_user || "New user?"}{" "}
              <span 
                className="font-bold text-lg cursor-pointer text-custom-button-primary-bg hover:underline px-2" 
                onClick={() => setIsLogin(false)}
              >
                {locale?.signup || "Sign up"}
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

