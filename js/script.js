const restaurants = [
    {
      "nome": "Restaurante José Botiquin",
      "endereco": "Rua Antonio Garcia de Almeida, 90",
      "cidade": "Rio de Janeiro"
    },
    {
      "nome": "Café Gostoso",
      "endereco": "Avenida Comendador da Silva Martha, 120",
      "cidade": "Bauru"
    },
    {
      "nome": "Pizzaria Bella Italia",
      "endereco": "Rua Marvel, 89",
      "cidade": "Iacanga"
    },
    {
      "nome": "Churrascaria do Sul",
      "endereco": "Avenida Brasil, 1010",
      "cidade": "Reginopólis"
    },
    {
      "nome": "Marmitaria da Lurdes",
      "endereco": "Antonio Garcia de Almeida, 95",
      "cidade": "Reginopólis"
    },
    {
      "nome": "Machado Lanches",
      "endereco": "Antonio Fagundes de Souza, 44",
      "cidade": "Pirajui"
    },
    {
        "nome": "Lanches BRASIL",
        "endereco": "Orlando Ranieri, 1010",
        "cidade": "Bauru"
      }
  ];


  document.getElementById('searchIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    const card = document.getElementById('searchCard');
    const resultsList = document.getElementById('resultsList');
  
    if (searchInput !== '') {
      // Filtra os restaurantes com base no nome ou na cidade
      const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.nome.toLowerCase().includes(searchInput) ||
        restaurant.cidade.toLowerCase().includes(searchInput)
      );
  
      // Limpa resultados antigos
      resultsList.innerHTML = '';
  
      if (filteredRestaurants.length > 0) {
        filteredRestaurants.forEach(restaurant => {
          const listItem = document.createElement('li');
          listItem.textContent = `${restaurant.nome} - ${restaurant.endereco}, ${restaurant.cidade}`;
          resultsList.appendChild(listItem);
        });
        card.classList.remove('hidden');
      } else {
        resultsList.innerHTML = '<li>Nenhum resultado encontrado.</li>';
        card.classList.remove('hidden');
      }
    } else {
      card.classList.add('hidden');
    }
  });

  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpar erros
    document.getElementById('nomeError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('telefoneError').textContent = '';

    // Obter valores dos campos
    var nome = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefone = document.getElementById('phone').value.trim();

    var isValid = true;

    // Validação do nome
    if (nome === '') {
        document.getElementById('nomeError').textContent = 'O nome completo é obrigatório.';
        isValid = false;
    }

    // Validação do email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'O email fornecido é inválido.';
        isValid = false;
    }

    // Validação do telefone 
    var telefoneRegex = /^\d{10,11}$/;
    if (!telefoneRegex.test(telefone)) {
        document.getElementById('telefoneError').textContent = 'O telefone deve conter 10 ou 11 dígitos.';
        isValid = false;
    }

  //enviar o formulário
    if (isValid) {
        alert('Formulário enviado com sucesso!');
    }
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('modal').classList.add('hidden');
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('menu-modal');
  const openBtn = document.getElementById('open-menu');
  const closeBtn = document.querySelector('.close-btn');

  if (openBtn && modal && closeBtn) {
      openBtn.addEventListener('click', () => {
          modal.style.display = 'block';
      });

      closeBtn.addEventListener('click', () => {
          modal.style.display = 'none';
      });

      window.addEventListener('click', (event) => {
          if (event.target === modal) {
              modal.style.display = 'none';
          }
      });
  }
});
