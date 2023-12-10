function calc(){
    let arifm = prompt("Введите арифметическую операцию")
    let first = parseInt(prompt("Введите первое число:"))
    let second = parseInt(prompt("Введите второе число:"))
    switch(arifm){
        case '+':
            alert(first+' + '+second+' = '+ (first+second));
            break;
        case '-':
            alert(first+' - '+second+' = '+ (first-second));
            break;
        case '*':
            alert(first+' * '+second+' = '+ (first*second));
            break;
        case '/':
            alert(first+' : '+second+' = '+ (first+second));
            break;
    }

}

calc()