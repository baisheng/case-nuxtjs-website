<template>
  <div
    id="app"
    style="position: relative;">
    <hero/>

    <section class="c-features">
      <div class="container">
        <div class="row u-justify-center">
          <div class="col-md-10 u-text-center">
            <!--<i class="block-badge center" />-->
            <h2 class="u-color-success u-text-bold">WePY (发音: /'wepi/)</h2>
            <p class="u-h3 u-text-mute u-mb-large u-text-bold">
              <strong>一款让小程序支持组件化开发的框架</strong>，通过预编译的手段让开发者可以选择自己喜欢的开发风格去开发小程序。框架的细节优化，Promise，Async
              Functions的引入都是为了能让开发小程序项目变得更加简单，高效。
            </p>
          </div>
        </div>
      </div>

    </section>

    <section class="c-features c-gradient-side">
      <div class="container">
        <div class="row u-justify-center">
          <div class="col-md-10 u-text-center">
            <i class="block-badge center" />
            <h2 class="u-text-bold">特性</h2>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="c-feature-card">
              <div class="c-feature-card__title">
                <span class="c-feature-card__icon">
                  <i class="fa fa-heart-o"/>
                </span>

                <h4>开发风格</h4>
              </div>

              <p class="u-text-mute u-h6">
                接近于 Vue.js，支持组件 Props 传值，自定义事件、组件分布式复用Mixin、计算属性函数computed、模板内容分发slot等等
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="c-feature-card">
              <div class="c-feature-card__title">

                <span class="c-feature-card__icon">
                  <i class="fa fa-cube"/>
                </span>

                <h4>组件化</h4>
              </div>
              <p class="u-text-mute u-text-large">
                组件化开发，完美解决组件隔离，组件嵌套，组件通信等问题
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="c-feature-card">
              <div class="c-feature-card__title">

                <span class="c-feature-card__icon">
                  <i class="fa fa-n">N</i>
                </span>

                <h4>NPM</h4>
              </div>
              <p class="u-text-mute u-h6">
                支持使用第三方 npm 资源，自动处理 npm 资源之间的依赖关系，完美兼容所有无平台依赖的 npm 资源包
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="c-feature-card">
              <div class="c-feature-card__title">

                <span class="c-feature-card__icon">
                  <i class="fa fa-p">P</i>
                </span>

                <h4>Promise</h4>
              </div>
              <p class="u-text-mute u-text-large">通过 polyfill 让小程序完美支持 Promise，解决回调烦恼.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="c-feature-card">
              <div class="c-feature-card__title">

                <span class="c-feature-card__icon">
                  <i class="fa fa-es">ES</i>
                </span>

                <h4>ES</h4>
              </div>
              <p class="u-text-mute u-h6">
                可使用 Generator Fu-nction / Class / Async Function 等特性，大大提升开发效率
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="c-feature-card">
              <div class="c-feature-card__title">

                <span class="c-feature-card__icon">
                  <i class="fa fa-wrench"/>
                </span>

                <h4>优化</h4>
              </div>
              <p class="u-text-mute u-h6">
                对小程序本身的优化，如请求列对处理，优雅的事件处理，生命周期的补充，性能的优化等等
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="c-feature-card">
              <div class="c-feature-card__title">

                <span class="c-feature-card__icon">
                  <i class="fa fa-cubes"/>
                </span>

                <h4>编译器</h4>
              </div>
              <p class="u-text-mute u-text-large">
                支持样式编译器：Less/Sass/Styus，模板编译器：wx-ml/Pug，代码编译器：Babel/Typescript。
              </p>
            </div>
          </div>


          <div class="col-md-4">
            <div class="c-feature-card">
              <div class="c-feature-card__title">

                <span class="c-feature-card__icon">
                  <i class="fa fa-plug"/>
                </span>

                <h4>插件</h4>
              </div>
              <p class="u-text-mute u-h6">
                支持多种插件处理，如文件压缩，图片压缩，内容替换等，扩展简单,使用方便
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="c-feature-card">
              <div class="c-feature-card__title">

                <span class="c-feature-card__icon">
                  <i class="fa fa-paper-plane-o"/>
                </span>

                <h4>框架大小</h4>
              </div>
              <p class="u-text-mute u-h6">
                压缩后 24.3KB 即可拥有所有框架功能，额外增加 8.9 KB后即可使用 Promise 和 Async Function
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
    <section class="c-preview">
      <div class="container ">
        <div class="row u-justify-center">
          <div class="col-md-10 u-text-center">
            <i class="block-badge center" />

            <h2 class="u-text-bold">应用案例</h2>
            <p class="u-h3 u-text-mute u-mb-large u-text-bold">
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
              <span class="c-badge c-badge--small c-badge--primary">腾讯安心计划</span>
            </p>
          </div>
        </div>
      </div>
      <div
        id="mpshow"
        style="height: 500px;"
        class="u-mt-large u-mb-medium  "/>
      <!--style="transform: matrix(1, 0, 0, 1, 0, -60);"-->

      <div
        id="filters"
        class="filters desktop">
        <!--{{categories}}-->
        <ul class="filters-list">
          <li
            class="filter selected"
            data-id="music"
            style="opacity: 1;">
            <a
              href="#"
              class="bt-filter bt-filter--music">
              <span class="bt-filter-icon"/>
              <span class="bt-filter-remove"/>
            </a>
          </li>
          <li
            v-for="item in visibleCategories"
            :data-id="item.slug"
            :key="item.slug"
            class="filter selected"
            style="opacity: 1;">
            <a
              :class="'bt-filter bt-filter--' + item.slug"
              href="#">
              <span class="bt-filter-icon"/>
              <span class="bt-filter-remove"/>
            </a>
          </li>

        </ul>
      </div>
      <div
        id="layer"
        style="display: none;">
        <div
          class="bg"
          style="opacity: 0; transform: translate3d(0px, 0px, 0px);"/>
        <div class="contents"/>
      </div>


      <div
        id="cardflow"
        style="display: none;">
        <a
          class="cardflow-close"
          href="#"
          style="opacity: 0; transform: matrix(0, 0, 0, 0, 0, 0);">
          <span class="icon"/>
        </a>
      </div>
      <div
        id="loading"
        style="opacity: 0.0881211; transform: matrix3d(0.097231, -0.42932, 0, 0, 0.430052, 0.0973969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"/>


    </section>


    <footer class="c-footer">
      <span class="c-wave_dark" />
      <div class="container">
        <div class="row u-justify-center">
          <div class="col-lg-6">
            <a
              class="c-footer-brand"
              href="#">
              <div class="c-footer-brand__icon">
                <img
                  class=""
                  src="/img/wepylogo.png"
                  style="width:28px; height: 28px;"
                  alt="Dashboard UI Kit">

              </div>
              <div class="c-footer-brand__text">
                <span class="c-footer-brand__text-title">WePY</span>
                <span class="c-footer-brand__text-description"><span/>帮你快速开发小程序</span>

              </div>
            </a>
            <p class="u-text-small">
              Copyright © 2017 THL A29 Limited a Tencent company All rights reserved
            </p>

          </div>
          <div class="col-lg-6">
            <div class="c-shieds u-clearfix"><p><a><img
              src="https://img.shields.io/github/forks/wepyjs/wepy.svg?style=social&amp;label=Fork"></a> <a><img
                src="https://img.shields.io/github/stars/wepyjs/wepy.svg?style=social&amp;label=Star"></a> <a><img
                  src="https://img.shields.io/github/watchers/wepyjs/wepy.svg?style=social&amp;label=Watch"></a></p>
              <p class="u-mt-xsmall"><a href="https://badge.fury.io/js/wepy"><img
                data-src="https://camo.githubusercontent.com/fdb99ae00102d3376f9c500a0505411d7037333b/68747470733a2f2f62616467652e667572792e696f2f6a732f776570792e737667"
                alt="npm version"
                src="https://badge.fury.io/js/wepy.svg"
                style="max-width: 100%;"></a> <a href="https://travis-ci.org/wepyjs/wepy"><img
                  data-src="https://camo.githubusercontent.com/e32bbc2f8619b7408d917253244d0c119af5bdba/68747470733a2f2f7472617669732d63692e6f72672f776570796a732f776570792e7376673f6272616e63683d6d6173746572"
                  alt="travis-ci"
                  src="https://travis-ci.org/wepyjs/wepy.svg?branch=master"
                  style="max-width: 100%;"></a> <a href="https://coveralls.io/github/wepyjs/wepy?branch=master"><img
                    data-src="https://camo.githubusercontent.com/b9c60c722e692ddf5e85dd91cbbcc841633bed9f/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f6769746875622f776570796a732f776570792f62616467652e7376673f6272616e63683d6d6173746572"
                    alt="Coverage Status"
                    src="https://coveralls.io/repos/github/wepyjs/wepy/badge.svg?branch=master"
                    style="max-width: 100%;"></a> <a href="https://david-dm.org/wepyjs/wepy"><img
                      data-src="https://camo.githubusercontent.com/d3197e1930cec8f270b89fcff34d093d918b33b0/68747470733a2f2f64617669642d646d2e6f72672f776570796a732f776570792e737667"
                      alt="Dependency Status"
                      src="https://david-dm.org/wepyjs/wepy.svg"
                      style="max-width: 100%;"></a></p></div>

          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
  import Hero from '~/components/Hero.vue'
  import Vue from 'vue'

  export default {
    components: {
      Hero
      // Logo
    },
    data () {
      return {
        // These need to be contained in an object because providers are not reactive.
        PIXIWrapper: {
          // Expose PIXI and the created app to all descendants.
          PIXIApp: null
        },
        // Expose the event bus to all descendants so they can listen for the app-ready event.
        EventBus: new Vue(),
        visibleCategories: [
          { name: '精选', slug: 'featured' },
          { name: '热门', slug: 'popular' },
          { name: '最新', slug: 'new' }
        ],
        textCases: [],
        rollCases: [],
        isQrShow: false,
        gists: [{
          id: 1,
          title: '原生代码 index.js',
          lang: 'language-js',
          style: '',
          code: `
import wepy from 'wepy';

export default class Index extends wepy.page {
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({data: 123});
      }, 3000);
    });
  };

  async onLoad () {
    let data = await this.getData();
    console.log(data.data);
  };
}`
        }, {
          id: 2,
          title: `index.wpy 中的 <script> 部分`,
          lang: 'language-js',
          style: '',
          code: `
import wepy from 'wepy';

// 通过继承自wepy.page的类创建页面逻辑
export default class Index extends wepy.page {
  //可用于页面模板绑定的数据
  data = {
    motto: 'Hello World',
    userInfo: {}
  };

  //事件处理函数(集中保存在methods对象中)
  methods = {
    bindViewTap () {
      console.log('button clicked');
    }
  };

  //页面的生命周期函数
  onLoad () {
    console.log('onLoad');
  };
}`
        }, {
          id: 3,
          title: `支持ES6/7的一些新特性`,
          lang: 'language-js',
          style: '',
          code: `
import wepy from 'wepy';

export default class Index extends wepy.page {
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({data: 123});
      }, 3000);
    });
  };

  async onLoad () {
    let data = await this.getData();
    console.log(data.data);
  };
}`
        }]
      }
    },
    // Allows descendants to inject everything.
    provide () {
      return {
        PIXIWrapper: this.PIXIWrapper,
        EventBus: this.EventBus
      }
    },
    mounted () {
      // if (this.fullList.data.length > 0) {
      // console.log(this.fullList.data)
      this.$mpShow.init()
      this.$mpShow.loader.loadAssets()
      this.$mpShow.loader.loadData([{
        author: {
          avatar: '/33113446-5543e062-cf93-11e7-85d7-166c9f36e31d.jpg',
          id: '_baisheng'
        },
        // id: 'me',
        title: 'showme',
        avatar: 'lala'
      }])
      // }
    },
    methods: {
      wxEnter: function() {
        this.isQrShow = true
      },
      modalClick: function() {
        this.isQrShow = false
      },
      codeEnter: function(item, $evt) {
        switch (item.id) {
          case 1: {
            item.style = 'z-index: 3; transform: scale(1) translate(-90%, -10%); transform-origin: 0% 0%; font-weight: 500;'
            break
          }
          case 3: {
            item.style = 'z-index: 3; transform: scale(1) translate(100%, -10%); transform-origin: 100% 0%; font-weight: 500;'
            break
          }
        }
      },
      codeLeave: function(item) {
        item.style = 'z-index: -1;'
      }
    }
  }
</script>
<style>

  .filters {
    position: absolute;
    left: 30px;
    /*bottom: -30px;*/
    width: 140px;
    height: 30px;
    background-color: #fff;
    border-radius: 20px;
    border: 1px solid #d1d1d1
  }

  .filters li, .filters ul {
    list-style: none;
    padding: 0;
    margin: 0
  }

  .filters-list {
    position: relative;
    display: block;
    top: 7px;
    left: 17px
  }

  .bt-filter, .filter {
    display: inline-block;
    position: relative
  }

  .filters-cta {
    color: #000;
    padding-left: 35px;
    margin-bottom: 32px
  }

  .filter {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0)
  }

  .filter.selected .bt-filter-icon {
    -webkit-transform: scale(.9);
    -moz-transform: scale(.9);
    -o-transform: scale(.9);
    -ms-transform: scale(.9);
    transform: scale(.9)
  }

  .filter.selected a:hover .bt-filter-icon {
    -webkit-transform: scale(.7);
    -moz-transform: scale(.7);
    -o-transform: scale(.7);
    -ms-transform: scale(.7);
    transform: scale(.7)
  }

  .filter.selected .bt-filter--fashion .bt-filter-icon {
    background-color: #14e4da
  }

  .filter.selected .bt-filter--fashion .bt-filter-icon .icon-part {
    background-color: #0fb2b4
  }

  .filter.selected .bt-filter--art .bt-filter-icon {
    background-color: #443694
  }

  .filter.selected .bt-filter--art .bt-filter-icon .icon-part {
    background-color: #2d226b
  }

  .filter.selected .bt-filter--loves .bt-filter-icon {
    background-color: #f4621c
  }

  .filter.selected .bt-filter--loves .bt-filter-icon .icon-part {
    background-color: #d35214
  }

  .filter.selected .bt-filter--social .bt-filter-icon {
    background-color: #a64ac9
  }

  .filter.selected .bt-filter--social .bt-filter-icon .icon-part {
    background-color: #723988
  }

  .filter.selected .bt-filter--music .bt-filter-icon {
    background-color: #fccd04
  }

  .filter.selected .bt-filter--music .bt-filter-icon .icon-part {
    background-color: #e3a202
  }

  .bt-filter {
    width: 14px;
    height: 14px;
    margin: 0 2px;
    overflow: hidden;
    z-index: 0
  }

  .bt-filter .bt-filter-icon {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: scale(.5);
    -moz-transform: scale(.5);
    -o-transform: scale(.5);
    -ms-transform: scale(.5);
    transform: scale(.5);
    -webkit-transition: -webkit-transform .25s cubic-bezier(.215, .61, .355, 1);
    -moz-transition: -moz-transform .25s cubic-bezier(.215, .61, .355, 1);
    -o-transition: -o-transform .25s cubic-bezier(.215, .61, .355, 1);
    -ms-transition: -ms-transform .25s cubic-bezier(.215, .61, .355, 1);
    transition: transform .25s cubic-bezier(.215, .61, .355, 1);
    background-color: #d1d1d1;
    opacity: 1;
    -ms-filter: none;
    filter: none
  }

  .bt-filter .bt-filter-remove {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjhBMjNENzZDRjQ4MTFFNTk5REU5NjZCNkNCNTJBQzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjhBMjNENzdDRjQ4MTFFNTk5REU5NjZCNkNCNTJBQzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOEEyM0Q3NENGNDgxMUU1OTlERTk2NkI2Q0I1MkFDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOEEyM0Q3NUNGNDgxMUU1OTlERTk2NkI2Q0I1MkFDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnUa8IcAAAGOSURBVHjaYnz58iUDELQDcTgQfwTiFiBey0Ad4ADErUAsBcTbgbiAEWhhF5BRiqYwBYjnUmiZDxBvRhNbAbLwJ5DBhkVDKhDPoaJlYMAExG9waJoN9SnVLAOCLyALM/FoBlmaTCXLQKASZOEmaPDhAnOI9CkhyxqBeAoTkYYSCl5CljUBcQMsDmFgLgGf4gpeQpaBslk9cqJBDz5SgpeYYKxFFmDBYeh/PFkC5NOHQPyO2GAkZCEseBmhhmMDuwgkIJRgRM+H+IIvlYx8iBGMxFpISpbAG4ykWAgLXncg/opHzV9oCq4nZBgTkS5/AU1I+MAzYgxiIrIEuQjEPHjUMEOrn2RKLSSUz0iOcyYqWkZUMchEpmWgoPMjp5ZhIrPUnwdVQ3Itw0RuqU9uLcNEbqlPbi3DRG6pT24tAyq8rcgp9cmsZT6AWm03gAx1PMFYS2K2SMFTy7wBBakqmcFITvCKgCxcREEwklri7AXFYQY0Ll2A+BsQTwbiCVRo5oNS73doKAkC8QmQzwECDADAJHAD40/qhwAAAABJRU5ErkJggg==) no-repeat;
    -webkit-background-size: 14px 14px;
    -moz-background-size: 14px 14px;
    background-size: 14px 14px;
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0)
  }

  .filter .bt-filter:hover .bt-filter-icon {
    -webkit-transform: scale(.75);
    -moz-transform: scale(.75);
    -o-transform: scale(.75);
    -ms-transform: scale(.75);
    transform: scale(.75)
  }

  .filter.selected .bt-filter:hover .bt-filter-remove {
    opacity: 1;
    -ms-filter: none;
    filter: none
  }

  .filter.selected .bt-filter:hover .bt-filter-icon {
    background-color: transparent !important;
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0)
  }

  .cardflow-close .icon, .onboarding-close .icon {
    -webkit-transition: -webkit-transform .4s cubic-bezier(.215, .61, .355, 1);
    -moz-transition: -moz-transform .4s cubic-bezier(.215, .61, .355, 1)
  }

  .cardflow-input-cnt, .cardflow-select-cnt {
    top: 50%;
    left: 50%;
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"
  }

  body.mobile .bt-iamother {
    position: fixed;
    display: none
  }

  body.modal-active .modal.iamother .top {
    background: #000 !important
  }

  body.modal-active .modal.iamother {
    position: fixed !important;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow-y: auto;
    height: auto
  }

  .card, .card-avatar, .cardflow-choice, .cardflow-input-cnt, .line--small, .line--small .card, .onboarding {
    overflow: hidden
  }

  body.mobile.modal-active .modal.iamother .close {
    position: absolute
  }

  body.mobile.modal-active .modal.iamother .bottom .inner {
    padding-bottom: 60px
  }

  .cardflow-select-cnt {
    position: absolute;
    margin-left: -433px;
    margin-top: 30px;
    width: 380px;
    height: 38px;
    filter: alpha(opacity=0)
  }

  .cardflow-select-cnt::after {
    content: "";
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
    pointer-events: none
  }

  body.mobile .cardflow-select-cnt {
    top: 48%;
    width: 256px;
    height: 51px;
    margin-left: -128px
  }

  body.mobile .cardflow-select-cnt::after {
    top: 20px
  }

  @media (min-width: 650px) {
    body.mobile .cardflow-select-cnt {
      top: 48%;
      width: 400px;
      height: 90px;
      margin-left: -200px
    }

    body.mobile .cardflow-select-cnt .cardflow-select {
      border-radius: 45px;
      font-size: 18px;
      padding-left: 28px
    }

    body.mobile .cardflow-select-cnt .cardflow-select:after {
      right: 28px
    }

    body.mobile .cardflow-select-cnt::after {
      top: 40px
    }
  }

  @media (max-height: 560px) {
    body.mobile .cardflow-select-cnt {
      top: 53%
    }
  }

  @media (max-height: 580px) {
    body.mobile .cardflow-select-cnt {
      height: 44px
    }

    body.mobile .cardflow-select-cnt::after {
      top: 17px
    }
  }

  body.mobile .cardflow-select {
    border-radius: 30px
  }

  .cardflow-select {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 19px;
    background: #f0f;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding-left: 20px;
    padding-top: 3px;
    font: 400 14px Odin-Bold_0_wt
  }

  .cardflow-input-cnt, .cardflow-input-cnt div, .cardflow-input-cnt input, .cardflow-input-cnt span {
    font-size: 22px;
    font-family: Odin-Bold_0_wt;
    line-height: 30px;
    text-rendering: auto;
    letter-spacing: 1px
  }

  .cardflow-select.selected {
    color: #fff !important
  }

  .cardflow-select:focus {
    outline: 0
  }

  .cardflow-select-cnt--art .cardflow-select {
    background-color: transparent;
    border: 2px solid #322677;
    color: #322677
  }

  .cardflow-select-cnt--art::after {
    width: 14px;
    height: 10px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAA+0lEQVRIib3VPQtBUQDG8SsyS1IsTHZ3kkXdZPAhlFnZxKRs8mFkMRgMBpn4CFgoeVuJXM+Tbt10X859Hf5nOZ3zG87pHEkudJvohtSAo9GQMFxDwLQuBDchgmuCMnqGgD1QkSBrhwC2VFWVNDCCJgFiY2J6kCXRPgBshxJGICujl48Y70ZJw4xA1vMR7OgxM5DnOfMBm3IvEZCl0dEDdkCpf8wKZAp6u8C4pmKE2YFs4ALsm2EiYBQtHGBzrvECsiw6C2AnlLHCREFWRx8LjHM1O8wJyEYW4FAEcwrG0coAW6JYECDLo7sO4+edE8XcgKwq/x7kLVKcYOwL11PnyV5tVIwAAAAASUVORK5CYII=) no-repeat;
    -webkit-background-size: 14px 10px;
    -moz-background-size: 14px 10px;
    background-size: 14px 10px
  }

  body.mobile .cardflow-select-cnt--art .cardflow-select {
    border: 2px solid #322677;
    background-color: #443694
  }

  .cardflow-select-cnt--tv .cardflow-select {
    background-color: transparent;
    border: 2px solid #d35214;
    color: #d35214
  }

  .cardflow-select-cnt--tv::after {
    width: 14px;
    height: 10px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAA/ElEQVRIx73VvQsBYQDH8ROZpUux8C8wyaIkg9EfoMzKpkzKJn+MLAaDwSATy+1YKHlbiZzfL11dupfnXofvs1zP8xmel5OUhtxCN6QGHI2mhOEaAqZ1IbgJEVwTLKBnCNgD5QmyTghgW1VVSQMjaBIgNiamB1kS7QPAdihhBLISevmI8WwUNcwIZD0fwa4eMwO5nzMfsCnXEgFZCh09YAck/2NWIKugtwuMc8pGmB3IBi7AvhkmAkbRwgE25xwvIMugswB2QmkrTBRkdfSxwPitZoc5AdnIAhyKYE7BOFoZYEsUCwJkOXTXYfx5Z0UxNyCrKr8Hecu76gRjX9AzpebzsLKtAAAAAElFTkSuQmCC) no-repeat;
    -webkit-background-size: 14px 10px;
    -moz-background-size: 14px 10px;
    background-size: 14px 10px
  }

  body.mobile .cardflow-select-cnt--tv .cardflow-select {
    border: 2px solid #d35214;
    background-color: #ff6e29
  }

  .cardflow-select-cnt--social .cardflow-select {
    background-color: transparent;
    border: 2px solid #723988;
    color: #723988
  }

  .cardflow-select-cnt--social::after {
    width: 14px;
    height: 10px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAA/ElEQVRIx73VPwsBYQDH8ROZJSkW3gKTblGSwYtQZmWiTMom3ossBoPBIBMvAQsl/1Yi5/crV5funnvu3N3wfZbreT7D8+eUljqsoyvSfI5GTcFwCQDTOxNcBwiuCObRIwDsjnIEWTMAsKFpmqKDITT2ERsRM4IsjnY+YFsUMwOZip4eYjwbBR0zA1nHQ7BtxKxA7ufUA2zCtWRAlkSHP7A9SvxiIpCV0MsFxjlFM8wOZD0XYNcKkwHDaO4Am3HOPyBLo5MEdkQpESYLsip6CzB+q9hhTkA2EIB9GcwpGEVLE2yBIn6ALItuBow/74ws5gZk5e+DvOFddYKxD1BypeZqXYkFAAAAAElFTkSuQmCC) no-repeat;
    -webkit-background-size: 14px 10px;
    -moz-background-size: 14px 10px;
    background-size: 14px 10px
  }

  body.mobile .cardflow-select-cnt--social .cardflow-select {
    border: 2px solid #723988;
    background-color: #a64ac9
  }

  .cardflow-select-cnt--fashion .cardflow-select {
    background-color: transparent;
    border: 2px solid #0fb2b4;
    color: #0fb2b4
  }

  .cardflow-select-cnt--fashion::after {
    width: 14px;
    height: 10px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAA+0lEQVRIx73VPQtBUQDG8SuyXkmKha/AJIuSDD6EMiubMimbfBhJDAaDQSY+AhZK3lYi1/OkWzfdl3Nfh/9Zbuf8hvNyJXk8aaAbUnyORl3CcA0AU7sQ3AQIrgnm0TMA7IFyBFkrALCpKIqkgiE08hEbEtOCLI72PmA7FNMDWRG9PMR4NgoqpgeyjodgW4sZgdzPmQfYlGuJgCyJji6wA0r8Y2YgK6O3A4xzSnqYFch6DsCuESYChtHCBjbnHDcgS6OzAHZCKTNMFGQ19DHB+K1qhdkB2cAE7ItgdsEoWulgSxTxA2RZdNdg/HlnRDEnIKvIvwd5y7tqB2NfsBARiRXZC7cAAAAASUVORK5CYII=) no-repeat;
    -webkit-background-size: 14px 10px;
    -moz-background-size: 14px 10px;
    background-size: 14px 10px
  }

  body.mobile .cardflow-select-cnt--fashion .cardflow-select {
    border: 2px solid #0fb2b4;
    background-color: #14e4da
  }

  .cardflow-select-cnt--music .cardflow-select {
    background-color: transparent;
    border: 2px solid #e3a202;
    color: #e3a202
  }

  .cardflow-select-cnt--music::after {
    width: 14px;
    height: 10px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAA/klEQVRIx73VPwsBYQDH8ZM/syTFwltgkkVJBi9CmZVNmZRNXoYXIIvBYDDIxEvAQuTfSuT8fuXq0nN3z527G77Pcj3PZ3j+nHIYhOvoilSPo1FTMFx8wLTOBFc+gkuCOfTwAbujLEHW9AFsqKqqaGAAjTzEhsT0IIuhrQfYBkVFICugp4sYz0Zew0Qga7sItvSYEcj9nLiAjbmWDMgSaP8HtkPxX8wMZCX0coBxTlGEWYGs6wDsGGEyYBDNbGBTzvkHZCl0ksCOKGmGyYKsit4mGL9VrDA7IOubgD0ZzC4YQQsBNkchL0CWQTcdxp93WhZzArLy90Fe867awdgHF/dAJ3xrhpcAAAAASUVORK5CYII=) no-repeat;
    -webkit-background-size: 14px 10px;
    -moz-background-size: 14px 10px;
    background-size: 14px 10px
  }

  .cardflow-input-cnt {
    position: absolute;
    margin-left: -433px;
    margin-top: 40px;
    width: 380px;
    height: 30px;
    border-bottom: 2px solid #e3a202;
    filter: alpha(opacity=0);
    padding-bottom: 10px
  }

  .cardflow-mobile, .cardflow-mobile .cardflow-bt-back {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"
  }

  .cardflow-input-cnt input {
    position: relative;
    margin: 0;
    padding: 0
  }

  body.mobile .cardflow-input-cnt {
    top: 45%;
    width: 256px;
    height: 50px;
    margin-left: -128px
  }

  .cardflow-input {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
    outline: 0;
    background: 0 0;
    color: #fff;
    z-index: 1;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
  }

  .cardflow-input::-webkit-input-placeholder {
    color: #e3a202
  }

  .cardflow-input:-moz-placeholder {
    color: #e3a202
  }

  .cardflow-input::-moz-placeholder {
    color: #e3a202
  }

  .cardflow-input:-ms-input-placeholder {
    color: #e3a202
  }

  body.mobile .cardflow-input {
    line-height: 58px
  }

  .cardflow-close {
    position: absolute;
    top: 15px;
    right: 22px;
    display: block;
    padding: 10px;
    z-index: 1000
  }

  .cardflow-close:hover .icon {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg)
  }

  .cardflow-close .icon {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVERjRBOTZDOEM2MTFFNUIzNjNGN0E0MUUxMkE1RkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVERjRBOTdDOEM2MTFFNUIzNjNGN0E0MUUxMkE1RkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NzY5MDIxNUM4MUUxMUU1QjM2M0Y3QTQxRTEyQTVGQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NzY5MDIxNkM4MUUxMUU1QjM2M0Y3QTQxRTEyQTVGQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjJL+a0AAAD6SURBVHja1JfNDcMgDIU9SfYJB069ZR0myyZZo2rlEkoliig/9kNRLfkQyfh7ARthYubF+85vO7yv3mmCrzE/R95CCfhjd+8WDLYxb2o7cdmQAkrgYJRsxQwBP8En9wwwlQCNANvIa3oDLRgc8g0vQIFzOELA0Hp1As06AiUSCUZsofiotMXjNDWirV7WdAeib8Vtibo4RBfS6JXpGnA3ku8v/vyyM7+s2nv6/DGjz2vgp/dbjNviN+yGa4G3LF4kAAEWC0CBRQKQ4GEBaPCQgNbrVQLuFWBq73YNuEfAQRPBTQGlWQ0JrgkIs1o+paKHxLSov6bUlwADAKmFzd48NE1NAAAAAElFTkSuQmCC) no-repeat;
    -webkit-background-size: 16px 16px;
    -moz-background-size: 16px 16px;
    background-size: 16px 16px;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    transition: transform .4s cubic-bezier(.215, .61, .355, 1)
  }

  .cardflow-mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .9);
    display: none;
    filter: alpha(opacity=0)
  }

  .cardflow-mobile .cardflow-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 10%;
    display: table
  }

  .cardflow-mobile .cardflow-title {
    position: relative;
    display: table-cell;
    width: 100%;
    text-align: center;
    font: 400 30px "Odin Rounded Bold";
    color: #fff;
    vertical-align: middle;
    top: 7px
  }

  .cardflow-mobile .content {
    position: absolute;
    top: 10%;
    width: 90%;
    height: 78%;
    min-height: 426px;
    left: 50%;
    -webkit-transform: translate3d(-50%, 0, 0);
    -moz-transform: translate3d(-50%, 0, 0);
    -o-transform: translate3d(-50%, 0, 0);
    -ms-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0)
  }

  .cardflow-mobile .cardflow-bt-back {
    position: absolute;
    display: block;
    padding: 16px 15px;
    z-index: 1;
    filter: alpha(opacity=0);
    top: 50%;
    margin-top: -28px
  }

  .card-avatar-img, .cardflow-content {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    opacity: 0
  }

  .cardflow-mobile .cardflow-bt-back-icon {
    display: block;
    width: 25px;
    height: 18px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAjCAYAAADWtVmPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTk3ODBBQjFCRTg5MTFFNTg0MUZFRTJDMTgwOUY2QzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTk3ODBBQjJCRTg5MTFFNTg0MUZFRTJDMTgwOUY2QzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOTc4MEFBRkJFODkxMUU1ODQxRkVFMkMxODA5RjZDMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOTc4MEFCMEJFODkxMUU1ODQxRkVFMkMxODA5RjZDMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq5ssogAAAISSURBVHja3JjNK0VBGMaPrwgRJaFYoBRSNyL5ZsEKSRaIsrTzDyh7G3+BhSwkoRQbLvJ5ESXEkrK0JF/H89Z76jTN4dx7MTP3qd/izsw5t+fMzPu+M3G2bVtRqAyMg1MwaylUYhTPtoJN1+9CMKXKSFyEM9IMgkLbPZtRovgInqmVmCA9q1xa4RopB3sefe+mGKkGJyDB0lB+N3slOIgyOCifkSJwqLMJP0ZKQQikCu03YNEUI8XgHORI+upNMZILjiUzQWoHT6BGdyNZ4AhkS/q6Xdn8U+eolcd5okgytgVsu37buhrJ4I1dIBnXI5iQydZhaaXwcpKZGAErPt71oXpGUjhPlEn6+8CSz3eVgB2nGP2Pgpf36RaYJCNroEoY9ALGwjBhcYRrVDAZ9J/ptLTaJJ0zYN4yRxNk5ErSMcRJzxQt0NLqABdCBs/nMFzDFa8fvfLh6r/3CAWpQTLyCALgEmQKg0O89LZ8vPgOVKgOvw/89d8kYzbZ6E/SIo84X7SOI5aofQ6vv31s/rNa64y/vnj+TuYiMqDrbpd9xWuPiOUUk07iTDKhjKdzSJNHJeCcFs9MOVjtggZJuU6RLehhVJn8XNDVW95XQG5RYi3X+fKBIlaX7qndb8hcB72xYIS0DDpjwQhpA/R79CWYZIRE10DDkvY004yQ5sCo0Laqe/j9TlQZD4BbMK3SyJcAAwCNg2B4LQyviwAAAABJRU5ErkJggg==) no-repeat;
    -webkit-background-size: 25px 18px;
    -moz-background-size: 25px 18px;
    background-size: 25px 18px
  }

  .cardflow-mobile .cardflow-close {
    top: 50%;
    right: 5px;
    margin-top: -22px
  }

  .cardflow-bg, .cardflow-content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0
  }

  .cardflow-content {
    filter: alpha(opacity=0);
    display: none;
    background-color: #fff
  }

  .cardflow-bt-fb, .cardflow-selection-bt {
    width: 80%;
    background-color: #000;
    text-align: center
  }

  .cardflow-login h2 {
    position: relative;
    top: 20px;
    text-align: center;
    color: #000;
    font: 400 45px/40px "Odin Rounded Regular"
  }

  @media (min-width: 650px) {
    .cardflow-login h2 {
      font: 400 93px/80px "Odin Rounded Regular"
    }
  }

  .cardflow-bt-fb {
    position: relative;
    margin: 70% auto 0;
    display: block;
    height: 48px;
    border-radius: 24px;
    line-height: 58px;
    z-index: 100
  }

  .cardflow-login-text, .carflow-login-fbicon {
    display: inline-block;
    position: relative
  }

  @media (min-height: 740px) {
    .cardflow-bt-fb {
      margin: 50% auto 0;
      height: 80px;
      border-radius: 40px;
      line-height: 90px
    }
  }

  .cardflow-login-text {
    font: 400 15px "Odin Rounded Bold";
    color: #fff
  }

  .cardflow-selection h2 {
    position: relative;
    display: block;
    padding: 0;
    margin: 30px 0 0;
    font: 400 18px "Odin Rounded Bold";
    text-align: center
  }

  .cardflow-selection h3 {
    position: relative;
    text-align: center;
    color: #000;
    font: 400 42px/36px "Odin Rounded Regular";
    margin: 10px 0 0;
    padding: 0 10px
  }

  @media (min-width: 650px) {
    .cardflow-selection h3 {
      font: 400 80px/72px "Odin Rounded Regular";
      margin-top: 25px
    }
  }

  .cardflow-selection-bt {
    position: relative;
    margin: 0 auto 2%;
    display: block;
    height: 51px;
    color: #fff;
    border-radius: 24px;
    font: 400 18px/63px "Odin Rounded Bold"
  }

  @media (min-height: 740px) {
    .cardflow-selection-bt {
      height: 80px;
      border-radius: 40px;
      line-height: 90px
    }
  }

  @media (max-height: 580px) {
    .cardflow-selection-bt {
      width: 80%;
      height: 44px;
      font: 400 18px/56px "Odin Rounded Bold"
    }
  }

  .cardflow-selection-bt--music {
    background-color: #fccd04
  }

  .cardflow-selection-bt--tv {
    background-color: #ff6e29
  }

  .cardflow-selection-bt--social {
    background-color: #a64ac9
  }

  .cardflow-selection-bt--art {
    background-color: #443694
  }

  .cardflow-selection-bt--fashion {
    background-color: #14e4da
  }

  .cardflow-choice {
    background-color: #444;
    width: 100%;
    height: 100%
  }

  .cardflow-choice.art .art, .cardflow-choice.fashion .fashion, .cardflow-choice.music .music, .cardflow-choice.social .social, .cardflow-choice.tv .tv {
    display: block
  }

  .cardflow-choice h2 {
    position: relative;
    width: 100%;
    margin-top: 13%;
    font: 400 37px/31px "Odin Rounded Bold";
    padding: 0 15px;
    text-align: center;
    color: #fff;
    word-wrap: break-word;
    display: none
  }

  @media (min-width: 650px) {
    .cardflow-choice h2 {
      font: 400 72px/62px "Odin Rounded Regular"
    }
  }

  @media (max-width: 330px) {
    .cardflow-choice h2 {
      margin-top: 18%;
      font: 400 32px/30px "Odin Rounded Bold"
    }
  }

  .cardflow-choice .cardflow-project-preview {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%
  }

  .cardflow-choice .cardflow-project-preview img {
    position: relative;
    width: 100%;
    height: 100%;
    display: none
  }

  .cardflow-bt-gallery, .cardflow-bt-next {
    left: 0;
    height: 12%;
    width: 100%;
    bottom: 0;
    text-align: center
  }

  .cardflow-choice.music {
    background-color: #fccd04
  }

  .cardflow-choice.tv {
    background-color: #ff6e29
  }

  .cardflow-choice.social {
    background-color: #a64ac9
  }

  .cardflow-choice.art {
    background-color: #443694
  }

  .cardflow-choice.fashion {
    background-color: #14e4da
  }

  .cardflow-bt-next {
    position: absolute;
    display: none;
    line-height: 0;
    color: #fff
  }

  .cardflow-bt-next.music {
    color: #fccd04
  }

  .cardflow-bt-next.tv {
    color: #ff6e29
  }

  .cardflow-bt-next.social {
    color: #a64ac9
  }

  .cardflow-bt-next.art {
    color: #443694
  }

  .cardflow-bt-next.fashion {
    color: #14e4da
  }

  .cardflow-bt-next span {
    position: relative;
    top: 39%;
    width: 100%;
    display: inline-block;
    font: 400 15px "Odin Rounded Bold"
  }

  .cardflow-bt-gallery {
    position: absolute;
    display: none;
    line-height: 0;
    color: #fff;
    background-color: #000
  }

  .cardflow-bt-gallery span {
    position: relative;
    top: 39%;
    width: 100%;
    display: inline-block;
    font: 400 15px "Odin Rounded Bold"
  }

  .cardflow-final {
    background-color: transparent
  }

  .cardflow-final h4 {
    font: 400 18px/18px "Odin Rounded Regular";
    color: #fff;
    text-align: center;
    position: relative;
    display: table-cell;
    vertical-align: middle;
    top: 8px;
    height: 36px
  }

  .cardflow-final.music .cardflow-card-blob {
    width: 248px;
    height: 254px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfAAAAH8CAYAAAAubv2dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OERGN0ZBQURERENBMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OERGN0ZBQUNERENBMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEJDNzUzMURDODAxMUU1ODVGMEZDMjY4NjU0QkQ3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNEJDNzUzMkRDODAxMUU1ODVGMEZDMjY4NjU0QkQ3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Popff+IAACKxSURBVHja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) no-repeat;
    -webkit-background-size: 248px 254px;
    -moz-background-size: 248px 254px;
    background-size: 248px 254px
  }

  .cardflow-final.music .cardflow-card-avatar-bg {
    background-color: #efb21e
  }

  .cardflow-final.tv .cardflow-card-blob {
    width: 255px;
    height: 244px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAHoCAYAAACo4I2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI0MkRENzRFNEYzMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUI0MkRENzVFNEYzMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQjQyREQ3MkU0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQjQyREQ3M0U0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt7Fyd8AACStSURBVHja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) no-repeat;
    -webkit-background-size: 255px 244px;
    -moz-background-size: 255px 244px;
    background-size: 255px 244px
  }

  .cardflow-final.tv .cardflow-card-avatar-bg {
    background-color: #d35214
  }

  .cardflow-final.social .cardflow-card-blob {
    width: 248px;
    height: 278px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe8AAAIrCAYAAADGGBHyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI0MkRENzhFNEYzMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVGRjE5MThFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQjQyREQ3NkU0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQjQyREQ3N0U0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph5YALwAACZVSURBVHja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) no-repeat;
    -webkit-background-size: 248px 278px;
    -moz-background-size: 248px 278px;
    background-size: 248px 278px
  }

  .cardflow-final.social .cardflow-card-avatar-bg {
    background-color: #723988
  }

  .cardflow-final.art .cardflow-card-blob {
    width: 245px;
    height: 241px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAHhCAYAAAChqv35AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDVGRjE5MUJFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVGRjE5MUNFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NUZGMTkxOUU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NUZGMTkxQUU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZBhm0AACNjSURBVHja7N0JvGdj/Qfw405j31JoiJhElsJFhLI0LQxljaRos0yU+iep/qV6VZQkf92QpSKUlMog3ULIlqtMEjGRZcY+hDHM8v8+fmdqjJm7/pazvN+v17fnhrnz+33Pmfnc5/zO85xFMqAtxnX3dMWwctTqUa/Iv14xH1eIWi6v5aOWjVo0asmoxaMWG+DbPxE1O+rxqOl5TYt6bJ7x4aiHoqbkX98XNbW3b8IsRweKaxEtgKaG8egYXhu1dtRr8hobtUbUqlGjC/aSZ+XBfW/UXVG3R90R9Y9UEeKPOKogqKGsofzyGDaN2iTqdXmlgH5Jhd7mo3NDOw/xm1JFgN/nDABBDUUK5VExbBi1dV4poNescUsenhvaef05n4G7jA6CGtoSzOnPxuvTl3mlcF5aZ/r1VNS1UVfldW0E95PaAoIamhXO6Qaud0TtHPX2rHGjF8M3K59tzw3uqyK4H9AWENQwlHBeKYbdonaP2iYr3s1eVTMp6rdRl0ZdGcH9tJaAoIb5w/mlMewZtVfUtlFdutIRM6Kujro46sII7b9rCQhq6hvO6Wawt0btH7VLNvC6ZNpvctSv8/pDBPdzWgKCmuoH9JgYDoj6SNZYx0w5pA1cLoz6edRFEdrTtQRBDdUK6HSX9qFZ4/Pnl+hIqaW7yS/KQ/tCd5IjqKG84Zw+a06XtQ+P2kJHKumZqF9G/TjqEpfHEdRQjoBOM+Z9oz6bNbbspB7Srmnn5aGdln7N0RIENRQzoD8f9WodqbV0I9oZUT+MwL5HOxDU0PmQTuuej45aSzeYR5pVX5qH9gUR2jO0BEEN7Q3o9NnzsVFb6QYDSE/++kHUSRHYd2gHghpaG9Bj8oDeRzcYxiy7N6ona9w1PlNLENTQvIBOn0N/LOqoqGV0hBFKz93+XtTJnrWNoIbhh/MK+Zdjo07PGs95hmZKG6icGfWdCOy/aQeCGgYf0tvFkNbG7hT1qahRukKLpZvPjovA/o1WIKhh4QG9dB7MU6MOi1pHV2izP0cdE/Uzn2MjqOGFIb15DP8bdX/UBzJbftJZ/8waNy6eYY9xBDV1D+gUyGmzknQnd3ou8Ya6QoFMzQP7ZPuLI6ipY0inrT7Pyho3jC0atayuUFCP5IF9osBGUFOXkD4whm9FLek8RGCDoKY4Ab1SDKdljTu6oaweivpa1tjx7BntQFBTlZDeOQ/pFXWDikgP//hK1rjpzF3iCGpKG9Bp2VW6zH2AblBRd0YdmTWWdXnUJoKaUoV0WnaVbhjzhCvq4LqoT0VYX6UVCGqKHtBzl12lsrMYdXNB1GcisG/TCgQ1RQzptfNZ9Ga6QY3Nivpu1FER2I9pB4KaIgR0OpfmX3YFdfdo1riy9H03nCGo6WRIr5w17ugerxuwQJOiPh5hfZlWIKhpd0i/Mw/pl+sGDOi8qE9EYN+nFQhqWh3QadnVt6M+rBswJGlXsy9FHe9yOIKaVoX0G2M4M+rVugHDdkvUwRHWV2oFgppmBXRadvWFqM9mll1Bs5yRNdZfP6oVCGpGEtKWXUHrPJg1bjY7VysQ1Aw1oC27gva5OGtcDr9bKxDUDCakX5E17ujeUTegbZ6KOiKqx97hCGr6C+ldYvh+ZtkVdMoVUR+JsP6HVghqmDeg07Kr70R9UDeg46ZnjZs3T4jAnq0dghohvWXWWHY1VjegUNITufaLsJ6sFYKaegb06Oy/y666dAQKKX12fViE9alaIaipV0ivkzWWXW2qG1AKF0Z9KAL7Qa0Q1FQ7oNOxPyhrLLtaQkegVB6O+nCE9S+1QlBTzZBOy65Oj9pBN6DUTs4aD/mYrhWCmuqEtGVXUC23Ru0dYX2zVghqyh3Qy8RwfGbZFVTRjKjDo060SYqgppwhvVXWWHa1pm5ApaUbzfbzgA9BTXkCOi27OirqM5llV1AX90TtFWF9jVYIaood0q+N4cdR3boBtTMza+wX/m2XwgU1xQvodEwnRH0zs+wK6u6CqA9GWD+mFYKaYoT0mKyx7OodugHk0raju0VY/0UrysnnltUJ6d1imCSkgfmkvfuvjb8j3q8VZtR0JqDTsqv0tKsP6AYwgJ6ssUHKs1ohqGlPSFt2BQzVdVG7RlhP0QpBTesC2rIrYCSmRu0SYX2dVghqmh/S62aNp11ZdgWMRLr8fWCE9Q+0QlDTnIBOx+qQqG9ELa4jQJOke1z+JwJ7llYIaoYf0qtkjWVXb9cNoAV6o/aMsJ6mFYKaoYf07jGcErWCbgAt9PeonSKs79QKQc3gAnrZGE6I2k83gDZ5JGtsjvIHrSgOdwwXM6S3juEvQhpos5dF9cbfQf7uMaNmIQGdll19OerTfogCOuyrUf/roR6Cmv+GdFp2lZ52tbFuAAWRloJ+yE5mgrruAW3ZFVBkl2WNncwe1wpBXceQXjWG0zLLroBi+1vUDhHW/9KK9vM5aOdCes8YbhbSQAmsF/XH+HvrdVphRl2HgE7Lrk6Mep9uACWTLn/vHDPrK7VCUFc1pN8cw4+iXqUbQElNj3pvhPUvtEJQVymgF80ay64Oz3zcAJTf7KzxQI9TtaL1RmlBy0M6fbZzcdQefjACKjTJe+fYMeOnT54y8WrtMKMua0Cn3h6aNZZdLaYjQEUdHTPrI7VBUJctpNOyqzOi3qobQA2cFPXRCOzZWiGoyxDSe+YnraddAXVydtT+EdbPaYWgLmpAW3YF1N2vo/aw5aigLmJIb5M1ll2trhuAsM72irCerhWCuggBnW4Sm7vsSi8BGtL+4DtFWD+tFYK6kyG9ftZ42tWGugGwwLDeJcL6Ca0Q1O0O6NSzj0cdnVl2BdCf66Pe5slbgrqdIZ2WXf0w6i26ASCs28F2loMP6b1imCSkAYbkDVGXxt+hy2mFGXWrAjqdXGnZ1b66AWBmLaiLFdKWXQE0z+VR490NLqibEdCWXQG0xmV5WFtnLaiHHdKvi+HMzLIrgFaxg5mgHlZAp158IuprmWVXAO0I610jrGdphaAeTEi/Mmssu9peNwDaJj3I4/3Cun+jhHTP3jFMjFrX6QDQVumjxpXHjhk/cfKUibqxEC+pcUAvH8N3o/ZxGgB0zIFR06I+oxVm1POGdFp29duorZ0CAB23dcyqZ8Ss+iqteLFafUYdAT06hq9EfTrz+TxA0RzU2zfhZG2oaVBHSK8TwzlRGzvsAIU0O+rdEdbna8V/1WKv7wjpg2K4SUgDFD6Tzo6/s7fViprMqONgrxjD6VE7OdQApZGeYb1NzKz/rBUVDuoI6R1iOCNqZYcZoHSmRm0VYT1ZUFcvoBeP4RtRhzrPAUrtH1FbRlg/LKirE9IbxHBu1PrOb4BK+GP6673OD/GozM1kEdIfjuEGIQ1QKVtGnRV/x9d2J83S70wWB2+ZGE6J2tv5DFBJu0V9K+qwOr75Uv+EEiG9SdbYYezNzmOAStti7Jjx0yZPmXhd3d54aT+jzi91p726F3X+AtRC2hAlPRrzV4K62AG9eB7QH3TOAtTOU1FvirC+SVAXM6TXiOFnUZs4VwFq6/6ozSKs76/Dmy3NXd8R0m+N4UYhDVB7q0RdGLmwlKAuTkgfEsMlUSs4PwHIGs9uODPyofIPlyr08qw4AOn1nRB1sHMSgPnsGvXlqP+t8pss7E8iEdLLx3Be+tK5CEA/9u7tm/ATQd3ekB4bw0VR6zj/ABhA2l403Ql+o6BuT0h3x3Bx1ErOPQAG6b6oTSOsp1btjRXqZrII6XSZ+wohDcAQrRp1XuTIaEHdupBONwWky91LO98AGIato46r2psqxF7fEdLvjeGcrAIPCQGgo94wdsz4uydPmfjnqryhjn9GHSH9kRhOyir0yE0AOmpG1FZVubmso0EdIZ3WR/c4pwBosn9ljZvLHir7G+nYLDa/3H2icwmAFlg96qeRNaPK/kY6EtTRuD1i+FHmcjcArbNt1FfL/ibafuk7Qnr7rLFv92jnEABtML63b8JFgnpwIZ02Ub88alnnDQBt8ljURhHW/yrji2/bpecI6VfGMFFIA9BmL80an1cvKqgXHtLpmaG/jhrjfAGgAzaP+kYZX3jLL33nzwo9P2s8jgwAOmnP3r4JPzOjfqEjhDQABXFaTCDXNKP+72w6PWTjN5llWAAUxzVRb46Z9cxaz6gjpNPn0WcLaQAK5o1RR9V6Rp1/Ln1p+tL5AEABzY7aPmbVV9R1Rn24kAag4Pl3VkwsV6hdUMeb3iCGrzgHACi4tL/H94v+Ipu6WXmEdHqe9IVRqzn+AJTAumPHjJ8yecrEwj4Ss9kz6rQUaxPHHYASOS4mmmsV9cU17Way/E3+NWoxxxyAkrkqatvevgmzqjyj7hHSAJTU1lGfrOyMOmbTe8VwruMMQInNiNo0ZtV/rVRQR0gvEcNtmRvIACi/vqgtIqyfK8oLasal708KaQAqojvqc5WZUcds+hUx3BG1lGMLQEXMymfVf6rCjPrzQhqAikl7jJya7w1S3qCON7B6DAc4ngBU0IZRnyr7jPrLUaMdSwAq6qiYlL6m0y9iWJ9RxwtfI2t8Nj3KcQSgwtLTtbbr7Zswp2wz6iOENAA1sE3Uh0s1o47Z9JgYJkct7vgBUAOPR60bs+opZZlRHyKkAaiR5aJOKMWMOt+F7J6olzluANTM22JW/duiz6j3FdIA1NT/xYR10aIH9UcdJwBqap2sA0/YGvSl7/gp4g0xXOc4AVBj07PGjWV3F3FGfaDjA0DNpXu1vl24GXXMppeNId2WvqRjBADZDjGrvqRIM+rdhTQA/McJMYltyzbagw3q9zsmAPAfaQ/wg9rxGw146Tt+YlgthruzET67GgAq5pGotXr7Jkzr9Iz63UIaAF4k7SvyuVb/JoMJ6j0dCwBYoI+N6+5Zs2NBHb/56jFs7jgAwAKlncq+3skZ9a6OAQD0a6+Y2LZsUjtQUO+k/wAwoG+16hsv9CaxfJOTh6NG6z8ADKglm6D0N6N+q5AGgEH7ckxym75Kqr+gHqfnADBom0W9q51Bvb2eA8CQfLHZs+oFBnX8Jq+MYW39BoAh2Shqr3bMqM2mAWB4vhAT3q5mfTNBDQDNtW7UPq0O6rfoMwAM25HN+qz6RUGd71n6Sj0GgGFbL2rnVs2o36C/ADBin2lVUG+mtwAwYm8c193zJjNqACiuI0f6DV7wQXck/6gYnohaUm8BoCk27O2bcHOzZtTrCmkAaKojRvKL5w/qzfUTAJoqPa961WYF9Yb6CQBNlT5WPrBZQb2BfgJA0x0Ys+pFmxHU6+klADTdSlF7jCioI+lXiGFlvQSAljhkpDPq9fUQAFombYCy8UiC+rV6CAAt9TEzagAorr1jVr38cIN6Hf0DgJZaPIX1cIN6Tf0DgJbbf7hBvYbeAUDLbT6uu2fQ94U9H9TxC14Rw2J6BwDFmlV3mU0DQNu9LybJXYIaAIpplahxghoAimv/oQT1q/QLANpq13HdPUsPNqhX0i8AaKu0pnqnwQb1GP0CgLbbc7BBvaJeAUDb7TjQ5e+5Qb2KXgFA26XL3zv0G9SR5EvGuKReAUBH7DLQjNrn0wDQOeNj0jy6v6B2xzcAdM5yUdv0F9Qv1SMA6Oysur+gXk5/AKCjduwvqJfXHwDoqLXHdfeMFdQAUFw7LCyoXfoGgM57ixk1ABTXtuO6e0YJagAoprQKa+MFBfXiegMAhbDdgoJ6WX0BgEJ404KC+iX6AgCFsPW47p5FzKgBoJjS59TrzR/Ui+oLABTGVvMHtUdcAkBxbCaoAaC4Np8/qF36BoDiWH9cd89S8wY1AFAcKZs3nPf/LKInAFAoLwhqy7MAoFg2mjeoAYBieb2gBoDi2kBQA0BxLT2uu2c1QQ0AxbW2oAaA4lpPUANAca0lqAGguNYU1ABQXGMFNQCYUQMAw7DkuO6elwtqACiuMSmo5+gDABTSqimon9AHAChuUAMAxbSSoAaA4npZCup/6wMAFNKKKahn6QMAFJLlWQBQYMu46xsAimvZFNSz9QEAihvUbiYDgGJaxs1kAFBco1NQP6kPAFBMKahnagMAFDeon9IGACik528me04fAKCQFrGOGgAKLAX1dG0AAEENAAwjqKdpAwAU0pwU1M/oAwAU0hMufQNAcc1MQf24PgBAIT2ZgvppfQCAQpphHTUAFNd0l74BQFADAMMwzaVvACiuh7t6+yak51HP1gsAKJwHu/IvXP4GgCLOqAU1ABTWI3OD2n7fAFA8D80N6kf0AgAENQAweA8KagAorrsFNQAU0wO9fRNmzA3qB/UDAArlrvQ/ZtQAIKgBgCG6W1ADQEmCeqp+AECh3DVvUD+gHwBQKH//T1D39k14LoaH9AQACmFGNt+l78TlbwAoyGw6JtGz5g/q+/UFAArhlrlfmFEDQPH8bUFBPUVfAKC4QX2fvgBAIdy6oKD2GTUAdN4zUXcsKKjv0hsA6Li/9PZNmCmoAaCYrp/3//wnqCO9H43hKf0BgI760wKD2qwaAArhxv6C+m79AYCOeTKb545vQQ0AxXJTb9+E2f0F9V16BAAdc8P8/2D+oL5TjwCgY64aKKj/oUcAUOygnqNPANB2t/b2TXio36CO/2B6DPfoFQC03R8W9A+7FvDPXP4GgPa7YrBB/Xe9AoC2u9KMGgCKaXJv34R7BxvUt+kXALTV5Qv7FwsK6lv1CwDa6pJBB3VMvdM2oo/rGQC0RdoytHcoM+rkL/oGAG1xfUySHxtqUE/SNwBoi0v6+5cLC+qb9Q0A2uI3wwlql74BoPXSJe8bhhPUf83s+Q0Arfbb3r4Js4Yc1PGLnso88hIAWu2Cgf6Drn7+3Y36BwAt81zURSMJ6uv0EABa5rLevgkD7lsiqAGgMy4YzH/UX1DfFDVTHwGgJX45oqCO6fj0zDItAGiFtBvZ/SOdUT//jfQSAJruF4P9DwcK6mv0EgCa7rxmBbUZNQA01w29fRMGvVfJQEF9e9QDegoATfOTofzH/QZ1JH7aRvRyPQWApki5ek7TgjonqAGgOa4a7N3eghoA2u/sof6CAYM6kv/vMdyvtwAwImkTsfObHtS5y/QXAEbkNzH5fahVQX25/gLAiPxgOL/IjBoAWu+RqF+1LKjzhdm36TMADMvZkaXPtnJGnUzUZwAYlh8M9xcOJah/rc8AMGSTYjbd146gvjrqcf0GgCE5YyS/eNBBHT8NPBfDJfoNAIOWPpc+qy1BnfM5NQAM3vnDWTs9kqC+KGq2vgPAoJw80m8wpKCOnwrSOrA/6jsADOjWyM0r2hrUuZ/qPQAM6KRmfJPhBHXaUHyO/gPAQk2P+lFHgjp/jubVjgEALNS5kZfTOjWjfv4FOAYAsFA9zfpGww3q9Dn1TMcBAF7kmphN/6mjQZ2vCbvUsQCAFzm+md+sawS/9izHAgBe4N6onxclqC/I7P0NAPP6bm/fhKZ+NDzsoI4Xkm49P8cxAYDnpVw8pdnftGuEv/40xwUAnndWTGIfLVRQ53e13ezYAEBzbyJr1ow6OcmxAaDmJsbk9W9FDep09/eTjhEANXZMq77xiIM6foL4d9ak/UwBoISujSy8srBBnetxnACoqW+28ps3JajjJ4lbMjuVAVA/t2eNfUWKHdS54xwvAGrm2Jiszi5LUKcZ9a2OGQA1MTXqzFb/Jk0L6viJYk4M33DcAKiJYyL7nilNUOfOjrrHsQOg4h6JOrUdv1FTgzp+sng2hmMdPwAqLn023ZY9RLpa8D2/H/WQYwhARaUnR7ZtWXLTgzp/qtbXHEcAKur4yLonShvUuZOzxt1wAFAlT0V9p52/YUuCOp9VH+N4AlAxJ0bGPVb6oM6lp2q5AxyAqkjPtmj7DdMtC+p8bdnnHVcAKuK4yLaHKxPUufQIzEmOLQAll+70Pr4Tv3FLgzrf//TTji8AJZfu9J5WuaDOw/qSGC52jAEoqUc7NZtuS1DnPhH1nGMNQAkd06nZdNuCOt7gbTH8n2MNQMlM7XR+dbXx9/pS1BTHHIAS+VK+N0j1gzrfbu0wxxyAkrgz6rROv4h2zqhTWP80hkscewBK4AuRWx2/v6qrA7/nIVFPO/4AFFhf1DlFeCFtD+r46SRdSrC2GoAi+3Tk1ZxaBnUuPcfzcucBAAV0SYT074ryYjoS1PlPKR/MGo8LA4CiSPlUqKu+nZpRp7D+ZwxHOCcAKJAfRD4V6hkVXR3+/dMl8N85LwAogHSVt3BPfexoUOeXwN8X9ZDzA4AO+0bk0v2C+sVhPSUPawDolHuivlnEFzaqCC9i8pSJd44dM36p+HIr5woAHTAhJo43FfGFdRXotXwu6nrnCgBtdl1WkM1NFmSRIr2Ycd09a8ZwY9RLnTcAtEG6V2qLmE0XdqJYpBn13CVbe0fNdu4A0AanFzmkCxfUeVhfGsORzh0AWmxa1GeL/iK7Cvq60p13P3UOAdBCX4zJ4YOCeniz6rlbjE5yHgHQArdkjU23Cq+oM+oU1mmHmHdlNkMBoPkOjpyZKahHHtbp5rJ3Rk13TgHQJD+MfLmyLC+2q+gvMJp5bdbYuWyOcwuAEXos6vAyveBRZXiRk6dMvHXsmPHpUvjbnGMAjMDHyzSbLsWMep6Z9bExfM85BsAwpSu0p5XtRXeV7PUeGnWecw2AIUo3jh0Qk77SbahVqqCOBs+KYd+oS51zAAxBeoRlKZf8lm1GncL62Rh2zRqXMABgILdHfaWsL76rjC86wvrpGN4R9VfnHwADSJe8nxHU7Q/rx2MYF3WncxCAhTg18uKKMr+BrjK/+Gj+AzFsK6wBWID7s5Ktma5cUOdhfa+wBmAB0iXvaYJaWANQPGmb0IlVeCNdVTki84T1Hc5PgFpLl7wPq8qb6arSkcnDesvM4zEB6qwSl7wrGdR5WKfHYr4p6nrnKkDtnFGVS96VDeo8rNPSre2iLnPOAtTGXVmFLnlXOqjzsE6bouwQ9SvnLkDlpUch7x9/9z8hqMsV1jNi2C3qVOcwQKUdV/aNTRZmkbocwXHdPV+M4SjnMkDlpO2kN80nZ4K65GH9oRhOySp+JQGgRlI4vyFC+uaqvsFaBVYcyPTA8J2jnnZuA1TCp6oc0rUL6jysL8oay7fuc34DlFpahvXdqr/JRep6dMd196wSw6+jup3rAKUzNer1+d4ZlVbbz2rj4N6fz6x/7nwHKJW0FGu/OoR0rYM6D+v0WfUeUUc77wFK42vx9/eldXmzizjeDeO6e94TQ7rZbAndACisP0RtH0E9S1DXM6w3iuGCqFfpBkDhpEvdG+UfXdaG9cTziIP/5xg2ifq9bgAUSvpcet+6hbSgXnBYPxLD26K+rRsAhfHVOn0uPS+XvvsxrrtnzxhOj1paNwA6JgX0jnX6XFpQDy2s147h/KgNdAOg7f4V1Z1f7awll74HECfH7TFsEXWmbgC0VdrHe/c6h7QZ9dBn1wfGcHzU4roB0HIfiZCu/WOKBfXQw/p1Mfwkal3dAGiZkyKkD9YGl76HLE6cSTFsljVuMgOg+dKmJh/XBjPqZsyu94nh5Mxd4QDNcneaDNVlH29B3Z6wXiuGs6I21w2AEUnPX9gq33yKnEvfIxQn1B0xbB311ajZOgIwbPsJaTPqVs+ut85n1/YKBxiaz0ZIf10bBHU7wnq5GL4b9V7dABiUH0ZI768NgrrdgZ22Hz0pagXdAFioK6LeFkH9rFYI6k6E9ZgY0mL9HXUD4EXSzo9vjJB+VCsWzs1kLRQn35QYdopKO5o9pSMA/5GWX+0opM2oizS7XjNrbJKyrW4ANZcmLttGSP9JK8yoizS7/mcM20cdYnYN1NjMqD2EtBl10WfXq2eNz67fqhtAzXwwQvoMbTCjLvrsOj1f9e1RB0T9W0eAmvickDajLuvsOu0X/g7dACrsWxHSn9IGQV3mwN4/azzrejndACrmtKzxbOk5WiGoyx7Wq+az6/G6AVTEz6L2jpCepRWCukqB/Z4YvhO1om4AJXZp1M52HRsZN5MVUJzU58SwbtQPdQMoqcuidhXSZtR1mF2Pi+GUqDV1AyhRSO8UIf20VphR12F23RvDBlHHRvmMByi666PeKaTNqOs6u+7OGjebbaobQEFDOj0J63GtMKOu6+y6L4Ytog7NbJQCCGkzago9u14lhhOidtcNoMPSZ9LpcveTWiGoeXFgp8donhj1Kt0AOhTSbhxrIZe+Sy7+cFwYw3pRx0Q9pyNAG10spM2oGdrs+rUx9ERtpxtAi50Xta910oKa4QX23jF8O+oVugG0wPejDrYtaHu49F1B8Yfn3BjWycPaHySgmY6OOlBIm1HTvNl12iwl3Wy2jW4AI3R4BPSx2iCoaU1g7xXDN6NW0w1giNKNqh+IkP6xVghqWhvWS8ZwZPqpOGoxHQEG4Yms8XCN32uFoKZ9gZ0e8JE+v36XbgD9uDdqhwjpv2qFoKYzgZ2ezHVc1Ot0A5jPX6LGR0jfpxWd5a7vGsufzLVx1EFRD+kIkPtV1NZC2oyaYs2ul43hc1GHRS2qI1BbaZfDz0ZIz9YKQU0xA3ts/gd1D92AWkk7jH04AvpMrRDUlCOwt8way7m21A2ovClRu0dIX6MVgpryBfZuMXw9am3dgEq6KmrPCOmpWlFMbiajX/GH9+cxrB/10agHdQQqJT3TfnshbUZNdWbXS2eNzVL+J2opHYHSmh51QAT0WVohqKlmYL88hs9HHRi1uI5Aqfwt6t0R0rdohaCm+oG9egxfiNo/apSOQOGdEXVohPRTWiGoqVdgpxvNvhy1l25AIaVgPsilbkGNwE67nH0xs4c4FElf1D4R0rdphaAGgQ3FkXYWOzrqqAjp57RDUIPAhuL4Z9T7IqCv1gpBDQIbiiXdMPbxCOl/a4WghqEG9gZZ48Efe2buEodmuydr7NV9qVYIahhpYK8Vw6ezxrKu0ToCI9YTdWSE9BNaIaihmYG9WtbY5ewjUUvqCAzZHenPTwT05VohqKGVgf2yGA6OOjRqJR2BAaVHUqbH0X4tQvoZ7RDU0K7ATtuRvi+fZa+jI7BAvVEfjYC+XSsENXQqsNNT3cZnjc+xt9YReF56ZvQnI6DP1QpBDUUK7U1i+FjU3lGL6gg1lC5tHxf19QjpJ7VDUENRAzt9dp2e1nVQ1Co6Qk38NOqICOi7tEJQQ1kCOy3n2j2fZb9RR6ioG7LGZe6rtAJBTZlDe6MYDojaN2oZHaECbs0az3r/RYT0HO1AUFOVwF4qhvdmjUvj3TpCCaVdxdKz3c+MgJ6lHQhqqhzam+SB/Z6opXWEgrs36ltRPRHQz2oHgpq6zbLTZ9n7R23rXKdg7s4aj6A8XUAjqBHa3T1rxPD+qP2ixuoIHZS2/Pxq1FkR0DO1A0ENLwzsdL6/KQ/tNNteXldok3T3drrE/asI6NnagaCGgUN7sRjeHrVP1E5RS+kKTZZuCjsv6rgI5xu0A0ENww/tpfOw3icPbzugMRIPRJ0WdVIE9D3agaCG5ob2cjG8M2qXqHdkHr/J4P0+6ntRv4yAfk47ENTQ+tBeIp9h75bPuF+qK8zn/qgfR50S4XyHdiCooXOhnbYufXPUzlE7Rr1GV2rrqajzo86K+p2bwxDUUMzgXisP7B2yxjrtxXWl0tJa50ujfhJ1gadYIaihXKGdLpG/JWtcJt8uan1dqYT0eMnfZo07t9Oyqse1BEEN1Qju9EjO7fPQTgH+al0pjalRl0T9Ms2gI5yf1hIENVQ/uF+ZB/dWea3nz15hTI+6Ip8590ZN8tQqBDUI7mVj2CJqy6zxTO3No5bTmbZI23belIdyqqsjmGdoC4Ia6C+4u2JYJ2s8onOjfNw4sxysGdKl7Guiro36Y9SNEczTtQVBDTQjwF+VB3aqDaJemzWWhY3WnQWaEjUprxtTQEco36UtCGqgneH9kqzxBLD18uBeN2rtqDWjVq5JGx7OGk+huiUP5ZtTRSg/4gxBUANFDvEl8sBeY75aLSrdiT4maokSvJVHox6MuicP5Ml53ZnGCOR/O9oIaqCqYZ6eErZK1Ir5mAI8fRaebnBbbr5x7tdZ/nVX/nV/N749ETX3run09KgUqtPy8Yn5xsfyQE6XrB/Ixwfd3AUv9P8CDAAGgphXwQDkvwAAAABJRU5ErkJggg==) no-repeat;
    -webkit-background-size: 245px 241px;
    -moz-background-size: 245px 241px;
    background-size: 245px 241px
  }

  .cardflow-final.art .cardflow-card-avatar-bg {
    background-color: #322677
  }

  .cardflow-final.fashion .cardflow-card-blob {
    width: 261px;
    height: 260px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgoAAAIHCAYAAAD+X3SLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjIxQTMyNUVFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjIxQTMyNUZFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NUZGMTkyMUU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NUZGMTkyMkU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvcnbo4AACk/SURBVHja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) no-repeat;
    -webkit-background-size: 261px 260px;
    -moz-background-size: 261px 260px;
    background-size: 261px 260px
  }

  .cardflow-final.fashion .cardflow-card-avatar-bg {
    background-color: #0fb2b4
  }

  .cardflow-card {
    position: absolute;
    display: block;
    width: 100%;
    height: 288px;
    background-color: #fff;
    border-radius: 2px;
    bottom: 0
  }

  .cardflow-final-title {
    position: relative;
    display: table;
    width: 100%;
    height: 20%
  }

  @media (max-height: 510px) {
    .cardflow-card {
      top: 0;
      bottom: auto
    }

    .cardflow-final-title {
      height: 16%
    }
  }

  .cardflow-card-cnt {
    position: relative;
    display: block;
    width: 100%;
    height: 80%
  }

  @media (min-width: 650px) {
    .cardflow-final h4 {
      font: 400 32px/32px "Odin Rounded Regular"
    }

    .cardflow-final .cardflow-card-blob {
      -webkit-transform: scale(1.4, 1.4) translate(-37%, -37%);
      -moz-transform: scale(1.4, 1.4) translate(-37%, -37%);
      -o-transform: scale(1.4, 1.4) translate(-37%, -37%);
      -ms-transform: scale(1.4, 1.4) translate(-37%, -37%);
      transform: scale(1.4, 1.4) translate(-37%, -37%)
    }

    .cardflow-card-cnt {
      width: 80%;
      margin: 0 auto
    }
  }

  .cardflow-name, .cardflow-type {
    position: absolute;
    padding: 0;
    margin: 0;
    bottom: -6px;
    font: 400 16px "Odin Rounded Bold";
    color: #a3a4a4
  }

  .cardflow-card-blob {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: scale(.8, .8) translate(-63%, -63%);
    -moz-transform: scale(.8, .8) translate(-63%, -63%);
    -o-transform: scale(.8, .8) translate(-63%, -63%);
    -ms-transform: scale(.8, .8) translate(-63%, -63%);
    transform: scale(.8, .8) translate(-63%, -63%)
  }

  .cardflow-card-avatar-cnt {
    position: absolute;
    top: 50%;
    left: 50%
  }

  .cardflow-card-avatar-bg {
    position: absolute;
    top: -60px;
    left: -60px;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: #000
  }

  .cardflow-card-avatar {
    position: absolute;
    top: -58px;
    left: -58px;
    width: 116px;
    height: 116px;
    border-radius: 60px;
    background-color: #444;
    overflow: hidden;
    z-index: 0
  }

  .cardflow-name {
    left: 10px
  }

  .cardflow-type {
    right: 10px
  }

  .card, .card-cnt, .line {
    position: relative
  }

  .cardflow-final.music .cardflow-type {
    color: #fccd04
  }

  .cardflow-final.tv .cardflow-type {
    color: #ff6e29
  }

  .cardflow-final.social .cardflow-type {
    color: #a64ac9
  }

  .cardflow-final.art .cardflow-type {
    color: #443694
  }

  .cardflow-final.fashion .cardflow-type {
    color: #14e4da
  }

  #modal-iamother-bg, .iamother {
    display: none
  }

  .line {
    display: block;
    margin: 0 auto;
    width: 97%;
    padding-bottom: 4px
  }

  @media (min-width: 550px) {
    .line {
      width: 98%;
      width: calc(98%)
    }
  }

  .line--first {
    padding-top: 67px
  }

  #card-sample {
    display: none
  }

  .card.music .card-blob {
    width: 248px;
    height: 254px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfAAAAH8CAYAAAAubv2dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OERGN0ZBQURERENBMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OERGN0ZBQUNERENBMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEJDNzUzMURDODAxMUU1ODVGMEZDMjY4NjU0QkQ3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNEJDNzUzMkRDODAxMUU1ODVGMEZDMjY4NjU0QkQ3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Popff+IAACKxSURBVHja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) no-repeat;
    -webkit-background-size: 248px 254px;
    -moz-background-size: 248px 254px;
    background-size: 248px 254px;
    margin-left: -124px;
    margin-top: -127px
  }

  @media (min-width: 550px) {
    .card.music .card-blob {
      width: 496px;
      height: 508px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfAAAAH8CAYAAAAubv2dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OERGN0ZBQURERENBMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OERGN0ZBQUNERENBMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEJDNzUzMURDODAxMUU1ODVGMEZDMjY4NjU0QkQ3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNEJDNzUzMkRDODAxMUU1ODVGMEZDMjY4NjU0QkQ3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Popff+IAACKxSURBVHja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) no-repeat;
      -webkit-background-size: 496px 508px;
      -moz-background-size: 496px 508px;
      background-size: 496px 508px;
      margin-left: -248px;
      margin-top: -254px
    }
  }

  .card.music .card-hover-share {
    width: 48px;
    height: 47px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACNCAYAAACOqymYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUY0QTE2QUVFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjU5REI5ODhFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTdCOTkyNEUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QTdCOTkyNUUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn2WvjAAAAQRSURBVHja7N2vUxVrGMDx1XEg0W4iaWBM13QayXRNmkiStFwKJrXca7hSxIRBTCZNNv8BkhZNmBwDJBMm0lq47wPvGZl74Zxd2D3D7vl8Z55hDrNnd/bly/u8P3cvHRwcFMBZuKwIQB6QB+QBeQDygDwgD8gD8gDkAXlAHpAHIA/IA/KAPCAPQB6QB+QBeQDygDwgD8gD8gDkAXlAHpAHIA/IA/KAPCAPQB6QB+RBT7nS9Rv49mJ20peMC5ZNnWxhtexs2at56lMqAvLgnFzq4rsnUqqaSz+WUwxSzJzzdJ9TvEvxveLxv6W4nWKxgWvv5+u/TemrJM9kxHma4kGDp32dYi3FTgVx/kmx0vBtbaR43DWBupi2lhoWJ7iXYxx3WxCnyPdzV5unfRZbOu/VFHNjjhm0eF8D8rTPTEvnXR4jz1zL9zVHnu7yJjdgRzVufyom8pzW69ofc8wHxfSLK4rgsMbZTfGqwrFvU1zL7aNl8vSPzaLamM0wBX1KsVXx3NGV/jvFzRRfTmh/PSVPt/mSBWqTrROEmyUPzkIMHj6UtnAWcf4qmh+41NsijpoH/2c+i7MyrQWg5iEOeSbItZrixDjSnRT3yUOcuuLEwOL73JXX5plSrqd4VFRbujEUJ9YJbfW1QMjTnjgx3XF8Lqwkz/QxyF3x5RrixMrAz//5vbRFnJFEmto8QZxe1jwazKez2KA4wU6ulU5jlzz9IGbN/6yZqtZHiFPkhvOPEd9/J231Q5x7NWucEOdrhWPXc/qaP3b++P7rhdVymzzd5lZxtIuhjjhVtuwMiXVGj1PcKI7Gf2Ll4nYSZ7+LhUWeX8RGvqUa4mxmcb6f4VrbOTq9V508RyxleSYhjq56jwhh/qgpzpMUe9NecNMuz+2a4mzkGmfP/9x0yxMjvndqiBM9pefEIU9wtag+V7WWax3ikOeQqtt717M85+0WDZ8oditHjPXsf3sxGwOLb7rYXZ/mEebdYvR0wbDGeVI0My9V5pouxpEe5B5efH6Z4ll+dAx5OkKkoI9jxFkrmpvQjIVkN09pY60UHdyBOu29rRghjl2fg2N/vKiNIpW8KpqdCV8cI8iAPN2izA3hWOw1nJiMHac7LVxrXFqaIU83+VpUm9iENg/IA/KAPCAPQB6QBxeVPo7z/F4c7SePZw5epIG3efJcfFbUCdIWyAPyAD2Qp6/vf/hJnvbp6/sfPpCnfeIRbRs9Eyfup3MPOujqO0bj+cexBriJd4y2zahXaUeqOnzH6cJquUceaDAD5AF5QB6QByAPyAPygDwgD0AekAfkAXlAHkUA8oA8IA/IA5AH5AF5QB6QByAPyAPygDwAeUAekAfkAXkA8oA8IA/IA5AH5AF5QB6QByAPJsW/AgwAOuK9cwg6dp0AAAAASUVORK5CYII=) no-repeat;
    -webkit-background-size: 48px 47px;
    -moz-background-size: 48px 47px;
    background-size: 48px 47px
  }

  .card.music .card-hover-top {
    width: 81px;
    height: 33px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAABBCAYAAAC5FcQ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUY5NjQ2RTBFMTA3MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUY5NjQ2REZFMTA3MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTlGODgzQTgxRTgxMUU1QjI1OUVBQzFBMzVEMTZBRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTlGODgzQjgxRTgxMUU1QjI1OUVBQzFBMzVEMTZBRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmiD3KUAAASnSURBVHja7J3Nbw1hFMaPl1gREhKJhY0uJGxY+GotSMNK2BBNrET8ARKKxE6ibPoHiNhqKhFNLCzEhioLISoUrVRF097WLSWoEOe4z/Xd3nt7Z96Zd+b5JQ+t1Mz5eDqdmfejc4pdK46KyBnVpBDil4Wq1jlqwiX6wYhqLmtCPPNVtczpH+OqFtaDJEDL4p2D4w6fdKpusybEI7fhO3G//eN+1oV45KfffjfhgOoYa0M8cAx++8eEgqfkO6wRiZE78JlMZ0Jjl2qKtSIxMAV/SSUT2uuafawXiYF98FdFExqXVW2sGYmQNvhKqjWhcVx1lbUjEXAVfpJaTVi+P+xlDUkd9P7vPrAWE9qwylbVMGtJZsEw/PO1HhMaY6om1QRrSmpgAr4Zq/SFrsoDDuCA71lbUgXv4ZeBar7Y1XDgR6rNqiJrTGagCJ88qvY/uBpP8FDVyHtEMsM9YCN8InGZ0His2oi/CanbF26WJ3yJE95k7Ql8sBG+EF8mNN6ptqg62INc0wEfvJvtAVwEQdh4YDt7kUvaJYJ5Bi6iYA6rWtmTXNGKvktaTGicVR1kb3LBQfRb0mZC47xqN3uUaXajz5JWExpXcKP6kf3KFB/R1ytRH9jFFLA9sm8Sjq5khSL6GcsrORdj4A8QOEdXwmYYfXwQ1wlczAn0IYEX7GWQvED/+uI8ifOQyCAS6WdPg6IffRuM+0TOU0K2uMVmVjxhb4PgCfo14uNkzmNiozRiUAYc9XVC5znBIo0YhAG9vtVwCSRaNuJT9jxVPJWEJi27hBK2RJv4sJKqh5AmSei9rksw8QK+817SA4kyiD4UkgrAJVwAu/lt9PUURv5hBFfA0SSDcCkoxCsU4i094ZW3qPurpANxKSnIcykNjn+iN7zwCfV+noZgXIoKYyu0mukPLzRLjSvi8mJC45ZU2LeE1M0u1FlowunpUh2gV2LhAOorNGFlLgjXrERNK+oqNGH12BoGruKLhnaJcE1Inkxo2GquTnqoLjololVxeTWhsVfVTS/Nim7UT2jC+tkuHGeulX7UTWjCaPggpZerBXqrKgqo1weaMFqGUVjuGDszE6hTMAvMXGAFtgU33DF2eso7pPaFFLQLsNDlHWPH6bk/GJcad0ilCevDxj1tJdgQvfeDIdTjYYjBu4AL/0y1QXUv5wa8hzo8CzUBF3gD7ObbdgjtyqkBu5B/0LtcuAw04ouUZoaczpkBTyPvL6En4jLUlBOqParJjJtvEnmeyEpCLmMNuqRaq7qRUQPeQH6XspSUy2CjbLhqm8zwWyUD5TjyytzwZRZNWKYNV43rgedxHXlk9vdPZ9mExn0pradoCfAK0o+4m5GH0IRhc1G1Gj/S0j4JooA4VyPuzJMXExqf8SNtleqkpG+0ZQhxrUKcn/PSmDyZsMwb1SlVg+qQqifheHoQRwPiepO3hsyT/DKlOgfZqIO9e7OXvys93e/ZLvidKfgmoAlTQg90BIbcIaUpUetVCyI4vk2xuiul3e+v4VzfWHaa8H+YMbrl15qWRao1qnWqFbhKLlctVS1Wzf/rymoTSsdUr3G1sx3HbIJBr3CvnWn5LsAArf7sTSvGkCUAAAAASUVORK5CYII=) no-repeat;
    -webkit-background-size: 81px 33px;
    -moz-background-size: 81px 33px;
    background-size: 81px 33px
  }

  .card.music .card-avatar-bg {
    background-color: #efb21e
  }

  .card.music .card-hover-bg {
    background-color: #fccd04
  }

  .card.music .card-type {
    color: #fccd04
  }

  .card.tv .card-blob {
    width: 255px;
    height: 244px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAHoCAYAAACo4I2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI0MkRENzRFNEYzMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUI0MkRENzVFNEYzMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQjQyREQ3MkU0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQjQyREQ3M0U0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt7Fyd8AACStSURBVHja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) no-repeat;
    -webkit-background-size: 255px 244px;
    -moz-background-size: 255px 244px;
    background-size: 255px 244px;
    margin-left: -128px;
    margin-top: -125px
  }

  @media (min-width: 550px) {
    .card.tv .card-blob {
      width: 510px;
      height: 488px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAHoCAYAAACo4I2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI0MkRENzRFNEYzMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUI0MkRENzVFNEYzMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQjQyREQ3MkU0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQjQyREQ3M0U0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt7Fyd8AACStSURBVHja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) no-repeat;
      -webkit-background-size: 510px 488px;
      -moz-background-size: 510px 488px;
      background-size: 510px 488px;
      margin-left: -248px;
      margin-top: -254px
    }
  }

  .card.tv .card-hover-share {
    width: 48px;
    height: 47px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACNCAYAAACOqymYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUY0QTE2QjJFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUY0QTE2QjFFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTdCOTkyNEUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QTdCOTkyNUUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmQmNa0AAAQSSURBVHja7N2tc9VYGIDxwDBF1S2mChSmrLquCrUoEEwVVazZKhSL2UUsNXRVzRaFAsXU8A9UgQFVMKhWYdpVVRfTPW977tBZ2nuTNrnTJL9n5p3O7eQmk9On5z2fyaWDg4MCOAuXFQHIA/KAPCAPQB6QB+QBeUAegDwgD8gD8gDkAXlAHpAH5AHIA/KAPCAPQB6QB+QBeUAegDwgD8gD8gDkAXlAHpAH5AHIA/KAPOgoV9p+A5/vX5v2Ja+mGNZ1svmNXTVPjxgqAvLgnFxq47snUqqaTT+WUgxSzJzzdB9TvEnxteTxP6W4m2Khhmvv5+u/TulrSJ7piPMsxaMaT/syxUqK7RLi/JViuebbWkvxpG0CtTFtLdYsTvAwxyQeNCBOke/ngTZP8yw0dN7rKWYnHDNo8L4G5GmemYbOuzRBntmG72uWPO3lVW7AjmvcflNM5Dmt17U/4Zh3iuk7VxTBYY2zk+JFiWNfp7iR20dL5Oke60W5MZtRCvqQYrPkuaMr/WeK2yk+ndD+ekaedvMpC9QkmycId5U8OAsxePhY2sJZxPmjqH/gUm+LOGoe/MhcFme5rwWg5iEOeabIjYrixDjSvRS/koc4VcWJgcW3uSuvzdNTbqb4vSi3dGMkTqwT2uxqgZCnOXFiuuP4XNiQPP1jkLviSxXEiZWBH//3e2mLOGOJNLV+gjidrHk0mE9noUZxgu1cK53GDnm6Qcya/1YxVa2OEafIDed/x3z/jbTVDXEeVqxxQpwvJY5dzelr7tj54/sv5zd2t8jTbu4UR7sYqohTZsvOiFhn9CTFz8XR+E+sXNxK4uy3sbDI853YyLdYQZz1LM7XM1xrK0er96qT54jFLM80xNFV7xAhzC8VxXmaYq/vBdd3ee5WFGct1zh7/uf6LU+M+N6rIE70lP4mDnmC60X5uaqVXOsQhzyHlN3eu5rlOe/0wuiJYndyxFjP/uf712Jg8VUbu+t9HmHeKcZPF4xqnKdFPfNSw1zTxTjSo9zDi8//pHieHx1DnpYQKej9BHFWivomNGMh2e1T2ljLRQt3oPa9txUjxLHrc3Dsjxe1UaSSF0W9M+ELEwQZkKddDHNDOBZ7jSYmY8fpdgPXmpSWZsjTTr4U5SY2oc0D8oA8IA/IA5AH5MFFpYvjPLeKo/3k8czBizTwNkeei8+yOkHaAnlAHqAD8nT1/Q/fyNM8XX3/wzvyNE88om2tY+LE/bTuQQdtfcdoPP841gDX8Y7Rphn3Ku1IVYfvOJ3f2N0jDzSYAfKAPCAPyAOQB+QBeUAekAcgD8gD8oA8II8iAHlAHpAH5AHIA/KAPCAPyAOQB+QBeUAegDwgD8gD8oA8AHlAHpAH5AHIA/KAPCAPyAOQB9PiPwEGAEPyveMdx9zYAAAAAElFTkSuQmCC) no-repeat;
    -webkit-background-size: 48px 47px;
    -moz-background-size: 48px 47px;
    background-size: 48px 47px
  }

  .card.tv .card-hover-top {
    width: 81px;
    height: 33px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAABBCAYAAAC5FcQ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzVBMzlDOURFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzVBMzlDOUNFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTlGODgzQTgxRTgxMUU1QjI1OUVBQzFBMzVEMTZBRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTlGODgzQjgxRTgxMUU1QjI1OUVBQzFBMzVEMTZBRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PutUpa8AAASnSURBVHja7J3Nbw1hFMaPl1gREhKJhQ0LiW5Y+GotSMOSSIgmViL+AAlFYidRNv0DRGxJiWhiYSE2VFk0pBWKVqqiaW+rpQQV4hz3ub7be2/vzDvzzjy/5KGVmjkfT6cz8350TvfupUdF5IxqUgjxy0JV8xw14RL9YFg1lzUhnvmqWub0jzFVE+tBEqCp7kphzOGTNtVd1oR45C58J+63f9zPuhCP/PTb7ybsVx1jbYgHjsFv/5hQ8JR8jzUiMXIPPpPpTGjsVE2xViQGpuAvKWdCe12zj/UiMbAP/iprQuOqqoU1IxHSAl9JpSY0jquus3YkAq7DT1KtCUv3hz2sIamBnv/dB1ZjQhtW2aoaYi3JLBiCf77WYkJjVNWgmmBNSRVMwDej5b7QVXjAfhzwPWtLKuA9/NJfyRe7Kg78SLVZNc4akxkYh08eVfofXJUn6FbV8x6RzHAPWA+fSFwmNB6rNuJvQmr2hZvlCV/ihLdZewIfbIQvxJcJjXeqLapL7EGuuQQfvJvtAVwEQdh4YCt7kUtaJYJ5Bi6iYA6rmtmTXNGMvktaTGicVR1kb3LBQfRb0mZC47xqF3uUaXahz5JWExrXcKP6kf3KFB/R12tRH9jFFLA9sm8Sjq5khXH0M5ZXci7GwB8icI6uhM0Q+vgwrhO4mBPoRQIv2MsgeYH+9cZ5EuchkQEk0seeBkUf+jYQ94mcp4RscYvNrHjC3gbBE/Rr2MfJnMfERmjEoAw44uuEznOC4zRiEAb0+lbDJZBoyYhP2fNU8VQSmrTsEkrYEm3gw0qqHkIaJKH3ui7BxAv4zntJDyTKAPpQSCoAl3AB7Oa33tdTGPmHYVwBR5IMwqWgEK9QiLf0hFfeou6vkg7EpaQgz6U4OP6J3vDCJ9T7eRqCcSkqjK3QaqQ/vNAoVa6Iy4sJjTtSZt8SUjM7UWehCaenXXWAXomFA6iv0ITluSBcsxI1zair0ISVY2sYuIovGlolwjUheTKhYau52uihmmiTiFbF5dWExl5VB700KzpQP6EJa2e7cJy5WvpQN6EJo+GDFF+uFuitiiigXh9owmgZQmG5Y+zMTKBOwSwwc4EV2BbccMfY6SntkNobUtAuwEKXdowdo+f+YEyq3CGVJqwNG/e0lWCD9N4PBlGP7hCDdwEX/plqg6or5wbsQh2ehZqAC7wBdvNtO4S259SA7cg/6F0uXAYa8UWKM0NO58yAp5H3l9ATcRlqygnVHtVkxs03iTxPZCUhl7EGXVatVd3KqAFvIb/LWUrKZbBRNly1TWb4rZKBchx5ZW74MosmLNGCq8bNwPO4iTwy+/uns2xC44EU11M0BXgF6UPcjchDaMKwuahagx9paZ8EUUCcaxB35smLCY3P+JG2WnVS0jfaMoi4ViPOz3lpTJ5MWOKN6pRqleqQqjPheDoRxyrE9SZvDZkn+WVKdQ6yUQd792Yvf1d6ut+zXfDbUvBNQBOmhE7oCAy5Q4pTotarFkRwfJtidV+Ku9/fwLm+sew04f8wY3TIrzUti1R1qnWqFbhKLlctVS1Wzf/rymoTSkdVr3G1sx3HbIJBj3CvnWn5LsAAUBTrxwlpyf0AAAAASUVORK5CYII=) no-repeat;
    -webkit-background-size: 81px 33px;
    -moz-background-size: 81px 33px;
    background-size: 81px 33px
  }

  .card.tv .card-avatar-bg {
    background-color: #d35214
  }

  .card.tv .card-hover-bg {
    background-color: #ff6e29
  }

  .card.tv .card-type, .card.tv cardflow-type {
    color: #ff6e29
  }

  .card.social .card-blob {
    width: 236px;
    height: 264px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe8AAAIrCAYAAADGGBHyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI0MkRENzhFNEYzMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVGRjE5MThFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQjQyREQ3NkU0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQjQyREQ3N0U0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph5YALwAACZVSURBVHja7N0JvOdzvT/wr8PYGWXLmvWiInIQ/lnGIYUoy7+TqEiL1F/L/UcbJVG3urdoQVc0ywmXZI2OLZTldO2iECL7NpZhzHLfn/v7qjHOnDnLb/kuz+fj8e4zjZkzv9/7+zu/13l/f99lgQyotL6egXGxrBC1ctTyUSvl//8NUctEjc9rqail81o0/+uLR42bx5eeHTU1//W0qOfyemaOXz8Z9WjUY1GP5+sjUX/v7e9+ytaB0VlAC6ASAZ2C981R60StFbXGHOtqUV0FfNgvRN2f1wNRf4u6O+rPqYQ7CG+oSkgvlIf0Jvn6pnx9YwWfbpra/5KH+W1Rt0bdEqF+v1cCwhsoclivG8tmeW2eh/ZiNW/LM68EedQfo66Luj1CfYZXDMIb6ERYrx/LdnPUiroyLC9G3RA1kIf57yPM79EWhDfQirBeLpZ3R70ranth3VQPRV2V19VRN0agz9QWhDcw0rBO33MbR+2S1xa+D9smHRn/u6hLovqjboswn60tCG9gXoGdQnrvvFbTlUJ4NA/y30ZdGEH+sJYgvEFob5qH9QcEdimkz8zPS0EedW2E+SwtQXhDPQJ71Vj2j/pw1Lo6UlpPRF0QdVbURRHk07QE4Q3VCux0BbLdoz4atZPvq8pJF5P5TdSv0mQeQf60liC8obyhvWYsB0UdkDlKvC7SueTpM/K+qF9HkE/VEoQ3lCO0d4jlM1G7+R6qtXRu+QV5kJ9v1zrCG4oX2Itkjc+yU2i/RUeYS7oJyxlRv4i6wiloCG/obGinu24dnIe2XeMMx71Rp0ZNjBC/WzsQ3tC+0E63zfxsHtxL6AijdGXUSWkqjyB/UTsQ3tCa0F49ls9FfTz75z2tYazS7U3TLvUTI8Rv1w6ENzRv0j486hNR43SEFkrXWT8h6rQI8unagfCGkYf2cnloH2zSps0ey0P8pxHiD2oHwhvmH9rpntiHRh0WtbSO0EHpTmfpSm7HR4j/TjsQ3vDa0O6KZd+ob0WtqiMUzB+jvh91egT5DO1AeCO4GxdX+beoTXSDgrs/6odRJ7mKG8Kbuob2Bnlo76IblEwK7nSq2fcixB/SDoQ3dQjtpWL5Wtb4bHshHaHEXoo6Jeo7EeL3aAfCm6oGd7qPdvrs0OfaVEk6uO2XUd9yvrjwhiqF9nqxHB/VoxtU3K+jvh4hfoNWCG8oa2gvHsuXo74QtbCOUCPphihHmsSFN5QtuLeP5WdRa+kGNZXuYnZ61DeEuPCGood2urjKd6MO0g34R4hPjjrCgW3CG4oY3Om0r59mDkiDwbycNU4x+6ZTzIQ3FCG0l43lB1njKmnA0F7IGhd7+XaE+NPaIbyhE8G9R9a4kcMKugEj8kTUUVE/cScz4Q3tCu0l82n7AN2AMbkr6rAI8DO1QnhDK4N7q1gmZo4kh2ZK9xT/QoT4NVohvKGZoT0ua1za9EtRXToCLTExn8T/rhXCG8Ya3OtnjdNd3qYb0HLPRx0d9e8R4i9qh/CG0QR3+lz7uKjFdQPa6q9Rn4sAP1srhDcMN7TTQWnpvG2ngEFnXRT1qQjxu7VCeMNQwb1x1ri047q6AYWQbkH6nahjIsSnaYfwhrmD++CscevORXQDCiddYvUzEeDna4XwhhTa42P5z6g9dQMK76yoTzsqXXhT7+DeMJZfRa2tG1AaU6MOizohQnyWdghv6hXc6YC0EzNHk0NZ/SHqoAjw27RCeFP90F44a9y+89O6AaU3I2ucG350hPjL2iG8qWZwrxzLGVFb6QZUyk1RH44Av1ErhDfVCu5tssZpYCvqBpjCEd4UP7g/mTXuJbyQboApHOFNsUN74Ty0P64bULsp/KtR33FEuvCmXMG9fCz/FbWNbkBtXRG1XwT437SiNdxqkWYGd7rM6YDghtrbNurmeE/YRytM3hQ7uPeO5ZTM+dvAq6X3hXR1tue0QnhTnNBOr6EvRx2lG8A83Bm1dwT4LVohvOl8cKcD007O3MYTmL8Xoz4ZAX6KVghvOhfcy8VydtTWugGMQArvg91qVHjT/uBeP5Z0i8C1dAMYhVuj9owA/7NWjI6jzRlpcO+QNW5MILiB0XpL1PXxfrKrVpi8aX1wHxDLCZkrpgHNMTvqK1HHxBQ+WzuEN80N7fQ6+XrWuHISQLOl+x8cEAH+vFYIb5oT3OmI8nT/7Q/pBtBC6droe0SA36sVwpuxBff4rHErzx11A2iDx6LeEwF+jVYMzQFrzCu4V43ld4IbaKN0b4RL4/1nL60Q3ow8uDeKJf3ku5FuAG22WNTp8T70r1oxb3abM3dwpxsKnBO1tG4AHZbObvlUb3/3TK0Q3sw7uNOuqslRC+sGUBDpglD7RIC/oBX/ZLc5rwT3IbGcJriBgtkl6qL8AFpM3uShnV4D6Y5gX9YNoMDSHcneGRP4Q1ohvOse3AvGclLUR3QDKIF78gC/S3hT1+BePGtc1WgX3QBK5JGoHet+b3DhXc/gTp8dpYNA3M4TKKPHoybUOcAdsFa/4F45lqsEN1Biy2WNi7lsZvKmDsG9TiwXR62pG0AFTI3aKSbwa03eVDW4N47lasENVEi6mNTF8f62hfCmisGdrpp2RdQKugFUNMBrtQtdeFc/uHeL5cLM5U6Bagf4BfF+t6HwpgrBvW8sZ2aNC/0DVNkrB7GtK7wpc3AfHMvEqHG6AdQowC/LD84V3pQuuNOlTn+UOZsAqJ9Vssa10Fes8pP05l6t0E7b89+iPq8bQM3dGLVdb3/3M8KbIgd3uk55uvftgboB8L8ujXpXBPj0qj0xu82rEdzpNp6/FNwArzIhalK8R1Yu64R3+YM73WDk3Ki9dAPgNfaO+veqPSm7zcsd3OkGI+kc7i11A2BIh/T2d/9IeNPp4E5XS+uP2lA3AOZrVtSuEeAXCm86FdxvjOWSqLV1A2DYno3augq3EhXe5Qvu9fLgXkU3AEbs/qjNI8AfKfOTcMBauYI73RnsKsENMGqrR52dn6UjvGl5cG+VNe4MtpxuAIzJ26OOF960Orh3zBoHp7kzGEBzHBTvrR8t64P3mXfxg3uPWE7P3GAEoNnSlde26e3vvlZ408zg3i+WUzJ7SABa5e9Rm0aAP1ymBy0Uihvcn4rlF7YRQEutHDU5vz+E8GZMwX14VvKDKQBKJF0D/atlesB2mxcrtNP2OCbqi7oB0FbpCmw79fZ3XyK8GUlwp70g6bq7n9ANgI5IF27ZuAyff9ttXozgTp+1TBTcAB21Yta4hWjhB1vh3fngTlf5OTPqA7oB0HE7RH2u6A/SbvPOBne6F/dpUbvqBkBhpPO/N+vt775ZeDNYcJ8Xtb1uABTOrXmAv1jEB2e3eWeCe3wsFwtugMJ6S9SxJm9eCe7XxfKbqM11A6DwJsT0fZnwrndwLx/LpflPdAAU371RG0aAP1ekB2W3efuCe9VYLhfcAKWyRtQ3Td71Du61dQOgdGZHbRvT95XCuz7BvU4e3KvoBkBp3RX11gjwF4rwYOw2b21wv1lwA1RCGsS+ZvKufnBvmDUOTltONwAqYUbWuPb5bSZvwQ1AOSwUdWIRrn0uvJsf3N2CG6Cytoo6sNMPwm7z5gb3FlnjymlL6wZAZT0VtX5vf/ejJm/BDUA5pCtldvTcb5O34AZg5NK535vG9H2DyVtwA1AOafj9YacOXhPeghuA0fk/Ue/v1E8OCG4ARufBqHV7+7unmbyLH9wbCm4AssYVND9n8i5HcDuPG4BXTI1aO6bvx03eghuAckh7Ydt63XOT9/CDO12U/g+CG4BBvBy1QUzfd5u8ixXclwtuAOZhXNbGC7eYvOcf3Kvmwb22bgAwhHThlo1i+r7V5N3Z4F4+lssENwDDHIi/2a5/iHkHdzo47S26AcAIvK3Vl001eQ8e3ONjOU9wAzAKR5i82x/ci8RyYdT2ugHAKG0R0/d1Ju/2BPeCsZwmuAEYoy+ZvNsT3KkXP4/6kG4AMEbpyPO3xPR9u8m7tb4nuAFo4nB8uMm7tVP3V2I5SicAaKKZWeOOY381eTc/uA8U3AC0QDqO6l9N3s0P7l1iOccPMQC0SLrP92oxfT9h8m5OcG8RyxmCG4AWWizqEybv5gT3urH8PnOjEQBa76GoNWL6nm7yHn1wrxDLbwQ3AG2yUtT7m/kFaxXeEdxLxnJB1FpeSwC00WeF9+iCOx3198uoTb2GAGizjSOHthTeI5cuwrKL1w8AHXJws75QLQ5Yi592PhnLj71uAOigdMDaqr393Y+ZvOcf3DvHcrzXDAAdtnDUASbv+Qd3uh/31VFLe80AUADpUqnrxPQ9y+Q9eHCvGMv5ghuAAlkzasJYv0glwzuCO+2aOCtqda8TAArmQOE9uPQZ91ZeHwAU0HtjyHyd8H711J0OxT/IawOAglokal/h/c/g3jaWH3hdAFBwYzrqvDJHm0dwvzGW66OW95oAoATe1Nvf/afaTt4R3IvH8ivBDUCJfHC0f7Equ83T1dM28ToAoEQ+EMPnqPaAlz6844mng9M+5DUAQMmskY3yzKhSh3cEd5q2j7P9ASipUe06L+0Ba/k5cgOZe3MDUF7pJiUr9fZ3z6z85J1/RvBzwQ1AyaUDrbcb6V8q627zL0TtbpsDUAHvG+lfKN1u85i6t4zlyqgFbW8AKuChrHGf72HfaaxUk3cEd7pD2GTBDUCFrBS19Uj+Qtl2m/80a9xODQCq5L2VDO+YuveLpdf2BaCCdhvJHy7FZ94R3GvHcmPUkrYvABX15t7+7tsrMXlHcI+LZYrgBsD0XZLwDkdEbW6bAlBx7xnuHyz0bvOYurtjuSZzdDkA1ZdOFVuut7/7qdJO3hHci8byC8ENQE2kTN5xuH+wqI6K2sC2BKBGdi5teMfU/fZYPmcbAlAz7yxleOe7y0/JKnCvcQAYoZUjBzcs4+R9TNR6th8ANbVDqcI7ftrYLJbP2G4A1NiE+f2BwpwqFsG9UCzXRW1iuwFQY1OjXt/b3z2zDJP3IYIbALKl55eHhQjvmLpXyxqnhgEA89l1XpTJ+7jMtcsB4BXbDvUfO/6Zd0zde8TyK9sJAP7h6ahle/u7ZxVu8o7gXjyfugGAf1omG+Iqo53ebX5Y1Kq2EQC8xjsKF94xda8ey7/aNgAwqK2LOHl/O2pR2wYABvX2ef2HjhywFlP3VrFcbbsAwJDSQWtPdnzyjuBOPzD8h+0BAPO1+WC/2Ynd5vtFbWZ7AMB8bdbx8I6pe7GscdcwAGD+tijC5J3uGLaybQEAw9I92G+27YC1mLrTCef3Ro23LQBg2Fbq7e9+uFOT9+GCGwBGbOO5f6Mt4R1T90pZY5c5ADAym3QkvMMXMxdkAYByTN751P1xvQeAUXlrJyZvUzcAjN46MQgv3LbwNnUDwJgtGLV+OyfvQ03dADBmG7YlvGPqXjaWT+k3AIzZm9o1eR8StYR+A0AJwju/hvmn9RoAmmLddkzeH4laVq8BoDnhHYNxV8vCO//in9dnAGiadKrYG1s5ee8etZY+A0Bzp+9Whvch+gsATfcvLQnvvp6BDWKZoL8A0HRrtGrydl43ALTGWk0P75i6l4rlQ3oLAOWZvFNwL6m3ANDayXuBJk3d6evcns114XQAoKmW6e3vfqZZk/cEwQ0ALbdq+p9mhfdB+gkALbdaU8K7r2dgmVj20E8AKEl4h/dHLaKfANByTdttfoBeAkBbrDTm8O7rGUj3F91MLwGgLVZoxuT9YX0EgJKEd0zdC8aynz4CQNssN9bJ+51Rb9BHACjJ5B169RAA2mp8X8/AwqMK7/iL6dSw9+ghALTd8qOdvHeKWlr/AKDtVhxteO+jdwBQksnbLnMA6KjlRjN522UOAJ2z7GjC2y5zAOicJUcU3unw9MwucwDopCVGOnlvk9llDgDlmbzDrnoGAB01XngDQLksNezw7usZWC+WtfUMADpqRJ9576JfANBxI/rM2y5zAChLePf1DKQjzN+hXwDQccsMd/LeMWoh/QKAzhtuePdoFQAUwiLDDe/t9QoACmGx+YZ3X8/AKrGsp1cAUAzDmbxN3QBQsvCeoE0AUBhLCm8AKJcFhwzvvp6BNWN5oz4BQHHMb/LeQYsAoFzhvZUWAUC5wntLLQKAkoR3X8/A62JZX4sAoDyT99u1BwCENwAwNtOFNwCUy7RBw7uvZyD9/hb6AwDFM6/JOx2oNl57AKA84d2tNQBQrvDeWGsAoJCeFt4AUC4vzSu8N9EbACik1x5t3tczkO4itozeAEAhDbrb3C5zACjT5C28AaB84e3zbgAorqmDhfeG+gIAhfX8q8K7r2dg4VjW0BcAKKzX7DZfLxv6TmMAQGc9PVh4AwDF9eTc4b2BngBAucLb5A0AxfaEyRsATN4AQFsm776egVViWUJPAKAk4R3W1A8AKLQZvf3dz84Z3mvoCQAU2pPpf4Q3AJTHQ8IbAIQ3ANBCD84d3g5YA4Bie/gf4d3XM7BgLKvrCQCUZ/JeOWohPQGAQnvVZ96r6AcAlCu836AfAFB4r9ptvpJ+AEChzczmPGBNeANA4d3f2989Y87wttscAIrt3ld+4YA1AChpeK+oJwBQrvBeWU8AoND+Ond4L6cnAFCS8O7rGVgy1nF6AgCFdu+ck/fr9QMACu2FLL9Ai/AGgHL4c29/92zhDQDlccec/0d4A0Dx3Sm8AaDk4f06PQGAQrtDeANAufx57vBeVE8AoLDu6+3vfn7u8F5GXwCgsG6a+zdSeC+mLwBQWDcLbwAol1sGC++l9QUACmvQ3eZL6AsAFNK0qLsGC29HmwNAMd3e2989c7DwXkpvAKCQBgb7zS59AYDC+uO8wnu83gBAIV07r/BeQG8AoHDSwWq3zyu8AYDiuaG3v3vGvMJ7nP4AQOEMzOs/pPBeXH8AoHCuHSq8AYDiuUp4A0B5/K23v/t+4Q0AFZi6hTcAFNOVwhsATN4AQIs8FXWb8AaA8ri0t797lvAGgPLon98fEN4AILwBgFG6r7e/+67hhPdzegUAhXDJcP5QCu+ZegUAhXDecMP7Bb0CgI6bHvXb4Yb3dP0CgI67ore/e1gfZZu8AaAYzh3uHzR5A0Ax/Hok4W3yBoDOunaoW4CavAGgeM4YyR9O4T1VzwCgXOH9tJ4BQMdcM5Jd5sIbADpv0kj/QgrvZ/QNADpiRtTpowlvkzcAdMbFvf3djwlvACiPSaP5S8IbADrj+WwEF2aZO7yf1D8AaLuzevu7R3WhtBTeD+kfALTd5NH+xRTef9c/AGirh6P6Rx3eMbKnK6xN00cAaJtfRv7OHMvknTygjwDQNpPH8pe75hjfAYDWuzOm7oFmhLfPvQGgPSaN9QsIbwBorynNCu979RIAWu4Pvf3d9zQrvO/WTwBouUnN+CKvhPc9+gkALZXuIHZas8N7lr4CQMtc2Nvf/UTTwju+2Eux3KevANAyk5v1hbrm+PWt+goALfFs1DmtCO879RYAWiLdQaxplyKfM7xv0VsAaInJzfxic4b3DXoLAE2Xbr19aavC+09RL+kxADTVmO4gNmR4xxdO55/ZdQ4AzTWx2V+wa67/f70eA0DT/CmG46Z/LD13eP9enwGgaSa14ovOHd7X6DMANM2UVnzRV4V3jPZ3xfKIXgPAmF0duXpvOybv5HL9BoAxm9SqLzxYeF+i3wAwJi9Hnd7O8L5MzwFgTNIdxJ5sW3jnn3u7vzcAjN6kVn7xrnn8/nn6DgCjMjXq3E6E9/l6DwCjcmZvf/eLnQjvK/KfHACAkZnU6n9g0PCOnxjSDUrO0X8AGJG/Z2045bpriP92um0AACMyJQbgWZ0M74szu84BYCQmt+MfmWd457vOz7AdAGBYbo/svLGj4Z07xbYAgGGZ2K5/aMjwjp8grorlL7YHAAxpdtaiO4iNZvJOTrJNAGBIV8bAe3+Rwvs/o6bZLgAwT5Pb+Y/NN7zzC6tPsl0AYFDTszYf4N01zD93nG0DAIO6IAbdpwoX3vGgbonlQtsHAF5jcrv/wa4R/Nlv2D4A8CrPZC2+g9iYwjum72uyxg1LAICGM/KLmhV28k6+ajsBwD9M7sQ/OqLwjp8urozlPNsKALIHon5X+PDOfSlrXEkGAOqsLXcQa0p450eeu+oaAHU3uVP/cNco/96Xo5623QCoqVtimL25VOEdD/jxzMFrAJi6SzV5Jz+Jut72A6BmZpc2vGP6nhnLQVEzbUcAauSKyMAHyjp5pwC/KZZv244A1MjkTj+AriZ8jXTZ1JttSwBqoO13EGtJeOeXhftQ1Mu2KQAVd27k3jNVmLxTgN+YNU4fA4Aqm1yEB9HVxK/13ajf2q4AVFS6vskFlQrvmL7TofP7Rz1i+wJQQR25g1irJ+8U4A+nJWqWbQxAxUwuygPpavYXjAC/LJav2MYAVMj9WYfuINaW8M4dG/Ur2xqAipiSfzxc3fCe4/Pv22xvACpgUpEeTKsm7xTgz8Wye9STtjkAJXZTZFqhhtGuVn7xeLJ3x/LezAVcACivyUV7QF2t/gciwNMH/AfZ9gCUUPoYeErtwjsP8FNj+brXAAAlc3lk2IO1DO88wI+M5WdeBwCUyMQiPqiuNv97n4g6x2sBgBJ4Meqs2od3TN8zs8YV2P7gNQFAwRXiDmJFmLxTgL8Qy25Rd3hdAFBgk4v6wLo68Y9GgD8Ry45Rd3ttAFBAT0VdKLxfG+APxPLOqAe9RgAomNMjp6YL78EDPE3ePVGPe50AUCCTivzgujr9ACLA02ffE6Kmeq0AUAD3RV0tvOcf4LfEspMAB6AAJhfpDmKFDe88wK8V4AAUwC+K/gC7ivRgBDgAHTYQWXSn8B5dgO8aNc1rCIA2m1SGB9lVxAcVAX6lAAegzWZE9QnvsQX4pQIcgDa6OLLnUeHdnABPV2LzGTgArTapLA+0q+gPMAI8nWvnIDYAWunZqLOFd3MD3FHoALTSmZE1pfmYtqssD1SAA9BCE8v0YLvK9GAFOAAtkG6Qdbnwbn2Ab5O5mQkAzZEuhzpLeLc+wG/KGjczEeAAjNUvyvaAu8ra6fxmJgIcgLG4KfLkNuEtwAEoj4llfNBdZe96HuBbZY0DDgBguNLn3FOEd+cC/C+xbCfAARiBiyI/HhLenQ3wuwQ4ACNwclkfeFeVtoIAB2CYnow6V3gXK8C3jLrbaxOAeZgSefGS8C5WgP8tn8AFOACD+XmZH/wCVd4yfT0Dq2aNS96t7XUKQO6WGPI2KvMT6Kry1omN84AJHIC5nFz2J9BV9S2UB3g6D/xWr1eA2ns5arLwLkeAP5o1rsQmwAHq7ezIhMeEd3kC/DEBDlB7J1ThSXTVaYsJcIBaS8c/XSq8yxvg74i6zusYoFZOigyYLbzLG+BPx7KTAAeojRlRp1blyXTVdStGgD8jwAFq45x4339YeAtwAMrjhCo9ma66b808wLePusxrG6CS0oFq/cK7egH+Qiy7CnCASvpRvM/PEt4CHIBySO/tJ1ftSQlvAQ5QZRPzj0eFdw0CfOesxDdpB+Afjq/ikxLegwf49Fj2EuAApXZ5vJ9X8oqawluAA1TVcVV9YsJbgANU0f1R5wjvegf4e6Om6AZAafww3r9nCO96B/jMWPYX4AClkI4uP7HKT1B4C3CAqvlpvGc/K7wR4ADl8HLUD6r+JIX36AL8g+knO90AKJx0UZaHhDeDBXi6mfvBAhygcL5XhycpvAU4QFWcH+/NtwtvhhvgP9ENgI77Zl2e6AK2dXP09QwcG8sXdQKgIy6KgWrnujxZk3fzpvDDYvm2TgB0xJF1erLCW4ADlF1/vP9eI7wZa4AfqxMAbXN03Z6wz7xbpK9nIIX4MToB0FJXxNC0Xd2etMm7dRN4mr4P1wmAljqyjk9aeAtwgLK6LN5nLxfeCHCA8qjt6bnCu30BfrBOADTNmfHeer3wptUB/hMBDtAU6QZRX65zA4S3AAcom5/F++mdwptOBPhs3QAYsalRX6t7E4R35wJ8v6hZugEwIt+K99BHhTedCvDJsewvwAGG7d6oH2iD8BbgAOXx+XjffFEbXB61EPp6BvaN5dSoBXUDYFC1uuWnybs8E/j7ol7WDYDXSO+Nh2qD8C5igJ8Ty14CHOA1vh/vkXdog/AW4ADlcF/UUdogvMsS4C/pBkB2cLwvPq8NwrssAf7uqGm6AdTYafF+eIE2CO8yBfilsewqwIGaejpzkJrwFuAApfLZeA98WBsG5zzvEujrGZgQS9qVvoRuADVwQQT3Ltpg8q7CBL5D1rggP0CVPRP1MW0Q3lUJ8Gtj2UmAAxV3aLzfPagNQ7PbvGT6ega2iOXiqKV1A6iYcyK4d9cGk3eVJ/CndQOokHRw2ke1QXhXPcC3iXpcN4CKOCDe2x7TBuFd9QC/JZYJAhyogB/Fe9qF2iC8BThAOaT3sS9og/CuY4BvF+XoTKBs0jXL94n3sRe1QnjXMcBvE+BACX3SrT6Fd90D/C4BDpTIqfG+NVEbhLcAbwT41lF36wZQYOnjvoO1YfRcpKWC+noGVo3l8qi1dQMomHSNiu4YNgwZJm/mmsAfyBq70H1zAEWzv+AW3gwd4FtG3aobQEEcFe9N52qD8GboAE9XK5ogwIECSLc1PkIbmsNn3jXQ1zOwfNa4mcnGugF0QBogtoyB4jmtEN6MLMDH5wG+uW4AbfRE1GYR3H/Viuax27wm4hsn3eA+3Y3sOt0A2uTlqD0Ft/Bm7AG+Y9RlugG0wYHxvnOFNghvxh7gU2PZNWvsQgdola+7gprwprkB/kIsu0U5ZQNohRTaX9eG1nHAWo319QyMi+WUqA/oBtAkv43aNYaE6VohvGldgC8Yy8+iPqwbwBj9d9R2EdzPakVr2W1ec/FNNjOWA6J+rBvAGKRLnu4suE3etH8KPzqWL+kEMEIPRb3DNcuFN50L8P8fy7d1Ahimx6MmRHDfohXCm84G+Mezxm50H6sAQ0mnnvZEcF+vFcKbYgR4byynRo3TDWAQ06LeGcF9pVYIb4oV4OliLqdHLaYbwFzBnU4Hu1QrhDfFDPBtssbFXJbWDUBwC2/KE+AbxXJR1Bt0AwS34O48ByQxX/GNenMsW2eN8ziB+gb3+wS3yZvyTeDL5xP4JroBJm5M3pRjAn8slu2jfANDfaTTwXYQ3MKbcgd4uif4u6L+Szeg8p6M2im+7/+gFcKb8gd4ulvQ/436gW5AZT0YtW18v1+rFcXjM2/GpK9n4NBYvu+1BJVyV9a4ctp9WiG8qW6A7xXLxKhFdQNKL93Wc+f8GBeENxUP8HQq2TlRr9cNKK2Lo/aO4J6qFcXmM2+aIr7Zr45lq6i/6gaU0ilRuwlu4U39AvzOWLaMcmQqlMs3og7ID0alBOw2p+n6egbSZ98npzzXDSi0l6M+FqF9ilaYvDGBvxjLvlFH6AYU1hNZ44hywW3yhtdM4el88PTm4Eh0KI47ssblTt2vQHjDPAN886xxJPqKugEd95uo9+dXS6Sk7Dan5eJN4rpYUoD/t25ARx2TT9yC2+QNw57AF4vlxKgP6ga01QtRH4nQPl0rhDeMNsQ/H8t3Mnt+oB3SpU73jOC+WSuEN4w1wHeIJU0BrsgGrXNW1jh/227yijH50BHxZnJJLJtG3aQb0HQzoj4btZfgNnlDKybwxWM5IfM5ODTLA1H7uAe38IZ2hPhBsRwXtYhuwKidGXVQBPdTWiG8oV0BvnEsZ0StoxswItOiDo3QPlErhDd0IsCXiuXnUXvqBgxLOm6kN4L7T1ohvKHTIX5ILN+LWlg3YFCzoo6N+kYE90vaIbyhKAHeHcuUqHV1A17lL1H7R2hfoxX15FQxCivemAZieVvUz3QD/tfsrHFg58aC2+QNZZjC98hDfFndoKbujPpohPZVWoHJm7JM4WfHslHUxbpBzaQLrhydT9uCG5M3pZzA02v2/2WNA3WcE07VpY+ODnRdcoQ3VQnxN8VyctQWukEFPR11eNSJEdyztAPhTZUCfMF8Cv9m1GI6QkWcEvXFCO1HtQLhTZVDPJ1KdlLUtrpBiaWLrRzic22GwwFrlF682aVzXrdPb3xRz+oIJZMm7I9FvU1wY/KmrlP46rH8JOrdukHBTY/6j6ijI7SnagfCGyHeM7Bn/sa4qm5QMOlCK31RX43Qvkc7EN7w6gBPNzk5Imsc1LaQjlAAF0UdHqF9g1YgvGHoEN8gn8J30g065NqoL0VoX6oVCG8YWYinS6ymO5WtpRu0MbSPjND+jVYgvGH0AZ5uMfqpqK9GvU5HaJEbs8Zn2udpBcIbmhfir4/lK1EHZy6zSvOkU73SpXsviOCerR0Ib2hNiKdTy46M2j9qQR1hlNKEfWwE9tVagfCG9oV4OqgtHZm+j+8Lhimdp51O+fpuhPat2oHwhs6FeLrhydeEOENIV0T7cdRPI7Qf0Q6ENxQrxA+L+kBmdzoN6facx6eXR4T2dO1AeENxQzx9Jv6FqI9m7lxWR89ljV3jJ0Rg/1E7EN5QrhBfNmvcPCKdZraKjlReCup0v/iJEdpudoPwhpKH+LhY9s4adzDbUkcq5eGoSVGnOgAN4Q3VDfK3xvKJqA9GLakjpfR81Llpwo66KEJ7ppYgvKEeIb5UPo1/OOodOlJ4L0ZdEDUla1xMZZqWILyh3kG+biz7Re2buYZ6kUzNA/vsqPMjsJ/TEoQ3MFiQbxbL+7PGOePuK95+f8sau8RTYF8egf2yliC8geGGePo+2zRq97w21JWWSLvDr8ga98xOn1/friUIb6BZYb5mLO+J2jFqu6gldGVU0iR9XdSVUZel1efXCG+gHUGeTj17ex7kO0SlXe3jdGZQz+ZhfU3U5VG/j7B+QVsQ3kCnw3zRrLGLfeuorbLGueQr1LAVL0XdljUulnJtHth/irCe5VUCwhvKEOirxbLxHLVJ1JoVeXopjO+LuiMqXRjlxqibou6MoJ5h64PwhioF+uKxpNPS/iVq/fzX60Sla7GvFNVVsCn63jyk78t/fWfUn1NFSL9ki4LwhroH+0J5gKcgT1N7ui77cllj9/uyeS2dNW60ktYl8l8PdeBcuvLYK+dGP5/XM1nj/Oln8no86rGoh7LGbTPT5UYfdttMaL7/EWAAYQ41pn1BUPoAAAAASUVORK5CYII=) no-repeat;
    -webkit-background-size: 236px 264px;
    -moz-background-size: 236px 264px;
    background-size: 236px 264px;
    margin-left: -120px;
    margin-top: -137px
  }

  @media (min-width: 550px) {
    .card.social .card-blob {
      width: 495px;
      height: 555px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe8AAAIrCAYAAADGGBHyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI0MkRENzhFNEYzMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVGRjE5MThFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQjQyREQ3NkU0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQjQyREQ3N0U0RjMxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph5YALwAACZVSURBVHja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) no-repeat;
      -webkit-background-size: 495px 555px;
      -moz-background-size: 495px 555px;
      background-size: 495px 555px;
      margin-left: -248px;
      margin-top: -278px
    }
  }

  .card.social .card-hover-share {
    width: 48px;
    height: 47px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACNCAYAAACOqymYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzVBMzlDOTVFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzVBMzlDOTRFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTdCOTkyNEUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QTdCOTkyNUUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhTQzHgAAAQOSURBVHja7N2vcxRnGMDxpcMEFVcVBaqqVedOoYoCFUUUNY3CJMUURIkhwcQ0KBQoXP+BqKspKihUolBBRR0mvE/y3pApyd1usnuT3f18Z57JXGZvd/bNN+/z/ty9cXx8XACX4QdFAPKAPCAPyAOQB+QBeUAekAcgD8gD8oA8AHlAHpAH5AF5APKAPCAPyAOQB+QBeUAekAcgD8gD8oA8AHlAHpAH5AF5APKAPCAPOsrNtt/A+vDlvC95K8W4rpNtjdbUPD1irAjIgytyo43vnkipajH9WEkxSLFwxdO9T/EuxaeSx/+Y4n6KYQ3XPsrXf5vS15g88xHneYrHNZ72dYqNFPslxPkrxWrNt7Wd4knbBGpj2lquWZzgUY5ZPGxAnCLfz0NtnuYZNnTe2ykWZxwzaPC+BuRpnoWGzrsyQ57Fhu9rkTzt5U1uwE5r3H5RTOS5qNd1NOOYkWL6xk1FcFLjHKR4VeLYtynu5PbRCnm6x05RbsxmkoL+S7Fb8tzRlX6a4m6KD+e0v56Tp918yAI1ye45wt0iDy5DDB6uS1u4jDh/FvUPXOptEUfNg+9ZyuKs9rUA1DzEIc8cuVNRnBhHepDiN/IQp6o4MbD4T+7Ka/P0lJ9S/FGUW7oxESfWCe12tUDI05w4Md1xdi5sTJ7+Mchd8ZUK4sTKwPf/+720RZypRJraOUecTtY8GswXM6xRnGA/10oXcUCebhCz5r9XTFWbU8QpcsP585Tvv5O2uiHOo4o1TojzscSxmzl9LZ05f3z/9dZobY887eZecbqLoYo4ZbbsTIh1Rk9S/FKcjv/EysW9JM5RGwuLPN+IjXzLFcTZyeJ8usS19nK0eq86eU5ZzvLMQxxd9Q4RwvxaUZxnKQ77XnB9l+d+RXG2c41z6H+u3/LEiO+DCuJET2mLOOQJbhfl56o2cq1DHPKcUHZ772aW56rTC5Mnit3LEWM9R+vDlzGw+KaN3fU+jzAfFNOnCyY1zrOinnmpca7pYhzpce7hxee/U7zIj44hT0uIFPTvDHE2ivomNGMh2d0L2lirRQt3oPa9txUjxLHrc3Dmjxe1UaSSV0W9M+HDGYIMyNMuxrkhHIu9JhOTseN0v4FrzUpLC+RpJx+LchOb0OYBeUAekAfkAcgD8uC60sVxnp+L0/3k8czB6zTwtkSe68+qOkHaAnlAHqAD8nT1/Q9fyNM8XX3/w4g8zROPaNvumDhxP6170EFb3zEazz+ONcB1vGO0aaa9SjtS1ck7TrdGa4fkgQYzQB6QB+QBeQDygDwgD8gD8gDkAXlAHpAH5FEEIA/IA/KAPAB5QB6QB+QBeQDygDwgD8gDkAfkAXlAHpAHIA/IA/KAPAB5QB6QB+QBeQDyYF58FWAARZ69405mp+sAAAAASUVORK5CYII=) no-repeat;
    -webkit-background-size: 48px 47px;
    -moz-background-size: 48px 47px;
    background-size: 48px 47px
  }

  .card.social .card-hover-top {
    width: 81px;
    height: 33px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAABBCAYAAAC5FcQ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzVBMzlDOTlFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzVBMzlDOThFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTlGODgzQTgxRTgxMUU1QjI1OUVBQzFBMzVEMTZBRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTlGODgzQjgxRTgxMUU1QjI1OUVBQzFBMzVEMTZBRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp1gkiAAAASlSURBVHja7J3Nbw1hFMaPN40VYWFlYcNCwoaFr9aCNCzZEE2sGvEHCIrETigW/QNEbDVtIppYWIgNVRZCVChaqYqmva2WElSIc9zn+qr23ts78868M88veSqaduZ8PJ3OzPvRBYe3nD8qImdVU0KIXxarWur0w0XVaXyCEJ98M/85/TCuamI9SAI0nb99eNzhPx2qO6wJ8cgd+E7cH5/cz7oQj/zy258mHFAdY22IB47BbzNMKHhKvssakRi5C5/JbCY0dqmmWSsSA9Pwl5Qz4YhqH+tFYmAf/FXWhMYVVStrRiKkFb6SSk1oHFddY+1IBFyDn6RaE5buD3tZQ1IDvf+7D6zGhDassk01zFqSeTAM/3yrxYTGmKpBNcmakiqYhG/Gyn2hq/CAAzjgB9aWVMAH+GWgki92VRz4sWqLaoI1JnMwAZ88rvQbXJUneKSq5z0imeMesB4+kbhMaDxRbcK/hNTsCzfPE77CCW+x9gQ+2ARfiC8TGu9VW1Xt7EGuaYcP3s/3AC6CIGw8sI29yCVtEsE8AxdRMIdULexJrmhB3yUtJjTOqQ6wN7ngAPotaTOhYSv3drNHmWY3+ixpNaFxFTeqn9ivTPEJfb0a9YFdTAHbI/tm4ehKVphAP2N5JediDPwhAufoStgMo48P4zqBizmBPiTwkr0MkpfoX1+cJ3EeEhlEIv3saVD0o2+DcZ/IeUrIFrfYzIqn7G0QPEW/RnyczHlMbJRGDMqAo75O6DwnOEEjBmFAr281XAKJloz4jD1PFc8koUnLLqGELdEGPqyk6iGkQRJ6r+sSTLyAn7xX9ECiDKIPhaQCcAkXwG5+6309hZEZjOAKOJpkEC4FhXiNQryjJ7zyDnV/nXQgLiUFeSHFwfHP9IYXPqPeL9IQjEtRYWyFViP94YVGqXJFXF5MaNyWMvuWkJrZhToLTTg7XapmeiUWmlFfoQnLc0m4ZiVqWlBXoQkrx9YwcBVfNLRJhGtC8mRCw1ZzddBDNdEhEa2Ky6sJjb2qbnppXnSjfkIT1s4O4ThztfSjbkITRsNHKb5cLdBbFVFAvT7ShNEyjMJyx9i5mUSdgllg5gIrsC244Y6xs1PaIbUvpKBdgIUu7Rg7Ts/9xbhUuUMqTVgbNu5pK8GG6L2fDKEej0IM3gVc+Oeqjar7OTfgfdTheagJuMAbYDfftkNoV04N2IX8g97lwmWgEV+lODPkTM4MeAZ5fw09EZehppxQ7VFNZdx8U8jzRFYSchlrUKdqnepmRg14E/l1Zikpl8FG2XDVdpnjr0oGynHklbnhyyyasEQrrho3As/jBvLI7N+fzrIJjQdSXE/RFOAVpB9xNyIPoQnD5rJqDX6lpX0SRAFxrkHcmScvJjS+4FfaatVJSd9oyxDiWo04v+SlMXkyYYm3qlOqVaqDqp6E4+lBHKsQ19u8NaRO8su06gJkow727s1e/q70dL9nu+B3pOCHgCZMCT3QERhypxSnRG1QLYrg+DbF6p4Ud7+/jnN9Z9lpwv9hxuiW32talqjWqtarVuAquVy1TLVUtfCfK6tNKB1TvcHVznYcswkGvcK9dmblhwADAP2Z60iHMatYAAAAAElFTkSuQmCC) no-repeat;
    -webkit-background-size: 81px 33px;
    -moz-background-size: 81px 33px;
    background-size: 81px 33px
  }

  .card.social .card-avatar-bg {
    background-color: #723988
  }

  .card.social .card-hover-bg {
    background-color: #a64ac9
  }

  .card.social .card-type {
    color: #a64ac9
  }

  .card.art .card-blob {
    width: 233px;
    height: 229px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAHhCAYAAAChqv35AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDVGRjE5MUJFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVGRjE5MUNFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NUZGMTkxOUU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NUZGMTkxQUU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZBhm0AACNjSURBVHja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) no-repeat;
    -webkit-background-size: 233px 229px;
    -moz-background-size: 233px 229px;
    background-size: 233px 229px;
    margin-left: -118px;
    margin-top: -118px
  }

  @media (min-width: 550px) {
    .card.art .card-blob {
      width: 490px;
      height: 481px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAHhCAYAAAChqv35AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDVGRjE5MUJFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVGRjE5MUNFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NUZGMTkxOUU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NUZGMTkxQUU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZBhm0AACNjSURBVHja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) no-repeat;
      -webkit-background-size: 490px 481px;
      -moz-background-size: 490px 481px;
      background-size: 490px 481px;
      margin-left: -244px;
      margin-top: -242px
    }
  }

  .card.art .card-hover-share {
    width: 48px;
    height: 47px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACNCAYAAACOqymYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUY0QTE2QjZFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUY0QTE2QjVFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTdCOTkyNEUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QTdCOTkyNUUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgunu78AAAQQSURBVHja7N2vcxRnGMDxpcMEFYeKAhXVGs5FoYoCFUUUNY1CtSAAUSLSVMUQFAoUjn8gipoSE9SpRKFSFXWY8D7Je0OmTe52k92b7O7nO/NM5jJ7u7Nvvnmf9+futaOjowK4CD8oApAH5AF5QB6APCAPyAPygDwAeUAekAfkAcgD8oA8IA/IA5AH5AF5QB6APCAPyAPygDwAeUAekAfkAcgD8oA8IA/IA5AH5AF50FGut/0G7iw+nfUlb6QY1XWyneG6mqdHjBQBeXBJrrXx3RMpVc2nHyspBinmLnm6Tynep/hS8vibKe6nWKrh2of5+u9S+hqRZzbivEzxuMbTvkmxlmKvhDh/pFit+bY2Uzxpm0BtTFvLNYsTPMoxjYcNiFPk+3mozdM8Sw2d91aK+SnHDBq8rwF5mmeuofOuTJFnvuH7midPe3mbG7CTGrdfFRN5zut1HU455qNi+s51RXBc4+yneF3i2Hcpbuf20Qp5usdWUW7MZpyC/kmxXfLc0ZV+nuJuis9ntL9ekqfdfM4CNcn2GcLdIA8uQgwe/iZt4SLiPCvqH7jU2yKOmgf/ZyGLs9rXAlDzEIc8M+R2RXFiHOlBil/IQ5yq4sTA4ofcldfm6SmLKX4vyi3dGIsT64S2u1og5GlOnJjuOD0XNiJP/xjkrvhKBXFiZeCn//xe2iLORCJNbZ0hTidrHg3m81mqUZxgL9dK57FPnm4Qs+a/VkxVGxPEKXLD+d8J338vbXVDnEcVa5wQZ1ji2I2cvhZOnT++/2ZnuL5LnnZzrzjZxVBFnDJbdsbEOqMnKX4qTsZ/YuXibhLnsI2FRZ7vxEa+5QribGVxvlzgWrs5Wr1XnTwnLGd5ZiGOrnqHCGF+rijOixQHfS+4vstzv6I4m7nGOfA/1295YsT3QQVxoqf0F3HIE9wqys9VreVahzjkOabs9t6NLM9lpxfGTxS7lyPGeg7vLD6NgcW3beyu93mEeb+YPF0wrnFeFPXMS41yTRfjSI9zDy8+v0rxZ350DHlaQqSgv6eIs1bUN6EZC8nuntPGWi1auAO1772tGCGOXZ+DU3+8qI0ilbwu6p0JX5oiyIA87WKUG8Kx2Gs8MRk7TvcauNa0tDRHnnYyLMpNbEKbB+QBeUAekAcgD8iDq0oXx3l+LE72k8czB6/SwNsCea4+q+oEaQvkAXmADsjT1fc/fCVP83T1/Q8fydM88Yi2zY6JE/fTugcdtPUdo/H841gDXMc7Rptm0qu0I1Udv+N0Z7h+QB5oMAPkAXlAHpAHIA/IA/KAPCAPQB6QB+QBeUAeRQDygDwgD8gDkAfkAXlAHpAHIA/IA/KAPAB5QB6QB+QBeQDygDwgD8gDkAfkAXlAHpAHIA9mxTcBBgBpGr635icskgAAAABJRU5ErkJggg==) no-repeat;
    -webkit-background-size: 48px 47px;
    -moz-background-size: 48px 47px;
    background-size: 48px 47px
  }

  .card.art .card-hover-top {
    width: 81px;
    height: 33px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAABBCAYAAAC5FcQ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkIxMUQzQjRFMTFDMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkIxMUQzQjNFMTFDMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFM0E5QUM3OEUxMEQxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFM0E5QUM3OUUxMEQxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt3uGrkAAASnSURBVHja7J3Nbw1hFMaPl1gREhKJhQ0RCRsWvloL0rBkQzSxEvEHSLhI7CTKpn+AiC2pRDSxsBAbqiSEqFC0UhVNe1stJagQ57jP9dn23ts78868M88veWilZs7H0+nMvB+dtW5l4YiInFaNCyF+ma8qzFITLtIPBlWzWRPimW+qJU7/GFE1sx4kAZrvdbeMOHzSprrNmhCP3IbvxP3xj/tYF+KRX37704S9qqOsDfHAUfjtPxMKnpLvsEYkRu7AZzKVCY2dqgnWisTABPwllUxor2v2sl4kBvbCXxVNaFxWtbBmJEJa4Cup1oTGMdVV1o5EwFX4SWo1Yfn+sIs1JHXQNdl9YC0mtGGVraoB1pLMgAH451s9JjSGVY2qMdaU1MAYfDNc6QtdlQfsxQE/sLakCj7AL73VfLGr4cCPVZtVo6wxmYZR+ORxtf/B1XiCR6oG3iOSae4BG+ATicuExhPVRvxNSN2+cDM84Suc8CZrT+CDjfCF+DKh8V61RXWRPcg1F+GD9zM9gIsgCBsPbGUvckmrRDDPwEUUzCFVgT3JFQX0XdJiQuOM6gB7kwsOoN+SNhMa51S72KNMswt9lrSa0LiCG9VP7Fem+IS+Xon6wC6mgO2RfZNwdCUrjKKfsbySczEG/hCBc3QlbAbQx4dxncDFnEA3EnjJXgbJS/SvO86TOA+J9CGRHvY0KHrQt764T+Q8JWSLW2xmxVP2Ngieol+DPk7mPCY2RCMGZcAhXyd0nhMcpRGDMKDXtxougUTLRnzGnqeKZ5LQpGWXUMKWaCMfVlL1ENIoCb3XdQkmXsR33it6IFH60IdiUgG4hAtgN78Nvp7CyH8M4go4lGQQLgWFeI1CvKMnvPIOdX+ddCAuJQV5IaXB8c/0hhc+o94v0hCMS1FhbIVWE/3hhSapcUVcXkxo3JIK+5aQutmJOgtNODXtqv30SizsR32FJqzMeeGalagpoK5CE1aPrWHgKr5oaJUI14TkyYSGreZqo4fqok0iWhWXVxMae1Qd9NKM6ED9hCasn+3CceZa6UHdhCaMho9SerlapLeqooh6faQJo2UAheWOsdMzhjoFs8DMBVZgW3DDHWOnprxDandIQbsAC13eMXaEnvuLEalxh1SasD5s3NNWgvXTez/pRz0ehRi8C7jwz1UbVPdzbsD7qMPzUBNwgTfAbr5th9D2nBqwHfkHvcuFy0AjvkppZsipnBnwFPL+GnoiLkNNOa7arRrPuPnGkefxrCTkMtagS6q1qhsZNeAN5HcpS0m5DDbKhqu2yTS/VTJQjiGvzA1fZtGEZVpw1bgeeB7XkUdmf/90lk1oPJDSeormAK8gPYi7CXkITRg2F1Sr8SMt7ZMgiohzNeLOPHkxofEFP9JWqU5I+kZb+hHXKsT5JS+NyZMJy7xVnVStUB1UdSYcTyfiWIG43uatIXMkv0yozkI26mDv3uzl73JP93u2C35bCr4JaMKU0AkdhiF3SGlK1HrVvAiOb1Os7kpp9/trONd3lp0mnAwzRof8XtOyQLVGtU61DFfJparFqoWquf9cWW1C6bDqDa52tuOYTTDoEu61MyU/BBgAaCbrXd11MEYAAAAASUVORK5CYII=) no-repeat;
    -webkit-background-size: 81px 33px;
    -moz-background-size: 81px 33px;
    background-size: 81px 33px
  }

  .card.art .card-avatar-bg {
    background-color: #322677
  }

  .card.art .card-hover-bg {
    background-color: #443694
  }

  .card.art .card-type {
    color: #443694
  }

  .card.fashion .card-blob {
    width: 249px;
    height: 247px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgoAAAIHCAYAAAD+X3SLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjIxQTMyNUVFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjIxQTMyNUZFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NUZGMTkyMUU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NUZGMTkyMkU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvcnbo4AACk/SURBVHja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) no-repeat;
    -webkit-background-size: 249px 247px;
    -moz-background-size: 249px 247px;
    background-size: 249px 247px;
    margin-left: -128px;
    margin-top: -128px
  }

  @media (min-width: 550px) {
    .card.fashion .card-blob {
      width: 522px;
      height: 519px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgoAAAIHCAYAAAD+X3SLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjIxQTMyNUVFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjIxQTMyNUZFNTIxMTFFNThFMTVGNzEwMTY4MkMzRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NUZGMTkyMUU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NUZGMTkyMkU1MjExMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvcnbo4AACk/SURBVHja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) no-repeat;
      -webkit-background-size: 522px 519px;
      -moz-background-size: 522px 519px;
      background-size: 522px 519px;
      margin-left: -260px;
      margin-top: -260px
    }
  }

  .card.fashion .card-hover-share {
    width: 48px;
    height: 47px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACNCAYAAACOqymYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjU5REI5ODVFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjU5REI5ODRFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTdCOTkyNEUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QTdCOTkyNUUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpZK+mkAAAQRSURBVHja7N0vbBVZFIDxgWyKaoJAVYFatajnqlCQNAVVRRWYraoCDItYauiqmi0KBQq3BF3FGlBFoVqFKkmTqocp97T3hWZp35spM93OzO9LTpo282Yyt9+75/6dubC/v18Ap+ECeUAekAfkAXkA8oA8IA/IA/IoBZAH5AF5QB6APCAPyAPygDwAeUAekAfkAcgD8oA8IA/IA5AH5AF5QB6APCAPyAPygDwAeUAekAfkOZ9cfvP2rC95KcWwrpPtzs+1tuwv+v5UZqgIyIM+pq2UqqbTj8UUgxRTP3m6Dylep/hc8vgrKW6nmK3h2nv5+q9S+hqS52zEeZpiucbTvkixkmKrhDh/pliq+bbWUjxqm0BtTFsLNYsT3MsxibsNiFPk+7mrzdM8sw2d92qK6QnHDBq8rwF5mmeqofMuTpBnuuH7miZPe3mZG7DjGrdfFRN5Tup17U045p1i+s4viuCgxtlO8bzEsa9SXMvto0XydI/1otyYzSgFvU+xUfLc0ZX+I8WNFB+PaX89JU+7+ZgFapKNY4S7RB6chhg8fCBt4TTiPC7qH7jU2yKOmgc/MpPFWeprAah5iEOeM+RaRXFiHOlOivvkIU5VcWJg8Z/cldfm6Sm/pnhYlFu6MRIn1gltdLVAyNOcODHdcXQubEie/jHIXfHFCuLEysAP//m7tEWcsUSaWj9GnE7WPBrMJzNbozjBVq6VTmKbPN0gZs1/r5iqVseIU+SG85cxn38tbXVDnHsVa5wQ51OJY1dz+po5cv74/Ivd+blN8rSbW8XhLoYq4pTZsjMi1hk9SnG9OBz/iZWLm0mcvTYWFnm+Exv5FiqIs57F+XyKa23maPVedfIcspDlOQtxdNU7RAhzs6I4T1Ls9L3g+i7P7YrirOUaZ8d3rt/yxIjvnQriRE/pL+KQJ7halJ+rWsm1DnHIc0DZ7b2rWZ6fnV4YPVHsVo4Y69m7/OZtDCy+bGN3vc8jzNvF+OmCUY3zpKhnXmqYa7oYR1rOPbz4/e8Uz/KjY8jTEiIF/TtBnJWivgnNWEh244Q21lLRwh2ofe9txQhx7PocHPnnRW0UqeR5Ue9M+OwEQQbkaRfD3BCOxV6jicnYcbrVwLUmpaUp8rSTT0W5iU1o84A8IA/IA/IA5AF5cF7p4jjPb8XhfvJ45uB5GnibIc/5Z0mdIG2BPCAP0AF5uvr+h6/kaZ6uvv/hHXmaJx7RttYxceJ+Wvegg7a+YzSefxxrgOt4x2jTjHuVdqSqg3ec7s7P7ZAHvYE8IA/IA/KAPAB5QB6QB+QBecgD8oA8IA/IA5AH5AF5QB6QByAPyAPygDwAeUAekAfkAXkA8oA8IA/IA5AH5AF5QB6QByAPyAPygDwAeUAe/O98E2AAVZS4KFjhXw4AAAAASUVORK5CYII=) no-repeat;
    -webkit-background-size: 48px 47px;
    -moz-background-size: 48px 47px;
    background-size: 48px 47px
  }

  .card.fashion .card-hover-top {
    width: 81px;
    height: 33px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAABBCAYAAAC5FcQ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUY5NjQ2RThFMTA3MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUY5NjQ2RTdFMTA3MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTlGODgzQTgxRTgxMUU1QjI1OUVBQzFBMzVEMTZBRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTlGODgzQjgxRTgxMUU1QjI1OUVBQzFBMzVEMTZBRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjd7eaEAAASoSURBVHja7J3Nbw1hFMaPl1gREhKJhQ2LJmxY+GotSMNChA3RxErEHyChSOwkyqZ/gIgtqUQ0urAQG6oshKhQtFIVTXtbLSWoEOe4z/Xd3nt7Z96Zd+b5JQ+t1Mz5eDqdmfejsxa0Xz0iIqdVE0KIX+armmepCRfpB0Oq2awJ8cxX1RKnf4yqmlgPkgBN4zu2jzp80qa6zZoQj9yG78T99o/7WBfikZ9++92EfaqjrA3xwFH47R8TCp6S77BGJEbuwGcylQmNnapJ1orEwCT8JeVMaK9r9rJeJAb2wl9lTWhcVrWwZiRCWuArqdSExjFVB2tHIqADfpJqTVi6P+xmDUkNdP/vPrAaE9qwymbVIGtJZsAg/PO1FhMaI6oG1ThrSqpgHL4ZKfeFrsID9uGA71lbUgHv4Ze+Sr7YVXHgR6qNqjHWmEzDGHzyqNL/4Ko8wUNVPe8RyTT3gPXwicRlQuOxaj3+JqRmX7gZnvAlTniTtSfwwXr4QnyZ0Hin2qS6yB7kmovwwbuZHsBFEISNB7ayF7mkVSKYZ+AiCuaQqpk9yRXN6LukxYTGGdUB9iYXHEC/JW0mNM6pdrFHmWYX+ixpNaFxBTeqH9mvTPERfb0S9YFdTAHbI/sG4ehKVhhDP2N5JediDPwBAufoStgMoo8P4jqBizmBHiTwgr0MkhfoX0+cJ3EeEulHIr3saVD0om/9cZ/IeUrIFrfYzIon7G0QPEG/hnyczHlMbJhGDMqAw75O6DwnOEYjBmFAr281XAKJloz4lD1PFU8loUnLLqGELdEGPqyk6iGkQRJ6r+sSTLyA77yX9ECi9KMPhaQCcAkXwG5+6309hZF/GMIVcDjJIFwKCvEKhXhLT3jlLer+KulAXEoK8lyKg+Of6A0vfEK9n6chGJeiwtgKrUb6wwuNUuWKuLyY0LglZfYtITWzE3UWmnBq2lX76ZVY2I/6Ck1YnvPCNStR04y6Ck1YObaGgav4oqFVIlwTkicTGraaq40eqok2iWhVXF5NaOxRddJLM6IT9ROasHa2CseZq6UXdROaMBo+SPHlaoHeqogC6vWBJoyWQRSWO8ZOzzjqFMwCMxdYgW3BDXeMnZrSDqk9IQXtAix0acfYUXruD0alyh1SacLasHFPWwk2QO/9YAD1eBhi8C7gwj9TrVPdy7kB76EOz0JNwAXeALv5th1C23NqwHbkH/QuFy4DjfgixZkhp3JmwFPI+0voibgMNeW4ardqIuPmm0Cex7OSkMtYgy6pVqtuZNSAN5DfpSwl5TLYKBuu2iLT/FbJQDmGvDI3fJlFE5ZowVXjeuB5XEcemf3901k2oXFfiuspmgK8gvQi7kbkITRh2FxQrcSPtLRPgiggzpWIO/PkxYTGZ/xIq1OdkPSNtgwgrjrE+TkvjcmTCUu8UZ1UrVAdVHUlHE8X4liBuN7krSFzJL9Mqs5CNupg797s5e9yT/d7tgt+Wwq+CWjClNAFHYYht0lxStRa1bwIjm9TrO5Kcff7azjXN5adJvwfZoxO+bWmZYFqlWqNahmukktVi1ULVXP/urLahNIR1Wtc7WzHMZtg0C3ca2dKvgswAN/Z7AMLE/lsAAAAAElFTkSuQmCC) no-repeat;
    -webkit-background-size: 81px 33px;
    -moz-background-size: 81px 33px;
    background-size: 81px 33px
  }

  .card.fashion .card-avatar-bg {
    background-color: #0fb2b4
  }

  .card.fashion .card-hover-bg {
    background-color: #14e4da
  }

  .card.fashion .card-type {
    color: #14e4da
  }

  .card {
    display: block;
    width: 100%;
    height: 288px;
    background-color: #fff;
    border-radius: 2px;
    margin: 0 auto;
    border: 1px solid #dadada
  }

  .card-name, .card-type {
    padding: 0;
    margin: 0;
    color: #a3a4a4
  }

  .card-cnt {
    width: 100%;
    height: 100%
  }

  .card-content, .card-hover-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
  }

  .line--small .card {
    width: 49.45%;
    width: calc(49.45%);
    height: 177px;
    margin-right: 0;
    float: left
  }

  .line--small .card--last {
    float: right
  }

  .line--small .card-blob {
    -webkit-transform: scale(.45, .45);
    -moz-transform: scale(.45, .45);
    -o-transform: scale(.45, .45);
    -ms-transform: scale(.45, .45);
    transform: scale(.45, .45)
  }

  .line--small .card-avatar-bg {
    top: -37px;
    left: -37px;
    width: 74px;
    height: 74px
  }

  .line--small .card-avatar {
    top: -34px;
    left: -34px;
    width: 68px;
    height: 68px
  }

  .line--small .card-name, .line--small .card-type {
    font-size: 14px
  }

  .line--small .card-name {
    left: 14px
  }

  @media (min-width: 550px) {
    .line--small .card-name, .line--small .card-type {
      font-size: 18px
    }

    .line--small .card-name {
      left: 26px;
      bottom: 4px
    }
  }

  .card-blob, .card-hover-top {
    left: 50%;
    position: absolute
  }

  .line--small .card-type {
    right: 14px
  }

  .line--small .card-hover-title {
    font: 400 28px/26px "Odin Rounded Bold"
  }

  @media (min-width: 550px) {
    .line--small .card-type {
      right: 26px;
      bottom: 4px
    }

    .line--small .card-hover-title {
      font: 400 48px/46px "Odin Rounded Bold"
    }
  }

  .line--small .card-hover-top {
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
  }

  .line--small .card-hover-title-cnt {
    top: 12px
  }

  .line--small .card-cta-text {
    display: none
  }

  .card-hover-top {
    top: 0;
    -webkit-transform: translateX(-50%) scale(2, 2);
    -moz-transform: translateX(-50%) scale(2, 2);
    -o-transform: translateX(-50%) scale(2, 2);
    -ms-transform: translateX(-50%) scale(2, 2);
    transform: translateX(-50%) scale(2, 2)
  }

  .card-blob {
    top: 50%;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: scale(.9, .9);
    -moz-transform: scale(.9, .9);
    -o-transform: scale(.9, .9);
    -ms-transform: scale(.9, .9);
    transform: scale(.9, .9)
  }

  .card-hover-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%
  }

  .card-avatar-cnt {
    position: absolute;
    top: 50%;
    left: 50%
  }

  .card-avatar-bg {
    position: absolute;
    top: -60px;
    left: -60px;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: #000
  }

  .card-avatar {
    position: absolute;
    top: -56px;
    left: -56px;
    width: 112px;
    height: 112px;
    border-radius: 60px;
    background-color: #444;
    z-index: 0
  }

  .card-avatar-img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    filter: alpha(opacity=0);
    max-width: none
  }

  .card-share {
    width: 48px;
    height: 47px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACNCAYAAACOqymYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjU5REI5ODFFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjU5REI5ODBFMTA2MTFFNThFMTVGNzEwMTY4MkMzRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTdCOTkyNEUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QTdCOTkyNUUwODYxMUU1OEUxNUY3MTAxNjgyQzNFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvnLdHsAAAcdSURBVHja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) no-repeat;
    -webkit-background-size: 48px 47px;
    -moz-background-size: 48px 47px;
    background-size: 48px 47px
  }

  .card-share-cnt {
    position: absolute;
    top: 0;
    right: 12px;
    width: 36px;
    height: 35px
  }

  @media (min-width: 550px) {
    .card-avatar, .card-avatar-bg {
      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
      -o-transform: scale(1.5);
      -ms-transform: scale(1.5);
      transform: scale(1.5)
    }

    .card-share-cnt {
      -webkit-transform: scale(1.25);
      -moz-transform: scale(1.25);
      -o-transform: scale(1.25);
      -ms-transform: scale(1.25);
      transform: scale(1.25);
      top: 10px;
      right: 26px
    }
  }

  .card-hover-share, .card-share {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0
  }

  .card-name {
    position: absolute;
    bottom: -4px;
    left: 14px;
    font: 400 17px "Odin Rounded Regular"
  }

  @media (min-width: 550px) {
    .card-name {
      font-size: 24px;
      left: 26px
    }
  }

  .card-type {
    position: absolute;
    bottom: -3px;
    right: 14px;
    font: 400 17px "Odin Rounded Bold"
  }

  @media (min-width: 550px) {
    .card-type {
      font-size: 24px;
      right: 26px
    }
  }

  .card-hover-title-cnt {
    position: absolute;
    top: 24px;
    left: 4%;
    width: 92%;
    height: 100%;
    display: table
  }

  .card-hover-title {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    font: 400 56px/50px "Odin Rounded Bold";
    text-align: center;
    color: #fff
  }

  @media (min-width: 550px) {
    .card-hover-title {
      font: 400 96px/90px "Odin Rounded Bold"
    }
  }

  /** c-gradient-side **/
  .c-gradient-side {
    background-image: -webkit-gradient(linear, left top, right top, from(#f5f5fa), color-stop(#fff), to(#f5f5fa));
    background-image: linear-gradient(to right, #f5f5fa, #fff, #f5f5fa);

  }

  .block-badge{
    padding: 3px 10px;
    max-width: 2.1875rem;
    border-radius: 12px;
    display: block;
    margin-top: 0;
    margin-bottom: 1.5625rem;
    background-image: linear-gradient(90deg, #65dc52 0%, #1bb934 100%);
    /*background-image: linear-gradient(90deg, #E64C4C 0%, #EF32FB 100%);*/
    font-family: system-ui,-apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 13px;
    color: #000;
    letter-spacing: 0.26px;
    text-align: center;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .block-badge.center {
    margin-left: auto;
    margin-right: auto;
  }
</style>
