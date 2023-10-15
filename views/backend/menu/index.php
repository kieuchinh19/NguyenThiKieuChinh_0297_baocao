<?php

use App\Models\Menu;

$list = Menu::where('status', '!=', 0)->orderBy('created_at', 'DESC')->get();
?>
<?php require_once '../views/backend/header.php'; ?>

<div class="content-wrapper">
   <!-- Content Header (Page header) -->
   <section class="content-header">
      <div class="container-fluid">
         <div class="row mb-2">
            <div class="col-sm-6">
               <strong class="text-dark text-lg">DANH SÁCH MENU</strong>
            </div>
            <div class="col-sm-6">
               <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Tất cả menu</li>
               </ol>
            </div>
         </div>
      </div><!-- /.container-fluid -->
   </section>


   <!-- Main content -->
   <section class="content">

      <!-- Default box -->
      <div class="card">
         <div class="card-header">
            <div class="row">
               <div class="col-md-6">
                  <button class="btn btn-sm btn-danger">
                     <i class="fas fa-trash"></i>
                  </button>
               </div>
               <div class="col-md-6  text-right">
                  <a href="index.php?option=menu&cat=create" class="btn btn-sm btn-success">
                     <i class="fas fa-plus"></i>Thêm
                  </a>
                  <a href="index.php?option=menu&cat=trash" class="btn btn-sm btn-danger">
                     <i class="fas fa-trash"></i>Thùng rác
                  </a>
               </div>
            </div>
         </div>
         <div class="card-body">
            <table class="table table-bordered table-hover">
               <thead>
                  <tr>
                     <th class="text-center" style="width: 30px;">
                        <input type="checkbox" name="checkAll" />
                     </th>
                     <th class="text-center" style="width: 100px;">Tên menu</th>

                     <th> Liên kết</th>


                     <th class="text-center" style="width: 200px;">Chức năng</th>
                     <th class="text-center" style="width: 30px;">ID</th>
                  </tr>
               </thead>
               <tbody>
                  <?php foreach ($list as $row) : ?>
                     <tr>
                        <td class="text-center">
                           <input type="checkbox" name="checkID[]" value=" $row->id;?>" />
                        </td>
                        <td class="text-center">
                           <?= $row->name; ?>
                        </td>
                        <td>
                           <?= $row->link; ?>
                        </td>

                        <td class="text-center">
                           <?php if ($row->status == 1) : ?>
                              <a href="index.php?option=menu&cat=status&id=<?= $row->id; ?>" class="btn btn-sm btn-success">
                              <i class="fas fa-toggle-on"></i>
                              </a>
                           <?php else : ?>
                              <a href="index.php?option=menu&cat=status&id=<?= $row->id; ?>" class="btn btn-sm btn-danger">
                                 <i class="fas fa-toggle-off"></i>
                              </a>
                           <?php endif; ?>
                           <a href="index.php?option=menu&cat=show&id=<?= $row->id; ?>" class="btn btn-sm btn-info">
                              <i class="far fa-eye"></i>
                           </a>
                           <a href="index.php?option=menu&cat=edit&id=<?= $row->id; ?>" class="btn btn-sm btn-primary">
                              <i class="far fa-edit"></i>
                           </a>
                           <a href="index.php?option=menu&cat=delete&id=<?= $row->id; ?>" class="btn btn-sm btn-danger">
                              <i class="fas fa-trash"></i>
                           </a>

                        </td>
                        <td class="text-center"><?= $row->id; ?></td>
                     </tr>
                  <?php endforeach; ?>
               </tbody>
            </table>
         </div>
         <!-- /.card-body -->
         <div class="card-footer">

         </div>
         <!-- /.card-footer-->
      </div>
      <!-- /.card -->

   </section>
   <!-- /.content -->
</div>