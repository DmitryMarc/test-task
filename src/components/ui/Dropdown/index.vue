<script setup lang="ts">
import sprite from '@/assets/icons/sprite.svg';
import {ref} from "vue";
import type {IProps} from './types.ts';
import type {ItemType} from "@/assets/@types/listItem.ts";

const emit = defineEmits<{
  (e: 'select', item: ItemType): void
}>();

withDefaults(defineProps<IProps>(), {
  label: 'Выпадающий список',
  items: () => [],
  selectedItem: null,
  customClass: ''
});

const isListShown = ref(false);

const toggleList = () => {
  isListShown.value = !isListShown.value;
};

const selectItem = (item: ItemType) => {
  emit('select', item);
  toggleList();
}
</script>

<template>
  <div class="dropdown" :class="[customClass, {active: isListShown}]">
    <label class="dropdown__title">
      {{ label }}
    </label>
    <div
        class="dropdown__content"
        tabindex="1"
        v-click-outside="() => {isListShown = false}
      ">
      <div class="dropdown-selected" @click="toggleList">
        <span class="dropdown-selected__text">
           {{ selectedItem?.name || 'Выберите' }}
        </span>
        <svg class="dropdown-selected__icon">
          <use :href="`${sprite}#arrow`" />
        </svg>
      </div>
      <ul v-if="isListShown" class="dropdown__content__list">
        <li v-for="item in items" :key="item.id as string" class="dropdown__content-item" @click="selectItem(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>