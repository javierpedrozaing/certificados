<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJavierCpitvcIngeniero3 extends Migration
{
    public function up()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->integer('ciudad')->unsigned()->default(0);
            $table->integer('pago')->unsigned()->default(0);
            $table->integer('titulo')->unsigned()->default(0);
            $table->integer('universidad')->unsigned()->default(0);
            $table->dropColumn('ciudad_id');
            $table->dropColumn('pago_id');
            $table->dropColumn('titulo_id');
            $table->dropColumn('universidad_id');
        });
    }
    
    public function down()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->dropColumn('ciudad');
            $table->dropColumn('pago');
            $table->dropColumn('titulo');
            $table->dropColumn('universidad');
            $table->integer('ciudad_id')->unsigned()->default(0);
            $table->integer('pago_id')->unsigned()->default(0);
            $table->integer('titulo_id')->unsigned()->default(0);
            $table->integer('universidad_id')->unsigned()->default(0);
        });
    }
}
