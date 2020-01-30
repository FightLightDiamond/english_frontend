<template>
    <div>
        <!--{{moment()-->
        <!--.startOf('month')-->
        <!--.add(1, 'months')-->
        <!--.endOf('month').format('DD/MM/YYYY')}}-->
        <!--<datepicker @change="checkTime()" format="yyyy/MM/dd" placeholder="yyyy/MM/dd" :typeable="true" v-model="date"></datepicker>-->
        <!--<input-->
        <!--v-model="date"-->
        <!--v-validate="{ date_format: 'yyyy/MM/dd', date_between:['01/01/1990', maxStartDate] }"/>-->
        <!--<grid-layout-->
                <!--:layout.sync="layout"-->
                <!--:col-num="12"-->
                <!--:row-height="30"-->
                <!--:max-rows="5"-->
                <!--:is-draggable="true"-->
                <!--:is-resizable="false"-->
                <!--:is-mirrored="false"-->
                <!--:vertical-compact="false"-->
                <!--:prevent-collision="true"-->
                <!--:use-css-transforms="true"-->
                <!--:margin="[10, 10]"-->
                <!--@click="newItem()"-->
                <!--@layout-updated="layoutUpdatedEvent"-->
        <!--&gt;     -->

            <grid-layout
                :layout.sync="layout"
                :col-num="12"
                :row-height="30"
                :max-rows="5"
                :is-draggable="true"
                :is-resizable="false"
                :is-mirrored="false"
                :vertical-compact="false"
                :prevent-collision="true"
                :use-css-transforms="true"
                :margin="[10, 10]"
                @click="newItem()"
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
                       @moved="movedEvent"
                       @click="newItem()"
            >
                {{item.i}} {{item.i > 6 && item.i < 9 ? 'Static' : ''}}
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Datepicker: Datepicker
  },
  data () {
    return {
      date: '2020/01/09',
      layout: [
        { 'x': 0, 'y': 0, 'w': 1, 'h': 1, 'i': '0', id: 1, name: 'A' },
        { 'x': 1, 'y': 0, 'w': 1, 'h': 1, 'i': '31', id: 2, name: 'B' },
        { 'x': 2, 'y': 0, 'w': 1, 'h': 1, 'i': '1', id: 2, name: 'B' },
        { 'x': 5, 'y': 0, 'w': 2, 'h': 1, 'i': '2', id: 2, name: 'C' },
        { 'x': 0, 'y': 1, 'w': 1, 'h': 1, 'i': '10', id: 1, name: 'A' },
        { 'x': 2, 'y': 1, 'w': 1, 'h': 1, 'i': '11', id: 2, name: 'B' },
        { 'x': 5, 'y': 1, 'w': 2, 'h': 1, 'i': '12', id: 2, name: 'C' }
      ],
      BK: [],
      mapData: {
        y: { 0: 'level 0', 1: 'level 1', 2: 'level 2', 3: 'level 3', 4: 'level 4' },
        x: { start: 8, round: 30 }
      },
      blackList: {
        booking: [
          { x: 3, y: 0 },
          { x: '*', y: 2 }
        ]
      },
      type: 'booking',
      errorType: 0,
      itemMove: null
    }
  },
  mounted () {
    this.BK = this.clone(this.layout)
  },
  methods: {
    newItem () {
      alert(123)
    },
    layoutUpdatedEvent: function (newLayout) {
      console.log('Updated layout: ', newLayout)
    },
    movedEvent: async function (i, newX, newY) {
      const item = this.getItemInfo(i)
      console.log('move', item)

      if (await this.isError(item, newX, newY)) {
        this.layout = this.clone(this.BK)
      } else {
        this.applyMove()
      }
    },
    applyMove () {
      const newTime = this.mapData.x['start'] * (this.itemMove.x + this.itemMove.w)
      const newType =
        console.log(this.mapData)
        // alert('Time:' + this.mapData.x['start'] * (this.itemMove.x + this.itemMove.w))
        // alert('Type:' + this.mapData.y[this.itemMove.y])
    },
    async isError (item, newX, newY) {
      this.errorType = false
      const checkList = this.blackList[this.type]

      for (let i in checkList) {
        if ((checkList[i].x === newX || checkList[i].x === '*') && (checkList[i].y === newY || checkList[i].y === '*')) {
          this.errorType = 1
          alert('Vị trí không hợp lệ')
          break
        }
      }
      const result = await fetch('google.com')
      console.log('Ewrwrwrw', result)

      if (result.status !== 200) {
        this.errorType = 500
        alert('Validate fail')
      }

      return this.errorType
    },
    clone (item) {
      return JSON.parse(JSON.stringify(item))
    },
    getItemInfo (index) {
      for (let i in this.layout) {
        if (this.layout[i].i === index) {
          this.itemMove = this.clone(this.layout[i])
        }
      }
      return this.itemMove
    },

    checkTime () {
      var re = /[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])/
      var m

      if ((m = regex.exec(str)) !== null) {
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
          console.log(`Found match, group ${groupIndex}: ${match}`)
        })
      }

      while ((m = re.exec(this.date)) != null) {
        if (m.index === re.lastIndex) {
          re.lastIndex++
        }
      }
    },
    checkDate () {
      var myRegExp = /^\d{4}-[0-1][0-2]-[0-3]\d\s([0-1][0-9]|2[0-3]):[0-5]\d$/

      if (this.date.match(myRegExp)) {
        console.log('Good format')
      }
    },
    maxStartDate: function () {
      return moment()
        .startOf('month')
        .add(1, 'months')
        .endOf('month').format('DD/MM/YYYY')
    }
  }
}
</script>
