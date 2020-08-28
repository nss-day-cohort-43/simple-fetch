

export const getOfficers = () => {
	return fetch("https://criminals.glassdale.us/officers/")
	.then(response => response.json())
}