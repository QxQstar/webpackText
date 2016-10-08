/**
 * Created by Administrator on 2016/10/8.
 */
module.exports = {
    entry:"./a46c5813c705087a41147403452c0bdf.jpg",
    output:{
        path:"./build/",
        filename:"min.jpg"
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