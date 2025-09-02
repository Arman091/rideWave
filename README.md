# rideWave
### My first project after 2+ years experience to summarize my skills

## Documentation
- [Project Docs Basic Setup](./docs/setup.md)

# Project Architecture

## Frontend
- **Framework**: Next.js  
- **Language**: TypeScript  
- **State Management**: Zustand  
- **Data Fetching & Caching**: TanStack Query  
- **Styling**: Tailwind CSS 
- **API**: axios
- **File Upload**:Uppy
- **CMS (content Mangement System)**: Strapi  
- **Form Validation**: Formik and Yup
- **Notifications**: FCM(Firebase), Novu with Backend
- **Others**: react-select,day.js,toast

---

## Backend
 **Contributer**: Akash Maurya
- **Runtime**: Node.js  
- **Framework Options**: Express.js / NestJS  


---

## Database
- **Options**: PostgreSQL / MongoDB  
- **Use Cases**:  
  - Store users, sessions, and tokens  
  - Manage relationships between entities  

---

## Authentication
- **Method**: JWT + Refresh Tokens  
- **Storage**: httpOnly cookies  
- **Security Enhancements**:  
  - CSRF Protection  
  - Token expiration & refresh logic  

---

## Real-Time Communication
- **Options**:  
  - WebSockets (for chat, notifications)  
  - MQTT (lightweight messaging)  

---

## File Storage
- **Service**: AWS S3  
- **Use Cases**:  
  - User file uploads  
  - Media storage  

---

## Email Service
- **Libraries**:  
  - Nodemailer  
  - SendGrid  
- **Features**:  
  - Email templates  
  - Redirection & verification flows  

---

## Testing
- **Unit Testing**: Jest  
- **Component Testing**: React Testing Library   

---

## CI/CD & Deployment
- **Containerization**: Docker  
- **CI/CD Pipelines**: GitHub Actions  
- **Deployment Options**:  
- Vercel (Frontend hosting)    

---

## Documentation
- **Format**: Markdown-based

---

## High-Level Architecture Flow
1. **Frontend (Next.js + TypeScript + Zustand + TanStack + Tailwind)**  
   ⬇️ API calls via fetch/axios  
2. **Backend (Express/NestJS / Strapi)**  
   ⬇️ JWT auth, token refresh, session handling  
3. **Database (PostgreSQL/MongoDB)**  
   ⬇️ Store users, relationships, sessions  
4. **Storage (AWS S3)** for files  
5. **Email (Nodemailer/SendGrid)** for notifications  
6. **Real-time (WebSockets/MQTT)** for chat/updates  
7. **Testing & CI/CD (Jest, Cypress, GitHub Actions, Docker)**  
8. **Deployment (Vercel/Render/Netlify)**  
9. **Docs (Markdown)**  

---

