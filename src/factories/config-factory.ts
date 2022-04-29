import { Character, SimpleCharacter } from '../domain/model/Character';

export const transformCharacterDtoToModel = (character: Character) => ({
    name: character.name,
    status: character.status,
    species: character.species,
    image: character.image,
    created: character.created,
    gender: character.gender,
    id: character.id,
    location: character.location,
    origin: character.origin,
    type: character.type,
    url: character.url,
});

export const transformListCharacterDtoToModel = (configListDto: Character[]) => {
    return configListDto.map((character: SimpleCharacter) => {
        return {
            name: character.name,
            status: character.status,
            species: character.species,
            image: character.image,
        };
    });
};
