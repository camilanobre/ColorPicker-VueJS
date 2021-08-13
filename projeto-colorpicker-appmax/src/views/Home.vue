<template>
  <div :class="$style.container" >
    <ColorPicker :colorPickerOptions="colorOptions" :class="$style.colorPicker" />
  </div>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue';

export default {
  name: 'Home',
  components: {
    ColorPicker,
  },
  data() {
    return {
      colorOptions: [
        'purple',
        'coral',
        'magenta',
        'lime',
        'crimson',
      ],
    };
  },
};
</script>

<style lang="scss" module>
.container{
  display: grid;
  grid-template-columns: 25% 50% 25%;
  justify-items: center;
  align-items: center;
  height: 100%;
}
.colorPicker{
  grid-column: 2
}
</style>
