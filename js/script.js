let elmArr = document.querySelectorAll("LI");

const classArr = ["order-1", "order-2", "order-3", "order-4", "order-5", "order-6", "order-7", "order-8", "order-9", ];

const sortBtn = document.getElementById("btn-sort");
const shuffleBtn = document.getElementById("btn-shuffle");

function sortElements() {
    const sortedClassArray = [...classArr];
    writeClasses(elmArr, sortedClassArray);
}

function shuffle(array) {
    array.forEach((element, index, array) => {
        let j = Math.floor(Math.random() * (index + 1));
        [array[index], array[j]] = [array[j], array[index]];      
    });
    return array;
}

function shuffleElements() {
    const shuffledClassArray = [...classArr];
    shuffle(shuffledClassArray);
    writeClasses(elmArr, shuffledClassArray);
}

function writeClasses(elements, classes){
    elements.forEach(element => {
        element.className = "";
        element.classList.add(classes.shift())
  });
}

sortBtn.onclick = function() {
    sortElements();
};
  
shuffleBtn.onclick = function() {
    shuffleElements();
};
