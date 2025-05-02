#!/bin/bash

# This script removes Spring Boot related files and sets up a pure React application

# Exit on error
set -e

echo "===== Converting to Pure React Application ====="

# 1. Remove Spring Boot related files
echo "Removing Spring Boot related files..."
rm -rf src .mvn mvnw mvnw.cmd pom.xml
rm -f run-app.sh mvnw-install.sh build-all.sh start-backend-service.sh

# 2. Create a new React-specific npm script
echo "Updating package.json scripts..."
cat > package.json << 'EOL'
{
  "name": "ai-career-architect",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "dev": "vite --port 3000",
    "build": "vite build",
    "preview": "vite preview",
    "check": "tsc"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-alert-dialog": "^1.1.7",
    "@radix-ui/react-aspect-ratio": "^1.1.3",
    "@radix-ui/react-avatar": "^1.1.4",
    "@radix-ui/react-checkbox": "^1.1.5",
    "@radix-ui/react-collapsible": "^1.1.4",
    "@radix-ui/react-context-menu": "^2.2.7",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-hover-card": "^1.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-menubar": "^1.1.7",
    "@radix-ui/react-navigation-menu": "^1.2.6",
    "@radix-ui/react-popover": "^1.1.7",
    "@radix-ui/react-progress": "^1.1.3",
    "@radix-ui/react-radio-group": "^1.2.4",
    "@radix-ui/react-scroll-area": "^1.2.4",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-separator": "^1.1.3",
    "@radix-ui/react-slider": "^1.2.4",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.4",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-toggle": "^1.1.3",
    "@radix-ui/react-toggle-group": "^1.1.3",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@tanstack/react-query": "^5.60.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^11.13.1",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.453.0",
    "next-themes": "^0.4.6",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.55.0",
    "react-icons": "^5.4.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.2",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.2.5",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "zod": "^3.24.2",
    "zod-validation-error": "^3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.15",
    "@types/node": "20.16.11",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "typescript": "5.6.3",
    "vite": "^5.4.14"
  }
}
EOL

# 3. Update vite.config.ts
echo "Updating Vite configuration..."
cat > vite.config.ts << 'EOL'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  base: "/",
});
EOL

# 4. Create a run script
echo "Creating run script..."
cat > run-react-app.sh << 'EOL'
#!/bin/bash

# Exit on error
set -e

echo "===== Running AI Career Architect React App ====="

# Start the development server
npm run dev
EOL

# Make the script executable
chmod +x run-react-app.sh

# 5. Update the README
echo "Updating README..."
cat > README.md << 'EOL'
# AI Career Architect UI

This project is a React application for the AI Career Architect platform.

## System Requirements

- Node.js (version 16+)
- npm (included with Node.js)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
   Or use the provided script:
   ```
   ./run-react-app.sh
   ```

The app will be available at http://localhost:3000

## Building for Production

To create a production build:

```
npm run build
```

This will generate optimized files in the `dist` directory.

## Project Structure

- `/client` - React application source code
- `/dist` - Production build output
- `/shared` - Shared utilities and types

## Technologies Used

- React 18
- TypeScript
- Vite
- TailwindCSS
- React Query
- Wouter (for routing)
- Radix UI components
- Zod (for validation)
EOL

echo "===== Conversion Complete! ====="
echo "Your project is now a pure React application."
echo "To run the development server: ./run-react-app.sh"
echo "To build for production: npm run build"
echo ""
echo "Next steps:"
echo "1. Run 'npm install' to update dependencies"
echo "2. Run './run-react-app.sh' to start the development server" 