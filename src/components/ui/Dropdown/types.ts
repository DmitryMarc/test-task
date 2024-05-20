import type { ItemType } from "@/assets/@types/listItem.ts";

export interface IProps {
    label?: string;
    items: ItemType[];
    selectedItem?: ItemType | null;
    customClass?: string;
}