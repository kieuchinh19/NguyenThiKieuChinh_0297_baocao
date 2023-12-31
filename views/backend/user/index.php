<?php

use App\Models\User;


$list = User::where('status', '!=', 0)->orderBy('created_at', 'DESC')->get();

?>

<?php require_once "../views/backend/header.php"; ?>
<!-- CONTENT -->
<form action="index.php?option=user&cat=process" method="post" enctype="multipart/form-data">

   <div class="content-wrapper">
      <section class="content-header">
         <div class="container-fluid">
            <div class="row mb-2">
               <div class="col-sm-12">
                  <h1 class="d-inline">Tất cả thành viên</h1>
                  <a href="index.php?option=user&cat=create" class="btn btn-sm btn-primary">Thêm thành viên</a>
               </div>
            </div>
         </div>
      </section>
      <!-- Main content -->
      <section class="content">
         <div class="card">
            <div class="card-header">
               Noi dung
            </div>
            <div class="card-body">
               <table class="table table-bordered" id="mytable">
                  <thead>
                     <tr>
                        <th class="text-center" style="width:30px;">
                           <input type="checkbox">
                        </th>
                        <th class="text-center" style="width:100px;">Hình ảnh</th>
                        <th>Họ tên</th>
                        <th>Điện thoại</th>
                        <th>Email</th>
                        <th>Tên Đăng Nhập</th>
                        <th>Mật Khẩu</th>
                        <th>Địa Chỉ </th>

                     </tr>
                  </thead>
                  <tbody>
                     <?php if (count($list) > 0) : ?>
                        <?php foreach ($list as $item) : ?>
                           <tr class="datarow">
                              <td>
                                 <input type="checkbox">
                              </td>
                              <td>
                              <img class="img-fluid" src="../public/images/user/<?=$item->image;?>" alt="<?$item->image;?>">                                    </td>
                              </td>
                              <td>
                                 <div class="name">
                                    <?= $item->name; ?>

                                 </div>
                                 <div class="function_style">
                                    <a href="#">Hiện</a> |
                                    <a href="#">Chỉnh sửa</a> |
                                    <a href="user_show.html">Chi tiết</a> |
                                    <a href="#">Xoá</a>
                                 </div>
                              </td>
                              <td> <?= $item->phone; ?>
                              </td>
                              <td> <?= $item->email; ?>
                              </td>
                              <td> <?= $item->username; ?>
                              </td>
                              <td> <?= $item->password; ?>
                              </td>
                              <td> <?= $item->address; ?>
                              </td>

                              </td>

                           </tr>
                        <?php endforeach; ?>
                     <?php endif; ?>
                  </tbody>
               </table>
            </div>
         </div>
      </section>
   </div>
</form>
<!-- END CONTENT-->
<?php require_once "../views/backend/footer.php"; ?>