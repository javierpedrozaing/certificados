<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJavierCpitvcIngeniero extends Migration
{
    public function up()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->integer('ciudad_id')->default(0);
            $table->integer('titulo_id')->default(0);
            $table->integer('universidad_id')->default(0);
            $table->dropColumn('ciudad');
            $table->dropColumn('titulo');
            $table->dropColumn('universidad');
        });
    }
    
    public function down()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->dropColumn('ciudad_id');
            $table->dropColumn('titulo_id');
            $table->dropColumn('universidad_id');
            $table->integer('ciudad')->default(0);
            $table->integer('titulo')->default(0);
            $table->integer('universidad')->default(0);
        });
    }
}
