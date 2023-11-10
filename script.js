
const cards = [
    {
        title: 'HTML5',
        text: 'Tecnologia estrutural para web sites e aplicações',
        img: './assets/1.png'
    },
    {
        title: 'Visual Studio Code',
        text: 'Editor de texto muito utilizado',
        img: './assets/2.png'
    },
    {
        title: 'Node Js',
        text: 'Tecnologia eficaz para utilizar Java Script no Back-End',
        img: './assets/3.png'
    },
    {
        title: 'React Js',
        text: 'Framework para criação de interfaces Web',
        img: './assets/4.png'
    },
    {
        title: 'Java Script',
        text: 'Linguagem de programação amplamente utilizada',
        img: './assets/5.png'
    },
    {
        title: 'CSS3',
        text: 'Tecnologia para estilizações de elementos',
        img: './assets/6.png'
    }
];


const hobbiesCards = [
    {
        title: 'Capoeira',
        text: 'Arte marcial, a capoeira permite desfrutar da musicalidade, da parte funcional também, basicamente a capoeira é um jogo corporal de inteligência, é uma arte completa',
        img: './assets/1(1).png',
    },
    {
        title: 'Musculação',
        text: 'Academia para mim não é esforço, para mim é descanso, se por acaso eu não dormir bem a noite, a academia vou para obter energia para lidar com restante do dia',
        img: './assets/2(1).png',
    },
    {
        title: 'Leitura',
        text: 'Ler bons livros é essencial para obter informações de qualidade e relaxar também, então aprendi a gostar e não vivo sem meu kindle',
        img: './assets/3(1).png',
    },
    {
        title: 'Família',
        text: 'É o chão da minha vida, minha esposa e minha filha são os maiores presentes que Deus me deu',
        img: './assets/4(1).png',
    },
]
const mainCardsContainer = document.querySelector('.main-cards-container');


const cardsContainer = document.createElement('div');
cardsContainer.classList.add('cards-container');
cards.forEach((card) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    
    const imagemCard = document.createElement('img');
    imagemCard.classList.add('imagem-card');
    imagemCard.src = card.img;
    
    const textoCard = document.createElement('p');
    textoCard.classList.add('texto-card');
    textoCard.textContent = card.text;

    const tituloCard = document.createElement('h4');
    tituloCard.classList.add('titulo-card');
    tituloCard.textContent = card.title;

    cardContainer.appendChild(imagemCard);
    cardContainer.appendChild(textoCard);
    cardContainer.appendChild(tituloCard);

    cardsContainer.appendChild(cardContainer);

    
})

mainCardsContainer.appendChild(cardsContainer);

const hobbiesCardsContainer = document.querySelector('.hobbies-main-container');

hobbiesCards.forEach((hobby) => {
    const hobbyCardContainer = document.createElement('div');
    hobbyCardContainer.classList.add('hobbies-card-container');
    
    const hobbyImagemCard = document.createElement('img');
    hobbyImagemCard.classList.add('hobbies-imagem-card');
    hobbyImagemCard.src = hobby.img;
    
    const hobbyTextoCard = document.createElement('span');
    hobbyTextoCard.classList.add('hobbies-text-card');
    hobbyTextoCard.textContent = hobby.text;

    const hobbyTituloCard = document.createElement('h4');
    hobbyTituloCard.classList.add('hobbies-titulo-card');
    hobbyTituloCard.textContent = hobby.title;

    hobbyCardContainer.appendChild(hobbyImagemCard);
    hobbyCardContainer.appendChild(hobbyTextoCard);
    hobbyCardContainer.appendChild(hobbyTituloCard);

    
hobbiesCardsContainer.appendChild(hobbyCardContainer);


})

function abrirMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Adicione um botão de fechar (X) ao menu
    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('close-button');
    closeButton.onclick = fecharMenu;

    // Adicione o botão de fechar antes dos outros elementos do menu
    menuContainer.appendChild(closeButton);

    // Adicione links para Contato e Portfólio
    const linkContato = document.createElement('div');
    linkContato.classList.add('link-container');
    linkContato.onclick = function () {
        window.location.href = "./pages/contato/contato.html";
      
    };

    const linkPortifolio = document.createElement('div');
    linkPortifolio.classList.add('link-container');
    linkPortifolio.onclick = function () {
        window.location.href = "./pages/portifolio/index.html";
        
    };

    const textContato = document.createElement('p');
    textContato.innerText = 'Contato';
    textContato.classList.add('text-link');

    const textPortifolio = document.createElement('p');
    textPortifolio.innerText = 'Portifólio';
    textPortifolio.classList.add('text-link');

    document.body.appendChild(menuContainer);
    menuContainer.appendChild(linkContato);
    menuContainer.appendChild(linkPortifolio);
    linkContato.appendChild(textContato);
    linkPortifolio.appendChild(textPortifolio);
}


function fecharMenu() {
    const menuContainer = document.querySelector('.menu-container');
    if (menuContainer) {
        document.body.removeChild(menuContainer);
    }
}