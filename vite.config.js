import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), yextSSG()],
    define: {
      ENV_VAR_KEY: JSON.stringify(process.env.ENV_VAR_KEY),
    }
  }
});
