const path = require('path')
/**@type {import("@rspack/cli").Configuration} */
module.exports = {
  context: __dirname,
	mode: "production",
  entry: {
    "a": path.resolve(__dirname, "./entry-a.mjs") ,
    "b": path.resolve(__dirname, "./entry-b.mjs")
  },
	optimization: {
		minimize: false,
		moduleIds: "named",
    mangleExports: false,
	},
  output: {
    path: path.resolve(__dirname, "../../dist/treeshaking/rspack")
  },
	experiments: {
		rspackFuture: { newTreeshaking: true },
	},
};
