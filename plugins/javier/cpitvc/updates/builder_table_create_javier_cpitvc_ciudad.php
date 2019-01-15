<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJavierCpitvcCiudad extends Migration
{
    public function up()
    {
        Schema::create('javier_cpitvc_ciudad', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('nombre');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('javier_cpitvc_ciudad');
    }
}
