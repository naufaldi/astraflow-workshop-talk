<script setup lang="ts">
defineProps<{ src: string; label: string; url: string; size?: number }>()
</script>

<template>
  <div class="af-qr">
    <img :src="src" :alt="`QR code for ${url}`" :style="{ width: `${size ?? 150}px`, height: `${size ?? 150}px` }" />
    <div class="af-qr-label">{{ label }}</div>
    <div class="af-qr-url">{{ url }}</div>
  </div>
</template>
