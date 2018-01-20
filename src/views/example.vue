<style lang="scss">
    .ivu-article .ivu-select li{
        margin-bottom: 0;
    }
    .ivu-article .ivu-select ul{
        padding-left: 0 !important;
        list-style-type: none;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Select 选择器</h1>
            <Anchor title="概述" h2></Anchor>
            <p>使用模拟的增强下拉选择器来代替浏览器原生的选择器。</p>
            <p>选择器支持单选、多选、搜索，以及键盘快捷操作。</p>
            <Alert show-icon style="margin-top: 16px">注意：非 template/render 模式下，需使用 <code>i-select</code>、<code>i-option</code>。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span class="demo-data">{{ model1 }}</span>
                </div>
                <div slot="desc">
                    <p>基本用法。可以使用 v-model 双向绑定数据。</p>
                    <p>单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据<code>Option</code>的<code>value</code>来返回选中的数据。</p>
                    <p>可以给<code>Select</code>添加 style 样式，比如宽度。</p>
                    <p>在展开选择器后，可以使用键盘的<code>up</code>和<code>down</code>快速上下选择，按下<code>Enter</code>选择，按下<code>Esc</code>收起选择器。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>
<script>
  import iArticle from '../component/article.vue';
  import iCode from '../component/code.vue';
  import Demo from '../component/demo.vue';
  import Code from '../code/select';
  import Anchor from '../component/anchor.vue';

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      Anchor
    },
    data () {
      return {
        code: Code,
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        cityList1: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          }
        ],
        cityList2: [
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: '',
        model2: '',
        model3: '',
        model4: '',
        model5: '',
        model6: '',
        model7: '',
        model8: '',
        model9: '',
        model10: [],
        model11: '',
        model12: [],
        list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'],
        model13: '',
        loading1: false,
        options1: [],
        model14: [],
        loading2: false,
        options2: []
      }
    },
    methods: {
      remoteMethod1 (query) {
        if (query !== '') {
          this.loading1 = true;
          setTimeout(() => {
            this.loading1 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options1 = [];
        }
      },
      remoteMethod2 (query) {
        if (query !== '') {
          this.loading2 = true;
          setTimeout(() => {
            this.loading2 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options2 = [];
        }
      }
    }
  }
</script>