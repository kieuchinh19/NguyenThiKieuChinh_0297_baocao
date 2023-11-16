<?php
use App\Models\Topic;
use App\Libraries\MessageArt;
$id =$_REQUEST['id'];
$topic =Topic::find($id);
$topic->status =0;
$topic->updated_at=date('Y-m-d H:i:s');
$topic->updated_by=1;
$topic->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Xoá vào thùng rác thành công']);
header('location:index.php?option=topic');