/*var car =function(name){
	console.log('hrllo to you car  '+name)

}
var mu=car("areeg");*/
var Car=(function(){

function Car(name,age) {
	this.name=name;
	this.age=age;
	
}
Car.prototype.getInfo=function (){
	console.log("name"+this.name+"age"+this.age);

};

return Car;
}());

var c= new Car("areeg","32");
c.getInfo();
var c1= new Car("fahad","66");
c1.getInfo();
console.log(c1.name);