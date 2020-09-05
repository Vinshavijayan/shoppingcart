var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingg',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected to database..'))
.catch(err => console.log('refuse to connect..',err));

var products = [
    new Product({
imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
title:'Gothic Video Game',
description: 'awsome Game!!!',
price: 10
}),
new Product({
    imagePath: "https://images.firstpost.com/wp-content/uploads/2019/01/PUBG-Lite.jpg",
    title:'PUBG',
    description: 'amazing Game. try this!!!',
    price: 30
    }),
    new Product({
        imagePath: "https://mp1st.com/wp-content/uploads/2017/10/fortnite-battle-royale-stats.jpg",
        title:'Fornite Battle Royale',
        description: 'try this too.!!!',
        price: 50
        }),
        new Product({
            imagePath: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
            title:'Minecraft video game',
            description: 'online hit game!!!',
            price: 40
            }),
            new Product({
                imagePath: "https://i.ytimg.com/vi/abfMDv14XZg/maxresdefault.jpg",
                title:'League of Legends',
                description: 'amazing Game. try this one!!!',
                price: 70
                }),
                new Product({
                    imagePath: "https://i.ytimg.com/vi/oQtHENM_GZU/maxresdefault.jpg",
                    title:'Apex Legends',
                    description: 'Try this!!!',
                    price: 20
                    }),
];
var done = 0;
for (var i=0;i<products.length;i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}

