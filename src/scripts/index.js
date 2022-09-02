function fetchNftData() {
    const apiHost = '  http://localhost:3000';

    return fetch(`${apiHost}/collections`)
        .then(res => res.json())
        .then(collections => {
            console.log(collections);
            collections.forEach(collection => {
                // grab the collections-cards div to store cards
                const collectionCards = document.querySelector('.collection-cards')
                const div = document.createElement('div');
                div.className = 'collection-card'

                // create new elements to store nft information
                const link = document.createTextNode('Collection Link');
                const image = document.createElement('img');
                const h4 = document.createElement('h4');
                const aHref = document.createElement('a');
                const button = document.createElement('button');
                const span = document.createElement('span');
                span.className = 'likes'
                button.className = 'like-button'



                // add textnodes between the tags
                image.src = collection.collection_image;
                h4.textContent = `${collection.collection_name}`;
                aHref.href = `${collection.Collection_url}`;
                button.innerHTML = `<i class="fa-solid fa-heart"></i>`;
                span.textContent = '0 likes'
                aHref.appendChild(link)

                // append the div cards on the collection-cards div
                div.appendChild(image);
                div.appendChild(h4);
                div.appendChild(aHref);
                div.appendChild(button)
                div.appendChild(span)
                collectionCards.appendChild(div);


            });
        })
        .catch(err => {
            console.log(err)
            collectionCards.textContent = `${err.message}`

        })


}

// when a user clicks the submit button the input fields are cleared
function submitData() {
    const form = document.querySelector('.contact-form');
    console.log(form)
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const firstName = document.querySelector('#first-name').value
        const secondName = document.querySelector('#second-name').value;
        const emailsName = document.querySelector('#email').value;
        console.log(firstName);
        console.log(secondName);
        console.log(emailsName);

        e.target.reset();
    })

    const emailForm = document.querySelector('.update-emails');
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputValue = document.querySelector('.update-input').value;
        e.target.reset();

    })
}

function joinFunction() {
    const button = document.querySelector('#join-btn');
    // adds an event listener when the user clicks the join us button
    // when user clicks it the a text message is displayed 
    button.addEventListener('click', () => {
        alert('Fill the contact form to Join the Nefte Club');

    })
}
// on load of the dom the following functions are called 
document.addEventListener('DOMContentLoaded', () => {
    fetchNftData()
    submitData()
    joinFunction()
})