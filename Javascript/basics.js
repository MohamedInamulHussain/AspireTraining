
//dataTypes
	var ratings=4.5;
	console.log(typeof(ratings));
	//array
	var applicationName=['chrome','youtube','docs','maps','Gpay'];
	console.log(typeof(applicationName));
	//json format
	var appRatings={
		'chrome':4.5,
		'youtube':5,
		'docs':3.2,
		'maps':4.1,
		'Gpay':3.5
	};
	console.log(appRatings);

	//date function
	var currrentdate=new Date();
	console.log(currrentdate);

//type conversion
	var ratings=3.5;
	console.log(ratings,typeof(ratings));
	//converting number to string
	ratings=String(ratings);
	console.log(ratings,typeof(ratings));
	//using toString method
	var ratings=3.5;
	console.log(ratings,typeof(ratings));
	//converting number to string
	ratings=ratings.toString();
	console.log(ratings,typeof(ratings));

	//string to number conversion
	var numberOfApps='25';
	numberOfApps=Number(numberOfApps);
	console.log(numberOfApps,typeof(numberOfApps));

	//string to number conversion using parseInt
	var numberOfApps='25';
	numberOfApps=parseInt(numberOfApps);
	console.log(numberOfApps,typeof(numberOfApps));


//type coercion
	let monthlyPlan=999;
	let yearlyPlan='2499';
	console.log(monthlyPlan+yearlyPlan);

	yearlyPlan=Number(yearlyPlan);
	console.log(monthlyPlan+yearlyPlan);

//math functions

	valueOfPI=Math.PI;
	console.log(valueOfPI);

	//round off
	var planDiscount=33.57;
	console.log(Math.round(planDiscount));//output: 34

	//floor
	var planDiscount=33.57;
	console.log(Math.floor(planDiscount));//output:33

	//ceil
	var planDiscount=34.27;
	console.log(Math.ceil(planDiscount));//output:35-- it removes decimal point and give the next nearest value

	//square root
	var planDiscount=34;
	console.log(Math.sqrt(planDiscount));//output:5.8

	//absolute value
	var currentStockValue=-3.23;
	console.log(Math.abs(currentStockValue));//output:3.23

	//power
	console.log(Math.pow(2,4));//output:16

	//max and min

	var maxRatings=Math.max(2.4,5.0,4.6,1.8);
	console.log(maxRatings)

	var minRatings=Math.min(2.4,5.0,4.6,1.8);
	console.log(minRatings);

	//random number 
	var randomNumber=Math.random();
	console.log(randomNumber);

//simple program with random number for otp generation

	var randomNumber=Math.random();
	var otp=Math.floor(randomNumber*10000);
	console.log(otp);

//conditional or ternary operator

	var password=5462;
	var permission=(password==5462)?'permission granted':'access denied';
	console.log(permission);

	//handling null values

	function checkPassword(password){
		const result=(password==5462)?'permission Granted':'no password entered';
		console.log(result);
	}

	checkPassword(null);//if we entered null the output will be "no password entered"
