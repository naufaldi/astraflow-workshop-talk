<script setup lang="ts">
defineProps<{ n: string | number; tone?: 'brand' | 'blue' | 'ok' | 'warn' }>()
</script>

<template>
  <div class="af-step" :class="`af-step--${tone ?? 'brand'}`">
    <span class="af-step-n">{{ n }}</span>
    <div class="af-step-body"><slot /></div>
  </div>
</template>
