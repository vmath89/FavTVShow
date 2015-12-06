angular.module('app').factory('showsService', function($location){

	var vm = this;
  
	showslist = [{
    title: 'Game of Thrones',
    year: 2011,
    favorite: true,
    image: "http://winteriscoming.net/wp-content/uploads/2015/03/game-of-thrones-logo1.jpg",
    desc: "Several noble families fight for control of the mythical land of Westeros.",
    reviews:[
        {
          stars: 5,
          body: 'This is a very nice series.',
          author: 'iam@happy.com'
        },
        {
          stars: 4,
          body: 'I love this series.',
          author: 'weare@happy.com'
        }
      ],
    cast: {
      exproducers: 'David Benioff, D. B. Weiss, Carolyn Strauss, Frank Doelger, Bernadette Caulfield',
      producers: 'Mark Huffam, Chris Newman, Greg Spence, Lisa McAtackney, Bryan Cogman',
      editor: 'Oral Norrey Ottey',
      cinematography: 'Anette Haellmigk, David Franco',
    },  
  }, {
    title: 'The Walking Dead',
    year: 2010,
    favorite: false,
    image: "https://upload.wikimedia.org/wikipedia/en/1/17/The_Walking_Dead_title_card.jpg",
    desc: "Sheriff Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
    reviews:[
        {
          stars: 5,
          body: 'The Walking Dead is a very nice series.',
          author: 'iam@happy.com'
        },
        {
          stars: 4,
          body: 'I love this series.',
          author: 'weare@happy.com'
        }
      ],
  }, {
    title: 'Firefly',
    year: 2002,
    favorite: true,
    image: "http://strangersandaliens.com/wp-content/uploads/2012/02/firefly.jpg",
    desc: "Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.",
    reviews:[
        {
          stars: 5,
          body: 'Firefly is a very nice series.',
          author: 'iam@happy.com'
        },
        {
          stars: 4,
          body: 'I love this series.',
          author: 'weare@happy.com'
        }
      ],
  }, {
    title: 'Banshee',
    year: 2013,
    favorite: true,
    image: "https://upload.wikimedia.org/wikipedia/en/d/d0/TV_series_-_Banshee_Title_Card.jpg",
    desc: "Lucas Hood (Antony Starr), an ex-con and master thief assumes the identity of a murdered sheriff where he continues his criminal activities.",
    reviews:[
        {
          stars: 5,
          body: 'Banshee is a very nice series.',
          author: 'iam@happy.com'
        },
        {
          stars: 4,
          body: 'I love this series.',
          author: 'weare@happy.com'
        }
      ],
  }, {
    title: 'Greys Anatomy',
    year: 2005,
    favorite: false,
    image: "http://tgit.info/wp-content/uploads/2015/04/greys.jpg",
    desc: "A drama centered on the personal and professional lives of five surgical interns and their supervisors.",
    reviews:[
        {
          stars: 5,
          body: 'Greys Anatomy is a very nice series.',
          author: 'iam@happy.com'
        },
        {
          stars: 4,
          body: 'I love this series.',
          author: 'weare@happy.com'
        }
      ],
  }];

  showslist.add = function(data) {
    showslist.push(data);
    console.log(showslist);
    //vm.new = {};
    $location.url('/');
  };

  showslist.edit = function(data, index) {
    
    showslist.splice(index,1);
    showslist.push(data);
    console.log(showslist);
    //vm.new = {};
    $location.url('/');
  };
  showslist.delete = function(index) {
    
    showslist.splice(index,1);
    console.log(showslist);
    //vm.new = {};
    $location.url('/');
  };


  return showslist;

});