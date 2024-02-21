<template>
  <HeaderVue to="register" />

  <div class="h-screen pt-20 pb-5">
    <div class="container h-full">
      <div class="h-full flex flex-col items-start">
        <div class="flex justify-between w-full gap-5">
          <h1 class="font-bold text-3xl mb-2">
            {{ currentWord.sentenceTranslate }}
          </h1>
          <SentenceEditMenuBar />
        </div>
        <Badge class="mb-8"> Заучено: {{ currentWord.progress }} / 5 </Badge>
        <HideText :sentence="currentWord.sentenceEN" />
        <LearnInput />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const words = [
  {
    id: 1,
    keywords: ['code', 'develop'],
    sentenceEN: 'Developers is people who write code',
    sentenceTranslate: 'Разработчики это люди, которые пишут код',
    progress: 0,
  },
]

const currentWord = ref({
  id: 1,
  keywords: ['code', 'develop'],
  sentenceEN: 'Developers is people who write code',
  sentenceTranslate: 'Разработчики это люди, которые пишут код',
  progress: 0,
})
</script>

<style>
header {
  border-bottom: 2px solid hsl(var(--border));
}

.word-zv {
  width: 14px;
  height: 14px;
}
</style>
