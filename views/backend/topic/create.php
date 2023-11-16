<?php

use App\Models\Topic;

$list = Topic::where('status', '!=', '0')->get();
$html_parent_id = '';
$html_sort_order = '';
foreach ($list as $item) 
{
    $html_parent_id .="<option value='". $item->id ."'>" . $item->name . "<?option>";
    $html_sort_order .="<option value='". ($item->ssort_order+1) ."'>Sau: " . $item->name . "<?option>";

}
?>
<?php require_once('../views/backend/header.php'); ?>
<form action="index.php?option=topic&cat=process" method="post" enctype="multipart/form-data">
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Thêm Chủ đề</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="index.php">Bảng điều khiển</a></li>
                            <li class="breadcrumb-item active">Thêm chủ đề</li>
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
                            <button name="THEM" type="submit" class="btn btn-sm btn-success">
                                <i class="fas fa-save"></i> Lưu[Thêm]
                            </button>
                            <a class="btn btn-sm btn-info" href="index.php?option=topic">
                                <i class="fas fa-arrow-left"></i> Quay về danh sách
                            </a>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="mb-3">
                                <label for="name">Tên chủ đề</label>
                                <input name="name" id="name" type="text" class="form-control" required placeholder="Tên chủ đề">
                            </div>
                            <div class="mb-3">
                                <label for="metadesc">Mô tả(SEO)</label>
                                <textarea name="metadesc" id="metadesc" class="form-control" required required placeholder="Mô tả"></textarea>
                               
                            </div>
                            <div class="mb-3">
                                <label for="metakey">Từ khoá(SEO)</label>
                                <textarea name="metakey" id="metakey" class="form-control" required required placeholder="Từ khóa"></textarea>
                               
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label for="parent_id">Chủ đề cha</label>
                                <select id="parent_id" name="parent_id" class="form-control">
                                    <option value="0">--Chọn cấp cha--</option>
                                    <?= $html_parent_id; ?>
                                </select>
                            </div>
                    
                            <div class="mb-3">
                                <label for="image">Hình ảnh</label>
                                <input name="image" id="image" type="file" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label for="status">Trạng thái</label>
                                <select id="status" name="status" class="form-control">
                                    <option value="2">Chưa xuất bản</option>
                                    <option value="2">Xuất bản</option>
                                   
                                </select>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div class="card-footer">
                <div class="row">
                        <div class="col-md-12 text-right">
                            <button name="THEM" type="submit" class="btn btn-sm btn-success">
                                <i class="fas fa-save"></i> Lưu[Thêm]
                            </button>
                            <a class="btn btn-sm btn-info" href="index.php?option=topic">
                                <i class="fas fa-arrow-left"></i> Quay về danh sách
                            </a>

                </div>
            </div>
        </section>
    </div>
</form>
<?php require_once('../views/backend/footer.php'); ?>