function taskOne() {
  /* Task 1
	 let num = 0
	 num = num++;
	 console.log(num); */
  let num = 0
  num++
  console.log(num)
}

function taskTwo() {
  /* Task 2
	 let num1 = 10;
	 let num2 = '2';
	 console.log(num1 + numb2); */
  let num1 = 10
  let num2 = 2
  console.log(num1 + num2)
}

function taskThree() {
  /* Task 3 Trying to access you dog name Max by using the key pug
	 Undefined
	 let dogs = {
		 pug: 'Max',
		 terrier: 'Appa'
		};
	 let myDog = 'pug';
	 console.log(dogs.myDog); */

  // Accessing from a variable must use bracket notation
  let dogs = {
    pug: 'Max',
    terrier: 'Appa',
  }
  let myDog = 'pug'
  console.log(dogs[myDog])
}

function taskFour() {
  /* An attempt to access the last entry in the array is outputting undefined
	let meanPeople = ['Layna', 'Layna again', 'Layna one more time'];
	console.log(meanPeople[3]): */

  // Indexing in an array starts from 0
  let meanPeople = ['Layna', 'Layna again', 'Layna one more time']
  console.log(meanPeople[2])
}

function taskFive() {
  /* A fatal runtime error is occuring when trying to print the string
	console.log('Layna's favorite hobby is being mean to Andrew'); */

  // Wrapping text in a quote indicates a string, you need to escape the quote inside with a backslash operator
  console.log("Layna's favorite hobby is being mean to Andrew")
}

export default function outputChapterThreePageHtml() {
  //How to get a selector from another page than the main index.html page
  //const chapterThreeQuestionsListContainer = document.querySelector('#chapter-three-question-list-container');
  //console.log(chapterThreeQuestionsListContainer);
  // Create html to output, use the code and pre html elements to get code like output on the page
}
