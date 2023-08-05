function documentReady() 
{
  console.log('Dokument został wczytany!');
  let newsletterForm = document.getElementById('newsletterForm');
  let newsletterBtn = document.getElementsByClassName('newsletter');
  for (i = 0; i < newsletterBtn.length; i++) 
  {
    newsletterBtn[i].addEventListener('click', showNewsletter);
  }

  // Tutaj możesz dodać swoje działania po wczytaniu dokumentu
}

// Sprawdzamy, czy dokument został wczytany
if (document.readyState === 'complete' || document.readyState === 'interactive') 
{
  // Dokument został już wczytany lub jest w trakcie wczytywania
  documentReady();
} 
else 
{
  // Dodajemy naszą funkcję do zdarzenia "DOMContentLoaded", aby wykonać ją po wczytaniu dokumentu
  document.addEventListener('DOMContentLoaded', documentReady);
}

function showNewsletter() 
{
  newsletterForm.classList += 'd-block';
  let newsletterDeclineBtn = document.getElementById('declineBtn');
  newsletterDeclineBtn.addEventListener('click', declineNewsletter);
}



function declineNewsletter() 
{
  newsletterForm.classList = 'd-none';
  console.log('metoda sie wykonala');

}


// Funkcja sprawdzająca szerokość okna i dodająca klasę w-100 w zależności od rozmiaru okna
function checkWindowSize() 
{
  const windowWidth = window.innerWidth;
  const smBreakpoint = 768; // Rozmiar okna "sm" w Bootstrapie

  // Znajdź wszystkie divy o klasie "mainPageCards"
  const mainPageCardsDivs = document.querySelectorAll('.mainPageCards');

  // Iteruj przez wszystkie divy o klasie "mainPageCards"
  mainPageCardsDivs.forEach((div) => {
    // Jeśli szerokość okna jest mniejsza lub równa rozmiarowi "sm"
    if (windowWidth <= smBreakpoint) 
    {
      // Dodaj klasę "w-100" do diva zawierającego obrazek
      div.classList.add('w-100');
      div.classList.add('ms-0');
    } 
    else 
    {
      // W przeciwnym razie, usuń klasę "w-100"
      div.classList.remove('w-100');
      div.classList.remove('ms-0');
    }
  });
}

// Wywołanie funkcji checkWindowSize przy załadowaniu strony i podczas zmiany rozmiaru okna
window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);



//Mechanizm pisania 
        
//Przyy zaladowaniu sie strony wywolujemy funkcje
window.addEventListener('load', showText);

//Funckja ukazująca tekst logowania

function showText()
{
  document.querySelector('#text1').classList.remove('d-none');
  setInterval(() => {
    document.querySelector('#text1').classList.add('border-0');
    document.querySelector('#text2').classList.remove('d-none');
  },1400);
  setInterval(() => {
    document.querySelector('#text2').classList.add('border-0');
    document.querySelector('#text3').classList.remove('d-none');
  },3000);
  setInterval(() => {
    document.querySelector('#text3').classList.add('border-0');
    document.querySelector('#text4').classList.remove('d-none');
  },4200);
  setInterval(() => {
    document.querySelector('#text4').classList.add('border-0');
    document.querySelector('#text5').classList.remove('d-none');
  },5600);
  setInterval(() => {
    document.querySelector('#text5').classList.add('border-0');
    document.querySelector('#dolArtykułu').classList.remove('d-none');
    if (window.location.pathname.includes("mars.html")) 
    {
      document.querySelector('#mars-gif').classList.remove('opacity-0');
    }else if(window.location.pathname.includes("ziemia.html"))
    {
      document.querySelector('#ziemia-gif').classList.remove('opacity-0');
    }else if(window.location.pathname.includes("jowisz.html"))
    {
      document.querySelector('#jowisz-gif').classList.remove('opacity-0');

    }
    document.querySelector('#monitorGif').classList.remove('d-none');
    document.querySelector('#przyciskMonitor1').classList.remove('d-none');
    document.querySelector('#przyciskMonitor2').classList.remove('d-none');
    document.querySelector('#prawaStronaMonitora').classList.remove('border-0');
    document.querySelector('#dolnaStronaMonitora').classList.remove('border-0');
    document.querySelector('#lewaStronaMonitora').classList.remove('border-0');
  },7600);
}


//Informacje o ziemi - interakcje

//Obsługa klikniecia przycisków
document.querySelector('#przyciskMonitor1').addEventListener('click',() => {
  showMonitorInfoText(1,2,3,4);
});

document.querySelector('#przyciskMonitor2').addEventListener('click',() => {
  showMonitorInfoText(5,6,7,8);
});


//Funckja ukazująca dodatkowe informacje na dole monitora

function showMonitorInfoText(nr1,nr2,nr3,nr4)
{
  document.querySelector('#textMonitorInfo' + nr1).classList.remove('d-none');
  setInterval(() => {
    document.querySelector('#textMonitorInfo' + nr1).classList.add('border-0');
    document.querySelector('#textMonitorInfo' + nr2).classList.remove('d-none');
  },2100);
  setInterval(() => {
    document.querySelector('#textMonitorInfo' + nr2).classList.add('border-0');
    document.querySelector('#textMonitorInfo' + nr3).classList.remove('d-none');
  },4200);
  setInterval(() => {
    document.querySelector('#textMonitorInfo' + nr3).classList.add('border-0');
    document.querySelector('#textMonitorInfo' +nr4).classList.remove('d-none');
  },6300);
  setInterval(() => {
    document.querySelector('#textMonitorInfo' + nr4).classList.add('border-0');
  },8200);
}



   // Funkcja sprawdzająca, czy szerokość ekranu przeglądarki odpowiada szerokości laptopa 15,6 cala
   function sprawdzSzerokoscEkranu() {
    // Szerokość ekranu w pikselach
    const szerokoscEkranuPrzegladarki = window.innerWidth;

    // Szerokość ekranu laptopa 15,6 cala w pikselach (załóżmy, że to 1366 pikseli, ale można dostosować do rzeczywistej wartości)
    const szerokoscEkranuLaptopa = 1800;
    const przycisk1 = document.querySelector('#przyciskMonitor1 button');
    const przycisk2 = document.querySelector('#przyciskMonitor2 button');
    const monitor = document.querySelector('#monitor');


    // Sprawdź, czy szerokość ekranu przeglądarki odpowiada szerokości laptopa 15,6 cala
    if (szerokoscEkranuPrzegladarki <= szerokoscEkranuLaptopa) {
        przycisk1.style.bottom = '40px';
        przycisk1.style.right = '790px';
        przycisk2.style.bottom = '40px';
        przycisk2.style.right = '450px';
        monitor.style.top = '72px';
        monitor.style.right = '-36px';

        console.log('funkcja sie wywolala')
        
    } else {
        // Wykonaj inne polecenia, jeśli warunek nie zostanie spełniony
        
    }
}

// Wywołaj funkcję przy załadowaniu strony
sprawdzSzerokoscEkranu();