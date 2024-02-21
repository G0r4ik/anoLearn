<template>
  <div class="learn-main__learning-text flex flex-wrap items-center">
    <span class="opacity-0 invisible w-0">beep boop</span>
    <div
      v-for="(words, i) of props.sentence.split(' ')"
      class="word flex mr-4 text-2xl items-center font-mono"
      @click="showWord(i)"
      :ref="el => (wordRefs[i] = el)">
      <svg v-for="letter of words" class="feather word-zv">
        <use href="/feather-sprite.svg#disc" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  sentence: { default: 'Text test' },
})

const wordRefs = ref([])
function showWord(id: number) {
  const word = props.sentence.split(' ')[id]
  wordRefs.value[id].innerHTML = word
}
</script>

<style></style>
