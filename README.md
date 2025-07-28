# sandbox-by-attri

A modern, feature-rich personal website built with the latest web technologies. This project showcases advanced frontend development with animations, blog functionality, and integrated backend services.

## 🚀 Enhanced Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **MDX** - Blog posts with React components

### Backend & API
- **Next.js API Routes** - Serverless backend functions
- **Resend** - Modern email service for contact forms
- **MongoDB Atlas** - Cloud-hosted database (optional)

### Development & Deployment
- **Vercel** - sandbox-by-attri frontend deployment (recommended)
- **Railway/Render** - sandbox-by-attri backend deployment (if needed)
- **GitHub Actions** - CI/CD automation

## 🛠️ Core Features

### ✨ Frontend Features
- **Responsive Design** - Perfect on all devices
- **Smooth Animations** - Framer Motion powered transitions
- **Blog System** - MDX-powered content management
- **Contact Form** - Integrated with Resend email service
- **Modern UI** - Clean, professional design with Tailwind CSS
- **TypeScript** - Full type safety throughout

### 🔧 Backend Features
- **API Routes** - Next.js serverless functions
- **Email Integration** - Contact form with Resend
- **Database Ready** - MongoDB Atlas integration ready
- **Environment Config** - Secure configuration management

## Project Structure

```
sandbox-by-attri/
├── frontend/                    # Next.js application
│   ├── src/
│   │   ├── app/                # App router pages
│   │   │   ├── api/            # API routes
│   │   │   ├── blog/           # Blog pages
│   │   │   └── page.tsx        # Homepage
│   │   ├── components/         # Reusable components
│   │   └── content/            # MDX blog content
│   ├── public/                 # Static assets
│   ├── env.example             # Environment variables
│   └── package.json
├── backend/                    # Express.js server (legacy)
│   ├── server.js               # Main server file
│   ├── env.example             # Environment variables
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18.18.0 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Frontend Setup (Recommended)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp env.example .env.local
   ```

4. Update `.env.local` with your API keys:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:3000`

### Backend Setup (Legacy - Optional)

If you prefer the separate Express.js backend:

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend will run on `http://localhost:5000`



## 🎯 Features

### ✨ Frontend Features
- **Responsive Design** - Perfect on all devices
- **Smooth Animations** - Framer Motion powered transitions
- **Blog System** - MDX-powered content management
- **Contact Form** - Integrated with Resend email service
- **Modern UI** - Clean, professional design with Tailwind CSS
- **Professional Sections**:
  - Hero section with animated introduction
  - About section with smooth transitions
  - Experience timeline with staggered animations
  - Education details
  - Skills showcase with progress indicators
  - Contact form with email integration

### 🔧 Backend Features
- **API Routes** - Next.js serverless functions
- **Email Integration** - Contact form with Resend
- **Database Ready** - MongoDB Atlas integration ready
- **Environment Config** - Secure configuration management

## 🔌 API Endpoints

### Next.js API Routes
- `POST /api/contact` - Submit contact form (with email integration)

### Legacy Express.js Backend (Optional)
- `GET /` - Health check
- `POST /api/contact` - Submit contact form

## Customization

### Personal Information
Update the following in `frontend/src/app/page.tsx`:
- Name and title
- Experience details
- Education information
- Skills and percentages
- Contact information

### Styling
- Colors and themes can be modified in the Tailwind classes
- The design uses a blue-purple gradient theme
- All styling is done with Tailwind CSS utility classes

### Backend Features
- Add more API endpoints as needed
- Implement email sending functionality
- Add authentication if required
- Expand database models

## 🚀 Deployment

### Frontend (Vercel - Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Email Service (Resend)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to environment variables

### Database (MongoDB Atlas - Optional)
1. Create free cluster on MongoDB Atlas
2. Get connection string
3. Add to environment variables

### Custom Domain
1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Configure DNS settings
3. Add domain to Vercel

## Development

### Running Both Servers
Open two terminal windows:

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

### Available Scripts

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please reach out through the contact form on the website. 