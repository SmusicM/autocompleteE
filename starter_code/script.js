const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) { //accepts a string
	let results = [];  //empty results
     fruit.forEach(function(fruits){     //reads through each fruit string in array
		if(fruits.toLowerCase().includes(str.toLowerCase())){ //turns fruits to lowercase and compares to inputed string//fruits is the str being iterated over by for each
			results.push(fruits); //if so push those fruits or fruit from str
		}
	 });
	return results; //return new results
}

//function searchHandler(e) {
//	//showSuggestions(search(e.tagret.value), e.tagret.value); //gets inputed value//search is called to search this input and compare it to 
//	const inputedFruit = e.target.value; //inputed fruit is the  input by typing on page//basically interacts with the search bar and gathers input from it
//	const fruitResults = search(inputedFruit);
//	  showSuggestions(fruitResults,inputedFruit); //calls showSuggestions function and uses these are parameters to display
//	                                            
//}
function searchHandler(e) {
	const inputedFruit = e.target.value; 
	 if(inputedFruit === ''){ //clears suggestions when input is empty
        clearSearchSugg();
	 }else{
	const fruitResults = search(inputedFruit);
	  showSuggestions(fruitResults,inputedFruit); 
	 }                                         
}






function clearSearchSugg(){//(e)
   suggestions.innerHTML = '';
}





function showSuggestions(results) { //inputVal
  suggestions.innerHTML = (''); //clears suggestions content
   results.forEach(result => {  //for each "results"(the fruits arr inputed by the input(hence results))iterations through each str in the arr//arrow function creates the li for each result
	const listedFruit = document.createElement("li");//created li element for ul aka the drop down search results
	  listedFruit.textContent = result; //the text content of that created li is the result from arrow function
	  suggestions.appendChild(listedFruit); //appends that to the ul for the drop down ul
   });
}

function useSuggestion(e) {
	const selectedFruits = e.target.textContent; //selected fruits = the event target(inputs) text content
	 input.value = selectedFruits; //we use the inputed value to equal the text content of that value so we can acsess it
     suggestions.innerHTML = ('');//clears drop down // takes down after there is no value in the input to match
}

input.addEventListener('keyup', searchHandler); //listens for a key to be pressed
suggestions.addEventListener('click', useSuggestion); //listens for a click on suggestions and if clicked triggers useSuggestion