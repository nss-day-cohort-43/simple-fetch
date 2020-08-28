console.log("it is FRIDAY!");
import {getOfficers} from './OfficerProvider.js';

let officerData = [];

document.querySelector("#getOfficersBtn").addEventListener("click", () => {
	getOfficers()
	.then((responseData) => {
		officerData = responseData;
		console.log(officerData);
	})
})