<template>
  <HeaderVue to="register" />

  <div class="learn-main h-screen pt-20 pb-5">
    <div class="container h-full">
      <div class="learn-main__inner h-full flex flex-col items-start">
        <div class="flex justify-between w-full gap-5">
          <h1 class="learn-main__title font-bold text-3xl mb-2">
            {{ currentWord.sentenceTranslate }}
          </h1>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <svg class="feather">
                  <use href="/feather-sprite.svg#more-horizontal" />
                </svg>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Edit sentence <MenubarShortcut>ctrl+T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Delete <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <Badge class="learn-main__count-of-learning mb-8">
          Заучено: {{ currentWord.progress }} / 5
        </Badge>

        <div class="learn-main__learning-text flex flex-wrap items-center">
          <span class="opacity-0 invisible w-0">beep boop</span>
          <div
            v-for="(words, i) of currentWord.sentenceEN.split(' ')"
            class="word flex mr-4 text-2xl items-center font-mono"
            @click="showWord(i)"
            :ref="el => (wordRefs[i] = el)">
            <svg v-for="letter of words" class="feather word-zv">
              <use href="/feather-sprite.svg#disc" />
            </svg>
          </div>
        </div>
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

const attempt = ref(0)
const count = ref(0)
const learningWordTranslated = ref('Разработчики это люди, которые пишут код')
const learningTextTranslated = ref('Developers is people who write code')
const learningText = ref('Разработчики')
const mainInput = defineModel({ default: '' })
const wordRefs = ref([])

function showWord(id: number) {
  const word = learningTextTranslated.value.split(' ')[id]
  wordRefs.value[id].innerHTML = word
}
</script>

<style>
header {
  border-bottom: 2px solid hsl(var(--border));
}
.container {
  max-width: 1400px;
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.feather {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.word-zv {
  width: 14px;
  height: 14px;
}
.space {
  width: 14px;
}
</style>
