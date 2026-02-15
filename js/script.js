
document.addEventListener("DOMContentLoaded", () => {
    
const houses = [
  {
    name: "Casa Stark",
    motto: "Winter is Coming",
    region: "O Norte",
    image: "./assets/image/logo-stark.PNG",
    theme: "stark",
    description: "Os Stark governam o Norte de Winterfell. São conhecidos por sua honra, lealdade e resistência. Seu lema reflete a preparação constante para tempos difíceis."
  },
  {
    name: "Casa Lannister",
    motto: "Hear Me Roar",
    region: "As Terras Ocidentais",
    image: "./assets/image/logo-lannister.PNG",
    theme: "lannister",
    description: "A mais rica das grandes casas, os Lannister de Casterly Rock são conhecidos por sua astúcia política e riqueza incomparável."
  },
  {
    name: "Casa Targaryen",
    motto: "Fire and Blood",
    region: "Terras da Coroa",
    image: "./assets/image/logo-targaryen.PNG",
    theme: "targaryen",
    description: "Descendentes de Valíria Antiga, os Targaryen conquistaram Westeros com dragões. Conhecidos por cabelos prateados e olhos violetas."
  },
  {
    name: "Casa Baratheon",
    motto: "Ours is the Fury",
    region: "As Terras da Tempestade",
    image: "./assets/image/logo-baratheon.PNG",
    theme: "baratheon",
    description: "Fundada por Orys Baratheon, esta casa é conhecida pela força, coragem e temperamento explosivo de seus membros."
  },
  {
    name: "Casa Greyjoy",
    motto: "We Do Not Sow",
    region: "As Ilhas de Ferro",
    image: "./assets/image/logo-greyjoy.PNG",
    theme: "greyjoy",
    description: "Os homens do ferro das Ilhas vivem do saque e da pesca. Adoram o Deus Afogado e seguem o Caminho Antigo."
  },
  {
    name: "Casa Tyrell",
    motto: "Growing Strong",
    region: "As Terras da Campina",
    image: "./assets/image/logo-tyrell.PNG",
    theme: "tyrell",
    description: "Senhores de Jardim de Cima, os Tyrell controlam as terras mais férteis de Westeros e são mestres em política e diplomacia."
  },
{
    name: "Casa Arryn",
    motto: "As High as Honor",
    region: "Vale de Arryn",
    image: "./assets/image/logo-arryn.png",
    theme: "arryn",
    description:"Soberanos do Vale e detentores da mais pura linhagem Ândala. Vivem no Ninho da Águia, uma fortaleza impenetrável no topo das montanhas, e prezam pela honra e pelo isolamento estratégico acima de tudo."
},
{
    name: "Casa Tully",
    motto: "Family, Duty, Honor",
    region: "As Terras do Rio",
    image: "./assets/image/logo-tully.png",
    theme: "tully",
    description: "Senhores de Correrrio e protetores das ricas bacias fluviais de Westeros. Conhecidos por sua lealdade inabalável aos laços de sangue, governam uma região central constantemente cercada por conflitos e exércitos rivais."
}
];

const characters = [
  {
    name: "Jon Snow",
    house: "Stark",
    image: "./assets/image/jhon.jpeg",
    description: "O Bastardo de Winterfell que se tornou o Rei do Norte. Comandante da Patrulha da Noite e verdadeiro herdeiro do Trono de Ferro. Conhecido por sua honra inabalável e liderança nata."
  },
  {
    name: "Daenerys Targaryen",
    house: "Targaryen",
    image: "./assets/image/daenerys.jpeg",
    description: "Mãe dos Dragões e Quebradora de Correntes. A última Targaryen em sua busca para recuperar o Trono de Ferro, libertando escravos pelo caminho."
  },
  {
    name: "Tyrion Lannister",
    house: "Lannister",
    image: "./assets/image/tyrion.jpeg",
    description: "O Gnomo de Casterly Rock. Apesar de ser menosprezado por sua família, é o mais inteligente dos Lannister. Mestre estrategista e político habilidoso."
  },
  {
    name: "Arya Stark",
    house: "Stark",
    image: "./assets/image/arya.jpeg",
    description: "A menina sem rosto. Treinou com os Homens Sem Rosto de Braavos, tornando-se uma assassina mortal em busca de vingança."
  },
  {
    name: "Bran Stark",
    house: "Stark",
    image: "./assets/image/bran.jpeg",
    description: "O Corvo de Três Olhos. Possuidor de visões do passado, presente e futuro. Acabou se tornando rei dos Seis Reinos."
  },
  {
    name: "Sansa Stark",
    house: "Stark",
    image: "./assets/image/sansa.jpeg",
    description: "Rainha do Norte. De uma jovem ingênua a uma líder astuta, aprendeu as artes da política com os melhores manipuladores de Westeros."
  },
  {
    name: "Cersei Lannister",
    house: "Lannister",
    image: "./assets/image/cersei.jpeg",
    description: "Rainha dos Sete Reinos. Ambiciosa e implacável, fará qualquer coisa para proteger seus filhos e manter o poder."
  },
  {
    name: "Jaime Lannister",
    house: "Lannister",
    image: "./assets/image/jaime.jpeg",
    description: "O Regicida. Membro da Guarda Real que matou o Rei Louco. Sua jornada de redenção o transformou de vilão em herói complexo."
  },
  {
    name: "Joffrey Baratheon",
    house: "Baratheon",
    image: "./assets/image/joffrey.jpeg",
    description: "O Rei Cruel. Um dos personagens mais odiados de Westeros, conhecido por sua crueldade sádica e tirania durante seu breve reinado."
  },
  {
    name: "Eddard Stark",
    house: "Stark",
    image: "./assets/image/eddard.jpeg",
    description: "Lorde de Winterfell e Protetor do Norte. Mão do Rei e paradigma de honra. Sua morte marcou o início da Guerra dos Cinco Reis."
  },
  {
    name: "Catelyn Stark",
    house: "Stark",
    image: "./assets/image/catelyn.jpeg",
    description: "Lady de Winterfell. Mãe devotada que faria qualquer coisa por seus filhos. Seu amor familiar a levou a decisões fatídicas."
  },
  {
    name: "Robb Stark",
    house: "Stark",
    image: "./assets/image/robb.jpeg",
    description: "O Jovem Lobo e Rei do Norte. Brilhante comandante militar cuja honra, assim como a de seu pai, levou à sua queda trágica."
  },
  {
    name: "Robert Baratheon",
    house: "Baratheon",
    image: "./assets/image/robert.jpeg",
    description: "Rei dos Sete Reinos. O grande guerreiro que derrubou a dinastia Targaryen, mas se tornou um rei beberrão e negligente."
  },
  {
    name: "Tywin Lannister",
    house: "Lannister",
    image: "./assets/image/tywin.jpeg",
    description: "Lorde de Casterly Rock. O verdadeiro poder por trás do trono. Estrategista implacável obcecado pelo legado da Casa Lannister."
  },
  {
    name: "Lord Varys",
    house: "Conselheiro",
    image: "./assets/image/lorde.jpeg",
    description: "A Aranha. Mestre dos Sussurros com uma vasta rede de espiões. Alega servir ao reino, mas seus verdadeiros objetivos são sempre misteriosos."
  },
  {
    name: "Petyr Baelish",
    house: "Littlefinger",
    image: "./assets/image/petyr.jpeg",
    description: "Mindinho. Mestre da Moeda e manipulador supremo. Iniciou a Guerra dos Cinco Reis por amor não correspondido e ambição desenfreada."
  },
  {
    name: "Theon Greyjoy",
    house: "Greyjoy",
    image: "./assets/image/theon.jpeg",
    description: "Pupilo dos Stark que traiu sua família adotiva. Sua jornada de arrogância à tortura e finalmente à redenção é uma das mais trágicas."
  },
  {
    name: "Samwell Tarly",
    house: "Tarly",
    image: "./assets/image/samwell.jpeg",
    description: "Sam, o Matador. Autodenominado covarde que se tornou um dos homens mais corajosos da Patrulha da Noite e grande meistre."
  },
  {
    name: "Hodor",
    house: "Stark",
    image: "./assets/image/hodor.jpeg",
    description: "O gentil gigante de Winterfell. Sua única palavra escondia um sacrifício heroico que salvaria Bran Stark e mudaria Westeros para sempre."
  },
  {
    name: "Jorah Mormont",
    house: "Mormont",
    image: "./assets/image/jorah.jpeg",
    description: "Cavaleiro exilado de Westeros que se tornou conselheiro leal e protetor de Daenerys, apesar de seu amor não correspondido."
  },
  {
    name: "Verme Cinzento",
    house: "Imaculado",
    image: "./assets/image/verme-cinzento.jpeg",
    description: "Comandante dos Imaculados. Guerreiro perfeito que descobriu humanidade através do amor e lealdade a Daenerys."
  },
  {
    name: "Missandei",
    house: "Conselheira",
    image: "./assets/image/missandei.jpeg",
    description: "Tradutora e conselheira de confiança de Daenerys. Sua inteligência e gentileza trouxeram humanidade ao governo da Rainha."
  },
  {
    name: "Brienne de Tarth",
    house: "Tarth",
    image: "./assets/image/brienne.jpeg",
    description: "A Donzela de Tarth. Cavaleira excepcional em um mundo de homens. Sua honra e lealdade são incomparáveis em todo Westeros."
  },
  {
    name: "Melisandre",
    house: "Sacerdotisa",
    image: "./assets/image/melisandre.jpeg",
    description: "A Mulher Vermelha. Sacerdotisa do Senhor da Luz cujos poderes místicos e profecias moldaram eventos cruciais na guerra contra os mortos."
  },
  {
    name: "Ramsay Bolton",
    house: "Bolton",
    image: "./assets/image/ramsay.jpg",
    description: "O Bastardo de Bolton. Psicopata sádico cuja crueldade superou até Joffrey. Senhor de Winterfell e terror do Norte."
  },
{
     name: "Sandor Clegane(O Perdigueiro)",
    house: "Clegane",
    image: "./assets/image/perdigueiro.jpg",
    description: "O Cão de Caça. Um guerreiro formidável marcado pelo fogo e pelo niilismo. Escondido atrás de uma máscara de brutalidade e desprezo pela cavalaria, trilhou um caminho tortuoso entre a vilania e a redenção."

},
{
     name: "Khal Drogo",
    house: "Dothraki",
    image: "./assets/image/khal-drogo.jpg",
    description: "O Grande Khal. Um senhor da guerra lendário que nunca foi derrotado em batalha. Líder do maior khalasar do Mar Dothraki, cuja força bruta e presença imponente deram início à ascensão de Daenerys Targaryen." 

},
{
     name: "Bronn",
    house: "Blackwater",
    image: "./assets/image/bronn.jpg",
    description: "O Mercenário de Aluguel. Um espadachim pragmático e astuto que subiu na hierarquia social através do sarcasmo e da letalidade. Sua lealdade pertence a quem pagar mais, preferencialmente em ouro e castelos."

}];

const revealElements = () => {
    const reveals = document.querySelectorAll('[data-reveal]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100); 
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(element => observer.observe(element));
};


let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});


const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.textContent = navList.classList.contains('active') ? '✕' : '☰';
    });
    
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });
}

const housesContainer = document.getElementById("houses-container");

houses.forEach((house, index) => {
    const card = document.createElement("div");
    card.classList.add("house-card");
    card.setAttribute('data-reveal', '');
    card.dataset.house = house.theme;
    
    card.innerHTML = `
        <img src="${house.image}" alt="Brasão da ${house.name}">
        <div class="house-content">
            <h2>${house.name}</h2>
            <p>${house.motto}</p>
        </div>
    `;
    
    housesContainer.appendChild(card);
    
    card.addEventListener("click", () => {
        openModal(house);
    });
});

const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");

function openModal(house) {
    const modalContent = document.querySelector("#modal .modal-content");
    
    modal.classList.add("active");
    document.body.classList.add("modal-open");
    
    modalContent.className = "modal-content";
    modalContent.classList.add(house.theme);
    
    document.getElementById("modalImage").src = house.image;
    document.getElementById("modalName").textContent = house.name;
    document.getElementById("modalMotto").textContent = `"${house.motto}"`;
    document.getElementById("modalRegion").innerHTML = `
        <strong>Região:</strong> ${house.region}<br>
        <span style="margin-top: 1rem; display: block; font-size: 1rem; line-height: 1.6;">
            ${house.description}
        </span>
    `;
}

function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }
});

const houseFilterButtons = document.querySelectorAll(".filters button");
const houseCards = document.querySelectorAll(".house-card");

houseFilterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        
        houseFilterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        
        houseCards.forEach((card, index) => {
            setTimeout(() => {
                if (filter === "all" || card.dataset.house === filter) {
                    card.classList.remove("house-card-inactive");
                } else {
                    card.classList.add("house-card-inactive");
                }
            }, index * 50);
        });
        
        // ADICIONE ESTAS LINHAS AQUI:
        setTimeout(() => {
            document.querySelector('#houses').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 300); // Espera um pouco para a animação dos cards
    });
});


const charactersContainer = document.getElementById("characters-container");

characters.forEach((character, index) => {
    const card = document.createElement("div");
    card.classList.add("character-card");
    card.setAttribute('data-reveal', '');
    
    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <span>${character.house}</span>
    `;
    
    charactersContainer.appendChild(card);
    
    card.addEventListener("click", () => {
        openCharacterModal(character);
    });
});


const characterModal = document.getElementById("character-modal");
const closeCharacterModalBtn = document.getElementById("closeCharacterModal");

function openCharacterModal(character) {
    const characterModalContent = document.querySelector("#character-modal .modal-content");
    
    characterModal.classList.add("active");
    document.body.classList.add("modal-open");
    
    characterModalContent.className = "modal-content";
    characterModalContent.classList.add(character.house.toLowerCase());
    
    document.getElementById("characterModalImage").src = character.image;
    document.getElementById("characterModalName").textContent = character.name;
    document.getElementById("characterModalDescription").innerHTML = `
        <strong style="color: var(--gold); font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">
            ${character.house}
        </strong>
        ${character.description}
    `;
}

function closeCharacterModal() {
    characterModal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

closeCharacterModalBtn.addEventListener("click", closeCharacterModal);

characterModal.addEventListener("click", (event) => {
    if (event.target === characterModal) {
        closeCharacterModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && characterModal.classList.contains("active")) {
        closeCharacterModal();
    }
});

const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (hero && scrolled < hero.offsetHeight) {
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const createCursorEffect = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--gold);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.15s ease, opacity 0.15s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '0.6';
    });
    
    const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
        requestAnimationFrame(animateCursor);
    };
    
    document.querySelectorAll('a, button, .house-card, .character-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(1.5)';
            cursor.style.borderColor = 'var(--gold-light)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
            cursor.style.borderColor = 'var(--gold)';
        });
    });
    
    animateCursor();
};

if (window.innerWidth > 1024) {
    createCursorEffect();
}

window.addEventListener('load', () => {
    
    revealElements();
    
    
    document.body.classList.add('loaded');
    
    console.log('%c🐉 Game of Thrones Website Loaded', 'color: #c9a227; font-size: 20px; font-weight: bold;');
});


if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


});