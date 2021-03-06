<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJavierCpitvcPago4 extends Migration
{
    public function up()
    {
        Schema::table('javier_cpitvc_pago', function($table)
        {
            $table->renameColumn('ingeniero', 'ingeniero_id');
        });
    }
    
    public function down()
    {
        Schema::table('javier_cpitvc_pago', function($table)
        {
            $table->renameColumn('ingeniero_id', 'ingeniero');
        });
    }
}
