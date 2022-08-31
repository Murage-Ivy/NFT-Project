function fetchNftData() {
    const apiHost = '  http://localhost:3000'
    return fetch(`${apiHost}/collections`)
        .then(res => res.json())
        .then(collections => {
            console.log(collections);
            collections.forEach(collection => {
                const collectionCards = document.querySelector('.collection-cards')
                const div = document.createElement('div');
                div.className = 'collection-card'
                const link = document.createTextNode('Collection Link');
                const image = document.createElement('img');
                const h4 = document.createElement('h4');
                const aHref = document.createElement('a');

                image.src = collection.collection_image;
                h4.textContent = `${collection.collection_name}`;
                aHref.href = `${collection.Collection_url}`
                aHref.appendChild(link)

                div.appendChild(image);
                div.appendChild(h4);
                div.appendChild(aHref)
                collectionCards.appendChild(div);

                console.log(aHref)

            });
        })
        .catch(err => console.log(err))


}

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

    button.addEventListener('click', () => {
        alert('Fill the contact form to Join the Nefte Club');

    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchNftData()
    submitData()
    joinFunction()
})