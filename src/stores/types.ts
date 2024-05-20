import type {ICard} from "@/assets/@types/card.ts";

export interface ICardsState {
    defaultCartsData: ICard[];
    currentCardsData: ICard[];
    currentSorting: 'asc' | 'desc' | null;
    favorites: string[] | null;
    cart: string[] | null;
}