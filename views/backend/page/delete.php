<?php

use App\Models\Post;
use App\Libraries\MessageArt;

$id = $_REQUEST['id'];
if (!is_numeric($id)) {
    header("location:index.php?option=page");
}

$post = Post::where([['id', '=', $id], ['status', '!=', 0]])->first();
//$row=new post();
// $row=post::find($id);
if ($row == NULL) {
    header("location:index.php?option=page");
}
$post->status = 0;
$post->updated_at = date('Y-m-d H:i:s');
$post->updated_by = $_SESSION['user_id'] ?? 1;
$post->save();

MessageArt::set_flash('message', ['type' => 'success', 'msg' => 'Xóa vào thùng rác thành công']);
header('location: index.php?option=page');
