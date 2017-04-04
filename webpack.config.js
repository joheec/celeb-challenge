const { join } = require('path');
const webpackConfig = {
	entry: './src/js/application.jsx',
	output: {
		path: join(__dirname, 'dist'),
		filename: 'application-bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [{
			test: /.jsx$/,
			use: ['babel-loader'],
		}]
	},
}

module.exports = webpackConfig;
