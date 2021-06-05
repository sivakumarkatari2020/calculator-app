//STRING FOR STORING USER ENTERED VALUES
let valueStr = '';

//FUNCTION TO CALCULATE USER ENTERED VALUES
function calculate(e){
    
    //CHECKING THE CKICKED BUTTON
    if(e.target.value == "="){
        
        //IF USER ENTER EQUALS (=) OPERATOR

        //TRY CATCH BLOCK FOR ANY ERRORS IN ENTERED DATA
        try{
            if(eval(valueStr) != undefined){
                equals();
            }else{
                throw 'ERROR!try to enter number after operator';
            }
        }catch(err){
            document.getElementById('display').innerHTML = `<h1 style="padding:0;margin:0;color:red;font-size:16px;">${err}</h1>`;
        }

    }else if(e.target.value == "Del"){

        //TO DELETE THE LAST MOST DIGIT/OPERATOR
        del();

    }else if(e.target.value == "Reset"){

        //RESET THE DISPLAY
        reset();

    }else{

        //TO ENTER DATA INTO DISPLAY
        dataIn(e);

    }

}

//FUNCTION FOR EQUALS
function equals(){

    let sol = eval(valueStr);
    valueStr = String(sol);
    display();

}

//FUNCTION FOR RESET
function reset(){

    valueStr = '';
    display();

}

//FUNCTION FOR DELETE
function del(){

    valueStr = valueStr.substr(0,valueStr.length-1);
    display();

}

//FUNCTION FOR DATA ENTRY
function dataIn(e){

    valueStr = valueStr+e.target.value;
    display();

}

//FUNCTION TO DISPLAY VALUE ON THE SCREEN
function display(){

    if(valueStr.length >= 15){

        document.getElementById('display').innerHTML = `<h1 style="padding:0;margin:0;font-size:30px">${valueStr}</h1>`;

    }else if(valueStr.length >= 24){

        document.getElementById('display').innerHTML = `<h1 style="padding:0;margin:0;font-size:20px">${valueStr}</h1>`;

    }else{
        document.getElementById('display').innerHTML = `<h1 style="padding:0;margin:0;">${valueStr}</h1>`;
    }

}