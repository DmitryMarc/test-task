<script setup lang="ts">
import type {IProps} from './types';
import sprite from '@/assets/icons/sprite.svg';

const props = withDefaults(defineProps<IProps>(), {
  customClass: ''
});
</script>

<template>
  <svg class="icon" :class="props.customClass">
    <use :href="`${sprite}#${props.name}`"/>
  </svg>
</template>

<style lang="scss" scoped>
@import './style';
</style>
