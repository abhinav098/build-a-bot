<template>
  <div>
    <h1>{{part.title}}</h1>
    <p>{{part.description}}</p>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  props: {
    partType: {
      type: String,
      validator(value) {
        return ['arms', 'heads', 'torsos', 'bases'].includes(value);
      },
    },
    id: {
      type: Number,
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  mixins: [getPartsMixin],
  computed: {
    part() {
      const { partType, id } = this.$route.params;
      return this.parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>
