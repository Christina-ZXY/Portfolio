# Portfolio
<!-- use new library -->
npm install tailwindcss @tailwindcss/vite
<!-- set config in vite.config.js -->
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

<!-- import in index.css -->
@import "tailwindcss";

<!-- icon libary and rounter and tailwind tool -->
npm install lucide-react react-router-dom tailwind-merge

<!-- @radix-ui/react-toast: A headless toast component for showing notifications
class-variance-authority: Utility for managing Tailwind CSS variants
clsx: Utility to conditionally combine classNames -->
npm install @radix-ui/react-toast class-variance-authority clsx



