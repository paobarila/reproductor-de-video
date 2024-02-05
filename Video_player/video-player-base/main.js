const $video=document.querySelector("#video");
const $play=document.querySelector("#play");
const $pause=document.querySelector("#pause");
const $backward=document.querySelector("#backward");
const $forward=document.querySelector("#forward");


$play.addEventListener('click',handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay(){
console.log("aca estoy!!")
$video.play()
$play.hidden=true;
$pause.hidden=false;
}

function handlePause(){
console.log("aca esta la pausa!!")
$video.pause();
$pause.hidden=true;
$play.hidden=false;
    }
$backward.addEventListener('click', handleBackward)

function handleBackward(){
    $video.currentTime -=10;
    console.log("10 pasitos para atras")
        }
           
$forward.addEventListener('click', handleForward)

function handleForward(){
    $video.currentTime +=10;
    console.log("10 pasitos para adelante")
           
                }    
const $progress=document.querySelector('#progress')

  $video.addEventListener('loadedmetadata', handleLoaded )
  $video.addEventListener('timeupdate', handleTimeUpdate )
  

  
  function handleLoaded (){
    $progress.max= $video.duration
    console.log ("acá arranca el video", $video.duration)

  }
  function handleTimeUpdate(){
    $progress.value= $video.currentTime
    console.log('holis')
  }

  $progress.addEventListener('input', handleInput )

  function handleInput(){
    $video.currentTime=  $progress.value
console.log($progress.value)
  }
  