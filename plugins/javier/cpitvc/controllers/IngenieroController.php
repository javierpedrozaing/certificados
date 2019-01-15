<?php namespace Javier\Cpitvc\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class IngenieroController extends Controller
{
    public $implement = [
        'Backend\Behaviors\ListController',
        'Backend\Behaviors\FormController',
        'Backend.Behaviors.ImportExportController'
    ];
    public $importExportConfig = 'config_import_export.yaml';
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Javier.Cpitvc', 'main-menu-ingeniero');
    }
}
