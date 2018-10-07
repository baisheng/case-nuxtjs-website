<template>
  <div>
    <div id="main">
      <!--<canvas ref="renderCanvas"></canvas>-->
      <div
        id="mpshow"
        style="height: 500px;"/>
    </div>
    <div
      id="topbar"
      style="transform: translate3d(0px, 0px, 0px);">
      <div class="topbar-title desktop">
        <span class="present">Picker LOVE </span>
        <span class="bellow">find your card</span>
      </div>
      <a
        href="#"
        class="topbar-bt-menu">
        <span class="lines">
          <span class="line line--0"/>
          <span class="line line--1"/>
          <span class="line line--2"/>
        </span>
      </a>
      <a
        href="#"
        class="topbar-ontour desktop"
        style="display: none;">TOUR DATES</a>
      <a
        href="#"
        class="topbar-bt-card bt bt--topbar desktop">
        <span
          id="label-createcard"
          class="bt-part bt-part--default">CREATE YOUR CARD</span>
        <span
          id="label-createcard-hover"
          class="bt-part bt-part--hover">CREATE YOUR CARD</span>
      </a>
      <!--<a href="#" class="topbar-bt-card bt bt&#45;&#45;topbar desktop">-->
      <!--<span id="label-createcard" class="bt-part bt-part&#45;&#45;default">CREATE YOUR CARD</span>-->
      <!--<span id="label-createcard-hover" class="bt-part bt-part&#45;&#45;hover">CREATE YOUR CARD</span>-->
      <!--</a>-->
      <a
        href="#"
        class="topbar-bt-card mobile">
        <span class="topbar-bt-card-icon"/>
      </a>
    </div>
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

  </div>
</template>
<script>
  /* eslint-disable no-undef,new-cap */

  // import CMain from '~/components/main'
  import Vue from 'vue'
  // import Emitter from "~/assets/fz/events/Emitter";
  // import {TweenLite, Cubic, Sine} from 'gsap'
  // import gridDataManager from '~/assets/love/grid/gridDataManager'
  // import cardflowData from '~/assets/love/cardflow/cardflowData'

  // import TileBg from '~/assets/love/grid/tile/TileBg'
  // import bunny from '~/assets/love/playground.js'
  export default {
    // middleware: ['auth'],
    components: {
      // CMain
    },
    data: () => {
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
        ]
      }
    },
    // Allows descendants to inject everything.
    provide () {
      return {
        PIXIWrapper: this.PIXIWrapper,
        EventBus: this.EventBus
      }
    },
    async fetch ({ store, params }) {
      // await store.dispatch('loadCategories')
      // const term = (await app.$axios.$get(`/apps/${app.store.getters.appId}/categories/slug:${params.slug}`)).data
      const query = {
        page: 1,
        category: 'loves'
        // status: 'auto-draft'
      }
      // await store.dispatch('getPostsFullList', query)
    },
    computed: {},
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
      showCardFlow () {
        console.log('show card flow')
      },
      _create (countPoints, radius) {
        // const shape = new PIXI.GraphicsPharell
        const shape = new PIXI.Graphics
        shape.radBase = radius
        shape.beginFill(16777215)

        let a = 0
        let obj = null
        const aAdd = 360 / countPoints * Math.PI / 180
        for (let i = 0; i < countPoints; i++) {
          obj = {
            x: Math.cos(a) * scale,
            y: Math.sin(a) * scale,
            a: a
          }
          a += aAdd
          if (i !== 0) {
            shape.lineTo(obj.x, obj.y)
          } else {
            shape.moveTo(obj.x, obj.y)
          }
        }
        return shape
      }
    }
  }
  // <script>
  //   import Posts from '~/pages/posts'
  //   export default Posts
</script>
