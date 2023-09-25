//#EXERCÍCIO1
const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
function transformaObjetoParaCaixaAlta(objeto) {
    const objetoEmCaixaAlta = {};
    for (const propriedade in objeto) {
      if (objeto.hasOwnProperty(propriedade)) {
        objetoEmCaixaAlta[propriedade] = objeto[propriedade].toUpperCase();
      }
    }
    return objetoEmCaixaAlta;
  }
  function retornaValoresComoTexto(objeto) {
    let texto = '';
    for (const propriedade in objeto) {
      if (objeto.hasOwnProperty(propriedade)) {
        texto += `O valor da propriedade ${propriedade} é ${objeto[propriedade]}. `;
      }
    }
    return texto.trim();
  }
  function chamaCallbackEImprime(objeto, callback) {
    const resultadoCallback = callback(objeto);
    console.log(resultadoCallback);
  }
  const meuObjeto = {
    nome: 'ASTRODEV',
    profissao: 'DEV DAS ESTRELAS',
    username: 'ASTRODEV_LABENU',
    senha: 'MELHORDETODOS'
  };
  chamaCallbackEImprime(meuObjeto, transformaObjetoParaCaixaAlta);
  chamaCallbackEImprime(meuObjeto, retornaValoresComoTexto);

  // # EXERCÍCIO2
const numeros = [2, 4, 6, 8, 10, 12, 14, 16];
const quintuplos = numeros.map(numero => numero * 5);
const metades = numeros.map(numero => numero / 2);
console.log("Quintuplos:", quintuplos);
console.log("Metades:", metades);

// # EXERCÍCIO3
const produtos = [
    { nome: 'Sabão em pó', preco: 12.5, categoria: 'limpeza' },
    { nome: 'Detergente', preco: 2.0, categoria: 'limpeza' },
    { nome: 'Shampoo', preco: 8.0, categoria: 'higiene' },
    { nome: 'Escova de dentes', preco: 3.5, categoria: 'higiene' },
    { nome: 'Vassoura', preco: 15.0, categoria: 'limpeza' }
  ];
  const nomesProdutosLimpeza = produtos
    .filter(produto => produto.categoria === 'limpeza') 
    .map(produto => produto.nome); 
  console.log(nomesProdutosLimpeza);
