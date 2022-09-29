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
      "Individual": "Ned Flanders",
      "Most Lovable": 80,
      "Smartest": 91,
      "Fattest": 27,
      "Biggest Nerd": 91,
      "Greatest Anarchist": 1,
      "Walk of Fame Rating": 89,
      "img_url": "https://static.simpsonswiki.com/images/thumb/9/97/Cyrus_Manley.png/636px-Cyrus_Manley.png"
    }
       ])