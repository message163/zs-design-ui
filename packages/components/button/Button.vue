<template>
    <button :class="[bn.getDefaultName(), bn.getColorName(color)]">
        <span>test</span>
    </button>
</template>
<script lang="ts" setup>
import { type ButtonColor, buttonClassName } from './button'
defineProps<{
    /** 按钮颜色 */
    color: ButtonColor
}>()

const bn = buttonClassName('button')
</script>
<script lang="ts">
export default {
    name: 'zs-button'
}
</script>
