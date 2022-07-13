let precoPago = 6;
let quantProdTotal = 1000;
let quantReceita = 360;
let custoIngredinte = 0;

 const calculoCusto = (precoPago, quantProdTotal, quantReceita) => {
    return ( (precoPago / quantProdTotal) * quantReceita );
 }

 custoIngredinte = (calculoCusto(precoPago, quantProdTotal, quantReceita));

 //arredondando para duas casas decimais 
 console.log("R$ " + (custoIngredinte).toFixed(2) + " para cada " +  quantReceita + "g");