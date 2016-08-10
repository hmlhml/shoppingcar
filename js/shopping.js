var goods=[
		{name:"奥利奥",price:12,src:"images/aoliao.jpg"},
		{name:"饼干",price:5,src:"images/binggan.jpg"},
		{name:"果冻",price:15,src:"images/guodong.jpg"},
		{name:"米老头",price:20,src:"images/milaotou.jpg"},
		{name:"曲奇",price:8,src:"images/quqi.jpg"},
		{name:"瑞士卷",price:6,src:"images/ruishi.jpg"},
		{name:"糖果",price:10,src:"images/tangguo.jpg"},
		{name:"玉米片",price:9,src:"images/yumi.jpg"},
	];
	var app=angular.module("app",[]);
	app.controller("shop",function($scope){
		$scope.goods=goods;
		$scope.buy=[];
		$scope.buyBtn=function(i){
			var b=$scope.buy;
			var flag=true;
			if(b.length>0){
				angular.forEach(b,function(obj,j){
					if($scope.goods[i].name==obj.name){
						obj.num++;
						flag=false;
					}
				})
			}
			if(!flag){
				return;
			}
			var o={};
			o.name=$scope.goods[i].name;
			o.price=$scope.goods[i].price;
			o.src=$scope.goods[i].src;
			o.num=1;
			$scope.buy.push(o);
		}
		$scope.add=function(name){
			angular.forEach($scope.buy,function(obj,i){
				if(obj.name==name){
					obj.num++;
					// return;
				}
			})
		}
		$scope.jian=function(i){
			$scope.buy[i].num--;
			if($scope.buy[i].num<=0){
				var dialog=confirm("是否删除该商品");
				if(dialog){
					$scope.buy.splice(i,1);
				}else{
					$scope.buy[i].num=0;
				}
			}
		}
		$scope.sum=function(){
			var z=0;
			angular.forEach($scope.buy,function(obj,i){
				z+=obj.num*obj.price;
			})
			return z;
		}
		$scope.del=function(name){
			angular.forEach($scope.buy,function(obj,j){
				if(obj.name==name){
					$scope.buy.splice(j,1);
				}
			})
			
		}
		$scope.or=false;
		$scope.order=function(key){
			$scope.or=!$scope.or;
			$scope.k=key;
		}
		$scope.$watch("buy",function(newVal,oldVal){
			for(var i=0;i<newVal.length;i++){
				$scope.buy[i].jiage=$scope.buy[i].price*$scope.buy[i].num;
			}
			
		},true)


	})