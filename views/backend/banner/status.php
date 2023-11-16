<?php
use App\Models\Banner;
use App\Libraries\MessageArt;

$id =$_REQUEST['id'];
$row =Banner::find($id);
if($row==null)
{
    MessageArt::set_flash('message',['type'=>'danger','msg'=>'Mẫu tin không tồn tại']);
    header('location:index.php?option=banner');
}
$row->status =($row['status']==1) ?2:1;
$row->updated_at=date('Y-m-d H:i:s');
$row->updated_by=1;
$row->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Thay đổi trạng thái thành công']);
header('location:index.php?option=banner');