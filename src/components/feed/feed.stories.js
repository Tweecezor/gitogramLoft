import feed from './feed.vue'
import article from './article/article.vue'
export default {
    title: 'feed',
    components: { feed, article }
}

export const defaultView = () => ({
    components: { feed, article },
    template: `
        <feed>
            <template #article>
                <article />
            </template>
        </feed>
    `
})
