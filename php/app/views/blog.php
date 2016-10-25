<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Блог</title>
    <meta content="Корепанов Иван" name="author">
    <meta content="" name="description">
    <meta content="" name="keywords">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="ie=edge" http-equiv="x-ua-compatible">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="/assets/img/favicon/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/assets/img/favicon/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/assets/img/favicon/manifest.json">
    <link rel="mask-icon" href="/assets/img/favicon/safari-pinned-tab.svg">
    <meta name="theme-color" content="#4e8839">
    <link rel="shortcut icon" href="/assets/img/favicon/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/assets/css/foundation.css">
    <link rel="stylesheet" href="/assets/css/app.css">
    <script src="/assets/js/foundation.js" defer></script>
    <script src="/assets/js/app.js" defer>  </script><!--[if lt IE 9]>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->
  </head>
  <body class="body-blog">
    <div class="preloader">
      <div class="preloader__spinner">
        <div class="preloader__animation"></div>
        <div class="preloader__percents">0%</div>
      </div>
    </div>
    <div class="main-wrapper main-wrapper--bg main-wrapper--blog" id="top">
      <div class="overlay">
        <ul class="overlay-menu">
          <li class="overlay-menu__item"><a class="overlay-menu__link" href="works.html">Мои работы</a></li>
          <li class="overlay-menu__item"><a class="overlay-menu__link" href="blog.html">Блог</a></li>
          <li class="overlay-menu__item"><a class="overlay-menu__link" href="about.html">Обо мне</a></li>
          <li class="overlay-menu__item"><a class="overlay-menu__link" href="/#authorize">Авторизация</a></li>
        </ul>
      </div>
      <header class="header header--height">
        <div class="parallax">
          <div class="parallax__layer"><img src="/assets/img/parallax_1.jpg" alt=""></div>
        </div>
        <div class="blog-svg">
          <svg class="icon icon--blog_header">
            <use xlink:href="/assets/img/sprite.svg#blog_header"></use>
          </svg>
        </div>
        <div class="header__socials">
          <div class="socials socials--floatleft"><a class="socials__link" href="https://vk.com/xenotek" target="_blank">
              <svg class="icon icon--vk">
                <use xlink:href="/assets/img/sprite.svg#vk"></use>
              </svg></a><a class="socials__link" href="https://github.com/Xenotek/" target="_blank">
              <svg class="icon icon--github">
                <use xlink:href="/assets/img/sprite.svg#github"></use>
              </svg></a><a class="socials__link" href="https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%BA%D0%BE%D1%80%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2-00aa8012a" target="_blank">
              <svg class="icon icon--in">
                <use xlink:href="/assets/img/sprite.svg#in"></use>
              </svg></a>
          </div>
        </div>
        <div class="header__hamburger"><a class="hamburger" href="#open">
            <div class="line line--1"></div>
            <div class="line line--2"></div>
            <div class="line line--3"></div></a></div>
        <div class="header__about">
          <div class="about">
            <div class="about__avatar about__avatar--margin"><img class="about__img" src="assets/img/avatar.jpg" alt="avatar"></div>
            <h1 class="title-blog">Блог</h1>
            <div class="about__text">Статьи, которые я написал</div>
          </div>
        </div>
        <div class="triangles-blog">
          <svg class="triangles" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 160" preserveaspectratio="none">
            <polygon class="triangle triangle-left" points="0,0 50,160 0,160"></polygon>
            <polygon class="triangle triangle-right" points="50,160 100,160 100,0"></polygon>
          </svg>
        </div>
      </header>
      <div class="section-blog" id="next">
        <div class="blog-wrapper">
          <aside class="blog blog__left">
            <div class="swipe-clip"></div>
            <div class="swipe"></div>
            <? include 'parts/blog-menu.php' ?>
            
          </aside>
          <main class="blog blog__right">
            <? include 'parts/blog-content.php' ?>
            
          </main>
        </div>
      </div>
      <footer class="main-footer">
        <div class="footer">
          <div class="footer__item">
            <p class="footer__text">Этот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. </p>
          </div>
          <div class="footer__item footer__item--second">
            <div class="footer__menu">
              <ul class="footer-menu">
                <li class="footer-menu__item"><a class="footer-menu__link" href="works.html">Мои работы</a></li>
                <li class="footer-menu__item"><a class="footer-menu__link" href="about.html">Обо мне</a></li>
                <li class="footer-menu__item"><a class="footer-menu__link" href="blog.html">Блог</a></li>
                <li class="footer-menu__item"><a class="footer-menu__link" href="/#authorize">Авторизация</a></li>
              </ul>
            </div>
            <div class="footer__socials">
              <div class="socials"><a class="socials__link" href="https://vk.com/xenotek" target="_blank">
                  <svg class="icon icon--vk">
                    <use xlink:href="/assets/img/sprite.svg#vk"></use>
                  </svg></a><a class="socials__link" href="https://github.com/Xenotek/" target="_blank">
                  <svg class="icon icon--github">
                    <use xlink:href="/assets/img/sprite.svg#github"></use>
                  </svg></a><a class="socials__link" href="https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%BA%D0%BE%D1%80%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2-00aa8012a" target="_blank">
                  <svg class="icon icon--in">
                    <use xlink:href="/assets/img/sprite.svg#in"></use>
                  </svg></a>
              </div>
            </div>
          </div>
          <div class="footer__item footer__item--last">
            <blockquote class="blockquote">Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете.</blockquote>
            <div class="blockquote-author">— Martin Golding</div>
          </div>
        </div>
        <div class="main-footer__copyright"> <span class="footer__media">© Корепанов Иван </span><span class="footer__media-hide">| </span><span class="footer__media-line">создано с любовью в LoftSchool | 2016</span></div>
      </footer>
    </div>
  </body>
</html>