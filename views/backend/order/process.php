<?php


use App\Models\Order;
use App\Libraries\MyClass;

if (isset($_POST['THEM'])) {
    $order = new Order();
    $order->deliveryname = $_POST['deliveryname'];
    $order->deliveryphone = $_POST['deliveryphone'];
    $order->deliveryemail = $_POST['deliveryemail'];
    $order->deliveryaddress = $_POST['deliveryaddress'];
    $order->note = $_POST['note'];
    $order->status = $_POST['status'];


    $order->created_at = date('Y-m-d h:i:s');
    $order->created_by = (isset($_SESSION['user_id'])) ? $_SESSION['user_id'] : 1;
    var_dump($order);

    $order->save();

    header("location:index.php?option=order");
}