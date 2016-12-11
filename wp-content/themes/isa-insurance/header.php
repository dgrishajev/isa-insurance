<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ISA Insurance</title>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  
  <header class="main-header">

    <div class="header-logo">
      <a href="<?php if ( is_front_page() ) echo home_url(); else echo home_url() . '/en'; ?>" class="header-logo-link">
        <?php echo file_get_contents( get_template_directory_uri() . '/assets/build/img/svg/logo.svg' ) ?>
      </a>
    </div>

    <div class="header-menu-wrap">
    
      <?php

        if( is_front_page() ) {

          $menu = array(
           'container' => false,
           'theme_location' => 'top-dk-menu',
           'menu_class' => 'top-menu'
          );

        }

        else {

          $menu = array(
           'container' => false,
           'theme_location' => 'top-en-menu',
           'menu_class' => 'top-menu'
          );

        }

        wp_nav_menu($menu);

      ?>

    </div>
      
    <div class="hamburger-icon">
      <span class="hamburger-icon-bar"></span>
      <span class="hamburger-icon-bar"></span>
      <span class="hamburger-icon-bar"></span>
      <span class="hamburger-icon-bar"></span>
    </div>    

  </header>