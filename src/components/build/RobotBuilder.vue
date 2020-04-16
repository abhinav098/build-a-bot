<template>
    <div>
      <div class="top-row">
        <div class="top part">
          <img v-bind:src="availableParts.heads[selected.head].src" title="head"/>
          <button v-on:click="selectPrev('head')" class="prev-selector">&#9668;</button>
          <button v-on:click="selectNext('head')" class="next-selector">&#9658;</button>
        </div>
      </div>
      <div class="middle-row">
        <div class="left part">
          <img v-bind:src="availableParts.arms[selected.leftArm].src" title="left arm"/>
          <button v-on:click="selectPrev('leftArm')" class="prev-selector">&#9650;</button>
          <button v-on:click="selectNext('leftArm')" class="next-selector">&#9660;</button>
        </div>
        <div class="center part">
          <img v-bind:src="availableParts.torsos[selected.torso].src" title="left arm"/>
          <button v-on:click="selectPrev('torso')" class="prev-selector">&#9668;</button>
          <button v-on:click="selectNext('torso')" class="next-selector">&#9658;</button>
        </div>
        <div class="right part">
          <img v-bind:src="availableParts.arms[selected.rightArm].src" title="left arm"/>
          <button v-on:click="selectPrev('rightArm')" class="prev-selector">&#9650;</button>
          <button v-on:click="selectNext('rightArm')" class="next-selector">&#9660;</button>
        </div>
      </div>
      <div class="bottom-row">
        <div class="bottom part">
          <img v-bind:src="availableParts.bases[selected.base].src" title="left arm"/>
          <button v-on:click="selectPrev('base')" class="prev-selector">&#9668;</button>
          <button v-on:click="selectNext('base')" class="next-selector">&#9658;</button>
        </div>
      </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';

function getPrevValidIndex(index, partsLength) {
  if (index === 0) {
    return partsLength - 1;
  }
  return index - 1;
}

function getNextValidIndex(index, partsLength) {
  if (index === (partsLength - 1)) {
    return 0;
  }
  return index + 1;
}

function selectKey(part) {
  let key;
  switch (part) {
    case 'head':
      key = 'heads';
      break;
    case 'torso':
      key = 'torsos';
      break;
    case 'leftArm':
      key = 'arms';
      break;
    case 'rightArm':
      key = 'arms';
      break;
    case 'base':
      key = 'bases';
      break;
    default:
      break;
  }
  return key;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      selected: {
        head: 0,
        leftArm: 0,
        rightArm: 0,
        torso: 0,
        base: 0,
      },
    };
  },
  methods: {
    selectPrev(part) {
      const numberOfParts = this.availableParts[selectKey(part)].length;
      const validIndex = getPrevValidIndex(
        this.selected[part], numberOfParts,
      );
      this.selected[part] = validIndex;
    },
    selectNext(part) {
      const numberOfParts = this.availableParts[selectKey(part)].length;
      const validIndex = getNextValidIndex(
        this.selected[part], numberOfParts,
      );
      this.selected[part] = validIndex;
    },
  },
};
</script>


<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
</style>
