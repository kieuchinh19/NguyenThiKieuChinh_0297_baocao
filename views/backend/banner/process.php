<?php

use App\Models\Banner;
use App\Libraries\Myclass;
use App\Libraries\MessageArt;
use App\Models\Brand;

if (isset($_POST['THEM'])) {
        $banner = Banner::find('id');
        $row->name = $_POST['name'];
        $row->position = $_POST['position'];

        $row->status = $_POST['status'];
        $row->created_at = date('Y-m-d H:i:s');
        $row->created_by = 1;
        $row->save();
        MessageArt::set_flash('message', ['type' => 'success', 'msg' => 'Thêm thành công']);
        header('location:index.php?option=banner');
    }


if (isset($_POST['CAPNHAT'])) {
    $id = $_POST['id'];
    $row = Banner::find($id);
    $row->name = $_POST['name'];
    $row->position = $_POST['position'];

    $row->sort_order = $_POST['sort_order'];
    $row->status = $_POST['status'];
    $row->updated_at = date('Y-m-d H:i:s');
    $row->updated_by = 1;
    $row->save();
    MessageArt::set_flash('message', ['type' => 'success', 'msg' => 'Cập nhật thành công']);
    header('location:index.php?option=banner');
}
