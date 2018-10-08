const tab2D = [
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]

const secondArray = [
    ["kiwi", "orange"],
    ["fraise", "ananas", "pruneaux"]
]

function myFunction (shoppingList) {
    let tabRetour = [];
    for(let i=0;i<shoppingList.length;i++){
        for(let j=0;j<shoppingList[i].length;j++) {
            tabRetour.push(shoppingList[i][j]);
        }
    }
    return tabRetour;
}

console.log(myFunction (tab2D));
console.log(myFunction (secondArray));