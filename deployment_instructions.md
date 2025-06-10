# Connect1to1 Platform Deployment Instructions

This document provides step-by-step instructions for deploying the Connect1to1 platform to a production environment.

## Prerequisites

Before deploying, ensure you have:

1. A Vercel account (recommended for Next.js applications)
2. Node.js 16.x or higher installed
3. Git installed (for version control)

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

Vercel is the platform created by the team behind Next.js and offers the simplest deployment experience.

1. **Create a Vercel Account**:
   - Sign up at [vercel.com](https://vercel.com) if you don't already have an account

2. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

3. **Deploy from the Command Line**:
   ```bash
   # Navigate to your project directory
   cd connect1to1
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel
   ```

4. **Alternatively, Deploy via GitHub**:
   - Push your code to a GitHub repository
   - Import the project in the Vercel dashboard
   - Connect your GitHub account
   - Select the repository
   - Configure build settings (Vercel will auto-detect Next.js)
   - Deploy

### Option 2: Manual Deployment to a Node.js Server

If you prefer to deploy to your own server:

1. **Build the Application**:
   ```bash
   # Navigate to your project directory
   cd connect1to1
   
   # Install dependencies
   npm install
   
   # Build for production
   npm run build
   ```

2. **Start the Production Server**:
   ```bash
   # Start the application
   npm start
   ```

3. **Use a Process Manager** (recommended for production):
   ```bash
   # Install PM2
   npm install -g pm2
   
   # Start with PM2
   pm2 start npm --name "connect1to1" -- start
   ```

## Environment Variables

Ensure the following environment variables are set in your production environment:

```
# API Configuration
NEXT_PUBLIC_API_URL=https://your-api-url.com

# Authentication
NEXT_PUBLIC_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_AUTH_CLIENT_ID=your-client-id

# Other Configuration
NODE_ENV=production
```

## Post-Deployment Verification

After deployment, verify:

1. User authentication works (login, registration, verification)
2. All pages load correctly
3. Matching system functions properly
4. Meeting scheduling works
5. Messaging system functions
6. Profile management works

## Troubleshooting

If you encounter issues:

1. Check server logs for errors
2. Verify environment variables are correctly set
3. Ensure all API endpoints are accessible
4. Check browser console for client-side errors

## Support

For additional support, contact the development team at support@connect1to1.com
