<template>
    <div>
        <grid-layout
                :max-rows="1"
                :layout="layout"
                :col-num="12"
                :row-height="30"
                :is-draggable="true"
                :is-resizable="true"
                :vertical-compact="true"
                :margin="[10, 10]"
                :use-css-transforms="true"
                @layout-created="layoutCreatedEvent"
                @layout-before-mount="layoutBeforeMountEvent"
                @layout-mounted="layoutMountedEvent"
                @layout-ready="layoutReadyEvent"
                @layout-updated="layoutUpdatedEvent"
        >

            <grid-item v-for="item in layout"
                       :x="item.x"
                       :y="item.y"
                       :w="item.w"
                       :h="item.h"
                       :i="item.i"
                       :key="item.i"
                       @resize="resizeEvent"
                       @move="moveEvent"
                       @resized="resizedEvent"
                       @container-resized="containerResizedEvent"
                       @moved="movedEvent">
                {{item.i}}
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'

export default {
  name: 'EGrid',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data () {
    return {
      layout: [
        { 'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': '0' },
        { 'x': 2, 'y': 0, 'w': 2, 'h': 2, 'i': '1' },
        { 'x': 4, 'y': 0, 'w': 2, 'h': 2, 'i': '2' },
        { 'x': 6, 'y': 0, 'w': 2, 'h': 2, 'i': '3' },
        { 'x': 8, 'y': 0, 'w': 2, 'h': 2, 'i': '4' },
        { 'x': 10, 'y': 0, 'w': 2, 'h': 2, 'i': '5' }
      ]
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
      console.log('Updated layout: ', newLayout)
    },
    moveEvent: function (i, newX, newY) {
      console.log('MOVE i=' + i + ', X=' + newX + ', Y=' + newY)
    },
    resizeEvent: function (i, newH, newW, newHPx, newWPx) {
      console.log('RESIZE i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    },
    movedEvent: function (i, newX, newY) {
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

<style scoped>

</style>
