<template>
    <div class="avatar-component">
        <picture>
            <img
                v-bind="$attrs" 
                class="user-avatar" 
                :src="src" 
                :alt="username">
        </picture>
        <span v-if="username" class="username">{{ username }}</span>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: 'https://picsum.photos/200/200'
        },
        username: String
    },
    mounted() {
        console.log(window.location)
    }
}
</script>

<style lang="scss" src="./avatar.scss"></style>
