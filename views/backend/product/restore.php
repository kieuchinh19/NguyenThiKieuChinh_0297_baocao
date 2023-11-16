<?php
use App\Models\Product;
use App\Libraries\MessageArt;

$id =$_REQUEST['id'];
$product =Product::find($id);
$product->status =2;
$product->updated_at=date('Y-m-d H:i:s');
$product->updated_by=1;
$product->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Khôi phục thành công']);
header('location:index.php?option=product&cat=trash');