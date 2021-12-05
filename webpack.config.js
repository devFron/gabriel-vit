const HtmlWebpackPlugin = require('html-webpack-plugin')
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
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"./index.html"
        })
    ]
}