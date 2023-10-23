<?php

use App\Models\Brand;

$mod_list_Brand = Brand::where('status','=',1)
   ->orderBy('sort_order','ASC')
   ->select('name','slug')
   ->get();
?>
<ul class="list-group mb-3 list-brnad">
   <li class="list-group-item bg-main py-3">Danh mục Thương Hiệu</li>
   <?php foreach($mod_list_Brand as $mod_row_brand): ?>
   <li class="list-group-item">
      <a href="index.php?option=brand&cat=<?= $mod_row_brand->slug;?>"><?= $mod_row_brand->name;?></a>
   </li>
   <?php endforeach; ?>
</ul>