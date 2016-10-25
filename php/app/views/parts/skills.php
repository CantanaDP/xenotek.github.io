
<? if (!empty($items)): ?>

	<?
	foreach ($items as $key => $value) {
		$skills[$value['title']][] = $value;
	}
	?>

 <div class="skills">
 <? foreach ($skills as $title => $row):?>

 	<div class="skills__row">
 		<div class="skills__title"><?=$title?></div>


 		<? 	foreach ($row as $key => $skill):?>

 		<div class="skills__item">
 			<div class="chart">
 				<svg class="chart__svg">
 					<circle class="chart__pie" r="27" cx="55" cy="55" date-percent="<?=$skill['percent'];?>"></circle>
 				</svg>
 				<div class="chart__text"><?=$skill['skill'];?></div>
 			</div>
 		</div>

 		<? endforeach; ?>


 	</div>

 <? endforeach; ?>
 </div>


<? endif; ?>