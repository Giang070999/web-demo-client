var Product=require('../models/Product');
var mongoose=require('mongoose');
mongoose.connect('localhost:27017/shopping');
var products=[
    new Product({
        imagePath:"http://thuthuatphanmem.vn/uploads/2018/04/10/hinh-nen-qua-cherry-tren-nuoc-dep_052339500.jpg",
        title:"qua tao",
        Description:" ngon,chat luong",
        price: 100
    }),
    new Product({
        imagePath:"http://thuthuatphanmem.vn/uploads/2018/04/10/hinh-nen-qua-cherry-tren-nuoc-dep_052339500.jpg",
        title:"qua tao2",
        Description:" ngon,chat luong",
        price: 100
    }),
    new Product({
        imagePath:"http://thuthuatphanmem.vn/uploads/2018/04/10/hinh-nen-qua-cherry-tren-nuoc-dep_052339500.jpg",
        title:"qua tao4",
        Description:" ngon,chat luong",
        price: 100
    })
];
var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}