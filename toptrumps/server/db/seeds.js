use toptrumps;
db.dropDatabase()

db.simpsonsTopTrumps.insertMany([
    {
      "Individual": "Bart Simpson",
      "Most Lovable": 90,
      "Smartest": 78,
      "Fattest": 48,
      "Biggest Nerd": 76,
      "Greatest Anarchist": 99,
      "Walk of Fame Rating": 97,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
    },
    {
      "Individual": "Patty & Selma Bouvier",
      "Most Lovable": 45,
      "Smartest": 72,
      "Fattest": 62,
      "Biggest Nerd": 49,
      "Greatest Anarchist": 20,
      "Walk of Fame Rating": 60,
      "img_url": "https://topicimages.mrowl.com/large/owl/thesimpsons/characters/pattybouvier_1.jpg"
    },
    {
      "Individual": "Marge Simpson",
      "Most Lovable": 88,
      "Smartest": 81,
      "Fattest": 30,
      "Biggest Nerd": 70,
      "Greatest Anarchist": 38,
      "Walk of Fame Rating": 96,
      "img_url": "http://i.imgur.com/nrBMnaB.png"
    },
    {
      "Individual": "Abraham \"Grampa\" Simpson",
      "Most Lovable": 75,
      "Smartest": 67,
      "Fattest": 69,
      "Biggest Nerd": 53,
      "Greatest Anarchist": 70,
      "Walk of Fame Rating": 84,
      "img_url": "https://www.giantbomb.com/a/uploads/scale_medium/0/6507/369043-abe_simpson.gif"
    }
    ,
    {
      "Individual": "Lisa Simpson",
      "Most Lovable": 99,
      "Smartest": 97,
      "Fattest": 42,
      "Biggest Nerd": 96,
      "Greatest Anarchist": 22,
      "Walk of Fame Rating": 96,
      "img_url": "https://sketchok.com/images/articles/01-cartoons/001-simpsons/15/10.jpg"
    },
    {
      "Individual": "Homer Simpson",
      "Most Lovable": 95,
      "Smartest": 50,
      "Fattest": 64,
      "Biggest Nerd": 39,
      "Greatest Anarchist": 83,
      "Walk of Fame Rating": 99,
      "img_url": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F08%2Fsimp_homersingle08_f_hires2-2000.jpg&q=60"
    },
    {
      "Individual": "Maggie Simpson",
      "Most Lovable": 99,
      "Smartest": 47,
      "Fattest": 10,
      "Biggest Nerd": 25,
      "Greatest Anarchist": 78,
      "Walk of Fame Rating": 91,
      "img_url": "https://static.simpsonswiki.com/images/thumb/9/9d/Maggie_Simpson.png/250px-Maggie_Simpson.png"
    },
    {
      "Individual": "Apu",
      "Most Lovable": 76,
      "Smartest": 88,
      "Fattest": 71,
      "Biggest Nerd": 60,
      "Greatest Anarchist": 54,
      "Walk of Fame Rating": 65,
      "img_url": "https://images.immediate.co.uk/production/volatile/sites/3/2020/01/apu-simpsons-2f11ef9.jpg?resize=620,413?quality=90&resize=620,414"
    },
    {
      "Individual": "Barney Gumble",
      "Most Lovable": 82,
      "Smartest": 59,
      "Fattest": 91,
      "Biggest Nerd": 62,
      "Greatest Anarchist": 52,
      "Walk of Fame Rating": 78,
      "img_url": "https://beingsakin.files.wordpress.com/2012/04/barney_gumble.png?w=848"
    },
    {
      "Individual": "Ned Flanders",
      "Most Lovable": 80,
      "Smartest": 91,
      "Fattest": 27,
      "Biggest Nerd": 91,
      "Greatest Anarchist": 1,
      "Walk of Fame Rating": 89,
      "img_url": "https://static.simpsonswiki.com/images/thumb/9/97/Cyrus_Manley.png/636px-Cyrus_Manley.png"
    },
    {
      "Individual": "Edna Krabappel",
      "Most Lovable": 30,
      "Smartest": 77,
      "Fattest": 59,
      "Biggest Nerd": 61,
      "Greatest Anarchist": 53,
      "Walk of Fame Rating": 75,
      "img_url": "https://openpsychometrics.org/tests/characters/test-resources/pics/S/12.jpg"
    },
    {
      "Individual": "Chief Wiggum",
      "Most Lovable": 85,
      "Smartest": 24,
      "Fattest": 80,
      "Biggest Nerd": 32,
      "Greatest Anarchist": 1,
      "Walk of Fame Rating": 86,
      "img_url": "https://www.giantbomb.com/a/uploads/scale_medium/0/9493/2497402-chief-wiggum.gif"
    },
    {
      "Individual": "Dr Julius Hibbert",
      "Most Lovable": 74,
      "Smartest": 88,
      "Fattest": 73,
      "Biggest Nerd": 80,
      "Greatest Anarchist": 21,
      "Walk of Fame Rating": 59,
      "img_url": "https://static.wikia.nocookie.net/simpsons/images/9/9c/Julius_Hibbert.png"
    },
    {
      "Individual": "Itchy & Scratchy",
      "Most Lovable": 94,
      "Smartest": 59,
      "Fattest": 20,
      "Biggest Nerd": 46,
      "Greatest Anarchist": 97,
      "Walk of Fame Rating": 94,
      "img_url": "https://pyxis.nymag.com/v1/imgs/919/38d/948d1c1554a67baa4c096fc18176d60974-26-itchy-scratchy.rsquare.w700.jpg"
    },
    {
      "Individual": "Krusty the Clown",
      "Most Lovable": 83,
      "Smartest": 81,
      "Fattest": 46,
      "Biggest Nerd": 79,
      "Greatest Anarchist": 85,
      "Walk of Fame Rating": 97,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/5/5a/Krustytheclown.png"
    },
    {
      "Individual": "Lenny & Carl",
      "Most Lovable": 61,
      "Smartest": 82,
      "Fattest": 51,
      "Biggest Nerd": 73,
      "Greatest Anarchist": 35,
      "Walk of Fame Rating": 68,
      "img_url": "https://static.wikia.nocookie.net/simpsonstappedout/images/b/b0/LennyandCarl.png"
    },
    {
      "Individual": "Milhouse Van Houten",
      "Most Lovable": 72,
      "Smartest": 58,
      "Fattest": 32,
      "Biggest Nerd": 65,
      "Greatest Anarchist": 21,
      "Walk of Fame Rating": 60,
      "img_url": "https://static.wikia.nocookie.net/simpsons/images/1/11/Milhouse_Van_Houten.png/"
    },
    {
      "Individual": "Moe Szyslak",
      "Most Lovable": 42,
      "Smartest": 67,
      "Fattest": 22,
      "Biggest Nerd": 57,
      "Greatest Anarchist": 20,
      "Walk of Fame Rating": 79,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/8/80/Moe_Szyslak.png"
    },
    {
      "Individual": "C. Montgomery Burns",
      "Most Lovable": 1,
      "Smartest": 89,
      "Fattest": 10,
      "Biggest Nerd": 84,
      "Greatest Anarchist": 95,
      "Walk of Fame Rating": 86,
      "img_url": "https://static.tvmaze.com/uploads/images/original_untouched/0/2181.jpg"
    },
    {
      "Individual": "Martin",
      "Most Lovable": 50,
      "Smartest": 95,
      "Fattest": 45,
      "Biggest Nerd": 95,
      "Greatest Anarchist": 3,
      "Walk of Fame Rating": 60,
      "img_url": "https://static.simpsonswiki.com/images/4/46/Martin_Prince.png"
    },
    {
      "Individual": "Principal Skinner",
      "Most Lovable": 77,
      "Smartest": 83,
      "Fattest": 32,
      "Biggest Nerd": 79,
      "Greatest Anarchist": 9,
      "Walk of Fame Rating": 65,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/3/3a/Seymour_Skinner.png"
    },
    {
      "Individual": "Nelson Muntz",
      "Most Lovable": 36,
      "Smartest": 22,
      "Fattest": 33,
      "Biggest Nerd": 37,
      "Greatest Anarchist": 95,
      "Walk of Fame Rating": 78,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/c/c6/Nelson_Muntz.PNG"
    },
    {
      "Individual": "Otto",
      "Most Lovable": 74,
      "Smartest": 26,
      "Fattest": 32,
      "Biggest Nerd": 69,
      "Greatest Anarchist": 89,
      "Walk of Fame Rating": 57,
      "img_url": "https://i.pinimg.com/736x/7f/e8/2d/7fe82dc422c1455ef1980580db5c70d2.jpg"
    },
    {
      "Individual": "Duffman",
      "Most Lovable": 65,
      "Smartest": 33,
      "Fattest": 28,
      "Biggest Nerd": 34,
      "Greatest Anarchist": 40,
      "Walk of Fame Rating": 87,
      "img_url": "https://lastfm.freetls.fastly.net/i/u/770x0/29fadce452434b40af301874dd3115ed.jpg#29fadce452434b40af301874dd3115ed"
    },
    {
      "Individual": "Sideshow Bob",
      "Most Lovable": 30,
      "Smartest": 88,
      "Fattest": 38,
      "Biggest Nerd": 84,
      "Greatest Anarchist": 100,
      "Walk of Fame Rating": 85,
      "img_url": "https://static.wikia.nocookie.net/sexypedia/images/1/11/SideshowBobCurrent.png"
    },
    {
      "Individual": "Waylon Smithers",
      "Most Lovable": 57,
      "Smartest": 49,
      "Fattest": 35,
      "Biggest Nerd": 60,
      "Greatest Anarchist": 24,
      "Walk of Fame Rating": 63,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/8/86/Waylon_Smithers_1.png"
    },
    {
      "Individual": "Snowball ll",
      "Most Lovable": 87,
      "Smartest": 23,
      "Fattest": 9,
      "Biggest Nerd": 21,
      "Greatest Anarchist": 3,
      "Walk of Fame Rating": 21,
      "img_url": "https://mystickermania.com/cdn/stickers/simpsons-stickers/simpsons-snowball-ii-512x512.png"
    },
    {
      "Individual": "Horatio McAllister",
      "Most Lovable": 63,
      "Smartest": 70,
      "Fattest": 65,
      "Biggest Nerd": 52,
      "Greatest Anarchist": 76,
      "Walk of Fame Rating": 66,
      "img_url": "https://static.wikia.nocookie.net/theultimatesimpsons/images/b/b3/Swsb_character_fact_captain_550x960.png"
    },
    {
      "Individual": "Groundskeeper Willie",
      "Most Lovable": 65,
      "Smartest": 73,
      "Fattest": 35,
      "Biggest Nerd": 84,
      "Greatest Anarchist": 89,
      "Walk of Fame Rating": 73,
      "img_url": "https://upload.wikimedia.org/wikipedia/en/d/dc/GroundskeeperWillie.png"
    },
    {
      "Individual": "Santa's Little Helper",
      "Most Lovable": 90,
      "Smartest": 12,
      "Fattest": 20,
      "Biggest Nerd": 32,
      "Greatest Anarchist": 60,
      "Walk of Fame Rating": 74,
      "img_url": "https://static.simpsonswiki.com/images/thumb/2/2c/Santa%27s_Little_Helper.png/200px-Santa%27s_Little_Helper.png"
    }
   ])

