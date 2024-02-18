<template>
  <header class="fixed left-0 top-0 w-full">
    <div class="container">
      <div class="header__inner">
        <div class="go-back">
          <svg class="feather go-back__icon">
            <use href="/feather-sprite.svg#arrow-left" />
          </svg>
          <div class="go-back__text">На главную</div>
        </div>
        <div class="logo">AnoLearn</div>
        <Avatar class="logo__img-wrapper">
          <AvatarImage
            class="logo__img"
            src="https://github.com/radix-vue.png"
            alt="@radix-vue" />
          <AvatarFallback>user</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </header>

  <div class="learn-main h-screen pt-20 pb-5">
    <div class="container h-full">
      <div class="learn-main__inner h-full flex flex-col items-start">
        <div class="flex justify-between w-full">
          <h1 class="learn-main__title font-bold text-5xl mb-5">
            {{ learningWordTranslated }}
          </h1>
          <Menubar>
            <MenubarMenu>
              <!-- <MenubarTrigger>
                <svg class="feather word-zv">
                  <use href="/feather-sprite.svg#more-horizontal" />
                </svg>
              </MenubarTrigger> -->
              <!-- <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled> New Incognito Window </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent> -->
            </MenubarMenu>
          </Menubar>
        </div>
        <Badge class="learn-main__count-of-learning mb-14">
          Заучено: {{ count }} / 5
        </Badge>
        <div class="flex items-center mb-5 justify-between w-full"></div>
        <div class="flex gap-1 mb-1">
          <Badge class="learn-main__learning-text">{{ learningText }}</Badge>
          <Badge class="learn-main__learning-word">Код</Badge>
        </div>
        <div class="flex gap-1">
          <Badge class="learn-main__learning-text">******</Badge>
          <Badge class="learn-main__learning-word"> ****** </Badge>
        </div>
        <span class="learn-main__learning-text flex flex-wrap">
          <!-- {{ learningTextTranslated }} -->
          <div
            v-for="words of learningTextTranslated.split(' ')"
            class="word flex mr-4">
            <div v-for="letter of words" class="letter">
              <svg class="feather word-zv">
                <use href="/feather-sprite.svg#triangle" />
              </svg>
            </div>
          </div>
        </span>
        <div class="w-full mt-auto">
          <span>Попыток: </span>
          <span class="learn-input__attempt">{{ attempt }} / 3</span>
          <div class="flex gap-2">
            <Button>help</Button>
            {{ mainInput }}
            <!-- ref="mainInput" -->
            <Input v-model="mainInput" placeholder="Text..." />
            <Button>
              <svg class="feather go-back__icon">
                <use href="/feather-sprite.svg#arrow-right" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const attempt = ref(0)
const count = ref(0)
const learningWordTranslated = ref('Разработчики это люди, которые пишут код')
const learningTextTranslated = ref('Developers is people who write code')
const learningText = ref('Разработчики')
const mainInput = defineModel({ default: 0 })

onMounted(() => {
  // console.log(mainInput.value.$refs.input)
})
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
.go-back {
  display: flex;
  align-items: center;
}
.go-back__icon {
}
.feather {
}
.go-back__text {
}
.logo {
}
.logo__img-wrapper {
}
.logo__img {
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
