const path = require('path')
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },

    mode: 'development',

    devServer: {
        port: 2222,
        open: true,
        compress: true
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { 
                        loader: MiniCSSExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader' // translate CSS into CoommonJS modules
                    },
                    {
                        loader: 'postcss-loader', // Run postcss actions
                        options: {
                            plugins: function(){ // postcss plugins, can be exported to postcss.config.js
                                return [require('autoprefixer')];
                            }
                        } 
                    }, 
                    {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }
                ]
                    
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCSSExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}
