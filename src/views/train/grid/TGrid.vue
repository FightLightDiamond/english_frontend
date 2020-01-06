<template>
    <div>
        <grid-layout
                :layout.sync="layout"
                :col-num="12"
                :row-height="30"
                :is-draggable="true"
                :is-resizable="false"
                :is-mirrored="false"
                :vertical-compact="false"
                :prevent-collision="true"
                :margin="[10, 10]"
                :use-css-transforms="true"
        >

            <grid-item v-for="item in layout"
                       :is-draggable="true"
                       :static="item.i > 6 && item.i < 9"
                       :x="item.x"
                       :y="item.y"
                       :w="item.w"
                       :h="item.h"
                       :i="item.i"
                       :drag-allow-from="`div`"
                       :key="item.i"
                       @moved="movedEvent"
            >
                {{item.i}} {{item.i > 6 && item.i < 9 ? 'Static' : ''}}
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
  import VueGridLayout from 'vue-grid-layout'

  export default {
    components: {
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    data () {
      return {
        layout: [
          { 'x': 0, 'y': 0, 'w': 1, 'h': 1, 'i': '0' },
          { 'x': 2, 'y': 0, 'w': 1, 'h': 1, 'i': '1' },
        ],
        BK: [
          { 'x': 0, 'y': 0, 'w': 1, 'h': 1, 'i': '0' },
          { 'x': 2, 'y': 0, 'w': 1, 'h': 1, 'i': '1' },
        ],
        blackList: {
          booking: [
            { x: 3, y: 0 },
            { x: 3, y: 3 },
          ]
        },
        type: 'booking',
        error: false,
        index: null
      }
    },
    methods: {
      movedEvent: function (i, newX, newY) {
        this.index = i
        if (this.isValid(newX, newY)) {
          this.layout = this.clone(this.BK)
        } else {
          this.BK = this.clone(this.layout)
        }
      },
      isValid (newX, newY) {
        this.error = false
        const checkList = this.blackList[this.type]

        for (let i in checkList) {
          if (checkList[i].x === newX && checkList[i].y === newY) {
            this.error = true
            break
          }
        }

        return this.error
      },
      clone (item) {
        return JSON.parse(JSON.stringify(item))
      }
    }
  }
</script>
