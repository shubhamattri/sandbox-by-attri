#!/bin/bash

echo "🚀 Deployment Platform Setup"
echo "=============================="
echo ""
echo "Choose your deployment platform:"
echo "1. Netlify (Recommended - Free, Fast, Easy)"
echo "2. Railway (Fast, $5/month, Full-stack)"
echo "3. Render (Free tier, Good for full-stack)"
echo "4. DigitalOcean ($5/month, Simple)"
echo "5. AWS Amplify (Enterprise, Complex)"
echo "6. Keep Vercel (Current)"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
  1)
    echo "🎯 Setting up Netlify deployment..."
    echo ""
    echo "Steps to deploy to Netlify:"
    echo "1. Go to https://netlify.com"
    echo "2. Sign up with GitHub"
    echo "3. Click 'New site from Git'"
    echo "4. Choose your repository"
    echo "5. Configure build settings:"
    echo "   - Build command: npm run build"
    echo "   - Publish directory: .next"
    echo "   - Base directory: frontend"
    echo "6. Add environment variables:"
    echo "   - RESEND_API_KEY"
    echo "   - NEXT_PUBLIC_SITE_URL"
    echo ""
    echo "✅ Netlify configuration files are ready!"
    echo "📁 Check netlify.toml for settings"
    echo "📁 Check .github/workflows/deploy-netlify.yml for CI/CD"
    ;;
  2)
    echo "🔥 Setting up Railway deployment..."
    echo ""
    echo "Steps to deploy to Railway:"
    echo "1. Install Railway CLI: npm install -g @railway/cli"
    echo "2. Login: railway login"
    echo "3. Initialize: railway init"
    echo "4. Deploy: railway up"
    echo "5. Set environment variables:"
    echo "   - RESEND_API_KEY"
    echo ""
    echo "✅ Railway configuration files are ready!"
    echo "📁 Check .github/workflows/deploy-railway.yml for CI/CD"
    ;;
  3)
    echo "🎯 Setting up Render deployment..."
    echo ""
    echo "Steps to deploy to Render:"
    echo "1. Go to https://render.com"
    echo "2. Sign up with GitHub"
    echo "3. Create new Web Service"
    echo "4. Connect your repository"
    echo "5. Configure:"
    echo "   - Build Command: cd frontend && npm install && npm run build"
    echo "   - Start Command: cd frontend && npm start"
    echo "6. Add environment variables"
    echo ""
    echo "✅ Render is ready to use!"
    ;;
  4)
    echo "🐳 Setting up DigitalOcean deployment..."
    echo ""
    echo "Steps to deploy to DigitalOcean:"
    echo "1. Go to DigitalOcean App Platform"
    echo "2. Connect GitHub repository"
    echo "3. Choose Node.js environment"
    echo "4. Configure:"
    echo "   - Source Directory: frontend"
    echo "   - Build Command: npm run build"
    echo "   - Run Command: npm start"
    echo ""
    echo "✅ DigitalOcean is ready to use!"
    ;;
  5)
    echo "☁️ Setting up AWS Amplify deployment..."
    echo ""
    echo "Steps to deploy to AWS Amplify:"
    echo "1. Go to AWS Amplify Console"
    echo "2. Connect GitHub repository"
    echo "3. Configure build settings"
    echo "4. Add environment variables"
    echo ""
    echo "✅ AWS Amplify configuration ready!"
    ;;
  6)
    echo "✅ Keeping Vercel deployment..."
    echo ""
    echo "Your current Vercel setup will continue to work."
    echo "The build issues have been fixed."
    ;;
  *)
    echo "❌ Invalid choice. Please run the script again."
    exit 1
    ;;
esac

echo ""
echo "📚 For detailed instructions, check DEPLOYMENT_GUIDE.md"
echo "🔧 For GitHub Actions setup, check GITHUB_ACTIONS.md"
echo ""
echo "🎉 Happy deploying!" 