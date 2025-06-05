//Pseudocode Document: https://docs.google.com/document/d/1jaVyYnhtGAUPq6emMl0STMwM3KvtLBfle2qlzsuhExo/edit?tab=t.hz1xjb34kx6u

const horoscopeData = {
	horoscopes: {
		date: "2023-11-30",
		astroSigns: [
			{
				sign: "Aries",
				dateRange: "March 21 - April 19",
				dailyHoroscope:
					"Today is a day for bold actions. Trust your instincts and take the leap you've been considering.",
				luckyNumbers: [3, 17, 21],
				key: 0,
				icon: "https://openmoji.org/data/color/svg/2648.svg"
			},
			{
				sign: "Taurus",
				dateRange: "April 20 - May 20",
				dailyHoroscope:
					"Patience will be your ally today. Good things come to those who wait, so don't rush into decisions.",
				luckyNumbers: [5, 14, 29],
				key: 1,
				icon: "https://openmoji.org/data/color/svg/2649.svg"
			},
			{
				sign: "Gemini",
				dateRange: "May 21 - June 20",
				dailyHoroscope:
					"Communication is key today. Reach out to an old friend or a family member you haven't spoken to in a while.",
				luckyNumbers: [2, 16, 23],
				key: 2,
				icon: "https://openmoji.org/data/color/svg/264A.svg"
			},
			{
				sign: "Cancer",
				dateRange: "June 21 - July 22",
				dailyHoroscope:
					"Embrace your creative side. Today is a perfect day for starting a new artistic project.",
				luckyNumbers: [7, 19, 25],
				key: 3,
				icon: "https://openmoji.org/data/color/svg/264B.svg"
			},
			{
				sign: "Leo",
				dateRange: "July 23 - August 22",
				dailyHoroscope:
					"Your leadership skills will be in demand today. Take charge in a group situation and guide others to success.",
				luckyNumbers: [1, 8, 22],
				key: 4,
				icon: "https://openmoji.org/data/color/svg/264C.svg"
			},
			{
				sign: "Virgo",
				dateRange: "August 23 - September 22",
				dailyHoroscope:
					"Pay attention to the small details today. Your meticulousness will lead to a significant breakthrough.",
				luckyNumbers: [4, 11, 26],
				key: 5,
				icon: "https://openmoji.org/data/color/svg/264D.svg"
			},
			{
				sign: "Libra",
				dateRange: "September 23 - October 22",
				dailyHoroscope:
					"Seek balance in your life. Take time for yourself and focus on your personal well-being.",
				luckyNumbers: [6, 15, 24],
				key: 6,
				icon: "https://openmoji.org/data/color/svg/264E.svg"
			},
			{
				sign: "Scorpio",
				dateRange: "October 23 - November 21",
				dailyHoroscope:
					"A mystery may unfold today. Trust your intuition and follow where it leads.",
				luckyNumbers: [9, 18, 27],
				key: 7,
				icon: "https://openmoji.org/data/color/svg/264F.svg"
			},
			{
				sign: "Sagittarius",
				dateRange: "November 22 - December 21",
				dailyHoroscope:
					"Adventure calls to you. Embrace new experiences and open yourself to learning.",
				luckyNumbers: [3, 12, 21],
				key: 8,
				icon: "https://openmoji.org/data/color/svg/2650.svg"
			},
			{
				sign: "Capricorn",
				dateRange: "December 22 - January 19",
				dailyHoroscope:
					"Discipline and hard work will be fruitful. Focus on your goals and you'll achieve great things.",
				luckyNumbers: [8, 16, 23],
				key: 9,
				icon: "https://openmoji.org/data/color/svg/2651.svg"
			},
			{
				sign: "Aquarius",
				dateRange: "January 20 - February 18",
				dailyHoroscope:
					"Innovation is your theme today. Think outside the box and explore new ideas.",
				luckyNumbers: [5, 13, 20],
				key: 10,
				icon: "https://openmoji.org/data/color/svg/2652.svg"
			},
			{
				sign: "Pisces",
				dateRange: "February 19 - March 20",
				dailyHoroscope:
					"Your empathy will be a blessing to someone in need. Listen and offer your support.",
				luckyNumbers: [2, 10, 22],
				key: 11,
				icon: "https://openmoji.org/data/color/svg/2653.svg"
			}
		]
	}
};

//Create a variable named 'form' to save the form element in it
const form = document.querySelector("#zodiac-form");
// Print on console to confirm we have the HTML form element in the form variable
console.log(form);
//Add event listener to the form in the event of user clicking "submit"& call function onFormSubmit() when submit button is clicked i.e. form is submit
form.addEventListener("submit", onFormSubmit);

//This is the function definition of onFormSubmit()
function onFormSubmit() {
	//prevent the page from refreshing, allowing you to handle and process the form without causing the entire page to reload
	event.preventDefault();
	//construct a FormData object, which fires the formdata event and save it in a variable named 'data'
	const data = new FormData(event.target);
	//Use the boilerplate code to create your data object
	const dataObject = Object.fromEntries(data.entries());
	//print dataObject on console
	console.log("data object: ", dataObject);
	//Get User's sign from the dataObject using dot notation & save it in a variable named 'userSign'
	const userSign = dataObject.sign;
	console.log("User Sign: ", userSign);
	//call dynamic function findSignInfo() and pass the parameter 'userSign'
	let mixArray = findSignInfo(userSign);
	//call dynamic function showCard() and pass the parameter mixArray
	showCard(mixArray);
	form.reset(); //reset form
}

//This is the function definition of the dynamic function findSignInfo()
function findSignInfo(sign) {
	//Save the array of objects astroSigns from the object horoscopes which is a key of the main object horoscopeData in a variable named "signs"
	let signs = horoscopeData.horoscopes.astroSigns;
	//Create a variable named 'mixedArray' to save the data
	let mixedArray = [];
	//Set the length of 'mixedArray' to 4 using the length property
	mixedArray.length = 4;
	//Use a for of loop to iterate through the array of objects "signs"
	for (let info of signs) {
		//Use if condition statment to find the match for user sign in the "signs"
		if (info.sign.toLowerCase() === sign) {
			//Once match is found, save the relevant data in mixedArray using dot notation from 'info'
			//Save the key value of 'sign' at index 0 of mixedArray
			mixedArray[0] = info.sign;
			//Save the key value of 'icon' at index 1 of mixedArray using dot notation from 'info'
			mixedArray[1] = info.icon;
			//Save the key value of 'dateRange' at index 2 of mixedArray using dot notation from 'info'
			mixedArray[2] = info.dateRange;
			//Save the key value of 'dailyHoroscope' at index 2 of mixedArray using dot notation from 'info
			mixedArray[3] = info.dailyHoroscope;
		} //End of if condition
	} //End of of for loop
	//return mixed array
	return mixedArray;
}

//This is the function definition of the dynamic function showCard()
function showCard(mixArray) {
	//Get the div element in HTML with class 'card' & save it in a variable named 'cardDiv'
	const cardDiv = document.querySelector(".card");
	//Remove the class "display-none"
	cardDiv.classList.remove("display-none");
	//Get the img from card div with class "sign-icon" and save it in a variable named 'icon'
	let icon = document.querySelector(".sign-icon");
	//Set icon src to the element at index 1 in mixArray which is the source string
	icon.src = mixArray[1];
	//Set width of icon to 100px
	icon.style.width = "100px";
	// Create a variable named 'message1' and assign it  a template literal with the element at index 0 in mixArray
	let message1 = `Your sign is ${mixArray[0]}`;
	//Create a variable named p1 using the p element with class "p1" from HTML
	let p1 = document.querySelector(".p1");
	//Set text content of p1 to message1
	p1.textContent = message1;
	//Create a variable named p2 using the p element with class "p2" from HTML
	let p2 = document.querySelector(".p2");
	//Set text content of p2 to message2
	// Create a variable named 'message2' and assign it  a template literal with the element at indices 0 and 2 in mixArray (user's zodiac sign and date range)
	let message2 = `The date range for ${mixArray[0]} is ${mixArray[2]}.`;
	//Set text content of p2 to message2
	p2.textContent = message2;
	//Create a variable named p3 using the p element with class "p3" from HTML
	let p3 = document.querySelector(".p3");
	// Create a variable named 'message3' and assign it  a template literal with the element at index 3 in mixArray (user's horoscope)
	let message3 = `Your horoscope today is ${mixArray[3]}`;
	//Set text content of p3 to message3
	p3.textContent = message3;
}
