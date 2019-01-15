<?php namespace Javier\Cpitvc\Models;

use Model;

/**
 * Model
 */
class Universidad extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'javier_cpitvc_universidad';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $hasMany = [
        'ingenieros' => ['Javier\Cpitvc\Models\Ingeniero']
    ];
}
