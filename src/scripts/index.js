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
                const image = document.createElement('img');
                const h4 = document.createElement('h4');
                const aHref = document.createElement('a');

                image.src = collection.collection_image;
                div.appendChild(image)
                collectionCards.appendChild(div)

                console.log(image)
                
            });
        })
        .catch(err => console.log(err.message))


}

document.addEventListener('DOMContentLoaded', () => {
    fetchNftData()
})