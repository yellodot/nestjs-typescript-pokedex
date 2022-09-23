export interface IPokemonMin {
    name: string;
    url: string;
}

export interface IPokemon {
    abilities: IAbility[];
    forms: IForm[];
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    species: ISpecies;
    stats: IStat[];
    weight: number;
    sprites: any;
}

interface IAbility {
    ability: Ability2;
    is_hidden: boolean;
    slot: number;
}

interface Ability2 {
    name: string;
    url: string;
}

interface IForm {
    name: string;
    url: string;
}

interface ISpecies {
    name: string;
    url: string;
}

interface IStat {
    base_stat: number;
    effort: number;
    stat: Stat2;
}

interface Stat2 {
    name: string;
    url: string;
}