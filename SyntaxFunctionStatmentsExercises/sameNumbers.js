function solve(number){
    let stringNumber = String(number);
    let isSam = true;
    let sum = stringNumber.length > 0 ? Number(stringNumber[0]) : 0;

    for (let index = 0; index < stringNumber.length - 1; index++) {
        const element = Number(stringNumber[index]);
        const nextElement = Number(stringNumber[index + 1]);

        if(element !== nextElement){
            isSam = false;
        }
        sum += nextElement;
    }

    console.log(isSam);
    console.log(sum);
}

solve(2222222);