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
                @layout-created="layoutCreatedEvent"
                @layout-before-mount="layoutBeforeMountEvent"
                @layout-mounted="layoutMountedEvent"
                @layout-ready="layoutReadyEvent"
                @layout-updated="layoutUpdatedEvent"

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
                       @move="moveEvent"
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
  name: 'TGrid',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data () {
    return {
      layout: [
        { 'x': 0, 'y': 0, 'w': 1, 'h': 1, 'i': '0' },
        { 'x': 2, 'y': 0, 'w': 1, 'h': 1, 'i': '1' }
      ],
      BK: [
        { 'x': 0, 'y': 0, 'w': 1, 'h': 1, 'i': '0' },
        { 'x': 2, 'y': 0, 'w': 1, 'h': 1, 'i': '1' }
      ],
      blackXY: [
        [0, 0], [1, 1], [2, 2], [3, 3], [4, 4]
      ],
      error: false,
      index: null
    }
  },
  methods: {
    layoutCreatedEvent: function (newLayout) {
      console.log('Created layout: ', newLayout)
    },
    layoutBeforeMountEvent: function (newLayout) {
      console.log('beforeMount layout: ', newLayout)
    },
    layoutMountedEvent: function (newLayout) {
      console.log('Mounted layout: ', newLayout)
    },
    layoutReadyEvent: function (newLayout) {
      console.log('Ready layout: ', newLayout)
    },
    layoutUpdatedEvent: function (newLayout) {
      if (newLayout[this.index] === 3) {
        this.error = true
      }

      if (this.error) {
        alert('Error')
        this.layout = JSON.parse(JSON.stringify(this.BK))
      } else {
        this.BK = JSON.parse(JSON.stringify(this.layout))
      }
      console.log('BK: ', this.BK)
      console.log('Updated layout: ', newLayout)
    },
    moveEvent: function (i, newX, newY) {
      // if (newX !== 3 && this.error === false) {
      //   console.log(newX)
      //   // this.BK = this.layout
      // }
      // // console.log('LOU', this.layout)

      console.log('MOVE i=' + i + ', X=' + newX + ', Y=' + newY)
    },
    resizeEvent: function (i, newH, newW, newHPx, newWPx) {
      console.log('RESIZE i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    },
    movedEvent: function (i, newX, newY) {
      this.index = i

      if (newX === 3) {
        this.error = true
      } else {
        this.error = false
      }
      //
      // if(this.error) {
      //   alert('Error')
      //   this.layout = this.BK;
      // } else {
      //   alert(1)
      //   // this.BK = this.layout;
      // }
      console.log('MOVED i=' + i + ', X=' + newX + ', Y=' + newY)
    },
    /**
       *
       * @param i the item id/index
       * @param newH new height in grid rows
       * @param newW new width in grid columns
       * @param newHPx new height in pixels
       * @param newWPx new width in pixels
       *
       */
    resizedEvent: function (i, newH, newW, newHPx, newWPx) {
      console.log('RESIZED i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    },
    /**
       *
       * @param i the item id/index
       * @param newH new height in grid rows
       * @param newW new width in grid columns
       * @param newHPx new height in pixels
       * @param newWPx new width in pixels
       *
       */
    containerResizedEvent: function (i, newH, newW, newHPx, newWPx) {
      console.log('CONTAINER RESIZED i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    }
  }
}
</script>
