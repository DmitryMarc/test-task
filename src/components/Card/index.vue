<script lang="ts" setup>
import type {IProps} from './types.ts';
import {Icon} from '@/components/ui';

const emit = defineEmits<{
  (e: 'update', value: { key: string; value: unknown }): void
}>();

const props = withDefaults(defineProps<IProps>(), {
  isInCart: false,
  isInFavorites: false
});

</script>
<template>
  <div class="card">
    <span v-if="props.itemData.price.old_price" class="card__discount">
      Скидка
    </span>
    <img class="card__img" :src="props.itemData.image.url" alt="изображение" />
    <div class="card__info">
      <span class="card__info__code">
        {{props.itemData.code}}
      </span>

      <h4 class="card__info__title">
        {{props.itemData.name}}
      </h4>
      <div class="card__info__group">
        <div class="card__info-prices">
          <span v-if="props.itemData.price.old_price" class="card__info-old-price">
            {{props.itemData.price.old_price}}₽
          </span>
          <span class="card__info-current-price">
            {{props.itemData.price.current_price}}₽
          </span>
        </div>

        <div class="card__info-actions">
          <button
              class="card__info-btn"
              @click="emit('update', {key: 'cart', value: props.itemData.id})"
          >
            <Icon :name="props.isInCart ? 'check-mark' : 'cart'" custom-class="card__info-icon" />
          </button>

          <button
              class="card__info-btn"
              :class="{active: props.isInFavorites}"
              @click="emit('update', {key: 'favorites', value: props.itemData.id})"
          >
            <Icon name="heart" custom-class="card__info-icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import 'style';
</style>
