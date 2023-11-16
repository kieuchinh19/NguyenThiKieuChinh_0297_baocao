<?php
use App\Models\Category;
use App\Libraries\MessageArt;
$id =$_REQUEST['id'];
$category =Category::find($id);
$category->status =0;
$category->updated_at=date('Y-m-d H:i:s');
$category->updated_by=1;
$category->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Xoá vào thùng rác thành công']);
header('location:index.php?option=category');