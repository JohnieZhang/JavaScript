module.exports = {
	entry: {
		testEs5:"./es6/1.js"
	},
	output: {
		path: __dirname,
		filename: "./es5/[name].js"
	},
	module: {
		loaders: [{test:/\.js$/, exclude: /node_modules/,loader: 'babel-loader'}]
	}
}