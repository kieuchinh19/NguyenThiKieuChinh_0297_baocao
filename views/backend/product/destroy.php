<?php
use App\Models\Product;
use App\Libraries\MessageArt;
$id =$_REQUEST['id'];
$product =Product::find($id);
$product->delete();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Xoá khỏi CSDL thành công']);
header('location:index.php?option=product');