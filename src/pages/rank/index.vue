<script lang="ts" setup>
import { rankList } from './const'
const rankArrData = ref(rankList)
</script>
<template>
  <div class="container">
    <div class="rank-container">
      <div
        v-for="(item, index) in rankArrData"
        :key="index"
        class="flex px-16 rank-item"
        :class="item.user_id === 1 ? 'cur-user' : ''"
      >
        <div class="w-60 rank-index">{{ item.index }}</div>
        <div class="flex-1 truncate text-left">{{ item.user_name }}</div>
        <div class="justify-self-end w-60 text-center rank-value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>
<style>
@import './index.scss';
</style>
