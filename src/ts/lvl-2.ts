import {Card} from "./card";
import {mockCardsData} from "./mock-data/mock-cards-data";
import {find} from "./common";
import {CardData} from "./interfaces/card.interface";

window.onload = () => {
    const cardsContainerElem = find('#cardsContainer');

    mockCardsData.forEach((cardData: CardData) => {
        new Card(cardData, cardsContainerElem);
    });
};