module.exports = function (grunt) {
  
  grunt.initConfig({
    concat: {
      dist: {
        src: ['public/scripts/app.js','public/scripts/controllers/*.js'],
        dest: 'public/scripts/dist.js'
      }
    },
    watch: {
      scripts: {
        files: ['public/scripts/**/*.js'],
        tasks: ['concat'],
        options: {
          nospawn: true
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['concat']);
}
