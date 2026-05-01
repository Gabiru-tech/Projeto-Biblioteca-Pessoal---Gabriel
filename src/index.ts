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