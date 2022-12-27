 var recognition = new SpeechRecognition();//criando/chamando ap I
 var SpeechRecognition = window.webkitSpeechRecognition;//converter fala em texto

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()//funcao da ap I
}
recognition.onresult()=function(event){//funcao da ap I
    console.log(event)
    var Content=event.results[0][0].transcript; //variavel recebe resultado da transcrição
    document.getElementById("textbox").innerHTML=Content//colocamos o resultado da variavel acima no textbox
    console.log(Content)
    if(Content=="tire minha selfie"){
        speak()
        console.log("tirando selfie")
    }   
    
}
function speak(){
    var synth = window.speechSynthesis;// ativando ap I
    // speakData = document.getElementById("textbox").value;//passando  meu texto a ap I
    speakData = "tirando sua selfie em 5 segundos"//quando a funcção speak for chamada, ela dirá a frase entre aspas 
   var utterThis = new SpeechSynthesisUtterance(speakData);//converte texto em fala
    synth.speak(utterThis);//passando a var acima para a função speak
    Webcam.attach(camera); //acionar a camera
}
camera=document.getElementById("camera"); //acessando a camera do html
Webcam.set({ 
     width:360,
     height:250,
      image_format: 'png',
       png_quality:90 })

       function takeselfie(){
        Webcam.snap(function(data_uri){
             //Webcam.snap=função pre definida da api pra tirar selfie 
            //data_uri= local onde vamos exibir a selfie 
            document.getElementById("result").innerHTML='<img id="selfie_Image" src="'+data_uri+'"/>'; });
       }
       function save(){
        link= document.getElementById("link")
        image=document.getElementById("selfie_Image").src
        link.href=image
        link.click()

    }