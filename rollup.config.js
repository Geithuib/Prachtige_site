import { nodeResolve } from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
 
export default {
  input: "script.js",
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    nodeResolve(),
    copy({
      targets: [
        { src: "index.html", dest: "dist" },
        { src: "style.css", dest: "dist" },
      ],
    }),
    terser({
      output: {
        comments: false,
      },
    }),
  ],
};
