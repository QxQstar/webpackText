/**
 * Created by Administrator on 2016/10/8.
 */
var autoHtml = require('html-webpack-plugin');
module.exports = {
    entry:{
        one:"./app/one.js",
        two:"./app/two.js"
    },
    output:{
        path:"./build/",
        filename:"[name].js"
    },
    module:{
        loaders:[
            {
                test:/.*\.css$/,
                loaders:["style","css"],
                exclude:'./node_modules/'
            }
        ]
    },
    resolve:{
        extensions:['','.css','.js','jsx']
    },
    plugins:[
        new autoHtml({
            'title':"hello",
            'filename':"index.html",
            chunks:['one']
        })
    ]
};