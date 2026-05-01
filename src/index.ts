//Biblioteca Pessoal - Gerenciamento de Livros

// Arrays para armazenar os dados dos livros
const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];

// Dados iniciais da biblioteca (titulos, autores, anos, paginas, lido, avaliacoes)
titulos.push('O Hobbit', 'Clean Code', '1984', 'Dom Casmurro', 'O Nome do Vento');

// Autores dos livros
autores.push(
  'J.R.R. Tolkien',
  'Robert C. Martin',
  'George Orwell',
  'Machado de Assis',
  'Patrick Rothfuss',
);

// Anos de publicação, número de páginas, status de leitura e avaliações
anos.push(1937, 2008, 1949, 1899, 2007);
paginas.push(310, 464, 328, 256, 662);
lido.push(true, true, false, true, false);
avaliacoes.push(5, 4, 0, 5, 0);

// Função para exibir a biblioteca
function exibirBiblioteca(): void {
  console.log('\n=== MINHA BIBLIOTECA ===');

//  Exibe cada livro com seus detalhes
  titulos.forEach((titulo: string, indice: number): void => {
    const status: string = lido[indice]
      ? `LIDO (${avaliacoes[indice]}/5)`
      : 'PENDENTE';

//  Exibe o título, ano, autor, número de páginas e status de leitura
    console.log(
      `${indice + 1}. "${titulo}" (${anos[indice]}) - ${autores[indice]} - ${paginas[indice]} pag - ${status}`,
    );
  });
}

exibirBiblioteca();

// Função para validar o índice do livro
function indiceValido(indice: number): boolean {
  return indice >= 0 && indice < titulos.length;
}

// Função para adicionar um novo livro à biblioteca
function adicionarLivro(
  titulo: string,
  autor: string,
  ano: number,
  quantidadePaginas: number,
): void {

  // Valida se o título e o autor não estão vazios
  if (titulo.trim() === '' || autor.trim() === '') {
    console.log('Erro: título e autor não podem ser vazios.');
    return;
  }

// Valida se o ano e a quantidade de páginas são maiores que zero
  if (ano <= 0 || quantidadePaginas <= 0) {
    console.log('Erro: ano e páginas devem ser maiores que zero.');
    return;
  }

// Adiciona os dados do novo livro aos arrays correspondentes
  titulos.push(titulo);
  autores.push(autor);
  anos.push(ano);
  paginas.push(quantidadePaginas);
  lido.push(false);
  avaliacoes.push(0);

  console.log(`Livro "${titulo}" adicionado com sucesso!`);
}
// Função para remover um livro da biblioteca com base no índice
function removerLivro(indice: number): void {
  if (!indiceValido(indice)) {
    console.log('Erro: índice inválido.');
    return;
  }
// Armazena o título do livro que será removido para exibir na mensagem de sucesso
  const tituloRemovido: string = titulos[indice]!;

  // Remove os dados do livro dos arrays correspondentes
  titulos.splice(indice, 1);
  autores.splice(indice, 1);
  anos.splice(indice, 1);
  paginas.splice(indice, 1);
  lido.splice(indice, 1);
  avaliacoes.splice(indice, 1);

  // Exibe uma mensagem de sucesso indicando que o livro foi removido
  console.log(`Livro "${tituloRemovido}" removido com sucesso!`);
}
// Testes: Adiciona novos livros, remove um livro e exibe a biblioteca atualizada
adicionarLivro('Capitães da Areia', 'Jorge Amado', 1937, 280);
adicionarLivro('A Revolução dos Bichos', 'George Orwell', 1945, 152);
removerLivro(2);
exibirBiblioteca()


