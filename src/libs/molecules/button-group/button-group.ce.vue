<template>
  <div :class="classes">
    <Button
      :class="[
        {
          'active': activeButton === each.value
        }
      ]"
      v-for="each in parsedData"
      @click="(e: MouseEvent) => handleClick(e, each.value)"
    >
      {{ each.name }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Button from "../../atoms/button/button.vue";

interface Props {
  data: any;
  active: String;
  transparent: Boolean;
  small: Boolean;
}

const props = defineProps<Props>();
const parsedData = JSON.parse(props.data);

const activeButton = ref(props.active);
const classes = computed(() => {
  return [
    'ma-button-group',
    {
      'with-bg': props.transparent,
      'small': props.small
    }
  ];
});

const emit = defineEmits(['click']);
const handleClick = (event: MouseEvent, value: any) => {
  emit('click', event);
  activeButton.value = value;
};

</script>

<style lang="scss">
@use "@/styles/molecules/button-group";
</style>
