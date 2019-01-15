<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJavierCpitvcIngeniero extends Migration
{
    public function up()
    {
        Schema::create('javier_cpitvc_ingeniero', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('matriculado');
            $table->string('nombres');
            $table->string('apellidos');
            $table->integer('identificacion');
            $table->integer('ciudad_id')->unsigned()->default(0);
            $table->string('numeromatricula');
            $table->string('resolucion_nacional');
            $table->date('fecha_resolucion_acional');
            $table->string('resolucion_seccional');
            $table->date('fecha_resolucion_seccional');
            $table->string('tarjeta');
            $table->string('estado');
            $table->boolean('sancionado');
            $table->string('direccionpersona');
            $table->string('telefono');
            $table->string('celular');
            $table->string('email');
            $table->string('web');
            $table->date('fecha_final_generacion');
            $table->boolean('generocertificado');
            $table->integer('pago_id')->unsigned()->default(0);
            $table->string('estado_transaccion');
            $table->integer('titulo_id')->unsigned()->default(0);
            $table->integer('universidad_id')->unsigned()->default(0);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('javier_cpitvc_ingeniero');
    }
}
