<?php
use App\Models\category;
$list_category = category::where([['parent_id','=',0],['status','=',1]])->orderBy('sort_order','ASC')
->select('name','slug','id','image')->get();
?>
<?php require_once "views/frontend/header.php";?>
<?php require_once'views/frontend/mod-slider.php';?> 
   <section class="ttd-maincontent">
      <div class="container">
         <?php foreach($list_category as $cat): ?>
            <?php require "views/frontend/product-list-home.php";?>
        <?php endforeach; ?>
      </div>
   </section>
   <?php require_once "views/frontend/mod-lastpost.php"?>
   <?php require_once "views/frontend/footer.php";?>