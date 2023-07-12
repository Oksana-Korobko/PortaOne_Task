const textInput = document.querySelector('.text');
const button = document.querySelector('.solveButton');
button.addEventListener('click', solve);

function solve(){
    const text = textInput.value;
    if (text ==='') return; 
    const words = text.split(' ');
    const symbols = [];
    words.forEach( word => {
        let arrWord = word.split('');
        symbols.push(finder(arrWord));
    })
    result = finder(symbols);
    
    if (result) {
        document.querySelector('#symbol').textContent = result;
    } else {
        document.querySelector('#symbol').textContent = "Таких символів нема";
    } 
    
    console.log(result)
}

function finder(wordElem) {
    for ( let i = 0; i<wordElem.length; i++){
        if (wordElem.indexOf(wordElem[i])===wordElem.lastIndexOf(wordElem[i])){
            return(wordElem[i]);
        }
    }
}


