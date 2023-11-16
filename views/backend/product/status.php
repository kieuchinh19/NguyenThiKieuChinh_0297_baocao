<?php
use App\Models\Product;
use App\Libraries\MessageArt;

$id =$_REQUEST['id'];
$product =Product::find($id);
if($product==null)
{
    MessageArt::set_flash('message',['type'=>'danger','msg'=>'Mẫu tin không tồn tại']);
    header('location:index.php?option=product');
}
$product->status =($product['status']==1) ?2:1;
$product->updated_at=date('Y-m-d H:i:s');
$product->updated_by=1;
$product->save();
MessageArt::set_flash('message',['type'=>'success','msg'=>'Thay đổi trạng thái thành công']);
header('location:index.php?option=product');