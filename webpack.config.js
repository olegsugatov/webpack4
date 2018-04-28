let path = require('path');

let conf = {
    entry: './src/index.js',
    output: {
	path: path.resolve(__dirname, './dist/'),
	filename: 'main.js',
	publicPath: 'dist/'
    },
    devServer: {
	overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
		loader: 'babel-loader',
		//exclude: '/node_modules/' 
            },
	    {
		test: /\.css$/,
	        use: [
		     'style-loader',
		     'css-loader'		
		]
	    }	
        ]
    }
};

// source map for production in separated files
module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production
		   ? false //'source-map'
		   : 'evel-sourcemap';
    return conf;
}
