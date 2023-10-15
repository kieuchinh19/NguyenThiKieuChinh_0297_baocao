<?php


use App\Models\Menu;
use App\Libraries\MyClass;

if (isset($_POST['THEM'])) {
    $menu = new Menu();
    $menu->name = $_POST['name'];
    $menu->link = $_POST['link'];
    $menu->type = $_POST['type'];
    $menu->status = $_POST['status'];


    $menu->created_at = date('Y-m-d h:i:s');
    $menu->created_by = (isset($_SESSION['user_id'])) ? $_SESSION['user_id'] : 1;
    var_dump($menu);

    $menu->save();

    header("location:index.php?option=menu");
}