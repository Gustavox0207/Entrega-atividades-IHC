class Produto {
   nome: string;
   descricao: string;
   valorComercial: number;
   fabricante: string;
   emEstoque: boolean;

    constructor(
       nome: string,
       descricao: string,
       valorComercial: number,
       fabricante: string,
       emEstoque: boolean
    ){
       this.nome = nome;
       this.descricao = descricao;
       this.valorComercial = valorComercial;
       this.fabricante = fabricante;
       this.emEstoque = emEstoque;
    }
}

class Venda {
   produtos: Produto[];

    // O construtor recebe um array do tipo Produto
    constructor(produtos: Produto[]) {
       this.produtos = produtos;
    }

    // Método para somar os valores dos produtos
    calcularTotal(): number {
       let total = 0;
       for (let i = 0; i < this.produtos.length; i++) {
          total += this.produtos[i].valorComercial;
       }
       return total;
    }
}

const produto1 = new Produto(
   "Cadeira Presidente",
   "Cadeira ergonômica com ajuste de lombar",
   1250.00,
   "ErgoMóveis",
   true
);

const produto2 = new Produto(
  "Mesa de Escritório",
  "Mesa de madeira 120x60cm",
  899.90,
  "Madeira&Cia",
  true
);

const produto3 = new Produto(
   "Suporte para Monitor",
   "Suporte articulado de mesa para 2 monitores",
   350.50,
   "TechStand",
   false
);

// Inserindo os produtos no objeto Venda
const vendaAcionistas = new Venda([produto1, produto2, produto3]);

// Soma dos valores e exibindo no console
const valorTotal = vendaAcionistas.calcularTotal();

console.log(`Resumo da Venda:`);
console.log(`Quantidade de itens: ${vendaAcionistas.produtos.length}`);
console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`);
