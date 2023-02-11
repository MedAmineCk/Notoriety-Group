<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="img/icons/notoriety-logo.png" />
    <link rel="stylesheet" href="css/main.css">
    <title>Not Found!</title>

    <style>
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

        @font-face {
            font-family: "HACKED";
            src: url("HACKED_Title.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
        }

        body {
            background: #FFF;
        }

        .canva {
            width: 100%;
            padding: 20px;
        }

        .err-img {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 100px;
        }

        .canva img {
            width: 50%;
            max-width: 200px;
        }

        span {
            font-size: 80px;
            color: #4a515b;
            font-weight: bolder;
        }

        @media screen and (min-width: 700px) {
            span {
                font-size: 180px;
            }

            .canva img {
                max-width: 300px;
            }

            p.oops {
                font-size: 40px;
            }

            p.go-home {
                font-size: 35px;
            }
        }

        .info {
            text-align: center;
        }

        p {
            margin: 20px;
            color: #4a515b;
        }

        p.oops {
            font-weight: bold;
        }

        @media screen and (max-width: 600px) {
            p.oops {
                font-size: 20px;
            }
        }
    </style>
</head>

<body>
    <header>
        <div class="f-part">
            <div class="icon" onclick="window.open('index','_self')">
                <img src="img/icons/Notorietyl-ogo.png" alt="" srcset="">
            </div>
            <div class="number">+ (32) 471 81 82 83</div>
        </div>
        <nav class='menu'>
            <div class="menu-play">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul>
                <li>
                    <a onclick="scrollToElem('qui-sommes-nous')">QUI SOMMES-NOUS</a>
                    <hr>
                </li>
                <li>
                    <a onclick="scrollToElem('nos-services')">NOS SERVICES</a>
                    <hr>
                </li>
                <li>
                    <a href="recurtement">RECURTEMENT</a>
                    <hr>
                </li>
                <li>
                    <a href="contact">CONTACTEZ-NOUS</a>
                    <hr>
                </li>
                <li>
                    <a href="devis">DEMANDE DE DEVIS</a>
                    <hr>
                </li>
                <li>
                    <a href="blog">BLOG</a>
                    <hr>
                </li>
            </ul>
        </nav>
    </header>
    <div class="canva">
        <div class="err-img">
            <span>4</span><img src="img/error-404-.png"><span>4</span>
        </div>
        <div class="info">
            <p class="oops">Oops..! Page introuvable</p>
            <p class="go-home">Revenez à la page d'<a href="index">accueil</a></p>
        </div>
    </div>
</body>

</html>