<template>
  <div class="learn">
    <div class="lg:p-8">
      <div
        class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p class="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>

        <div :class="cn('grid gap-6', $attrs.class ?? '')">
          <form @submit="onSubmit">
            <div class="grid gap-2">
              <div class="grid gap-1">
                <Label class="sr-only" for="email"> Email </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  auto-capitalize="none"
                  auto-complete="email"
                  auto-correct="off"
                  :disabled="isLoading" />
              </div>
              <Button :disabled="isLoading">
                <!-- <LucideSpinner v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" /> -->
                Sign In with Email
              </Button>
            </div>
          </form>
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-background px-2 text-muted-foreground"> Or </span>
            </div>
          </div>
          <Button variant="outline" type="button" :disabled="isLoading">
            Login
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { ref } from 'vue'
import { buttonVariants } from '~/components/ui/button'

const isLoading = ref(false)
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<style>
/*  */
.learn1 {
  display: none;
}
.learn {
  width: 100vw;
  height: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
