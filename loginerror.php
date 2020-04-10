<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>
            Noah Faro
        </title>
        <link rel = "stylesheet" href = "css/custompp.css">
        <link rel = "stylesheet" href = "css/aos.css">
        <link rel = "shortcut icon" type = "image/png" href = "images/favicon.png">
        <link rel = "stylesheet" href = "css/fontstyles.css">
    </head>
    <body>
        <!-- This defines the login box and verification of username and password. The username and 
            password have been changed so that it can be uploaded to github. -->
        <?php
        $unameErr = $pwdErr = "";
        $uname = $pwd = "";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {

            if (empty($_POST["uname"])) {
            $unameErr = "Username is required.";
            } else {
            $uname = test_input($_POST["uname"]);
            $unameErr = "";
            
            if (!preg_match("/^[a-zA-Z ]*$/",$uname)) {
                $unameErr = "Only letters and white space allowed.";
            }
            
            if ($uname != "*******") {
                $unameErr = "Username is incorrect.";
            }

            }

            if (empty($_POST["pwd"])) {
                $pwdErr = "Password is required.";
            } else {
                $pwd = test_input($_POST["pwd"]);
                $pwdErr = "";
            }

            if ($pwd != "*****") {
                $pwdErr = "Password is incorrect.";
            }

            if (($pwdErr == "") and ($unameErr == "")) {
                header('location: http://github.com/nfaro');
            } else{
                header('location: loginerror.php#open-here');
            }

        }

        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
        
        
        ?>


        <header>
            <nav>
                <div>
                    <ul id = "navbar-div">
                        <li class = "logo"><a href = "index.html">Noah Faro</a></li>
                        <li class = "links"><a href = "about.html">About/Contact</a></li>
                        <li class = "links"><a href = "projects.php">Personal Projects</a>                </li>
                        <li class = "links"><div class = "dropdown"><a class = "dropbtn" href = "photography.html">Photography</a>
                            <div class = "dropdown-content">
                                <a href="serene.html">Serene</a>
                                <a href="portraits.html">Portraits</a>
                                <a href="Stills.html">Stills</a>
                                <a href="strong.html">Strong</a>
                            </div>
                            </div>
                        </li>
                        <li class = "links"><a href = "resume.html">Resume</a></li>
                        <li class = "links home"><a href = "index.html">Home</a></li>
                    </ul>
                </div>
            </nav>
        <div id = "header-words">
            <p>PERSONAL PROJECTS</p>
            <p id = "arrow">&darr;</p>
        </div>
        </header>
        <div class = "below">
            <section class = "third">
                <img class = "large-three" src="/images/personal.jpg" alt="Me!">
                <div class = "layer three" style = "text-align: center;">
                    <h1 class = "title">Welcome to my Personal Projects!</h1>
                    <div class = "third p">
                        <div style= "text-align: left; padding-top: 2vh;">
                            These are coding projects that I have done on my own time just for the fun of it. One of them is this website! Unfortunately due to privacy, 
                            the scripts themselves are only available to those who have talked with me. If you have the login credentials, feel free to log in below.
                        </div>
                    </div>
                    <div class="center">
                        <form method = "post" class="modal-content animate" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                            <div style= "text-align: center; color: black;" class="container">
                                <h2>PERSONAL PROJECT ACCESS</h2>
                                
                                <label for="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" value = "<?php echo $uname;?>" required>
                                <span class="error"><?php echo $unameErr;?></span>

                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="pwd" value = "<?php echo $pwd;?>" required>
                                <span class="error"><?php echo $pwdErr;?></span>
                                <div><p>Username or password are incorrect.</p></div>

                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <div class = "footer-links">
                    <div><a href = "index.html">Home</a></div>
                    <div><a href = "resume.html">Resume</a></div>
                    <div><a href = "photography.html">Photography</a></div>
                    <div><a href = "projects.php">Projects</a></div>
                    <div style="padding-right: 0;"><a href = "about.html">About</a></div>
                </div>
                <div style="padding-bottom: 5vh; color: rgb(46, 46, 46);">
                    Website Created by Noah Faro • Last Updated: April 2020
                </div>
                <div class = "footer social-logos">
                    <div class = "social-image2">
                        <a href="http://linkedin.com/in/noahfaro"><img src="/images/linkedin1.png" alt="LinkedIn: noahfaro"></a>
                    </div>
                    <div class = "social-image2">
                        <a href="https://www.facebook.com/noah.faro.37"><img src="/images/facebook.png" alt="Facebook: Noah Faro"></a>
                    </div>
                    <div class = "social-image2">
                        <a href="https://www.instagram.com/noahfaro/"><img src="/images/instagram1.png" alt="Instagram: noahfaro"></a>
                    </div>
                    <div class = "social-image2" style="margin-right: 0;">
                        <a href="mailto:nfaro@mit.edu"><img src="/images/email1.png" alt="Email: nfaro@mit.edu"></a>
                    </div>
                </div>
            </footer>
        </div>
    </body>
    <script src = "js/custom.js"></script>
    <script src = "js/modal.js"></script>
    <script src = "js/jquery-3.4.1.min.js"></script>
    <script src = "js/aos.js"></script>
    <script src = "js/aosinit.js"></script>
</html>