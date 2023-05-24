<?php
 if (! isset($_SERVER['HTTPS']) or $_SERVER['HTTPS'] == 'off' ) {
     $redirect_url = "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header("Location: $redirect_url");
    exit();
 }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-16">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" type="text/css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <title>Pakwach FM</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="shortcut icon" href="images/Pakwach Fm Collateral_BIZ CARD.png" type="image/x-icon">
</head>
<style>
    .presenters{
        background: -webkit-linear-gradient(top,rgb(255, 255, 255),rgba(255, 255, 255, 0.788)), url("images/verrati.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    p {
        font-weight: 700; }
      
    .match{
        background-color: rgb(241,101,34) !important;
    }
    .services{
        background-image: url("images/Pakwach\ Fm\ Collateral_BIZ\ CARD.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }
    a{
        color: black !important;
    }
    .oranger{
        color: orangered !important;
    }
    .radio{
        background-image: url("http://localhost/pakwach/images/veratti.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    .news{
        border-top: 2px solid orangered;
        border-right: 2px solid orangered;
        border-bottom: 2px solid orangered;
        border-left: 20px solid orangered;
    }
    .news:hover{
        border-top: 2px solid orange;
        border-right: 2px solid orange;
        border-bottom: 2px solid orange;
        border-left: 50px solid orange;
        width: 100% !important;
        transition: all 250ms ease-out;
        cursor: pointer;
    }
    .news:hover::after{
        content: ": The latest news and sports package in westnile here at 100.2 Pakwach FM - mamuwa.";
    }
    h2{
        font-size: 50px !important;
    }
.imgs {
    display: block;
    max-width: 600px;
    max-height: 300px;
    width: auto;
    height: auto;
}
.homepage-img {
    display: block;
    max-width: 900px;
    max-height: 500px;
    width: auto;
    height: auto;
}
.scroll {
    overflow-y: scroll !important;
    height: 100% !important;
}
.headline {
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.658)), url("images/IMG-20230224-WA0017.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
}
</style>
<body>
    <div class="row bg-white m-0">
        <div class="row main shadow-lg p-2 w-100 fix">
            <div class=" col-lg-2 main">
                <img src="images/Pakwach Fm Collateral_BIZ CARD.jpg" alt="" srcset="" width="80%" height="100%">
            </div>
            <div class="col-lg-10 hide ">
                <div class="row justify-content-end mt-4">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="rounded-circle border mt-2 bi bi-mic-fill" viewBox="0 0 16 16">
                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                      <p class=" text-white mt-4 ml-2">LISTEN NOW</p> -->
                      <a href="programming.php"><p class="text-white px-3 pr-lg-5 ">Programming</p></a>
            <a href="events.php#presenters"><p class="text-white px-3 pr-lg-5">Presenters</p></a>
                <a href="events.php"><p class="text-white px-3 pr-lg-5">Events <span class=" border border-orange rounded px-1 ml-1">0</span></p></a>
                <a href="events.php#team"><p class="text-white px-3 pr-lg-5">Team</p></a>
                <a href="programming.php#rates"><p class="text-white px-3 border border-orange rounded">Ad Rate Card</p></a>
                <a href="about.php"><p class="text-white px-5">About Pakwach FM</p></a>
                </div>
            </div>
        </div>
        <div class="row w-100 mt-5 justify-content-end second pt-5">
            <p class="p-5">Follow Pakwach FM: News, Sports, More happening on <br> social media still....100.2</p>
            <div class="row p-5">
            <a href="https://www.facebook.com/100.2pakwachfm"><p class=" px-5 border-right border-dark">Facebook <i class="fa fa-facebook-official" aria-hidden="true"></i></p></a>
            <a href="events.php#presenters"><p class=" px-5 border-right border-dark">Instagram <i class="fa fa-instagram"></i></p></a>
                <a href="https://www.twitter.com/FmPakwach"><p class="border-right border-dark px-5 ">Twitter <i class="fa fa-twitter"></i></p></a>
                <a href="https://www.youtube.com/watch?v=TYBAGbHH7I4"><p class=" px-5 ">YouTube <i class="fa fa-youtube-square" aria-hidden="true"></i></p></a>
            </div>
        </div>
    </div>
    <div class="row">
        <!-- <img src="images/Pakwach Fm Collateral_BIZ CARD.jpg" alt="" srcset=""> -->
        <div class="row w-100 blacker" id="news">
                <div class="col-lg-9">
                    <div class="row p-2 pt-lg-4 bg-light">
                        <p class="badge bg-white rounded ml-5 p-2">NEWS</p>
                    <p class="badge bg-white rounded ml-3 p-2">SPORTS</p>
                    <p class="badge bg-white rounded ml-3 p-2">ENTERTAINMENT</p>
                    <p class="badge bg-white rounded ml-3 p-2">CULTURE</p>
                    <p class="badge bg-white rounded ml-3 p-2">HEADLINES & UPDATES</p>
                    </div>
                    <div class="row p-5">
                        <div class="row">
                    <h2 class="gray-text pt-3 px-5"> <span class="font-weight-bolder">HighLights:</span> <br> Sports <img src="images/vecteezy_football-soccer-transparent_13362736_283.png" alt="" srcset="" width="2%" height="10%"> ; <span class=" font-weight-bolder"> Paidha Black Angels</span> to Host next games in Maracha District</h2>
                    <p class="px-5 pb-5 font-weight-bolder">Feb 2023 <span class="font-weight-lighter text-dark">| PAKWACH FM</span></p></div>
                    <div class="row mx-5">
                        <img src="images/IMG-20230224-WA0017.jpg" alt="" srcset="" class="homepage-img">
                    </div></div>
                </div>
                <div class="col-lg-3 px-5">
                    <h4 class=" w-100 p-3 mt-3 pt-lg-5">BET with KAGWIRAWO Sports Betting</h4>
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active" data-interval="10000">
                            <img src="https://www.galaxyfm.co.ug/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-28-at-5.17.37-PM.jpeg" class="d-block w-100" alt="..." width="25%" height="75%">
                          </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <!-- <h4 class=" w-100 p-3">BET with KAGWIRAWO SPORTS BETTING</h4>
                    <img src="https://www.galaxyfm.co.ug/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-28-at-5.17.37-PM.jpeg" alt="" srcset="" width="100%" height="70%">
                     -->
                    <h4 class=" w-100 p-3 mt-5">MTN Senkyu Points with</h4>
                    <img src="https://www.mtn.co.ug/wp-content/uploads/2020/11/socialmedia-Loyalty6.jpg" alt="" srcset="" width="100%" height="20%">
        </div>
        <div>
            <div class="row px-5 bg-light">
            <!-- <h2 class="font-weight-bolder">Paidha Black Angels will host their next four home games in Maracha District at an already approved venue and games shall be played behind closed doors according to the West-Nile Region Football Association competition Disciplinary panel.
</h2>
<h3>The West-Nile Region Football Association Competitions Disciplinary Panel released this verdict on the abandoned match between Paidha Black Angels and Paidha United SC. <br> Below is a summary of the committee verdict:- <br> <span class="font-weight-bolder">
1 - The CEO of Paidha Black Angels is fined shs 500,000 payable to the region's bank account not later than 28th February 2023.
</h3>
<h3>2 - The head coach of Paidha United is fined for unsporting behavior shs 200,000 payable to the region's bank account not later than 28th February 2023.</h3>
<h3>3 - Paidha Black Angels loses the match in question by forfeiture.</h3>
<h3>4 - Paidha Black Angels will host their next four home games in Maracha District at an already approved venue and games shall be played behind closed doors.</h3>
<h3>5 - Paidha Black Angels is fined shs 1,000,000 payable to the region.</h3></span></div> -->
            <div class="col-lg-9 p-5">
        <div class="row scroll">
                        <div class="row">
                        <p class="badge rounded bg-white ml-3 p-2">HIGHLIGHTS</p>
                    <p class="badge bg-white rounded ml-3 p-2">UPDATES</p>
                    <h2 class="w-100 p-3"><span class="font-weight-bolder">News Updates:</span> Sports & More </h2>
                        </div>
                    <div class="row p-5 mt-3 bg-white w-100">
                        <div class="col-lg-4 heading1"></div>
                        <div class="col-lg-8">
                            <p class=" font-weight-light">IN TOWN</p>
                            <h3 class="font-weight-bolder">Facts/News Update: What is the state of public transport now in Pakwach?</h3>
                            <p class="font-weight-bolder">Feb 2023 <span class="font-weight-lighter text-dark">| PAKWACH FM</span></p>
                        </div>
                    </div>
                    <div class="row px-5 bg-white w-100">
                        <div class="col-lg-4 heading2"></div>
                        <div class="col-lg-8">
                        <p class=" font-weight-light">EMYOOGA SAGA</p>
                            <h3 class="font-weight-bolder">Pakwach Emyooga officials face threats, intimidations over delayed Funds</h3>
                            <a href="https://twitter.com/PakwachF"><p class=" text-orange">find out what happened</p></a>
                            <p class="font-weight-bolder">Mar 2021 <span class="font-weight-lighter text-dark">| PAKWACH FM</span></p>
                        </div>
                    </div>
                    <div class="row p-5 bg-white w-100">
                        <div class="col-lg-4 heading3"></div>
                        <div class="col-lg-8">
                        <p class=" font-weight-light">FISHING IN PAKWACH</p>
                            <h3 class="font-weight-bolder">Young boys fishing in flooded area in Amor Parish Pakwach district.</h3>
                            <a href="https://twitter.com/PakwachF/status/1318988294093406208/photo/1"><p class=" text-orange">where to find more of the news</p></a>
                            <p class="font-weight-bolder">Nov 2021 <span class="font-weight-lighter text-dark">| PAKWACH FM</span></p>
                        </div>
                    </div></div>
            </div>
            <div class="col-lg-3 bg-white py-5">
                    <div class="row px-5 w-100">
                        <div class="row p-5">
                            <p class=" font-weight-light">THE HARVEST</p>
                            <h3 class="font-weight-bolder">High quality Sorghum and Sim Sim in Pakwach District. This month is the harvesting season.</h3>
                            <a href="https://twitter.com/PakwachF"><p class=" text-orange">the harvest: more on twitter</p></a>
                            <p class="font-weight-bolder">Nov 2021 <span class="font-weight-lighter text-dark">| PAKWACH FM</span></p>
                        </div>
                    </div>
                    <div class="row px-5 w-100">
                        <div class="row p-5">
                            <p class=" font-weight-light">THE HARVEST</p>
                            <h3 class="font-weight-bolder">High quality Sorghum and Sim Sim in Pakwach District. This month is the harvesting season.</h3>
                            <a href="https://twitter.com/PakwachF"><p class=" text-orange">the harvest: more on twitter</p></a>
                            <p class="font-weight-bolder">Nov 2021 <span class="font-weight-lighter text-dark">| PAKWACH FM</span></p>
                        </div>
                    </div>
            </div>
        </div>
        <dv class="row px-5">
            <div class="row bg-white py-lg-5">
                <div class="col-lg-9 px-5">
                <h2 class="mt-lg-5">In Studio: Meet the <span class="font-weight-bolder">Ladies & Gentlemen</span> with your favorite Shows!</h2>
                <h3>PRESENTERS at Pakwach FM | PROGRAMS & SHOWS</h3>
                <h6>Music mix, your favorite Local Artists, latest hits, trending talk shows and all thats happening; the lights camera and ACTION!</h6>
                </div>
                <div class="col-lg-3 py-3 text-center">
                <img src="images/logos de todo.jpg" alt="" srcset="" width="50%" height="70%">
                <h6 class="p-3 rounded-lg">Celebrate more with PEPSI</h6>
                </div>
            </div>
        
        </dv>
        <div class="row w-100 mb-5 bg-light p-5">
                <div class="col">
                    <div class="row justify-content-center">
                        <img src="images/verrati.jpg" alt="" srcset="" class="imgs">
                        <h4 class="p-5">VERATTI - <span class="font-weight-bolder">Presenter</span></h4>
                    </div>
                </div>
                <div class="col">
                    <div class="row justify-content-center">
                        <img src="images/Dj Cwinya.jpg" alt="" srcset="" class="imgs">
                        <h4 class="p-5">CWINYA AI - <span class="font-weight-bolder">Dj</span></h4>
                    </div>
                </div>
                <div class="col">
                    <div class="row justify-content-center">
                        <img src="https://i.imgur.com/vK0cXykl.jpg" alt="" srcset="" class="imgs">
                        <h4 class="p-5">LADY - <span class="font-weight-bolder">Presenter</span></h4>
                    </div>
                </div>
                </div>
        </div>
        
        <div class="row w-100 p-5 pl-5">
            <div class="row">
                <div class="col-lg-9">
                    <div class="row pl-5">
                        <!-- <div class="row justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-megaphone-fill mr-5" viewBox="0 0 16 16">
                                <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="ml-5 bi bi-people-fill mr-5" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="ml-5 bi bi-mic-fill mr-5" viewBox="0 0 16 16">
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="ml-5 bi bi-broadcast mr-5" viewBox="0 0 16 16">
                                <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="ml-5 bi bi-vinyl-fill mr-5" viewBox="0 0 16 16">
                                <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="ml-5 bi bi-headset mr-5" viewBox="0 0 16 16">
                                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                              </svg>
                        </div> -->
                        <h2 class=" w-100 mt-3">Pakwach FM <span class=" font-weight-bolder">Services</span></h2> 
                        <h6 class="text-center">Pakwach FM offers so many services, whichever fits your pick.</h6>
                        
                        <div class="row w-100 mt-5 pt-5">
                            <div class="col-lg-4 pb-5 p-3">
                            <p class=" w-100 text-center font-weight-light">ADVERTISING</p>
                            <h6 class="font-weight-bolder">All advertisements including Campaign ads, Health, Banking and Finance, Beverages ...</h6>
                            </div>
                            <div class="col-lg-4 pb-5 p-3">
                                <div class="row justify-content-center">
                                    <p class=" text-uppercase font-weight-light">Talk Shows</p>
                                    <h6 class="px-5 font-weight-bolder">Pakwach FM offers various talk show programs with the very best setting and presentations</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 pb-5 p-3">
                                <div class="row justify-content-center">
                                    <p class=" text-uppercase font-weight-light">BROADCASTING</p>
                                    <div class="row w-100 justify-content-center px-5">
                                        <h5 class="font-weight-bolder">Pakwach FM offers both in and out-door live broadcating at affordable prices.</h5> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row w-100 bg-light mt-5 pt-5">
                            <div class="col-lg-4 pb-5 p-3">
                            <p class=" w-100 text-center font-weight-light">COMMUNITY DIALOGUES</p>
                            <h5 class="font-weight-bolder">We offer a platform for communities to have open, respectful, and solution oriented conversations about health-related issues...</h5>
                            </div>
                            <div class="col-lg-4 pb-5 p-3">
                                <div class="row justify-content-center">
                                    <p class=" text-uppercase font-weight-light">Interviews</p>
                                    <h5 class="px-5 font-weight-bolder">Pakwach FM offers opportunities for interviews that are promoted across all our social media platforms</h5>
                                </div>
                            </div>
                            <div class="col-lg-4 pb-5 p-3">
                                <div class="row justify-content-center">
                                    <p class=" text-uppercase font-weight-light">Production</p>
                                    <div class="row w-100 justify-content-center px-5">
                                        <h5 class="font-weight-bolder">Any forms of production for artists or media productions will be done for you</h5> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row w-100 mt-5 pt-5">
                            <div class="col-lg-4 pb-5 p-3">
                            <p class=" w-100 text-center font-weight-light">DOCUMENTARIES</p>
                            <h5>We also cover documentary needs</h5>
                            </div>
                            <div class="col-lg-4 pb-5 p-3">
                                <div class="row justify-content-center">
                                    <p class=" text-uppercase font-weight-light">Presenter Mentions</p>
                                    <h5 class="px-5 font-weight-bolder">Have our presenters convey your messages live on air.</h5>
                                </div>
                            </div>
                            <div class="col-lg-4 pb-5 p-3">
                                <div class="row justify-content-center">
                                    <p class=" text-uppercase font-weight-light">DJ Mentions</p>
                                    <div class="row w-100 justify-content-center px-5">
                                        <h5 class="font-weight-bolder">We also offer DJ Mentions and so much more...</h5> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="row w-100">
                            <div class="col-lg-4 pb-5 p-3">
                                <h3>More Services</h3>
                            <p class=" w-100">PRESENTER MENTIONS</p>
                            <h5></h5>
                            </div>
                            <div class="col-lg-4">
                            <p class=" w-100">DJ MENTIONS</p>
                            <p class=" w-100">NEWS HIGHLIGHTS</p>
                            <p class=" w-100">RADIO SPORTS</p>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="col-lg-3 main text-white p-5">
                    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active" data-interval="10000">
                            <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..." width="25%" height="75%">
                          </div>
                          <div class="carousel-item" data-interval="2000">
                            <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..." width="25%" height="75%">
                          </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="row p-3 text-white">
                        <p class="text-white">Airtel brings you Ramadhan this year with your favorite bundles.</p>
                    </div>
                    <div class="row p-3 text-white">
                    <img src="images/65a2f4_c2c7b955ef8e4639ae750b03c9b58d7c_mv2_d_1900_1425_s_2.png" alt="" srcset="" width="100%" height="100%">
                    </div>
                    <div class="row p-3 text-white">
                        <p class="text-white">Celebrate more with PEPSI</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row p-5 w-100 bg-light">
                    <div class="col-lg-3 py-5">
                    </div>
                    <div class="col-lg-2 py-5">
                                <div class="row w-100">
                                    <p class="w-100 font-weight-light" >QUICK LINKS</p>
                                    <h6><a href="programming.html#rates">AD RATE CARD</a><br>
                                        <a href="programming.html">PROGRAMS</a> <br> PRESENTERS</h6></div>
                                <div class="row w-100">
                                    <h6></h6>
                                    <h6>TOP SHOWS <br>
                                        NEWS <br> <a href="about.html#profile">PROFILE</a></h6>
                                </div>
                                <div class="row w-100">
                                    <h6></h6>
                                    <h6>SPORTS <br>
                                        ENTERTAINMENT <br> UPCOMING EVENTS</h6>
                                </div>
                    </div>
            <div class="col-lg-3 py-5">
                <h6 class="font-weight-light">Get in touch with us below:</h6>
                <h6 class="font-weight-light">ADMINISTRATION</h6>
                <p>+256-776-994301 <br>
                    +256-753-994300</p>
                    
                <h6 class="font-weight-light">STUDIO LINES</h6>
                <p>+256-786-223233 <br>
                    +256-758991623</p>
                <h6 class="font-weight-light">SALES</h6>
                <p>+256-772-331128 <br>
                    +256-704-331129</p>
                    
                <h6 class="font-weight-light">NEWSROOM</h6>
                <p>+256-781-878181</p>
                <p class="font-weight-light">OTHER LOCATIONS</p>
                <h6>Pakwach FM Sales Office Location <br> Church to Church read, off mawanda Road - Kamwokya. <br>
                Kampala, Uganda</h6>
            </div>
                    <div class="col-lg-2 py-5">
                        <div class="row w-100">
                            <p class=" text-uppercase w-100 font-weight-light">Location</p>
                            <h6>Plot 14 - Fred Jacan Lane, Wanglei B <br> Pakwach Town Council <br> P.O.BOX 131</h6>
                            
                    <a href="#news"><h6 class="w-25 news p-2 w-100">NEWS AND SPORTS BANK</h6></a> <p class="font-weight-bolder">Dont miss out what is happening in westnile. Tune in to 100.2 and catch us LIVE at 100.2 Pakwach FM. <br> Radio mamuwa!</p>
                        </div>
                    </div>
        </div>
    </div>
                <div class="row w-100 pb-5 bg-light justify-content-center">
                    <div class="col-lg-4">
                        <p>&COPY;Copyright.pakwachfm.com All rights reserved. T&Cs Apply. <br> Mgt@pakwachfm.social media
                            <a href="tel:+256772748172">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orangered" class=" bi bi-whatsapp ml-2" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UCA74btLFAWELyVLgDItuLNg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orangered" class="bi bi-youtube ml-1" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/pakwach_fm?lang=en">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orangered" class="bi bi-twitter ml-1" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/100.2pakwachfm/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orangered" class="bi bi-facebook ml-1" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg> 
                            </a><br>
                            Google - Gmail 
                            <a href="mailto:pakwachfm@gmail.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orangered" class="bi bi-google ml-2" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                  </svg>
                            </a>
                        </p>
                    </div>
                </div>
</body>
<script>

</script>
</html>