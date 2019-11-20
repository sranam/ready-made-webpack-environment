{
    test: /\.scss$/,
    use: [
        {
            loader: MiniCSSExtractPlugin.loader,
        },
        {
            loader: 'style-loader', // inject CSS to page
        }, 
        {
            loader: 'css-loader', // translates CSS into CommonJS modules
        }, 
        {
            loader: 'postcss-loader', // Run postcss actions
            options: {
                plugins: function () { // postcss plugins, can be exported to postcss.config.js
                    return [
                    require('autoprefixer')
                    ];
                }
            }
        }, 
        {
            loader: 'sass-loader' // compiles Sass to CSS
        }
    ]
}


const path = require('path')
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        port: 2222,
        open: true,
        compress: true
    }
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function(){
                                return [require('autoprefixer')];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[text]',
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
            filename: '[name].css',
            chunkfilename: '[id].css'
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

const path = require('path')
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rule: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function(){
                                return [requrie('autoprefixer')];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }


                ]

            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        } 
                    }
                ]
            },
            {
                test:/\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[text]',
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
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQeury: 'jquery'
        })
    ]
}

const path = require('path')
const webpath = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exprts = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')

    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function(){
                                return [require('autoprefixer')]
                            } 
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]

            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: 'fonts/'
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuuery: 'jquery'
        })
    ]
}