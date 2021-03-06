<?php namespace Javier\Cpitvc\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJavierCpitvcIngeniero11 extends Migration
{
    public function up()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->string('img_certificado', 191)->default('http://localhost:8000/storage/app/uploads/public/certificado.jpg')->change();
        });
    }
    
    public function down()
    {
        Schema::table('javier_cpitvc_ingeniero', function($table)
        {
            $table->string('img_certificado', 191)->default('http://localhost:8000/storage/app/uploads/public/certificado.png')->change();
        });
    }
}
