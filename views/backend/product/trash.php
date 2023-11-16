<?php

use App\Models\Product;

$list = Product::join('category', "category.id", "product.category_id")
  ->join("brand", "brand.id", "product.brand_id")
  ->where("product.status", '=', '0')
  ->orderBy("product.created_at", 'DESC')
  ->select("product.*", "category.name as category_name", "brand.name as brand_name")
  ->get();

?>
<?php require_once('../views/backend/header.php'); ?>
<div class="content-wrapper">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Thùng rác sản phẩm</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="index.php">Bảng điều khiển</a></li>
            <li class="breadcrumb-item active">thùng rác sản phẩm</li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  <section class="content">

    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-md-12 text-right">

            <a class="btn btn-sm btn-info" href="index.php?option=product">
              <i class="fas fa-arrow-left"></i> Quay về danh sách
            </a>
          </div>
        </div>

      </div>
      <div class="card-body">
        <table class="table table-bordered" id="myTable">
          <thead>
            <tr>
              <th class="text-center" style="width: 20px;">#</th>
              <th class="text-center" style="width: 90px;">Hình</th>
              <th>Tên sản phẩm </th>
              <th>Danh mục </th>
              <th>Thương hiệu </th>
              <th class="text-center" style="width:100px;">Ngày tạo</th>
              <th class="text-center" style="width:200px;">Chức năng</th>
              <th class="text-center" style="width:20px;">ID</th>
            </tr>

          </thead>
          <tbody>
            <?php foreach ($list as $row): ?>

              <tr>

                <td class="text-center">
                  <input type="checkbox">

                </td>
                <td class="text-center">
                  <img src="../public/images/product/<?php echo $row['image']; ?>" class="img-fluid"
                    alt="<?php echo $row['image']; ?>">

                </td>
                <td>
                  <?= $row['name'] ?>
                </td>
                <td>
                  <?= $row['category_name'] ?>
                </td>
                <td>
                  <?= $row['brand_name'] ?>
                </td>
                <td class="text-center">
                  <?= $row['created_at'] ?>
                </td>
                <td class="text-center">


                  <a class="btn btn-sm btn-info" href="index.php?option=product&cat=restore&id=<?= $row['id'] ?>">
                    <i class="fas fa-undo-alt"></i>
                  </a>

                  <a class="btn btn-sm btn-danger" href="index.php?option=product&cat=destroy&id=<?= $row['id'] ?>">
                    <i class="fas fa-trash"></i>
                  </a>

                </td>
                <td class="text-center">
                  <?= $row['id'] ?>
                </td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        Footer
      </div>
    </div>
  </section>
</div>
<script>
  $(document).ready(function () {
    $('#myTable').DataTable();
  });
</script>
<?php require_once('../views/backend/footer.php'); ?>