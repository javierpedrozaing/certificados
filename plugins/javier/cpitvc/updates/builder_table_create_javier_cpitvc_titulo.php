<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJavierCpitvcTitulo extends Migration
{
    public function up()
    {
        Schema::create('javier_cpitvc_titulo', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('titulo');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('javier_cpitvc_titulo');
    }
}
