"use client";
import Input from "@/components/input";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLang } from "@/shared/hooks/language";
import { Button } from "../button";
import CustomPhoneInput from "../mobile-input";
import { DEFAULT_COUNTRY_CODE } from "@/lib/config";
import axios from "axios";
import OtpModal from "@/components/otp-modal"; // you need to create this

interface LoginFormProps {
  setIsLogin: (isLogin: boolean) => void;
}

const LoginForm = ({ setIsLogin }: LoginFormProps) => {
  const [loginWithPhone, setLoginWithPhone] = useState(false);
  const [locale] = useLang();
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpPhone, setOtpPhone] = useState("");

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

  const handleEmailLogin = async (values: any) => {
    try {
      const res = await axios.post("/api/auth/login", {
        email: values.email,
        password: values.password,
      });
      console.log("Logged in:", res.data);
      // store tokens in localStorage/sessionStorage if needed
    } catch (err: any) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  const handlePhoneLogin = async (values: any) => {
    try {
      // send OTP
      await axios.post("/api/auth/send-otp", {
        type: "phone",
        value: values.phone,
      });
      setOtpPhone(values.phone);
      setShowOtpModal(true); // open OTP modal
    } catch (err: any) {
      alert(err.response?.data?.msg || "Failed to send OTP");
    }
  };

  const handleOtpVerify = async (otp: string) => {
    try {
      // verify OTP
      const res = await axios.post("/api/auth/verify-otp", {
        type: "phone",
        value: otpPhone,
        otp,
      });

      // login with phone after OTP verified
      console.log("OTP verified, user logged in:", res.data);
      setShowOtpModal(false);
      // store tokens in localStorage/sessionStorage if needed
    } catch (err: any) {
      alert(err.response?.data?.msg || "Invalid OTP");
    }
  };

  return (
    <div className={`mx-auto p-6 border rounded-2xl shadow-sm min-w-[350px]`}>
      <Formik
        initialValues={{ email: "", phone: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (loginWithPhone) handlePhoneLogin(values);
          else handleEmailLogin(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            {!loginWithPhone && (
              <>
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
              </>
            )}

            {loginWithPhone && (
              <CustomPhoneInput
                value={values.phone}
                defaultCountry={DEFAULT_COUNTRY_CODE}
                inputClass="my-2"
                onChange={(value) => setFieldValue("phone", value)}
              />
            )}

            <Button type="submit">
              {locale.login_button || "Login"}
            </Button>

            <Button 
              type="button" 
              variant="outline"
              onClick={() => setLoginWithPhone(!loginWithPhone)}
            >
              {loginWithPhone ? "Login with Email" : "Login with Phone"}
            </Button>

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

      {/* OTP Modal */}
      {showOtpModal && (
        <OtpModal
          phone={otpPhone}
          onClose={() => setShowOtpModal(false)}
          onVerify={handleOtpVerify}
        />
      )}
    </div>
  );
};

export default LoginForm;
