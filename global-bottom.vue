<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
const { currentLayout, currentPage, total } = useNav()
const show = computed(() => !['cover', 'thanks'].includes(currentLayout.value))
</script>

<template>
  <div v-if="show" class="af-footer">
    <img src="/brand/astraflow-logo.png" alt="AstraFlow" class="af-footer-logo" />
    <span class="af-footer-x">x</span>
    <img src="/brand/ucloud-logo.svg" alt="UCLOUD" class="af-footer-ucloud" />
    <span class="af-footer-sep" />
    <span class="af-footer-title">AI SaaS for Enterprise with AstraFlow</span>
    <span class="af-footer-page">{{ currentPage }} / {{ total }}</span>
  </div>
</template>
