<script lang="ts" setup>
import {pages} from '@/assets/mocks';
import type {PageType} from "./types.ts";
</script>
<template>
  <div class="bread-crumbs">
    <a v-for="item in (pages as PageType[])" :key="item.id" :href="item.link" class="bread-crumbs__item">
      {{ item.title }}
    </a>
  </div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
