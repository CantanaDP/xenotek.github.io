<?


class Generate_Views
{
	
	function init()
	{
		$dir = 'app/views/templates';

		foreach (glob($dir.'/*.html') as $file) {
			
			$html = file_get_contents($file);

			//Удаление контента между тэгами delete
			$html = preg_replace("|<!--\s*?{delete}\s*?-->.+?<!--\s*?{/delete}\s*?-->|is", "", $html);

			//Замена <!-- {{parts/section-slider}} --> на <? include 'parts/section-slider.php' 
			$html = preg_replace("|<!--\s*?\{\{\s*?(.+?)\s*?}}\s*?-->|i", "<? include '$1.php' ?>", $html);
			
			$php_file = basename($file, ".html").'.php';
			file_put_contents('app/views/'.$php_file, $html);
		}
	}
}

/*

код ниже
<!-- {{parts/section-slider}} -->

будет заменен на
<? include 'parts/section-slider.php' ?>


код между тэгами delete будет удален
<!-- {delete} -->
asdasdasda sdfsaa saf
<!-- {/delete} -->

 */