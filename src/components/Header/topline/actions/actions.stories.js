import actions from './actions.vue'
export default {
    title: 'actions',
    components: { actions }
}

export const defaultView = () => ({
    components: { actions },
    template: `
        <actions />
    `
})
