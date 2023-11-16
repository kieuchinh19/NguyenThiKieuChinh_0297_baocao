<?php

use App\Models\Banner;
$id=$_REQUEST['id'];
$row =Banner::find($id);

$list = Banner::where('status', '!=', '0')->get();
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
<form action="index.php?option=banner&cat=process" method="post" enctype="multipart/form-data">
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Cập nhật khuyến mãi</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="index.php">Bảng điều khiển</a></li>
                            <li class="breadcrumb-item active">Cập nhật khuyến mãi</li>
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
                            <a class="btn btn-sm btn-info" href="index.php?option=banner">
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
                                <label for="name">Tên khuyến mãi</label>
                                <input name="name" value="<?=$row['name'];?>" id="name" type="text" class="form-control" required placeholder="VD:Gọng Kính Nam">
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
                            <a class="btn btn-sm btn-info" href="index.php?option=banner">
                                <i class="fas fa-arrow-left"></i> Quay về danh sách
                            </a>

                </div>
            </div>
        </section>
    </div>
</form>
<?php require_once('../views/backend/footer.php'); ?>