<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Сайт-портфолио</title>
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
  <body class="body-welcome">
    <div class="Background">
      <canvas class="Background-canvas"></canvas>
    </div>
    <div class="preloader">
      <div class="preloader__spinner">
        <div class="preloader__animation"></div>
        <div class="preloader__percents">0%</div>
      </div>
    </div>
    <div class="wrapper" id="authorize">
      <div class="authorize">
        <div class="authorize__wrapper"><a class="authorize__link" href="#authorize">Авторизоваться</a></div>
      </div>
      <div class="welcome">
        <div class="messagebox-wrapper">
          <div class="messagebox">
            <div class="messagebox__close">
              <svg class="icon icon--close">
                <use xlink:href="/assets/img/sprite.svg#close"></use>
              </svg>
            </div>
            <div class="messagebox__title">Сообщение</div>
            <div class="messagebox__text"> </div>
          </div>
        </div>
        <div class="win front">
          <div class="welcome__box">
            <div class="welcome__body">
              <div class="about">
                <div class="about__avatar"><img class="about__img" src="assets/img/avatar.jpg" alt="avatar"></div>
                <h1 class="about__author">Корепанов Иван</h1>
                <div class="about__text">Личный сайт веб разработчика</div>
                <div class="socials socials--opacity05"><a class="socials__link" href="https://vk.com/xenotek" target="_blank">
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
              <ul class="welcome-menu">
                <li class="welcome-menu__item"><a class="welcome-menu__link" href="works.html">Мои работы</a></li>
                <li class="welcome-menu__item"><a class="welcome-menu__link" href="about.html">Обо мне</a></li>
                <li class="welcome-menu__item"><a class="welcome-menu__link" href="blog.html">Блог</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="win back">
          <div class="welcome__box">
            <div class="welcome__body welcome__body--authorize">
              <div class="close"><a href="#">
                  <svg class="icon icon--close">
                    <use xlink:href="/assets/img/sprite.svg#close"></use>
                  </svg></a></div>
              <div class="title title--underline">Авторизуйтесь</div>
              <form class="form form--authorize" action="#" method="POST">
                <div class="form__group">
                  <div class="icon-wrapper">
                    <svg class="icon icon--login">
                      <use xlink:href="/assets/img/sprite.svg#login"></use>
                    </svg>
                  </div>
                  <input class="input input--text" type="text" placeholder="Логин" name="login">
                </div>
                <div class="form__group">
                  <div class="icon-wrapper">
                    <svg class="icon icon--password">
                      <use xlink:href="/assets/img/sprite.svg#password"></use>
                    </svg>
                  </div>
                  <input class="input input--text" type="text" placeholder="Пароль" name="password">
                </div>
                <div class="check">
                  <label class="check__label">
                    <input class="check__checkbox" value="no" type="checkbox" name="robot"><span class="check__wrap">
                      <svg class="icon icon--check">
                        <use xlink:href="/assets/img/sprite.svg#check"></use>
                      </svg></span><span class="check__text">Я человек</span>
                  </label>
                </div>
                <div class="form__question">Вы точно не робот?</div>
                <div class="radiobox">
                  <input class="radiobox__input radiobox__input--yes" id="yes" checked type="radio" name="answer" value="yes">
                  <label class="radiobox__label radiobox__label--first" for="yes"><span class="radiobox__text">Да</span></label>
                  <input class="radiobox__input" id="notsure" type="radio" name="answer">
                  <label class="radiobox__label" for="notsure"> <span class="radiobox__text">Не уверен</span></label>
                </div>
                <div class="form__buttons"><a class="form__button" href="#">На главную</a>
                  <button class="form__button form__submit" name="enter" type="submit">Войти</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-welcome">
      <div class="footer__copyright"> <span class="footer__media">© Корепанов Иван </span><span class="footer__media-hide">| </span><span class="footer__media-line">создано с любовью в LoftSchool | 2016</span></div>
    </footer>
    <script src="/assets/js/water.js"></script>
  </body>
</html>