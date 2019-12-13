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
