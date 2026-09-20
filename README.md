# Kensultagribase Website

Official responsive agribusiness and farm management website for **Kensultagribase**, optimized for 100% free hosting on **Vercel**.

## 🌾 Features
- **Modern Responsive Design**: Built with Tailwind CSS, Lucide Icons, and custom typography for mobile, tablet, and desktop.
- **Brand Identity**: Features official Kensultagribase logo and high-definition photography.
- **6 Core Services**:
  1. Farm Management
  2. Irrigation Farming
  3. Vegetable Production
  4. Commodities Supply
  5. Mango & Cashew
  6. Contract Farming
- **Lead Generation**:
  - Interactive quote & service inquiry modal.
  - Floating WhatsApp click-to-chat button with pre-filled messages.
  - Comprehensive inquiry contact form.
- **Zero-Dependency Static Architecture**: Blazing fast load times, 100/100 Lighthouse performance, zero build step required.

---

## 🚀 How to Host Freely on Vercel

### Option 1: Deploy with GitHub (Recommended)
1. Initialize git in this folder (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Kensultagribase website"
   ```
2. Create a new repository on [GitHub](https://github.com/new) and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
4. Import your GitHub repository.
5. Keep default settings (Framework preset: **Other** / Root directory: `./`).
6. Click **Deploy**! Your site will be live instantly with a free `.vercel.app` domain and free SSL HTTPS certificate.

---

### Option 2: Deploy Directly with Vercel CLI
Run this command directly in this directory:
```bash
npx vercel
```
- Follow the on-screen prompts to log in and select default settings.
- To deploy directly to production:
```bash
npx vercel --prod
```

---

## 💻 Local Testing
You can preview the website locally at any time:
```bash
# Using Python:
python -m http.server 3000

# Or using Node:
npx serve .
```
Then open `http://localhost:3000` in your web browser.
