<?php
use App\Models\Topic;
use App\Libraries\MyClass;
use App\Libraries\MessageArt;
if(isset($_POST['THEM']))
{
    $topic=new Topic;
    $topic->name=$_POST['name'];
    $topic->metadesc=$_POST['metadesc'];
    $topic->metakey=$_POST['metakey'];
    $topic->parent_id=$_POST['parent_id'];
    $topic->status=$_POST['status'];
    $topic->slug= MyClass::str_slug($_POST['name']);
    $topic->created_at= date('Y-m-d H:i:s');
    $topic->created_by=1;
    $topic->save();
    MessageArt::set_flash('message',['type'=>'success','msg'=>'Thêm thành công']);
    header('location:index.php?option=topic');

}
if(isset($_POST['CAPNHAT']))
{
    $id=$_POST['id'];
    $topic= Topic::find($id);
    $topic->name=$_POST['name'];
    $topic->metadesc=$_POST['metadesc'];
    $topic->metakey=$_POST['metakey'];
    $topic->parent_id=$_POST['parent_id'];

    $topic->status=$_POST['status'];
    $topic->slug= MyClass::str_slug($_POST['name']);
    $topic->updated_at= date('Y-m-d H:i:s');
    $topic->updated_by=1;
    $topic->save();
    MessageArt::set_flash('message',['type'=>'success','msg'=>'Cập nhật thành công']);
    header('location:index.php?option=topic');

}