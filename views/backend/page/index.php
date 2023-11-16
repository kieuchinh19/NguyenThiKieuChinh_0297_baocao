<?php

use App\Libraries\MessageArt;
use App\Models\Post;
use App\Models\Topic;


$list = Post::all();
$list = Post::where('status', '!=', '0')->orderBy('created_at', 'DESC')->get();
?>
<?php require_once('../views/backend/header.php'); ?>
<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1> TRANG ĐƠN</h1>
                </div>

            </div>
        </div>
    </section>
    <section class="content">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-12 text-right">
                        <a class="btn btn-sm btn-success" href="index.php?option=page&cat=create">
                            <i class="fas fa-plus"></i> Thêm
                        </a>
                        <a class="btn btn-sm btn-danger" href="index.php?option=page&cat=trash">
                            <i class="fas fa-trash"></i> Thùng rác
                        </a>

                    </div>
                </div>
            </div>
            <div class="card-body">

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center" style="width:20px">#</th>
                            <th class="text-center" style="width:50px">Hình</th>
                            <th class="text-center" style="width:200px">Tiêu đề bài viết</th>

                            <th class="text-center" style="width:150px">Slug</th>
                            <th class="text-center" style="width:200px">Chức năng</th>
                            <th class="text-center" style="width:160px">Ngày tạo</th>
                            <th class="text-center" style="width:20px">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($list as $row): ?>
                            <tr>
                                <td class="text-center"><input type="checkbox"></td>
                                <td class="text-center">
                                    <img src="../public/images/post/<?php echo $row['image']; ?>" class="img-fluid"
                                        alt="<?php echo $row['image']; ?>">

                                </td>
                                <td>
                                    <?= $row['title'] ?>
                                </td>
                                <td class="text-center">
                                    <?= $row['slug'] ?>
                                </td>
                                <td class="text-center">
                                    <?php if ($row['status'] == 1): ?>
                                        <a class="btn btn-sm btn-success"
                                            href="index.php?option=page&cat=status&id=<?= $row['id'] ?>">
                                            <i class="fas fa-toggle-on"></i> </a>
                                    <?php else: ?>
                                        <a class="btn btn-sm btn-danger"
                                            href="index.php?option=page&cat=status&id=<?= $row['id'] ?>">
                                            <i class="fas fa-toggle-on"></i> </a>
                                    <?php endif; ?>

                                    <a class="btn btn-sm btn-info"
                                        href="index.php?option=page&cat=show&id=<?= $row['id'] ?>">
                                        <i class="fas fa-eye"></i></a>
                                    <a class="btn btn-sm btn-primary"
                                        href="index.php?option=page&cat=edit&id=<?= $row['id'] ?>">
                                        <i class="fas fa-edit"></i> </a>
                                    <a class="btn btn-sm btn-danger"
                                        href="index.php?option=page&cat=delete&id=<?= $row['id'] ?>">
                                        <i class="fas fa-trash"></i> </a>

                                </td>
                                <td class="text-center">
                                    <?= $row['created_at'] ?>
                                </td>
                                <td class="text-center">
                                    <?= $row['id'] ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</div>
<?php require_once('../views/backend/footer.php'); ?>