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
    }
}