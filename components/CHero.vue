<template>
  <section class="c-hero c-gradient">
    <div class="u-spacer16" />
    <header class="u-text-center u-pos-rel u-z-20">
      <h1 class="u-text-xxl">让小程序支持组件化开发的框架</h1>
      <p class="c-txt-section-subtitle maw-60ch mt-8 mh-auto color-nova">
        目前已有超过 5000 位开发者使用或了解本框架, 拥有众多的开发特性和优化方案.
      </p>
      <div class="mt-32 mh-auto d-flex fxd-column xs:fxd-row xs:jc-center lg:mt-48"> <a
        href="https://tencent.github.io/wepy/document.html"
        target="_blank"
        class="c-btn c-btn--secondary w-200 ml-auto mr-auto xs:ml-0 xs:mr-24"
        rel="noopener">
        <i class="fa fa-long-arrow-right u-mr-xsmall"/>
        从这里开始
      </a>
        <a
          href="https://github.com/Tencent/wepy"
          target="_blank"
          class="c-btn c-btn--primary d-block w-200 mh-auto xs:mh-0 mt-16 xs:mt-0"
          rel="noopener">
          <i class="fa fa-github u-mr-xsmall"/>
          GitHub
        </a>
      </div>
    </header>

    <div class="u-spacer32" />
  </section>
</template>
<style lang="scss">
  .o-curve_grey-inverted {
    display: block;
    height: 50px;
    background-image: url(/img/bg-curve-grey-inverted.svg);
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    margin-left: -2px;
    margin-right: -2px;
  }
  .c-gradient, .c-card, .c-card_badge {
    background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f5f5fa));
    background-image: linear-gradient(#fff, #f5f5fa)
  }

  .c-gradient-side {
    background-image: -webkit-gradient(linear, left top, right top, from(#f5f5fa), color-stop(#fff), to(#f5f5fa));
    background-image: linear-gradient(to right, #f5f5fa, #fff, #f5f5fa)
  }



  /*.c-btn, .c-carousel-button {*/
    /*height: 2.625rem;*/
    /*-webkit-transition: -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;*/
    /*transition: -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;*/
    /*transition: box-shadow 0.15s ease, transform 0.15s ease;*/
    /*transition: box-shadow 0.15s ease, transform 0.15s ease, -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;*/
    /*will-change: box-shadow, transform*/
  /*}*/

  /*.c-btn:active, .c-carousel-button:active, .c-btn:focus, .c-carousel-button:focus {*/
    /*-webkit-transition: none !important;*/
    /*transition: none !important*/
  /*}*/

  /*@media (min-width: 75em) {*/
    /*.c-btn, .c-carousel-button {*/
      /*height: 3rem*/
    /*}*/
  /*}*/

  /*.c-btn:hover, .c-carousel-button:hover {*/
    /*text-decoration: none*/
  /*}*/

  /*.c-btn--rounded, .c-carousel-button {*/
    /*width: 3rem;*/
    /*padding: 0*/
  /*}*/


  .mr-12 {
    margin-right: 0.75rem
  }

  .c-tooltip--left, .mr-16 {
    margin-right: 1rem
  }

  .mr-20 {
    margin-right: 1.25rem
  }

  .mr-24 {
    margin-right: 1.5rem
  }

  .mr-32 {
    margin-right: 2rem
  }

  .mr-48 {
    margin-right: 3rem
  }

  .mr-80 {
    margin-right: 5rem
  }

  .mr-120 {
    margin-right: 7.5rem
  }

  .mr-auto {
    margin-right: auto
  }


  .ml-0 {
    margin-left: 0
  }

  .ml-8 {
    margin-left: 0.5rem
  }

  .ml-12 {
    margin-left: 0.75rem
  }

  .c-tooltip--right, .ml-16 {
    margin-left: 1rem
  }

  .ml-20 {
    margin-left: 1.25rem
  }

  .ml-24 {
    margin-left: 1.5rem
  }

  .ml-32 {
    margin-left: 2rem
  }

  .ml-48 {
    margin-left: 3rem
  }

  .ml-80 {
    margin-left: 5rem
  }

  .ml-120 {
    margin-left: 7.5rem
  }

  .ml-auto {
    margin-left: auto
  }

  .mt-24 {
    margin-top: 1.5rem
  }

  .mt-32 {
    margin-top: 2rem
  }

  .c-carousel-button, .mt-48 {
    margin-top: 3rem
  }

  .mt-80 {
    margin-top: 5rem
  }

  .mt-120 {
    margin-top: 7.5rem
  }

  .mt-auto {
    margin-top: auto
  }

  .c-input-block__submit, .w-200 {
    width: 12.5rem
  }

  .w-300 {
    width: 18.75rem
  }

  .w-400 {
    width: 25rem
  }

  .w-500 {
    width: 31.25rem
  }

  .w-600 {
    width: 37.5rem
  }


  @media (min-width: 31.25em) {
    .xs\:mr-24 {
      margin-right: 1.5rem
    }
  }

  .mb-20 {
    margin-bottom: 1.25rem
  }
</style>
