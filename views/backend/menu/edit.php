<?php

use App\Models\Menu;
$id=$_REQUEST['id'];
$row =Menu::find($id);

$list = Menu::where('status', '!=', '0')->get();
$html_parent_id = '';
$html_sort_order = '';
foreach ($list as $item) 
{
    if($item->id==$row->parent_id)
    {
        $html_parent_id .="<option selected value='". $item->id ."'>" . $item->name . "<?option>";
    }else
    {
        $html_parent_id .="<option value='". $item->id ."'>" . $item->name . "<?option>";
    }
    if($item->sort_order==$row->sort_order){
        $html_sort_order .="<option selected value='". ($item->sort_order+1) ."'>Sau: " . $item->name . "<?option>";
    }
   
    $html_sort_order .="<option value='". ($item->sort_order+1) ."'>Sau: " . $item->name . "<?option>";

}
?>
<?php require_once('../views/backend/header.php'); ?>
<form action="index.php?option=menu&cat=process" method="post" enctype="multipart/form-data">
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Cập nhật danh mục</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="index.php">Bảng điều khiển</a></li>
                            <li class="breadcrumb-item active">Cập nhật danh mục</li>
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
                            <button name="CAPNHAT" type="submit" class="btn btn-sm btn-success">
                                <i class="fas fa-save"></i> Lưu[Cập nhật]
                            </button>
                            <a class="btn btn-sm btn-info" href="index.php?option=menu">
                                <i class="fas fa-arrow-left"></i> Quay về danh sách
                            </a>


                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="mb-3">
                            <input type="hidden" name="id" value="<?=$row['id'];?>">
                                <label for="name">Tên danh mục</label>
                                <input name="name" value="<?=$row['name'];?>" id="name" type="text" class="form-control" required placeholder="VD:Gọng Kính Nam">
                            </div>
                            <div class="mb-3">
                                <label for="metadesc">Mô tả(SEO)</label>
                                <textarea name="metadesc" id="metadesc" class="form-control" required required placeholder="VD:Gọng Kính dành cho phái nam"><?=$row['metadesc'];?></textarea>
                               
                            </div>
                            <div class="mb-3">
                                <label for="metakey">Từ khoá(SEO)</label>
                                <textarea name="metakey" id="metakey" class="form-control" required required placeholder="VD:Gọng Kính, gọng kính nam,gọng kính đanh cho nam"><?=$row['metakey'];?></textarea>
                               
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
                                <label for="sort_order">Vị trí</label>
                                <select id="sort_order" name="sort_order" class="form-control">
                                    <option value="0">--Chọn vị trí--</option>
                                    <?= $html_sort_order; ?>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="image">Hình ảnh</label>
                                <input name="image" id="image" type="file" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label for="status">Trạng thái</label>
                                <select id="status" name="status" class="form-control">
                                    <option value="2"<?=($row->status == 2)?'selected':'';?>>Chưa xuất bản</option>
                                    <option value="1"<?=($row->status == 1)?'selected':'';?>>Xuất bản</option>
                                   
                                </select>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div class="card-footer">
                <div class="row">
                        <div class="col-md-12 text-right">
                            <button name="CAPNHAT" type="submit" class="btn btn-sm btn-success">
                                <i class="fas fa-save"></i> Lưu[Cập nhật]
                            </button>
                            <a class="btn btn-sm btn-info" href="index.php?option=menu">
                                <i class="fas fa-arrow-left"></i> Quay về danh sách
                            </a>

                </div>
            </div>
        </section>
    </div>
</form>
<?php require_once('../views/backend/footer.php'); ?>