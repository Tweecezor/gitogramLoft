<template>
    <div class="content">
        <ul class="story-user-list">
            <li v-for="user in users" :key="user.id">
                <Avatar width="80" height="80" :username="user.username" />
            </li>
        </ul>
    </div>
</template>
<script>
import Avatar from '@/components/avatar/avatar.vue'

export default {
    props: {
        users: Array
    },
    components: {
        Avatar
    }
}
</script>

<style lang="scss" src="./content.scss"></style>
