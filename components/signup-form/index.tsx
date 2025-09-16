"use client";
import Input from "@/components/input";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLang } from "@/shared/hooks/language";
import { Button } from "../button";
import CustomSelect from "@/components/custom-select"

interface SignupFormProps {
  setIsLogin: (isLogin: boolean) => void;
}

const SignupForm = ({ setIsLogin }: SignupFormProps) => {
  const [signupWithPhone, setSignupWithPhone] = useState(false);
  const [locale] = useLang();
  const userOptions = [
  { value: "rider", label: "Rider" },
  { value: "driver", label: "Driver" },
 ];

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required(locale.required_first_name || "First name is required")
      .min(2, "First name must be at least 2 characters"),
    lastName: Yup.string()
      .required(locale.required_last_name || "Last name is required")
      .min(2, "Last name must be at least 2 characters"),
    email: !signupWithPhone
      ? Yup.string()
          .email(locale.invalid_email || "Invalid email")
          .required(locale.required_email || "Email is required")
      : Yup.string(),
    phone: signupWithPhone
      ? Yup.string().required(locale.required_phone || "Phone is required")
      : Yup.string(),
    password: Yup.string()
      .required(locale.required_password || "Password is required")
      .min(8, locale.invalid_password || "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    terms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  return (
    <div className="mx-auto p-6 border rounded-2xl shadow-sm">
      <Formik
        initialValues={{ 
          firstName: "", 
          lastName: "", 
          email: "", 
          phone: "", 
          password: "", 
          confirmPassword: "",
          terms: false,
          userType:"rider"
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Signup Form Submitted:", values);
        }}
      >
        {({ errors, touched,setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder={locale.first_name_placeholder || "First Name"}
                error={touched.firstName && errors.firstName ? errors.firstName : ""}
              />
              <Input
                name="lastName"
                placeholder={locale.last_name_placeholder || "Last Name"}
                error={touched.lastName && errors.lastName ? errors.lastName : ""}
              />
            </div>

            {/* Email/Phone toggle */}
            {!signupWithPhone && (
              <Input
                name="email"
                type="email"
                placeholder={locale.email_placeholder || "Email Address"}
                error={touched.email && errors.email ? errors.email : ""}
              />
            )}
            <CustomSelect
              name="userType"
              label="User Type"
              selectContainer=""
              options={userOptions}
              placeholder="Select user type"
              onChange={(value) => setFieldValue("userType", value)}
            />
            {/* Password fields */}
            <Input
              name="password"
              type="password"
              placeholder={locale.password_placeholder || "Password"}
              error={touched.password && errors.password ? errors.password : ""}
            />
            
            <Input
              name="confirmPassword"
              type="password"
              placeholder={locale.confirm_password_placeholder || "Confirm Password"}
              error={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ""}
            />

            {/* Terms and conditions */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="terms"
                className="mt-1"
              />
              <label className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            {touched.terms && errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms}</p>
            )}

            {/* Submit button */}
            <Button type="submit">
              {locale.signup_button || "Create Account"}
            </Button>


            {/* Switch to login */}
            <p className="text-sm text-center mt-2">
              {locale.already_registered || "Already have an account?"}{" "}
              <span 
                className="font-bold text-lg cursor-pointer text-custom-button-primary-bg hover:underline" 
                onClick={() => setIsLogin(true)}
              >
                {locale?.login || "Login"}
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
