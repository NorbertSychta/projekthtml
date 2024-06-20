<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wypozyczalnia";

// Połączenie z bazą danych
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzanie połączenia
if ($conn->connect_error) {
    die("Połączenie nieudane: " . $conn->connect_error);
}

// Pobieranie danych z formularza
$name = $_POST['name'];
$email = $_POST['email'];
$car = $_POST['car'];
$days = $_POST['days'];

// Wstawianie danych do bazy
$sql = "INSERT INTO rezerwacje (name, email, car, days) VALUES ('$name', '$email', '$car', '$days')";

if ($conn->query($sql) === TRUE) {
    echo "Rezerwacja została zapisana";
} else {
    echo "Błąd: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>