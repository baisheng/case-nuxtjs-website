<template>
  <section class="c-customer u-pos-rel">
    <div class="spacer40:fluid" />
    <div class="spacer40:fluid" />

    <div class="container ">
      <div class="row u-justify-center">
        <div class="col-md-10 u-text-center">
          <i class="block-badge center" />
          <h2 class="u-text-bold">应用案例</h2>
          <p class="u-h3 u-text-mute u-mb-large u-text-bold">
            <span
              v-for="item in caseData"
              :key="item.name"
              :class="{'c-badge u-mr-small c-badge--default': true, 'c-badge--opensource': item.opensource}">
              <img
                v-if="item.opensource"
                class="c-icon--small v-align-text-bottom"
                src="/assets/img/opensource.svg">
              {{ item.name }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <div
      id="mpshow"
      style="height: 500px;"
      class="u-mt-large u-mb-medium  "/>

    <div
      v-show="filterEnable"
      id="filters"
      class="filters desktop">
      <ul class="filters-list">
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
</template>
<script>
  import Vue from 'vue'

  export default {
    name: 'CasesList',
    props: {
      caseData: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data () {
      return {
        filterEnable: false,
        // These need to be contained in an object because providers are not reactive.
        PIXIWrapper: {
          // Expose PIXI and the created app to all descendants.
          PIXIApp: null
        },
        // Expose the event bus to all descendants so they can listen for the app-ready event.
        EventBus: new Vue(),
        visibleCategories: [
          { name: '默认', slug: 'default' },
          { name: '开源', slug: 'opensource' }
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
    mounted () {
      // if (this.fullList.data.length > 0) {
      // console.log(this.fullList.data)
      this.$mpShow.init()
      this.$mpShow.loader.loadAssets()
      this.$mpShow.loader.loadData(this.caseData);
      // console.log(this.caseData)
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

<style lang="scss">
  @media (min-width: 1200px) {
    .c-customers:before {
      -webkit-transform: skewY(-3deg);
      -ms-transform: skewY(-3deg);
      transform: skewY(-3deg);
    }
  }
  .c-customer {
    /*background: #f8faff;*/

    &:after {
      content: "";
      display: block;
      position: relative;
      /*width: calc(100% + 76px);*/
      margin-left: -38px;
      padding-bottom: 2.77%;
      background-image: url(/assets/img/round-edge.svg);
      background-size: cover;
      margin-top: 4vh;
      z-index: 100;
      margin-bottom: -.1875rem;
    }
  }
  /*@media (min-width: 960px) {*/
  .spacer40\:fluid {
    height: 40px !important;
  }
  [class^="spacer"] {
    width: 100%;
    font-size: 0;
    margin: 0;
    padding: 0;
    border: 0;
  }
  /*}*/
  /*.spacer40\:fluid {*/
  /*height: 25px !important;*/
  /*}*/
</style>
