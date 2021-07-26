<template>
    <Header>
        <template #topline>
            <Topline />
        </template>
        <template #content>
            <Content :users="users" />
        </template>
    </Header>
    <main>
        <router-view/>
    </main>
</template>

<script>
import Header from '@/components/header/header'
import Topline from '@/components/header/topline/topline'
import Content from '@/components/header/content/content'

import users from '@/assets/json/users.json'

export default {
    components: {
        Header,
        Topline,
        Content
    },
    data: () => ({
        users
    })
}
</script>
<style lang="scss" src="./assets/scss/common.scss"></style>
