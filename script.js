const sumar = () => {
  
    let num = document.getElementById("numeros").value;
    //console.log(num);
    
    num = num.split(",");
    //console.log(num);
    let suma = 0;

    let datos = num.length;
    console.log(`Número de datos: ${datos}`);

    if (datos <= 1000){
        for (let i=0; i < num.length; i++){
    
            suma += parseInt(num[i]);
      } 
      console.log( `Total de la suma: ${suma}`);
    }else{
        console.log ("Los datos deben ser menor a 1000 para realizar la operación.")
    }
    

}