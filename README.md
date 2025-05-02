# CarrierNXT UI

This project is a React application for the CarrierNXT platform.

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
   ./run-carriernxt-ui.sh
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
