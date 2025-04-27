/**
 * TSUP Build Config
 * This configuration builds both CommonJS (CJS) and ESM outputs
 * with sourcemaps and auto JSX handling for React
 */

export default {
  // Entry point of your library
  entry: ["src/index.js"],

  // Output directory
  outDir: "dist",

  // Output formats (CommonJS for Node, ESM for Vite & modern bundlers)
  format: ["esm", "cjs"],

  // Generate TypeScript declaration file (only if you use TS or want future compatibility)
  dts: false,

  // Include source maps for better debugging
  sourcemap: true,

  // Clean the output folder before each build
  clean: true,

  // Target latest JavaScript standard (no heavy transpilation)
  target: "esnext",

  // Support JSX automatically (React 17+ JSX transform)
  jsx: "automatic",
};
