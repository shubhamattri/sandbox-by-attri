# 🚀 Quick GitHub Actions Setup Guide

## ⚡ **5-Minute Setup**

### **1. Enable GitHub Actions**
1. Go to your repository on GitHub
2. Click **Settings** → **Actions** → **General**
3. Select **"Allow all actions and reusable workflows"**
4. Click **Save**

### **2. Get Vercel Tokens** (Required for deployment)
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Link your project: `vercel link`
4. Get tokens from [Vercel Dashboard](https://vercel.com/account/tokens)

### **3. Add GitHub Secrets**
Go to **Settings** → **Secrets and variables** → **Actions** and add:

```bash
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_org_id_here
VERCEL_PROJECT_ID=your_project_id_here
```

### **4. Test the Setup**
1. Make a small change to any file
2. Commit and push: `git push origin main`
3. Check **Actions** tab to see workflows running

## 🔧 **What's Included**

### **✅ Automated Workflows**
- **CI/CD Pipeline:** Tests, builds, and deploys on every push
- **Preview Deployments:** Creates preview URLs for pull requests
- **Performance Monitoring:** Daily Lighthouse audits
- **Dependency Updates:** Weekly checks for outdated packages

### **✅ Git Hooks**
- **Pre-commit:** Runs linting and type checking
- **Commit-msg:** Enforces conventional commit format

### **✅ Quality Gates**
- ESLint checks
- TypeScript validation
- Build verification
- Security audits

## 🎯 **Next Steps**

1. **Monitor Workflows:** Check the **Actions** tab regularly
2. **Review Performance:** Look at Lighthouse reports
3. **Update Dependencies:** Address issues from dependency checks
4. **Customize:** Modify workflows as needed

## 🆘 **Need Help?**

- **Workflow Issues:** Check the **Actions** tab logs
- **Deployment Problems:** Verify Vercel tokens
- **Performance Issues:** Review Lighthouse reports
- **Dependency Issues:** Check npm audit results

---

**🎉 You're all set! Your website now has professional CI/CD automation!** 