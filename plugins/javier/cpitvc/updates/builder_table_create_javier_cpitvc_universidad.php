<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJavierCpitvcUniversidad extends Migration
{
    public function up()
    {
        Schema::create('javier_cpitvc_universidad', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('nombre');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('javier_cpitvc_universidad');
    }
}
