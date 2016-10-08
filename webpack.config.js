/**
 * Created by Administrator on 2016/10/8.
 */
module.exports = {
    entry:["./build/module1.js","./build/module2.js"],
    output:{
        path:"./build/",
        filename:"build.js"
    },
    module:{
        loaders:[
            {
                test:/.css$/,
                loaders:["style","css"]
            }
        ]
    }
};