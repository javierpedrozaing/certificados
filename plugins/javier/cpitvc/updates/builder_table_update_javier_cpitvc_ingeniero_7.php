<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJavierCpitvcIngeniero7 extends Migration
{
    public function up()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->string('direccionpersona', 191)->nullable()->change();
            $table->string('telefono', 191)->nullable()->change();
            $table->string('celular', 191)->nullable()->change();
            $table->string('email', 191)->nullable()->change();
            $table->string('web', 191)->nullable()->change();
            $table->date('fecha_final_generacion')->nullable()->change();
            $table->boolean('generocertificado')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->string('direccionpersona', 191)->nullable(false)->change();
            $table->string('telefono', 191)->nullable(false)->change();
            $table->string('celular', 191)->nullable(false)->change();
            $table->string('email', 191)->nullable(false)->change();
            $table->string('web', 191)->nullable(false)->change();
            $table->date('fecha_final_generacion')->nullable(false)->change();
            $table->boolean('generocertificado')->nullable(false)->change();
        });
    }
}
