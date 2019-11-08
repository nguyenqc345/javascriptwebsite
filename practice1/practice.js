cs.innerHTML = "Changed";

cs.innerHTML = "<p>Now a paragraph</p>";

cs.append("New") 
    // works like a push

let x = 0;

setInterval(() =>{
    empty.innterHTML = x +"seconds";
    x++;
    if (x > 5) {
        cs.innterHTML = "Done Counting"
    } else {
        cs.innterHTML = "Not Done Counting"
    }
}, 2000);

let list = [1,2,3];

// 
// console.log("Script loaded");
    // console.log(cs);
    // use to check for errors