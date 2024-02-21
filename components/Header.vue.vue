<template>
  <header class="fixed left-0 top-0 w-full">
    <div class="container">
      <div class="flex justify-between items-center">
        <NuxtLink class="go-back flex items-center gap-1" :to="props.to">
          <svg class="feather go-back__icon">
            <use href="/feather-sprite.svg#arrow-left" />
          </svg>
          <div class="go-back__text font-semibold uppercase">На главную</div>
        </NuxtLink>
        <div class="logo font-semibold text-2xl">AnoLearn</div>
        <NuxtLink to="/user">
          <Avatar class="logo__img-wrapper">
            <AvatarImage
              class="logo__img"
              src="https://github.com/radix-vue.png"
              alt="@radix-vue" />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const props = defineProps({
  to: {
    default: '/',
  },
})
</script>

<style></style>
