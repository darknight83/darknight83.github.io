$(document).ready(function(){
	var ctx = $("#mycanvas").get(0).getContext("2d");

	var data = [
		{
			value: 1422171.36 ,
			color: "cornflowerblue",
			highlight: "lightskyblue",
			label: "Employee Pretax"
		},
		{
			value: 407223.43,
			color: "lightgreen",
			highlight: "yellowgreen",
			label: "Rollover"
		},
		{
			value: 83769.15 ,
			color: "orange",
			highlight: "darkorange",
			label: "Roth 401(k)"
		},
		{
			value: 72300.62,
			color: "pink",
			highlight: "darkorange",
			label: "Roth Rollover"
		},
		{
			value: 81550.84,
			color: "yellow",
			highlight: "darkorange",
			label: "Employee Catchup - Pretax"
		},
		{
			value: 62940.80,
			color: "lavender",
			highlight: "darkorange",
			label: "Loan Balance"
		},
		{
			value: 84000.81,
			color: "aqua",
			highlight: "darkorange",
			label: "Employee Non-Elective Forfeiture"
		}
	];
	var chart = new Chart(ctx).Doughnut(data);
});

	 
	 
	 
	  
	 
