import content from './content.vue'
export default {
    title: 'content',
    components: { content }
}

export const defaultView = () => ({
    components: { content },
    template: `
        <content />
    `
})
