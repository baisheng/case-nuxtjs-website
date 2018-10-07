<template>
  <div
    id="app"
    style="position: relative;">
    <section class="c-hero">
      <header class="c-navbar u-mb-small">
        <!-- <a class="c-navbar__brand" href="/" title="Homepage"> -->
        <!-- <img src="img/wepylogo.png" alt="Dashboard UI kit"> -->
        <!-- <span>WePY</span> -->
        <!-- </a> -->
        <a
          href="/"
          class="c-navbar-brand">
          <div class="c-navbar-brand__icon">
            <img
              class=""
              src="img/wepylogo.png"
              style="width:28px; height: 28px;"
              alt="Dashboard UI Kit">

          </div>
          <!-- <img class="c-navbar-brand__icon" src="img/wepylogo.png" alt="Dashboard UI kit"> -->
          <!-- <span class="c-navbar-brand__icon"></span>  -->
          <div class="c-navbar-brand__text">
            <span class="c-navbar-brand__text-title">WePY</span>
            <span class="c-navbar-brand__text-description"><span/>帮你快速开发小程序</span>
          </div>
        </a>
        <!-- COLLAPSED NAVIGATION -->
        <nav
          id="main-nav"
          class="c-nav collapse">
          <ul
            class="c-nav__list">
            <li class="c-nav__item">
              <a
                class="c-nav__link is-active"
                href="/">首页</a>
            </li>
            <li class="c-nav__item">
              <a
                class="c-nav__link"
                href="https://tencent.github.io/wepy/document.html">使用手册</a>
            </li>
            <li class="c-nav__item">
              <a
                class="c-nav__link"
                href="https://tencent.github.io/wepy/document.html#/api">API 说明</a>
            </li>
            <li class="c-nav__item">
              <a
                class="c-nav__link"
                href="https://tencent.github.io/wepy/document.html#/changelog">版本日志</a>
            </li>
            <li class="c-nav__item">
              <a
                class="c-nav__link"
                href="https://tencent.github.io/wepy/donate.html">Donate</a>
            </li>
          </ul>
        </nav>
        <!-- // COLLAPSED NAVIGATION -->

        <a
          href="https://github.com/Tencent/wepy"
          target="_blank"
          class="c-social__github">
          <i class="fa fa-github"/>
          GitHub
        </a>
        <a
          href=""
          class="c-social__wechat"><img src="img/icon_wechat.svg"></a>

        <button
          class="c-nav-toggle"
          data-toggle="collapse"
          data-target="#main-nav">
          <span class="c-nav-toggle__bar"/>
          <span class="c-nav-toggle__bar"/>
          <span class="c-nav-toggle__bar"/>
        </button>
        <!-- // .c-nav-toggle -->
      </header>

      <div
        id="intro"
        class="c-intro">
        <h1 class="c-intro__title">让小程序支持组件化开发的框架</h1>
        <p class="c-intro__text u-mb-medium">WePY 参考了 Vue 等框架的一些特性，并对小程序的原生开发模式再次封装，使其更贴近于 MVVM 架构, 且完美支持 ES6/7</p>
        <a
          href="https://tencent.github.io/wepy/document.html"
          class="c-btn c-btn--large c-btn--quickstart">
        <i class="fa fa-hand-o-right u-mr-xsmall"/>从这里开始</a>
        <div class="c-intro__showcase">
          <!-- <img class="c-intro__img c-intro__img--first js-intro-img" src="img/front/intro3.png" alt="Dashboard opened on macbook"> -->
          <!-- <img class="c-intro__img c-intro__img--last js-intro-img" src="img/front/intro2.png" alt="Dashboard opened on macbook"> -->
          <!-- <img class="c-intro__img" src="img/front/intro1.png" alt="Dashboard opened on macbook"> -->
        </div>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1230 88"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <g
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd">
            <g
              id="Other-elements"
              transform="translate(0.000000, -2200.000000)"
              fill="#fff">
              <path
                id="Rectangle-5"
                d="M0,2210 C136.666667,2216.66667 273.333333,2220 410,2220 C615,2220 615,2200 820,2200 C956.666667,2200 1093.33333,2203.33333 1230,2210 L1230,2288 L0,2288 L0,2210 Z"/>
            </g>
          </g>
        </svg>
      </div>

    </section>


    <section class="c-features">
      <div class="container">
        <div class="row u-justify-center">
          <div class="col-md-8 u-text-center">
            <h2>为什么要选择 WePY？</h2>
            <p class="u-h4 u-text-mute u-mb-large">
              目前已有超过 1500 位开发者使用或了解本框架, 拥有众多的开发特性和优化方案。
            </p>
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
      <div
        id="mpshow"
        style="height: 500px;"
        class="u-mt-large u-mb-medium carousel"/>
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
        id="modal-tour"
        class="modal tour">

        <div class="inner">

          <h2>Tour dates</h2>

          <table/>

        </div>
        <!-- end .inner -->

        <a
          class="close"
          href="#">Close</a>

      </div>
      <div
        id="loading"
        style="opacity: 0.0881211; transform: matrix3d(0.097231, -0.42932, 0, 0, 0.430052, 0.0973969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"/>


    </section>


    <footer class="c-footer">
      <div class="container">
        <div class="row u-justify-center">
          <div class="col-lg-6">
            <a
              class="c-footer-brand"
              href="#">
              <div class="c-footer-brand__icon">
                <img
                  class=""
                  src="img/wepylogo.png"
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
  import Logo from '~/components/Logo.vue'
  import Vue from 'vue'

  export default {
    components: {
      Logo
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

