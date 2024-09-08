    document.getElementById("pbtn").innerText = "▼";
  
    function ltts() {
      if (document.getElementById("pbtn").className.indexOf("r-now") !== -1) {
        document.getElementById("pbtn").classList.remove('r-now');
        document.getElementById("pbtn").classList.add('r-pause');
        document.getElementById("pbtn").innerText = "▼";
        speechSynthesis.cancel();
      } else {
        document.getElementById("pbtn").classList.remove('r-pause');
        document.getElementById("pbtn").classList.add("r-now");
        document.getElementById("pbtn").innerText = "=";
        var icontent = document.body.innerText;
        voices = speechSynthesis.getVoices();
        const uttr = new SpeechSynthesisUtterance(icontent);
        uttr.voice = voices[182];
        speechSynthesis.speak(uttr);
      }
    }