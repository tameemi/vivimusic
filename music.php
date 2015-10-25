<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible” content=”IE=edge,chrome=1">
        <link rel="icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
        <title>vivi</title>
        <!--CSS-->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/stylesheet.css" rel="stylesheet">
        <!--Fonts-->
        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
        <!-- Firechat -->
        <link rel='stylesheet' href='https://cdn.firebase.com/libs/firechat/2.0.1/firechat.min.css' />
        <?php
        $video_id = strip_tags($_GET['video']);
        $url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=".$video_id."&key=AIzaSyDKf0etDDpk0jStsehtRX3TSQaK8pU98mY"; # replace with your own API key
        $video = json_decode(file_get_contents($url));
        $title = $video->items[0]->snippet->title;
        ?>
    </head>
    <!--Body-->
    <body id="page-top" class="index">
        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <!-- Brand and toggle grouped for mobile display -->
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a href=""><img src="images/logo.png" alt="vivi"></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li class="page-scroll">
                            <a href="#">Radio</a>
                        </li>
                        <li class="page-scroll">
                            <a href="#">Music</a>
                        </li>
                        <li class="page-scroll">
                            <a href="#">Discover</a>
                        </li>
                        <li class="page-scroll">
                            <a class="btn btn-primary" id="signin" href="#">Sign In</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
                <div>
                    <div class="footer-col col-sm-12">
                    </div>
                </div>
                <!-- /.container-fluid -->
            </div>
        </nav>
        <!-- Header -->
        <header>
            <div class="container">
            </div>
        </header>
        <!--Content-->
        <section>
            <div class="container">
                <div class="row">
                    <div id="video" class="col-sm-6">
                        <div class="text-center">
                            <h2><?php echo $title; ?></h2>
                        </div>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/<?php echo $video_id; ?>?rel=0" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div id="chat" class="col-sm-6">
                        <div id="chatbox">
                            <ul class="messages" style="display:none">
                                <li id="strangerjam">Waiting for a response...</li>
                                <li id="myjam"></li>
                            </ul>
                            <ul id="messageList" class="messages">
                                <li id="placeholder">Waiting for a stranger to join...</li>
                            </ul>
                            <input type="text" id="chatInput"  placeholder="Type a message...">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer -->
        <footer class="text-center">
            <div class="footer-below">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-4 text-left">
                            &copy; vivi, 2015. All Rights Reserved.
                        </div>
                        <div class="col-xs-8 text-right">
                            <a href="#">About | </a>
                            <a href="#">Terms | </a>
                            <a href="#">Contact | </a>
                            <a href="#">Feedback</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!--Scripts-->
        <!-- jQuery -->
        <script src="js/jquery.js"></script>
        <!-- Bootstrap Core JavaScript -->
        <script src="js/bootstrap.min.js"></script>
        <!-- Firebase -->
        <script src="https://cdn.firebase.com/js/client/2.1.0/firebase.js"></script>
        <!-- Firechat -->
        <script src="https://cdn.firebase.com/libs/firechat/2.0.1/firechat.min.js"></script>
        <!-- Plugin JavaScript -->
        <script src="js/classie.js"></script>
        <script src="js/cbpAnimatedHeader.js"></script>
        <!-- Navbar Modification JavaScript -->
        <script src="js/navbar.js"></script>

        <!-- CHAT JAVACRIPT -->
        <script src="js/chat.js"></script>

    </body>
</html>
