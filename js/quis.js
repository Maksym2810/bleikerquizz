const videoQuestion = {
  question: "",
  answers: [
    "Nytt liv og energi",
    "Gult er kult",
    "Jesus korset festselse",
    "BleikerQuizzen"
  ],
  correct: "all",
  video: true
};

const quizData = {
  elektro: {
    title: "Elektro og datateknologi",
    questions: [
      {
        question: "Hva måles i Ohm (Ω)?",
        answers: ["Strøm", "Motstand", "Spenning", "Effekt"],
        correct: 1
      },
      {
        question: "Hvilken enhet måler elektrisk strøm?",
        answers: ["Volt", "Watt", "Ampere", "Ohm"],
        correct: 2
      },
      {
        question: "Hva gjør en sikring i et elektrisk anlegg?",
        answers: [
          "Øker spenningen",
          "Stopper strømmen hvis den blir for høy",
          "Lagrer strøm",
          "Lager elektrisk energi"
        ],
        correct: 1
      },
      {
        question: "Hva står AC for i elektrisitet?",
        answers: [
          "Automatic Current",
          "Alternating Current",
          "Active Circuit",
          "Analog Control"
        ],
        correct: 1
      },
      {
        question: "Hva brukes en transformator til?",
        answers: ["Endre spenning", "Lagre strøm", "Måle strøm", "Produsere strøm"],
        correct: 0
      },
      {
        question: "Hva er hovedoppgaven til en PLC i industrien?",
        answers: [
          "Lage nettsider",
          "Styre automatiserte prosesser",
          "Lagre elektrisk energi",
          "Måle temperatur"
        ],
        correct: 1
      },
      {
        question: "Hva er forskjellen på serie- og parallellkobling?",
        answers: [
          "Serie gir samme spenning over alle komponenter",
          "Parallell gir samme strøm gjennom alle komponenter",
          "Serie deler spenningen mellom komponenter",
          "Ingen forskjell"
        ],
        correct: 2
      },
      {
        question: "Hva står IP-gradering for i elektrisk utstyr?",
        answers: [
          "Internet Protocol",
          "Beskyttelsesgrad mot støv og vann",
          "Elektrisk effekt",
          "Ledningstype"
        ],
        correct: 1
      },
      {
        question: "Hva gjør en jordfeilbryter?",
        answers: [
          "Måler strøm",
          "Beskytter mot kortslutning",
          "Kobler ut ved lekkasjestrøm til jord",
          "Øker spenningen"
        ],
        correct: 2
      },
      {
        question: "Hva er en halvleder?",
        answers: [
          "Et materiale som alltid leder strøm",
          "Et materiale som aldri leder strøm",
          "Et materiale som kan lede strøm under bestemte forhold",
          "Et isolerende materiale"
        ],
        correct: 2
      },
      videoQuestion
    ]
  },

  helse: {
    title: "Helse- og oppvekstfag",
    questions: [
      {
        question: "Hva er normal kroppstemperatur hos mennesker?",
        answers: ["35°C", "37°C", "39°C", "40°C"],
        correct: 1
      },
      {
        question: "Hva er førstehjelp ved en person uten pust?",
        answers: [
          "Legge personen ned",
          "Starte hjerte-lungeredning",
          "Gi vann",
          "Vente på ambulanse"
        ],
        correct: 1
      },
      {
        question: "Hva betyr taushetsplikt i helsefag?",
        answers: [
          "Man må være stille på jobb",
          "Man kan ikke dele private opplysninger om pasienter",
          "Man må skrive rapporter",
          "Man må snakke med pasienter"
        ],
        correct: 1
      },
      {
        question: "Hva står HLR for?",
        answers: [
          "Hjerte-lungeredning",
          "Helse-lege-rutine",
          "Hjelp-liv-redning",
          "Hjerte-liv-reaksjon"
        ],
        correct: 0
      },
      {
        question: "Hvilket vitamin får vi hovedsakelig fra sollys?",
        answers: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: 3
      },
      {
        question: "Hva betyr empati i helsearbeid?",
        answers: [
          "Å bestemme over pasienter",
          "Å forstå hvordan andre føler det",
          "Å gi medisiner",
          "Å skrive rapport"
        ],
        correct: 1
      },
      {
        question: "Hva er et viktig prinsipp i smittevern?",
        answers: ["Håndhygiene", "Mørke rom", "Mindre mat", "Mindre søvn"],
        correct: 0
      },
      {
        question: "Hva er demens?",
        answers: [
          "En infeksjon",
          "En hjernesykdom som påvirker hukommelse og funksjon",
          "En muskelskade",
          "En allergi"
        ],
        correct: 1
      },
      {
        question: "Hva betyr universell utforming?",
        answers: [
          "Design for barn",
          "Design som kan brukes av flest mulig",
          "Design kun for eldre",
          "Design kun for sykehus"
        ],
        correct: 1
      },
      {
        question: "Hva er hovedmålet med omsorgsarbeid?",
        answers: [
          "Tjene penger",
          "Skape trygghet og livskvalitet",
          "Redusere arbeidstid",
          "Kontrollere pasienter"
        ],
        correct: 1
      },
      videoQuestion
    ]
  },

  idrett: {
    title: "Idrettsfag",
    questions: [
      {
        question: "Hva er kroppens viktigste energikilde under hard trening?",
        answers: ["Protein", "Karbohydrater", "Vann", "Vitaminer"],
        correct: 1
      },
      {
        question: "Hva måler makspuls?",
        answers: [
          "Maks antall hjerteslag per minutt",
          "Maks oksygenopptak",
          "Maks muskelstyrke",
          "Maks blodtrykk"
        ],
        correct: 0
      },
      {
        question: "Hva betyr kondisjon?",
        answers: [
          "Kroppens evne til å utføre langvarig arbeid",
          "Muskelstyrke",
          "Hurtighet",
          "Fleksibilitet"
        ],
        correct: 0
      },
      {
        question: "Hva er VO₂-maks?",
        answers: [
          "Maks muskelstyrke",
          "Maks oksygenopptak i kroppen",
          "Maks puls",
          "Maks fettforbrenning"
        ],
        correct: 1
      },
      {
        question: "Hva er restitusjon?",
        answers: [
          "Oppvarming",
          "Nedtrapping etter trening",
          "Kroppens gjenoppbygging etter belastning",
          "Maksimal trening"
        ],
        correct: 2
      },
      {
        question: "Hva er anaerob trening?",
        answers: [
          "Trening med lite oksygen",
          "Trening i vann",
          "Trening uten muskler",
          "Trening uten puls"
        ],
        correct: 0
      },
      {
        question: "Hvilket system transporterer oksygen i kroppen?",
        answers: [
          "Fordøyelsessystemet",
          "Sirkulasjonssystemet",
          "Nervesystemet",
          "Hormonsystemet"
        ],
        correct: 1
      },
      {
        question: "Hva er en viktig faktor for å forebygge skader i idrett?",
        answers: ["Oppvarming", "Mindre søvn", "Mindre mat", "Mindre trening"],
        correct: 0
      },
      {
        question: "Hva er eksplosiv styrke?",
        answers: [
          "Evnen til å utvikle kraft raskt",
          "Evnen til å løfte tungt lenge",
          "Evnen til å løpe langt",
          "Evnen til å balansere"
        ],
        correct: 0
      },
      {
        question: "Hva er Fair Play?",
        answers: [
          "Å vinne for enhver pris",
          "Å følge regler og vise respekt",
          "Å spille fort",
          "Å spille alene"
        ],
        correct: 1
      },
      videoQuestion
    ]
  },

  media: {
    title: "Medier og kommunikasjon",
    questions: [
      {
        question: "Hva betyr målgruppe i media?",
        answers: [
          "Hvor reklamen sendes",
          "Hvem budskapet er laget for",
          "Hvor videoen spilles inn",
          "Hvor mange som ser"
        ],
        correct: 1
      },
      {
        question: "Hva står RGB for i digital design?",
        answers: [
          "Red, Green, Blue",
          "Rapid Graphic Build",
          "Render Graphic Base",
          "Red Gradient Blend"
        ],
        correct: 0
      },
      {
        question: "Hva er en storyboard?",
        answers: [
          "En liste over skuespillere",
          "En plan med tegninger av scener i en film",
          "En kameratype",
          "Et redigeringsprogram"
        ],
        correct: 1
      },
      {
        question: "Hva betyr komposisjon i foto?",
        answers: [
          "Lysstyrke",
          "Hvordan elementer er plassert i bildet",
          "Kameraets størrelse",
          "Filformat"
        ],
        correct: 1
      },
      {
        question: "Hva er et virkemiddel i reklame?",
        answers: ["Humor", "Kamera", "Batteri", "Mikrofon"],
        correct: 0
      },
      {
        question: "Hva betyr begrepet algoritme i sosiale medier?",
        answers: [
          "Program som bestemmer hva brukere ser",
          "Kameraeffekt",
          "Filformat",
          "Lydteknikk"
        ],
        correct: 0
      },
      {
        question: "Hva betyr opphavsrett?",
        answers: [
          "Rett til å kopiere alt",
          "Rettigheter til eget kreativt arbeid",
          "Rett til gratis programvare",
          "Rett til reklame"
        ],
        correct: 1
      },
      {
        question: "Hva brukes Adobe Premiere mest til?",
        answers: ["Bilderedigering", "Videoredigering", "3D-modellering", "Spilldesign"],
        correct: 1
      },
      {
        question: "Hva er clickbait?",
        answers: [
          "Overskrifter som lokker til klikk",
          "Kameraeffekt",
          "Lydfilter",
          "Videoformat"
        ],
        correct: 0
      },
      {
        question: "Hva betyr medieetikk?",
        answers: [
          "Regler for datamaskiner",
          "Ansvar og moral i publisering",
          "Kameraoppsett",
          "Filredigering"
        ],
        correct: 1
      },
      videoQuestion
    ]
  },

  pabygg: {
    title: "Påbygging til generell studiekompetanse",
    questions: [
      {
        question: "Hvilket fagområde studerer samfunn og politikk?",
        answers: ["Sosiologi", "Biologi", "Fysikk", "Geografi"],
        correct: 0
      },
      {
        question: "Hva betyr kildekritikk?",
        answers: [
          "Å bruke mange kilder",
          "Å vurdere om informasjon er troverdig",
          "Å skrive lange tekster",
          "Å kopiere kilder"
        ],
        correct: 1
      },
      {
        question: "Hva er en hypotese?",
        answers: [
          "Et endelig svar",
          "En testbar antakelse",
          "En teori",
          "En konklusjon"
        ],
        correct: 1
      },
      {
        question: "Hva er et argument i en tekst?",
        answers: [
          "Et bilde",
          "En påstand med begrunnelse",
          "En overskrift",
          "En kilde"
        ],
        correct: 1
      },
      {
        question: "Hva er demokrati?",
        answers: ["Styre av en konge", "Folkestyre", "Militærstyre", "Diktatur"],
        correct: 1
      },
      {
        question: "Hva er en primærkilde i historie?",
        answers: [
          "En bok skrevet senere",
          "En original kilde fra tiden hendelsen skjedde",
          "En film",
          "En artikkel"
        ],
        correct: 1
      },
      {
        question: "Hva er retorikk?",
        answers: [
          "Læren om overbevisende kommunikasjon",
          "Matematikk",
          "Naturvitenskap",
          "Programmering"
        ],
        correct: 0
      },
      {
        question: "Hva er globalisering?",
        answers: [
          "Lokale markeder",
          "Økt samarbeid og handel mellom land",
          "Mindre handel",
          "Bare turisme"
        ],
        correct: 1
      },
      {
        question: "Hva er en fagartikkel?",
        answers: [
          "En historie",
          "En tekst som forklarer et faglig tema",
          "En reklame",
          "En novelle"
        ],
        correct: 1
      },
      {
        question: "Hva er kritisk tenkning?",
        answers: [
          "Å være negativ",
          "Å analysere informasjon grundig",
          "Å være uenig",
          "Å ignorere fakta"
        ],
        correct: 1
      },
      videoQuestion
    ]
  },

  salg: {
    title: "Salg, service og reiseliv",
    questions: [
      {
        question: "Hva er god kundeservice?",
        answers: [
          "Å ignorere kunder",
          "Å hjelpe kunder på en vennlig og profesjonell måte",
          "Å selge mest mulig",
          "Å snakke lite"
        ],
        correct: 1
      },
      {
        question: "Hva er mersalg?",
        answers: [
          "Å gi rabatt",
          "Å selge flere produkter til kunden",
          "Å avslutte salg",
          "Å sende varer"
        ],
        correct: 1
      },
      {
        question: "Hva betyr serviceinnstilling?",
        answers: [
          "Å være hjelpsom og løsningsorientert",
          "Å jobbe alene",
          "Å snakke lite",
          "Å jobbe raskt"
        ],
        correct: 0
      },
      {
        question: "Hva er CRM i salg?",
        answers: [
          "Customer Relationship Management",
          "Computer Retail Machine",
          "Customer Retail Method",
          "Commerce Retail Model"
        ],
        correct: 0
      },
      {
        question: "Hva er et viktig element i reiselivsnæringen?",
        answers: ["Opplevelser", "Fabrikker", "Jordbruk", "Industri"],
        correct: 0
      },
      {
        question: "Hva er markedsføring?",
        answers: [
          "Å produsere varer",
          "Å gjøre produkter kjent for kunder",
          "Å pakke varer",
          "Å transportere varer"
        ],
        correct: 1
      },
      {
        question: "Hva betyr bærekraftig turisme?",
        answers: [
          "Billige turer",
          "Turisme som tar hensyn til miljø og lokalsamfunn",
          "Kortere turer",
          "Bare flyreiser"
        ],
        correct: 1
      },
      {
        question: "Hva er en målgruppe i salg?",
        answers: [
          "Alle mennesker",
          "Kundene produktet er laget for",
          "Bare ungdom",
          "Bare turister"
        ],
        correct: 1
      },
      {
        question: "Hva er et salgsargument?",
        answers: [
          "En grunn til å kjøpe produktet",
          "En pris",
          "En pakke",
          "En rabatt"
        ],
        correct: 0
      },
      {
        question: "Hva er opplevelsesøkonomi?",
        answers: [
          "Salg av mat",
          "Salg av opplevelser og aktiviteter",
          "Salg av maskiner",
          "Salg av råvarer"
        ],
        correct: 1
      },
      videoQuestion
    ]
  },

  teknologi: {
    title: "Teknologi- og industrifag",
    questions: [
      {
        question: "Hva brukes en dreiebenk til?",
        answers: [
          "Sveising",
          "Bearbeiding av roterende materialer",
          "Maling",
          "Montering"
        ],
        correct: 1
      },
      {
        question: "Hva er sveising?",
        answers: [
          "Kutte metall",
          "Smelte sammen materialer",
          "Male metall",
          "Polere metall"
        ],
        correct: 1
      },
      {
        question: "Hva er en CNC-maskin?",
        answers: [
          "Manuell maskin",
          "Datastyrt maskin for produksjon",
          "Håndverktøy",
          "Sveiseapparat"
        ],
        correct: 1
      },
      {
        question: "Hva er toleranse i produksjon?",
        answers: [
          "Maks temperatur",
          "Tillatt avvik i mål",
          "Maskinstørrelse",
          "Produksjonstid"
        ],
        correct: 1
      },
      {
        question: "Hva er hydraulikk?",
        answers: [
          "Kraftoverføring med væske",
          "Kraftoverføring med luft",
          "Elektrisk kraft",
          "Varme"
        ],
        correct: 0
      },
      {
        question: "Hva er pneumatikk?",
        answers: [
          "Luftbasert kraftsystem",
          "Elektrisk motor",
          "Vannsystem",
          "Sveising"
        ],
        correct: 0
      },
      {
        question: "Hva er HMS?",
        answers: [
          "Helse, miljø og sikkerhet",
          "Høy maskin standard",
          "Hoved maskin system",
          "Industriell standard"
        ],
        correct: 0
      },
      {
        question: "Hva brukes en mikrometer til?",
        answers: [
          "Måle temperatur",
          "Måle svært små lengder nøyaktig",
          "Måle vekt",
          "Måle strøm"
        ],
        correct: 1
      },
      {
        question: "Hva er en legering?",
        answers: [
          "Rent metall",
          "Blandinger av metaller",
          "Plastmateriale",
          "Keramikk"
        ],
        correct: 1
      },
      {
        question: "Hva er automatisering i industri?",
        answers: [
          "Manuell produksjon",
          "Bruk av maskiner og systemer til å styre produksjon automatisk",
          "Mindre maskiner",
          "Mindre arbeid"
        ],
        correct: 1
      },
      videoQuestion
    ]
  },

  it: {
    title: "Informasjonsteknologi og medieproduksjon",
    questions: [
      {
        question: "Hva betyr HTML?",
        answers: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "Hyper Transfer Media Link",
          "Home Tool Markup Language"
        ],
        correct: 0
      },
      {
        question: "Hva er en algoritme?",
        answers: [
          "En type datamaskin",
          "En steg-for-steg løsning på et problem",
          "En nettside",
          "En database"
        ],
        correct: 1
      },
      {
        question: "Hva er en database?",
        answers: [
          "Et program",
          "En strukturert samling av data",
          "En nettside",
          "En server"
        ],
        correct: 1
      },
      {
        question: "Hva betyr UX i design?",
        answers: [
          "User Experience",
          "User Extension",
          "Universal Execution",
          "User Example"
        ],
        correct: 0
      },
      {
        question: "Hva gjør CSS i webdesign?",
        answers: [
          "Lager databaser",
          "Bestemmer utseendet på nettsider",
          "Lagrer data",
          "Lager servere"
        ],
        correct: 1
      },
      {
        question: "Hva betyr API?",
        answers: [
          "Application Programming Interface",
          "Advanced Program Internet",
          "Automatic Program Integration",
          "Applied Programming Input"
        ],
        correct: 0
      },
      {
        question: "Hva er versjonskontroll (Git)?",
        answers: [
          "Backup av PC",
          "System for å spore endringer i kode",
          "Antivirus",
          "Database"
        ],
        correct: 1
      },
      {
        question: "Hva er cybersikkerhet?",
        answers: [
          "Design av nettsider",
          "Beskyttelse av systemer og data mot digitale angrep",
          "Spillutvikling",
          "Datamaskinbygging"
        ],
        correct: 1
      },
      {
        question: "Hva er en frontend-utvikler?",
        answers: [
          "Jobber med databaser",
          "Lager det brukeren ser i en nettside",
          "Jobber med servere",
          "Jobber med nettverk"
        ],
        correct: 1
      },
      {
        question: "Hva er kunstig intelligens?",
        answers: [
          "Datamaskiner som kan lære og ta beslutninger",
          "En type maskinvare",
          "En nettside",
          "En database"
        ],
        correct: 0
      },
      videoQuestion
    ]
  },

  kombi: {
    title: "Kombinasjonsklasse",
    questions: [
      {
        question: "Hvilket styresett har Norge?",
        answers: ["Republikk", "Militærstyre", "Konstitusjonelt monarki", "Diktatur"],
        correct: 2
      },
      {
        question: "Hvem er Norges konge?",
        answers: ["Harald V", "Olav V", "Haakon VII", "Frederik X"],
        correct: 0
      },
      {
        question: "Hva er Stortinget?",
        answers: [
          "Norges regjering",
          "Norges parlament (nasjonalforsamling)",
          "Norges høyesterett",
          "Norges kongehus"
        ],
        correct: 1
      },
      {
        question: "Hva betyr ordet “likestilling”?",
        answers: [
          "Alle skal tjene like mye",
          "Kvinner og menn skal ha samme rettigheter og muligheter",
          "Alle skal ha samme jobb",
          "Alle skal bo på samme sted"
        ],
        correct: 1
      },
      {
        question: "Hvilket av disse fagene er vanlig på videregående skole i Norge?",
        answers: ["Norsk", "Astronaut-trening", "Militær-trening", "Dyrepass"],
        correct: 0
      },
      {
        question: "Hva betyr begrepet “dugnad” i norsk kultur?",
        answers: [
          "Frivillig arbeid for fellesskapet",
          "En type mat",
          "En skoleeksamen",
          "En sport"
        ],
        correct: 0
      },
      {
        question: "Hva er vanlig arbeidstid i Norge for en fulltidsjobb?",
        answers: [
          "Ca. 20 timer per uke",
          "Ca. 37,5 timer per uke",
          "Ca. 50 timer per uke",
          "Ca. 60 timer per uke"
        ],
        correct: 1
      },
      {
        question: "Hva betyr “ytringsfrihet”?",
        answers: [
          "Rett til å reise fritt",
          "Rett til å si sin mening uten frykt for straff",
          "Rett til gratis skole",
          "Rett til arbeid"
        ],
        correct: 1
      },
      {
        question: "Hva er en kommune i Norge?",
        answers: [
          "En type skole",
          "En lokal administrativ enhet som styrer tjenester i et område",
          "En organisasjon",
          "En bedrift"
        ],
        correct: 1
      },
      {
        question: "Hva er målet med videregående opplæring i Norge?",
        answers: [
          "Bare å gi karakterer",
          "Å forberede elever til jobb eller høyere utdanning",
          "Å lære sport",
          "Å lære bare norsk språk"
        ],
        correct: 1
      },
      videoQuestion
    ]
  },

  demokrati: {
    title: "Demokrati og medborgerskap",
    questions: [
      {
        question: "Hva regnes som mobbing?",
        answers: [
          "En enkelt krangel mellom venner",
          "Gjentatt negativ atferd mot en person over tid",
          "Å være uenig med noen",
          "Å gi konstruktiv kritikk"
        ],
        correct: 1
      },
      {
        question: "Hva er et viktig kjennetegn på et godt klassemiljø?",
        answers: [
          "Konkurranse mellom elever",
          "Stillhet i timene",
          "Trygghet og respekt",
          "Strenge regler"
        ],
        correct: 2
      },
      {
        question: "Hva kan være et tegn på utenforskap?",
        answers: [
          "Deltar aktivt i grupper",
          "Blir ofte holdt utenfor aktiviteter",
          "Har mange venner",
          "Er god i sport"
        ],
        correct: 1
      },
      {
        question: "Hva bør du gjøre hvis du ser noen bli mobbet?",
        answers: [
          "Ignorere det",
          "Filme det",
          "Si ifra til en voksen eller hjelpe personen",
          "Le sammen med andre"
        ],
        correct: 2
      },
      {
        question: "Hva handler psykisk helse om?",
        answers: [
          "Bare fysisk styrke",
          "Hvordan vi har det mentalt og følelsesmessig",
          "Hvor mye vi trener",
          "Hva vi spiser"
        ],
        correct: 1
      },
      {
        question: "Hva kan bidra til bedre psykisk helse?",
        answers: [
          "Isolasjon",
          "Søvn, gode relasjoner og aktivitet",
          "Å ignorere følelser",
          "Stress"
        ],
        correct: 1
      },
      {
        question: "Hva betyr demokrati?",
        answers: [
          "At én person bestemmer alt",
          "At folket har makt til å påvirke beslutninger",
          "At lærere bestemmer alt",
          "At ingen bestemmer"
        ],
        correct: 1
      },
      {
        question: "Hva er en viktig del av det å være en god medborger?",
        answers: [
          "Bare tenke på seg selv",
          "Delta i samfunnet og vise ansvar",
          "Unngå andre mennesker",
          "Ikke følge regler"
        ],
        correct: 1
      },
      {
        question: "Hva betyr inkludering?",
        answers: [
          "Å holde noen utenfor",
          "Å la alle få være med og føle tilhørighet",
          "Å konkurrere",
          "Å jobbe alene"
        ],
        correct: 1
      },
      {
        question: "Hva kan du gjøre for å bidra til trivsel på skolen?",
        answers: [
          "Ignorere andre",
          "Spre rykter",
          "Være hyggelig, inkludere andre og vise respekt",
          "Bare fokusere på deg selv"
        ],
        correct: 2
      },
      videoQuestion
    ]
  }
};

// DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const usernameInput = document.getElementById("username");
const classSelect = document.getElementById("class-select");
const startBtn = document.getElementById("start-btn");

const quizTitle = document.getElementById("quiz-title");
const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const videoContainer = document.getElementById("video-container");

const finalScoreEl = document.getElementById("final-score");
const highscoreListEl = document.getElementById("highscore-list");

let currentClass = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let username = "";

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);

function startQuiz() {
  username = usernameInput.value.trim();
  currentClass = classSelect.value;

  if (username === "") {
    alert("Skriv inn navnet ditt.");
    return;
  }

  if (currentClass === "") {
    alert("Velg klasse.");
    return;
  }

  currentQuestions = quizData[currentClass].questions;
  currentQuestionIndex = 0;
  score = 0;

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  quizTitle.textContent = quizData[currentClass].title;
  showQuestion();
}

function showQuestion() {
  resetState();

  const currentQuestion = currentQuestions[currentQuestionIndex];
  progressEl.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${currentQuestions.length}`;

  if (currentQuestion.question === "") {
    questionEl.style.display = "none";
  } else {
    questionEl.style.display = "block";
    questionEl.textContent = currentQuestion.question;
  }

  if (currentQuestion.video) {
    videoContainer.classList.remove("hidden");
  }

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(index, button));
    answersEl.appendChild(button);
  });
}

function resetState() {
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.classList.add("hidden");
  videoContainer.classList.add("hidden");
}

function selectAnswer(selectedIndex, selectedButton) {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((button) => {
    button.disabled = true;
  });

  if (currentQuestion.correct === "all") {
    selectedButton.classList.add("correct");
    feedbackEl.textContent = "Riktig!";
    score++;
  } else if (selectedIndex === currentQuestion.correct) {
    selectedButton.classList.add("correct");
    feedbackEl.textContent = "Riktig!";
    score++;
  } else {
    selectedButton.classList.add("wrong");
    buttons[currentQuestion.correct].classList.add("correct");
    feedbackEl.textContent = "Feil!";
  }

  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  finalScoreEl.textContent =
    `${username}, du fikk ${score} av ${currentQuestions.length} poeng i ${quizData[currentClass].title}.`;

  saveHighscore(username, score, currentClass);
  displayHighscores(currentClass);
}

function saveHighscore(name, scoreValue, classKey) {
  const storageKey = `highscores_${classKey}`;
  let highscores = JSON.parse(localStorage.getItem(storageKey)) || [];

  highscores.push({ name, score: scoreValue });
  highscores.sort((a, b) => b.score - a.score);
  highscores = highscores.slice(0, 5);

  localStorage.setItem(storageKey, JSON.stringify(highscores));
}

function displayHighscores(classKey) {
  const storageKey = `highscores_${classKey}`;
  const highscores = JSON.parse(localStorage.getItem(storageKey)) || [];

  highscoreListEl.innerHTML = "";

  highscores.forEach((player) => {
    const li = document.createElement("li");
    li.textContent = `${player.name} - ${player.score} poeng`;
    highscoreListEl.appendChild(li);
  });
}