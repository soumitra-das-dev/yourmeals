# YourMeals.in Landing Page

A modern, high-performance landing page for YourMeals.in cloud kitchen, built with Next.js 15, Tailwind CSS, Framer Motion, and Sanity.io.

## Features
- **Antigravity Aesthetic**: Floating elements, smooth parallax, and glassmorphism.
- **Sanity CMS**: Fully dynamic content for Menu, Plans, and Testimonials.
- **Responsive**: Mobile-first design that looks great on all devices.
- **Performance**: Optimized images and code-splitting.

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in the root directory and add your Sanity credentials:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-02-15
```

### 2. Sanity Studio Setup
To run the Sanity Studio locally:
```bash
npx sanity dev
```
Or access the embedded studio at `http://localhost:3000/studio`.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the site.

## Deployment on Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Add your remote origin
   # git remote add origin ...
   # git push -u origin main
   ```

2. **Deploy**:
   - Go to [Vercel Dashboard](https://vercel.com).
   - Click "Add New Project" and import your repository.
   - Vercel will automatically detect Next.js.
   - **Important**: Add the Environment Variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, etc.) in the Vercel project settings.
   - Click "Deploy".

3. **Sanity CORS**:
   - Go to your Sanity project dashboard (manage.sanity.io).
   - Add your Vercel domain (e.g., `https://yourmeals.vercel.app`) to the **CORS Origins** list.
   - Add `http://localhost:3000` for local development.

## Content Management
- Go to `/studio` on your deployed site or run `npx sanity dev` locally.
- Create "Menu Item" documents to populate the menu.
- Create "Plan" documents for subscriptions.
- Create "Testimonials" for the reviews section.
