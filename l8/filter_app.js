angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var book=[
        {title:'Pilgrim',author:'J.Bunyan',genre:"Male",rate:'4.7',price:499.77},
        {title:'Alchemist',author:'P.Coelho',genre:"Male",rate:'3.9',price:2004},
        {title:'Wanted',author:'A.Lynne',genre:"Female",rate:'3.5',price:470},
        {title:'Stolen',author:'Eric L',genre:"Male",rate:'4.1',price:399}
    ];
    console.log(book);
    $scope.book=book;
    $scope.rowlimit=4;
});