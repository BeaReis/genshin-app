export interface skillTalent {
    name: string
    unlock: string
    description: string
    type: string
}

export interface passiveTalent {
    name: string
    unlock: string
    description: string
    level: number
}

export interface constellation {
    name: string
    unlock: string
    description: string
    level: number
}

export default interface CharacterStats {
    name: string
    vision: string
    weapon: string
    nation: string
    affiliation: string
    rarity: number
    constellation: string
    birthday: string
    description: string
    skillTalents: skillTalent[]
    passiveTalents: passiveTalent[]
    constellations: constellation[]
    vision_key: string
    weapon_type: string
}