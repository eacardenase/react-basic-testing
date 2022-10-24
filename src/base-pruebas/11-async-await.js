export const getImagen = async (apiKey) => {
    const URL = 'https://api.giphy.com/v1/gifs/random';

    try {
        const resp = await fetch(`${URL}?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        return url;
    } catch (error) {
        throw new Error('Image not found');
    }
};
