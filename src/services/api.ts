export const fetchCharacters = async (page:string) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if (!response.ok) {
        throw new Error('Failed to fetch characters');
    }
    return response.json();
};
