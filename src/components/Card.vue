<template>
  <div class="card">
    <div class="card-front"
      <h3>{{ front }}</h3>
    </div>
    <div class="card-back">
      <h3>{{ back }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      front: 'What is your name?',
      back: 'King Aurther'
    }
  }
}
</script>
