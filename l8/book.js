angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listProduct=[
        {id:'P01',name:'Skirt',price:5000,piece:72},
        {id:'P02',name:'Swearer',price:3455,piece:48},
        {id:'P03',name:'Shirt',price:4205,piece:36},
        {id:'P04',name:'Jeans',price:2000,piece:24}
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listProduct[index].name=$scope.name;
        $scope.listProduct[index].price=$scope.price;
        $scope.listProduct[index].piece=$scope.piece;
    }
    $scope.add=function()
    {
        $scope.listProduct.push({
            id:$scope.id,name:$scope.name,price:$scope.price,piece:$scope.piece
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listProduct.length;i++)
        if($scope.listProduct[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var product=$scope.listProduct[index];
        $scope.id=product.id;
        $scope.name=product.name;
        $scope.price=product.price;
        $scope.piece=product.piece;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listProduct.splice(index,1);
        }
    };
});