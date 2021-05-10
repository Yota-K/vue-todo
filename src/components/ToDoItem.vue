<template>
  <li @click="toggle">
    <span v-if="done" :class="['done']">✔︎</span>
    <span>{{ id }}, {{ text }}</span>
  </li>
</template>

<style lang="scss" scoped>
li {
  cursor: pointer;
  text-align: left;

  .done {
    margin-right: 10px;
  }

  &:hover {
    background: #ddd;
    transition: all 0.4s;
  }
}
</style>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'

type Props = {
  id: number;
  done: boolean;
  text: string;
};

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true
    },
    done: {
      type: Boolean
    },
    text: {
      type: String,
      required: true
    }
  },
  setup(props: Props, context: SetupContext) {
    const toggle = () => {
      context.emit('toggle', props.id)
    }

    return {
      toggle
    }
  }
})
</script>
