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
    <title>Pakwach FM - programming</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700;800;900&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="images/Pakwach Fm Collateral_BIZ CARD.png" type="image/x-icon">
</head>
<style>
  body{
        font-family: 'Raleway', sans-serif !important;
    }
  html{
    scroll-behavior: smooth;
  }
    .presenters{
        background: -webkit-linear-gradient(top,rgb(255, 255, 255),rgba(255, 255, 255, 0.788)), url("images/verrati.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    h1, h2, h3, h4, h5, h6,
      .h1, .h2, .h3, .h4, .h5, .h6 {font-family: 'Raleway', sans-serif !important; }
      
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
    table{
        color: white !important;
    }
    .dove{
      background-image: url("https://t4.ftcdn.net/jpg/03/03/68/53/360_F_303685335_cB1etOZr5bZFHaeKFgRo0i3bKg7997Qc.jpg");
      background-size: cover;
    }
    .light{
      background-color: rgba(240, 248, 255, 0.466);
    }
    .women{
      background-image: url("https://thumbs.dreamstime.com/b/beautiful-traditional-african-women-village-hut-serengeti-region-d-render-painting-160033673.jpg");
      background-size: cover;
    }
    .eclipse{
      background-image: url("http://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/online/PublishingImages/blog/health-care-economics.jpg&w=1200&h=630");
      background-size: cover;
    }
    .jaraja{
      background-image: url("https://www.otacfitness.com/wp-content/uploads/2018/08/Sports-and-Athletes-Website-Header.png");
      background-size: cover;
    }
    .news{
      background-image: url("https://vaalweekblad.com/wp-content/uploads/sites/119/2015/05/news.jpg");
      background-size: cover;
    }
    .music{
      background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJf8Rxl04E4mTYxR42piOBkf6MipU97-RdA&usqp=CAU");
      background-size: cover;
    }
    
    h6{
        font-size: 12px !important;
    }
    h2{
        font-size: 50px !important;
    }
    h3, h4, h5{
        font-size: 17px !important;
    }
</style>
<body>
    <div class="row bg-light">
        <div class="row main fix text-white p-2 w-100">
            <div class=" col-lg-2 main">
                <img src="images/Pakwach Fm Collateral_BIZ CARD.jpg" alt="" srcset="" width="80%" height="100%">
            </div>
            <div class="col-lg-8">
            </div> 
            <div class="col-lg-2 ">
                <div class="row justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="rounded-circle border mt-2 bi bi-mic-fill" viewBox="0 0 16 16">
                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                      <h6 class=" text-white mt-4 ml-2">LISTEN NOW</h6>
                </div>
            </div>
        </div>
        <div class="row w-100 justify-content-center second p-5">
            <a href="index.php"><h6 class=" px-5 border-right border-dark">Home</h6></a>
            <a href="events.php#presenters"><h6 class=" px-5 border-right border-dark">Presenters</h6></a>
                <a href="events.php#team"><h6 class=" px-5">Team</h6></a>
                <a href="programming.php#rates"><h6 class=" px-5 py-1 border border-warning rounded-lg">Ad Rate Card</h6></a>
                <a href="about.php"><h6 class=" px-5">About Us</h6></a>
                <a href="about.php"><h6 class=" px-5">Contact Pakwach FM</h6></a>
        </div>
    </div>
    <div class="row">
            <div class="row p-5 justify-content-center w-100">
                <h2>PROGRAMMING</h2> <h3 class=" text-white px-5 p-4 main ml-5">Monday - Friday</h3>
            </div>
            <div class="row p-3 justify-content-center w-100">
                <div class="col-lg-4  border-right border-dark dove">
                    <div class="row justify-content-end p-3">
                      <div class="col-lg-6 light p-3 py-5">
                        <h4 class=" main text-white px-2 p-1">6:00 am - 8:50 am</h4>
                    <h4 class="py-5 text-center">THE MORNING DOVE</h4>
                    <P class="text-center">Aloysius and Shery</P>
                      </div>
                    </div>
                </div>
                <div class="col-lg-4 border-right border-dark women">
                    <div class="row justify-content-end p-3">
                      <div class="col-lg-6 light p-3">
                        <h4 class="py-5 text-center">MON IDONGU NGOM</h4>
                    <P class="text-center pb-5">Major Mastura</P>
                    <h4 class=" match text-white px-2 p-1">9:30 am - 2:05 pm</h4>
                      </div>
                    </div>
                </div>
                <div class="col-lg-4 eclipse">
                    <div class="row justify-content-end p-3">
                      <div class="col-lg-6 light p-3 py-5">
                        <h4 class=" main text-white px-2 p-1">2:05 pm - 4:10 pm</h4>
                    <h4 class="py-5 text-center">THE <br> ECLIPSE</h4>
                    <P class="text-center">Junior Hoston</P>
                      </div>
                    </div>
                </div>
            </div>
            <div class="row p-5 justify-content-center w-100">
                <div class="col-lg-4 border-right border-dark jaraja">
                    <div class="row justify-content-end">
                      <div class="col-lg-6 light p-3 py-5">
                        <h4 class=" main text-white px-2 p-1">4:30 Pm - 9:15 Pm</h4>
                    <h4 class="py-5 text-center">JARAJA</h4>
                    <P class="text-center pb-5">Cwinya Allen</P>
                      </div>
                    </div>
                </div>
                <div class="col-lg-4 border-right border-dark news">
                    <div class="row justify-content-end">
                      <div class="col-lg-6 light p-3 py-5">
                        <h4 class="py-5 text-center">KAMALENG</h4>
                    <P class="text-center pb-5">Bithum Francis and Veratti</P>
                    <h4 class=" match text-white px-2 p-1">9:20 pm - 12:00 am</h4>
                      </div>
                    </div>
                </div>
                <div class="col-lg-4 music">
                    <div class="row justify-content-end">
                      <div class="col-lg-6 light p-3 py-5">
                        <h4 class=" main text-white px-2 p-1">12:00 am - 6:00 am</h4>
                    <h4 class="py-5 text-center">WAN DE WANUTI</h4>
                    <P class="text-center pb-5">Junior Hoston</P>
                      </div>
                    </div>
                </div>
            </div>
        <!-- <div class="col-lg-2 bg-white">
            <h3 class="pt-5 font-weight-lighter ">
                Celebrating <span class=" text-danger font-weight-bolder">RAMADHAN KAREEM</span> with 
            </h3>
            <div class="row w-100 justify-content-center py-2">
                <img src="images/logos de todo.jpg" alt="PEPSI" srcset="" width="40" height="40">
            </div>
            <img src="images/65a2f4_c2c7b955ef8e4639ae750b03c9b58d7c_mv2_d_1900_1425_s_2.png" alt="" srcset="" width="100%" height="auto">
            <div class="row pt-3 bg-warning justify-content-center">
                <h3 class="p-3">
                    MTN Senkyu Points with
                </h3>
                <img src="https://www.mtn.co.ug/wp-content/uploads/2020/11/socialmedia-Loyalty6.jpg" alt="" srcset="" height="auto" width="100%">
                <h3 class="mt-2 shadow-lg px-2 bg-warning rounded">
                    Dial *141#
                </h3>
            </div>
        </div> -->
    </div>
    
    <div class="row p-3 ml-2 main text-white" id="rates">
            <div class="col-lg-4 p-3">
                <h5 class=" text-center w-100">PAKWACH FM ADVERTISING RATE CARD</h5>
                <table class="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Services</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Units</th>
                        <th scope="col">Unit price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Radio Spots</td>
                        <td>30</td>
                        <td>seconds</td>
                        <td>30,000</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Radio Spots</td>
                        <td>45</td>
                        <td>seconds</td>
                        <td>40,000</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Radio Spots</td>
                        <td>60</td>
                        <td>seconds</td>
                        <td>50,000</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Interviews</td>
                        <td>15</td>
                        <td>minutes</td>
                        <td>30,000</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Talk Shows</td>
                        <td>1</td>
                        <td>Hour</td>
                        <td>1,200,000</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Presenter Mentions</td>
                        <td>15</td>
                        <td>seconds</td>
                        <td>25,000</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>Presenter Mentions</td>
                        <td>30</td>
                        <td>seconds</td>
                        <td>30,000</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
            <div class="col-lg-4 p-3">
                <h5 class=" text-center w-100">PAKWACH FM ADVERTISING RATE CARD</h5>
                <table class="table ml-2 table-sm">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Services</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Units</th>
                        <th scope="col">Unit price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">8</th>
                        <td>Documentaries</td>
                        <td>15</td>
                        <td>minutes</td>
                        <td>1,200,000</td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>Documentaries</td>
                        <td>30</td>
                        <td>minutes</td>
                        <td>2,400,000</td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>Periodical Campaigns</td>
                        <td>3</td>
                        <td>months</td>
                        <td>6,000,000</td>
                      </tr>
                      <tr>
                        <th scope="row">11</th>
                        <td>Periodical Campaigns</td>
                        <td>6</td>
                        <td>months</td>
                        <td>12,000,000</td>
                      </tr>
                      <tr>
                        <th scope="row">12</th>
                        <td>Periodical Campaigns</td>
                        <td>1</td>
                        <td>Year</td>
                        <td>24,000,000</td>
                      </tr>
                      <tr>
                        <th scope="row">13</th>
                        <td>Live Broadcast</td>
                        <td>1</td>
                        <td>Hour</td>
                        <td>2,000,000</td>
                      </tr>
                      <tr>
                        <th scope="row">14</th>
                        <td>Productions</td>
                        <td>-</td>
                        <td>-</td>
                        <td>240,000</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
            <div class="col-lg-4">
                <h5 class=" text-center w-100">PAKWACH FM SPONSORSHIP PACKAGES</h5>
                <table class="table ml-2 table-sm">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Package</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Daily 3 Hour block</td>
                        <td>4,800,000</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Daily 1 Hour block</td>
                        <td>3,000,000</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Weekly 3 Hour block</td>
                        <td>3,600,000</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Weekly 1 Hour block</td>
                        <td>2,400,000</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Sponsorship of daily segments</td>
                        <td>2,000,000</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Sponsorship of weekly segments</td>
                        <td>1,000,000</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>Main News Bulletin Adjustments</td>
                        <td>4,800,000</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>News Highlights</td>
                        <td>2,000,000</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
        <div class="row w-100 p-5 bg-light justify-content-center">
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