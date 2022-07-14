  


function calcularCusto() {

       var custoIngrediente = 0;

       var precoIngrediente = document.getElementById("precoIngrediente").value;
       var quantProdutoTotal = document.getElementById("quantProdutoTotal").value;
       var quantReceita = document.getElementById("quantReceita").value;
       var nomeProduto = document.getElementById("nomeProduto").value;

       console.log(precoIngrediente, quantProdutoTotal, quantReceita, nomeProduto);

       custoIngrediente = ( (precoIngrediente / quantProdutoTotal) * quantReceita );
      
       template = `${nomeProduto} custa R$${(custoIngrediente).toFixed(2)} a cada ${quantReceita}g/ml`;
      
       document.getElementById("result-title").innerText = "Resultado: ";
       document.getElementById("result-text").innerText = `${template}`;
      

}

