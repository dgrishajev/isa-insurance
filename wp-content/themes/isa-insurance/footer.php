<footer class="main-footer">

  <div class="footer-img-block">
    
    <img src="<?php echo get_template_directory_uri(); ?>/assets/build/img/jpg/footer-img.jpg" alt="" class="img-hidden">

    <div class="footer-inner-wrap">

      <h1 class="footer-title"><?php if ( is_front_page() ) echo 'Klik herunder for at blive forsikret'; else echo 'Click below to get insurance'; ?></h1>

      <a href="#" class="btn get-insurance get-insurance-footer"><?php if ( is_front_page() ) echo 'BLIV KUNDE'; else echo 'GET INSURED'; ?></a>

    </div>

  </div>

  <div class="footer-terms-wrap">
    <a href="<?php echo home_url(); ?>/Forsikringsbetingelser-10-06-16.pdf" class="terms" target="_blank"><?php if ( is_front_page() ) echo 'Forsikringsvilkår'; else echo 'Terms and conditions'; ?></a>
    <div class="langs-menu-wrap">
      <?php $langs = array(
       'container' => false,
       'theme_location' => 'langs-menu',
       'menu_class' => 'langs-menu'
      );
      wp_nav_menu($langs); ?>
    </div>
    <p class="rights"><?php if ( is_front_page() ) echo 'Alle rettigheder forbeholdt'; else echo 'All rights reserved'; ?><br>2016</p>
  </div>
  
  <?php wp_footer(); ?>

</footer>

</body>
</html>