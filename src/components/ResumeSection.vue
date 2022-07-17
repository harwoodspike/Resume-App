<template>
  <div class="section-container flex" :style="cssAlign">
    <div v-if="props.title" class="section-title title">{{ props.title }}</div>
    <div class="section-content flex">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { withDefaults, computed } from 'vue'

  const props = withDefaults(defineProps<{
    title: string
    align: string
  }>(), { title: '', align: 'flex-start' })

  const cssAlign = computed(() => ({ '--align': props.align }))
</script>

<style lang="scss" scoped>
  .section-container {
    align-items: var(--align);
    padding: 0 1.4rem;
    width: 100%;

    .section-title {
      font-size: 1.2rem;
      padding: 30px 0 10px;
    }

    .section-content {
      align-items: var(--align);
    }
  }
  .va-card__content .title {
    color: var(--va-primary)
  }
</style>
