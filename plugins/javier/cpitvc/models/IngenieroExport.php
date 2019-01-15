<?php
namespace Javier\Cpitvc\Models;
use Model;


class IngenieroExport extends \Backend\Models\ExportModel
{
    public function exportData($columns, $sessionKey = null)
    {
        $ingenieros = Ingeniero::all();
        $ingenieros->each(function($subscriber) use ($columns) {
            $subscriber->addVisible($columns);
        });
        return $ingenieros->toArray();
    }
}

?>