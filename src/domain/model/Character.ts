export interface Character {
    name: string;
    status: string;
    species: string;
    image: string;
    created: string;
    gender: string;
    id: number;
    location: LocationCharacter;
    origin: OriginCharacter;
    type: string;
    url: string;
}

export interface SimpleCharacter {
    name: string;
    status: string;
    species: string;
    image: string;
}

interface LocationCharacter {
    name: string;
    url: string;
}
interface OriginCharacter {
    name: string;
    url: string;
}
