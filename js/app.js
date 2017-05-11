(function(){
    'strict mode';
    angular.module('LunchCheck',[])
        .controller('LunchCheckController',myController);
    
    myController.$inject=['$scope'];
    
    function myController($scope){
        $scope.myArray="";
        $scope.messageStyle="";
        
        $scope.checkFood=function(){
            if($scope.myArray==""){$scope.myMessage="Please enter data first";$scope.messageStyle="color:red";} else {
                var arr=$scope.myArray.split(",");
                var message="";
                var checkIfEmpty=0;
                

                for(var i=0;i<arr.length;i++){
                    console.log("item "+i+":"+arr[i]);
                    if(arr[i]==""){checkIfEmpty+=1;}
                }
                
                if(arr.length-checkIfEmpty<=3){
                    $scope.myMessage="Enjoy!";
                    $scope.messageStyle="color:green";
                }else{
                    $scope.myMessage="Too much!"
                    $scope.messageStyle="color:red";
                }
            }
        }
    }
    
})();