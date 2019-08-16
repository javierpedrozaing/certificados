<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJavierCpitvcIngeniero14 extends Migration
{
    public function up()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->dropColumn('titulo');
            $table->dropColumn('universidad');
        });
    }
    
    public function down()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->integer('titulo')->default(0);
            $table->integer('universidad')->default(0);
        });
    }
}
