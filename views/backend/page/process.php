<?php
use App\Models\Post;
use App\Libraries\MyClass;

if (isset($_POST['THEM'])){
   $page = new Post;
   //lay tu from
   $page->title = $_POST['title'];
   $contact->slug = (strlen($_POST['slug']) > 0) ? $_POST['slug']:MyClass::str_slug($_POST['name']);
   $page->topic_id = $_POST['topic_id'];
   $page->detail = $_POST['detail'];
   $page->type = $_POST['type'];
   $page->metadesc = $_POST['metadesc'];
   $page->metakey = $_POST['metakey'];
   $page->status = $_POST['status'];


   //xu ly upload file
   if (strlen($_FILES['image']['name'])>0){
   $target_dir="..public/images/page/";
   $target_file=$target_dir.basename($_FILES["image"]["name"]);
   $extension=strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
   if (in_array($extension, ['jpg', 'jpeg', 'png', 'gif', 'webp'])){
    $filename=$page->slug.'.'.$extension;
    move_uploaded_file($_FILES['image']['tmp_name'], $target_dir . $filename);
    $page->image=$filename;
   }
}

   $page->created_at = date('Y-m-d H:i:s');
   $page->created_by = (isset($_SESSION['user_id']))?$_SESSION['user_id']:1;
   var_dump($page);
   //luu vao CSDL
   $page->save();
   //chuyen huong ve index
   header("location:index.php?option=page");
}
   

