// Função que será executada ao carregar a página
function myFunction() {
    const protdutos = [];

    for (i = 0; i <= 8; i++) {
        var produto = {
            nome: "Macarrão",
            vencimento: "10/12/2023",
            preco: 7.00,
        };
        protdutos.push(produto);
    }

    for (const prod of protdutos) {
        var divAlimento = document.createElement("div");
        divAlimento.classList.add("alimento");

        // Cria um elemento img com o src da imagem do macarrão
        var imgMacarrao = document.createElement("img");
        imgMacarrao.src = "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/14425/medium/macarrao-com-ovos-renata-caracol-500g_90691.png";
        imgMacarrao.alt = "...";
        imgMacarrao.width = "200";

        // Adiciona o elemento img ao elemento div
        divAlimento.appendChild(imgMacarrao);

        // Cria um elemento div com a classe "infoAlimento"
        var divInfoAlimento = document.createElement("div");
        divInfoAlimento.classList.add("infoAlimento");

        // Cria um elemento h5 com o nome do alimento
        var h5Alimento = document.createElement("h5");
        h5Alimento.textContent = "Nome:" + prod.nome;

        // Adiciona o elemento h5 ao elemento div
        divInfoAlimento.appendChild(h5Alimento);

        // Cria um elemento p com o vencimento do alimento
        var pVencimentoAlimento = document.createElement("p");
        pVencimentoAlimento.textContent = "Vencimento:" + prod.vencimento;

        // Adiciona o elemento p ao elemento div
        divInfoAlimento.appendChild(pVencimentoAlimento);

        // Cria um elemento p com o preço do alimento
        var pPrecoAlimento = document.createElement("p");
        pPrecoAlimento.textContent = "Preço:" + prod.preco;

        // Adiciona o elemento p ao elemento div
        divInfoAlimento.appendChild(pPrecoAlimento);

        // Cria um elemento a com o link para o botão de colapso
        var aBotaoColapso = document.createElement("a");
        aBotaoColapso.href = "#";
        aBotaoColapso.classList.add("btn");
        aBotaoColapso.classList.add("btn-light");
        aBotaoColapso.type = "button";
        aBotaoColapso.setAttribute("data-bs-toggle", "collapse");
        aBotaoColapso.setAttribute("data-bs-target", "#flush-collapseOne");
        aBotaoColapso.setAttribute("aria-expanded", "false");
        aBotaoColapso.setAttribute("aria-controls", "flush-collapseOne");

        // Cria um elemento img para o ícone do botão de colapso
        var imgIconeBotaoColapso = document.createElement("img");
        imgIconeBotaoColapso.src = "https://cdn-icons-png.flaticon.com/512/126/126510.png";
        imgIconeBotaoColapso.alt = "";
        imgIconeBotaoColapso.width = "20";

        // Adiciona o elemento img ao elemento a
        aBotaoColapso.appendChild(imgIconeBotaoColapso);

        // Adiciona o elemento a ao elemento div
        divInfoAlimento.appendChild(aBotaoColapso);

        // Adiciona o elemento div "infoAlimento" ao elemento div "alimento"
        divAlimento.appendChild(divInfoAlimento);
        var divAlimentos = document.getElementById("alimentos");
        // Adiciona o elemento div "alimento" ao documento
        
        divAlimentos.appendChild(divAlimento);
    }

    // Cria um elemento div com a classe "alimento"

}

// Executa a função myFunction() quando a página for carregada
window.onload = myFunction;