const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    module:{
        rules:[
            {
                test:/\.html$/i,
                use:{
                    loader:"html-loader",
                    options:{
                        minimize:true
                    }
                }
            },
            {
                test:/\.css$/i,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        option:{
                            publicPath:"./"
                        },
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: ["file-loader?name=assets/[name].[ext]", "image-webpack-loader"],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin()
    ]
}