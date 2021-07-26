import activity from './activity.vue'
export default {
    title: 'activity',
    components: { activity }
}

export const defaultView = () => ({
    components: { activity },
    template: `
        <activity />
    `
})
