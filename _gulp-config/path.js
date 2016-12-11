module.exports = {
    
  build: {
    css:  './wp-content/themes/isa-insurance/',
    font: './wp-content/themes/isa-insurance/assets/build/font/',
    img:  './wp-content/themes/isa-insurance/assets/build/img/',
    js:   './wp-content/themes/isa-insurance/assets/build/js/'
  },

  src: {
    php: ['./wp-content/themes/isa-insurance/**/*.php'],
    style: {
      path:         './wp-content/themes/isa-insurance/assets/src/style/style.scss',
      includePaths: ['./wp-content/themes/isa-insurance/assets/src/style/*.scss']
    },
    font: './wp-content/themes/isa-insurance/assets/src/font/*.*',
    img:  './wp-content/themes/isa-insurance/assets/src/img/**/*.{svg,png,jpg}',
    js:   './wp-content/themes/isa-insurance/assets/src/js/app.js'
  },

  watch: {
    php:   './wp-content/themes/isa-insurance/**/*.php',
    style: './wp-content/themes/isa-insurance/assets/src/style/*.scss',
    font:  './wp-content/themes/isa-insurance/assets/src/font/*.*',
    img:   './wp-content/themes/isa-insurance/assets/src/img/**/*.{svg,png,jpg}',
    js:    './wp-content/themes/isa-insurance/assets/src/js/**/*.js'
  }

};