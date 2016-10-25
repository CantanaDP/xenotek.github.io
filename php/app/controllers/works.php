<?

require_once 'controller.php';

class Works extends Controller{

	function mail() {

		$this->setModel();
		
		$class = new $this->_model();
		$items = $class->mail();

  }


};

