use toptrumps;
db.dropDatabase()

db.simpsonsTopTrumps.insertMany([
    {
      "Individual": "Bart Simpson",
      "Most Lovable": 9,
      "Smartest": 28,
      "Fattest": 25,
      "Biggest Nerd": 144,
      "Greatest Anarchist": 5,
      "Walk of Fame Rating": 19,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
    },
    {
      "Individual": "Patty & Selma Bouvier",
      "Most Lovable": 5,
      "Smartest": 29,
      "Fattest": 43,
      "Biggest Nerd": 150,
      "Greatest Anarchist": 4,
      "Walk of Fame Rating": 17,
      "img_url": "https://i.redd.it/sm90wa8hbva41.jpg"
    },
    {
      "Individual": "Marge Simpson",
      "Most Lovable": 9,
      "Smartest": 29,
      "Fattest": 30,
      "Biggest Nerd": 146,
      "Greatest Anarchist": 3,
      "Walk of Fame Rating": 18,
      "img_url": "https://mediaproxy.salon.com/width/1200/height/675/https://media.salon.com/2014/07/marge_simpson.jpg"
    },
    {
      "Individual": "Abraham \"Grampa\" Simpson",
      "Most Lovable": 7,
      "Smartest": 24,
      "Fattest": 33,
      "Biggest Nerd": 176,
      "Greatest Anarchist": 4,
      "Walk of Fame Rating": 17,
      "img_url": "https://www.giantbomb.com/a/uploads/scale_medium/0/6507/369043-abe_simpson.gif"
    },
    {
      "Individual": "Lisa Simpson",
      "Most Lovable": 9.5,
      "Smartest": 30,
      "Fattest": 24,
      "Biggest Nerd": 142,
      "Greatest Anarchist": 4.5,
      "Walk of Fame Rating": 18,
      "img_url": "https://sketchok.com/images/articles/01-cartoons/001-simpsons/15/10.jpg"
    },
    {
      "Individual": "Homer Simpson",
      "Most Lovable": 9,
      "Smartest": 25,
      "Fattest": 47,
      "Biggest Nerd": 148,
      "Greatest Anarchist": 4,
      "Walk of Fame Rating": 20,
      "img_url": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F08%2Fsimp_homersingle08_f_hires2-2000.jpg&q=60"
    },
    {
      "Individual": "Maggie Simpson",
      "Most Lovable": 10,
      "Smartest": 25,
      "Fattest": 22,
      "Biggest Nerd": 174,
      "Greatest Anarchist": 3,
      "Walk of Fame Rating": 18,
      "img_url": "https://static.simpsonswiki.com/images/thumb/9/9d/Maggie_Simpson.png/250px-Maggie_Simpson.png"
    },
    {
      "Individual": "Apu",
      "Most Lovable": 8,
      "Smartest": 29.5,
      "Fattest": 39,
      "Biggest Nerd": 152,
      "Greatest Anarchist": 4.5,
      "Walk of Fame Rating": 13.5,
      "img_url": "https://images.immediate.co.uk/production/volatile/sites/3/2020/01/apu-simpsons-2f11ef9.jpg?resize=620,413?quality=90&resize=620,414"
    },
    {
      "Individual": "Barney Gumble",
      "Most Lovable": 8.5,
      "Smartest": 25,
      "Fattest": 49,
      "Biggest Nerd": 186,
      "Greatest Anarchist": 3.5,
      "Walk of Fame Rating": 16,
      "img_url": "https://beingsakin.files.wordpress.com/2012/04/barney_gumble.png?w=848"
    },
    {
      "Individual": "Ned Flanders",
      "Most Lovable": 5,
      "Smartest": 29,
      "Fattest": 36,
      "Biggest Nerd": 198,
      "Greatest Anarchist": 2,
      "Walk of Fame Rating": 15,
      "img_url": "https://www.nme.com/wp-content/uploads/2021/08/Ned-Flanders-696x442.jpg"
    },
    {
      "Individual": "Edna Krabappel",
      "Most Lovable": 4,
      "Smartest": 26,
      "Fattest": 28,
      "Biggest Nerd": 162,
      "Greatest Anarchist": 3,
      "Walk of Fame Rating": 8,
      "img_url": "https://cdn.jwplayer.com/v2/media/iab1T7ef/poster.jpg?width=1920"
    },
    {
      "Individual": "Chief Wiggum",
      "Most Lovable": 7.5,
      "Smartest": 24,
      "Fattest": 48,
      "Biggest Nerd": 182,
      "Greatest Anarchist": 2,
      "Walk of Fame Rating": 14,
      "img_url": "https://www.giantbomb.com/a/uploads/scale_medium/0/9493/2497402-chief-wiggum.gif"
    },
    {
      "Individual": "Dr Julius Hibbert",
      "Most Lovable": 5,
      "Smartest": 27,
      "Fattest": 44,
      "Biggest Nerd": 164,
      "Greatest Anarchist": 3,
      "Walk of Fame Rating": 7,
      "img_url": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F02%2Fthe-simpsons-switches-voice-actors-dr-hibbert-recasting-black-characters-info-0.jpg?w=960&cbr=1&q=90&fit=max"
    },
    {
      "Individual": "Itchy & Scratchy",
      "Most Lovable": 7,
      "Smartest": 24,
      "Fattest": 30,
      "Biggest Nerd": 156,
      "Greatest Anarchist": 4,
      "Walk of Fame Rating": 15,
      "img_url": "https://pyxis.nymag.com/v1/imgs/919/38d/948d1c1554a67baa4c096fc18176d60974-26-itchy-scratchy.rsquare.w700.jpg"
    },
    {
      "Individual": "Krusty the Clown",
      "Most Lovable": 7,
      "Smartest": 28.5,
      "Fattest": 46,
      "Biggest Nerd": 154,
      "Greatest Anarchist": 4,
      "Walk of Fame Rating": 16,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/5/5a/Krustytheclown.png"
    },
    {
      "Individual": "Lenny & Carl",
      "Most Lovable": 8,
      "Smartest": 26,
      "Fattest": 27,
      "Biggest Nerd": 194,
      "Greatest Anarchist": 2.5,
      "Walk of Fame Rating": 11,
      "img_url": "https://cdn3.whatculture.com/images/2022/04/35d27afc1b43e856-600x338.jpg"
    },
    {
      "Individual": "Milhouse Van Houten",
      "Most Lovable": 8,
      "Smartest": 28.5,
      "Fattest": 32,
      "Biggest Nerd": 188,
      "Greatest Anarchist": 3,
      "Walk of Fame Rating": 12,
      "img_url": "https://i.redd.it/h2feay7cd6d71.png"
    },
    {
      "Individual": "Moe Szyslak",
      "Most Lovable": 7.5,
      "Smartest": 27,
      "Fattest": 22,
      "Biggest Nerd": 172,
      "Greatest Anarchist": 4,
      "Walk of Fame Rating": 16,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/8/80/Moe_Szyslak.png"
    },
    {
      "Individual": "C. Montgomery Burns",
      "Most Lovable": 5,
      "Smartest": 29,
      "Fattest": 20,
      "Biggest Nerd": 178,
      "Greatest Anarchist": 4.5,
      "Walk of Fame Rating": 16,
      "img_url": "https://static.tvmaze.com/uploads/images/original_untouched/0/2181.jpg"
    },
    {
      "Individual": "Martin",
      "Most Lovable": 8,
      "Smartest": 28,
      "Fattest": 45,
      "Biggest Nerd": 170,
      "Greatest Anarchist": 3.5,
      "Walk of Fame Rating": 10,
      "img_url": "https://static.simpsonswiki.com/images/4/46/Martin_Prince.png"
    },
    {
      "Individual": "Principal Skinner",
      "Most Lovable": 7,
      "Smartest": 27,
      "Fattest": 32,
      "Biggest Nerd": 180,
      "Greatest Anarchist": 2.5,
      "Walk of Fame Rating": 14,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/3/3a/Seymour_Skinner.png"
    },
    {
      "Individual": "Nelson Muntz",
      "Most Lovable": 3,
      "Smartest": 22,
      "Fattest": 33,
      "Biggest Nerd": 140,
      "Greatest Anarchist": 2.5,
      "Walk of Fame Rating": 8,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/c/c6/Nelson_Muntz.PNG"
    },
    {
      "Individual": "Otto",
      "Most Lovable": 6,
      "Smartest": 26,
      "Fattest": 32,
      "Biggest Nerd": 184,
      "Greatest Anarchist": 4,
      "Walk of Fame Rating": 12,
      "img_url": "https://i.pinimg.com/736x/7f/e8/2d/7fe82dc422c1455ef1980580db5c70d2.jpg"
    },
    {
      "Individual": "Sherri and Terri",
      "Most Lovable": 5,
      "Smartest": 28,
      "Fattest": 28,
      "Biggest Nerd": 176,
      "Greatest Anarchist": 3,
      "Walk of Fame Rating": 11,
      "img_url": "https://pbs.twimg.com/profile_images/1212438728783867905/KhBeQguF_400x400.jpg"
    },
    {
      "Individual": "Sideshow Bob",
      "Most Lovable": 8,
      "Smartest": 26,
      "Fattest": 38,
      "Biggest Nerd": 190,
      "Greatest Anarchist": 2.5,
      "Walk of Fame Rating": 8,
      "img_url": "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg5ODczODUyMDU3NTI3OTk2/ranking-every-sideshow-bob-episode-of-the-simpsons.jpg"
    },
    {
      "Individual": "Waylon Smithers",
      "Most Lovable": 4,
      "Smartest": 24,
      "Fattest": 35,
      "Biggest Nerd": 192,
      "Greatest Anarchist": 2.5,
      "Walk of Fame Rating": 9,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/8/86/Waylon_Smithers_1.png"
    },
    {
      "Individual": "Snowball ll",
      "Most Lovable": 8.5,
      "Smartest": 23.5,
      "Fattest": 26,
      "Biggest Nerd": 158,
      "Greatest Anarchist": 2,
      "Walk of Fame Rating": 11,
      "img_url": "https://mystickermania.com/cdn/stickers/simpsons-stickers/simpsons-snowball-ii-512x512.png"
    },
    {
      "Individual": "Todd & Rod Flanders",
      "Most Lovable": 6,
      "Smartest": 27,
      "Fattest": 32,
      "Biggest Nerd": 196,
      "Greatest Anarchist": 2,
      "Walk of Fame Rating": 9,
      "img_url": "https://whatnerd.com/wp-content/uploads/2021/07/worst-simpsons-characters-rod-todd-flanders.jpg"
    },
    {
      "Individual": "Groundskeeper Willie",
      "Most Lovable": 6,
      "Smartest": 24,
      "Fattest": 35,
      "Biggest Nerd": 166,
      "Greatest Anarchist": 4,
      "Walk of Fame Rating": 13,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/d/dc/GroundskeeperWillie.png"
    },
    {
      "Individual": "Santa's Little Helper",
      "Most Lovable": 8,
      "Smartest": 24,
      "Fattest": 20,
      "Biggest Nerd": 160,
      "Greatest Anarchist": 1,
      "Walk of Fame Rating": 13,
      "img_url": "https://static.simpsonswiki.com/images/thumb/2/2c/Santa%27s_Little_Helper.png/200px-Santa%27s_Little_Helper.png"
    }
   ])

