function sumar(){
    let opl = document.getElementById("id1").value; //Con value obtenemos el string
    let op2 = document.getElementById("id2").value;

    let valor =  parseInt(opl) + parseInt(op2);
    
    document.getElementById("rpta").innerHTML = valor;
}

function restar(){
    let opl = document.getElementById("id1").value; //Con value obtenemos el string
    let op2 = document.getElementById("id2").value;

    let valor =  parseInt(opl) - parseInt(op2);
    
    document.getElementById("rpta").innerHTML = valor;
}

function multiplicar(){
    let opl = document.getElementById("id1").value; //Con value obtenemos el string
    let op2 = document.getElementById("id2").value;

    let valor =  parseInt(opl) * parseInt(op2);
    
    if(op2 == 0){
        valor = 0;    
    }

    document.getElementById("rpta").innerHTML = valor;
}

function dividir(){
    let opl = document.getElementById("id1").value; //Con value obtenemos el string
    let op2 = document.getElementById("id2").value;

    let valor =  parseInt(opl) / parseInt(op2);

    if(op2 == 0){
    valor = 'No se puede dividir entre 0';    
    }
    
    document.getElementById("rpta").innerHTML = valor;
}