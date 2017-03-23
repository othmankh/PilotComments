(function(app) {

  var tempVar = {};

  var newValue = {};

  var tempValue  = 0;

  var index = -1;

  var staticArray = [];

  var searchArray = [];

  app.controller('CommentsController', ['$rootScope', '$scope', '$http', '$q','$mdDialog','$interval', function($rootScope, $scope, $http, $q, $mdDialog, $interval) {

  var vm = this;

  var self = this;

  $scope.comments = [];

  this.Action = 'Add';

  $scope.searchType = false;

  $scope.searchText = "";

  $scope.getComments = function()
  {

     var deffered =$q.defer();

       $http.get("https://jsonplaceholder.typicode.com/comments").then(function(data)
       {
          $scope.comments = data.data; 
          staticArray = data.data;
       },

      function(error){
      });

      return deffered.promise;
    }


    $scope.getComments();


    this.Delete = function (i) {
      var index = $scope.comments.indexOf(i);
      $scope.comments.splice(index, 1);
      staticArray = $scope.comments;
    };

    this.Search = function (dd) {

      $scope.comments = staticArray;

      if(dd)
      {
        searchArray = [];
        $scope.comments.map(function(obj){ 
        var str = obj.email;
          if (str.indexOf($scope.searchText) >= 0) 
          {         
            index = staticArray.indexOf(obj);
            var comment = staticArray[index];
            searchArray.push(comment);
        }   
      });  
      }

      else
      {
        searchArray = [];
        $scope.comments.map(function(obj){ 
          if (obj.id == $scope.searchText) 
          {
            index = staticArray.indexOf(obj);
            var comment = staticArray[index];
            searchArray.push(comment);
/*            staticArray.splice(index, 1); */
          }   
      });     
     }

      $scope.searchText = "";
      $scope.comments = searchArray;
  };

    this.cancel = function() {
      $mdDialog.cancel();
    };

    this.DialogTitle = 'Add';

    this.Action = 'Add';

  this.AddComment = function(ev) {
    this.DialogTitle = 'Add';
    this.Action = 'Add';
    this.dialog = {};
    $mdDialog.show({
    controller: function () {
        return self;
    },
      controllerAs: 'ctrl',
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {

    });
  };


  this.onChange = function(searchType)
  {
    $scope.searchType = searchType;
  }

    this.hide = function() {
      $mdDialog.hide();
    };

    this.cancel = function() {
      $mdDialog.cancel();
    };

    this.answer = function(answer) {
      if(answer == 'Edit')
      {
        $mdDialog.hide(answer);
        newValue = this.dialog;
        var index = $scope.comments.indexOf(tempVar);
        $scope.comments[index] = newValue;

        staticArray = $scope.comments;
      }

      else if(answer == 'Add')
      {
        var maxid = 0;
     $scope.comments.map(function(obj){     
        if (obj.id > maxid) maxid = obj.id;    
    });
     maxid ++;
        this.dialog.id = maxid;
        $mdDialog.hide(answer);
        $scope.comments.push(this.dialog);
        staticArray = $scope.comments;
        this.dialog = {};
      }
    };

  this.showAdvanced = function(ev, cmt) {
    this.DialogTitle = 'Edit';
    this.Action = 'Edit';
    this.dialog = cmt;
    tempVar = cmt;
    $mdDialog.show({
    controller: function () {
        return self;
    },
      controllerAs: 'ctrl',
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {

    });
  };
}]);
})(Pilot);
