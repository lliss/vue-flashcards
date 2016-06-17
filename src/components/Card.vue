<template>
  <button @click="prevCard">Prev</button>
  <div class="card">
    <div class="card-front"
      <h3>{{ currentCard.front }}</h3>
    </div>
    <div class="card-back">
      <h3>{{ currentCard.back }}</h3>
    </div>
  </div>
  <button @click="nextCard">Next</button>
</template>

<script>

import * as actions from '../actions'

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
