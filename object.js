var car={
	model:'2017',
	type:'bmw',
	milage:'606k/lit',
	cc:'60',
	typeName :function(){
		return this.milage+''+this.model;
	}
	};
document.write("the car type that i wanted to have is "+car.type);
document.write('<br>')

