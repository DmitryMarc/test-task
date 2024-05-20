<script lang="ts" setup>
import Card from '@/components/Card/index.vue';
import {useCards} from "@/stores/Cards.ts";
import {LocalStorageHelper} from "@/utils/localStorageHelper.ts";

const cardsStore = useCards();

const updateDataHandler = ({key, value}: {key: string, value: unknown}) => {
  LocalStorageHelper.addDeleteDataFlow(key, value);
  cardsStore.updateDataFromLocalStorage(key);
}

</script>
<template>
  <div class="cards">
    <Card
        v-for="item in cardsStore.getCardsData"
        :key="item.id"
        :is-in-cart="cardsStore.getCart?.includes(item.id)"
        :is-in-favorites="cardsStore.getFavorites?.includes(item.id)"
        :item-data="item"
        @update="updateDataHandler"
    />
  </div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
