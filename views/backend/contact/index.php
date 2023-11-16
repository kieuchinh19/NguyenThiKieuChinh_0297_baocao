<?php

use App\Models\contact;

//SELECT * FROM contact WHERE status!=0 Order BY create_at DESC
$list = contact::where('status', '!=',0)->orderBy('Created_at', 'DESC')->get();
?>
<?php require_once '../views/backend/header.php'; ?>
      <!-- CONTENT -->
      <div class="content-wrapper">
         <section class="content-header">
            <div class="container-fluid">
               <div class="row mb-2">
                  <div class="col-sm-12">
                     <h1 class="d-inline">Tất cả liên hệ</h1>
                  </div>
               </div>
            </div>
         </section>
         <!-- Main content -->
         <section class="content">
            <div class="card">
               <div class="card-header text-right">
                  Noi dung
               </div>
               <div class="card-body">
                  <table class="table table-bordered" id="mytable">
                     <thead>
                        <tr>
                           <th class="text-center" style="width:30px;">
                              <input type="checkbox">
                           </th>
                           <th>Họ tên</th>
                           <th>Điện thoại</th>
                           <th>Email</th>
                           <th>Tiêu đề</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr class="datarow">
                           <td>
                              <input type="checkbox">
                           </td>
                           <td>
                              <div class="name">
                                 Nguyễn Thị Kiều Chinh
                              </div>
                              <div class="function_style">
                                 <a href="#">Hiện</a> |
                                 <a href="#">Trả lời</a> |
                                 <a href="../backend/brand_show.html">Chi tiết</a> |
                                 <a href="#">Xoá</a>
                              </div>
                           </td>
                           <td>0987688892</td>
                           <td>kieuchinh@gmail.com</td>
                           <td>Tiêu đề</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </section>
      </div>
      <!-- END CONTENT-->
      <?php require_once '../views/backend/footer.php'; ?>