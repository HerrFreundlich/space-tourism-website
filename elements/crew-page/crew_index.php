<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Crew</title>
        <!-- Favicon -->
        <link rel="icon" sizes="32x32" href="../../assets/shared/favicon-32x32.png">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet">
        <!-- CSS Style Sheet -->
        <link rel="stylesheet" href="../styles/general_styles.css">
        <link rel="stylesheet" media="(min-width: 1201px)" href="../styles/crew_desktop_styles.css">
        <link rel="stylesheet" media="(min-width: 801px) and (max-width: 1200px)" href="../styles/crew_laptop_styles.css">
        <link rel="stylesheet" media="(max-width: 800px)" href="../styles/crew_mobile_styles.css">
    </head>

    <body>

        <?php require "../navbar/navbar.php" ?>

        <div class="crew-layout-container">

            <h5><span>02</span>MEET YOUR CREW</h5>

            <div class="crew-description">
                
                <h4>COMMANDER</h4>
                <h3>DOUGLAS HURLEY</h3>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                
                <!-- TODO Fix nav-dots overlapping other elements  -->
                <div class="nav-heading">
                    <div id="active-heading" class="nav-dot douglas-hurley"></div>
                    <div class="nav-dot mark-shuttleworth"></div>
                    <div class="nav-dot victor-glover"></div>
                    <div class="nav-dot anousheh-ansari"></div>
                </div>
            </div>
            
            <div class="crew-preview">
                <img src="../../assets/crew/image-douglas-hurley.png">
                <hr>
            </div>
            
        </div>

        <script src="crew_script.js"></script>
    </body>

</html>