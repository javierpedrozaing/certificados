<?php namespace Javier\Cpitvc\Models;

use Model;

/**
 * Model
 */
class Pago extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'javier_cpitvc_pago';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $belongsTo = [
        'ingeniero' => ['Javier\Cpitvc\Models\Ingeniero', 'key' => 'ingeniero_id']
    ];
}
