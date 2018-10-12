<template>
  <section class="c-section c-codesample u-pos-rel">
    <div class="c-section_inner">
      <div class="container u-mb-large">
        <div class="row u-justify-center">
          <div class="col-md-10 u-text-center">
            <i class="block-badge center" />
            <h2 class="u-text-bold">代码示例</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row u-justify-center">
          <div class="col-md-9">
            <div class="code-samples bxs-1 p-24 bgc-cosmos ovy-auto ovx-scroll">
              <prism language="html">
                {{ codeSample }}
              </prism>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer40:fluid" />
    <!--<div class="spacer120:fluid" />-->
  </section>
</template>

<script>
  export default {
    data () {
      return {
        codeSample: `
<style lang="less">
  @color: #4D926F;
  .userinfo {
    color: @color;
  }
</style>

<template lang="pug">
    view(class='container')
        view(class='userinfo' @tap='tap')
            mycom(:prop.sync='myprop' @fn.user='myevent')
            text {{now}}
</template>

<script>
    import wepy from 'wepy';
    import mycom from '../components/mycom';

    export default class Index extends wepy.page {

        components = { mycom };
        data = {
            myprop: {}
        };
        computed = {
            now () { return new Date().getTime(); }
        };
        async onLoad() {
            await sleep(3);
            console.log('Hello World');
        }
        sleep(time) {
            return new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
        }
    }
<\/script>`,
      }
    }
  }
</script>
<style lang="scss">
  .c-codesample {
    /*.fill-titan {*/
      background-color: #f8faff !important;
    /*}*/
  }
  .bgc-cosmos {
    background-color: #21243d;
  }
  .ovx-scroll {
    overflow-x: scroll;
  }

  .ovy-auto {
    overflow-y: auto;
  }
  .code-samples {
    height: 396px;
  }
  .bxs-1 {
    border-radius: 6px;
    /*box-shadow: 0 10px 40px 0 rgba(62,57,107,0.07), 0 2px 9px 0 rgba(62,57,107,0.06);*/
    /*-webkit-box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.15), 0 2px 4px 0 rgba(93, 100, 148, 0.2);*/
    box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.15), 0 2px 4px 0 rgba(93, 100, 148, 0.2)
  }
  @media (min-width: 960px) {
    .spacer120\:fluid {
      height: 120px !important;
    }
  }
</style>
