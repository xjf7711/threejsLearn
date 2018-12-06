import * as Stats from 'stats.js'
export default {
  data() {
    return {
      stats: null
    }
  },
  mounted() {
    this.initStats()
  },
  destroyed() {
    this.stats = null
  },
  methods: {
    async initStats() {
      this.stats = new Stats()

      this.stats.setMode(0) // 0: fps, 1: ms

      // Align top-left
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '20px'
      this.stats.domElement.style.top = '87px'

      this.$el.appendChild(this.stats.domElement)
    }
  }
}
