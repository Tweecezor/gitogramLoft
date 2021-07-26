<template>
    <section class="home-page">
        <section class="users-feeds">
            <div class="container">
                <Feed>
                    <template #article>
                        <Article />
                    </template>
                </Feed>
            </div>
        </section>
    </section>
</template>

<script>
import Feed from '@/components/feed/feed'
import Article from '@/components/feed/article/article'

export default {
    name: 'Home',
    components: {
        Feed,
        Article
    }
}
</script>


<style lang="scss">
    .users-feeds {
        max-width: 980px;
        margin: 0 auto;
    }
</style>