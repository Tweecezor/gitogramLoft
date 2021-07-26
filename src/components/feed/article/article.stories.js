import article from './article.vue'
export default {
    title: 'article',
    components: { article }
}

export const defaultView = () => ({
    components: { article },
    template: `
        <article />
    `
})
