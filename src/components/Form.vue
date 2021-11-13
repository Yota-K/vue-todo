<template>
  <form>
    <div class="input-group">
      <label>テキスト</label>
      <input type="text" :value="text" @input="text = $event.target.value">
      <p>{{ text }}</p>
    </div>
    <div class="input-group">
      <p>セレクトボックス</p>
      <select v-model="selected">
        <option
          v-for="(option, index) in options"
          :value="option"
          :key="index"
        >
          {{ option.label }}
        </option>
      </select>
      <p>{{ selected }}</p>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      text: '',
      checked: false,
      selected: '',
    });

    const options = [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b' },
      { label: 'C', value: 'c' },
    ];

    return {
      ...toRefs(state),
      options,
    };
  },
});
</script>

<style lang="scss" scoped>
.input-group {
  margin: 30px 0;
  label {
    margin-right: 20px;
  }
}
</style>
