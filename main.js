var totalBruto = [];
var totalImposto = [];
var totalLiquido = [];
var mercadoria = [];
let confirmation;


var max=prompt("Insira a quantidade de itens que serão registrados")
if (max>0){
confirmation=true
}
max=max-1
if(confirmation){
function controleDeMercadorias() {
  for (let contador = 0; contador <= max; contador++) {
    mercadoria[contador] = prompt("Digite o nome da mercadoria:");
    totalBruto[contador] = prompt("Digite o Total Bruto da mercadoria:");
    totalImposto[contador] = prompt("Digite o Valor do Imposto:");
    totalLiquido[contador] = totalBruto[contador] - totalImposto[contador];
  }
}
controleDeMercadorias();
 confirmation = confirm("Deseja exibir os Produtos Cadastrados?");
if (confirmation) {
  document.write("<table><thead><tr><th>Produto:</th><th>Valor Bruto:</th><th>Impostos:</th><th>Valor Liquído:</th></tr></thead>");
  document.write("<tbody>")
  for(contador=0;contador<=max;contador++){
    document.write(`<tr><td>${mercadoria[contador]}</td><td>R$ ${totalBruto[contador]}</td><td>R$ ${totalImposto[contador]}</td><td>R$ ${totalLiquido[contador]}</td></tr>`)
  }
  document.write("</tbody></table>")
}
}else{
  document.write("Fim da Execução!")
}