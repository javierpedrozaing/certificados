<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJavierCpitvcIngeniero6 extends Migration
{
    public function up()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->string('resolucion_nacional', 191)->nullable()->change();
            $table->date('fecha_resolucion_acional')->nullable()->change();
            $table->string('resolucion_seccional', 191)->nullable()->change();
            $table->date('fecha_resolucion_seccional')->nullable()->change();
            $table->string('tarjeta', 191)->nullable()->change();
            $table->string('estado', 191)->default('activo')->change();
            $table->string('estado_transaccion', 191)->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->string('resolucion_nacional', 191)->nullable(false)->change();
            $table->date('fecha_resolucion_acional')->nullable(false)->change();
            $table->string('resolucion_seccional', 191)->nullable(false)->change();
            $table->date('fecha_resolucion_seccional')->nullable(false)->change();
            $table->string('tarjeta', 191)->nullable(false)->change();
            $table->string('estado', 191)->default(null)->change();
            $table->string('estado_transaccion', 191)->nullable(false)->change();
        });
    }
}
