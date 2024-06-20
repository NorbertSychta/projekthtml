<?php
$file = 'counter.txt';

// Sprawdzanie, czy plik istnieje
if (!file_exists($file)) {
    // Tworzenie pliku z początkową wartością 0
    file_put_contents($file, 0);
}

// Odczyt bieżącej liczby odwiedzin
$counter = (int)file_get_contents($file);

// Zwiększenie liczby odwiedzin o 1
$counter++;

// Zapis zaktualizowanej liczby odwiedzin do pliku
file_put_contents($file, $counter);

// Zwracanie liczby odwiedzin jako wartość do wstawienia w HTML
echo $counter;
?>