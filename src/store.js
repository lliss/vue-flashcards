import Vue from 'vue'
import Vuex from '../../src'

Vue.use(Vuex)

const state = {
  currentCard: 0,
  cards: [
    {
      'front': 'What is your name?',
      'back': 'King Aurther.'
    },
    {
      'front': 'What is your quest?',
      'back': 'The quest for the holy grail.'
    },
    {
      'front': 'What is your favoriate color?',
      'back': 'Blue, no I mean red.'
    },
    {
      'front': 'What is the speed of a swallow carrying a coconut?',
      'back': 'Is it an African or a European swallow?'
    }
  ]
}

const mutations = {
  NEXT_CARD (state) {
    state.currentCard++
    if (state.currentCard >= state.cards.length) {
      state.currentCard = 0
    }
  },

  PREV_CARD (state) {
    state.currentCard--
    if (state.currentCard < 0) {
      state.currentCard = 0
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
