# Estudo html   
## O que é html?
    - É uma linguagem de programação de marcas,em que seu código não é compilador, pelo contrário ele é interpretado e renderizado por meio de um motor web que faz a exibição dos elementos html em formanto gráfico.
        - Renderizar: pegar o código e transformar em elementos gráficos.
        - Motor web: é uma ferramenta reponsável por "ler" o código html, realizar a "comparação e/ou buscar" na biblioeca de comando do navegador e realizra o processo de rederização.

## Sigla html
    - HT -> Hypertext (hiper texto)
    - M -> markup (marcas| marcação)
    - L -> language (linguagem)
    - Comandos para serem processados no formanto de mídia

## Como usar o html
    - Para usar os comandos html é necessários escreve-lo usando tags(palavras-chave)
    - Tags (comandos| palavras-chave) podem ser compostas(casadas) ou simples (solteira)
        - Tag composta: é o comando que inicia a precisae ser finalizando para determinar sua abrangemcia de execução. Por exemplo: <body>....</body>| <strong>...</strong>
        - Tag simples: são comandos que não precisam ser finalizadas, apenasd aplica-se. <br>.....<img>...<meta>...<link>

## As tags html pode ter atributos
    - Atributos são qualificadores para uma tag html. Eles podem adicionar recursos a mais para a tag. Exemplo: <img src="foto.png" alt="foto">. No exeplo anterior a tag chama-se img os atributos são: 
        - src (source = origem) determina a imagem que será exibida. Aqui, você deve passar o caminho da imagem.
        - alt (alternate = alternativo) determina um texto que será exibido quando a imagem não carrega e é utilizado pelo leitor de tela (screen reader) para deficiente visuais

    - Outro exemplo: <form action="cadastro.php" method="post">...</form>
     - A tag form é comporta e também pode ter atributos. Quando for finalizada a tag composta não será necessário colocar os atributos no fechamento. Você deve fechar somente a tag. No exemplo acima temos:
        - Tag form -> criar o escopo do formulério
        - Atribuito action -> indica caminho para onde os dados do formúlario irão
        - Atributo method -> indica o método como os dados serão enviados

## Estrutura básica de uma página html

```
<html>
    <head>
    <meta chasert=UTF-8>
    <title> Primeira página</title>
    </head>
    <body>
      <h1> Primeira página </h1>
    </body>
</html>
```
