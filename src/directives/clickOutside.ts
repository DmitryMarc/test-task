import type {Directive} from "vue";
import type {ElementWithOutsideEvent} from "@/assets/@types/clickOutside.ts";

export const clickOutside: Directive<ElementWithOutsideEvent, () => void> = {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = (event) => {
            if (!(el == event.target || el.contains(event.target as Element))) {
                binding.value();
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted: (el) => {
        document.removeEventListener('click', el.clickOutsideEvent);
    }
};