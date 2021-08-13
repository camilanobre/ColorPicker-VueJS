<template>
  <div :class="$style.colorPicker">
    <div
      :class="$style.colorDiv"
      :style="`background-color:${selectedColor}`"
    >
      <span :class="$style.selectedColorIndicator">
        Cor selecionada: {{selectedColor}}
        </span>
    </div>
    <div :class="$style.colorsList">
      <div
        v-for="color in colorPickerOptions"
        :key="color"
        :class="$style.colorOption"
        :style="`background-color:${color}`"
        @click="selectColor(color)"
      />
    </div>
    <div :class="$style.restore">
      <v-button @click="restore" :class="$style.restoreButton"> Reiniciar </v-button>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    colorPickerOptions: {
      type: Array,
      default: () => [],
    },
    initialSelectedColor: {
      type: String,
      default: 'black',
    },
  },
  created() {
    this.selectedColor = this.initialSelectedColor;
  },
  data() {
    return {
      selectedColor: null,
    };
  },
  methods: {
    selectColor(colorName) {
      this.selectedColor = colorName;
    },
    restore() {
      this.selectedColor = this.initialSelectedColor;
    },
  },
};
</script>

<style lang="scss" module>
.colorPicker {
  display: grid;
  grid-template-rows: 70% 20% 10%;
  height: 450px;
  width: 400px;
  align-items: center;
  box-shadow: 4px 3px 21px 8px rgba(0,0,0,0.75);
}
.colorDiv {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  transition: background-color 500ms linear;
}
.selectedColorIndicator {
  margin-bottom: 20px;
  background-color: #EEEEEE;
  color: black;
  padding: 0 30px;
  font-weight: bold;
  font-size: 20px;
}
.colorsList {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
  column-gap: 25px;
  padding: 0 25px;
}
.colorOption{
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.restoreButton{
  border: 4px solid#fff;
  border-radius: 20px;
  padding: 10px;
  background-color:#E0E0E0;
  font-size: 15px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}
</style>
