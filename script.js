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

//crear un elemento <p> de html
    const result = document.createElement("p");
    const result2 = document.createElement("p");
//crear el texto que ira dentro de la etiueta <p>
const node = document.createTextNode(`Total de la suma: ${suma}`);
const node2 = document.createTextNode(`Número de datos: ${datos}`);
//fusionar el texto con la etiqueta <p>
result.appendChild(node);
result2.appendChild(node2);
 // agregar el elemento <p> al body del html
document.body.appendChild(result);
document.body.appendChild(result2);

    }else{
        console.log ("Los datos deben ser menor a 1000 para realizar la operación.")
        //crear un elemento <p> de html
       const nota = document.createElement("p");
       //crear el texto que ira dentro de la etiueta <p>
       const txnota = document.createTextNode(`Los datos deben ser menor a 1000 para realizar la operación.`);
       //fusionar el texto con la etiqueta <p>
       nota.appendChild(txnota);
        // agregar el elemento <p> al body del html
       document.body.appendChild(nota);
    }
    

}