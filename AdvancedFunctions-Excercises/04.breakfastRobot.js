function solve(){
    const resieps = {
        apple: {protein:0, carbohydrate: 1, fat: 0, flavour: 2},
        lemonade:{protein: 0, carbohydrate:10, fat: 0, flavour:20},
        burger: {protein: 0, carbohydrate:5, fat: 7, flavour:3},
        eggs: {protein: 5,carbohydrate: 0, fat: 1, flavour: 1},
        turkey:{protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    const storage = {
        carbohydrate:0,
        flavour:0,
        fat:0,
        protein:0
    }
    function restock (element, quantity){
        storage[element] += quantity;
        return `Success`;
    }
    function prepare (recipe, quantity){
        const remainingStorage = {};

        for (const element in resieps[recipe]) {
            const remaining = storage[element] - resieps[recipe][element] * quantity;
            if(remaining < 0){
                return `Error: not enough ${element} in stock `
            }else{
                remainingStorage[element] = remaining;
            }
        }

        Object.assign(storage, remainingStorage);
        return `Success`;

    }
    function controller(str){
        const [command, item, quantity] = str.split(" ");

        switch(command){
            case "restock":
                return restock(item, Number(quantity));
            case "prepare":
                return prepare(item, Number(quantity));
                
            case "report":
                return report();
                
        }

        
    }

    return controller;

    function report(){
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour} `;
    }
}
let menager = solve();
console.log(menager("restock flavour 50"));
console.log(menager("prepare lemonade 4"));
console.log(menager("restock carbohydrate 10"));
console.log(menager("restock flavour 10"));
console.log(menager("prepare apple 1"));
console.log(menager("restock fat 10"));
console.log(menager("prepare burger 1"));
console.log(menager("report"));

