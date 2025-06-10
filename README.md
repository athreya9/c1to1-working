# Connect1to1 Platform - README

## Overview

Connect1to1 is a platform designed to match vendors and retailers based on their products, regions, and business needs. The platform facilitates connections, meeting scheduling, and communication between potential business partners.

## Features

- **Complete User Authentication System**
  - Registration for vendors and retailers
  - Email verification
  - Login functionality
  - User profile management

- **Matching System**
  - Algorithm for matching vendors and retailers
  - Alert notifications for matches
  - Dashboard display of matches

- **Meeting Management**
  - Calendar integration
  - Meeting scheduling and management
  - Meeting status tracking

- **Messaging System**
  - Internal messaging between matched partners
  - Conversation history
  - Real-time message notifications

- **Regional Settings**
  - Comprehensive country/region selection
  - Global, multiple, or single location options

- **Resource Center**
  - Guidance for maximizing match potential
  - Success stories and best practices

- **Live Chat Support**
  - Pre-chat form for collecting information
  - Connection to human agents

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Authentication**: Custom auth system with email verification
- **Styling**: Tailwind CSS with custom theme (teal and gold)
- **Deployment**: Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-org/connect1to1.git
cd connect1to1
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Project Structure

- `/app` - Next.js app directory
  - `/components` - Reusable UI components
  - `/dashboard` - Dashboard pages
  - `/login`, `/register`, `/verify-email` - Authentication pages
  - `/matches`, `/meetings`, `/messages` - Core feature pages
  - `/resources` - Resource and guidance pages
  - `/profile` - User profile management
  - `/podcast-application` - Podcast guest application
- `/public` - Static assets
- `/styles` - Global styles

### Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

See the [deployment_instructions.md](./deployment_instructions.md) file for detailed deployment steps.

## Demo Accounts

For testing purposes, the following demo accounts are available:

- **Vendor Account**:
  - Email: vendor@connect1to1.com
  - Password: vendor123

- **Retailer Account**:
  - Email: retailer@connect1to1.com
  - Password: retailer123

- **Admin Account**:
  - Email: admin@connect1to1.com
  - Password: admin123

## Support

For support, please contact support@connect1to1.com
