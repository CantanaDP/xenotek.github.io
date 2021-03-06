<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Мои работы</title>
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
  <body class="body-works">
    <div class="preloader">
      <div class="preloader__spinner">
        <div class="preloader__animation"></div>
        <div class="preloader__percents">0%</div>
      </div>
    </div>
    <div class="main-wrapper">
      <div class="overlay">
        <ul class="overlay-menu">
          <li class="overlay-menu__item"><a class="overlay-menu__link" href="works.html">Мои работы</a></li>
          <li class="overlay-menu__item"><a class="overlay-menu__link" href="blog.html">Блог</a></li>
          <li class="overlay-menu__item"><a class="overlay-menu__link" href="about.html">Обо мне</a></li>
          <li class="overlay-menu__item"><a class="overlay-menu__link" href="/#authorize">Авторизация</a></li>
        </ul>
      </div>
      <header class="header">
        <div class="portfolio">
          <svg class="icon icon--portfolio_header">
            <use xlink:href="/assets/img/sprite.svg#portfolio_header"></use>
          </svg>
        </div>
        <div class="header__socials">
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
        <div class="header__hamburger"><a class="hamburger" href="#open">
            <div class="line line--1"></div>
            <div class="line line--2"></div>
            <div class="line line--3"></div></a></div>
        <div class="header__about">
          <div class="about">
            <div class="about__avatar"><img class="about__img" src="assets/img/avatar.jpg" alt="avatar"></div>
            <h1 class="about__author">Корепанов Иван</h1>
            <div class="about__text">Личный сайт веб разработчика</div>
          </div>
        </div><a class="header__arrow-down arrow-down" href="#next">
          <svg class="icon icon--arrow_down">
            <use xlink:href="/assets/img/sprite.svg#arrow_down"></use>
          </svg></a>
        <div class="triangles-works">
          <svg class="triangles" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 160" preserveaspectratio="none">
            <polygon class="triangle triangle-left" points="0,0 50,160 0,160"></polygon>
            <polygon class="triangle triangle-right" points="50,160 100,160 100,0"></polygon>
          </svg>
        </div>
      </header>
      <section class="section-works-title" id="next">
        <h2 class="title-works title-about--big title--nomargin">Мои работы</h2>
        <div class="title-works-bg">
          <svg class="icon icon--works_header">
            <use xlink:href="/assets/img/sprite.svg#works_header"></use>
          </svg>
        </div>
      </section>
      <section class="section-slider">
        <? include 'parts/section-slider.php' ?>
        
      </section>
      <section class="section-review">
        <div class="icon-list2"></div>
        <h2 class="title-review title-about--big title-about--short-400">Что обо мне говорят</h2>
        <div class="review-about-bg">
          <svg class="icon icon--about_header">
            <use xlink:href="/assets/img/sprite.svg#about_header"></use>
          </svg>
        </div>
        <div class="reviews">
          <div class="review reviews__left">
            <div class="review__avatar"><img class="review__img" src="assets/img/dima.jpg" alt="avatar"></div>
            <div class="review__text">Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!
              <div class="icon-quote"></div>
            </div>
            <div class="review__author">Ковальчук Дмитрий</div>
            <div class="review__about">— основатель Loftschool</div>
          </div>
          <div class="review reviews__right">
            <div class="review__avatar"><img class="review__img" src="/assets/img/zar.jpg" alt="avatar"></div>
            <div class="review__text">Этот код выдержет любые испытания. Только пожалуйста, не загружается сайт на слишком старых браузерах!
              <div class="icon-quote"></div>
            </div>
            <div class="review__author">Зар Захаров</div>
            <div class="review__about">— преподаватель</div>
          </div>
        </div>
      </section>
      <section class="section-feedback blur">
        <div class="blur__background"><img class="blur__img" src="/assets/img/1800_forest_works.jpg" alt="blur__img"></div>
        <div class="icon-list3"></div>
        <div class="icon-list1"></div>
        <div class="messagebox-wrapper">
          <div class="messagebox">
            <div class="messagebox__close">
              <svg class="icon icon--close">
                <use xlink:href="/assets/img/sprite.svg#close"></use>
              </svg>
            </div>
            <div class="messagebox__title">Сообщение</div>
            <div class="messagebox__text">Вы не ввели Имя!</div>
          </div>
        </div>
        <div class="feedback">
          <div class="blur__form"></div>
          <h2 class="feedback__title title-about--short">Связаться со мной</h2>
          <form class="form feedback__form" action="/works/mail" method="POST">
            <div class="form__group">
              <input class="input input--text" type="text" placeholder="Имя" name="name">
            </div>
            <div class="form__group">
              <input class="input input--text" type="text" placeholder="Email" name="email">
            </div>
            <div class="form__group form__group--textarea">
              <textarea class="textarea" name="subject" placeholder="Ваше сообщение"></textarea>
            </div>
            <div class="form__buttons">
              <button class="form__button form--submit" name="submit" type="submit">Отправить</button>
              <button class="form__button form--reset" name="clear" type="reset">Очистить</button>
            </div>
          </form>
        </div>
        <div class="section-feedback__arrow-up"><a class="arrow-up" href="#top">
            <svg class="icon icon--portf_arrow_up">
              <use xlink:href="/assets/img/sprite.svg#portf_arrow_up"></use>
            </svg></a></div>
      </section>
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