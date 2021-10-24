function solve(num, op1, op2, op3, op4, op5){

    function apllyoperation(num, op){
        switch(op){
            case 'chop':{
                num /= 2;
                break;
            }
            case 'dice':{
                num = Math.sqrt(num);
                break;
            }
            case 'spice':{
                num++;
                break;
            }
            case 'bake':{
                num *=3;
                break;
            }
            case 'fillet':{
                num = num * 0.8;
                break;
            }
        }

        return num;
    }

    

    
    num = apllyoperation(num, op1);
    console.log(apllyoperation(num));
    num = apllyoperation(num, op2);
    console.log(apllyoperation(num));
    num = apllyoperation(num, op3);
    console.log(apllyoperation(num));
    num = apllyoperation(num, op4);
    console.log(apllyoperation(num));
    num = apllyoperation(num, op5);
    console.log(apllyoperation(num));
   
}
//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');