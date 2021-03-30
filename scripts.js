function dateshow() {
	var c = new Date();
	/* document.getElementById("demo1").innerHTML = cm; */
	var d = new Date();
	d.setDate(25);
	d.setMonth(11); 
	/*document.getElementById("demo2").innerHTML = d; */
	var dif = d.getTime() - c.getTime();
	var daydif = dif / (1000 * 3600 * 24);
	var fincount = Math.round(daydif);
	document.write("There are " + fincount + " days until Christmas!");
}
	