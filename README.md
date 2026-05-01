# Projeto-Biblioteca-Pessoal---Gabriel

Meu nome é Gabriel Cruz e está é a minha biblioteca pessoal.



INSTRUÇÕES DO PASSO A PASSO 


Projeto Integrador do segundo semestre da FATEC. Desenvolvimento de uma biblioteca pessoal para a aplicação dos conhecimentos adquiridos. 

O primeiro commit foi realizado as configurações do typescript e a inicialização do repositório.
O segundo commit trouxe a base de dados iniciais, como a estruturação dos dados e a apresentação da tela
O terceiro commit foi necessário para o acerto das configurações
O quarto commit implementa os cadastros e a removação de livros
O quinto commit filtra para a pesquisa dos livros por título ou autor
O sexto commit adiciona funções estáticas 
o último commit apresenta as funcionabilidade do projeto junto da classificação por década



EXPLICAÇÃO DAS FUNCIONABILIDADES

O projeto usa arrays paralelos. Isso quer dizer que cada livro é identificado pela mesma posição em vários arrays. Por exemplo, o livro titulos[0] usa também autores[0], anos[0], paginas[0], lido[0] e avaliacoes[0].

As variáveis foram tipadas com string, number e boolean. Isso ajuda o TypeScript a impedir erros, como colocar texto onde deveria ser número.

O programa usa if para validar dados, como impedir ano menor que zero ou nota fora de 1 a 5.

As funções separam o código em partes menores. Por exemplo, uma função adiciona livro, outra remove, outra calcula estatísticas.

Os arrays usam métodos importantes:

push adiciona elementos.

splice remove elementos.

forEach percorre a lista.

filter filtra livros.

reduce soma ou escolhe um resultado final.

includes verifica se um texto contém outro texto.

toFixed(2) mostra números com duas casas decimais.