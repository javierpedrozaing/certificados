<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJavierCpitvcIngeniero4 extends Migration
{
    public function up()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->integer('ciudad')->unsigned(false)->change();
            $table->integer('pago')->unsigned(false)->change();
            $table->integer('titulo')->unsigned(false)->change();
            $table->integer('universidad')->unsigned(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->integer('ciudad')->unsigned()->change();
            $table->integer('pago')->unsigned()->change();
            $table->integer('titulo')->unsigned()->change();
            $table->integer('universidad')->unsigned()->change();
        });
    }
}
