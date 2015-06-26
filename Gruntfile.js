

module.exports = function(grunt) {
grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: { 
          config:'config/config.rb',               // Target options
        }
      }
    },/*
    htmlmin: {                            // task-name
      htmlmin: {
          files: {
               "build/index.min.html": ["index.html"]     //生成されるファイル　: ファイルのソース
        }
      }
    },
    cssmin: {                            // task-name
      cssmin: {
          files: {
               "build/style.min.css": ["build/style.css"]     //生成されるファイル　: ファイルのソース
        }
      }
    },
    uglify: {
      uglify:{                    
          files: {
             "build/test.min.js": ["js/test.js"]
        }
      }
    },
    imagemin: {
      imagemin: {
        files: {
           "image-min/*.png": ["image/*.png"]
        }
      }
    },*/
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

//to do タスクの切り分け（毎回minifyする必要性がないから）　→　コメントアウトで対応？？

grunt.registerTask('default', ['compass','browserSync','watch']);
};



