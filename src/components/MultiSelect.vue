<template>
    <Multiselect
      v-model="selected"
      :options="options"
    >
    </Multiselect>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Multiselect from 'vue-multiselect/src/Multiselect.vue';

export default defineComponent({
  components: {
    Multiselect,
  },
  setup() {
    const selected = null;
    const options = ['list', 'of', 'options'];
    return {
      selected,
      options,
    }
  }
});
</script>
