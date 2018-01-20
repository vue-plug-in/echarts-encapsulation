<style lang="scss" scoped>
    @import "../style/navigate";
</style>
<template>
    <div class="navigate">
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'guide'">
            <Menu-item v-for="item in navigate.guide" :key="item.path" :name="item.path">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'component'">
            <div class="navigate-group">99999</div>
            <Menu-group v-for="item in navigate.components" :key="item.type" :title="item.type">
                <Menu-item v-for="component in item.list" :key="component.path" :name="component.path">
                    <i class="ivu-icon" :class="'ivu-icon-' + component.icon"></i>
                    <template v-if="lang === 'zh-CN'">
                        {{ component.title.split(' ')[0] }}
                        <span class="navigate-group-span">{{ component.title.split(' ')[1] }}</span>
                    </template>
                    <template v-else>{{ component.title.split(' ')[0] }}</template>
                </Menu-item>
            </Menu-group>
        </Menu>
    </div>
</template>
<script>
  import navigate from '../data-manage/navigate';

  export default {
    props: {
      type: {
        type: [String, Number]
      }
    },
    data () {
      return {
        navigate: navigate,
        lang: 'zh-CN',
        activeKey: this.$route.path,
      }
    },
    methods: {
      handleSelect (path) {
        if (this.lang === 'en-US') path += '-en';
        this.$nextTick(() => {
          this.$router.push(path);
        });
      }
    },
    created () {
      const path = this.lang === 'zh-CN' ? this.$route.path : this.$route.path.split('-en')[0];
      this.activeKey = path;
    },
    mounted () {
    }
  }
</script>