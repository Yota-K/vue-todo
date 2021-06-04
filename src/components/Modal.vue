<template>
  <div :style="isModalActive ? { display: 'block' } : { display: 'none' }">
    <First v-if="!isSetFirstValue && !isSetSecondValue && !isSetThirdValue" />
    <Second v-else-if="isSetFirstValue"/>
    <Third v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import First from '../components/modal/First.vue';
import Second from '../components/modal/Second.vue';
import Third from '../components/modal/Third.vue';

export default defineComponent({
  components: {
    First,
    Second,
    Third,
  },
  props: {
    isModalActive: {
      type: Boolean,
      required: true,
    },
    isSetFirstValue: {
      type: Boolean,
      required: true,
    },
    isSetSecondValue: {
      type: Boolean,
      required: true,
    },
    isSetThirdValue: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
