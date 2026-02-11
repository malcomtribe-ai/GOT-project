document.addEventListener("DOMContentLoaded", () => {
    
const houses = [
  {
    name: "Casa Stark",
    motto: "Winter is Coming",
    region: "O Norte",
    image: "./assets/image/logo-stark.PNG",
    theme: "stark"
  },
  {
    name: "Casa Lannister",
    motto: "Hear Me Roar",
    region: "As Terras Ocidentais",
    image: "./assets/image/logo-lannister.PNG",
    theme: "lannister"
  },
  {
    name: "Casa Targaryen",
    motto: "Fire and Blood",
    region: "Terras da Coroa",
    image: "./assets/image/logo-targaryen.PNG",
    theme: "targaryen"
  },
  {
    name: "Casa Baratheon",
    motto: "Ours is the Fury",
    region: "As Terras da Tempestade",
    image: "./assets/image/logo-baratheon.PNG",
    theme: "baratheon"
  },
  {
    name: "Casa Greyjoy",
    motto: "We Do Not Sow",
    region: "As Ilhas de Ferro",
    image: "./assets/image/logo-greyjoy.PNG",
    theme: "greyjoy"    
  },
  {
    name: "Casa Tyrell",
    motto: "Growing Strong",
    region: "As Terras da Campina",
    image: "./assets/image/logo-tyrell.PNG",
    theme: "tyrell" 
  }
];

const characters = [
  {
    name: "Jon Snow",
    house: "Stark",
    image: "./assets/image/jhon.jpeg",
    description: "Bastardo de Winterfell, criado pelos Stark e forjado pela Patrulha da Noite."
  },
  {
    name: "Daenerys Targaryen",
    house: "Targaryen",
    image: "./assets/image/daenerys.jpeg",
    description: "Última herdeira da Casa Targaryen, em busca de retomar o trono perdido."
  },
  {
    name: "Tyrion Lannister",
    house: "Lannister",
    image: "./assets/image/tyrion.jpeg",
    description: "O anão de Casterly Rock, conhecido por sua inteligência e sagacidade."
  },
  {
    name: "Arya Stark",
    house: "Stark",
    image: "./assets/image/arya.jpeg",
    description: "A filha mais jovem de Ned Stark, treinada para matar e sobreviver."
  },
  {
    name: "Bran Stark",
    house: "Stark",
    image: "./assets/image/bran.jpeg",
    description: "O alejado, que sobreviveu além da Muralha e voltou como corvo de três olhos para governar."
  },
  {
    name: "Sansa Stark",
    house: "Stark",
    image: "./assets/image/sansa.jpeg",
    description: "A filha mais velha de Ned Stark, que aprendeu a sobreviver em um mundo cruel."
  },
  {
    name: "Cersei Lannister",
    house: "Lannister",
    image: "./assets/image/cersei.jpeg",
    description: "A irmã mais velha de Tyrion, rainha dos sete reinos."
  },
  {
    name: "Jaime Lannister",
    house: "Lannister",
    image: "./assets/image/jaime.jpeg",
    description: "O irmão mais velho de Cersei, conhecido como o assasino do rei."
  },
  {
    name: "Joffrey Baratheon",
    house: "Baratheon",
    image: "./assets/image/joffrey.jpeg",
    description: "O filho de Cersei e Jaime, rei dos sete reinos."
  },
  {
   name: "Eddard Stark",
    house: "Stark",
    image: "./assets/image/eddard.jpeg",
    description: "O pai de Robb, Arya, Sansa e Bran, conhecido como o 'Ned'. Lorde de Winterfell e Mão do Rei."
  },
  {
     name: "Catelyn Stark",
    house: "Stark",
    image: "./assets/image/catelyn.jpeg",
    description: "A esposa de Eddard Stark, conhecida por sua força e lealdade."
  },
  {
     name: "Robb Stark",
    house: "Stark",
    image: "./assets/image/robb.jpeg",
    description: "O filho mais velho de Eddard Stark, conhecido como o 'Rei do Norte'."
  },
  {
     name: "Robert Baratheon",
    house: "Baratheon",
    image: "./assets/image/robert.jpeg",
    description: "O rei dos sete reinos, conhecido por sua força e coragem."
  },
   {
     name: "Tywin Lannister",
    house: "Lannister",
    image: "./assets/image/tywin.jpeg",
    description: "O pai de Jaime, Cersei e Tyrion, conhecido por sua astúcia em estratégia e poder."
  },
  {
  name: "Lord Vareys",
    house: "conselheiro",
    image: "./assets/image/lorde.jpeg",
    description: "O mestre dos sussurros, conhecido por sua rede de espionagem e manipulação política."
  },
  {
  name: "Petyr Baelish",
    house: "Littlefinger",
    image: "./assets/image/petyr.jpeg",
    description: "Conhecido como Mindinho, é um mestre da manipulação e intriga política."
  },
  {
  name: "Theon Greyjoy",
    house: "Greyjoy",
    image: "./assets/image/theon.jpeg",
    description: "Filho adotivo dos Stark, enfrenta um conflito interno entre sua lealdade à família adotiva e suas raízes Greyjoy."
  },
   {
  name: "Samwell Tarly",
    house: "Tarly",
    image: "./assets/image/samwell.jpeg",
    description: "Um estudioso e amigo de Jon Snow, conhecido por sua lealdade e sabedoria."
  },
   {
  name: "Hodor",
    house: "Stark",
    image: "./assets/image/hodor.jpeg",
    description: "Um gigante leal de Winterfell, conhecido por sua força e lealdade ao reino do Norte."
  },
   {
  name: "Jorah Mormont",
    house: "Mormont",
    image: "./assets/image/jorah.jpeg",
    description: "Um cavaleiro leal e corajoso, conhecido por sua lealdade ao reino e sua habilidade em combate."
  },
   {
  name: "Verme Cinzento",
    house: "Imaculado",
    image: "./assets/image/verme-cinzento.jpeg",
    description: "Líder dos Imaculados, conhecido por sua habilidade em combate e lealdade a Daenerys Targaryen."
  },
   {
  name: "Missandei",
    house: "conselheira",
    image: "./assets/image/missandei.jpeg",
    description: "A conselheira de Daenerys Targaryen, conhecida por sua sabedoria e lealdade."
  },
   {
  name: "Brienne de Tarth",
    house: "Tarth",
    image: "./assets/image/brienne.jpeg",
    description: "Uma cavaleira leal e corajosa, conhecida por sua habilidade em combate e lealdade ao reino."
  },
   {
  name: "Melisandre",
    house: "Sacerdotisa",
    image: "./assets/image/melisandre.jpeg",
    description: "Uma sacerdotisa do Senhor da Luz, conhecida por seus poderes místicos e influência política."
  },
   {
  name: "Ramsay Bolton",
    house: "Bolton",
    image: "./assets/image/ramsay.jpg",
    description: "O filho de Roose Bolton, conhecido por sua crueldade e astúcia."
  }
];

// ========== HOUSES ==========
const housesContainer = document.getElementById("houses-container");

houses.forEach(house => {
  const card = document.createElement("div");
  card.classList.add("house-card");
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

// Houses Modal
const modal = document.getElementById("modal");

function openModal(house) {
    const modalContent = document.querySelector("#modal .modal-content");
    modal.classList.add("active");
    document.body.classList.add("modal-open");
    
    modalContent.className = "modal-content";
    modalContent.classList.add(house.theme);
    
    document.getElementById("modalImage").src = house.image;
    document.getElementById("modalName").textContent = house.name;
    document.getElementById("modalMotto").textContent = house.motto;
    document.getElementById("modalRegion").textContent = `Região: ${house.region}`;
}

const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
});

// Houses Filter
const houseFilterButtons = document.querySelectorAll(".filters button");
const houseCards = document.querySelectorAll(".house-card");

houseFilterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    houseFilterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    houseCards.forEach(card => {
      if (filter === "all" || card.dataset.house === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ========== CHARACTERS ==========
const charactersContainer = document.getElementById("characters-container");

characters.forEach(character => {
  const card = document.createElement("div");
  card.classList.add("character-card");

  card.innerHTML = `
    <img src="${character.image}" alt="${character.name}">
    <h3>${character.name}</h3>
    <span>${character.house}</span>
    <p>${character.description}</p>
  `;

  charactersContainer.appendChild(card);
  card.addEventListener("click", () => {
    openCharacterModal(character);
  });
});

// Characters Modal
const characterModal = document.getElementById("character-modal");

function openCharacterModal(character) {
  const characterModalContent = document.querySelector("#character-modal .modal-content");
  characterModal.classList.add("active");
  document.body.classList.add("modal-open");
  
  characterModalContent.className = "modal-content";
  characterModalContent.classList.add(character.house.toLowerCase());
  
  document.getElementById("characterModalImage").src = character.image;
  document.getElementById("characterModalName").textContent = character.name;
  document.getElementById("characterModalDescription").textContent = character.description;
}

const closeCharacterModal = document.getElementById("closeCharacterModal");

closeCharacterModal.addEventListener("click", () => {
  characterModal.classList.remove("active");
  document.body.classList.remove("modal-open");
});

characterModal.addEventListener("click", (event) => {
  if (event.target === characterModal) {
    characterModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && characterModal.classList.contains("active")) {
    characterModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
});

}); // Fechamento do DOMContentLoaded