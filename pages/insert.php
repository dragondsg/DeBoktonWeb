<?php
$servername = "127.0.0.1:3306";
$db_username = "u786062685_greenedo";
$db_password = "Sealed4ever!";
$dbname = "u786062685_dbemail";

// Create connection
$conn = new mysqli($servername, $db_username, $db_password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data and sanitize (using prepared statements is better for security)
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email_address', FILTER_SANITIZE_STRING); // Consider hashing passwords for security

// Prepare and bind the INSERT statement
$stmt = $conn->prepare("INSERT INTO mailing_list (name, email_adress) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email); // "ss" means two string parameters

// Execute the statement
if ($stmt->execute()) {
  echo "New record inserted successfully";
} else {
  echo "Error: " . $stmt->error;
}

// Close connection
$stmt->close();
$conn->close();
?>