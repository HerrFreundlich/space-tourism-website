<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Destination</title>
        <!-- Favicon -->
        <link rel="icon" sizes="32x32" href="../../assets/shared/favicon-32x32.png">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet">
        <!-- CSS Style Sheets -->
        <link rel="stylesheet" href="../styles/general_styles.css">
        <link rel="stylesheet" media="(min-width: 1201px)" href="../styles/destination_desktop_styles.css">
        <link rel="stylesheet" media="(min-width: 801px) and (max-width: 1200px)" href="../styles/destination_laptop_styles.css">
        <link rel="stylesheet" media="(max-width: 800px)" href="../styles/destination_mobile_styles.css">

    </head>

    <body>

        <?php require "../navbar/navbar.php" ?>

        <div class="destination-layout-container">
            <div class="destination-preview-container">
                <h5><span>01</span>PICK YOUR DESTINATION</h5>
                <img id="picture" src="../../assets/destination/image-moon.png">
            </div>

            <div class="destination-description-container">
                <div class="nav-heading">
                    <p id="active-heading" class="nav-text moon">MOON</p>
                    <p class="nav-text mars">MARS</p>
                    <p class="nav-text europa">EUROPA</p>
                    <p class="nav-text titan">TITAN</p>
                </div>

                <div class="detailed-description">
                    <h2 id="title">MOON</h2>
                    <p id="description">See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. 
                        While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <hr>
                </div>

                <div class="travel-info">
                    <p class="subheading-2">AVG. DISTANCE</p>
                    <p class="subheading-2">EST. TRAVEL TIME</p>
                    <p id="distance" class="subheading-1">384.400 KM</p>
                    <p id="time" class="subheading-1">3 DAYS</p>
                </div>
            </div>

        </div>

        <script src="destination_script.js"></script>
    </body>

</html>