export interface PropertyState {
    default: string;
    defaultHovered?: string;
    selected?: string;
    selectedHovered?: string;
    disabled?: string;
}

export interface CardWeight {
    num: string;
    desc: string;
}

export interface CardData {
    topPhrase: PropertyState;
    bottomText: PropertyState;
    taste: string;
    benefits?: string[];
    weight: CardWeight;
    state?: string;
    cardTitle: string;
}

export interface CardElements {
    card: Element;
    bottomText: Element;
    buyButton: Element;
    topPhrase: Element;
}

export type CardState = 'default' | 'selected' | 'disabled';