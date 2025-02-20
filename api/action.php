<?php
require_once "../db/config.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Custom error handler
function errorHandler($errno, $errstr, $errfile, $errline) {
    echo json_encode(["success" => false, "error" => $errstr]);
    exit();
}

// Set the custom error handler
set_error_handler('errorHandler');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Insert User Data
        $form_data = json_decode(file_get_contents('php://input'), true);

        if (!$form_data) {
            echo json_encode(["success" => false, "error" => "Invalid JSON data"]);
            exit();
        }

        $data = array(
            ':ownerName' => $form_data['ownerName'],
            ':petName' => $form_data['petName'],
            ':service' => $form_data['service'],
            ':date' => $form_data['date'],
            ':time' => $form_data['time']
        );

        $query = "
        INSERT INTO appointments (ownerName, petName, service, date, time) 
        VALUES (:ownerName, :petName, :service, :date, :time);
        ";

		$pdo = new PDO("mysql:host=" . DB_SERVER . ";dbname=" . DB_NAME, DB_USERNAME, DB_PASSWORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $statement = $pdo->prepare($query);
        if ($statement->execute($data)) {
            echo json_encode(["success" => true, "message" => "Appointment booked successfully."]);
        } else {
            echo json_encode(["success" => false, "error" => "An error occurred while adding the appointment."]);
        }
    } catch (PDOException $e) {
        echo json_encode(["success" => false, "error" => $e->getMessage()]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "error" => $e->getMessage()]);
    }
}
?>
