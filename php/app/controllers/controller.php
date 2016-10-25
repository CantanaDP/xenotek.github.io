<?

class Controller{
	
	protected $_controller;
	protected $_model;
	protected $_action;

	//Конструктор контроллера
	public function __construct($controller_name = null, $action = 'view')	{

		if (!$controller_name) {
			require_once($_SERVER['DOCUMENT_ROOT'].'/app/views/unknown.php');
			return;
		}

		$this->_controller = $controller_name;
		$this->_model = 'Model_'.strtoupper($controller_name[0]).substr($controller_name, 1);
		$this->_action = $action;

		if ( method_exists($this, $action) ){
			$this->$action();
		}

	}//__construct

	public function view() {

		$this->setModel();
		
		$class = new $this->_model();
		$items = $class->get();

		require_once($_SERVER['DOCUMENT_ROOT'].'/app/views/'.$this->_controller.'.php');

  }

  public function setModel() {
  	require_once($_SERVER['DOCUMENT_ROOT'].'/app/models/model_'.$this->_controller.'.php');
  }
}

