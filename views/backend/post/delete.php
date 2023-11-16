<?php

use App\Models\Post;
use App\Libraries\MessageArt;

$id = $_REQUEST['id'];
$post = Post::find($id);
$post->status = 0;
$post->updated_at = date('Y-m-d H:i:s');
$post->updated_by= $_SESSION['user_id'];
$post->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Xoá vào thùng rác thành công']);
header('location: index.php?option=post');
