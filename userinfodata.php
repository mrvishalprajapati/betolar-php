<?php
$con = mysqli_connect('localhost', 'root');

if ($con) {
    echo "Connection successful";
} else {
    echo "No connection";
}

mysqli_select_db($con, 'betolaruserdata');

// Check if form fields are set before accessing them
if (isset($_POST['Name'], $_POST['Email'], $_POST['Mobile'], $_POST['Comment'], $_POST['Company'])) {
    $name = mysqli_real_escape_string($con, $_POST['Name']);
    $email = mysqli_real_escape_string($con, $_POST['Email']);
    $mobile = mysqli_real_escape_string($con, $_POST['Mobile']);
    $comment = mysqli_real_escape_string($con, $_POST['Comment']);
    $company = mysqli_real_escape_string($con, $_POST['Company']);

    $query = "INSERT INTO userinfodata (Name, Email, Mobile, Comment, Company)
              VALUES ('$name', '$email', '$mobile', '$comment', '$company')";

    if (mysqli_query($con, $query)) {
        echo "Record added successfully";
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($con);
    }
} else {
    echo "Form fields are not set.";
}

// Close the connection
mysqli_close($con);
?>
