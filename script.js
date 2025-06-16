Código script.js  finalizado

//criação das constantes para manipular os elementos HTML

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//lista de perguntas com os objetos(itens) e seus atributos:enunciado, e lista de alternativas
//com os atributos texto e afirmação
const perguntas = [
    {
        enunciado: "Como 2Pac e a cultura africana se conectam com o uso de ervas medicinais?",
        alternativas: [
            {
            texto: "2Pac incorporava a cultura africana em sua arte, e muitas comunidades africanas usam ervas medicinais para saúde e bem-estar.",
            afirmacao: "2Pac era conhecido por infundir sua música e imagem com temas afrocentristas, e a utilização de ervas medicinais é uma prática milenar e comum em diversas culturas africanas para cura e manutenção da saúde. "
            },
            {
            texto: "A mãe de 2Pac, Afeni Shakur, valorizava as raízes africanas, e sociedades africanas têm vasto conhecimento em ervas medicinais terapêuticas.",
            afirmacao: "Afeni Shakur, como Pantera Negra, representava um movimento que buscava resgatar e valorizar a identidade africana, e dentro dessa rica herança cultural, o conhecimento de ervas medicinais é um pilar tradicional de cura."
            },
        ]
    },
    {
        enunciado: "Na perspectiva de 2Pac, como a tradição africana de cura e as ervas medicinais simbolizam resistência?",
        alternativas: [
            {
            texto: "A música de 2Pac abordava resistência social, refletindo a resiliência de comunidades de cultura africana que dependem de ervas medicinais para sobrevivência.",
            afirmacao: As letras de 2Pac frequentemente falavam sobre a luta e a persistência de grupos oprimidos, um paralelo com a resiliência de comunidades africanas que, através de suas tradições de cura com ervas, mantiveram sua saúde e autonomia em face de adversidades. "
            },
            {
            texto: "O legado de 2Pac inspirou empoderamento, assim como a manutenção do conhecimento de ervas medicinais na cultura africana representa resistência cultural.",
            afirmacao: "O impacto de 2Pac vai além da música, promovendo a ideia de auto-empoderamento. Similarmente, a preservação e o uso contínuo das ervas medicinais na cultura africana são atos de resistência contra a assimilação e a perda de saberes ancestrais."
            },
        ]
    },
    {
        enunciado: "Como os ideais de 2Pac e a cultura africana se alinham com a valorização das ervas medicinais em saúde comunitária?
            {
            texto: "2Pac promovia a conscientização sobre comunidades marginalizadas, conectando-se à importância do acesso a recursos como ervas medicinais, usadas em comunidades de cultura africana para saúde.",
            afirmacao: "2Pac destacava as necessidades das comunidades carentes, o que se alinha com a importância das ervas medicinais como um recurso de saúde acessível e culturalmente relevante em muitas comunidades africanas, que podem ter acesso limitado a cuidados de saúde formais."
            },
            {
            texto: "A admiração de 2Pac pela cultura africana e sua ênfase na auto-suficiência se relacionam ao uso tradicional de ervas medicinais como recurso autônomo de saúde.",
            afirmacao: "A valorização da cultura africana por 2Pac e a promoção da independência ecoam o uso tradicional de ervas medicinais nessas culturas, onde representam uma forma de cuidado de saúde autossuficiente e enraizada nas próprias tradições, sem dependência externa."
            },
        ]
    },

];//criação das variáveis atual(que percorrerá os itens da lista de perguntas)
// perguntaAtual(que guardará a pergunta atual que será interagida)
//historiaFinal(que inicia vazia e depois guardará os textos da resposta selecionada)

let atual = 0;
let perguntaAtual;
let historiaFinal = "";//funcao que mostrará cada pergunta até que apareça encerre a lista e mostrará o resumo da I.A.

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
//execução da função que mostrará as alternativas
    mostraAlternativa();
}//funcao que mostrará as alternativas do objeto selecionado

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
//execução da função SETA => que após o evento de clique selecionada a resposta da alternativa
        botaoAlternativa.addEventListener("click",()=>respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
   
}
}//função que junta todas as afirmações das alternativas clicadas.

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
//execução da função que mostra a pergunta
    mostraPergunta();

}//função que mostrará o resultado final 

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}//execução da função que mostrará a pergunta e suas alternativas

mostraPergunta();