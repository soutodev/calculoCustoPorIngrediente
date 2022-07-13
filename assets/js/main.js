let precoIngrediente = 6;
let quantProdutoTotal = 1000;
let quantReceita = 360;
let custoIngredinte = 0;

 const calculoCusto = (precoIngrediente, quantProdutoTotal, quantReceita) => {
    return ( (precoIngrediente / quantProdutoTotal) * quantReceita );
 }

 custoIngredinte = (calculoCusto(precoIngrediente, quantProdutoTotal, quantReceita));

 //arredondando para duas casas decimais 
 console.log("R$ " + (custoIngredinte).toFixed(2) + " para cada " +  quantReceita + "g");