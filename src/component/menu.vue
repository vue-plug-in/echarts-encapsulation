<template>
    <Menu mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
        <div class="wrapper-header-nav">
            <router-link to="/" class="wrapper-header-nav-logo">
                <img src="../img/logo.png">
            </router-link>
            <div class="wrapper-header-nav-search">
                <i-select
                        ref="select"
                        v-model="search"
                        filterabless
                        :placeholder="searchText"
                        :not-found-text="notFoundText"
                        @on-change="handleSearch">
                    <i-option v-for="item in navigateList" :key="item.path" :value="item.path">
                        <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                        <template v-else>{{ item.title.split(' ')[0] }}</template>
                    </i-option>
                </i-select>
            </div>
            <div class="wrapper-header-nav-list">
                <Menu-item name="guide">
                    <Icon type="ios-navigate"></Icon>
                    11111
                </Menu-item>
                <Menu-item name="component">
                    <Icon type="ios-keypad"></Icon>
                    22222
                </Menu-item>
                <Menu-item name="live" v-if="lang === 'zh-CN'">
                    <Badge :dot="liveDot">
                        <Icon type="ios-videocam"></Icon>
                        3333
                    </Badge>
                </Menu-item>
                <Menu-item name="practice">
                    <Icon type="ios-analytics"></Icon>
                    44444
                </Menu-item>
                <Submenu name="ecosystem">
                    <template slot="title">
                        <Icon type="ios-infinite"></Icon>
                        5555
                    </template>
                    <Menu-item name="cli">
                        6666
                    </Menu-item>
                    <Menu-item name="iview-loader">
                        iView Loader
                    </Menu-item>
                    <Menu-item name="iview-admin">
                        iView Admin
                    </Menu-item>
                    <Menu-item name="iview-area">
                        iView Area
                    </Menu-item>
                </Submenu>
                <ButtonGroup>
                    <Button type="ghost" size="small" icon="social-github" @click="handleGoToGitHub"></Button>
                </ButtonGroup>
            </div>
        </div>
    </Menu>
</template>
<style>
    .wrapper-header-nav .ivu-menu-item i {
        margin-right: 6px;
    }

    .wrapper-header .ivu-menu {
        z-index: 901;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
    }

    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
        border-bottom: 2px solid transparent;
        color: #fff;
    }

    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
        color: #44f60d;
        border-bottom: 2px solid #44f60d;
    }

    .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item-focus, .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item:hover {
        border: 0;
        color: #333;
    }

    .ivu-btn-ghost {
        border: 0;
        color: #fff;
        font-size: 19px;
    }

    .ivu-btn-group .ivu-btn-icon-only .ivu-icon {
        font-size: 22px;
    }
</style>
<script>
  import navigate from '../data-manage/navigate'

  export default {
    props: {
      activeKey: String
    },
    data () {
      return {
        search: '',
        navigateList: [],
        liveDot: false,
        currentActiveKey: this.activeKey,
        searchText: '搜索',
        notFoundText: '无内容',
        lang: 'zh-CN'
      };
    },
    watch: {
      activeKey (val) {
        this.currentActiveKey = val;
      },
      currentActiveKey (val) {
        this.$emit('on-change', val);
      }
    },
    methods: {
      handleSearch (path) {
        if (this.lang === 'en-US') path += '-en';
        this.search = '';
        this.$refs.select.setQuery('');
        this.$nextTick(() => {
          setTimeout(() => {
            this.$router.push(path);
          }, 300);
        });
      },
      handleSelect (type) {
        const pathSuffix = this.lang === 'zh-CN' ? '' : '-en';

        if (type === 'donate') {
        } else if (type === 'github') {
          window.open('https://github.com/iview/iview');
        } else if (type === 'guide') {
          this.$router.push(navigate.guide[0].path + pathSuffix);
        } else if (type === 'component') {
          this.$router.push(navigate.beforeComponents[0].path + pathSuffix);
        } else if (type === 'practice') {
          this.$router.push(navigate.practice[0].path + pathSuffix);
        } else if (type === 'cli') {
          this.$router.push('/cli' + pathSuffix);
        } else if (type === 'live') {
          this.$router.push('/live');
        } else if (type === 'iview-loader') {
          this.$router.push('/docs/guide/iview-loader' + pathSuffix);
        } else if (type === 'iview-admin') {
          window.open('https://github.com/iview/iview-admin');
        } else if (type === 'iview-area') {
          window.open('https://github.com/iview/iview-area');
        }
        this.$nextTick(() => {
          this.updateActiveNav();
        });
      },
      updateActiveNav () {
        const componentList = [
          '/docs/guide/install',
          '/docs/guide/start',
          '/docs/guide/i18n',
          '/docs/guide/theme',
          '/docs/guide/iview-loader',
          '/overview',
          '/docs/guide/update'
        ];

        const route = this.$route.path;
        if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
          this.currentActiveKey = 'component';
        } else if (route.indexOf('practice') > -1) {
          this.currentActiveKey = 'practice';
        } else if (route.indexOf('live') > -1) {
          this.currentActiveKey = 'live';
        } else {
          this.currentActiveKey = 'guide';
        }
      },
      handleGoToGitHub () {
        window.open('https://github.com/vue-plug-in/echarts-encapsulation');
      },
    },
    created () {
      this.lang = this.$lang;
      let list = [];
      for (let i = 0; i < navigate.components.length; i++) {
        for (let j = 0; j < navigate.components[i].list.length; j++) {
          list.push(navigate.components[i].list[j]);
        }
      }
      this.navigateList = list;
    }
  };
</script>