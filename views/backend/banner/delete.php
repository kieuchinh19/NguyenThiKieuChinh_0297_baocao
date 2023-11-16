<?php
use App\Models\Banner;
use App\Libraries\MessageArt;
$id =$_REQUEST['id'];
$banner =Banner::find($id);
$banner->status =0;
$banner->updated_at=date('Y-m-d H:i:s');
$banner->updated_by=1;
$banner->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Xoá vào thùng rác thành công']);
header('location:index.php?option=banner');