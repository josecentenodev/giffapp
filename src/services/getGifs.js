const api_key = '31FaTPvJvHREokfDyO5bPTbC3Bu9JxNr'


export default function getGifs({keyword = 'panda'}={}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const {images, title, id} = image
                const {url} = images.downsized_medium
                return {title, id, url}
            })
            return gifs
        })
}