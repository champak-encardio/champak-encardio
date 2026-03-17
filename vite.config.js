import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace "champak-encardio" below with your actual GitHub repo name if different.
// If this is a user/org page (username.github.io), set base to "/".
export default defineConfig({
  plugins: [react()],
  base: "/champak-encardio/",
});
