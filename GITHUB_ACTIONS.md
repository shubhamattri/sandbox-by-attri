# 🚀 GitHub Actions & CI/CD Setup

This document explains the automated workflows and CI/CD pipeline configured for this project.

## 📋 Overview

The project uses GitHub Actions for:
- **Automated testing and building**
- **Preview deployments for pull requests**
- **Performance monitoring**
- **Dependency updates**
- **Security audits**

## 🔧 Workflows

### 1. **CI/CD Pipeline** (`.github/workflows/ci.yml`)

**Triggers:** Push to `main`/`develop`, Pull Requests

**Jobs:**
- **Frontend CI:** Linting, type checking, building
- **Backend CI:** Testing and building (if backend exists)
- **Security Audit:** Dependency vulnerability scanning
- **Deploy to Vercel:** Production deployment (main branch only)

### 2. **Preview Deployment** (`.github/workflows/preview.yml`)

**Triggers:** Pull Requests, Manual dispatch

**Features:**
- Creates preview URLs for PRs
- Automatically comments PR with preview link
- Updates preview with new commits

### 3. **Performance Monitoring** (`.github/workflows/performance.yml`)

**Triggers:** Daily schedule, Push to main, Manual dispatch

**Features:**
- Lighthouse performance audits
- Bundle size analysis
- Performance regression detection

### 4. **Dependency Updates** (`.github/workflows/dependency-update.yml`)

**Triggers:** Weekly schedule, Manual dispatch

**Features:**
- Checks for outdated dependencies
- Creates issues for updates
- Monitors both frontend and backend

## 🔐 Required Secrets

Add these secrets in your GitHub repository settings:

### For Vercel Deployment:
```bash
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

### For Performance Monitoring:
```bash
LHCI_GITHUB_APP_TOKEN=your_lighthouse_token
```

## 🛠️ Setup Instructions

### 1. **Enable GitHub Actions**
- Go to your repository → Settings → Actions → General
- Enable "Allow all actions and reusable workflows"

### 2. **Configure Vercel Integration**
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Link project: `vercel link`
4. Get tokens from Vercel dashboard

### 3. **Set up Lighthouse CI** (Optional)
1. Create GitHub App: https://github.com/apps/lighthouse-ci
2. Install in your repository
3. Add the token to secrets

### 4. **Install Development Dependencies**
```bash
npm install
```

## 📊 Workflow Status

### ✅ **CI/CD Pipeline**
- **Status:** Active
- **Runs on:** Every push/PR
- **Duration:** ~3-5 minutes

### ✅ **Preview Deployments**
- **Status:** Active
- **Runs on:** Pull requests
- **Duration:** ~2-3 minutes

### ✅ **Performance Monitoring**
- **Status:** Active
- **Runs on:** Daily + main branch pushes
- **Duration:** ~5-8 minutes

### ✅ **Dependency Updates**
- **Status:** Active
- **Runs on:** Weekly
- **Duration:** ~1-2 minutes

## 🔍 Monitoring & Debugging

### **View Workflow Runs**
1. Go to repository → Actions tab
2. Click on specific workflow
3. View logs and artifacts

### **Common Issues**

#### **Build Failures**
```bash
# Check locally
cd frontend
npm run build
npm run lint
npx tsc --noEmit
```

#### **Deployment Issues**
```bash
# Check Vercel status
vercel ls
vercel logs
```

#### **Performance Issues**
```bash
# Run Lighthouse locally
npm install -g lighthouse
lighthouse https://your-site.vercel.app
```

## 📈 Performance Budgets

### **Lighthouse Scores**
- **Performance:** ≥ 90
- **Accessibility:** ≥ 90
- **Best Practices:** ≥ 90
- **SEO:** ≥ 90

### **Core Web Vitals**
- **First Contentful Paint:** ≤ 2000ms
- **Largest Contentful Paint:** ≤ 2500ms
- **Cumulative Layout Shift:** ≤ 0.1
- **Total Blocking Time:** ≤ 300ms

## 🔄 Manual Triggers

### **Run All Workflows**
```bash
# Via GitHub CLI
gh workflow run ci.yml
gh workflow run preview.yml
gh workflow run performance.yml
gh workflow run dependency-update.yml
```

### **Run Specific Jobs**
```bash
# Frontend CI only
gh workflow run ci.yml --field job=frontend-ci

# Performance audit only
gh workflow run performance.yml --field job=lighthouse
```

## 📝 Best Practices

### **Commit Messages**
Use conventional commit format:
```bash
feat(ui): add new contact form
fix(api): resolve email sending issue
docs: update README
style: format code with prettier
```

### **Branch Strategy**
- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: Feature branches
- `hotfix/*`: Emergency fixes

### **Pull Request Process**
1. Create feature branch
2. Make changes
3. Run tests locally
4. Create PR
5. Wait for CI checks
6. Get preview URL
7. Review and merge

## 🚨 Troubleshooting

### **Workflow Not Running**
- Check repository permissions
- Verify workflow file syntax
- Check branch protection rules

### **Build Failures**
- Check Node.js version compatibility
- Verify all dependencies installed
- Check for TypeScript errors

### **Deployment Issues**
- Verify Vercel tokens
- Check environment variables
- Review build logs

## 📞 Support

For issues with:
- **GitHub Actions:** Check workflow logs
- **Vercel Deployment:** Check Vercel dashboard
- **Performance:** Review Lighthouse reports
- **Dependencies:** Check npm audit results

---

**Last Updated:** $(date)
**Version:** 1.0.0 