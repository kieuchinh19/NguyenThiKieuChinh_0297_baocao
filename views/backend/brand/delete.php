<?php
use App\Models\Brand;
use App\Libraries\MessageArt;
$id =$_REQUEST['id'];
$brand =Brand::find($id);
$brand->status =0;
$brand->updated_at=date('Y-m-d H:i:s');
$brand->updated_by=1;
$brand->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Xoá vào thùng rác thành công']);
header('location:index.php?option=brand');