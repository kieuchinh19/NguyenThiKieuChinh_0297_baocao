<?php
use App\Models\Contact;
use App\Libraries\MyClass;

if (isset($_POST['THEM'])){
    $contact = new Contact();
   //lay tu from
   $contact->name = $_POST['name'];
   $contact->email = $_POST['email'];
   $contact->phone = $_POST['phone'];
   $contact->title = $_POST['title'];

   $contact->slug = (strlen($_POST['slug']) > 0) ? $_POST['slug']:MyClass::str_slug($_POST['name']);
   $contact->status = $_POST['status'];

   //xu ly upload file
   if (strlen($_FILES['image']['name'])>0){
   $target_dir="..public/images/contact/";
   $target_file=$target_dir.basename($_FILES["image"]["name"]);
   $extension=strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
   if (in_array($extension, ['jpg', 'jpeg', 'png', 'gif', 'webp'])){
    $filename=$contact->slug.'.'.$extension;
    move_uploaded_file($_FILES['image']['tmp_name'], $target_dir . $filename);
    $contact->image=$filename;
   }
}

   $contact->created_at = date('Y-m-d H:i:s');
   $contact->created_by = (isset($_SESSION['user_id']))?$_SESSION['user_id']:1;
   var_dump($contact);
   //luu vao CSDL
   $contact->save();
   //chuyen huong ve index
   header("location:index.php?option=contact");
}
   

