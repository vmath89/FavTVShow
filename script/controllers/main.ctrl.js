angular.module('app').controller("MainController", function($location, $routeParams, showsService) {
  var vm = this;
  vm.title = 'TV Show';
  vm.searchInput = '';
  vm.shows = showsService;

  console.log(vm.shows);
  
  vm.orders = [{
    id: 1,
    title: 'Year Ascending',
    key: 'year',
    reverse: false
  }, {
    id: 2,
    title: 'Year Descending',
    key: 'year',
    reverse: true
  }, {
    id: 3,
    title: 'Title Ascending',
    key: 'title',
    reverse: false
  }, {
    id: 4,
    title: 'Title Descending',
    key: 'title',
    reverse: true
  }];
  
  vm.order = vm.orders[0];
  vm.new = {};
  vm.addShow = function() {
    showsService.add(vm.new);
  };
  
  vm.newShow = function() {
    $location.path('/add');
  };

  vm.edit = function(){
   // this.person = vm.person[$routeParams.id];
    console.log($routeParams);
  }

  vm.delete = function(title){
    console.log("delete " + title);
    vm.title = title;
    var counter;
    for(counter = 0; counter < showsService.length; counter++){
      if(vm.title === showsService[counter].title){
        break;
      }
    }
    showsService.delete(counter);

  };

})

.controller('EditController', function($location,$routeParams,showsService){

    var vm = this;
    vm.show = {};
    vm.title = $routeParams.id;
    var counter;
    for(counter = 0; counter < showsService.length; counter++){
      if(vm.title === showsService[counter].title){
        break;
      }
    }
    vm.index = counter;
    vm.show.title = showsService[vm.index].title;
    vm.show.year = showsService[vm.index].year;
    vm.show.favorite = showsService[vm.index].favorite;
    vm.show.desc = showsService[vm.index].desc;
    vm.show.image = showsService[vm.index].image;

    console.log(vm.show);
    vm.editShow = function() {
      showsService[vm.index].title = vm.show.title;
      showsService[vm.index].year = vm.show.year;
      showsService[vm.index].favorite = vm.show.favorite;
      showsService[vm.index].desc = vm.show.desc;
      showsService[vm.index].image = vm.show.image;

    $location.url('/');
  };
  })

.controller('DetailsContrller', function($location,$routeParams,showsService){

    var vm = this;
    vm.shows = showsService;
    console.log(vm.shows);
    vm.title = $routeParams.title;
    var counter;
    for(counter = 0; counter < vm.shows.length; counter++){
      if(vm.title === vm.shows[counter].title){
        break;
      }
    }
    vm.index = counter;
    //console.log(vm.shows[vm.index].reviews[0].stars);
    vm.title = vm.shows[vm.index].title;
    vm.img = vm.shows[vm.index].image;
    vm.desc = vm.shows[vm.index].desc;

    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };

    vm.review = {};
    vm.addReview = function(){
      vm.shows[vm.index].reviews.push(vm.review);
    };
    vm.edit = function(){
      console.log("in edit");
      showsService[vm.index].cast.exproducers = vm.shows[vm.index].cast.exproducers;
      showsService[vm.index].cast.producers = vm.shows[vm.index].cast.producers;
      showsService[vm.index].editor = vm.shows[vm.index].cast.editor;
      showsService[vm.index].cinematography = vm.shows[vm.index].cast.cinematography;
    };
});
