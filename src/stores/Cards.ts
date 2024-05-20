import {defineStore} from 'pinia';
import {items} from '@/assets/mocks';
import {LocalStorageHelper} from "@/utils/localStorageHelper.ts";
import type {ICardsState} from "./types.ts";

export const useCards = defineStore('Cards', {
    state: (): ICardsState => {
        return {
            defaultCartsData: items,
            currentCardsData: items,
            currentSorting: null,
            favorites: LocalStorageHelper.getData('favorites'),
            cart: LocalStorageHelper.getData('cart')
        };
    },
    getters: {
        getCardsData(state: ICardsState) {
            return state.currentCardsData;
        },
        getFavorites(state: ICardsState) {
            return state.favorites;
        },
        getCart(state: ICardsState) {
            return state.cart;
        }
    },
    actions: {
        sortCardsData(sortValue: 'asc' | 'desc') {
            if (sortValue === 'asc') {
                this.currentCardsData = this.currentCardsData.sort((a, b) => a.price.current_price - b.price.current_price);
            } else {
                this.currentCardsData = this.currentCardsData.sort((a, b) => b.price.current_price - a.price.current_price);
            }
        },
        filterCardsData(filterValue: number) {
            this.currentCardsData = this.defaultCartsData.filter(item => item.material === filterValue);
            if (this.currentSorting) {
                this.sortCardsData(this.currentSorting);
            }
        },
        updateDataFromLocalStorage(key: string) {
            if (key === 'favorites') {
                this.favorites = LocalStorageHelper.getData(key);
            } else if (key === 'cart') {
                this.cart = LocalStorageHelper.getData(key);
            }
        },
    }
});
