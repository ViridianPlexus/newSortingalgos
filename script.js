// const {Bubble} = require("../bubbleSort_visualization/BubbleSort.js"); //common js format
import bubbly from "./BubbleSort.js";


//to do list
// refactor and organize code


// import {default as User, sayHi}
const button1 = document.querySelector('.btn_bubblesort')
const button2 = document.querySelector('.btn_Heapsort')
const button3 = document.querySelector('.btn_Introsort')
const button4 = document.querySelector('.btn_MergeSort')
const button5 = document.querySelector('.btn_TreeSort')
const button6 = document.querySelector('.btn_BlockSort')
const button7 = document.querySelector('.btn_Smoothsort')
const button8 = document.querySelector('.btn_Timsort')
const button9 = document.querySelector('.btn_PatienceSorting')
const button10 = document.querySelector('.btn_Cubesort')
const n =40; //number of digits created
const array = [];//holder for random digits created
button1.addEventListener("click", ()=>{    
    init('BubbleSort')
});
button2.addEventListener("click", ()=>{    
    init('Heapsort')
});
button3.addEventListener("click", ()=>{    
    console.log("button clicked");
});
button4.addEventListener("click", ()=>{    
    console.log("button clicked");
});
button5.addEventListener("click", ()=>{    
    console.log("button clicked");
});
button6.addEventListener("click", ()=>{    
    console.log("button clicked");
});
button7.addEventListener("click", ()=>{    
    console.log("button clicked");
});
button8.addEventListener("click", ()=>{    
    console.log("button clicked");
});
button9.addEventListener("click", ()=>{    
    console.log("button clicked");
});
button10.addEventListener("click", ()=>{    
    console.log("button clicked");
});
function init(choice){
    console.log(choice)
    console.log('made it here')
    //random numbers between 0 and 1 generated and stored in the array.
    for(let i=0
        ; i<n; i++){
        array[i]=Math.random(); 
    }
if(choice === 'Heapsort'){
// console.log('Heapsort')
play()
}else if(choice ==='Introsort'){
// console.log('Introsort')
play()
}else if(choice ==='MergeSort')
    {
// console.log('MergeSort')
play()
}else if(choice ==='TreeSort')
    {
// console.log('TreeSort')
play()
}else if(choice ==='BlockSort')
    {
// console.log('BlockSort')
play()
}else if(choice ==='Smoothsort')
    {
// console.log('Smoothsort')
play()
}else if(choice ==='Timsort')
    {
// console.log('Timsort')
play()
}else if(choice ==='PatienceSorting')
    {
// console.log('PatienceSorting')
play()
}else if(choice ==='Cubesort')
    {
// console.log('Cubesort')
play()
}else if(choice ==='BubbleSort')
    {   
console.log('BubbleSort chosen')
// console.log(array)
const copy = [...array];
// console.log(copy)
let sorter = new bubbly(copy);
console.log(sorter.unsorted)
//    sorter.sort  
//create a new div space and send that info to animate 
   let swapz = sorter.sort();  
    console.log('swaps: ' + swapz )
    animate(swapz);
}
// showbars();
}
// refactor this code so that the bubble sort is called when its clicked
// put all the code associated with each algorithm in its own class
// review app academy notes for class creation and importation
function animate(swaps){
    if(swaps.length ===0) //This checks if there are no more swaps left to animate. If the swaps array is empty, it means the sorting is complete.
        {
            showbars(); //is called to display the final sorted state of the array.
            return;
        }
       const [i,j] = swaps.shift(); // swaps.shift()  removes and returns the first pair of indices from the swaps array.
       //const [i, j] destructures this pair into i and j, which are the indices of the elements to be swapped.
      [ array[i],array[j]] = [array[j],array[i]];
      /*
        Initial State:
        Suppose swaps initially contains [[2, 3], [4, 5]].
        swaps.shift() removes and returns [2, 3].
        Destructuring:

        After const [i, j] = [2, 3];, i is 2 and j is 3.
        Performing the Swap:

        The line [array[i], array[j]] = [array[j], array[i]] effectively translates to [array[2], array[3]] = [array[3], array[2]].
        This means the values at indices 2 and 3 in the array are swapped.
      */
        showbars([i,j]);
        setTimeout(function(){
            animate(swaps);
        }, 5)
    }
function showbars(indicies){
container.innerHTML =  ""; //This line clears all existing content inside the container element. This ensures that any previously displayed bars are removed before new ones are created.
//for each element in the array we create a bar
for(let i = 0; i< array.length; i++){ //This for loop iterates over each index of the array. It runs from i = 0 to i < array.length, creating a bar for each element in the array.
    const bar = document.createElement("div");
    //Creates a new div element which will represent a single bar.    
    bar.style.height=array[i]*100 + "%"; //Sets the height of the bar. The value array[i] is expected to be a number between 0 and 1 representing a proportion of the container's height. Multiplying by 100 and appending "%" converts this proportion into a percentage height.
    bar.classList.add("bar"); //applies bar attributes from the style.css bar class
    if(indicies && indicies.includes(i)){
        //recall that for every showbars call, we are ereasing and recreating the entire bar 
        //for every showbars call, we are ereasing and recreating the entire chart in the container element, and during the for loop of creation if we create a bar that is the same bar mentioned in the passed index we turn it green. 
        bar.style.backgroundColor = "green";
    }
    container.appendChild(bar);
}   
}
