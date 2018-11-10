import {createElem} from "./common";
import {CardData, CardElements, CardState, CardWeight, PropertyState} from "./interfaces/card.interface";

export class Card {

    topPhrase: PropertyState;
    bottomText: PropertyState;
    cardTitle: string;
    taste: string;
    benefits: string[];
    weight: CardWeight;

    private state: CardState = 'default';

    constructor(cardData: CardData, container: HTMLElement) {
        this.topPhrase = cardData.topPhrase;
        this.taste = cardData.taste;
        this.benefits = cardData.benefits;
        this.weight = cardData.weight;
        this.bottomText = cardData.bottomText;
        this.cardTitle = cardData.cardTitle;
        this.state = cardData.state ? cardData.state as CardState : this.state;

        this.renderCard(container);
    }

    getElementsFromWrap(cardWrap: HTMLElement): CardElements {
        let card = cardWrap.querySelector('.cards__card');
        let bottomText = cardWrap.querySelector('.cards__bottom-text');
        let buyButton = bottomText.querySelector('.cards__buy-link');
        let topPhrase = card.querySelector('.cards__top-phrase');

        return {card, bottomText, buyButton, topPhrase};
    }

    cardClick(elements: any) {
        switch (this.state) {
            case 'selected':
                this.makeStateDefault(elements);
                break;
            case 'disabled':
                return;
            default:
                this.makeStateSelected(elements);
        }
    }

    cardHover(elems: CardElements) {
        if (this.state !== 'selected') return;
        elems.card.className = `cards__card cards__card_${this.state}-hovered`;
        elems.topPhrase.innerHTML = `<div class="cards__top-phrase">${this.topPhrase['selectedHovered']}</div>`;
    }

    cardOut(elems: CardElements) {
        if (this.state !== 'selected') return;
        elems.card.className = `cards__card cards__card_${this.state}`;
        elems.topPhrase.innerHTML = `<div class="cards__top-phrase">${this.topPhrase[this.state]}</div>`;
    }

    makeStateSelected(elems: CardElements) {
        this.state = 'selected';
        elems.card.className = 'cards__card cards__card_selected';
        elems.bottomText.innerHTML = `${this.bottomText[this.state]}`;
    }

    makeStateDefault(elems: CardElements) {
        this.state = 'default';
        elems.card.className = `cards__card cards__card_${this.state}`;
        elems.bottomText.innerHTML = `${this.bottomText[this.state]}`;
        elems.topPhrase.innerHTML = `<div class="cards__top-phrase">${this.topPhrase[this.state]}</div>`;

        let buyButton = elems.bottomText.querySelector('.cards__buy-link');
        if (buyButton) buyButton.addEventListener('click', this.makeStateSelected.bind(this, elems));
    }

    private renderCard(container: HTMLElement) {
        let innerHTML: string = `
              <div class="cards__card cards__card_${this.state}">
              
                <div class="cards__top-phrase">${this.topPhrase[this.state]}</div>
                <div class="cards__title">${this.cardTitle}</div>
                <div class="cards__title-small">${this.taste}</div>
                
                <ul class="cards__benefits">
                    ${this.benefits.map((benefit) => `<li class="cards__benefit">${benefit}</li>`).join('')}
                </ul>
                
                <div class="cards__weight">
                  <div class="cards__weight-num">${this.weight.num}</div>
                  <div class="cards__weight-desc">${this.weight.desc}</div>
                </div>
                
              </div>
              
              <div class="cards__bottom-text cards__bottom-text_${this.state}">${this.bottomText[this.state]}</div>
        `;

        let cardWrap = createElem('li', 'cards__wrap', innerHTML);
        let elems: CardElements = this.getElementsFromWrap(cardWrap);

        elems.card.addEventListener('click', this.cardClick.bind(this, elems));
        elems.card.addEventListener('mouseover', this.cardHover.bind(this, elems));
        elems.card.addEventListener('mouseout', this.cardOut.bind(this, elems));
        if (elems.buyButton) elems.buyButton.addEventListener('click', this.makeStateSelected.bind(this, elems));

        container.appendChild(cardWrap);
    }
}