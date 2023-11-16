<?php
use App\Models\Brand;
use App\Libraries\MessageArt;

$id =$_REQUEST['id'];
$brand =Brand::find($id);
if($brand==null)
{
    MessageArt::set_flash('message',['type'=>'danger','msg'=>'Mẫu tin không tồn tại']);
    header('location:index.php?option=brand');
}
$brand->status =($brand['status']==1) ?2:1;
$brand->updated_at=date('Y-m-d H:i:s');
$brand->updated_by=1;
$brand->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Thay đổi trạng thái thành công']);
header('location:index.php?option=brand');