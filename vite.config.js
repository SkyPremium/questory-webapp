import react from '@vitejs/plugin-react';
export default {
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    allowedHosts: "all"
  }
}