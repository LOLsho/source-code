import {CardData, PropertyState} from "../interfaces/card.interface";


const commonTopPhrase: PropertyState = {
    default: 'Сказочное заморское яство',
    selected: 'Сказочное заморское яство',
    disabled: 'Сказочное заморское яство',
    selectedHovered: 'Котэ не одобряет?',
};
const commonBottomPhrase: PropertyState = {
    default: 'Чего сидишь? Порадуй котэ, <span class="cards__buy-link">купи.</span>',
};
const tastes: string[] = ['с фуа-гра', 'с рыбой', 'с курой'];
const cardTitle: string = 'Нямушка';



export const mockCardsData: CardData[] = [
    {
        state: 'selected', // 'default' | 'selected' | 'disabled'
        cardTitle: cardTitle,
        topPhrase: commonTopPhrase,
        bottomText: {
            ...commonBottomPhrase,
            selected: 'Печень утки разварная с артишоками.',
            disabled: `Печалька, ${tastes[0]} закончился.`
        },
        taste: tastes[0],
        benefits: [
            '<span class="cards__bold-num">10</span> порций',
            'мышь в подарок',
        ],
        weight: {
            num: '0,5',
            desc: 'кг'
        }
    },
    {
        state: 'default', // 'default' | 'selected' | 'disabled'
        cardTitle: cardTitle,
        topPhrase: commonTopPhrase,
        bottomText: {
            ...commonBottomPhrase,
            selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            disabled: `Печалька, ${tastes[1]} закончился.`
        },
        taste: tastes[1],
        benefits: [
            '<span class="cards__bold-num">40</span> порций',
            '<span class="cards__bold-num">2</span> мыши в подарок',
        ],
        weight: {
            num: '2',
            desc: 'кг'
        }
    },
    {
        state: 'default', // 'default' | 'selected' | 'disabled'
        cardTitle: cardTitle,
        topPhrase: commonTopPhrase,
        bottomText: {
            ...commonBottomPhrase,
            selected: 'Филе из цыплят с трюфелями в бульоне.',
            disabled: `Печалька, ${tastes[2]} закончился.`
        },
        taste: tastes[2],
        benefits: [
            '<span class="cards__bold-num">100</span> порций',
            '<span class="cards__bold-num">5</span> мышей в подарок',
            'заказчик доволен',
        ],
        weight: {
            num: '5',
            desc: 'кг'
        }
    },
    {
        state: 'default', // 'default' | 'selected' | 'disabled'
        cardTitle: cardTitle,
        topPhrase: commonTopPhrase,
        bottomText: {
            ...commonBottomPhrase,
            selected: 'Печень утки разварная с артишоками.',
            disabled: `Печалька, ${tastes[0]} закончился.`
        },
        taste: tastes[0],
        benefits: [
            '<span class="cards__bold-num">10</span> порций',
            'мышь в подарок',
        ],
        weight: {
            num: '0,5',
            desc: 'кг'
        }
    },
    {
        state: 'disabled', // 'default' | 'selected' | 'disabled'
        cardTitle: cardTitle,
        topPhrase: commonTopPhrase,
        bottomText: {
            ...commonBottomPhrase,
            selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            disabled: `Печалька, ${tastes[1]} закончился.`
        },
        taste: tastes[1],
        benefits: [
            '<span class="cards__bold-num">40</span> порций',
            '<span class="cards__bold-num">2</span> мыши в подарок',
        ],
        weight: {
            num: '2',
            desc: 'кг'
        }
    },
    {
        state: 'disabled', // 'default' | 'selected' | 'disabled'
        cardTitle: cardTitle,
        topPhrase: commonTopPhrase,
        bottomText: {
            ...commonBottomPhrase,
            selected: 'Филе из цыплят с трюфелями в бульоне.',
            disabled: `Печалька, ${tastes[2]} закончился.`
        },
        taste: tastes[2],
        benefits: [
            '<span class="cards__bold-num">100</span> порций',
            '<span class="cards__bold-num">5</span> мышей в подарок',
            'заказчик доволен',
        ],
        weight: {
            num: '5',
            desc: 'кг'
        }
    },
    {
        state: 'default', // 'default' | 'selected' | 'disabled'
        cardTitle: cardTitle,
        topPhrase: commonTopPhrase,
        bottomText: {
            ...commonBottomPhrase,
            selected: 'Печень утки разварная с артишоками.',
            disabled: `Печалька, ${tastes[0]} закончился.`
        },
        taste: tastes[0],
        benefits: [
            '<span class="cards__bold-num">10</span> порций',
            'мышь в подарок',
        ],
        weight: {
            num: '0,5',
            desc: 'кг'
        }
    },
    {
        state: 'disabled', // 'default' | 'selected' | 'disabled'
        cardTitle: cardTitle,
        topPhrase: commonTopPhrase,
        bottomText: {
            ...commonBottomPhrase,
            selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            disabled: `Печалька, ${tastes[1]} закончился.`
        },
        taste: tastes[1],
        benefits: [
            '<span class="cards__bold-num">40</span> порций',
            '<span class="cards__bold-num">2</span> мыши в подарок',
        ],
        weight: {
            num: '2',
            desc: 'кг'
        }
    },
    {
        state: 'default', // 'default' | 'selected' | 'disabled'
        cardTitle: cardTitle,
        topPhrase: commonTopPhrase,
        bottomText: {
            ...commonBottomPhrase,
            selected: 'Филе из цыплят с трюфелями в бульоне.',
            disabled: `Печалька, ${tastes[2]} закончился.`
        },
        taste: tastes[2],
        benefits: [
            '<span class="cards__bold-num">100</span> порций',
            '<span class="cards__bold-num">5</span> мышей в подарок',
            'заказчик доволен',
        ],
        weight: {
            num: '5',
            desc: 'кг'
        }
    },
];