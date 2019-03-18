let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js',
        publicPath: 'dist/'
    },
    devtool: 'source-map',
    module : {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },

            {
                test: /\.scss$/,
                use : [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                        // options: { sourceMap: true}
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            data: '@import "utils";',
                            includePaths: [styleUtils],
                            sourceMap: true
                        }
                    }
                ]
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        query: {
                            name: '[name].[ext]',
                            outputPath: './img/'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css"
        })
      ],
    
};

module.exports = conf;