<template>
  <base-card class="filter-card">
    <div class="filter-container">
      <span class="filter-option">
        <input type="checkbox" id="frontend" checked @change="setFilters" />
        <label for="frontend">Frontend</label>
      </span>

      <span class="filter-option">
        <input type="checkbox" id="backend" checked @change="setFilters" />
        <label for="backend">Backend</label>
      </span>

      <span class="filter-option">
        <input type="checkbox" id="database" checked @change="setFilters" />
        <label for="database">Database</label>
      </span>

      <span class="filter-option">
        <input type="checkbox" id="cloud" checked @change="setFilters" />
        <label for="cloud">Cloud</label>
      </span>
    </div>
  </base-card>
</template>

<script>
export default {
    emits: ['change-filter'],
    data(){
        return {
            filters:{
                frontend: true,
                backend: true,
                database: true,
                cloud: true,
            },
        }
    },
    methods: {
        setFilters(event){
            const id = event.target.id
            const isChecked = event.target.checked
            const updatedFilters = {
                ...this.filters,
                [id]: isChecked,
            }
            this.filters = updatedFilters
            console.log('going to emit')
            this.$emit('change-filter', updatedFilters)
        }
    }

}
</script>

<style scoped>
.filter-card {
  margin-bottom: 1.5rem;
}

.filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-option {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  cursor: pointer;
}

.filter-option input[type="checkbox"] {
  cursor: pointer;
  accent-color: #3a0061; /* matches typical Vue tutorial purple */
}

.filter-option label {
  cursor: pointer;
  user-select: none;
}
</style>
