<template>
    <v-list-tile >
        <v-list-tile-action>
            <v-checkbox :v-model="complete"></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content @click="toggle">
            <v-list-tile-title>{{msg}}</v-list-tile-title>
            <v-list-tile-sub-title>Hangouts video call</v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
</template>
<script>
export default {
  name: "Todo",
  data: function() {
    return {
      complete: false
    };
  },
  props: {
    msg: String
  },
  methods: {
    toggle() {
      this.complete = !this.complete;
    }
  }
};
</script>
