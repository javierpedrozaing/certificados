<?php namespace Javier\Cpitvc\Models;

use Model;

/**
 * Model
 */
class Ingeniero extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'javier_cpitvc_ingeniero';
    
    protected $fillable = ['nombres', 'apellidos', 'matriculado', 'identificacion', 'numeromatricula', 'resolucion_nacional', 'fecha_resolucion_acional', 'resolucion_seccional', 'fecha_resolucion_seccional', 'tarjeta', 'estado', 'sancionado', 'direccionpersona', 'telefono', 'celular', 'email', 'web', 'ciudad_id', 'titulo_id', 'universidad_id'];
    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    
    public $belongsTo = [
        'ciudad' => [ 'Javier\Cpitvc\Models\Ciudad', 'key' => 'ciudad_id'],                        
        'titulo' => ['Javier\Cpitvc\Models\Titulo', 'key' => 'titulo_id'],
        'universidad' => ['Javier\Cpitvc\Models\Universidad', 'key' => 'universidad_id']
    ];

    public $attachOne = [
        'img' => 'System\Models\File'
    ];

    public $hasMany = [
        'pago' => ['Javier\Cpitvc\Models\Pago']
    ];
    
}
