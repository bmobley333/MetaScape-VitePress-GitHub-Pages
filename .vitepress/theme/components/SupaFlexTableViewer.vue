<script setup>
import { ref, computed, onMounted } from 'vue'

const activeTab = ref('overview') // 'overview', 'powers', 'magic_items', 'skillsets'
const activeSubCategory = ref('all')
const searchQuery = ref('')
const viewMode = ref('table') // 'table' or 'card'

const rawData = ref({
  powers: [],
  magic_items: [],
  skillsets: []
})

const isLoading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('/MetaScape-VitePress-GitHub-Pages/supaflex-data.json')
    if (res.ok) {
      rawData.value = await res.json()
    } else {
      console.warn('Failed to load supaflex-data.json via fetch')
    }
  } catch (e) {
    console.error('Error fetching supaflex-data.json:', e)
  } finally {
    isLoading.value = false
  }
})

// Counts and summaries for Overview Dashboard
const powerCount = computed(() => rawData.value.powers.length)
const itemCount = computed(() => rawData.value.magic_items.length)
const skillCount = computed(() => rawData.value.skillsets.length)

// Helper to get Category Name of a power or item
const getItemCategory = (item) => {
  return item.table_name || item.sub || 'General'
}

// Helper to calculate total items in a category within a filtered list
const getCategoryCount = (list, categoryName) => {
  return list.filter(item => getItemCategory(item) === categoryName).length
}

// Helper to check if a new category section starts at index
const isFirstInCategory = (list, index) => {
  if (index === 0) return true
  return getItemCategory(list[index]) !== getItemCategory(list[index - 1])
}

// Subcategories for Powers
const powerClasses = computed(() => {
  const set = new Set()
  rawData.value.powers.forEach(p => {
    if (p.sub?.toLowerCase().includes('class') && p.table_name) {
      const clsName = p.table_name.replace(/Powers/i, '').trim()
      if (clsName) set.add(clsName)
    }
  })
  return Array.from(set).sort()
})

const powerRaces = computed(() => {
  const set = new Set()
  rawData.value.powers.forEach(p => {
    if (p.sub?.toLowerCase().includes('race') && p.table_name) {
      const raceName = p.table_name.replace(/Powers/i, '').trim()
      if (raceName) set.add(raceName)
    }
  })
  return Array.from(set).sort()
})

const powerCombatStyles = computed(() => {
  const set = new Set()
  rawData.value.powers.forEach(p => {
    const isCombat = p.sub?.toLowerCase().includes('combat') || p.table_name?.toLowerCase().includes('combat')
    if (isCombat && p.table_name) {
      const styleName = p.table_name.replace(/Powers/i, '').trim()
      if (styleName) set.add(styleName)
    }
  })
  return Array.from(set).sort()
})

// Filtered Powers with mandatory 2-tier sort: Category A->Z, Name A->Z
const filteredPowers = computed(() => {
  const filtered = rawData.value.powers.filter(p => {
    // Sub-category filter
    if (activeSubCategory.value !== 'all') {
      const subLower = (p.sub || '').toLowerCase()
      const tblLower = (p.table_name || '').toLowerCase()

      if (activeSubCategory.value === 'class_all') {
        if (!subLower.includes('class')) return false
      } else if (activeSubCategory.value.startsWith('class_')) {
        const cls = activeSubCategory.value.replace('class_', '').toLowerCase()
        if (!subLower.includes('class') || !tblLower.includes(cls)) return false
      } else if (activeSubCategory.value === 'race_all') {
        if (!subLower.includes('race')) return false
      } else if (activeSubCategory.value.startsWith('race_')) {
        const race = activeSubCategory.value.replace('race_', '').toLowerCase()
        if (!subLower.includes('race') || !tblLower.includes(race)) return false
      } else if (activeSubCategory.value === 'combat_all' || activeSubCategory.value === 'combat') {
        if (!subLower.includes('combat') && !tblLower.includes('combat')) return false
      } else if (activeSubCategory.value.startsWith('combat_')) {
        const style = activeSubCategory.value.replace('combat_', '').toLowerCase()
        if ((!subLower.includes('combat') && !tblLower.includes('combat')) || !tblLower.includes(style)) return false
      } else if (activeSubCategory.value === 'luck') {
        if (!subLower.includes('luck') && !tblLower.includes('luck')) return false
      }
    }

    // Search query
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()
      const name = (p.name || '').toLowerCase()
      const effect = (p.effect || '').toLowerCase()
      const action = (p.action || '').toLowerCase()
      const usage = (p.usage || '').toLowerCase()
      const tbl = (p.table_name || '').toLowerCase()
      return name.includes(q) || effect.includes(q) || action.includes(q) || usage.includes(q) || tbl.includes(q)
    }
    return true
  })

  // Mandatory Two-Tier Sort: Category A->Z, then Name A->Z
  return filtered.sort((a, b) => {
    const catA = (a.table_name || a.sub || '').toLowerCase()
    const catB = (b.table_name || b.sub || '').toLowerCase()
    if (catA !== catB) return catA.localeCompare(catB)
    return (a.name || '').toLowerCase().localeCompare((b.name || '').toLowerCase())
  })
})

// Filtered Magic Items with mandatory 2-tier sort: Category A->Z, Name A->Z
const filteredMagicItems = computed(() => {
  const filtered = rawData.value.magic_items.filter(item => {
    if (activeSubCategory.value !== 'all') {
      const sub = (item.sub || '').toLowerCase()
      if (!sub.includes(activeSubCategory.value.toLowerCase())) return false
    }
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()
      const name = (item.name || '').toLowerCase()
      const effect = (item.effect || '').toLowerCase()
      const action = (item.action || '').toLowerCase()
      const usage = (item.usage || '').toLowerCase()
      const sub = (item.sub || '').toLowerCase()
      return name.includes(q) || effect.includes(q) || action.includes(q) || usage.includes(q) || sub.includes(q)
    }
    return true
  })

  // Mandatory Two-Tier Sort: Category (sub) A->Z, then Name A->Z
  return filtered.sort((a, b) => {
    const catA = (a.sub || '').toLowerCase()
    const catB = (b.sub || '').toLowerCase()
    if (catA !== catB) return catA.localeCompare(catB)
    return (a.name || '').toLowerCase().localeCompare((b.name || '').toLowerCase())
  })
})

// Filtered Skill Sets with Category/Name Sort
const filteredSkillsets = computed(() => {
  const filtered = rawData.value.skillsets.filter(s => {
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()
      const name = (s.name || '').toLowerCase()
      const skillsStr = Array.isArray(s.skills) ? s.skills.join(' ') : String(s.skills || '')
      return name.includes(q) || skillsStr.toLowerCase().includes(q)
    }
    return true
  })

  return filtered.sort((a, b) => (a.name || '').toLowerCase().localeCompare((b.name || '').toLowerCase()))
})

const selectCategoryTab = (tab) => {
  activeTab.value = tab
  activeSubCategory.value = 'all'
  searchQuery.value = ''
}
</script>

<template>
  <div class="supaflex-catalog-container">
    <!-- Primary Category Navigation Bar -->
    <div class="catalog-nav-tabs">
      <button 
        class="nav-tab-btn" 
        :class="{ active: activeTab === 'overview' }"
        @click="selectCategoryTab('overview')"
      >
        📊 Overview Dashboard
      </button>
      <button 
        class="nav-tab-btn" 
        :class="{ active: activeTab === 'powers' }"
        @click="selectCategoryTab('powers')"
      >
        🔥 Powers ({{ powerCount }})
      </button>
      <button 
        class="nav-tab-btn" 
        :class="{ active: activeTab === 'magic_items' }"
        @click="selectCategoryTab('magic_items')"
      >
        ✨ Magic Items ({{ itemCount }})
      </button>
      <button 
        class="nav-tab-btn" 
        :class="{ active: activeTab === 'skillsets' }"
        @click="selectCategoryTab('skillsets')"
      >
        🎓 Skill Sets ({{ skillCount }})
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="catalog-loading">
      <div class="spinner"></div>
      <p>Loading SupaFlex Reference Database...</p>
    </div>

    <template v-else>
      <!-- OVERVIEW DASHBOARD VIEW -->
      <div v-if="activeTab === 'overview'" class="overview-dashboard">
        <div class="dashboard-hero">
          <h2>🌌 SupaFlex System Reference Catalog</h2>
          <p>Select a category below to explore powers, magical treasures, and skill set options for your characters.</p>
        </div>

        <div class="overview-cards-grid">
          <!-- Powers Card -->
          <div class="overview-card power-card" @click="selectCategoryTab('powers')">
            <div class="card-icon">🔥</div>
            <h3>Powers Catalog</h3>
            <div class="card-count">{{ powerCount }} Abilities Indexed</div>
            <p>Comprehensive list of Class Abilities, Racial Powers, Combat Styles, and Luck feats.</p>
            <div class="card-sub-pills">
              <span>👤 Class Powers</span>
              <span>🧬 Racial Powers</span>
              <span>⚔️ Combat Styles</span>
              <span>🍀 Luck Powers</span>
            </div>
            <button class="card-action-btn">Browse Powers →</button>
          </div>

          <!-- Magic Items Card -->
          <div class="overview-card item-card" @click="selectCategoryTab('magic_items')">
            <div class="card-icon">✨</div>
            <h3>Magic Items</h3>
            <div class="card-count">{{ itemCount }} Magical Artifacts</div>
            <p>Indexed database of minor potions, lesser charms, greater relics, and ancient artifacts.</p>
            <div class="card-sub-pills">
              <span>🍺 Minor</span>
              <span>🪄 Lesser</span>
              <span>🪬 Greater</span>
              <span>🌀 Artifact</span>
            </div>
            <button class="card-action-btn">Browse Magic Items →</button>
          </div>

          <!-- Skill Sets Card -->
          <div class="overview-card skill-card" @click="selectCategoryTab('skillsets')">
            <div class="card-icon">🎓</div>
            <h3>Skill Sets</h3>
            <div class="card-count">{{ skillCount }} Training Domains</div>
            <p>Master directory of skills and specialized training groups for character skill checks.</p>
            <div class="card-sub-pills">
              <span>Crafting</span>
              <span>Knowledge</span>
              <span>Combat</span>
              <span>Survival</span>
            </div>
            <button class="card-action-btn">Browse Skill Sets →</button>
          </div>
        </div>
      </div>

      <!-- POWERS VIEW -->
      <div v-else-if="activeTab === 'powers'" class="catalog-section">
        <!-- Subcategory Pills & Dropdowns Toolbar -->
        <div class="sub-category-bar">
          <button 
            class="sub-pill-btn" 
            :class="{ active: activeSubCategory === 'all' }"
            @click="activeSubCategory = 'all'"
          >
            All Powers ({{ powerCount }})
          </button>

          <button 
            class="sub-pill-btn" 
            :class="{ active: activeSubCategory === 'class_all' }"
            @click="activeSubCategory = 'class_all'"
          >
            👤 All Class Powers
          </button>

          <!-- Class Dropdown/Select -->
          <select 
            class="sub-select" 
            :value="activeSubCategory.startsWith('class_') ? activeSubCategory : ''" 
            @change="e => activeSubCategory = e.target.value || 'all'"
          >
            <option value="" disabled>-- Select Class --</option>
            <option v-for="c in powerClasses" :key="c" :value="`class_${c}`">
              👤 {{ c }} Powers
            </option>
          </select>

          <button 
            class="sub-pill-btn" 
            :class="{ active: activeSubCategory === 'race_all' }"
            @click="activeSubCategory = 'race_all'"
          >
            🧬 All Racial Powers
          </button>

          <!-- Race Dropdown/Select -->
          <select 
            class="sub-select" 
            :value="activeSubCategory.startsWith('race_') ? activeSubCategory : ''" 
            @change="e => activeSubCategory = e.target.value || 'all'"
          >
            <option value="" disabled>-- Select Race --</option>
            <option v-for="r in powerRaces" :key="r" :value="`race_${r}`">
              🧬 {{ r }} Powers
            </option>
          </select>

          <button 
            class="sub-pill-btn" 
            :class="{ active: activeSubCategory === 'combat_all' || activeSubCategory === 'combat' }"
            @click="activeSubCategory = 'combat_all'"
          >
            ⚔️ All Combat Styles
          </button>

          <!-- Combat Style Dropdown/Select -->
          <select 
            v-if="powerCombatStyles.length > 0"
            class="sub-select" 
            :value="activeSubCategory.startsWith('combat_') ? activeSubCategory : ''" 
            @change="e => activeSubCategory = e.target.value || 'all'"
          >
            <option value="" disabled>-- Select Combat Style --</option>
            <option v-for="cs in powerCombatStyles" :key="cs" :value="`combat_${cs}`">
              ⚔️ {{ cs }}
            </option>
          </select>

          <button 
            class="sub-pill-btn" 
            :class="{ active: activeSubCategory === 'luck' }"
            @click="activeSubCategory = 'luck'"
          >
            🍀 Luck Powers
          </button>
        </div>

        <!-- Search & View Mode Toolbar -->
        <div class="toolbar-row">
          <div class="search-box-wrapper">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search powers by name, effect, class, action..." 
              class="search-input"
            />
            <span v-if="searchQuery" class="clear-search" @click="searchQuery = ''">✕</span>
          </div>

          <div class="view-mode-toggle">
            <button 
              class="mode-btn" 
              :class="{ active: viewMode === 'table' }"
              @click="viewMode = 'table'"
            >
              📋 Table View
            </button>
            <button 
              class="mode-btn" 
              :class="{ active: viewMode === 'card' }"
              @click="viewMode = 'card'"
            >
              🎴 Card View
            </button>
          </div>
        </div>

        <div class="results-count">
          Showing <strong>{{ filteredPowers.length }}</strong> of {{ powerCount }} powers
        </div>

        <!-- DENSE TABLE VIEW (No Lvl Column, with Visual Category Dividers) -->
        <div v-if="viewMode === 'table'" class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Usage</th>
                <th>Action</th>
                <th>Name</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(p, i) in filteredPowers" :key="i">
                <!-- Visual Category Transition Divider Row -->
                <tr v-if="isFirstInCategory(filteredPowers, i)" class="category-divider-row">
                  <td colspan="5">
                    <div class="category-divider-content">
                      <span class="category-divider-title">📂 {{ getItemCategory(p) }}</span>
                      <span class="category-divider-badge">{{ getCategoryCount(filteredPowers, getItemCategory(p)) }} Abilities</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="badge-pill">
                      {{ getItemCategory(p) }}
                    </span>
                  </td>
                  <td class="font-semibold">{{ p.usage }}</td>
                  <td><span class="action-tag">{{ p.action }}</span></td>
                  <td class="font-bold text-primary">{{ p.name }}</td>
                  <td class="effect-text">{{ p.effect }}</td>
                </tr>
              </template>
              <tr v-if="filteredPowers.length === 0">
                <td colspan="5" class="no-results">No powers match your filter criteria.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- CARD GRID VIEW (No Lvl Badge, with Visual Category Banners) -->
        <div v-else class="cards-grid">
          <template v-for="(p, i) in filteredPowers" :key="i">
            <!-- Visual Category Banner for Card View -->
            <div v-if="isFirstInCategory(filteredPowers, i)" class="category-grid-header">
              <span class="category-divider-title">📂 {{ getItemCategory(p) }}</span>
              <span class="category-divider-badge">{{ getCategoryCount(filteredPowers, getItemCategory(p)) }} Abilities</span>
            </div>

            <div class="data-card">
              <div class="card-header-row">
                <span class="card-badge">{{ getItemCategory(p) }}</span>
              </div>
              <h4 class="card-title">{{ p.name }}</h4>
              <div class="card-meta-row">
                <span class="meta-tag usage">{{ p.usage }}</span>
                <span class="meta-tag action">{{ p.action }}</span>
              </div>
              <p class="card-effect">{{ p.effect }}</p>
            </div>
          </template>
          <div v-if="filteredPowers.length === 0" class="no-results-box">
            No powers match your filter criteria.
          </div>
        </div>
      </div>

      <!-- MAGIC ITEMS VIEW -->
      <div v-else-if="activeTab === 'magic_items'" class="catalog-section">
        <!-- Subcategory Pills -->
        <div class="sub-category-bar">
          <button 
            class="sub-pill-btn" 
            :class="{ active: activeSubCategory === 'all' }"
            @click="activeSubCategory = 'all'"
          >
            All Items ({{ itemCount }})
          </button>
          <button 
            class="sub-pill-btn" 
            :class="{ active: activeSubCategory === 'minor' }"
            @click="activeSubCategory = 'minor'"
          >
            🍺 Minor Items
          </button>
          <button 
            class="sub-pill-btn" 
            :class="{ active: activeSubCategory === 'lesser' }"
            @click="activeSubCategory = 'lesser'"
          >
            🪄 Lesser Items
          </button>
          <button 
            class="sub-pill-btn" 
            :class="{ active: activeSubCategory === 'greater' }"
            @click="activeSubCategory = 'greater'"
          >
            🪬 Greater Items
          </button>
          <button 
            class="sub-pill-btn" 
            :class="{ active: activeSubCategory === 'artifact' }"
            @click="activeSubCategory = 'artifact'"
          >
            🌀 Artifacts
          </button>
        </div>

        <!-- Search & View Mode Toolbar -->
        <div class="toolbar-row">
          <div class="search-box-wrapper">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search magic items by name, effect, tier..." 
              class="search-input"
            />
            <span v-if="searchQuery" class="clear-search" @click="searchQuery = ''">✕</span>
          </div>

          <div class="view-mode-toggle">
            <button 
              class="mode-btn" 
              :class="{ active: viewMode === 'table' }"
              @click="viewMode = 'table'"
            >
              📋 Table View
            </button>
            <button 
              class="mode-btn" 
              :class="{ active: viewMode === 'card' }"
              @click="viewMode = 'card'"
            >
              🎴 Card View
            </button>
          </div>
        </div>

        <div class="results-count">
          Showing <strong>{{ filteredMagicItems.length }}</strong> of {{ itemCount }} magic items
        </div>

        <!-- TABLE VIEW -->
        <div v-if="viewMode === 'table'" class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Tier / Sub</th>
                <th>Usage</th>
                <th>Action</th>
                <th>Item Name</th>
                <th>Magical Effect</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, i) in filteredMagicItems" :key="i">
                <!-- Visual Category Transition Divider Row -->
                <tr v-if="isFirstInCategory(filteredMagicItems, i)" class="category-divider-row">
                  <td colspan="5">
                    <div class="category-divider-content">
                      <span class="category-divider-title">✨ {{ getItemCategory(item) }}</span>
                      <span class="category-divider-badge">{{ getCategoryCount(filteredMagicItems, getItemCategory(item)) }} Items</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><span class="badge-pill item-tier">{{ getItemCategory(item) }}</span></td>
                  <td class="font-semibold">{{ item.usage }}</td>
                  <td><span class="action-tag">{{ item.action }}</span></td>
                  <td class="font-bold text-primary">{{ item.name }}</td>
                  <td class="effect-text">{{ item.effect }}</td>
                </tr>
              </template>
              <tr v-if="filteredMagicItems.length === 0">
                <td colspan="5" class="no-results">No magic items match your search.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- CARD VIEW -->
        <div v-else class="cards-grid">
          <template v-for="(item, i) in filteredMagicItems" :key="i">
            <!-- Visual Category Banner for Card View -->
            <div v-if="isFirstInCategory(filteredMagicItems, i)" class="category-grid-header">
              <span class="category-divider-title">✨ {{ getItemCategory(item) }}</span>
              <span class="category-divider-badge">{{ getCategoryCount(filteredMagicItems, getItemCategory(item)) }} Items</span>
            </div>

            <div class="data-card item-card-border">
              <div class="card-header-row">
                <span class="card-badge item-tier">{{ getItemCategory(item) }}</span>
              </div>
              <h4 class="card-title">{{ item.name }}</h4>
              <div class="card-meta-row">
                <span class="meta-tag usage">{{ item.usage }}</span>
                <span class="meta-tag action">{{ item.action }}</span>
              </div>
              <p class="card-effect">{{ item.effect }}</p>
            </div>
          </template>
          <div v-if="filteredMagicItems.length === 0" class="no-results-box">
            No magic items match your search.
          </div>
        </div>
      </div>

      <!-- SKILL SETS VIEW -->
      <div v-else-if="activeTab === 'skillsets'" class="catalog-section">
        <!-- Search Toolbar -->
        <div class="toolbar-row">
          <div class="search-box-wrapper full-width">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search skill sets or specific skills..." 
              class="search-input"
            />
            <span v-if="searchQuery" class="clear-search" @click="searchQuery = ''">✕</span>
          </div>
        </div>

        <div class="results-count">
          Showing <strong>{{ filteredSkillsets.length }}</strong> of {{ skillCount }} skill sets
        </div>

        <!-- TABLE VIEW -->
        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 25%;">Skill Set Name</th>
                <th>Included Skills & Specializations</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(s, i) in filteredSkillsets" :key="i">
                <td class="font-bold text-primary">🎓 {{ s.name }}</td>
                <td class="effect-text">
                  <span v-if="Array.isArray(s.skills)" class="skill-tags-wrapper">
                    <span v-for="(sk, idx) in s.skills" :key="idx" class="skill-chip">{{ sk }}</span>
                  </span>
                  <span v-else>{{ s.skills }}</span>
                </td>
              </tr>
              <tr v-if="filteredSkillsets.length === 0">
                <td colspan="2" class="no-results">No skill sets match your search.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.supaflex-catalog-container {
  margin: 1.5rem 0;
  font-family: var(--vp-font-family-base, sans-serif);
}

.catalog-nav-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border-bottom: 2px solid var(--vp-c-divider, rgba(255, 255, 255, 0.1));
  padding-bottom: 8px;
  margin-bottom: 1.5rem;
}

.nav-tab-btn {
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider, rgba(255, 255, 255, 0.1));
  background: var(--vp-c-bg-soft, rgba(0, 0, 0, 0.05));
  color: var(--vp-c-text-1, #fff);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-tab-btn:hover {
  background: var(--vp-c-bg-mute, rgba(16, 185, 129, 0.1));
  border-color: #10b981;
}

.nav-tab-btn.active {
  background: #10b981;
  color: #ffffff;
  border-color: #10b981;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.catalog-loading {
  text-align: center;
  padding: 3rem;
}

.spinner {
  display: inline-block;
  width: 36px;
  height: 36px;
  border: 3px solid rgba(16, 185, 129, 0.2);
  border-top-color: #10b981;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* OVERVIEW DASHBOARD */
.overview-dashboard {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.dashboard-hero {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 12px;
  padding: 1.5rem 2rem;
}

.dashboard-hero h2 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
}

.dashboard-hero p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.overview-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.overview-card {
  background: var(--vp-c-bg-soft, rgba(255, 255, 255, 0.03));
  border: 1px solid var(--vp-c-divider, rgba(255, 255, 255, 0.1));
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
}

.overview-card:hover {
  transform: translateY(-4px);
  border-color: #10b981;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.15);
}

.card-icon {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.overview-card h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
}

.card-count {
  font-size: 0.85rem;
  font-weight: 700;
  color: #10b981;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.overview-card p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  flex-grow: 1;
}

.card-sub-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1.25rem;
}

.card-sub-pills span {
  font-size: 0.75rem;
  padding: 3px 8px;
  border-radius: 6px;
  background: var(--vp-c-bg-mute, rgba(255, 255, 255, 0.05));
  border: 1px solid var(--vp-c-divider, rgba(255, 255, 255, 0.1));
  color: var(--vp-c-text-2);
}

.card-action-btn {
  align-self: flex-start;
  padding: 6px 14px;
  border-radius: 6px;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.overview-card:hover .card-action-btn {
  background: #10b981;
  color: #fff;
}

/* SUB CATEGORY BAR & TOOLBAR */
.sub-category-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 1rem;
}

.sub-pill-btn {
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider, rgba(255, 255, 255, 0.15));
  background: var(--vp-c-bg-soft, rgba(0, 0, 0, 0.03));
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sub-pill-btn.active {
  background: rgba(16, 185, 129, 0.15);
  border-color: #10b981;
  color: #10b981;
}

.sub-select {
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider, rgba(255, 255, 255, 0.15));
  background: var(--vp-c-bg-soft, rgba(0, 0, 0, 0.03));
  color: var(--vp-c-text-1);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.toolbar-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
}

.search-box-wrapper {
  position: relative;
  flex-grow: 1;
  min-width: 260px;
}

.search-box-wrapper.full-width {
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 8px 36px 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider, rgba(255, 255, 255, 0.2));
  background: var(--vp-c-bg-alt, rgba(0, 0, 0, 0.05));
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
}

.clear-search {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--vp-c-text-3);
}

.view-mode-toggle {
  display: flex;
  gap: 4px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 3px;
  border-radius: 8px;
}

.mode-btn {
  padding: 5px 12px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}

.mode-btn.active {
  background: var(--vp-c-bg-mute, rgba(16, 185, 129, 0.2));
  color: #10b981;
}

.results-count {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.75rem;
}

/* CATEGORY DIVIDER STYLES */
.category-divider-row td {
  padding: 0 !important;
  background: transparent !important;
  border-bottom: none !important;
}

.category-divider-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(16, 185, 129, 0.18) 0%, rgba(6, 182, 212, 0.08) 100%);
  border-left: 4px solid #10b981;
  padding: 10px 16px;
  margin-top: 1.25rem;
  margin-bottom: 0.25rem;
  border-radius: 0 8px 8px 0;
}

.category-divider-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  letter-spacing: 0.02em;
}

.category-divider-badge {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 12px;
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.category-grid-header {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(16, 185, 129, 0.18) 0%, rgba(6, 182, 212, 0.08) 100%);
  border-left: 4px solid #10b981;
  padding: 10px 16px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0 8px 8px 0;
}

/* DATA TABLE STYLES */
.table-responsive-wrapper {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider, rgba(255, 255, 255, 0.1));
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  text-align: left;
}

.data-table th {
  background: var(--vp-c-bg-soft, rgba(0, 0, 0, 0.08));
  color: var(--vp-c-text-1);
  padding: 10px 14px;
  font-weight: 700;
  border-bottom: 2px solid var(--vp-c-divider);
}

.data-table td {
  padding: 10px 14px;
  border-bottom: 1px solid var(--vp-c-divider, rgba(255, 255, 255, 0.05));
  color: var(--vp-c-text-1);
}

.data-table tr:nth-child(even) {
  background: var(--vp-c-bg-alt, rgba(0, 0, 0, 0.02));
}

.badge-pill {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.action-tag {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  background: var(--vp-c-bg-mute, rgba(255, 255, 255, 0.05));
  color: var(--vp-c-text-2);
}

.skill-tags-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-chip {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  background: rgba(6, 182, 212, 0.1);
  color: #06b6d4;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

/* CARDS GRID VIEW */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.data-card {
  background: var(--vp-c-bg-soft, rgba(255, 255, 255, 0.02));
  border: 1px solid var(--vp-c-divider, rgba(255, 255, 255, 0.1));
  border-radius: 10px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.card-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}

.card-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.card-meta-row {
  display: flex;
  gap: 6px;
  margin-bottom: 0.75rem;
}

.meta-tag {
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
}

.card-effect {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.4;
}

.no-results {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-3);
}

.no-results-box {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: var(--vp-c-text-3);
}
</style>
