# 🚀 Complete Setup Guide

## ✅ Step 1: Node.js Upgrade (COMPLETED)
- ✅ Installed nvm (Node Version Manager)
- ✅ Upgraded to Node.js 18.18.0
- ✅ Development server is running

## 📧 Step 2: Set up Resend Email Service

### 2.1 Sign up for Resend
1. Go to [resend.com](https://resend.com)
2. Click "Get Started" or "Sign Up"
3. Create an account (you can use GitHub or email)

### 2.2 Get Your API Key
1. After signing up, go to the dashboard
2. Click on "API Keys" in the sidebar
3. Click "Create API Key"
4. Give it a name like "Personal Website"
5. Copy the API key (it starts with `re_`)

### 2.3 Add API Key to Your Project
1. In your project, create a `.env.local` file:
   ```bash
   cd frontend
   cp env.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### 2.4 Test Email Functionality
1. Go to your website: `http://localhost:3000`
2. Scroll to the contact form
3. Fill out the form and submit
4. Check your email for the message

## 🌐 Step 3: Deploy to Vercel

### 3.1 Prepare Your Code
1. Make sure all changes are saved
2. Create a `.gitignore` file if not present:
   ```bash
   echo ".env.local" >> .gitignore
   echo "node_modules" >> .gitignore
   ```

### 3.2 Push to GitHub
1. Initialize git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal website with enhanced features"
   ```

2. Create a new repository on GitHub:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it "personal-website" or similar
   - Don't initialize with README (we already have one)

3. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
   git branch -M main
   git push -u origin main
   ```

### 3.3 Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### 3.4 Add Environment Variables
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Environment Variables"
3. Add:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key
   - Environment: Production, Preview, Development

4. Redeploy your project

## 🎯 Step 4: Set up Custom Domain (Optional)

### 4.1 Purchase a Domain
Recommended providers:
- [Namecheap](https://namecheap.com) - Good prices, easy setup
- [GoDaddy](https://godaddy.com) - Popular, good support
- [Google Domains](https://domains.google) - Clean interface

### 4.2 Configure DNS
1. In your domain provider's dashboard, find DNS settings
2. Add these records:
   ```
   Type: A
   Name: @
   Value: 76.76.19.34
   TTL: 3600
   ```

3. Add CNAME for www:
   ```
   Type: CNAME
   Name: www
   Value: your-vercel-domain.vercel.app
   TTL: 3600
   ```

### 4.3 Add Domain to Vercel
1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your domain
3. Follow the verification steps

## 📊 Step 5: Add Analytics (Optional)

### 5.1 Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property
3. Get your Measurement ID (starts with G-)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 5.2 Plausible Analytics (Privacy-focused)
1. Go to [plausible.io](https://plausible.io)
2. Sign up and add your domain
3. Get your domain name
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
   ```

## 🔧 Step 6: Additional Features

### 6.1 Add More Blog Posts
1. Create new `.mdx` files in `src/content/blog/`
2. Follow the format of `first-post.mdx`
3. Add frontmatter with title, date, description, tags

### 6.2 Customize Content
1. Edit `src/app/page.tsx` to update personal information
2. Change colors in Tailwind classes
3. Add your profile photo
4. Update contact information

### 6.3 Add Projects Section
1. Create a projects data file
2. Add a projects component
3. Link to GitHub repositories

## 🎉 You're All Set!

Your personal website now has:
- ✅ Modern tech stack
- ✅ Smooth animations
- ✅ Blog functionality
- ✅ Email contact form
- ✅ Professional design
- ✅ Ready for deployment

Visit your website and start customizing it for your needs! 