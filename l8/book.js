angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listBook=[
        {id:'B01',name:'Python',price:5000},
        {id:'B02',name:'Java',price:3455},
        {id:'B03',name:'C++',price:4205},
        {id:'B04',name:'C programming',price:2000}
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listBook[index].name=$scope.name;
        $scope.listBook[index].price=$scope.price;
        
    }
    $scope.add=function()
    {
        $scope.listBook.push({
            id:$scope.id,name:$scope.name,price:$scope.price
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listBook.length;i++)
        if($scope.listBook[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var course=$scope.listBook[index];
        $scope.id=book.id;
        $scope.name=book.name;
        $scope.price=book.price;
        $scope.hours=book.hours;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listBook.splice(index,1);
        }
    };
});
