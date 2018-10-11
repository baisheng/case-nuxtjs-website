<template>
  <section class="c-hero c-gradient">
    <div class="u-spacer16" />
    <header class="u-text-center u-pos-rel u-z-20">
      <h1 class="u-text-xxl">让小程序支持组件化开发的框架</h1>
      <p class="c-txt-section-subtitle maw-60ch mt-8 mh-auto color-nova">
        已有超过 1000 人应用
      </p>
      <div class="mt-32 mh-auto d-flex fxd-column xs:fxd-row xs:jc-center lg:mt-48"> <a
        href="https://player.vimeo.com/video/220624469?app_id=122963"
        target="_blank"
        class="c-btn c-btn--secondary w-200 ml-auto mr-auto xs:ml-0 xs:mr-24"
        rel="noopener"><svg
          class="pos-relative mr-8"
          width="12"
          height="14"
          style="top: -1px;"><use xlink:href="#triangle-right"/></svg> <span>从这里开始</span> </a><a
            href="/schedule-demo"
            class="c-btn c-btn--primary d-block w-200 mh-auto xs:mh-0 mt-16 xs:mt-0"
            rel="noopener">GitHub</a> </div>
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



  .c-btn, .c-carousel-button {
    height: 2.625rem;
    -webkit-transition: -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;
    transition: -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;
    transition: box-shadow 0.15s ease, transform 0.15s ease;
    transition: box-shadow 0.15s ease, transform 0.15s ease, -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;
    will-change: box-shadow, transform
  }

  .c-btn:active, .c-carousel-button:active, .c-btn:focus, .c-carousel-button:focus {
    -webkit-transition: none !important;
    transition: none !important
  }

  @media (min-width: 75em) {
    .c-btn, .c-carousel-button {
      height: 3rem
    }
  }

  .c-btn:hover, .c-carousel-button:hover {
    text-decoration: none
  }

  .c-btn--rounded, .c-carousel-button {
    width: 3rem;
    padding: 0
  }

  .c-btn--primary, .btn.btn-static-primary:not(.immutable) {
    text-shadow: 0 1px 0 #31B716;
    /*background: -webkit-gradient(linear, left top, left bottom, from(#aeb7ff), to(#5468ff));*/
    background: linear-gradient(#a6fd00, #31b716);
    box-shadow: 0 7px 13px -3px rgba(40, 140, 0, 0.3), 0 2px 4px 0 rgba(42, 156, 20, 0.4), inset 0 -2px 0 0 #31b716
  }

  .c-btn--primary:hover, .btn.btn-static-primary:hover:not(.immutable), .c-btn--primary:focus, .btn.btn-static-primary:focus:not(.immutable) {
    box-shadow: 0 11px 16px -3px rgba(31, 113, 0, 0.3), 0 4px 5px 0 rgba(27, 92, 0, 0.4), inset 0 -2px 0 0 #2a9c14;
    transform: translateY(-2px)
  }

  .c-btn--primary:active, .btn.btn-static-primary:active:not(.immutable) {
    background-blend-mode: multiply, normal;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#5468ff), to(#5468ff)), -webkit-gradient(linear, left bottom, left top, from(#fff), to(#e4e4e9));
    background-image: linear-gradient(#5468ff, #5468ff), linear-gradient(to top, #fff, #e4e4e9);
    -webkit-box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11), inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #fff;
    box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11), inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #fff;
    -webkit-transform: translateY(2px);
    -ms-transform: translateY(2px);
    transform: translateY(2px)
  }

  .c-btn--secondary, .btn.btn-static-secondary:not(.immutable), .btn.btn-static-dark:not(.immutable), #pricing #addons .btn-cta:not(.immutable), .c-carousel-button {
    background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#e4e4e9));
    background: linear-gradient(#fff, #e4e4e9);
    -webkit-box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3), 0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
    box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3), 0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3
  }

  .c-btn--secondary:hover, .btn.btn-static-secondary:hover:not(.immutable), .btn.btn-static-dark:hover:not(.immutable), #pricing #addons .btn-cta:hover:not(.immutable), .c-carousel-button:hover, .c-btn--secondary:focus, .btn.btn-static-secondary:focus:not(.immutable), .btn.btn-static-dark:focus:not(.immutable), #pricing #addons .btn-cta:focus:not(.immutable), .c-carousel-button:focus {
    -webkit-box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3), 0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
    box-shadow: 0 11px 16px -3px rgba(45, 35, 66, 0.3), 0 4px 5px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
    -webkit-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    transform: translateY(-2px)
  }

  .c-btn--secondary:active, .btn.btn-static-secondary:active:not(.immutable), .btn.btn-static-dark:active:not(.immutable), #pricing #addons .btn-cta:active:not(.immutable), .c-carousel-button:active {
    background-image: -webkit-gradient(linear, left bottom, left top, from(#fff), to(#e4e4e9));
    background-image: linear-gradient(to top, #fff, #e4e4e9);
    -webkit-box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11), inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #fff;
    box-shadow: inset 0 2px 0 1px rgba(132, 138, 184, 0.11), inset 0 2px 9px 0 rgba(93, 100, 148, 0.5), inset 0 -1px 0 1px #fff;
    -webkit-transform: translateY(2px);
    -ms-transform: translateY(2px);
    transform: translateY(2px)
  }

  @media (min-width: 75em) {
    .c-btn, .c-carousel-button {
      height: 3rem;
    }
  }

  .c-btn, .c-carousel-button {
    height: 2.625rem;
    -webkit-transition: -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;
    transition: -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;
    transition: box-shadow 0.15s ease, transform 0.15s ease;
    transition: box-shadow 0.15s ease, transform 0.15s ease, -webkit-box-shadow 0.15s ease, -webkit-transform 0.15s ease;
    will-change: box-shadow, transform;
  }
  .c-btn-pricing, .c-btn, .c-carousel-button, .c-input-block, .c-input-block__input, .c-switcher_toggle, .c-switcher_toggle:before, .bdr-max {
    border-radius: 9999px
  }

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
