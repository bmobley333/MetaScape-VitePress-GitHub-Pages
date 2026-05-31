<script setup>
import { useRoute } from 'vitepress'
import { watch, computed, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const route = useRoute()

const activeEngine = computed(() => {
  const path = route.path
  if (path.includes('/ms3/')) return 'ms3'
  if (path.includes('/flex/')) return 'flex'
  if (path.includes('/turbo/')) return 'turbo'
  return null
})

const updateClass = (engine) => {
  if (typeof document === 'undefined') return
  const html = document.documentElement
  html.classList.remove('route-ms3', 'route-flex', 'route-turbo')
  if (engine) {
    html.classList.add(`route-${engine}`)
  }
}

watch(activeEngine, (newEngine) => {
  updateClass(newEngine)
}, { immediate: true })

onMounted(() => {
  updateClass(activeEngine.value)
})
</script>

<template>
  <Layout>
    <!-- Slot to inject in the top navbar before navigation menu items -->
    <template #nav-bar-content-before>
      <div v-if="activeEngine" class="engine-indicator-badge" :class="`badge-${activeEngine}`">
        <span class="badge-dot"></span>
        <span class="badge-text">
          {{ activeEngine === 'ms3' ? 'Flex Legacy (MS3)' : activeEngine === 'flex' ? 'Flex Engine (MS4)' : 'Turbo Engine (MS5)' }}
        </span>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.engine-indicator-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 9999px; /* Pill shape */
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border: 1px solid var(--badge-border);
  background: var(--badge-bg);
  box-shadow: 0 2px 8px var(--badge-shadow);
  align-self: center;
  margin: 0 12px;
  height: fit-content;
  transition: all 0.3s ease;
}

.badge-ms3 {
  --badge-border: rgba(217, 119, 6, 0.2);
  --badge-bg: rgba(217, 119, 6, 0.05);
  --badge-shadow: rgba(217, 119, 6, 0.03);
  --badge-color: var(--ms3-color);
}
.badge-flex {
  --badge-border: rgba(8, 145, 178, 0.2);
  --badge-bg: rgba(8, 145, 178, 0.05);
  --badge-shadow: rgba(8, 145, 178, 0.03);
  --badge-color: var(--ms4-color);
}
.badge-turbo {
  --badge-border: rgba(124, 58, 237, 0.2);
  --badge-bg: rgba(124, 58, 237, 0.05);
  --badge-shadow: rgba(124, 58, 237, 0.03);
  --badge-color: var(--ms5-color);
}

.engine-indicator-badge .badge-text {
  color: var(--badge-color);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--badge-color);
  box-shadow: 0 0 8px var(--badge-color);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
    box-shadow: 0 0 12px var(--badge-color);
  }
  100% {
    transform: scale(0.9);
    opacity: 0.6;
  }
}
</style>
