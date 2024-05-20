import type {ICard} from "@/assets/@types/card.ts";

export interface IProps {
    itemData: ICard,
    isInCart: boolean;
    isInFavorites: boolean;
}