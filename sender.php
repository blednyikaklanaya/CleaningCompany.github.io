<?php

$name = $_POST["name"];
$number = $_POST["number"]; 
$dataTime = date("Y/m/d"); //Сохраняем данные с формы.

$token = "7084044482:AAFeAn9ckN8P8wVOX8azrpTs5ERFsQgsOyw";
$chat_id = "-4191608130"; //подключаемся к груповому чату(груповые чаты в начале ID минус)

$arr = array (
    '-  Номер телефона' => $number,
    '-  Имя' => $name,
    '-  Data(for debag)' => $dataTime
); //Создаем массив с ключами к данным

foreach($arr as $key => $value) {
    $txt .= " <code>".$value."</code> ".$key."%0A ";
} //перебераем масив за ключами, и вставляем это в тхт документ

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
//юзаем апишку ТГ, отсылаем в сообщение все что мы выше собрали. Готово


//OPEN_SQL - смысла нету, при возможности лучше использовать точку входа в БД от сюда, наверное.