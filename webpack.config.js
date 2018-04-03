const path = require('path');

const SRC = path.resolve(__dirname, 'src')
const BUILD = path.resolve(__dirname, 'build')

module.exports = {
	entry: SRC + '/index.js',
	output: {
		filename: 'bundle.js',
		path: BUILD
	},
	module: {
		rules: [
			{test: /\.js?$/, include: SRC, use: 'babel-loader' }
		]
	}
};
