

	<? if (!empty($items)): ?>
		
		<div class="slider" current="1">

      <div class="slider__images">

    	<? foreach ($items as $key => $work):?>
				<img class="slider__image" nomer="<?=$key+1;?>" src="/assets/img/works/<?=$work['img'];?>" alt="slider">
    	<? endforeach; ?>

      </div>


      <div class="slider__description">

        <? foreach ($items as $key => $work):?>

				<div class="description" nomer="<?=$key+1;?>">
	        <h4 class="description__title"><?=$work['title'];?></h4>
	        <div class="description__text"><?=$work['description'];?></div><a class="description__link" href="<?=$work['link'];?>" target="_blank">
	          <svg class="icon icon--link">
	            <use xlink:href="/assets/img/sprite.svg#link"></use>
	          </svg><span>Посмотреть сайт</span></a>
	      </div>

				<? endforeach; ?>

      </div>


      <div class="slider__buttons">
        <div class="slider__button slider__button--prev">
          <div class="slider__thumbs">

          	<? foreach ($items as $key => $work):?>
						<div class="slider__thumb" nomer="<?=$key+1;?>"></div>
      			<? endforeach; ?>

          </div>
          <svg class="icon icon--portf_arrow_down">
            <use xlink:href="/assets/img/sprite.svg#portf_arrow_down"></use>
          </svg>
        </div>
        <div class="slider__button slider__button--next">
          <div class="slider__thumbs">

          	<? foreach ($items as $key => $work):?>
						<div class="slider__thumb" nomer="<?=$key+1;?>"></div>
      			<? endforeach; ?>
      			
          </div>
          <svg class="icon icon--portf_arrow_up">
            <use xlink:href="/assets/img/sprite.svg#portf_arrow_up"></use>
          </svg>
        </div>
      </div>
    </div>

	<? else: ?>

		<div class="slider" current="1">
          <div class="slider__images"><img class="slider__image" nomer="1" src="/assets/img/works/work1.jpg" alt="slider"><img class="slider__image" nomer="2" src="/assets/img/works/work2.jpg" alt="slider"><img class="slider__image" nomer="3" src="/assets/img/works/work3.jpg" alt="slider"></div>
          <div class="slider__description">
            <div class="description" nomer="1">
              <h4 class="description__title">Сайт школы онлайн Образования</h4>
              <div class="description__text">HTML, CSS, JAVASCRIPT</div><a class="description__link" href="https://loftschool.com/" target="_blank">
                <svg class="icon icon--link">
                  <use xlink:href="/assets/img/sprite.svg#link"></use>
                </svg><span>Посмотреть сайт</span></a>
            </div>
            <div class="description" nomer="2">
              <h4 class="description__title">Сайт 2</h4>
              <div class="description__text">HTML, CSS, JAVASCRIPT</div><a class="description__link" href="https://loftschool.com/" target="_blank">
                <svg class="icon icon--link">
                  <use xlink:href="/assets/img/sprite.svg#link"></use>
                </svg><span>Посмотреть сайт</span></a>
            </div>
            <div class="description" nomer="3">
              <h4 class="description__title">Сайт 333</h4>
              <div class="description__text">HTML, CSS, JAVASCRIPT</div><a class="description__link" href="https://loftschool.com/" target="_blank">
                <svg class="icon icon--link">
                  <use xlink:href="/assets/img/sprite.svg#link"></use>
                </svg><span>Посмотреть сайт</span></a>
            </div>
          </div>
          <div class="slider__buttons">
            <div class="slider__button slider__button--prev">
              <div class="slider__thumbs">
                <div class="slider__thumb" nomer="1"></div>
                <div class="slider__thumb" nomer="2"></div>
                <div class="slider__thumb" nomer="3"></div>
              </div>
              <svg class="icon icon--portf_arrow_down">
                <use xlink:href="/assets/img/sprite.svg#portf_arrow_down"></use>
              </svg>
            </div>
            <div class="slider__button slider__button--next">
              <div class="slider__thumbs">
                <div class="slider__thumb" nomer="1"></div>
                <div class="slider__thumb" nomer="2"></div>
                <div class="slider__thumb" nomer="3"></div>
              </div>
              <svg class="icon icon--portf_arrow_up">
                <use xlink:href="/assets/img/sprite.svg#portf_arrow_up"></use>
              </svg>
            </div>
          </div>
        </div>


	<? endif; ?>