<template>
    <div class="row">
        <div class="col-12">
            <h3>Draggable 1</h3>
            <draggable class="row" :list="list1" group="people" :sort="false" @change="log">
                <div  style="background: silver; padding: 3px"
                        class="col-3"
                        v-for="(element, index) in list1"
                        :key="element.name"
                >
                    {{ element.name }}
                </div>
            </draggable>
        </div>

        <div class="col-12">
            <h3>Draggable 2</h3>
            <draggable class="row" :sort="true" :list="list2" group="people" @change="log">
                <div class="col-3" style="background: gainsboro; padding: 3px"
                        v-for="(element, index) in list2"
                        :key="element.name"
                >
                    {{ element.name }}
                </div>
            </draggable>
        </div>

        <!--<rawDisplayer class="col-3" :value="list1" title="List 1" />-->

        <!--<rawDisplayer class="col-3" :value="list2" title="List 2" />-->
    </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: "two-lists",
    display: "Two Lists",
    order: 1,
    components: {
      draggable
    },
    data() {
      return {
        list1: [
          { name: "John", id: 1 },
          { name: "Joao", id: 2 },
          { name: "Jean", id: 3 },
          { name: "Gerard", id: 4 }
        ],
        list2: [
          { name: "xxx", id: 5 },
          { name: "Ed444gard", id: 6 },
          { name: "J555son", id: 7 },
          { name: "11Jo5", id: 7 },
        ]
      };
    },
    methods: {
      add: function() {
        this.list.push({ name: "Juan" });
      },
      replace: function() {
        this.list = [{ name: "Edgard" }];
      },
      clone: function(el) {
        return {
          name: el.name + " cloned"
        };
      },
      log: function(evt) {
        window.console.log(evt);
      }
    }
  }
</script>

<style scoped>

</style>
