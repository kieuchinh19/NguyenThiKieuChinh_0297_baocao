<?php

use App\Models\Orderdetail;

$list = Orderdetail ::all();

?>
<?php require_once('../views/backend/header.php'); ?>

<form action="index.php?option=category&cat=process" method="post" enctype="multipart/form-data">
<div class="content-wrapper">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Tất Cả Danh Mục</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Blank Page</li>
          </ol>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>

  <section class="content">

    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Title</h3>

        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên Danh Mục<command>
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th>ID</th>
            </tr>

          </thead>
          <tbody>
            <?php foreach ($list as $orderdetail) : ?>

              <tr>
                <td>
                  <input type="checkbox">

                </td>
                <td><?= $orderdetail['name'] ?></td>
                <td></td>
                <td></td>
                <td></td>
                <td><?= $orderdetail['id'] ?></td>
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
<?php require_once('../views/backend/footer.php'); ?>