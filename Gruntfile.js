

module.exports = function(grunt) {
grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: { 
          config:'config/config.rb',               // Target options
        }
      }
    },
    cssmin: {                            // task-name
      cssmin: {
          files: {
               "stylesheets/sp/style.min.css": ["stylesheets/sp/style.css"]     //生成されるファイル　: ファイルのソース
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : ['stylesheets/sp/*.css','*.html']
                 },
                options: {
                    watchTask: true,
                    server:'./'
                }
            }
      },
    watch:{
      options: {
      },
      files:['*.html','sass/sp/*.scss'],
      tasks:['compass']
    }
});


//plugin

grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync'); 

//task

grunt.registerTask('default', ['compass','cssmin','browserSync','watch']);
};



