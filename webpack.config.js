/**
 * Created by Administrator on 2016/10/8.
 */
module.exports = {
    entry:"./app/index.js",
    output:{
        path:"./build/",
        filename:"build.js"
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
    }
};