export const recipesDefaults =  [
    {name:'Tasty Schnitzel',
     description: 'A super-tasty Schnitzel - just awesome!',
    //  imagePath: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
    //  imagePath: 'http://localhost:8080/images/Wiener-Schnitzel.jpg',  
    imagePath: process.env.VUE_APP_HOST + '/images/Wiener-Schnitzel.jpg', 
     ingredients: [
        {name: 'Meat',
         amount: 1},
        {name: 'French Fries' ,
         amount: 20}
     ]
    },
    {name: 'Big Fat Burger',
     description: 'What else you need to say?',
    //  imagePath: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Wendy%27s_Double_Bacon_Deluxe_hamburger.jpg',
    //  imagePath: 'http://localhost:8080/images/Double_Bacon_hamburger.jpg',
    imagePath: process.env.VUE_APP_HOST + '/images/Double_Bacon_hamburger.jpg',
     ingredients: [
        {name: 'Buns',
         amount: 2},
        {name: 'Meat' ,
         amount: 1},
        {name: 'cheddar Cheese',
         amount: 1},
        {name: 'lettuce',
         amount: 1},
        {name:'tomato',
         amount: 1
        } 
     ]
    },
    {name:'Snow Cones',
     description: 'A Cold Treat',
    //  imagePath: 'https://c1.staticflickr.com/9/8334/8147418381_ae5dc9e104.jpg',
    //  imagePath: 'http://localhost:8080/images/snow_cones.jpg',
     imagePath: process.env.VUE_APP_HOST +'/images/snow_cones.jpg',
     ingredients: [
            {name: 'Chopped Ice',
             amount: 25},
            {name: 'Strawberry Flavoring',
             amount: 1},
            {name: 'Blueberry Flavoring',
             amount: 1},
            {name: 'Lime Flavoring',
             amount: 1},
            {name: 'Pumping Flavoring',
             amount: 1},
            {name: 'Raspberry Flavoring',
             amount: 1}
     ]
    }
];