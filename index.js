let count = 0;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")



function increment () {

    count += 1; /*count = (count + 1) = 1+ 0 = 1 ---> adding */
    countEl.textContent = count;
    


}

function save () {

   let countStr = count + " - ";
   saveEl.textContent += countStr; //JS syntax mofdify html
   countEl.textContent = 0; //JS syntax modify html
   count = 0; //JS remember the count set to 0

   

   
}
//

