console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

const input = document.querySelector('input');
input.addEventListener('input', addtext);

function addtext() {
    let inputadd = document.querySelector('input');
    let addedtext = inputadd.value;

    // if (addedtext == '') {
    //     alert('please add some text');
    //     return;
    // } else {
    //     li.innerHTML = tags;
    //     document.querySelector('ul').appendChild(li);
    // }
    const result = products.filter(product => product.name.toLowerCase().includes(addedtext.toLowerCase()));
    console.log(result);

    function renderProducts(products) {
        productsUl.innerHTML = ''
        products.forEach(product => {
            const li = document.createElement('li');

            let shipsToHTML = '';
            product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

            li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
            productsUl.appendChild(li);
        });
    }

    renderProducts(result);
}