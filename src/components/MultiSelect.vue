<template>
  <label class="typo__label">Select with search</label>
  <multiselect v-model="value" :options="options" :custom-label="nameWithLang" placeholder="Select one" label="name" track-by="name"></multiselect>
  <pre class="language-json"><code>{{ value  }}</code></pre>
</template>

<script lang="ts">
import Multiselect from 'vue-multiselect/src/Multiselect.vue';

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: { name: 'Vue.js', language: 'JavaScript' },
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  },
  methods: {
    nameWithLang ({ name }) {
      return `${name}`
    }
  }
}
</script>
