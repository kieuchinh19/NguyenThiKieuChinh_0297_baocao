<?php

use App\Models\Product;
use App\Libraries\Myclass;
use App\Libraries\MessageArt;


if (isset($_POST['THEM'])) {
    $product = new Product();
    $product->name = $_POST['name'];
    $product->slug = Myclass::str_slug($_POST['name']);
    $product->detail = $_POST['detail'];
    $product->category_id = $_POST['category_id'];
    $product->brand_id = $_POST['brand_id'];
    $product->qty = $_POST['qty'];
    $product->price = $_POST['price'];
    $product->pricesale = $_POST['price_sale'];
    $product->status = $_POST['status'];
    $product->created_at = date('Y-m-d H:i:s');
    $product->created_by = 1;
    //upload file
    $path_dir = "../public/images/product/";
    $file = $_FILES["image"];
    $path_file = $path_dir . basename($file["name"]);
    $file_extension = strtolower(pathinfo($path_file, PATHINFO_EXTENSION));
    if (in_array($file_extension, ['png', 'jfif', 'gif', 'jpg'])) {
        $path_file = $path_dir . $product->slug . "." . $file_extension;
        move_uploaded_file($file['tmp_name'], $path_file);
        $product->image = $product->slug . "." . $file_extension;
        //end upload file
        $product->save();
        MessageArt::set_flash('message', ['type' => 'success', 'msg' => 'Thêm thành công']);
        header('location:index.php?option=product');
    } else {
        MessageArt::set_flash('message', ['type' => 'danger', 'msg' => 'kiểu hình ảnh không hợp lệ']);
        header('location:index.php?option=product&cat=create');

    }
}
if (isset($_POST['CAPNHAT'])) {
    $id = $_POST['id'];
    $product = Product::find($id);
    $product->name = $_POST['name'];
    $product->slug = Myclass::str_slug($_POST['name']);
    $product->detail = $_POST['detail'];

    $product->category_id = $_POST['category_id'];
    $product->brand_id = $_POST['brand_id'];
    $product->qty = $_POST['qty'];
    $product->price = $_POST['price'];
    $product->pricesale = $_POST['price_sale'];
    $product->status = $_POST['status'];
    $product->updated_at = date('Y-m-d H:i:s');
    $product->updated_by = 1;

    //upload file
    if (strlen($_FILES["image"]['name']) != 0) {
        $path_dir = "../public/images/product/";
        $file = $_FILES["image"];
        $path_file = $path_dir . basename($file["name"]);
        $file_extension = strtolower(pathinfo($path_file, PATHINFO_EXTENSION));
        if (!in_array($file_extension, ['png', 'gif', 'jpg'])) {
            MessageArt::set_flash('message', ['type' => 'danger', 'msg' => 'kiểu hình ảnh không hợp lệ']);
            header('location:index.php?option=product&cat=edit');
        }
        $path_file = $path_dir . $product->slug . "." . $file_extension;
        $path_delete = $path_dir . $product->image;
        if (file_exists($path_delete)) {
            unlink($path_delete);
        }
        move_uploaded_file($file['tmp_name'], $path_file);
        $product->image = $product->slug . "." . $file_extension;
    }
    $product->save();
    MessageArt::set_flash('message', ['type' => 'success', 'msg' => 'Cập nhật thành công']);
    header('location:index.php?option=product');
}


