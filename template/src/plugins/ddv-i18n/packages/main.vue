<template>
  <span v-text="word"></span>
</template>

<script>
export default {
  name: 'DdvI18n',
  props: {
    type: {
      type: String,
      default: '$t',
      validator (val) {
        return ['$t', '$tc', '$te', '$d', '$n'].indexOf(val) > -1
      }
    },
    value: [String, Number, Array, Object],
    choice: [String, Number, Array, Object]
  },
  computed: {
    word () {
      return this[this.type](this.value, this.choice)
    }
  }
}
</script>

