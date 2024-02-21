<template>
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
</template>

<script lang="ts" setup></script>

<style></style>
