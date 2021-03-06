# CalcLactase - Caculadora de Lactase

As pessoas com intolerância à lactose podem sentir desconforto após consumir leite e derivados. Os sintomas decorrem da incapacidade total ou parcial do organismo de produzir a lactase, uma enzima que quebra a lactose, o açúcar dos produtos lácteos. Existem diversos medicamentos que ajudam essas pessoas no processo de quebra da lactase, permitindo o consumo de produtos lácteos.

O grande problema é que é muito difícil o paciente estimar quanto medicamento deve tomar para certa quantidade de alimentos lácteos. Se o paciente tomar de menos, pode passar mal. Se o paciente tomar demais, pode estar perdendo dinheiro. Medicamentos para quem tem intolerância a lactose são caros, podendo alcançar o valor de R\$ 70,00 uma caixa com 30 comprimidos de 10.000 FCC ALU (medida para quebra da lactase). Como estimar a quantidade de medicamento a ser ingerida?

**O aplicativo CalcLactase tem como objetivo** criar uma **estimativa\*** de quanto medicamento o paciente deve ingerir para evitar passar mal e economizar ao consumir alimentos derivados do leite. Uma lista dos produtos lácteos mais comuns será listada para que o usuário possa selecionar o que pretende comer e assim obter uma estimativa de medicamento a ser ingerido.

\* O aplicativo apresenta uma **ESTIMATIVA** com base em artigos científicos e artigos da _internet_ que pode auxiliar no processo de decisão de quanto medicamento ingerir. **Siga SEMPRE as orientações do seu médico**, pois essa sempre sobressairá sobre as demais.

# INTERFACES

## Tela Principal

Nesta tela o usuário poderá selecionar produtos derivados do leite para compor a lista de produtos que serão usados na Calculadora de Lactase.

<p align="center">CalcLactase - Tela Principal</p>
<p align="center">
  <img src="https://i.imgur.com/kviqOKv.jpg"  width="350" title="CalcLactase - Tela Principal">
</p>

## Tela Calculadora de Lactose

Nesta tela o usuário encontrará os produtos selecionados na tela principal. Uma das funcionalidades que pode ser encontrada nessa tela é a possibilidade de alterar as quantidades de cada produto.

Na parte inferior ta tela o usuário encontrará o resultado do principal cálculo do sistema. As informações calculadas são: (1) a soma da quantidade de lactose de todos os produtos da lista, (2) a quantidade de lactase necessária para hidrolisar essa quantidade de lactose e (3) uma estimativa de quanto medicamento ingerir.

<p align="center">CalcLactase - Tela Calculadora de Lactose</p>
<p align="center">
  <img src="https://i.imgur.com/buWzdLn.jpg"  width="350" title="CalcLactase - Tela Calculadora de Lactose">
</p>


## Tela Configurações

Nesta tela o usuário poderá definir as preferências de tipo de medicamento que costuma usar (comprimidos ou gotas) e a quantidade de FCC do medicamento.

Para ajudar o usuário, o sistema apresenta alguns exemplos de medicamentos disponíveis no mercado.

<p align="center">CalcLactase - Tela Configurações de Lactose</p>
<p align="center">
  <img src="https://i.imgur.com/8EUhdHD.jpg"  width="350" title="CalcLactase - Tela Configurações">
</p>

# DADOS DO USUÁRIO

Nesta aplicação, os dados do usuário que são armazenados são:

1. Informações de medicamento: tipo de medicamento (comprimidos ou gotas) e a quantidade de FCC do medicamento. Os dados são salvos através da API `localStorage`. 
2. A sacola de produtos: a lista dos produtos lácteos adicionados à sacola. Esses dados são armazenados através da API `sessionStorage`, pois não é necessário armazenar essa lista de forma permanente.


# CHECKLIST DE IMPLEMENTAÇÃO

- A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente? **Sim.**
- A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes? **Sim.**
- A aplicação armazena e usa de forma relevante dados complexos do usuário? **Sim.**
- A aplicação possui um manifesto para instalação no dispositivo do usuário? **Sim.**
- A aplicação possui um _service worker_ que permite o funcionamento off-line? **Sim.**
- O código da minha aplicação possui comentários explicando cada operação? **Não, pois não é uma boa prática de programação.** Todavia, todos os métodos, variáveis e arquivos foram criados com nomes extremamente sugestivos para simplificar o entendimento do código. Por exemplo, o método `addToCalculator` adiciona um produto à sacola; o método `showCartItens` exibe os itens da sacola; já o método `showCalcLactaseResult` exibe o resultado do cálculo. Viu?! Simples assim! Desta forma o código fica mais elegante e muito mais legível.
- A aplicação está funcionando corretamente? **Sim.**
- A aplicação está completa? **Sim.**


# DEFINIÇÕES

# Cores

De acordo com pesquisa efetuada, verificou-se que a cor predominante nas caixas dos fármacos de lactase é azul. A paleta de cores foi definida com o auxílio das ferramentas [COLOR TOOL](https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=0091ea&primary.text.color=000000&secondary.color=80D8FF) e [color-hex](https://www.color-hex.com/).

Para a escolha dos fundos degradês, foi usado o site [CSS Gradient](https://cssgradient.io/).

# REFERÊNCIAS

## Técnicas

[Como organizar estilos no React Native](https://blog.rocketseat.com.br/como-organizar-estilos-no-react-native/)


## Saúde

[Intolerância à lactose: mudança de paradigmas com a biologia molecular](https://doi.org/10.1590/S0104-42302010000200025)

[Lactose content of food](https://foodintolerances.org/lactose-content-of-food/)

[WHAT IS THE LACTOSE CONTENT OF DIFFERENT DAIRY PRODUCTS?](https://www.dairy.com.au/dairy-matters/you-ask-we-answer/what-is-the-lactose-content-of-different-dairy-products)

[Saiba qual é a quantidade de lactose nos alimentos](https://www.tuasaude.com/saiba-qual-e-a-quantidade-de-lactose-nos-alimentos/)

[Teor de lactose em produtos lácteos](https://semlactose.com/2008/02/03/teor-de-lactose-em-produtos-lacteos/)

[INTOLERÂNCIA À LACTOSE e produtos lácteos com baixo teor de lactose](http://insumos.com.br/aditivos_e_ingredientes/materias/143.pdf)

[Bula LacLev](https://www.facebook.com/sitesemlactose/photos/a.10150462711649885/10156591574369885/?type=3)

[Bula Lactosil](https://www.diabeteservice.com.br/lactosil-10-000-fcc-alu-60g.html)


# CRÉDITOS
