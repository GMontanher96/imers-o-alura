const restaurants = [
    {
      "nome": "Restaurante",
      "endereco": "Rua das Flores, 123",
      "cidade": "São Paulo"
    },
    {
      "nome": "Café Gourmet",
      "endereco": "Avenida Paulista, 456",
      "cidade": "São Paulo"
    },
    {
      "nome": "Pizzaria Bella Italia",
      "endereco": "Rua dos Pães, 789",
      "cidade": "Campinas"
    },
    {
      "nome": "Churrascaria do Sul",
      "endereco": "Avenida Brasil, 1010",
      "cidade": "Reginopólis"
    },
    {
        "nome": "Churrascaria BRASIL",
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