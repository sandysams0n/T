angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var book=[
        {title:'Pilgrim',author:'J.Bunyan',genre:"Male",year:'1995' ,price:499.77},
        {title:'Alchemist',author:'P.Coelho',genre:"Male",year:'2004' ,price:2004},
        {title:'Wanted',author:'A.Lynne',genre:"Female",year:'2017' ,price:470},
        {title:'Stolen',author:'Eric L',genre:"Male",year:'20`19' ,price:399}
    ];
    console.log(book);
    $scope.book=book;
    $scope.rowlimit=4;
});