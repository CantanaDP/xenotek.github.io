
<? if (!empty($items)): ?>

  <nav class="blog__nav">
    <ul class="nav">
      <? foreach ($items as $key => $article):?>
      <li class="nav__item"><a class="nav__link" href="#link__<?=$key+1;?>"><?=$article['title'];?></a></li>
      <? endforeach; ?>
    </ul>
  </nav>


<? endif; ?>