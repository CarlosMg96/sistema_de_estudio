let preguntaNumero;

function preguntas_ramdom() {
   
    const preguntas = [
       'assets/audios_pregunta/P1.ogg',
       'assets/audios_pregunta/P2.ogg',
       'assets/audios_pregunta/P3.ogg',
       'assets/audios_pregunta/P4.ogg',
       'assets/audios_pregunta/P5.ogg',
       'assets/audios_pregunta/P6.ogg',
       'assets/audios_pregunta/P7.ogg',
       'assets/audios_pregunta/P8.ogg',
       'assets/audios_pregunta/P9.ogg',
       'assets/audios_pregunta/P10.ogg',
       'assets/audios_pregunta/P11.ogg',
       'assets/audios_pregunta/P12.ogg',
       'assets/audios_pregunta/P13.ogg',
       'assets/audios_pregunta/P14.ogg',
       'assets/audios_pregunta/P15.ogg',
       'assets/audios_pregunta/P16.ogg',
       'assets/audios_pregunta/P17.ogg',
       'assets/audios_pregunta/P18.ogg',
       'assets/audios_pregunta/P19.ogg',
       'assets/audios_pregunta/P20.ogg',
    ];
   
    let numPregunta = Math.floor(Math.random() * preguntas.length);
    let audioPregunta = new Audio(preguntas[numPregunta]);
    preguntaNumero = numPregunta
                
    // Reproduce el audio
    audioPregunta.play();
   
   }

   function repetir_pregunta() {
    const preguntas = [
        'assets/audios_pregunta/P1.ogg',
        'assets/audios_pregunta/P2.ogg',
        'assets/audios_pregunta/P3.ogg',
        'assets/audios_pregunta/P4.ogg',
        'assets/audios_pregunta/P5.ogg',
        'assets/audios_pregunta/P6.ogg',
        'assets/audios_pregunta/P7.ogg',
        'assets/audios_pregunta/P8.ogg',
        'assets/audios_pregunta/P9.ogg',
        'assets/audios_pregunta/P10.ogg',
        'assets/audios_pregunta/P11.ogg',
        'assets/audios_pregunta/P12.ogg',
        'assets/audios_pregunta/P13.ogg',
        'assets/audios_pregunta/P14.ogg',
        'assets/audios_pregunta/P15.ogg',
        'assets/audios_pregunta/P16.ogg',
        'assets/audios_pregunta/P17.ogg',
        'assets/audios_pregunta/P18.ogg',
        'assets/audios_pregunta/P19.ogg',
        'assets/audios_pregunta/P20.ogg',
     ];
    
     let audioPregunta = new Audio(preguntas[preguntaNumero]);
                 
     // Reproduce el audio
     audioPregunta.play();
   }

   function respuesta_pregunta() {
    const respuestas = [
        'assets/audios_respuesta/R1.ogg',
        'assets/audios_respuesta/R2.ogg',
        'assets/audios_respuesta/R3.ogg',
        'assets/audios_respuesta/R4.ogg',
        'assets/audios_respuesta/R5.ogg',
        'assets/audios_respuesta/R6.ogg',
        'assets/audios_respuesta/R7.ogg',
        'assets/audios_respuesta/R8.ogg',
        'assets/audios_respuesta/R9.ogg',
        'assets/audios_respuesta/R10.ogg',
        'assets/audios_respuesta/R11.ogg',
        'assets/audios_respuesta/R12.ogg',
        'assets/audios_respuesta/R13.ogg',
        'assets/audios_respuesta/R14.ogg',
        'assets/audios_respuesta/R15.ogg',
        'assets/audios_respuesta/R16.ogg',
        'assets/audios_respuesta/R17.ogg',
        'assets/audios_respuesta/R18.ogg',
        'assets/audios_respuesta/R19.ogg',
        'assets/audios_respuesta/R20.ogg',
     ]
    let audioRespuesta = new Audio(respuestas[preguntaNumero]);
    audioRespuesta.play();
   }
   
   
     