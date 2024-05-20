<script setup lang="ts">
import {ref} from "vue";
import Dropdown from '@/components/ui/Dropdown/index.vue'
import {materials, sortings} from '@/assets/mocks';
import {useCards} from "@/stores/Cards.ts";
import type {MaterialType, SortingType} from "@/assets/@types/mocks.ts";
import type {ItemType} from "@/assets/@types/listItem.ts";

const cardsStore = useCards();

const selectedSorting = ref<SortingType | null>(null);
const selectedMaterial = ref<MaterialType | null>(null);

const selectSortValue= (item: Record<string, unknown>) => {
  selectedSorting.value = item as SortingType;
  if (selectedSorting.value) {
    cardsStore.sortCardsData(selectedSorting.value.value);
  }
}

const selectFilterValue = (item: ItemType) => {
  selectedMaterial.value = item as MaterialType;
  cardsStore.filterCardsData(+selectedMaterial.value.id);
}
</script>

<template>
  <div class="settings">
    <Dropdown
        :items="sortings"
        label="Сортировать по:"
        :selected-item="selectedSorting"
        @select="selectSortValue"
        custom-class="settings__dropdown"
    />
    <Dropdown
        :items="materials"
        label="Материал:"
        :selected-item="selectedMaterial"
        @select="selectFilterValue"
        custom-class="settings__dropdown"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'style';
</style>