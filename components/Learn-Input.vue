<template>
  <div class="w-full mt-auto">
    <Button>show 1 letters</Button>
    <span>Попыток: </span>
    <span class="learn-input__attempt">{{ attempt }} / 3</span>
    <div class="flex gap-2">
      <Input
        v-model="mainInput"
        @keydown.enter="checkTranslate"
        placeholder="Text..." />
      <Button>
        <svg class="feather go-back__icon">
          <use href="/feather-sprite.svg#arrow-right" />
        </svg>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  //
})

const mainInput = defineModel({ default: '' })

const attempt = ref(0)

function checkTranslate() {
  console.log(mainInput.value)
}
</script>

<style></style>
