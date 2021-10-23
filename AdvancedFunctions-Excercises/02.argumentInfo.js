function solve(...args){
    let result = [];
    for (let index = 0; index < args.length; index++) {
        let argument = args[index];
        let type = typeof argument;

        console.log(type + ": " + argument);
        if(!result[type]){
            result[type] = 1;
        }else{
            result[type]++;
        }
    }
    
   let sortedResult = [];

   for (let key in result) {
       sortedResult.push([key, result[key]]);
   }
   sortedResult.sort(function(a,b) {
        return b[1] - a[1]
   });

   for (let current of sortedResult) {
       console.log(current[0] + " = " + current[1]);
   }
}
solve('cat', 42, function () { console.log('Hello world!'); });