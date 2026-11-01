---
layout: home
hero:
  name: "MetaScape SupaFlex"
  text: "Core Rules & Reference Catalogs"
  tagline: "Tabletop RPG rules manual and interactive equipment, power, skill, and bestiary catalogs."
  actions:
    - theme: brand
      text: "📖 Core Rules Manual"
      link: /player-guide/supaflex/rules
    - theme: alt
      text: "📊 Interactive Catalogs"
      link: /player-guide/supaflex/tables
---

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.location.replace(withBase('/player-guide/supaflex/rules.html'))
  }
})
</script>
