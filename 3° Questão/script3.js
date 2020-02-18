// Resolução da terceira questão.

const totalN = prompt("Informe o valor de linhas e colunas");
//let tabela;
if (!isNaN(totalN) && totalN >0){
    let tabela = "<table>";

    for (let i=0; i < totalN; i++) {
        tabela +="<tr>";
        for(let c=0; c< totalN; c++)
            if (c==i){
                tabela += "<td style='color:orange'>" + c + 1 + "</td>";
            } else{
                tabela += "<td>" + c + 1 + "</td>";
            }
    }
    tabela += "</td>";
    tabela += "</table>"
    document.body.innerHTML += tabela;

}



