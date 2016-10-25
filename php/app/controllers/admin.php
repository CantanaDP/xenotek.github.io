<?

require_once 'controller.php';

class Admin extends Controller{

	function update() {

		$this->setModel();
		
		$class = new $this->_model();
		$items = $class->update_skills();

  }

	function addarticle() {

		$this->setModel();
		
		$class = new $this->_model();
		$items = $class->addarticle();

  }

	function addwork() {

		$this->setModel();
		
		$class = new $this->_model();
		$items = $class->addwork();

  }

	function uploadimage() {

		print_r($_POST);
		echo "<br>";
		exit;

		
  }



};

