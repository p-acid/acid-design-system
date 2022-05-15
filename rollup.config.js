import commonjs from "rollup-plugin-commonjs";
import cleaner from "rollup-plugin-cleaner";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import scss from "rollup-plugin-scss";

import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

process.env.BABEL_ENV = "production";

export default [
  {
    input: "./index.ts",
    external: ["react", "react-is", "react-router", "react/jsx-runtime"],
    plugins: [
      typescript(),
      scss(),
      cleaner({ targets: ["./dist/"] }),
      peerDepsExternal(),
      resolve({ extensions }),
      commonjs({
        include: "node_modules/**",
      }),
      babel({
        extensions,
        include: ["index.ts"],
        presets: [["react-app", { flow: false, typescript: true }]],
        runtimeHelpers: true,
      }),
    ],
    output: [
      {
        file: pkg.module,
        format: "es",
      },
    ],
  },
];
