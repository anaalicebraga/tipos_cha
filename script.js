function carregaListaChas() {

  var lista_cha = {
    cha01: {
      nome: "Chá branco [Bái chá]",
      imagem: "img/chabranco.jpg",
      descricao: "O chá branco é um dos chás mais caros e raros. Isso porque ele é produzido com os brotos da planta. O nome é devido a penugem que encobre a ponta de cada broto, que é colhido antes de abrir. É um chá com 0% de oxidação. O licor do chá branco é pálido, com cor que pode variar de um verde bem claro a um amarelo champagne. Seu sabor é suave e levemente adocicado, aveludado e possui altos níveis de antioxidantes.",
      descricaoImagem: "Ramequim de porcelana branco contendo brotos de chá branco."
    },
    cha02: {
      nome: "Chá verde [Lü chá]",
      imagem: "img/chaverde.jpg",
      descricao: "O chá verde é 0% oxidado. Seus principais produtores são China e Japão, mas também é produzido em diversos outros países. Os chás verdes da China são nomeados e diferenciados pelas regiões onde são produzidos. Cada tipo de chá verde possui uma forma diferente de processamento no qual influencia em seu aroma, sabor e formatos característicos. No Japão os chás verdes se diferenciam principalmente pela forma de cultivo e processamento. As principais características do chá verde são a adstringência e o caráter vegetal e seu licor varia desde um verde pálido até um vigoroso amarelo âmbar.",
      descricaoImagem: "Ramequim de porcelana branco contendo chá verde."
    },
    cha03: {
      nome: "Chá amarelo [Huang chá]",
      imagem: "img/chaamarelo.jpg",
      descricao: "O chá amarelo é o mais raro de todos os tipos de chá. É produzido somente em algumas regiões da China, e em quantidade limitada. Seu sabor herbal lembra o chá verde. Porém, o passo adicional no seu processamento o torna mais adocicado.",
      descricaoImagem: "Ramequim de porcelana branco contendo chá amarelo."
    },
    cha04: {
      nome: "Chá oolong [Wu Lóng chá]",
      imagem: "img/chaoolong.jpg",
      descricao: "O chá oolong, também conhecido como chá azul, é um chá semi-oxidado. Em mandarim, seu nome significa dragão preto. Ele foi desenvolvido há 300 anos e é uma combinação de diferentes métodos de processamento de outros chás da China.Existem três principais tipos de oolongs: os verdes, os defumados e os pouchong. Os oolongs tem sabor complexo, com distintos aromas, sabores e notas. O licor do chá possui cor amarelada, que é suave nos menos oxidados, mais vívida nos mais oxidados e com tons claros de marrom nos defumados.",
      descricaoImagem: "Ramequim de porcelana branco contendo chá oolong."
    },
    cha05: {
      nome: "Chá preto [Hóng chá]",
      imagem: "img/chapreto.jpg",
      descricao: "O nome Hóng chá, em mandarim, significa chá vermelho. No ocidente, esse chá é comercializado com o nome de chá preto, devido a cor das folhas do chá acabado. A forma de processamento do chá preto muda de país para país e é o único chá que chega a 100% de oxidação. É o chá ideal para ser consumido com leite. Sua principal característica é o amargor, mesmo que suave, e a cor do licor varia de tons de amarelo, laranja e marrom.",
      descricaoImagem: "Ramequim de porcelana branco contendo chá preto."
    },
    cha06: {
      nome: "Chá escuro [Hei chá]",
      imagem: "img/chaescuro.jpg",
      descricao: "O chá escuro é o único chá fermentado, e não oxidado. Seu nome, em mandarim, significa chá preto. Esse chá é tradicionalmente comprimido em blocos chamados de tijolos ou bolos, que podem ter os mais diversos formatos.Depois de comprimido, o chá escuro é envelhecido por um período que varia de 5 a 12 anos. A principal característica dos chás escuros é o sabor com notas de terra e floresta e seu aroma remete a pântano. Seu sabor é complexo, que pode ser amargo e ácido , adstringente e amargo ou adocicado e leve. A cor do licor varia entre amarelo ao marrom bem escuro, quase turvo.",
      descriçãoImagem: "Ramequim de porcelana branco contendo chá escuro em formato de cogumelo."
    },
  };

  var content = document.getElementById("content");

  for (var cha in lista_cha) {
    content.innerHTML += `
      <div class="card">
        <img src="${lista_cha[cha].imagem}" alt="${lista_cha[cha].descricaoImagem}"/>
        <details>
          <summary>${lista_cha[cha].nome}</summary>
          <p>${lista_cha[cha].descricao}</p>
        </details>
      </div>
    `;
  }
}

carregaListaChas();