<?php

add_theme_support('menus');

function isa_insurance_register_theme_menus() {
  register_nav_menus(
    array(
      'top-dk-menu' => __('Top Danish Menu'),
      'top-en-menu' => __('Top English Menu'),
      'langs-menu' => __('Languages Menu')
    )
  );
}

add_action('init', 'isa_insurance_register_theme_menus');

function isa_insurance_theme_styles() {
  wp_enqueue_style('style_css', get_template_directory_uri() . '/style.css');
}

add_action('wp_enqueue_scripts', 'isa_insurance_theme_styles');

function isa_insurance_theme_js() {
  wp_enqueue_script('script_js', get_template_directory_uri() . '/assets/build/js/app.js', array('jquery'), '', true);
}

add_action('wp_enqueue_scripts', 'isa_insurance_theme_js');

?>