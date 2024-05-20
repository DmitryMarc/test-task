<script setup lang="ts">
import BreadCrumbs from '@/components/BreadCrumbs/index.vue';
import Settings from '@/components/Settings/index.vue';
import Cards from '@/components/Cards/index.vue';
</script>

<template>
  <div class="page">
    <BreadCrumbs />
    <h1 class="page__title">
      Комплекты стеллажных систем
    </h1>
    <Settings />
    <Cards />
  </div>

</template>

<style lang="scss" scoped>
@import 'style';
</style>