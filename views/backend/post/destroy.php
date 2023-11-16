<?php

use App\Models\Post;
use App\Libraries\MessageArt;

$id = $_REQUEST['id'];
$post = Post::find($id);
$post->delete();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Xoá khỏi CSDL thành công']);
header('location: index.php?option=post');
