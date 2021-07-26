<template>
    <div class="topline-actions">
        <router-link class="btn" to="/">
            <Icon name="home" />
        </router-link>
        <router-link class="btn" to="/">
            <Avatar src="https://picsum.photos/200/200" widht="37" height="37" />
        </router-link>
        <button class="btn">
            <Icon name="exit" />
        </button>
    </div>
</template>

<script>
import Avatar from '@/components/avatar/avatar'
import Icon from '@/components/icons/icon'

export default {
    components: {
        Avatar,
        Icon
    }
}
</script>

<style lang="scss" src="./actions.scss"></style>