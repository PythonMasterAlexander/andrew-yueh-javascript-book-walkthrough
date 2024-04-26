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

export default function outputChapterThreePageHtml() {
  //How to get a selector from another page than the main index.html page
  //const chapterThreeContainer = document.querySelector('#chapter-3-main-container');
  //console.log(chapterThreeContainer);
  // Create html to output, use the code and pre html elements to get code like output
}
