#!/bin/bash

echo "🚀 Personal Website Deployment Script"
echo "======================================"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please run 'git init' first."
    exit 1
fi

# Check if we're on main branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "⚠️  You're not on the main branch. Current branch: $current_branch"
    read -p "Do you want to continue? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes."
    git status --short
    read -p "Do you want to commit them? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        git commit -m "Auto-commit before deployment"
    else
        echo "❌ Please commit your changes before deploying."
        exit 1
    fi
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No remote origin found."
    echo "Please add your GitHub repository as origin:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/personal-website.git"
    exit 1
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Next steps for Vercel deployment:"
    echo "1. Go to https://vercel.com"
    echo "2. Sign up/Login with GitHub"
    echo "3. Click 'New Project'"
    echo "4. Import your repository"
    echo "5. Configure:"
    echo "   - Framework: Next.js"
    echo "   - Root Directory: frontend"
    echo "   - Build Command: npm run build"
    echo "6. Add environment variables:"
    echo "   - RESEND_API_KEY: your_resend_api_key"
    echo "7. Deploy!"
    echo ""
    echo "📧 Don't forget to set up Resend for email functionality!"
    echo "   Visit: https://resend.com"
else
    echo "❌ Failed to push to GitHub. Please check your connection and try again."
    exit 1
fi 