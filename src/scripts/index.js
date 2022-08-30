function fetchNftData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e7e7730bf7mshbeec5b1c0cc217bp1faa6ajsn05a7a5785127',
            'X-RapidAPI-Host': 'top-nft-collections-and-sales.p.rapidapi.com'
        }
    };

    return fetch('https://top-nft-collections-and-sales.p.rapidapi.com/collections/30d', options)
        .then(response => response.json())
        .then(response => {
            const newsCards = document.querySelector('.collection-card');
            console.log(newsCards)



            for (let i = 0; i <= 7; i++) {
                const img = document.createElement('img')
                const a_href = document.createElement('a');
                const h4 = document.createElement('h4');
                let link = document.createTextNode(`${response[i].collection_name}`);
                a_href.appendChild(link)
                a_href.href = `${response[i].collection_url}`
                a_href.title = `${response[i].collection_name}`
                console.log(response[i].collection_url)
                document.querySelector('.collection-card').appendChild(a_href)
            }

        })
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', () => {
    fetchNftData()
})