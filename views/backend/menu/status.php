<?php
use App\Models\Menu;
use App\Libraries\MessageArt;

$id =$_REQUEST['id'];
$menu =Menu::find($id);
if($menu==null)
{
    MessageArt::set_flash('message',['type'=>'danger','msg'=>'Mẫu tin không tồn tại']);
    header('location:index.php?option=menu');
}
$menu->status =($menu['status']==1) ?2:1;
$menu->updated_at=date('Y-m-d H:i:s');
$menu->updated_by=1;
$menu->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Thay đổi trạng thái thành công']);
header('location:index.php?option=menu');