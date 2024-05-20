export interface ElementWithOutsideEvent extends HTMLElement {
    clickOutsideEvent: (this: Document, ev: MouseEvent) => void;
}