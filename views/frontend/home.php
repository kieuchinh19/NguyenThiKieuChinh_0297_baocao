<?php
use App\Models\category;
use App\Models\Product;

$list_category = category::where([['parent_id','=',0],['status','=',1]])->orderBy('sort_order','ASC')
->select('name','slug','id','image')->get();
?>
<?php require_once "views/frontend/header.php";?>
<?php require_once 'views/frontend/mod-slider.php';?> 
   <section class="ttd-maincontent">
   <div class="container">
    <div class="row product-home my-3">
      <div class="section-product-category">
        <?php foreach ($list_category as $row_cat) : ?>
          <?php
          $list_category_id = array();
          array_push($list_category_id, $row_cat->id);
          $list_category1 = Category::where([['status', '=', 1], ['parent_id', '=', $row_cat->id]])

            ->get();

          if (count($list_category1) > 0) {
            foreach ($list_category1 as $row_cat1) {
              array_push($list_category_id, $row_cat1->id);
              $list_category2 = Category::where([['status', '=', 1], ['parent_id', '=', $row_cat1->id]])

                ->get();
              if (count($list_category2) > 0) {
                foreach ($list_category2 as $row_cat2) {
                  array_push($list_category_id, $row_cat2->id);
                  $list_category2 = Category::where([['status', '=', 1], ['parent_id', '=', $row_cat2->id]])
                    ->get();
                  if (count($list_category) > 0) {
                    foreach ($list_category as $row_cat2) {
                      array_push($list_category_id, $row_cat->id);
                    }
                  }
                }
              }
            }
          }
          $product_list = Product::where('status', '=', 1)->whereIn('category_id', $list_category_id)
            ->orderBy('created_at', 'DESC')
            ->take(10)
            ->get();
          ?>
          <h2 class="text-center my-5 category-title">
            <a href="index.php?option=product&cat=<?= $row_cat->slug; ?>"><?= $row_cat->name; ?>
            </a>
          </h2>
          <div class="row">
            <?php foreach ($product_list as $product) : ?>

              <div class="col-md-3">
                <div class="card" style="width: 100%;">
                  <div class="product-image">
                    <a href="index.php?option=product&id=<?= $product->slug; ?>">
                      <img class="img-fluid" src="public/images/product/<?= $product->image; ?>" alt="<?= $product->image; ?>">
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="index.php?option=product&id=<?= $product->slug; ?>">
                        <?= $product->name; ?>
                      </a>
                    </h5>
                    <h4> Giá bán: <?= number_format($product->price); ?>đ</h4>
                  </div>
                  <div class="col-md">
                    <a href="index.php?option=cart&addcat=<?= $product->id; ?>" class="btn btn-sm btn-success">Thêm vào giỏ hàng</a>
                  </div>


                </div>
              </div>
            <?php endforeach; ?>
          </div>
          <?php endforeach; ?>
      </div>
    
    </div>
    
  </div>

  </div>
</section>
<?php require_once('views/frontend/footer.php'); ?>