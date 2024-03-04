const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist/assets/js'),
        publicPath: '/assets/js/',
        filename: "bundle.js",
        chunkFilename: '[name].js'
    },
    watch: false,
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["@babel/env", {
                            "targets": {
                            "browsers": "last 2 chrome versions"
                            }
                        }]
                    ]
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '../images',
                },
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
            // {
            //     test: /\.css$/i,
            //     include: path.resolve(__dirname, 'src/assets/css/'),
            //     use: ['style-loader', 'css-loader', 'postcss-loader'],
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: path.resolve(__dirname, 'dist/index.html'),
                template: 'src/index.html'
            }
        ),
        new CopyPlugin({
            patterns: [
                { from: "public", to: path.resolve(__dirname, 'dist/') },
            ],
        }),
    ],
    resolve: {
        extensions: ['.json', '.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 1914,
    }
};