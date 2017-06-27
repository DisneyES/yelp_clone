const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.resolve('./','./dist'), // `dist` is the destination
        filename: 'bundle.js',
    },

    //To run development server
    devServer: {
        contentBase: './',
        historyApiFallback: true,
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[hash:base64:5]!sass-loader?sourceMap!postcss-loader'
                }))
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new ExtractTextPlugin( 'bundle.css' )
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: 'eval-source-map' // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === 'production') {
    config.devtool = ''; // No sourcemap for production

    // Add more configuration for production here like
    // Uglify plugin
    // Offline plugin
    // Etc,
}

module.exports = config;
