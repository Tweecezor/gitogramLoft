<template>
    <div class="feed-article">
        <h2 class="feed-title">Vue.js</h2>
        <p><b>JavaScript</b> framework for building interactive web applications ⚡</p>
        <Activity />
    </div>
</template>

<script>
import Activity from '../activity/activity.vue'

export default {
    components: { Activity }
}
</script>