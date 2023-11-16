<?php

use App\Models\Post;
use App\Libraries\MessageArt;

$id = $_REQUEST['id'];
$post = Post::find($id);
if ($post == null) {
    MessageArt::set_flash('message', ['type' => 'success', 'msg' => 'Khôi phục thành công']);
    header('location:index.php?option=page');
}
?>
<?php require_once('../views/backend/header.php'); ?>
<<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Chi Tiết Danh Mục</h1>
                </div>

            </div>
        </div>
    </section>

    <section class="content">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-12 text-right">


                        <a class="btn btn-sm btn-success" href="index.php?option=page">
                            <i class="fas fa-arrow-left"></i> Quay lại danh mục
                        </a>

                    </div>
                </div>
            </div>
            <div class="card-body">
                <?php
                ?>
                <table class="table table-bordered">
                    <tr>
                        <th>Tên trường</th>
                        <th>Gía trị</th>
                    </tr>
                    <tr>
                        <td> id</td>
                        <td>
                            <?= $post->id; ?>
                        </td>
                    </tr>

                    <tr>
                        <td> Tên danh mục</td>
                        <td>
                            <?= $post->title; ?>
                        </td>
                    </tr>
                    <tr>
                        <td> slug</td>
                        <td>
                            <?= $post->slug; ?>
                        </td>
                    </tr>
                    <tr>
                        <td> Chi tiết</td>
                        <td>
                            <?= $post->detail; ?>
                        </td>
                    </tr>

                </table>
            </div>
            <div class="card-footer">
                Footer
            </div>
        </div>
    </section>
    </div>
    <?php require_once('../views/backend/footer.php'); ?>