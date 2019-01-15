<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJavierCpitvcPago extends Migration
{
    public function up()
    {
        Schema::create('javier_cpitvc_pago', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('idtransaccion');
            $table->integer('ingeniero_id')->unsigned();
            $table->string('estado_transaccion');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('javier_cpitvc_pago');
    }
}
