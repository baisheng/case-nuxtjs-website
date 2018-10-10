<template>
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


    </div>
    <div class="c-features__hero-inner">
      <div class="o-curve_white"/>
    </div>

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

</style>
