<template>
    <div class="topline">
        <Logo />
        <Actions />
    </div>
</template>

<script>

import Logo from './logo/logo'
import Actions from './actions/actions'

export default {
    components: {
        Logo,
        Actions
    }
}
</script>

<style lang="scss" src="./topline.scss"></style>
