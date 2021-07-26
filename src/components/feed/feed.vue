<template>
    <div class="feed-card">
        <div class="feed-header">
            <Avatar username="username" width="44" height="44" />
        </div>
        <div class="feed-body">
            <slot name="article" />
        </div>
        <div class="feed-footer">
            <Toggler @onClickToggler="onClickToggler" />
            <div class="comments" v-show="isShowComments">
                <div class="comment-item">
                    <span class="outher-username">joshua_l</span>
                    <span class="outher-user-comment">Enable performance measuring in production, at the user's request</span>
                </div>
                <div class="comment-item">
                    <span class="outher-username">Camille</span>
                    <span class="outher-user-comment">It's Impossible to Rename an Inherited Slot</span>
                </div>
                <div class="comment-item">
                    <span class="outher-username">Marselle</span>
                    <span class="outher-user-comment">transition-group with flex parent causes removed items to fly</span>
                </div>
            </div>
            <span class="feed-date">15 may</span>
        </div>
    </div>
</template>

<script>
import Avatar from '@/components/avatar/avatar'
import Toggler from './toggler/toggler.vue'

export default {
    components: {
        Avatar,
        Toggler
    },
    data: () => ({
        isShowComments: false
    }),
    methods: {
        onClickToggler(payload) {
            console.log(payload)
            this.isShowComments = payload
        }
    }
}
</script>

<style lang="scss" src="./feed.scss"></style>
