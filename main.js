var Readable = require("stream").Readable;  
var util = require("util");  
util.inherits(MyStream, Readable);  
function MyStream(opt) {  
  Readable.call(this, opt);
}
MyStream.prototype._read = function() {};  
// hook in our stream
process.__defineGetter__("stdin", function() {  
  if (process.__stdin) return process.__stdin;
  process.__stdin = new MyStream();
  return process.__stdin;
});

var five = require("johnny-five");
var board = new five.Board({
	repl: false
});

var valueDiv1 = document.querySelector("#moisture");
var valueDiv2 = document.querySelector("#photo");
var valueDiv3 = document.querySelector("#temp");
// var ctx = document.getElementById('myChart').getContext('2d');

board.on("ready", function(){
	var temperature = new five.Thermometer({
		controller: "LM35",
		pin: "A2",
		freq: 5000
	});

	temperature.on("change", function(){
		// var temp = this.celsius;
		// valueDiv3.innerHTML = temp;
		let ctx = document.getElementById('myChart1').getContext('2d');
		let labels = ['Temperature'];
		let colorHex = ['#EBC74B'];
		var per = (100 * this.celsius) / 50;
		tem.innerHTML = per + "%";
		let myChart = new Chart(ctx, 
		{

  			type: 'doughnut',
  			data: 
  			{
    			datasets: [{
      				data: [this.celsius,50-this.celsius],
      				backgroundColor: colorHex
    			}],
    			labels: labels
  			},
  			options: 
  			{
    			// responsive: true,
    			legend: {
     	 			// position: 'bottom'
    		}
  		}


	})
		if(per > 50)
  		{
  			tempAlert.innerHTML = "Temperature is really high";
  		}
  		else
  		{
  			tempAlert.innerHTML = "Temperature is Perfect";
  		}
			

		// 
});

var photoresistor = new five.Sensor({
		pin : "A0",
		freq: 5000
	});

	photoresistor.on("change",function(){
		// var photo = this.value;
		// valueDiv2.innerHTML = photo;
		let ctx = document.getElementById('myChart2').getContext('2d');
		let labels = ['Light'];
		let colorHex = ['#F19564'];
		var per = 100 * (1023 - this.value) / 1023;
		phot.innerHTML = Math.round(per) + "%";
		let myChart = new Chart(ctx, 
		{
  			type: 'doughnut',
  			data: 
  			{
    			datasets: [{
      				data: [1023-this.value,this.value],
      				backgroundColor: colorHex
    			}],
    			labels: labels
  			},
  			options: 
  			{
    			responsive: true,
    			legend: {
     	 			// position: 'bottom'
    		}
  		}
	})
		if(per <= 25)
  		{
  			photoAlert.innerHTML = "Light is Low";
  		}
  		else if(per > 25 && per <= 75)
  		{
  			photoAlert.innerHTML = "Light is Adequate";
  		}
  		else
  		{
  			photoAlert.innerHTML = "Too much Light";
  		}
	});
	var moistureSensor = new five.Sensor({
		pin: "A1",
		freq: 5000,
		threshold: 2
	});

	moistureSensor.on("change", function(){
		// var moisture = this.value;
		// valueDiv1.innerHTML = moisture;
		let ctx = document.getElementById('myChart3').getContext('2d');
		let labels = ['Moisture'];
		let colorHex = ['#A3DC63'];
		var per = 100 * (681 - this.value) / 681;
		moist.innerHTML = Math.round(per) + "%";
		let myChart = new Chart(ctx, 
		{
  			type: 'doughnut',
  			data: 
  			{
    			datasets: [{
      				data: [680-this.value,this.value],
      				backgroundColor: colorHex
    			}],
    			labels: labels
  			},
  			options: 
  			{
    			responsive: true,
  			}	

		})
		if(per <= 25)
  		{
  			moistAlert.innerHTML = "Too Dry";
  		}
  		else if(per > 25 && per <= 75)
  		{
  			moistAlert.innerHTML = "Perfect Moisture";
  		}
  		else
  		{
  			moistAlert.innerHTML = "Too Light";
  		}
	});
});
