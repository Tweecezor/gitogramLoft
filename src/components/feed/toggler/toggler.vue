<template>
    <button class="btn btn-comments" :class="{ active: isShow }" @click="onClickToggler">
        <span class="text">{{ isShow ? 'Hide' : 'Show' }} issues</span>
        <Icon name="angleDown" />
    </button>
</template>

<script>
import Icon from '@/components/icons/icon'

export default {
    components: { Icon },
    data: () => ({
        isShow: false
    }),
    methods: {
        onClickToggler() {
            this.isShow = !this.isShow
            this.$emit('onClickToggler', this.isShow)
        }
    }
    
}
</script>