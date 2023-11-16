<?php
use App\Models\Menu;
use App\Libraries\MessageArt;
$id =$_REQUEST['id'];
$menu =Menu::find($id);
$menu->status =0;
$menu->updated_at=date('Y-m-d H:i:s');
$menu->updated_by=1;
$menu->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Xoá vào thùng rác thành công']);
header('location:index.php?option=menu');