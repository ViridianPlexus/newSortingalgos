export default class Heapsort{
    constructor(unsorted){//takes in an array
        this.unsorted = unsorted;
        this.swaps = [];
    }
    sort(){
        // follows bubble sort wiki pseudo code
        do{ 
            var swapped = false; //This variable keeps track of whether any swaps were made during the current pass through the array. If no swaps are made, the array is sorted, and the loop can terminate.
            for(let i =1; i<this.unsorted.length; i++){ //This for loop iterates through the array starting from the second element (i = 1).
                if (this.unsorted[i-1]>this.unsorted[i]){ //This condition checks if the current element (this.unsorted[i]) is smaller than the previous element (this.unsorted[i-1]). If true, the elements need to be swapped.
                    swapped = true; //This line sets swapped to true, indicating that a swap has occurred during this pass.
                    this.swaps.push([i-1, i]); //This line records the indices of the swapped elements by pushing them as a pair ([i-1, i]) into the swaps array.
                    [this.unsorted[i-1], this.unsorted[i]]= [this.unsorted[i], this.unsorted[i-1]]; //using destructing to swap the bars
                }
            }
        }while(swapped);
        return this.swaps;
    }   
} 
// common js format
// module.exports ={

//     BubbleSort,

// };
