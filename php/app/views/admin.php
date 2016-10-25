<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Панель администрирования</title>
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
    <link rel="stylesheet" href="/assets/css/admin.css">
    <script src="/assets/js/foundation.js" defer></script>
    <script src="/assets/js/admin.js" defer>  </script><!--[if lt IE 9]>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->
  </head>
  <body class="body-admin">
    <div class="panel">
      <div class="panel__header">
        <div class="panel__header-title">Панель администрирования</div><a class="panel__header-link" href="/">Вернуться на сайт</a>
      </div>
      <div class="panel__body">
        <div class="panel__tabs">
          <ul class="tabs__controls">
            <li class="tabs__controls-item" data-content="1"><a class="tabs__controls-link" href="#">Обо мне</a></li>
            <li class="tabs__controls-item" data-content="2"><a class="tabs__controls-link" href="#">Блог</a></li>
            <li class="tabs__controls-item active" data-content="3"><a class="tabs__controls-link" href="#">Мои работы</a></li>
          </ul>
        </div>
        <div class="panel__content">
          <ul class="content">
            <li class="content__item content__item--1">
              <div class="content__title">Страница «Обо мне»</div>
              <div class="content__body">
                <form action="/admin/update" method="POST">
                  <? include 'parts/skills-admin.php' ?>
                  
                  <button class="btn" type="submit">Сохранить</button>
                </form>
              </div>
            </li>
            <li class="content__item content__item--2">
              <div class="content__title">Страница «Блог»</div>
              <div class="content__body">
                <form class="articles" action="/admin/addarticle" method="POST">
                  <div class="articles__title">Добавить запись</div>
                  <div class="form-group">
                    <input class="input-text input-text--articles" type="text" name="title" placeholder="Название">
                  </div>
                  <div class="form-group">
                    <input class="input-text input-text--articles" type="text" name="date" placeholder="Дата">
                  </div>
                  <div class="form-group">
                    <textarea class="textarea textarea--articles" type="text" name="content" placeholder="Содержание"></textarea>
                  </div>
                  <button class="btn" type="submit">Добавить</button>
                </form>
              </div>
            </li>
            <li class="content__item content__item--3 active">
              <div class="content__title">Страница «Мои работы»</div>
              <div class="content__body">
                <form class="works" action="/admin/addwork" method="POST">
                  <div class="works__title">Добавить работу</div>
                  <div class="form-group">
                    <input class="input-text input-text--works" type="text" name="name" placeholder="Название проекта">
                  </div>
                  <div class="form-group">
                    <input class="input-text input-text--works" type="text" name="description" placeholder="Технологии">
                  </div>
                  <div class="form-group">
                    <input class="input-text input-text--works" type="text" name="link" placeholder="Ссылка">
                  </div>
                  <div class="files">
                    <input class="files__input" id="file-img" type="file" name="image">
                    <label class="files__label" for="file-img">
                      <div class="files__button">Загрузить картинку</div>
                    </label>
                  </div>
                  <button class="btn" type="submit">Добавить</button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>