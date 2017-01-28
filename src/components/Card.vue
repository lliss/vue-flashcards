<template>
  <div id="card-container" v-on:keyup.left="prevCard" v-on:keyup.right="nextCard">
    <button @click="prevCard">prev</button>
    <div class="card">
      <div class="card-front"
        <h3>{{ currentCard.front }}</h3>
      </div>
      <div class="card-back">
        <h3>{{ currentCard.back }}</h3>
      </div>
    </div>
    <button @click="nextCard">next</button>
  </div>
</template>

<script>
import * as actions from '../actions.js'

export default {
  vuex: {
    getters: {
      currentCard: function(state) {
        return state.cards[state.currentCard];
      }
    },
    actions: actions
  }
}
</script>
