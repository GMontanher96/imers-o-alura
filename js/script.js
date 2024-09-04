
// menu

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});




const jsonURL = '../../pizzas.json';



function pizzas() {
    fetch(jsonURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const listaPizzas = document.getElementById('pizza-list');

            if (data.pizzas) {
                data.pizzas.forEach(pizza => {
                    const cardPizza = document.createElement('div');
                    cardPizza.classList.add('pizza-card');

                    cardPizza.innerHTML = `
                        <img src="${pizza.imagem}" alt="${pizza.name}">
                        <h3>${pizza.name}</h3>
                        <p>${pizza.description}</p>
                        <p class="preco">${pizza.price}</p>
                        <button onclick="addPizza('${pizza.name}')">Comprar</button>
                    `;

                    listaPizzas.appendChild(cardPizza);
                });
            } else {
                listaPizzas.innerHTML = '<p>Error ao exibir o cardapio.</p>';
            }
        })
        .catch(error => {
            console.error('Erro ao consumir o JSON:', error);
            document.getElementById('pizza-list').innerHTML = '<p>Error ao exibir o cardapio.</p>';
        });
}

function addPizza(name) {
    alert(`Você clicou em comprar a pizza: ${name}`);
}

pizzas();

