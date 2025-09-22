# OTP Login Flow (Phone)

This document describes the **OTP-based login flow** for users logging in with a phone number.  
It covers the frontend and backend steps, including OTP generation, verification, and handling success/error cases.

---

## **1️⃣ Overview**

- Users can log in using their **phone number** instead of email/password.  
- An **OTP (One-Time Password)** is sent via SMS for verification.  
- Backend validates the OTP and issues a session or token upon success.  

---

## **2️⃣ Flow Steps**

1. **User enters phone number**  
   - Form validates phone number format.

2. **Click Send OTP**  
   - Frontend calls `sendSignInOTP()` API.
   - Backend generates OTP and sends it via SMS.
   - OTP modal opens for user input.

3. **User enters OTP**  
   - OTP modal captures user input.
   - Frontend validates OTP format before sending to backend.

4. **Backend verifies OTP**  
   - **Valid OTP** → log in user (return token/session).  
   - **Invalid OTP** → show error message, allow retry.

5. **Login Success**  
   - Store token/session on frontend.
   - Redirect user to dashboard.

---

## **3️⃣ OTP Flow Diagram**

```text
          ┌─────────────┐
          │ User enters │
          │ Phone No.   │
          └─────┬──────┘
                │
        Validate Phone Format
                │
                ▼
       ┌─────────────────┐
       │ sendSignInOTP() │
       └─────┬───────────┘
             │
             ▼
     ┌───────────────────┐
     │ Backend generates  │
     │ & sends OTP via    │
     │ SMS               │
     └─────┬─────────────┘
           │
           ▼
      ┌─────────────┐
      │ OTP Modal   │
      │ Open        │
      └─────┬───────┘
            │
     User enters OTP
            │
            ▼
    ┌─────────────────┐
    │ Verify OTP API  │
    └─────┬───────────┘
          │
  ┌───────┴─────────┐
  │                 │
Valid OTP       Invalid OTP
  │                 │
  ▼                 ▼
Create User /     Show Error
Log in User
  │
  ▼
Redirect to Dashboard




# Email & Password Authentication Flow

This Part describes the **login and reset password flows** for users authenticating with **email and password**.

---

## **1️⃣ Login Flow (Email & Password)**

### **Steps**

1. User enters **email and password** in the login form.
2. Form validation:
   - Check valid email format.
   - Password field is not empty.
3. User clicks **Login** → `loginWithEmail()` function called.
4. Frontend sends request to backend with credentials.
5. Backend verifies credentials:
   - **Valid:** returns JWT token or session info → frontend stores token → redirect to dashboard.
   - **Invalid:** show error message: “Email or password incorrect”.

### **Diagram**

```text
       LOGIN FLOW
 ┌─────────────────────┐
 │ User enters Email &  │
 │ Password             │
 └─────────┬───────────┘
           │ Validate
           ▼
 ┌─────────────────────┐
 │ Send Login Request  │
 │ to Backend          │
 └─────────┬───────────┘
           │
   ┌───────┴─────────┐
   │                 │
Valid credentials  Invalid
   │                 │
   ▼                 ▼
Return JWT /      Show Error
Session & Redirect
   │
   ▼
Dashboard
