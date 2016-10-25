
<? if (!empty($items)): ?>

  <? foreach ($items as $key => $article):?>
  <div class="blog__section">
    <article class="blog__article">
      <header class="blog__article-header"> 
        <h2 class="blog__title" id="link__<?=$key+1;?>"><?=$article['title'];?></h2>
        <div class="blog__publish-date"><?=$article['date'];?></div>
      </header>
      <div class="blog__content">
        <?=$article['content'];?>
      </div>
    </article>
  </div>
  <? endforeach; ?>

<? endif; ?>