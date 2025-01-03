import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({jsxRuntime: 'classic'}), viteTsconfigPaths(), svgrPlugin()],
})
