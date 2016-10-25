
<? if (!empty($items)): ?>

	<?
	foreach ($items as $key => $value) {
		$skills[$value['title']][] = $value;
	}
	?>

<ul class="skills-blocks">

	<? foreach ($skills as $title => $row):?>

	<li class="skills-blocks__item">
		<div class="skills-blocks__title"><?=$title?></div>

		<ul class="skills">

			<? 	foreach ($row as $key => $skill):?>
			<li class="skills__item">
				<div class="skills__title"><?=$skill['skill'];?></div>
				<input name="percent[<?=$skill['id'];?>]" value="<?=$skill['percent'];?>" class="input-text input-text--skills" type="text" maxlength="3"><span class="skills__unit">%</span>
			</li>
			 <? endforeach; ?>

		</ul>

	</li>

	 <? endforeach; ?>

</ul>


<? endif; ?>