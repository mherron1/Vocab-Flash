let spanishWords = [
    {
        "rank": 1,
        "spanish": "que",
        "english": "that, what",
        "exampleSentence": "No sé que hacer.",
        "translation": "I don't know what to do."
      },
      {
        "rank": 2,
        "spanish": "de",
        "english": "of, from",
        "exampleSentence": "El libro de Juan está aquí.",
        "translation": "John's book is here."
      },
      {
        "rank": 3,
        "spanish": "no",
        "english": "no, not",
        "exampleSentence": "No puedo hacerlo.",
        "translation": "I can't do it."
      },
      {
        "rank": 4,
        "spanish": "a",
        "english": "to, at",
        "exampleSentence": "Voy a la tienda.",
        "translation": "I'm going to the store."
      },
      {
        "rank": 5,
        "spanish": "la",
        "english": "the (feminine)",
        "exampleSentence": "La casa es grande.",
        "translation": "The house is big."
      },
      {
        "rank": 6,
        "spanish": "el",
        "english": "the (masculine)",
        "exampleSentence": "El coche es nuevo.",
        "translation": "The car is new."
      },
      {
        "rank": 7,
        "spanish": "es",
        "english": "is",
        "exampleSentence": "Ella es inteligente.",
        "translation": "She is intelligent."
      },
      {
        "rank": 8,
        "spanish": "y",
        "english": "and",
        "exampleSentence": "Juan y Maria son amigos.",
        "translation": "Juan and Maria are friends."
      },
      {
        "rank": 9,
        "spanish": "en",
        "english": "in, on, at",
        "exampleSentence": "Estoy en casa.",
        "translation": "I am at home."
      },
      {
        "rank": 10,
        "spanish": "lo",
        "english": "it, him, you (formal)",
        "exampleSentence": "Lo vi ayer.",
        "english": "I saw him yesterday."
      },
      {
        "rank": 11,
        "spanish": "un",
        "english": "a, an, one",
        "exampleSentence": "Quiero un café.",
        "translation": "I want a coffee."
      },
      {
        "rank": 12,
        "spanish": "por",
        "english": "for, by, through",
        "exampleSentence": "Lo hice por ti.",
        "translation": "I did it for you."
      },
      {
        "rank": 13,
        "spanish": "qué",
        "english": "what, which",
        "exampleSentence": "¿Qué quieres?",
        "translation": "What do you want?"
      },
      {
        "rank": 14,
        "spanish": "me",
        "english": "me",
        "exampleSentence": "Me llamo Juan.",
        "translation": "My name is Juan."
      },
      {
        "rank": 15,
        "spanish": "una",
        "english": "a, an, one (feminine)",
        "exampleSentence": "Quiero una manzana.",
        "translation": "I want an apple."
      },
      {
        "rank": 16,
        "spanish": "te",
        "english": "you (informal)",
        "exampleSentence": "Te espero aquí.",
        "translation": "I'll wait for you here."
      },
      {
        "rank": 17,
        "spanish": "los",
        "english": "the (masculine, plural)",
        "exampleSentence": "Los niños juegan.",
        "translation": "The boys are playing."
      },
      {
        "rank": 18,
        "spanish": "se",
        "english": "himself, herself, itself, themselves",
        "exampleSentence": "Ella se peina.",
        "translation": "She combs her hair."
      },
      {
        "rank": 19,
        "spanish": "con",
        "english": "with",
        "exampleSentence": "Voy con mi amigo.",
        "translation": "I'm going with my friend."
      },
      {
        "rank": 20,
        "spanish": "para",
        "english": "for, to",
        "exampleSentence": "Esto es para ti.",
        "translation": "This is for you."
      },
      {
        "rank": 21,
        "spanish": "mi",
        "english": "my",
        "exampleSentence": "Este es mi libro.",
        "translation": "This is my book."
      },
      {
        "rank": 22,
        "spanish": "está",
        "english": "is (3rd person singular of 'estar')",
        "exampleSentence": "El gato está en la casa.",
        "translation": "The cat is in the house."
      },
      {
        "rank": 23,
        "spanish": "si",
        "english": "if, yes",
        "exampleSentence": "Si quieres, puedes venir.",
        "translation": "If you want, you can come."
      },
      {
        "rank": 24,
        "spanish": "bien",
        "english": "well, good",
        "exampleSentence": "Me siento bien hoy.",
        "translation": "I feel good today."
      },
      {
        "rank": 25,
        "spanish": "pero",
        "english": "but",
        "exampleSentence": "Me gusta el chocolate, pero no las nueces.",
        "translation": "I like chocolate, but not nuts."
      },
      {
        "rank": 26,
        "spanish": "yo",
        "english": "I",
        "exampleSentence": "Yo quiero pizza.",
        "translation": "I want pizza."
      },
      {
        "rank": 27,
        "spanish": "eso",
        "english": "that",
        "exampleSentence": "¿Qué es eso?",
        "translation": "What is that?"
      },
      {
        "rank": 28,
        "spanish": "las",
        "english": "the (feminine, plural)",
        "exampleSentence": "Las chicas son inteligentes.",
        "translation": "The girls are intelligent."
      },
      {
        "rank": 29,
        "spanish": "sí",
        "english": "yes",
        "exampleSentence": "¿Quieres café? - Sí, por favor.",
        "translation": "Do you want coffee? - Yes, please."
      },
      {
        "rank": 30,
        "spanish": "su",
        "english": "his, her, its, their (possessive)",
        "exampleSentence": "Este es su coche.",
        "translation": "This is his/her/its car."
      },
      {
        "rank": 31,
        "spanish": "tu",
        "english": "your (informal)",
        "exampleSentence": "Tu amigo es simpático.",
        "translation": "Your friend is friendly."
      },
      {
        "rank": 32,
        "spanish": "aquí",
        "english": "here",
        "exampleSentence": "Estoy aquí.",
        "translation": "I am here."
      },
      {
        "rank": 33,
        "spanish": "del",
        "english": "of the, from the",
        "exampleSentence": "El libro del autor.",
        "translation": "The book of the author."
      },
      {
        "rank": 34,
        "spanish": "al",
        "english": "to the",
        "exampleSentence": "Voy al parque.",
        "translation": "I'm going to the park."
      },
      {
        "rank": 35,
        "spanish": "como",
        "english": "like, as",
        "exampleSentence": "Ella canta como un ángel.",
        "translation": "She sings like an angel."
      },
      {
        "rank": 36,
        "spanish": "le",
        "english": "him, her, it (indirect object pronoun)",
        "exampleSentence": "Le di el libro a María.",
        "translation": "I gave the book to Maria."
      },
      {
        "rank": 37,
        "spanish": "más",
        "english": "more",
        "exampleSentence": "Quiero más chocolate.",
        "translation": "I want more chocolate."
      },
      {
        "rank": 38,
        "spanish": "esto",
        "english": "this",
        "exampleSentence": "¿Qué es esto?",
        "translation": "What is this?"
      },
      {
        "rank": 39,
        "spanish": "ya",
        "english": "already, now",
        "exampleSentence": "Vamos a casa ya.",
        "translation": "Let's go home now."
      },
      {
        "rank": 40,
        "spanish": "todo",
        "english": "all, everything",
        "exampleSentence": "Ella lo sabe todo.",
        "translation": "She knows everything."
      },
      {
        "rank": 41,
        "spanish": "esta",
        "english": "this (feminine)",
        "exampleSentence": "Esta película es buena.",
        "translation": "This movie is good."
      },
      {
        "rank": 42,
        "spanish": "vamos",
        "english": "we go (1st person plural of 'ir')",
        "exampleSentence": "Vamos al cine.",
        "translation": "We go to the movies."
      },
      {
        "rank": 43,
        "spanish": "muy",
        "english": "very",
        "exampleSentence": "Está muy cansado.",
        "translation": "He is very tired."
      },
      {
        "rank": 44,
        "spanish": "hay",
        "english": "there is, there are",
        "exampleSentence": "Hay muchos libros en la biblioteca.",
        "translation": "There are many books in the library."
      },
      {
        "rank": 45,
        "spanish": "ahora",
        "english": "now",
        "exampleSentence": "Vamos a comer ahora.",
        "translation": "Let's eat now."
      },
      {
        "rank": 46,
        "spanish": "algo",
        "english": "something",
        "exampleSentence": "Tengo algo para ti.",
        "translation": "I have something for you."
      },
      {
        "rank": 47,
        "spanish": "estoy",
        "english": "I am",
        "exampleSentence": "Estoy feliz.",
        "translation": "I am happy."
      },
      {
        "rank": 48,
        "spanish": "tengo",
        "english": "I have",
        "exampleSentence": "Tengo un coche nuevo.",
        "translation": "I have a new car."
      },
      {
        "rank": 49,
        "spanish": "nos",
        "english": "us, ourselves (reflexive pronoun)",
        "exampleSentence": "Nos vemos mañana.",
        "translation": "We'll see each other tomorrow."
      },
      {
        "rank": 50,
        "spanish": "tú",
        "english": "you (informal)",
        "exampleSentence": "Tú eres mi amigo.",
        "translation": "You are my friend."
      },
      {
        "rank": 51,
        "spanish": "nada",
        "english": "nothing",
        "exampleSentence": "No tengo nada.",
        "translation": "I have nothing."
      },
      {
        "rank": 52,
        "spanish": "cuando",
        "english": "when",
        "exampleSentence": "Vamos al parque cuando termine la lluvia.",
        "translation": "We'll go to the park when the rain stops."
      },
      {
        "rank": 53,
        "spanish": "ha",
        "english": "has, have (3rd person singular of 'haber')",
        "exampleSentence": "Él ha llegado.",
        "translation": "He has arrived."
      },
      {
        "rank": 54,
        "spanish": "este",
        "english": "this (masculine)",
        "exampleSentence": "Este libro es interesante.",
        "translation": "This book is interesting."
      },
      {
        "rank": 55,
        "spanish": "sé",
        "english": "I know (1st person singular of 'saber')",
        "exampleSentence": "Yo sé la respuesta.",
        "translation": "I know the answer."
      },
      {
        "rank": 56,
        "spanish": "estás",
        "english": "you are (informal) (2nd person singular of 'estar')",
        "exampleSentence": "Tú estás en casa.",
        "translation": "You are at home."
      },
      {
        "rank": 57,
        "spanish": "así",
        "english": "like this, so",
        "exampleSentence": "Hazlo así.",
        "translation": "Do it like this."
      },
      {
        "rank": 58,
        "spanish": "puedo",
        "english": "I can",
        "exampleSentence": "Puedo nadar.",
        "translation": "I can swim."
      },
      {
        "rank": 59,
        "spanish": "cómo",
        "english": "how, what",
        "exampleSentence": "¿Cómo estás? - Estoy bien.",
        "translation": "How are you? - I'm fine."
      },
      {
        "rank": 60,
        "spanish": "quiero",
        "english": "I want",
        "exampleSentence": "Quiero pizza.",
        "translation": "I want pizza."
      },
      {
        "rank": 61,
        "spanish": "sólo",
        "english": "only, just",
        "exampleSentence": "Tengo solo un dólar.",
        "translation": "I have only one dollar."
      },
      {
        "rank": 62,
        "spanish": "soy",
        "english": "I am (1st person singular of 'ser')",
        "exampleSentence": "Soy estudiante.",
        "translation": "I am a student."
      },
      {
        "rank": 63,
        "spanish": "tiene",
        "english": "has, have (3rd person singular of 'tener')",
        "exampleSentence": "Ella tiene una mascota.",
        "translation": "She has a pet."
      },
      {
        "rank": 64,
        "spanish": "gracias",
        "english": "thank you",
        "exampleSentence": "Gracias por tu ayuda.",
        "translation": "Thank you for your help."
      },
      {
        "rank": 65,
        "spanish": "o",
        "english": "or",
        "exampleSentence": "¿Café o té?",
        "translation": "Coffee or tea?"
      },
      {
        "rank": 66,
        "spanish": "él",
        "english": "he",
        "exampleSentence": "Él es mi hermano.",
        "translation": "He is my brother."
      },
      {
        "rank": 67,
        "spanish": "bueno",
        "english": "good",
        "exampleSentence": "El libro es muy bueno.",
        "translation": "The book is very good."
      },
      {
        "rank": 68,
        "spanish": "fue",
        "english": "was (3rd person singular of 'ser' in the past tense)",
        "exampleSentence": "Fue un buen día.",
        "translation": "It was a good day."
      },
      {
        "rank": 69,
        "spanish": "ser",
        "english": "to be (infinitive)",
        "exampleSentence": "Ser o no ser, esa es la cuestión.",
        "translation": "To be or not to be, that is the question."
      },
      {
        "rank": 70,
        "spanish": "hacer",
        "english": "to do, to make (infinitive)",
        "exampleSentence": "Voy a hacer la cena.",
        "translation": "I'm going to make dinner."
      },
      {
        "rank": 71,
        "spanish": "son",
        "english": "are (3rd person plural of 'ser')",
        "exampleSentence": "Ellos son amigos.",
        "translation": "They are friends."
      },
      {
        "rank": 72,
        "spanish": "todos",
        "english": "all, everyone",
        "exampleSentence": "Todos están invitados.",
        "translation": "Everyone is invited."
      },
      {
        "rank": 73,
        "spanish": "era",
        "english": "was (1st and 3rd person singular of 'ser' in the past)",
        "exampleSentence": "Era un día soleado.",
        "english": "It was a sunny day."
      },
      {
        "rank": 74,
        "spanish": "eres",
        "english": "you are (informal) (2nd person singular of 'ser')",
        "exampleSentence": "Tú eres inteligente.",
        "english": "You are intelligent."
      },
      {
        "rank": 75,
        "spanish": "vez",
        "english": "time, occasion",
        "exampleSentence": "Es la primera vez que lo hago.",
        "english": "It's the first time I do it."
      },
      {
        "rank": 76,
        "spanish": "tienes",
        "english": "you have (informal) (2nd person singular of 'tener')",
        "exampleSentence": "Tienes una sonrisa hermosa.",
        "english": "You have a beautiful smile."
      },
      {
        "rank": 77,
        "spanish": "creo",
        "english": "I believe",
        "exampleSentence": "Creo que tienes razón.",
        "english": "I believe you are right."
      },
      {
        "rank": 78,
        "spanish": "ella",
        "english": "she",
        "exampleSentence": "Ella es mi hermana.",
        "english": "She is my sister."
      },
      {
        "rank": 79,
        "spanish": "he",
        "english": "he, she, it (3rd person singular)",
        "exampleSentence": "He llegado.",
        "english": "I have arrived."
      },
      {
        "rank": 80,
        "spanish": "ese",
        "english": "that (masculine)",
        "exampleSentence": "Ese coche es caro.",
        "english": "That car is expensive."
      },
      {
        "rank": 81,
        "spanish": "voy",
        "english": "I go (1st person singular of 'ir')",
        "exampleSentence": "Voy al mercado.",
        "english": "I go to the market."
      },
      {
        "rank": 82,
        "spanish": "puede",
        "english": "he/she/it can (3rd person singular of 'poder')",
        "exampleSentence": "Ella puede hacerlo.",
        "english": "She can do it."
      },
      {
        "rank": 83,
        "spanish": "sabes",
        "english": "you know (informal) (2nd person singular of 'saber')",
        "exampleSentence": "Tú sabes la respuesta.",
        "english": "You know the answer."
      },
      {
        "rank": 84,
        "spanish": "hola",
        "english": "hello",
        "exampleSentence": "¡Hola! ¿Cómo estás?",
        "english": "Hello! How are you?"
      },
      {
        "rank": 85,
        "spanish": "sus",
        "english": "his, her, its, their (plural possessive)",
        "exampleSentence": "Sus hijos son inteligentes.",
        "english": "Their children are intelligent."
      },
      {
        "rank": 86,
        "spanish": "porque",
        "english": "because",
        "exampleSentence": "No puedo salir porque estoy enfermo.",
        "english": "I can't go out because I'm sick."
      },
      {
        "rank": 87,
        "spanish": "dios",
        "english": "God",
        "exampleSentence": "Dios es amor.",
        "english": "God is love."
      },
      {
        "rank": 88,
        "spanish": "quién",
        "english": "who",
        "exampleSentence": "¿Quién es ese hombre?",
        "english": "Who is that man?"
      },
      {
        "rank": 89,
        "spanish": "nunca",
        "english": "never",
        "exampleSentence": "Nunca he estado allí.",
        "english": "I've never been there."
      },
      {
        "rank": 90,
        "spanish": "dónde",
        "english": "where",
        "exampleSentence": "¿Dónde estás?",
        "english": "Where are you?"
      },
      {
        "rank": 91,
        "spanish": "quieres",
        "english": "you want (informal) (2nd person singular of 'querer')",
        "exampleSentence": "¿Quieres ir al cine?",
        "english": "Do you want to go to the movies?"
      },
      {
        "rank": 92,
        "spanish": "casa",
        "english": "house, home",
        "exampleSentence": "Voy a casa.",
        "english": "I'm going home."
      },
      {
        "rank": 93,
        "spanish": "favor",
        "english": "favor",
        "exampleSentence": "Por favor, ayúdame.",
        "english": "Please, help me."
      },
      {
        "rank": 94,
        "spanish": "esa",
        "english": "that (feminine)",
        "exampleSentence": "Esa película es interesante.",
        "english": "That movie is interesting."
      },
      {
        "rank": 95,
        "spanish": "dos",
        "english": "two",
        "exampleSentence": "Tengo dos gatos.",
        "english": "I have two cats."
      },
      {
        "rank": 96,
        "spanish": "tan",
        "english": "so, such",
        "exampleSentence": "Ella es tan inteligente.",
        "english": "She is so intelligent."
      },
      {
        "rank": 97,
        "spanish": "señor",
        "english": "mister, sir",
        "exampleSentence": "Buenos días, señor.",
        "english": "Good morning, sir."
      },
      {
        "rank": 98,
        "spanish": "tiempo",
        "english": "time, weather",
        "exampleSentence": "El tiempo está soleado.",
        "english": "The weather is sunny."
      },
      {
        "rank": 99,
        "spanish": "verdad",
        "english": "truth",
        "exampleSentence": "Dime la verdad.",
        "english": "Tell me the truth."
      },
      {
        "rank": 100,
        "spanish": "estaba",
        "english": "was (1st and 3rd person singular of 'estar' in the past)",
        "exampleSentence": "Estaba cansado anoche.",
        "english": "I was tired last night."
      },
      {
        "rank": 101,
        "spanish": "mejor",
        "english": "better, best",
        "exampleSentence": "Este restaurante es el mejor de la ciudad.",
        "english": "This restaurant is the best in town."
      },
      {
        "rank": 102,
        "spanish": "están",
        "english": "are (3rd person plural of 'estar')",
        "exampleSentence": "Ellos están en el parque.",
        "english": "They are in the park."
      },
      {
        "rank": 103,
        "spanish": "va",
        "english": "goes (3rd person singular of 'ir')",
        "exampleSentence": "Ella va a la escuela.",
        "english": "She goes to school."
      },
      {
        "rank": 104,
        "spanish": "hombre",
        "english": "man",
        "exampleSentence": "Ese hombre es muy amable.",
        "english": "That man is very kind."
      },
      {
        "rank": 105,
        "spanish": "usted",
        "english": "you (formal)",
        "exampleSentence": "¿Usted necesita ayuda?",
        "english": "Do you need help?"
      },
      {
        "rank": 106,
        "spanish": "mucho",
        "english": "much, many",
        "exampleSentence": "Tengo mucho trabajo.",
        "english": "I have a lot of work."
      },
      {
        "rank": 107,
        "spanish": "hace",
        "english": "does, makes (3rd person singular of 'hacer')",
        "exampleSentence": "Él hace pasteles deliciosos.",
        "english": "He makes delicious cakes."
      },
      {
        "rank": 108,
        "spanish": "entonces",
        "english": "then",
        "exampleSentence": "Terminé mi tarea, entonces fui a jugar.",
        "english": "I finished my homework, then I went to play."
      },
      {
        "rank": 109,
        "spanish": "siento",
        "english": "I feel, I'm sorry (1st person singular of 'sentir')",
        "exampleSentence": "Siento tu pérdida.",
        "english": "I'm sorry for your loss."
      },
      {
        "rank": 110,
        "spanish": "tenemos",
        "english": "we have (1st person plural of 'tener')",
        "exampleSentence": "Tenemos una reunión mañana.",
        "english": "We have a meeting tomorrow."
      },
      {
        "rank": 111,
        "spanish": "puedes",
        "english": "you can (informal) (2nd person singular of 'poder')",
        "exampleSentence": "Puedes hacerlo.",
        "english": "You can do it."
      },
      {
        "rank": 112,
        "spanish": "ahí",
        "english": "there",
        "exampleSentence": "Mi libro está ahí.",
        "english": "My book is there."
      },
      {
        "rank": 113,
        "spanish": "ti",
        "english": "you (informal)",
        "exampleSentence": "Estoy pensando en ti.",
        "english": "I'm thinking of you."
      },
      {
        "rank": 114,
        "spanish": "vida",
        "english": "life",
        "exampleSentence": "La vida es bella.",
        "english": "Life is beautiful."
      },
      {
        "rank": 115,
        "spanish": "ver",
        "english": "see",
        "exampleSentence": "Quiero ver esa película.",
        "english": "I want to see that movie."
      },
      {
        "rank": 116,
        "spanish": "alguien",
        "english": "someone",
        "exampleSentence": "Alguien llamó por teléfono.",
        "english": "Someone called on the phone."
      },
      {
        "rank": 117,
        "spanish": "sr",
        "english": "Mr., sir",
        "exampleSentence": "El Sr. Smith está en una reunión.",
        "english": "Mr. Smith is in a meeting."
      },
      {
        "rank": 118,
        "spanish": "hasta",
        "english": "until",
        "exampleSentence": "Trabajaré hasta tarde.",
        "english": "I will work until late."
      },
      {
        "rank": 119,
        "spanish": "sin",
        "english": "without",
        "exampleSentence": "No puedo vivir sin música.",
        "english": "I can't live without music."
      },
      {
        "rank": 120,
        "spanish": "mí",
        "english": "me",
        "exampleSentence": "Ella habló de mí.",
        "english": "She talked about me."
      },
      {
        "rank": 121,
        "spanish": "solo",
        "english": "alone, only",
        "exampleSentence": "Me siento solo.",
        "english": "I feel alone."
      },
      {
        "rank": 122,
        "spanish": "años",
        "english": "years",
        "exampleSentence": "Tengo treinta años.",
        "english": "I am thirty years old."
      },
      {
        "rank": 123,
        "spanish": "sobre",
        "english": "on, about",
        "exampleSentence": "Hablemos sobre el proyecto.",
        "english": "Let's talk about the project."
      },
      {
        "rank": 124,
        "spanish": "decir",
        "english": "to say, to tell (infinitive)",
        "exampleSentence": "¿Qué quieres decir?",
        "english": "What do you want to say?"
      },
      {
        "rank": 125,
        "spanish": "uno",
        "english": "one",
        "exampleSentence": "Necesito uno más.",
        "english": "I need one more."
      },
      {
        "rank": 126,
        "spanish": "siempre",
        "english": "always",
        "exampleSentence": "Ella siempre llega a tiempo.",
        "english": "She always arrives on time."
      },
      {
        "rank": 127,
        "spanish": "oh",
        "english": "oh",
        "exampleSentence": "¡Oh, no lo sabía!",
        "english": "Oh, I didn't know!"
      },
      {
        "rank": 128,
        "spanish": "ir",
        "english": "to go (infinitive)",
        "exampleSentence": "Vamos a la playa.",
        "english": "Let's go to the beach."
      },
      {
        "rank": 129,
        "spanish": "cosas",
        "english": "things",
        "exampleSentence": "Tengo muchas cosas que hacer.",
        "english": "I have a lot of things to do."
      },
      {
        "rank": 130,
        "spanish": "también",
        "english": "also, too",
        "exampleSentence": "Yo también quiero pizza.",
        "english": "I want pizza too."
      },
      {
        "rank": 131,
        "spanish": "antes",
        "english": "before",
        "exampleSentence": "Llegué antes que tú.",
        "english": "I arrived before you."
      },
      {
        "rank": 132,
        "spanish": "has",
        "english": "you have (informal) (2nd person singular of 'haber')",
        "exampleSentence": "Has terminado tu tarea.",
        "english": "You have finished your homework."
      },
      {
        "rank": 133,
        "spanish": "ni",
        "english": "neither, nor",
        "exampleSentence": "Ni él ni yo podemos ir.",
        "english": "Neither he nor I can go."
      },
      {
        "rank": 134,
        "spanish": "mis",
        "english": "my (plural)",
        "exampleSentence": "Son mis libros.",
        "english": "They are my books."
      },
      {
        "rank": 135,
        "spanish": "día",
        "english": "day",
        "exampleSentence": "Hoy es un buen día.",
        "english": "Today is a good day."
      },
      {
        "rank": 136,
        "spanish": "estar",
        "english": "to be (infinitive)",
        "exampleSentence": "Estoy en casa.",
        "english": "I am at home."
      },
      {
        "rank": 137,
        "spanish": "estamos",
        "english": "we are (1st person plural of 'estar')",
        "exampleSentence": "Estamos listos para salir.",
        "english": "We are ready to go out."
      },
      {
        "rank": 138,
        "spanish": "noche",
        "english": "night",
        "exampleSentence": "Vamos al cine esta noche.",
        "english": "We are going to the movies tonight."
      },
      {
        "rank": 139,
        "spanish": "nadie",
        "english": "nobody, no one",
        "exampleSentence": "Nadie sabe la respuesta.",
        "english": "Nobody knows the answer."
      },
      {
        "rank": 140,
        "spanish": "otra",
        "english": "another, other",
        "exampleSentence": "Quiero otra taza de café.",
        "english": "I want another cup of coffee."
      },
      {
        "rank": 141,
        "spanish": "quiere",
        "english": "he/she/it wants (3rd person singular of 'querer')",
        "exampleSentence": "Ella quiere un helado.",
        "english": "She wants ice cream."
      },
      {
        "rank": 142,
        "spanish": "parece",
        "english": "it seems",
        "exampleSentence": "Parece que va a llover.",
        "english": "It seems like it's going to rain."
      },
      {
        "rank": 143,
        "spanish": "nosotros",
        "english": "we",
        "exampleSentence": "Nosotros vamos al parque.",
        "english": "We are going to the park."
      },
      {
        "rank": 144,
        "spanish": "poco",
        "english": "few, little",
        "exampleSentence": "Tengo poco tiempo.",
        "english": "I have little time."
      },
      {
        "rank": 145,
        "spanish": "padre",
        "english": "father",
        "exampleSentence": "Mi padre es muy trabajador.",
        "english": "My father is very hardworking."
      },
      {
        "rank": 146,
        "spanish": "trabajo",
        "english": "work, job",
        "exampleSentence": "Tengo mucho trabajo esta semana.",
        "english": "I have a lot of work this week."
      },
      {
        "rank": 147,
        "spanish": "gente",
        "english": "people",
        "exampleSentence": "La gente está contenta.",
        "english": "The people are happy."
      },
      {
        "rank": 148,
        "spanish": "mira",
        "english": "look",
        "exampleSentence": "Mira ese hermoso paisaje.",
        "english": "Look at that beautiful landscape."
      },
      {
        "rank": 149,
        "spanish": "vas",
        "english": "you go (informal) (2nd person singular of 'ir')",
        "exampleSentence": "¿A dónde vas?",
        "english": "Where are you going?"
      },
      {
        "rank": 150,
        "spanish": "sea",
        "english": "be (3rd person singular of 'ser' or 'estar')",
        "exampleSentence": "Ella sea muy inteligente.",
        "english": "She is very intelligent."
      },

      {
        "rank": 151,
        "spanish": "les",
        "english": "them, to them",
        "exampleSentence": "Voy a darles un regalo.",
        "english": "I'm going to give them a gift."
      },
      {
        "rank": 152,
        "spanish": "donde",
        "english": "where",
        "exampleSentence": "¿Dónde estás?",
        "english": "Where are you?"
      },
      {
        "rank": 153,
        "spanish": "mismo",
        "english": "same, oneself",
        "exampleSentence": "Tengo el mismo coche.",
        "english": "I have the same car."
      },
      {
        "rank": 154,
        "spanish": "hecho",
        "english": "done, made (past participle of 'hacer')",
        "exampleSentence": "El pastel está hecho.",
        "english": "The cake is done."
      },
      {
        "rank": 155,
        "spanish": "ellos",
        "english": "they",
        "exampleSentence": "Ellos son mis amigos.",
        "english": "They are my friends."
      },
      {
        "rank": 156,
        "spanish": "dijo",
        "english": "said (3rd person singular of 'decir')",
        "exampleSentence": "Él dijo la verdad.",
        "english": "He said the truth."
      },
      {
        "rank": 157,
        "spanish": "pasa",
        "english": "happens, is happening (3rd person singular of 'pasar')",
        "exampleSentence": "¿Qué pasa aquí?",
        "english": "What is happening here?"
      },
      {
        "rank": 158,
        "spanish": "dinero",
        "english": "money",
        "exampleSentence": "Necesito más dinero.",
        "english": "I need more money."
      },
      {
        "rank": 159,
        "spanish": "hijo",
        "english": "son",
        "exampleSentence": "Mi hijo tiene cinco años.",
        "english": "My son is five years old."
      },
      {
        "rank": 160,
        "spanish": "tal",
        "english": "such, so",
        "exampleSentence": "Es tal como lo imaginaba.",
        "english": "It's just as I imagined it."
      },
      {
        "rank": 161,
        "spanish": "otro",
        "english": "other, another",
        "exampleSentence": "Quiero otro helado.",
        "english": "I want another ice cream."
      },
      {
        "rank": 162,
        "spanish": "hablar",
        "english": "to speak, to talk",
        "exampleSentence": "Vamos a hablar en la reunión.",
        "english": "Let's talk at the meeting."
      },
      {
        "rank": 163,
        "spanish": "seguro",
        "english": "sure, secure",
        "exampleSentence": "Estoy seguro de mi decisión.",
        "english": "I'm sure of my decision."
      },
      {
        "rank": 164,
        "spanish": "claro",
        "english": "clear, of course",
        "exampleSentence": "Claro que sí, lo haré.",
        "english": "Of course, I'll do it."
      },
      {
        "rank": 165,
        "spanish": "estas",
        "english": "these",
        "exampleSentence": "Estas son mis cosas.",
        "english": "These are my things."
      },
      {
        "rank": 166,
        "spanish": "lugar",
        "english": "place",
        "exampleSentence": "Este es un buen lugar para descansar.",
        "english": "This is a good place to rest."
      },
      {
        "rank": 167,
        "spanish": "mundo",
        "english": "world",
        "exampleSentence": "El mundo es grande.",
        "english": "The world is big."
      },
      {
        "rank": 168,
        "spanish": "amigo",
        "english": "friend",
        "exampleSentence": "Juan es mi mejor amigo.",
        "english": "Juan is my best friend."
      },
      {
        "rank": 169,
        "spanish": "espera",
        "english": "wait",
        "exampleSentence": "Por favor, espera un momento.",
        "english": "Please, wait a moment."
      },
      {
        "rank": 170,
        "spanish": "mierda",
        "english": "crap, shit",
        "exampleSentence": "¡Qué mierda!",
        "english": "What crap!"
      },
      {
        "rank": 171,
        "spanish": "han",
        "english": "they have (3rd person plural of 'haber')",
        "exampleSentence": "Han llegado tarde.",
        "english": "They have arrived late."
      },
      {
        "rank": 172,
        "spanish": "tus",
        "english": "your (singular, informal)",
        "exampleSentence": "Tus libros están en la mesa.",
        "english": "Your books are on the table."
      },
      {
        "rank": 173,
        "spanish": "sabe",
        "english": "knows (3rd person singular of 'saber')",
        "exampleSentence": "Él sabe la respuesta.",
        "english": "He knows the answer."
      },
      {
        "rank": 174,
        "spanish": "después",
        "english": "after, later",
        "exampleSentence": "Vendré después del trabajo.",
        "english": "I'll come after work."
      },
      {
        "rank": 175,
        "spanish": "momento",
        "english": "moment",
        "exampleSentence": "Espera un momento, por favor.",
        "english": "Wait a moment, please."
      },
      {
        "rank": 176,
        "spanish": "desde",
        "english": "from, since",
        "exampleSentence": "Vivo aquí desde hace cinco años.",
        "english": "I've been living here for five years."
      },
      {
        "rank": 177,
        "spanish": "fuera",
        "english": "outside",
        "exampleSentence": "Hace frío fuera.",
        "english": "It's cold outside."
      },
      {
        "rank": 178,
        "spanish": "cosa",
        "english": "thing",
        "exampleSentence": "No entiendo esa cosa.",
        "english": "I don't understand that thing."
      },
      {
        "rank": 179,
        "spanish": "tipo",
        "english": "type, kind",
        "exampleSentence": "Ella es un tipo de artista.",
        "english": "She's a type of artist."
      },
      {
        "rank": 180,
        "spanish": "mañana",
        "english": "morning, tomorrow",
        "exampleSentence": "Voy a la tienda mañana.",
        "english": "I'm going to the store tomorrow."
      },
      {
        "rank": 181,
        "spanish": "podemos",
        "english": "we can (1st person plural of 'poder')",
        "exampleSentence": "Podemos hacerlo juntos.",
        "english": "We can do it together."
      },
      {
        "rank": 182,
        "spanish": "dije",
        "english": "I said (1st person singular of 'decir')",
        "exampleSentence": "Yo lo dije ayer.",
        "english": "I said it yesterday."
      },
      {
        "rank": 183,
        "spanish": "gran",
        "english": "great, big",
        "exampleSentence": "Es una gran idea.",
        "english": "It's a great idea."
      },
      {
        "rank": 184,
        "spanish": "necesito",
        "english": "I need",
        "exampleSentence": "Necesito tu ayuda.",
        "english": "I need your help."
      },
      {
        "rank": 185,
        "spanish": "estado",
        "english": "state, condition",
        "exampleSentence": "Mi estado de ánimo es bueno.",
        "english": "My mood is good."
      },
      {
        "rank": 186,
        "spanish": "podría",
        "english": "could, might (conditional form of 'poder')",
        "exampleSentence": "Podría ser posible.",
        "english": "It could be possible."
      },
      {
        "rank": 187,
        "spanish": "acuerdo",
        "english": "agreement",
        "exampleSentence": "Estamos de acuerdo contigo.",
        "english": "We agree with you."
      },
      {
        "rank": 188,
        "spanish": "papá",
        "english": "dad, daddy",
        "exampleSentence": "Mi papá es muy amable.",
        "english": "My dad is very kind."
      },
      {
        "rank": 189,
        "spanish": "tener",
        "english": "to have",
        "exampleSentence": "Tengo hambre.",
        "english": "I'm hungry."
      },
      {
        "rank": 190,
        "spanish": "dice",
        "english": "says (3rd person singular of 'decir')",
        "exampleSentence": "Él dice la verdad.",
        "english": "He says the truth."
      },
      {
        "rank": 191,
        "spanish": "mío",
        "english": "mine",
        "exampleSentence": "Ese libro es mío.",
        "english": "That book is mine."
      },
      {
        "rank": 192,
        "spanish": "crees",
        "english": "you believe (informal) (2nd person singular of 'creer')",
        "exampleSentence": "¿Tú crees en fantasmas?",
        "english": "Do you believe in ghosts?"
      },
      {
        "rank": 193,
        "spanish": "buena",
        "english": "good (feminine)",
        "exampleSentence": "Es una buena idea.",
        "english": "It's a good idea."
      },
      {
        "rank": 194,
        "spanish": "gusta",
        "english": "like",
        "exampleSentence": "Me gusta la música.",
        "english": "I like music."
      },
      {
        "rank": 195,
        "spanish": "nuestro",
        "english": "our (masculine)",
        "exampleSentence": "Este es nuestro proyecto.",
        "english": "This is our project."
      },
      {
        "rank": 196,
        "spanish": "nuevo",
        "english": "new",
        "exampleSentence": "Tenemos un coche nuevo.",
        "english": "We have a new car."
      },
      {
        "rank": 197,
        "spanish": "será",
        "english": "will be (3rd person singular of 'ser')",
        "exampleSentence": "Mañana será un buen día.",
        "english": "Tomorrow will be a good day."
      },
      {
        "rank": 198,
        "spanish": "haciendo",
        "english": "doing (present participle of 'hacer')",
        "exampleSentence": "Estoy haciendo mi tarea.",
        "english": "I'm doing my homework."
      },
      {
        "rank": 199,
        "spanish": "días",
        "english": "days",
        "exampleSentence": "Los días son cortos en invierno.",
        "english": "Days are short in winter."
      },
      {
        "rank": 200,
        "spanish": "nombre",
        "english": "name",
        "exampleSentence": "Dime tu nombre, por favor.",
        "english": "Tell me your name, please."
      },
      {
        "rank": 201,
        "spanish": "buen",
        "english": "good (masculine)",
        "exampleSentence": "Es un buen día.",
        "english": "It's a good day."
      },
      {
        "rank": 202,
        "spanish": "había",
        "english": "there was, there were (past tense of 'haber')",
        "exampleSentence": "Había muchos libros en la biblioteca.",
        "english": "There were many books in the library."
      },
      {
        "rank": 203,
        "spanish": "ven",
        "english": "come (2nd person singular of 'venir')",
        "exampleSentence": "Ven aquí, por favor.",
        "english": "Come here, please."
      },
      {
        "rank": 204,
        "spanish": "tres",
        "english": "three",
        "exampleSentence": "Tengo tres gatos.",
        "english": "I have three cats."
      },
      {
        "rank": 205,
        "spanish": "menos",
        "english": "less",
        "exampleSentence": "Tengo menos tiempo ahora.",
        "english": "I have less time now."
      },
      {
        "rank": 206,
        "spanish": "debe",
        "english": "must, should (3rd person singular of 'deber')",
        "exampleSentence": "Él debe estudiar para el examen.",
        "english": "He must study for the exam."
      },
      {
        "rank": 207,
        "spanish": "tenía",
        "english": "had (past tense of 'tener')",
        "exampleSentence": "Tenía un perro cuando era niño.",
        "english": "I had a dog when I was a child."
      },
      {
        "rank": 208,
        "spanish": "mal",
        "english": "bad",
        "exampleSentence": "Ella se siente mal hoy.",
        "english": "She feels bad today."
      },
      {
        "rank": 209,
        "spanish": "conmigo",
        "english": "with me",
        "exampleSentence": "Ven conmigo al parque.",
        "english": "Come with me to the park."
      },
      {
        "rank": 210,
        "spanish": "madre",
        "english": "mother",
        "exampleSentence": "Mi madre cocina muy bien.",
        "english": "My mother cooks very well."
      },
      {
        "rank": 211,
        "spanish": "hoy",
        "english": "today",
        "exampleSentence": "Hoy es un día soleado.",
        "english": "Today is a sunny day."
      },
      {
        "rank": 212,
        "spanish": "quien",
        "english": "who",
        "exampleSentence": "¿Quién es ese hombre?",
        "english": "Who is that man?"
      },
      {
        "rank": 213,
        "spanish": "sido",
        "english": "been (past participle of 'ser' or 'estar')",
        "exampleSentence": "He sido muy afortunado.",
        "english": "I have been very lucky."
      },
      {
        "rank": 214,
        "spanish": "mamá",
        "english": "mom, mommy",
        "exampleSentence": "Mi mamá me preparó el desayuno.",
        "english": "My mom prepared breakfast for me."
      },
      {
        "rank": 215,
        "spanish": "tienen",
        "english": "they have (3rd person plural of 'tener')",
        "exampleSentence": "Tienen un perro y un gato.",
        "english": "They have a dog and a cat."
      },
      {
        "rank": 216,
        "spanish": "luego",
        "english": "later, then",
        "exampleSentence": "Nos vemos luego.",
        "english": "See you later."
      },
      {
        "rank": 217,
        "spanish": "todas",
        "english": "all (feminine)",
        "exampleSentence": "Todas las chicas son amigas.",
        "english": "All the girls are friends."
      },
      {
        "rank": 218,
        "spanish": "allí",
        "english": "there",
        "exampleSentence": "Mi libro está allí.",
        "english": "My book is there."
      },
      {
        "rank": 219,
        "spanish": "toda",
        "english": "all (feminine, singular)",
        "exampleSentence": "Toda la comida está lista.",
        "english": "All the food is ready."
      },
      {
        "rank": 220,
        "spanish": "hora",
        "english": "hour, time",
        "exampleSentence": "Es la hora de cenar.",
        "english": "It's dinner time."
      },
      {
        "rank": 221,
        "spanish": "mujer",
        "english": "woman, wife",
        "exampleSentence": "Ella es una mujer inteligente.",
        "english": "She is an intelligent woman."
      },
      {
        "rank": 222,
        "spanish": "visto",
        "english": "seen (past participle of 'ver')",
        "exampleSentence": "He visto esa película antes.",
        "english": "I have seen that movie before."
      },
      {
        "rank": 223,
        "spanish": "haces",
        "english": "you do, you make (2nd person singular of 'hacer')",
        "exampleSentence": "¿Qué haces aquí?",
        "english": "What are you doing here?"
      },
      {
        "rank": 224,
        "spanish": "importa",
        "english": "matters, is important",
        "exampleSentence": "Tu opinión importa.",
        "english": "Your opinion matters."
      },
      {
        "rank": 225,
        "spanish": "contigo",
        "english": "with you",
        "exampleSentence": "Voy contigo al cine.",
        "english": "I'm going to the movies with you."
      },
      {
        "rank": 226,
        "spanish": "ve",
        "english": "see (2nd person singular of 'ver')",
        "exampleSentence": "Ve el hermoso paisaje.",
        "english": "See the beautiful landscape."
      },
      {
        "rank": 227,
        "spanish": "tarde",
        "english": "late, afternoon",
        "exampleSentence": "Llegó tarde a la reunión.",
        "english": "He arrived late to the meeting."
      },
      {
        "rank": 228,
        "spanish": "oye",
        "english": "listen, hey",
        "exampleSentence": "Oye, ¿me puedes ayudar?",
        "english": "Hey, can you help me?"
      },
      {
        "rank": 229,
        "spanish": "parte",
        "english": "part",
        "exampleSentence": "Esta es la parte más emocionante de la historia.",
        "english": "This is the most exciting part of the story."
      },
      {
        "rank": 230,
        "spanish": "haber",
        "english": "to have (auxiliary verb used to form compound tenses)",
        "exampleSentence": "Debe haber una explicación.",
        "english": "There must be an explanation."
      },
      {
        "rank": 231,
        "spanish": "hombres",
        "english": "men",
        "exampleSentence": "Los hombres están jugando fútbol.",
        "english": "The men are playing soccer."
      },
      {
        "rank": 232,
        "spanish": "problema",
        "english": "problem",
        "exampleSentence": "Tenemos un problema que resolver.",
        "english": "We have a problem to solve."
      },
      {
        "rank": 233,
        "spanish": "mas",
        "english": "more",
        "exampleSentence": "Quiero más chocolate.",
        "english": "I want more chocolate."
      },
      {
        "rank": 234,
        "spanish": "saber",
        "english": "to know (information)",
        "exampleSentence": "Ella sabe la respuesta.",
        "english": "She knows the answer."
      },
      {
        "rank": 235,
        "spanish": "quería",
        "english": "wanted (past tense of 'querer')",
        "exampleSentence": "Quería un helado, pero no tenía dinero.",
        "english": "I wanted ice cream, but I didn't have money."
      },
      {
        "rank": 236,
        "spanish": "aún",
        "english": "still, yet",
        "exampleSentence": "Aún no he terminado.",
        "english": "I haven't finished yet."
      },
      {
        "rank": 237,
        "spanish": "veces",
        "english": "times",
        "exampleSentence": "He visitado París varias veces.",
        "english": "I have visited Paris several times."
      },
      {
        "rank": 238,
        "spanish": "nuestra",
        "english": "our (feminine)",
        "exampleSentence": "Esta es nuestra casa.",
        "english": "This is our house."
      },
      {
        "rank": 239,
        "spanish": "hacerlo",
        "english": "to do it",
        "exampleSentence": "Voy a hacerlo ahora mismo.",
        "english": "I'm going to do it right now."
      },
      {
        "rank": 240,
        "spanish": "cada",
        "english": "each, every",
        "exampleSentence": "Cada día es una nueva oportunidad.",
        "english": "Every day is a new opportunity."
      },
      {
        "rank": 241,
        "spanish": "hizo",
        "english": "did (past tense of 'hacer' or 'hacerlo')",
        "exampleSentence": "Ella lo hizo ayer.",
        "english": "She did it yesterday."
      },
      {
        "rank": 242,
        "spanish": "veo",
        "english": "I see",
        "exampleSentence": "Veo un pájaro en el cielo.",
        "english": "I see a bird in the sky."
      },
      {
        "rank": 243,
        "spanish": "tanto",
        "english": "so much, so many",
        "exampleSentence": "Tengo tanto trabajo que hacer.",
        "english": "I have so much work to do."
      },
      {
        "rank": 244,
        "spanish": "razón",
        "english": "reason",
        "exampleSentence": "Tienes razón en tu argumento.",
        "translation": "You have a point in your argument."
      },
      {
        "rank": 245,
        "spanish": "ustedes",
        "english": "you (plural, formal)",
        "exampleSentence": "Ustedes son muy amables.",
        "translation": "You all are very kind."
      },
      {
        "rank": 246,
        "spanish": "idea",
        "english": "idea",
        "exampleSentence": "Tengo una idea brillante.",
        "translation": "I have a brilliant idea."
      },
      {
        "rank": 247,
        "spanish": "esos",
        "english": "those (masculine, plural)",
        "exampleSentence": "Esos libros son interesantes.",
        "translation": "Those books are interesting."
      },
      {
        "rank": 248,
        "spanish": "van",
        "english": "they go (3rd person plural of 'ir')",
        "exampleSentence": "Ellos van al parque.",
        "translation": "They go to the park."
      },
      {
        "rank": 249,
        "spanish": "quizá",
        "english": "maybe, perhaps",
        "exampleSentence": "Quizá venga más tarde.",
        "translation": "Maybe he'll come later."
      },
      {
        "rank": 250,
        "spanish": "debo",
        "english": "I must, I should (1st person singular of 'deber')",
        "exampleSentence": "Debo estudiar para el examen.",
        "translation": "I must study for the exam."
      },
      {
        "rank": 251,
        "spanish": "alguna",
        "english": "some, any (feminine)",
        "exampleSentence": "¿Tienes alguna pregunta?",
        "translation": "Do you have any questions?"
      },
      {
        "rank": 252,
        "spanish": "cierto",
        "english": "certain, true",
        "exampleSentence": "Es cierto que hace frío.",
        "translation": "It's true that it's cold."
      },
      {
        "rank": 253,
        "spanish": "ud",
        "english": "you (formal, abbreviation for 'usted')",
        "exampleSentence": "¿Cómo está ud?",
        "translation": "How are you?"
      },
      {
        "rank": 254,
        "spanish": "muerto",
        "english": "dead",
        "exampleSentence": "El pájaro está muerto.",
        "translation": "The bird is dead."
      },
      {
        "rank": 255,
        "spanish": "unos",
        "english": "some, a few",
        "exampleSentence": "Necesito unos minutos más.",
        "translation": "I need a few more minutes."
      },
      {
        "rank": 256,
        "spanish": "estos",
        "english": "these",
        "exampleSentence": "Estos libros son interesantes.",
        "translation": "These books are interesting."
      },
      {
        "rank": 257,
        "spanish": "salir",
        "english": "to go out, to leave",
        "exampleSentence": "Vamos a salir esta noche.",
        "translation": "We are going out tonight."
      },
      {
        "rank": 258,
        "spanish": "policía",
        "english": "police",
        "exampleSentence": "La policía está investigando el caso.",
        "translation": "The police are investigating the case."
      },
      {
        "rank": 259,
        "spanish": "realmente",
        "english": "really, truly",
        "exampleSentence": "Eso es realmente impresionante.",
        "translation": "That is really impressive."
      },
      {
        "rank": 260,
        "spanish": "demasiado",
        "english": "too much, excessive",
        "exampleSentence": "Comí demasiado pastel.",
        "translation": "I ate too much cake."
      },
      {
        "rank": 261,
        "spanish": "familia",
        "english": "family",
        "exampleSentence": "Mi familia es muy unida.",
        "translation": "My family is very close-knit."
      },
      {
        "rank": 262,
        "spanish": "pueden",
        "english": "they can, you can (plural)",
        "exampleSentence": "Ellos pueden ayudarte.",
        "translation": "They can help you."
      },
      {
        "rank": 263,
        "spanish": "cabeza",
        "english": "head",
        "exampleSentence": "Me duele la cabeza.",
        "translation": "I have a headache."
      },
      {
        "rank": 264,
        "spanish": "hemos",
        "english": "we have (from 'haber')",
        "exampleSentence": "Hemos terminado el proyecto.",
        "translation": "We have finished the project."
      },
      {
        "rank": 265,
        "spanish": "amigos",
        "english": "friends",
        "exampleSentence": "Saldré con mis amigos esta noche.",
        "translation": "I will go out with my friends tonight."
      },
      {
        "rank": 266,
        "spanish": "chica",
        "english": "girl",
        "exampleSentence": "La chica está estudiando.",
        "translation": "The girl is studying."
      },
      {
        "rank": 267,
        "spanish": "cariño",
        "english": "darling, honey",
        "exampleSentence": "Te amo, cariño.",
        "translation": "I love you, honey."
      },
      {
        "rank": 268,
        "spanish": "lado",
        "english": "side",
        "exampleSentence": "Estoy al lado de la ventana.",
        "translation": "I am by the window."
      },
      {
        "rank": 269,
        "spanish": "allá",
        "english": "there, over there",
        "exampleSentence": "La tienda está allá.",
        "translation": "The store is over there."
      },
      {
        "rank": 270,
        "spanish": "entre",
        "english": "between",
        "exampleSentence": "El libro está entre los otros.",
        "translation": "The book is between the others."
      },
      {
        "rank": 271,
        "spanish": "minutos",
        "english": "minutes",
        "exampleSentence": "Solo faltan cinco minutos.",
        "translation": "There are only five minutes left."
      },
      {
        "rank": 272,
        "spanish": "digo",
        "english": "I say",
        "exampleSentence": "Lo siento, pero eso es lo que digo.",
        "translation": "I'm sorry, but that's what I say."
      },
      {
        "rank": 273,
        "spanish": "algún",
        "english": "some, any",
        "exampleSentence": "¿Tienes algún problema?",
        "translation": "Do you have any problems?"
      },
      {
        "rank": 274,
        "spanish": "serio",
        "english": "serious",
        "exampleSentence": "Este es un asunto serio.",
        "translation": "This is a serious matter."
      },
      {
        "rank": 275,
        "spanish": "cuidado",
        "english": "careful, caution",
        "exampleSentence": "Ten cuidado al cruzar la calle.",
        "translation": "Be careful when crossing the street."
      },
      {
        "rank": 276,
        "spanish": "pasó",
        "english": "it happened, passed",
        "exampleSentence": "No sé lo que pasó.",
        "translation": "I don't know what happened."
      },
      {
        "rank": 277,
        "spanish": "buenas",
        "english": "good (plural, greetings)",
        "exampleSentence": "Dijo buenas noches antes de irse.",
        "translation": "He said goodnight before leaving."
      },
      {
        "rank": 278,
        "spanish": "somos",
        "english": "we are (from 'ser')",
        "exampleSentence": "Somos estudiantes.",
        "translation": "We are students."
      },
      {
        "rank": 279,
        "spanish": "amor",
        "english": "love",
        "exampleSentence": "El amor es hermoso.",
        "translation": "Love is beautiful."
      },
      {
        "rank": 280,
        "spanish": "puerta",
        "english": "door",
        "exampleSentence": "Cierra la puerta, por favor.",
        "translation": "Close the door, please."
      },
      {
        "rank": 281,
        "spanish": "ves",
        "english": "you see (from 'ver')",
        "exampleSentence": "¿Ves lo que quiero decir?",
        "translation": "Do you see what I mean?"
      },
      {
        "rank": 282,
        "spanish": "vaya",
        "english": "go (subjunctive)",
        "exampleSentence": "Espero que vaya bien.",
        "translation": "I hope it goes well."
      },
      {
        "rank": 283,
        "spanish": "ah",
        "english": "ah",
        "exampleSentence": "Ah, entiendo ahora.",
        "translation": "Ah, I understand now."
      },
      {
        "rank": 284,
        "spanish": "suerte",
        "english": "luck",
        "exampleSentence": "Buena suerte en tu examen.",
        "translation": "Good luck on your exam."
      },
      {
        "rank": 285,
        "spanish": "eh",
        "english": "eh",
        "exampleSentence": "¿Qué dices, eh?",
        "translation": "What are you saying, huh?"
      },
      {
        "rank": 286,
        "spanish": "rápido",
        "english": "fast, quickly",
        "exampleSentence": "Ve más rápido.",
        "translation": "Go faster."
      },
      {
        "rank": 287,
        "spanish": "cuenta",
        "english": "account, count",
        "exampleSentence": "Abre una cuenta bancaria.",
        "translation": "Open a bank account."
      },
      {
        "rank": 288,
        "spanish": "quizás",
        "english": "maybe, perhaps",
        "exampleSentence": "Quizás lo haga mañana.",
        "translation": "Maybe I'll do it tomorrow."
      },
      {
        "rank": 289,
        "spanish": "esas",
        "english": "those",
        "exampleSentence": "Esas son mis cosas.",
        "translation": "Those are my things."
      },
      {
        "rank": 290,
        "spanish": "pues",
        "english": "well, then",
        "exampleSentence": "Pues, no sé qué hacer.",
        "translation": "Well, I don't know what to do then."
      },
      {
        "rank": 291,
        "spanish": "pasado",
        "english": "past, last",
        "exampleSentence": "El pasado ya no importa.",
        "translation": "The past doesn't matter anymore."
      },
      {
        "rank": 292,
        "spanish": "pensé",
        "english": "I thought (from 'pensar')",
        "exampleSentence": "Pensé que vendrías.",
        "translation": "I thought you would come."
      },
      {
        "rank": 293,
        "spanish": "todavía",
        "english": "still, yet",
        "exampleSentence": "Todavía no he terminado.",
        "translation": "I haven't finished yet."
      },
      {
        "rank": 294,
        "spanish": "hermano",
        "english": "brother",
        "exampleSentence": "Mi hermano es mayor que yo.",
        "translation": "My brother is older than me."
      },
      {
        "rank": 295,
        "spanish": "debes",
        "english": "you must, you should (from 'deber')",
        "exampleSentence": "Debes estudiar para el examen.",
        "translation": "You should study for the exam."
      },
      {
        "rank": 296,
        "spanish": "casi",
        "english": "almost, nearly",
        "exampleSentence": "Casi lo olvido.",
        "translation": "I almost forgot."
      },
      {
        "rank": 297,
        "spanish": "forma",
        "english": "way, form",
        "exampleSentence": "Hay más de una forma de hacerlo.",
        "translation": "There is more than one way to do it."
      },
      {
        "rank": 298,
        "spanish": "aqui",
        "english": "here",
        "exampleSentence": "Vente aquí conmigo.",
        "translation": "Come here with me."
      },
      {
        "rank": 299,
        "spanish": "chico",
        "english": "boy",
        "exampleSentence": "El chico está jugando afuera.",
        "translation": "The boy is playing outside."
      },
      {
        "rank": 300,
        "spanish": "ok",
        "english": "ok",
        "exampleSentence": "Ok, podemos hacerlo.",
        "translation": "Ok, we can do it."
      },
      {
        "rank": 301,
        "spanish": "dicho",
        "english": "said (from 'decir')",
        "exampleSentence": "Lo he dicho antes.",
        "translation": "I have said it before."
      },
      {
        "rank": 302,
        "spanish": "nueva",
        "english": "new (feminine)",
        "exampleSentence": "Tenemos una casa nueva.",
        "translation": "We have a new house."
      },
      {
        "rank": 303,
        "spanish": "sabía",
        "english": "I knew (from 'saber')",
        "exampleSentence": "Ya lo sabía.",
        "translation": "I already knew it."
      },
      {
        "rank": 304,
        "spanish": "muchas",
        "english": "many, much (feminine)",
        "exampleSentence": "Tengo muchas preguntas.",
        "translation": "I have many questions."
      },
      {
        "rank": 305,
        "spanish": "dentro",
        "english": "inside",
        "exampleSentence": "Está dentro de la caja.",
        "translation": "It's inside the box."
      },
      {
        "rank": 306,
        "spanish": "hice",
        "english": "I did (from 'hacer')",
        "exampleSentence": "Lo hice ayer.",
        "translation": "I did it yesterday."
      },
      {
        "rank": 307,
        "spanish": "contra",
        "english": "against",
        "exampleSentence": "Lucharon contra el enemigo.",
        "translation": "They fought against the enemy."
      },
      {
        "rank": 308,
        "spanish": "auto",
        "english": "car (commonly used in Latin America)",
        "exampleSentence": "Tengo un auto nuevo.",
        "translation": "I have a new car."
      },
      {
        "rank": 309,
        "spanish": "camino",
        "english": "road, way, path",
        "exampleSentence": "El camino es largo.",
        "translation": "The road is long."
      },
      {
        "rank": 310,
        "spanish": "ayuda",
        "english": "help, assistance",
        "exampleSentence": "Necesito tu ayuda.",
        "translation": "I need your help."
      },
      {
        "rank": 311,
        "spanish": "primera",
        "english": "first (feminine)",
        "exampleSentence": "Es la primera vez que lo hago.",
        "translation": "It's the first time I do it."
      },
      {
        "rank": 312,
        "spanish": "hacia",
        "english": "toward, towards",
        "exampleSentence": "Camina hacia la luz.",
        "translation": "Walk toward the light."
      },
      {
        "rank": 313,
        "spanish": "vi",
        "english": "I saw (from 'ver')",
        "exampleSentence": "Vi una película anoche.",
        "translation": "I saw a movie last night."
      },
      {
        "rank": 314,
        "spanish": "miedo",
        "english": "fear, fright",
        "exampleSentence": "Tengo miedo de la oscuridad.",
        "translation": "I'm afraid of the dark."
      },
      {
        "rank": 315,
        "spanish": "adiós",
        "english": "goodbye, farewell",
        "exampleSentence": "Dijo adiós y se fue.",
        "translation": "He said goodbye and left."
      },
      {
        "rank": 316,
        "spanish": "primero",
        "english": "first",
        "exampleSentence": "Debes hacerlo primero.",
        "translation": "You should do it first."
      },
      {
        "rank": 317,
        "spanish": "debería",
        "english": "I should (from 'deber')",
        "exampleSentence": "Debería hacer ejercicio.",
        "translation": "I should exercise."
      },
      {
        "rank": 318,
        "spanish": "poder",
        "english": "to be able to, can",
        "exampleSentence": "Puedes hacerlo.",
        "translation": "You can do it."
      },
      {
        "rank": 319,
        "spanish": "niños",
        "english": "children",
        "exampleSentence": "Los niños están jugando.",
        "translation": "The children are playing."
      },
      {
        "rank": 320,
        "spanish": "sería",
        "english": "it would be (from 'ser')",
        "exampleSentence": "Sería genial verlo.",
        "translation": "It would be great to see it."
      },
      {
        "rank": 321,
        "spanish": "historia",
        "english": "history, story",
        "exampleSentence": "Esa es una historia interesante.",
        "translation": "That's an interesting story."
      },
      {
        "rank": 322,
        "spanish": "hey",
        "english": "hey",
        "exampleSentence": "Hey, ¿qué pasa?",
        "translation": "Hey, what's up?"
      },
      {
        "rank": 323,
        "spanish": "mientras",
        "english": "while",
        "exampleSentence": "Estudia mientras yo cocino.",
        "translation": "Study while I cook."
      },
      {
        "rank": 324,
        "spanish": "ciudad",
        "english": "city",
        "exampleSentence": "Vivo en una gran ciudad.",
        "translation": "I live in a big city."
      },
      {
        "rank": 325,
        "spanish": "dijiste",
        "english": "you said (from 'decir')",
        "exampleSentence": "Dijiste que vendrías.",
        "translation": "You said you would come."
      },
      {
        "rank": 326,
        "spanish": "espero",
        "english": "I hope, I wait for",
        "exampleSentence": "Espero que todo salga bien.",
        "translation": "I hope everything goes well."
      },
      {
        "rank": 327,
        "spanish": "cuánto",
        "english": "how much, how many",
        "exampleSentence": "¿Cuánto cuesta?",
        "translation": "How much does it cost?"
      },
      {
        "rank": 328,
        "spanish": "esposa",
        "english": "wife",
        "exampleSentence": "Mi esposa es muy amable.",
        "translation": "My wife is very kind."
      },
      {
        "rank": 329,
        "spanish": "pronto",
        "english": "soon",
        "exampleSentence": "Volveré pronto.",
        "translation": "I will return soon."
      },
      {
        "rank": 330,
        "spanish": "chicos",
        "english": "kids, boys",
        "exampleSentence": "Los chicos están jugando afuera.",
        "translation": "The kids are playing outside."
      },
      {
        "rank": 331,
        "spanish": "cualquier",
        "english": "any, whichever",
        "exampleSentence": "Puedes elegir cualquier cosa.",
        "translation": "You can choose anything."
      },
      {
        "rank": 332,
        "spanish": "viejo",
        "english": "old (masculine)",
        "exampleSentence": "Ese es un coche viejo.",
        "translation": "That's an old car."
      },
      {
        "rank": 333,
        "spanish": "debemos",
        "english": "we must (from 'deber')",
        "exampleSentence": "Debemos hacerlo juntos.",
        "translation": "We must do it together."
      },
      {
        "rank": 334,
        "spanish": "deja",
        "english": "he/she/it leaves, lets (from 'dejar')",
        "exampleSentence": "Deja que lo piense.",
        "translation": "Let me think about it."
      },
      {
        "rank": 335,
        "spanish": "año",
        "english": "year",
        "exampleSentence": "El año pasado fue increíble.",
        "translation": "Last year was amazing."
      },
      {
        "rank": 336,
        "spanish": "muerte",
        "english": "death",
        "exampleSentence": "La muerte es inevitable.",
        "translation": "Death is inevitable."
      },
      {
        "rank": 337,
        "spanish": "hablando",
        "english": "talking (from 'hablar')",
        "exampleSentence": "Estamos hablando de política.",
        "translation": "We are talking about politics."
      },
      {
        "rank": 338,
        "spanish": "manos",
        "english": "hands",
        "exampleSentence": "Lava tus manos antes de comer.",
        "translation": "Wash your hands before eating."
      },
      {
        "rank": 339,
        "spanish": "da",
        "english": "he/she/it gives (from 'dar')",
        "exampleSentence": "Da un regalo a tu hermano.",
        "translation": "Give a gift to your brother."
      },
      {
        "rank": 340,
        "spanish": "loco",
        "english": "crazy, mad",
        "exampleSentence": "Ese hombre está loco.",
        "translation": "That man is crazy."
      },
      {
        "rank": 341,
        "spanish": "problemas",
        "english": "problems",
        "exampleSentence": "Tenemos muchos problemas.",
        "translation": "We have many problems."
      },
      {
        "rank": 342,
        "spanish": "mano",
        "english": "hand",
        "exampleSentence": "Le di la mano.",
        "translation": "I shook his hand."
      },
      {
        "rank": 343,
        "spanish": "guerra",
        "english": "war",
        "exampleSentence": "La guerra es destructiva.",
        "translation": "War is destructive."
      },
      {
        "rank": 344,
        "spanish": "semana",
        "english": "week",
        "exampleSentence": "Nos vemos la próxima semana.",
        "translation": "See you next week."
      },
      {
        "rank": 345,
        "spanish": "pasar",
        "english": "to pass, to spend",
        "exampleSentence": "Vamos a pasar un buen rato.",
        "translation": "We're going to have a good time."
      },
      {
        "rank": 346,
        "spanish": "vale",
        "english": "okay, all right",
        "exampleSentence": "Vale, hagámoslo.",
        "translation": "Okay, let's do it."
      },
      {
        "rank": 347,
        "spanish": "cuál",
        "english": "which, what",
        "exampleSentence": "¿Cuál prefieres?",
        "translation": "Which one do you prefer?"
      },
      {
        "rank": 348,
        "spanish": "viene",
        "english": "he/she/it comes (from 'venir')",
        "exampleSentence": "Él viene a la fiesta.",
        "translation": "He's coming to the party."
      },
      {
        "rank": 349,
        "spanish": "volver",
        "english": "to return, to go back",
        "exampleSentence": "Volveré pronto.",
        "translation": "I will return soon."
      },
      {
        "rank": 350,
        "spanish": "toma",
        "english": "take (imperative)",
        "exampleSentence": "Toma un poco de agua.",
        "translation": "Take some water."
      },
      {
        "rank": 351,
        "spanish": "caso",
        "english": "case",
        "exampleSentence": "Este es un caso complicado.",
        "translation": "This is a complicated case."
      },
      {
        "rank": 352,
        "spanish": "agua",
        "english": "water",
        "exampleSentence": "Necesito un vaso de agua.",
        "translation": "I need a glass of water."
      },
      {
        "rank": 353,
        "spanish": "haré",
        "english": "I will do (from 'hacer')",
        "exampleSentence": "Lo haré mañana.",
        "translation": "I will do it tomorrow."
      },
      {
        "rank": 354,
        "spanish": "vete",
        "english": "go (informal, from 'irse')",
        "exampleSentence": "Vete de aquí.",
        "translation": "Go away from here."
      },
      {
        "rank": 355,
        "spanish": "entiendo",
        "english": "I understand (from 'entender')",
        "exampleSentence": "Sí, entiendo lo que dices.",
        "translation": "Yes, I understand what you're saying."
      },
      {
        "rank": 356,
        "spanish": "horas",
        "english": "hours",
        "exampleSentence": "Trabajé muchas horas hoy.",
        "translation": "I worked many hours today."
      },
      {
        "rank": 357,
        "spanish": "personas",
        "english": "people",
        "exampleSentence": "Hay muchas personas aquí.",
        "translation": "There are many people here."
      },
      {
        "rank": 358,
        "spanish": "capitán",
        "english": "captain",
        "exampleSentence": "El capitán del barco.",
        "translation": "The captain of the ship."
      },
      {
        "rank": 359,
        "spanish": "adelante",
        "english": "forward, ahead",
        "exampleSentence": "Sigue adelante sin miedo.",
        "translation": "Keep going forward without fear."
      },
      {
        "rank": 360,
        "spanish": "niño",
        "english": "boy, child",
        "exampleSentence": "El niño juega en el parque.",
        "translation": "The boy is playing in the park."
      },
      {
        "rank": 361,
        "spanish": "listo",
        "english": "ready, clever",
        "exampleSentence": "Estoy listo para empezar.",
        "translation": "I'm ready to start."
      },
      {
        "rank": 362,
        "spanish": "noches",
        "english": "nights",
        "exampleSentence": "Pasamos las noches juntos.",
        "translation": "We spend the nights together."
      },
      {
        "rank": 363,
        "spanish": "buenos",
        "english": "good (plural)",
        "exampleSentence": "Tenemos buenos amigos.",
        "translation": "We have good friends."
      },
      {
        "rank": 364,
        "spanish": "iba",
        "english": "he/she/it was going (from 'ir')",
        "exampleSentence": "Ella iba al supermercado.",
        "translation": "She was going to the supermarket."
      },
      {
        "rank": 365,
        "spanish": "juntos",
        "english": "together",
        "exampleSentence": "Siempre estamos juntos.",
        "translation": "We are always together."
      },
      {
        "rank": 366,
        "spanish": "dame",
        "english": "give me (imperative, from 'dar')",
        "exampleSentence": "Dame un momento.",
        "translation": "Give me a moment."
      },
      {
        "rank": 367,
        "spanish": "único",
        "english": "unique, only",
        "exampleSentence": "Es el único en su familia.",
        "translation": "He's the only one in his family."
      },
      {
        "rank": 368,
        "spanish": "déjame",
        "english": "let me (from 'dejar')",
        "exampleSentence": "Déjame pensar en ello.",
        "translation": "Let me think about it."
      },
      {
        "rank": 369,
        "spanish": "cerca",
        "english": "near, close",
        "exampleSentence": "La tienda está cerca.",
        "translation": "The store is close."
      },
      {
        "rank": 370,
        "spanish": "otros",
        "english": "others",
        "exampleSentence": "Los otros están esperando.",
        "translation": "The others are waiting."
      },
      {
        "rank": 371,
        "spanish": "sigue",
        "english": "he/she/it follows, continues (from 'seguir')",
        "exampleSentence": "Sigue el camino.",
        "translation": "Follow the path."
      },
      {
        "rank": 372,
        "spanish": "grande",
        "english": "big, large",
        "exampleSentence": "Esa es una casa grande.",
        "translation": "That's a big house."
      },
      {
        "rank": 373,
        "spanish": "arriba",
        "english": "above, upstairs",
        "exampleSentence": "Mi habitación está arriba.",
        "translation": "My room is upstairs."
      },
      {
        "rank": 374,
        "spanish": "jefe",
        "english": "boss",
        "exampleSentence": "El jefe está en una reunión.",
        "translation": "The boss is in a meeting."
      },
      {
        "rank": 375,
        "spanish": "habla",
        "english": "he/she/it talks (from 'hablar')",
        "exampleSentence": "Ella habla varios idiomas.",
        "translation": "She speaks several languages."
      },
      {
        "rank": 376,
        "spanish": "supongo",
        "english": "I suppose",
        "exampleSentence": "Supongo que tienes razón.",
        "translation": "I suppose you're right."
      },
      {
        "rank": 377,
        "spanish": "manera",
        "english": "way, manner",
        "exampleSentence": "Hazlo de otra manera.",
        "translation": "Do it in a different way."
      },
      {
        "rank": 378,
        "spanish": "quieren",
        "english": "they want (from 'querer')",
        "exampleSentence": "Ellos quieren pizza.",
        "translation": "They want pizza."
      },
      {
        "rank": 379,
        "spanish": "feliz",
        "english": "happy",
        "exampleSentence": "Ella es una persona feliz.",
        "translation": "She is a happy person."
      },
      {
        "rank": 380,
        "spanish": "significa",
        "english": "it means (from 'significar')",
        "exampleSentence": "¿Qué significa esto?",
        "translation": "What does this mean?"
      },
      {
        "rank": 381,
        "spanish": "sangre",
        "english": "blood",
        "exampleSentence": "La sangre es roja.",
        "translation": "Blood is red."
      },
      {
        "rank": 382,
        "spanish": "fin",
        "english": "end",
        "exampleSentence": "Llegamos al fin del camino.",
        "translation": "We reached the end of the road."
      },
      {
        "rank": 383,
        "spanish": "bajo",
        "english": "low, under",
        "exampleSentence": "El precio es bajo.",
        "translation": "The price is low."
      },
      {
        "rank": 384,
        "spanish": "llama",
        "english": "he/she/it calls (from 'llamar')",
        "exampleSentence": "Él llama a su madre.",
        "translation": "He calls his mother."
      },
      {
        "rank": 385,
        "spanish": "venir",
        "english": "to come",
        "exampleSentence": "Voy a venir más tarde.",
        "translation": "I'm going to come later."
      },
      {
        "rank": 386,
        "spanish": "morir",
        "english": "to die",
        "exampleSentence": "Todos vamos a morir algún día.",
        "translation": "We will all die someday."
      },
      {
        "rank": 387,
        "spanish": "importante",
        "english": "important",
        "exampleSentence": "Es un asunto importante.",
        "translation": "It's an important matter."
      },
      {
        "rank": 388,
        "spanish": "hiciste",
        "english": "you did (from 'hacer')",
        "exampleSentence": "Lo hiciste muy bien.",
        "translation": "You did it very well."
      },
      {
        "rank": 389,
        "spanish": "ojos",
        "english": "eyes",
        "exampleSentence": "Tus ojos son hermosos.",
        "translation": "Your eyes are beautiful."
      },
      {
        "rank": 390,
        "spanish": "escucha",
        "english": "he/she/it listens (from 'escuchar')",
        "exampleSentence": "Escucha la música.",
        "translation": "Listen to the music."
      },
      {
        "rank": 391,
        "spanish": "entrar",
        "english": "to enter",
        "exampleSentence": "Puedes entrar por la puerta.",
        "translation": "You can enter through the door."
      },
      {
        "rank": 392,
        "spanish": "ningún",
        "english": "none, not any",
        "exampleSentence": "No tengo ningún dinero.",
        "translation": "I don't have any money."
      },
      {
        "rank": 393,
        "spanish": "corazón",
        "english": "heart",
        "exampleSentence": "Mi corazón late rápido.",
        "translation": "My heart beats fast."
      },
      {
        "rank": 394,
        "spanish": "diablos",
        "english": "devils, hell",
        "exampleSentence": "¡Qué diablos estás haciendo!",
        "translation": "What the hell are you doing!"
      },
      {
        "rank": 395,
        "spanish": "necesitamos",
        "english": "we need (from 'necesitar')",
        "exampleSentence": "Necesitamos tu ayuda.",
        "translation": "We need your help."
      },
      {
        "rank": 396,
        "spanish": "atrás",
        "english": "back, behind",
        "exampleSentence": "Está justo atrás de ti.",
        "translation": "It's right behind you."
      },
      {
        "rank": 397,
        "spanish": "durante",
        "english": "during",
        "exampleSentence": "Durante la fiesta, bailamos.",
        "translation": "During the party, we danced."
      },
      {
        "rank": 398,
        "spanish": "dices",
        "english": "you say (from 'decir')",
        "exampleSentence": "¿Qué dices tú?",
        "translation": "What do you say?"
      },
      {
        "rank": 399,
        "spanish": "nuestros",
        "english": "our (masculine)",
        "exampleSentence": "Estos son nuestros libros.",
        "translation": "These are our books."
      },
      {
        "rank": 400,
        "spanish": "persona",
        "english": "person",
        "exampleSentence": "Cada persona es única.",
        "translation": "Every person is unique."
      },
      {
        "rank": 401,
        "spanish": "abajo",
        "english": "down",
        "exampleSentence": "Baja las escaleras.",
        "translation": "Go down the stairs."
      },
      {
        "rank": 402,
        "spanish": "dr",
        "english": "Dr.",
        "exampleSentence": "El Dr. Smith es un buen médico.",
        "translation": "Dr. Smith is a good doctor."
      },
      {
        "rank": 403,
        "spanish": "hija",
        "english": "daughter",
        "exampleSentence": "Mi hija tiene cinco años.",
        "translation": "My daughter is five years old."
      },
      {
        "rank": 404,
        "spanish": "dejar",
        "english": "to leave, to let",
        "exampleSentence": "Por favor, déjame terminar.",
        "translation": "Please let me finish."
      },
      {
        "rank": 405,
        "spanish": "necesita",
        "english": "he/she/it needs (from 'necesitar')",
        "exampleSentence": "Él necesita ayuda.",
        "translation": "He needs help."
      },
      {
        "rank": 406,
        "spanish": "llegar",
        "english": "to arrive",
        "exampleSentence": "Voy a llegar pronto.",
        "translation": "I'm going to arrive soon."
      },
      {
        "rank": 407,
        "spanish": "hago",
        "english": "I do, I make (from 'hacer')",
        "exampleSentence": "Lo hago todos los días.",
        "translation": "I do it every day."
      },
      {
        "rank": 408,
        "spanish": "señora",
        "english": "lady, Mrs.",
        "exampleSentence": "La señora López es amable.",
        "translation": "Mrs. López is kind."
      },
      {
        "rank": 409,
        "spanish": "haya",
        "english": "he/she/it has (subjunctive, from 'haber')",
        "exampleSentence": "Espero que haya comida.",
        "translation": "I hope there is food."
      },
      {
        "rank": 410,
        "spanish": "suficiente",
        "english": "enough",
        "exampleSentence": "Eso es suficiente por hoy.",
        "translation": "That's enough for today."
      },
      {
        "rank": 411,
        "spanish": "doctor",
        "english": "doctor",
        "exampleSentence": "El doctor te verá pronto.",
        "translation": "The doctor will see you soon."
      },
      {
        "rank": 412,
        "spanish": "gustaría",
        "english": "I would like (from 'gustar')",
        "exampleSentence": "Me gustaría un café.",
        "translation": "I would like a coffee."
      },
      {
        "rank": 413,
        "spanish": "tierra",
        "english": "earth, land",
        "exampleSentence": "La tierra es nuestro hogar.",
        "translation": "The earth is our home."
      },
      {
        "rank": 414,
        "spanish": "cara",
        "english": "face",
        "exampleSentence": "Tiene una cara hermosa.",
        "translation": "She has a beautiful face."
      },
      {
        "rank": 415,
        "spanish": "siquiera",
        "english": "even",
        "exampleSentence": "No me miró siquiera.",
        "translation": "He didn't even look at me."
      },
      {
        "rank": 416,
        "spanish": "genial",
        "english": "great, cool",
        "exampleSentence": "¡Eso suena genial!",
        "translation": "That sounds great!"
      },
      {
        "rank": 417,
        "spanish": "cree",
        "english": "he/she/it believes (from 'creer')",
        "exampleSentence": "Él lo cree firmemente.",
        "translation": "He believes it strongly."
      },
      {
        "rank": 418,
        "spanish": "supuesto",
        "english": "of course",
        "exampleSentence": "Por supuesto, estoy de acuerdo.",
        "translation": "Of course, I agree."
      },
      {
        "rank": 419,
        "spanish": "tomar",
        "english": "to take",
        "exampleSentence": "Voy a tomar un refresco.",
        "translation": "I'm going to take a soft drink."
      },
      {
        "rank": 420,
        "spanish": "equipo",
        "english": "team, equipment",
        "exampleSentence": "Nuestro equipo ganó el partido.",
        "translation": "Our team won the game."
      },
      {
        "rank": 421,
        "spanish": "justo",
        "english": "fair, just",
        "exampleSentence": "Es un juicio justo.",
        "translation": "It's a fair trial."
      },
      {
        "rank": 422,
        "spanish": "juego",
        "english": "game, I play (from 'jugar')",
        "exampleSentence": "Me gusta jugar al fútbol.",
        "translation": "I like to play soccer."
      },
      {
        "rank": 423,
        "spanish": "ninguna",
        "english": "none",
        "exampleSentence": "No tengo ninguna razón.",
        "translation": "I have no reason."
      },
      {
        "rank": 424,
        "spanish": "matar",
        "english": "to kill",
        "exampleSentence": "No deberías matar a nadie.",
        "translation": "You shouldn't kill anyone."
      },
      {
        "rank": 425,
        "spanish": "cinco",
        "english": "five",
        "exampleSentence": "Tengo cinco hermanos.",
        "translation": "I have five siblings."
      },
      {
        "rank": 426,
        "spanish": "dicen",
        "english": "they say (from 'decir')",
        "exampleSentence": "Dicen que va a llover.",
        "translation": "They say it's going to rain."
      },
      {
        "rank": 427,
        "spanish": "amo",
        "english": "I love (from 'amar')",
        "exampleSentence": "Te amo con todo mi corazón.",
        "translation": "I love you with all my heart."
      },
      {
        "rank": 428,
        "spanish": "cuándo",
        "english": "when",
        "exampleSentence": "¿Cuándo vas a llegar?",
        "translation": "When are you going to arrive?"
      },
      {
        "rank": 429,
        "spanish": "pequeño",
        "english": "small, little",
        "exampleSentence": "Tiene un perro pequeño.",
        "translation": "He has a small dog."
      },
      {
        "rank": 430,
        "spanish": "algunos",
        "english": "some",
        "exampleSentence": "Hay algunos libros aquí.",
        "translation": "There are some books here."
      },
      {
        "rank": 431,
        "spanish": "conozco",
        "english": "I know (from 'conocer')",
        "exampleSentence": "Conozco este lugar.",
        "translation": "I know this place."
      },
      {
        "rank": 432,
        "spanish": "clase",
        "english": "class",
        "exampleSentence": "La clase comienza a las 9.",
        "translation": "The class starts at 9."
      },
      {
        "rank": 433,
        "spanish": "maldito",
        "english": "damn, cursed",
        "exampleSentence": "¡Maldito sea!",
        "translation": "Damn it!"
      },
      {
        "rank": 434,
        "spanish": "unas",
        "english": "some (feminine)",
        "exampleSentence": "Compré unas flores.",
        "translation": "I bought some flowers."
      },
      {
        "rank": 435,
        "spanish": "muchos",
        "english": "many",
        "exampleSentence": "Hay muchos libros en la biblioteca.",
        "translation": "There are many books in the library."
      },
      {
        "rank": 436,
        "spanish": "hubiera",
        "english": "there would be (conditional, from 'haber')",
        "exampleSentence": "Si hubiera comida, comería.",
        "translation": "If there was food, I would eat."
      },
      {
        "rank": 437,
        "spanish": "segundo",
        "english": "second",
        "exampleSentence": "Es el segundo piso.",
        "translation": "It's the second floor."
      },
      {
        "rank": 438,
        "spanish": "aunque",
        "english": "although, even though",
        "exampleSentence": "Aunque llueva, iré.",
        "translation": "I will go even though it rains."
      },
      {
        "rank": 439,
        "spanish": "pueda",
        "english": "he/she/it can (from 'poder')",
        "exampleSentence": "Él puede hacerlo.",
        "translation": "He can do it."
      },
      {
        "rank": 440,
        "spanish": "dime",
        "english": "tell me (from 'decir')",
        "exampleSentence": "Dime la verdad.",
        "translation": "Tell me the truth."
      },
      {
        "rank": 441,
        "spanish": "igual",
        "english": "same",
        "exampleSentence": "Somos iguales en muchos aspectos.",
        "translation": "We are the same in many ways."
      },
      {
        "rank": 442,
        "spanish": "comida",
        "english": "food",
        "exampleSentence": "Me encanta la comida italiana.",
        "translation": "I love Italian food."
      },
      {
        "rank": 443,
        "spanish": "ay",
        "english": "oh, help",
        "exampleSentence": "¡Ay, qué dolor!",
        "translation": "Oh, what pain!"
      },
      {
        "rank": 444,
        "spanish": "cuerpo",
        "english": "body",
        "exampleSentence": "Cuida tu cuerpo.",
        "translation": "Take care of your body."
      },
      {
        "rank": 445,
        "spanish": "encontrar",
        "english": "to find",
        "exampleSentence": "Voy a encontrar una solución.",
        "translation": "I'm going to find a solution."
      },
      {
        "rank": 446,
        "spanish": "fuerte",
        "english": "strong",
        "exampleSentence": "Ella es muy fuerte.",
        "translation": "She is very strong."
      },
      {
        "rank": 447,
        "spanish": "vuelta",
        "english": "turn, return",
        "exampleSentence": "Haz una vuelta a la derecha.",
        "translation": "Take a right turn."
      },
      {
        "rank": 448,
        "spanish": "venga",
        "english": "come (from 'venir')",
        "exampleSentence": "Venga conmigo.",
        "translation": "Come with me."
      },
      {
        "rank": 449,
        "spanish": "creer",
        "english": "to believe",
        "exampleSentence": "No puedo creerlo.",
        "translation": "I can't believe it."
      },
      {
        "rank": 450,
        "spanish": "realidad",
        "english": "reality",
        "exampleSentence": "Esto es la realidad.",
        "translation": "This is reality."
      },
      {
        "rank": 451,
        "spanish": "saben",
        "english": "they know (from 'saber')",
        "exampleSentence": "Ellos saben la respuesta.",
        "translation": "They know the answer."
      },
      {
        "rank": 452,
        "spanish": "puta",
        "english": "whore, bitch",
        "exampleSentence": "No uses esa palabra, es grosera.",
        "translation": "Don't use that spanish, it's rude."
      },
      {
        "rank": 453,
        "spanish": "deberías",
        "english": "you should (from 'deber')",
        "exampleSentence": "Deberías estudiar más.",
        "translation": "You should study more."
      },
      {
        "rank": 454,
        "spanish": "pregunta",
        "english": "question",
        "exampleSentence": "Tengo una pregunta para ti.",
        "translation": "I have a question for you."
      },
      {
        "rank": 455,
        "spanish": "fui",
        "english": "I was (from 'ser' or 'ir')",
        "exampleSentence": "Fui al parque ayer.",
        "translation": "I went to the park yesterday."
      },
      {
        "rank": 456,
        "spanish": "cuatro",
        "english": "four",
        "exampleSentence": "Tengo cuatro hermanos.",
        "translation": "I have four siblings."
      },
      {
        "rank": 457,
        "spanish": "sra",
        "english": "Mrs.",
        "exampleSentence": "La Sra. Pérez es nuestra vecina.",
        "translation": "Mrs. Pérez is our neighbor."
      },
      {
        "rank": 458,
        "spanish": "primer",
        "english": "first",
        "exampleSentence": "Es mi primer día de trabajo.",
        "translation": "It's my first day of work."
      },
      {
        "rank": 459,
        "spanish": "trabajar",
        "english": "to work",
        "exampleSentence": "Voy a trabajar hasta tarde.",
        "translation": "I'm going to work late."
      },
      {
        "rank": 460,
        "spanish": "e",
        "english": "and",
        "exampleSentence": "María e Juan son amigos.",
        "translation": "Maria and Juan are friends."
      },
      {
        "rank": 461,
        "spanish": "hagas",
        "english": "you do, you make (from 'hacer')",
        "exampleSentence": "No hagas eso, por favor.",
        "translation": "Don't do that, please."
      },
      {
        "rank": 462,
        "spanish": "alto",
        "english": "tall, stop",
        "exampleSentence": "Él es muy alto.",
        "translation": "He is very tall."
      },
      {
        "rank": 463,
        "spanish": "maldita",
        "english": "damn, cursed (feminine)",
        "exampleSentence": "¡Maldita sea esta situación!",
        "translation": "Damn this situation!"
      },
      {
        "rank": 464,
        "spanish": "comer",
        "english": "to eat",
        "exampleSentence": "Me gusta comer pizza.",
        "translation": "I like to eat pizza."
      },
      {
        "rank": 465,
        "spanish": "número",
        "english": "number",
        "exampleSentence": "Escribe tu número de teléfono.",
        "translation": "Write your phone number."
      },
      {
        "rank": 466,
        "spanish": "dar",
        "english": "to give",
        "exampleSentence": "Voy a dar un regalo.",
        "translation": "I'm going to give a gift."
      },
      {
        "rank": 467,
        "spanish": "necesitas",
        "english": "you need (from 'necesitar')",
        "exampleSentence": "Necesitas descansar.",
        "translation": "You need to rest."
      },
      {
        "rank": 468,
        "spanish": "oportunidad",
        "english": "opportunity",
        "exampleSentence": "Esta es tu oportunidad.",
        "translation": "This is your opportunity."
      },
      {
        "rank": 469,
        "spanish": "punto",
        "english": "point",
        "exampleSentence": "Eso es el punto clave.",
        "translation": "That's the key point."
      },
      {
        "rank": 470,
        "spanish": "misma",
        "english": "same (feminine)",
        "exampleSentence": "Tenemos la misma edad.",
        "translation": "We are the same age."
      },
      {
        "rank": 471,
        "spanish": "última",
        "english": "last (feminine)",
        "exampleSentence": "Es la última oportunidad.",
        "translation": "It's the last chance."
      },
      {
        "rank": 472,
        "spanish": "afuera",
        "english": "outside",
        "exampleSentence": "Está lloviendo afuera.",
        "translation": "It's raining outside."
      },
      {
        "rank": 473,
        "spanish": "mujeres",
        "english": "women",
        "exampleSentence": "Las mujeres son fuertes.",
        "translation": "Women are strong."
      },
      {
        "rank": 474,
        "spanish": "pensar",
        "english": "to think",
        "exampleSentence": "Voy a pensar en eso.",
        "translation": "I'm going to think about it."
      },
      {
        "rank": 475,
        "spanish": "fueron",
        "english": "they were (from 'ser' or 'ir')",
        "exampleSentence": "Ellos fueron a la playa.",
        "translation": "They went to the beach."
      },
      {
        "rank": 476,
        "spanish": "difícil",
        "english": "difficult",
        "exampleSentence": "Este problema es difícil.",
        "translation": "This problem is difficult."
      },
      {
        "rank": 477,
        "spanish": "vivir",
        "english": "to live",
        "exampleSentence": "Quiero vivir una vida feliz.",
        "translation": "I want to live a happy life."
      },
      {
        "rank": 478,
        "spanish": "paso",
        "english": "step",
        "exampleSentence": "Da un paso adelante.",
        "translation": "Take a step forward."
      },
      {
        "rank": 479,
        "spanish": "malo",
        "english": "bad",
        "exampleSentence": "Eso fue muy malo.",
        "translation": "That was very bad."
      },
      {
        "rank": 480,
        "spanish": "estabas",
        "english": "you were (from 'estar')",
        "exampleSentence": "¿Dónde estabas anoche?",
        "translation": "Where were you last night?"
      },
      {
        "rank": 481,
        "spanish": "vivo",
        "english": "alive, I live (from 'vivir')",
        "exampleSentence": "Él está vivo.",
        "translation": "He is alive."
      },
      {
        "rank": 482,
        "spanish": "haga",
        "english": "he/she/it does, he/she/it makes (from 'hacer')",
        "exampleSentence": "Ella lo haga bien.",
        "translation": "She does it well."
      },
      {
        "rank": 483,
        "spanish": "queda",
        "english": "it remains, it stays (from 'quedar')",
        "exampleSentence": "Solo queda un trozo de pastel.",
        "translation": "There's only a piece of cake left."
      },
      {
        "rank": 484,
        "spanish": "hijos",
        "english": "children (plural of 'hijo')",
        "exampleSentence": "Tengo dos hijos.",
        "translation": "I have two children."
      },
      {
        "rank": 485,
        "spanish": "mayor",
        "english": "older, elder",
        "exampleSentence": "Mi hermano mayor tiene 30 años.",
        "translation": "My older brother is 30 years old."
      },
      {
        "rank": 486,
        "spanish": "fiesta",
        "english": "party",
        "exampleSentence": "Vamos a una fiesta esta noche.",
        "translation": "We are going to a party tonight."
      },
      {
        "rank": 487,
        "spanish": "hacen",
        "english": "they do, they make (from 'hacer')",
        "exampleSentence": "Ellos hacen un buen trabajo.",
        "translation": "They do a good job."
      },
      {
        "rank": 488,
        "spanish": "medio",
        "english": "half",
        "exampleSentence": "Toma la mitad de la pizza.",
        "translation": "Take half of the pizza."
      },
      {
        "rank": 489,
        "spanish": "algunas",
        "english": "some (feminine)",
        "exampleSentence": "Tengo algunas ideas.",
        "translation": "I have some ideas."
      },
      {
        "rank": 490,
        "spanish": "basta",
        "english": "enough",
        "exampleSentence": "Eso es suficiente, basta.",
        "translation": "That's enough, stop."
      },
      {
        "rank": 491,
        "spanish": "arma",
        "english": "weapon",
        "exampleSentence": "Nunca he usado un arma.",
        "translation": "I've never used a weapon."
      },
      {
        "rank": 492,
        "spanish": "vino",
        "english": "wine",
        "exampleSentence": "Me gusta el vino tinto.",
        "translation": "I like red wine."
      },
      {
        "rank": 493,
        "spanish": "meses",
        "english": "months",
        "exampleSentence": "Hace varios meses que no nos vemos.",
        "translation": "It's been several months since we last saw each other."
      },
      {
        "rank": 494,
        "spanish": "cuarto",
        "english": "room, fourth",
        "exampleSentence": "Mi cuarto es pequeño.",
        "translation": "My room is small."
      },
      {
        "rank": 495,
        "spanish": "éste",
        "english": "this one (masculine)",
        "exampleSentence": "Prefiero éste.",
        "translation": "I prefer this one."
      },
      {
        "rank": 496,
        "spanish": "escuela",
        "english": "school",
        "exampleSentence": "Los niños van a la escuela.",
        "translation": "The children go to school."
      },
      {
        "rank": 497,
        "spanish": "esté",
        "english": "he/she/it is (from 'estar')",
        "exampleSentence": "Él esté en casa ahora.",
        "translation": "He is at home now."
      },
      {
        "rank": 498,
        "spanish": "dólares",
        "english": "dollars",
        "exampleSentence": "Eso cuesta diez dólares.",
        "translation": "That costs ten dollars."
      },
      {
        "rank": 499,
        "spanish": "tío",
        "english": "uncle",
        "exampleSentence": "Mi tío es muy simpático.",
        "translation": "My uncle is very friendly."
      },
      {
        "rank": 500,
        "spanish": "posible",
        "english": "possible",
        "exampleSentence": "Todo es posible.",
        "translation": "Everything is possible."
      },
      {
        "rank": 501,
        "spanish": "tuve",
        "english": "I had (from 'tener')",
        "exampleSentence": "Tuve un sueño extraño anoche.",
        "translation": "I had a strange dream last night."
      },
      {
        "rank": 502,
        "spanish": "fácil",
        "english": "easy",
        "exampleSentence": "Este problema es fácil de resolver.",
        "translation": "This problem is easy to solve."
      },
      {
        "rank": 503,
        "spanish": "preocupes",
        "english": "don't worry (from 'preocuparse')",
        "exampleSentence": "No te preocupes por eso.",
        "translation": "Don't worry about that."
      },
      {
        "rank": 504,
        "spanish": "luz",
        "english": "light",
        "exampleSentence": "Enciende la luz, por favor.",
        "translation": "Turn on the light, please."
      },
      {
        "rank": 505,
        "spanish": "eran",
        "english": "they were (from 'ser' or 'ir')",
        "exampleSentence": "Ellos eran amigos de la infancia.",
        "translation": "They were childhood friends."
      },
      {
        "rank": 506,
        "spanish": "carajo",
        "english": "damn, hell",
        "exampleSentence": "¡Vete al carajo!",
        "translation": "Go to hell!"
      },
      {
        "rank": 507,
        "spanish": "final",
        "english": "end, final",
        "exampleSentence": "Estamos cerca del final del libro.",
        "translation": "We are near the end of the book."
      },
      {
        "rank": 508,
        "spanish": "lista",
        "english": "list",
        "exampleSentence": "Haz una lista de compras.",
        "translation": "Make a shopping list."
      },
      {
        "rank": 509,
        "spanish": "trata",
        "english": "it deals with, it's about (from 'tratar')",
        "exampleSentence": "Esta película trata sobre el amor.",
        "translation": "This movie is about love."
      },
      {
        "rank": 510,
        "spanish": "armas",
        "english": "weapons (plural of 'arma')",
        "exampleSentence": "Las armas son peligrosas.",
        "translation": "Weapons are dangerous."
      },
      {
        "rank": 511,
        "spanish": "hermana",
        "english": "sister",
        "exampleSentence": "Mi hermana menor es muy divertida.",
        "translation": "My younger sister is very fun."
      },
      {
        "rank": 512,
        "spanish": "exactamente",
        "english": "exactly",
        "exampleSentence": "Eso es lo que necesito, exactamente.",
        "translation": "That's what I need, exactly."
      },
      {
        "rank": 513,
        "spanish": "chicas",
        "english": "girls (plural of 'chica')",
        "exampleSentence": "Las chicas están bailando.",
        "translation": "The girls are dancing."
      },
      {
        "rank": 514,
        "spanish": "podía",
        "english": "he/she/it could (from 'poder')",
        "exampleSentence": "Ella podía cantar muy bien.",
        "translation": "She could sing very well."
      },
      {
        "rank": 515,
        "spanish": "bastante",
        "english": "enough, quite",
        "exampleSentence": "Hemos comido bastante esta noche.",
        "translation": "We've eaten quite a bit tonight."
      },
      {
        "rank": 516,
        "spanish": "seguridad",
        "english": "security",
        "exampleSentence": "La seguridad es importante.",
        "translation": "Security is important."
      },
      {
        "rank": 517,
        "spanish": "pasando",
        "english": "happening (from 'pasar')",
        "exampleSentence": "¿Qué está pasando aquí?",
        "translation": "What is happening here?"
      },
      {
        "rank": 518,
        "spanish": "esperando",
        "english": "waiting (from 'esperar')",
        "exampleSentence": "Estoy esperando el autobús.",
        "translation": "I am waiting for the bus."
      },
      {
        "rank": 519,
        "spanish": "acá",
        "english": "here",
        "exampleSentence": "Vente acá, por favor.",
        "translation": "Come here, please."
      },
      {
        "rank": 520,
        "spanish": "teléfono",
        "english": "telephone, phone",
        "exampleSentence": "Voy a llamar por teléfono.",
        "translation": "I'm going to call on the phone."
      },
      {
        "rank": 521,
        "spanish": "perro",
        "english": "dog",
        "exampleSentence": "Tengo un perro muy juguetón.",
        "translation": "I have a very playful dog."
      },
      {
        "rank": 522,
        "spanish": "fuego",
        "english": "fire",
        "exampleSentence": "Llama a los bomberos, hay fuego.",
        "translation": "Call the firefighters, there is a fire."
      },
      {
        "rank": 523,
        "spanish": "murió",
        "english": "he/she/it died (from 'morir')",
        "exampleSentence": "Mi abuela murió el año pasado.",
        "translation": "My grandmother died last year."
      },
      {
        "rank": 524,
        "spanish": "tampoco",
        "english": "neither, either (negative)",
        "exampleSentence": "Yo tampoco quiero ir.",
        "translation": "I don't want to go either."
      },
      {
        "rank": 525,
        "spanish": "sola",
        "english": "alone, single (feminine)",
        "exampleSentence": "Ella vive sola en ese apartamento.",
        "translation": "She lives alone in that apartment."
      },
      {
        "rank": 526,
        "spanish": "estuvo",
        "english": "he/she/it was (from 'estar')",
        "exampleSentence": "Estuvo muy enfermo el mes pasado.",
        "translation": "He was very sick last month."
      },
      {
        "rank": 527,
        "spanish": "verte",
        "english": "to see you (from 'ver')",
        "exampleSentence": "Me alegra verte otra vez.",
        "translation": "I'm glad to see you again."
      },
      {
        "rank": 528,
        "spanish": "iré",
        "english": "I will go (from 'ir')",
        "exampleSentence": "Mañana iré al cine.",
        "translation": "Tomorrow I will go to the cinema."
      },
      {
        "rank": 529,
        "spanish": "tenido",
        "english": "had, have had (from 'tener')",
        "exampleSentence": "He tenido un día largo.",
        "translation": "I have had a long day."
      },
      {
        "rank": 530,
        "spanish": "culpa",
        "english": "blame, fault",
        "exampleSentence": "No es tu culpa.",
        "translation": "It's not your fault."
      },
      {
        "rank": 531,
        "spanish": "veras",
        "english": "you will see (from 'ver')",
        "exampleSentence": "Lo veras cuando lleguemos.",
        "translation": "You will see it when we arrive."
      },
      {
        "rank": 532,
        "spanish": "adónde",
        "english": "where (to), to where",
        "exampleSentence": "¿Adónde vas esta tarde?",
        "translation": "Where are you going this afternoon?"
      },
      {
        "rank": 533,
        "spanish": "buscando",
        "english": "looking for (from 'buscar')",
        "exampleSentence": "Estoy buscando mis llaves.",
        "translation": "I am looking for my keys."
      },
      {
        "rank": 534,
        "spanish": "cuanto",
        "english": "as much as, how much",
        "exampleSentence": "Come cuanto quieras.",
        "translation": "Eat as much as you want."
      },
      {
        "rank": 535,
        "spanish": "padres",
        "english": "parents",
        "exampleSentence": "Mis padres están de vacaciones.",
        "translation": "My parents are on vacation."
      },
      {
        "rank": 536,
        "spanish": "paz",
        "english": "peace",
        "exampleSentence": "Todos queremos paz en el mundo.",
        "translation": "We all want peace in the world."
      },
      {
        "rank": 537,
        "spanish": "demonios",
        "english": "demons, damn",
        "exampleSentence": "¡Qué demonios estás haciendo!",
        "translation": "What the hell are you doing!"
      },
      {
        "rank": 538,
        "spanish": "estará",
        "english": "he/she/it will be (from 'estar')",
        "exampleSentence": "Ella estará en casa más tarde.",
        "translation": "She will be home later."
      },
      {
        "rank": 539,
        "spanish": "cual",
        "english": "which, what, whom",
        "exampleSentence": "¿Cuál prefieres?",
        "translation": "Which one do you prefer?"
      },
      {
        "rank": 540,
        "spanish": "perdón",
        "english": "forgiveness, sorry",
        "exampleSentence": "Pido perdón por mi error.",
        "translation": "I apologize for my mistake."
      },
      {
        "rank": 541,
        "spanish": "asi",
        "english": "like this, so",
        "exampleSentence": "Lo haremos así.",
        "translation": "We will do it like this."
      },
      {
        "rank": 542,
        "spanish": "jugar",
        "english": "to play",
        "exampleSentence": "A los niños les gusta jugar.",
        "translation": "Children like to play."
      },
      {
        "rank": 543,
        "spanish": "pensando",
        "english": "thinking (from 'pensar')",
        "exampleSentence": "Estoy pensando en ti.",
        "translation": "I'm thinking of you."
      },
      {
        "rank": 544,
        "spanish": "esperar",
        "english": "to wait, hope for",
        "exampleSentence": "Espero que todo salga bien.",
        "translation": "I hope everything goes well."
      },
      {
        "rank": 545,
        "spanish": "sabemos",
        "english": "we know (from 'saber')",
        "exampleSentence": "Sabemos la respuesta.",
        "translation": "We know the answer."
      },
      {
        "rank": 546,
        "spanish": "recuerdo",
        "english": "memory, I remember (from 'recordar')",
        "exampleSentence": "Tengo un buen recuerdo de ese lugar.",
        "translation": "I have a good memory of that place."
      },
      {
        "rank": 547,
        "spanish": "par",
        "english": "pair",
        "exampleSentence": "Necesito un par de zapatos nuevos.",
        "translation": "I need a pair of new shoes."
      },
      {
        "rank": 548,
        "spanish": "joven",
        "english": "young",
        "exampleSentence": "Ella es una mujer joven y talentosa.",
        "translation": "She is a young and talented woman."
      },
      {
        "rank": 549,
        "spanish": "seguir",
        "english": "to follow, continue",
        "exampleSentence": "Voy a seguir estudiando.",
        "translation": "I'm going to continue studying."
      },
      {
        "rank": 550,
        "spanish": "pueblo",
        "english": "town, people",
        "exampleSentence": "Vivo en un pequeño pueblo.",
        "translation": "I live in a small town."
      },
      {
        "rank": 551,
        "spanish": "tenga",
        "english": "he/she/it has, may have (from 'tener')",
        "exampleSentence": "Espero que ella lo tenga.",
        "translation": "I hope she has it."
      },
      {
        "rank": 552,
        "spanish": "caballeros",
        "english": "gentlemen (plural of 'caballero')",
        "exampleSentence": "Los caballeros esperan en la puerta.",
        "translation": "The gentlemen are waiting at the door."
      },
      {
        "rank": 553,
        "spanish": "idiota",
        "english": "idiot",
        "exampleSentence": "No seas un idiota.",
        "translation": "Don't be an idiot."
      },
      {
        "rank": 554,
        "spanish": "dio",
        "english": "he/she/it gave (from 'dar')",
        "exampleSentence": "Él dio un regalo a su madre.",
        "translation": "He gave a gift to his mother."
      },
      {
        "rank": 555,
        "spanish": "minuto",
        "english": "minute",
        "exampleSentence": "Espera un minuto, por favor.",
        "translation": "Wait a minute, please."
      },
      {
        "rank": 556,
        "spanish": "bebé",
        "english": "baby",
        "exampleSentence": "El bebé está durmiendo.",
        "translation": "The baby is sleeping."
      },
      {
        "rank": 557,
        "spanish": "única",
        "english": "unique, only (feminine)",
        "exampleSentence": "Esta es una oportunidad única.",
        "translation": "This is a unique opportunity."
      },
      {
        "rank": 558,
        "spanish": "lejos",
        "english": "far",
        "exampleSentence": "El restaurante está lejos de aquí.",
        "translation": "The restaurant is far from here."
      },
      {
        "rank": 559,
        "spanish": "nuestras",
        "english": "our (feminine, plural of 'nuestro')",
        "exampleSentence": "Estas son nuestras cosas.",
        "translation": "These are our things."
      },
      {
        "rank": 560,
        "spanish": "plan",
        "english": "plan",
        "exampleSentence": "Tenemos un plan para el fin de semana.",
        "translation": "We have a plan for the weekend."
      },
      {
        "rank": 561,
        "spanish": "pienso",
        "english": "I think (from 'pensar')",
        "exampleSentence": "Pienso que deberíamos ir.",
        "translation": "I think we should go."
      },
      {
        "rank": 562,
        "spanish": "sentido",
        "english": "sense, felt (past participle of 'sentir')",
        "exampleSentence": "Tenía un sentido de tristeza.",
        "translation": "I had a sense of sadness."
      },
      {
        "rank": 563,
        "spanish": "dormir",
        "english": "to sleep",
        "exampleSentence": "Necesito dormir más.",
        "translation": "I need to sleep more."
      },
      {
        "rank": 564,
        "spanish": "digas",
        "english": "you say (from 'decir')",
        "exampleSentence": "No importa lo que digas.",
        "translation": "It doesn't matter what you say."
      },
      {
        "rank": 565,
        "spanish": "palabra",
        "english": "spanish",
        "exampleSentence": "Una palabra puede hacer la diferencia.",
        "translation": "A spanish can make a difference."
      },
      {
        "rank": 566,
        "spanish": "correcto",
        "english": "correct, right",
        "exampleSentence": "Tienes la respuesta correcta.",
        "translation": "You have the correct answer."
      },
      {
        "rank": 567,
        "spanish": "control",
        "english": "control",
        "exampleSentence": "Mantén el control de la situación.",
        "translation": "Maintain control of the situation."
      },
      {
        "rank": 568,
        "spanish": "vemos",
        "english": "we see (from 'ver')",
        "exampleSentence": "Nosotros vemos el mar desde aquí.",
        "translation": "We see the sea from here."
      },
      {
        "rank": 569,
        "spanish": "entiendes",
        "english": "you understand (from 'entender')",
        "exampleSentence": "¿Entiendes lo que digo?",
        "translation": "Do you understand what I'm saying?"
      },
      {
        "rank": 570,
        "spanish": "país",
        "english": "country",
        "exampleSentence": "Mi país tiene una cultura rica.",
        "translation": "My country has a rich culture."
      },
      {
        "rank": 571,
        "spanish": "seis",
        "english": "six",
        "exampleSentence": "Hay seis personas en la sala.",
        "translation": "There are six people in the room."
      },
      {
        "rank": 572,
        "spanish": "último",
        "english": "last",
        "exampleSentence": "Fue el último en llegar.",
        "translation": "He was the last to arrive."
      },
      {
        "rank": 573,
        "spanish": "ésta",
        "english": "this one (feminine)",
        "exampleSentence": "Ésta es la que quiero.",
        "translation": "This one is the one I want."
      },
      {
        "rank": 574,
        "spanish": "diga",
        "english": "he/she/it says (from 'decir')",
        "exampleSentence": "Ella lo dijo antes.",
        "translation": "She said it before."
      },
      {
        "rank": 575,
        "spanish": "podrías",
        "english": "you could (from 'poder')",
        "exampleSentence": "¿Podrías ayudarme, por favor?",
        "translation": "Could you help me, please?"
      },
      {
        "rank": 576,
        "spanish": "pequeña",
        "english": "small (feminine)",
        "exampleSentence": "Tenemos una casa pequeña.",
        "translation": "We have a small house."
      },
      {
        "rank": 577,
        "spanish": "cállate",
        "english": "shut up (informal command, from 'callarse')",
        "exampleSentence": "¡Cállate y escucha!",
        "translation": "Shut up and listen!"
      },
      {
        "rank": 578,
        "spanish": "trato",
        "english": "deal, treatment",
        "exampleSentence": "Hicimos un trato justo.",
        "translation": "We made a fair deal."
      },
      {
        "rank": 579,
        "spanish": "rey",
        "english": "king",
        "exampleSentence": "El rey gobernó con sabiduría.",
        "translation": "The king ruled wisely."
      },
      {
        "rank": 580,
        "spanish": "sucede",
        "english": "it happens (from 'suceder')",
        "exampleSentence": "A veces, esto sucede.",
        "translation": "Sometimes, this happens."
      },
      {
        "rank": 581,
        "spanish": "muchachos",
        "english": "boys, guys (plural of 'muchacho')",
        "exampleSentence": "Los muchachos están jugando afuera.",
        "translation": "The boys are playing outside."
      },
      {
        "rank": 582,
        "spanish": "jamás",
        "english": "never, ever",
        "exampleSentence": "Nunca jamás lo olvidaré.",
        "translation": "I will never ever forget it."
      },
      {
        "rank": 583,
        "spanish": "cama",
        "english": "bed",
        "exampleSentence": "La cama es muy cómoda.",
        "translation": "The bed is very comfortable."
      },
      {
        "rank": 584,
        "spanish": "srta",
        "english": "Miss, young lady (abbreviation of 'señorita')",
        "exampleSentence": "La Srta. Pérez es nuestra profesora.",
        "translation": "Miss Pérez is our teacher."
      },
      {
        "rank": 585,
        "spanish": "ayudar",
        "english": "to help",
        "exampleSentence": "Voy a ayudar en la cocina.",
        "translation": "I'm going to help in the kitchen."
      },
      {
        "rank": 586,
        "spanish": "acerca",
        "english": "about, concerning",
        "exampleSentence": "Hablemos acerca de tu proyecto.",
        "translation": "Let's talk about your project."
      },
      {
        "rank": 587,
        "spanish": "di",
        "english": "I said (from 'decir')",
        "exampleSentence": "Así es como lo dije.",
        "translation": "That's how I said it."
      },
      {
        "rank": 588,
        "spanish": "cambio",
        "english": "change",
        "exampleSentence": "Necesitamos un cambio en nuestra vida.",
        "translation": "We need a change in our life."
      },
      {
        "rank": 589,
        "spanish": "falta",
        "english": "lack, absence",
        "exampleSentence": "Hay una falta de comunicación.",
        "translation": "There is a lack of communication."
      },
      {
        "rank": 590,
        "spanish": "hospital",
        "english": "hospital",
        "exampleSentence": "El hospital está cerca de aquí.",
        "translation": "The hospital is nearby."
      },
      {
        "rank": 591,
        "spanish": "lleva",
        "english": "he/she/it takes, carries (from 'llevar')",
        "exampleSentence": "Ella lleva una mochila.",
        "translation": "She carries a backpack."
      },
      {
        "rank": 592,
        "spanish": "presidente",
        "english": "president",
        "exampleSentence": "El presidente dio un discurso.",
        "translation": "The president gave a speech."
      },
      {
        "rank": 593,
        "spanish": "mil",
        "english": "thousand",
        "exampleSentence": "Pagamos mil dólares por el coche.",
        "translation": "We paid a thousand dollars for the car."
      },
      {
        "rank": 594,
        "spanish": "gusto",
        "english": "taste, pleasure",
        "exampleSentence": "Es un placer conocerte.",
        "translation": "It's a pleasure to meet you."
      },
      {
        "rank": 595,
        "spanish": "conoces",
        "english": "you know (from 'conocer')",
        "exampleSentence": "¿Conoces a mi hermana?",
        "translation": "Do you know my sister?"
      },
      {
        "rank": 596,
        "spanish": "diciendo",
        "english": "saying, telling (from 'decir')",
        "exampleSentence": "Lo que estás diciendo es importante.",
        "translation": "What you're saying is important."
      },
      {
        "rank": 597,
        "spanish": "os",
        "english": "you (plural, informal)",
        "exampleSentence": "Os veré más tarde.",
        "translation": "I'll see you all later."
      },
      {
        "rank": 598,
        "spanish": "ido",
        "english": "gone (past participle of 'ir')",
        "exampleSentence": "Él ha ido a la tienda.",
        "translation": "He has gone to the store."
      },
      {
        "rank": 599,
        "spanish": "general",
        "english": "general",
        "exampleSentence": "El general dirigió la operación.",
        "translation": "The general led the operation."
      },
      {
        "rank": 600,
        "spanish": "extraño",
        "english": "strange, foreign",
        "exampleSentence": "Este lugar me parece extraño.",
        "translation": "This place seems strange to me."
      },
      {
        "rank": 601,
        "spanish": "semanas",
        "english": "weeks (plural of 'semana')",
        "exampleSentence": "Estudié durante varias semanas.",
        "translation": "I studied for several weeks."
      },
      {
        "rank": 602,
        "spanish": "coche",
        "english": "car",
        "exampleSentence": "Mi coche es rojo.",
        "translation": "My car is red."
      },
      {
        "rank": 603,
        "spanish": "peor",
        "english": "worse",
        "exampleSentence": "Este es el peor día de mi vida.",
        "translation": "This is the worst day of my life."
      },
      {
        "rank": 604,
        "spanish": "mucha",
        "english": "much, a lot (feminine)",
        "exampleSentence": "Hay mucha gente aquí.",
        "translation": "There are a lot of people here."
      },
      {
        "rank": 605,
        "spanish": "disculpe",
        "english": "excuse me, I'm sorry (formal, from 'disculpar')",
        "exampleSentence": "Disculpe, ¿puede ayudarme?",
        "translation": "Excuse me, can you help me?"
      },
      {
        "rank": 606,
        "spanish": "diré",
        "english": "I will say (from 'decir')",
        "exampleSentence": "Te diré la verdad.",
        "translation": "I will tell you the truth."
      },
      {
        "rank": 607,
        "spanish": "anoche",
        "english": "last night",
        "exampleSentence": "Vi una película anoche.",
        "translation": "I watched a movie last night."
      },
      {
        "rank": 608,
        "spanish": "perder",
        "english": "to lose",
        "exampleSentence": "No quiero perder esta oportunidad.",
        "translation": "I don't want to lose this opportunity."
      },
      {
        "rank": 609,
        "spanish": "vámonos",
        "english": "let's go (from 'irse')",
        "exampleSentence": "Vámonos de aquí.",
        "translation": "Let's go from here."
      },
      {
        "rank": 610,
        "spanish": "nave",
        "english": "ship, spacecraft",
        "exampleSentence": "La nave espacial despegará pronto.",
        "translation": "The spacecraft will launch soon."
      },
      {
        "rank": 611,
        "spanish": "cielo",
        "english": "sky, heaven",
        "exampleSentence": "El cielo está despejado hoy.",
        "translation": "The sky is clear today."
      },
      {
        "rank": 612,
        "spanish": "habrá",
        "english": "there will be (from 'haber')",
        "exampleSentence": "Mañana habrá sol.",
        "translation": "There will be sun tomorrow."
      },
      {
        "rank": 613,
        "spanish": "orden",
        "english": "order",
        "exampleSentence": "Mantén todo en orden.",
        "translation": "Keep everything in order."
      },
      {
        "rank": 614,
        "spanish": "segura",
        "english": "secure, safe (feminine)",
        "exampleSentence": "Esta cerradura es segura.",
        "translation": "This lock is secure."
      },
      {
        "rank": 615,
        "spanish": "querida",
        "english": "dear (feminine, used as an affectionate term)",
        "exampleSentence": "Querida mamá, te extraño mucho.",
        "translation": "Dear mom, I miss you so much."
      },
      {
        "rank": 616,
        "spanish": "niña",
        "english": "girl",
        "exampleSentence": "La niña juega en el parque.",
        "translation": "The girl is playing in the park."
      },
      {
        "rank": 617,
        "spanish": "increíble",
        "english": "incredible",
        "exampleSentence": "Fue una experiencia increíble.",
        "translation": "It was an incredible experience."
      },
      {
        "rank": 618,
        "spanish": "además",
        "english": "besides, furthermore",
        "exampleSentence": "Además, podemos hacer esto.",
        "translation": "Furthermore, we can do this."
      },
      {
        "rank": 619,
        "spanish": "deben",
        "english": "they must, should (from 'deber')",
        "exampleSentence": "Deben estudiar para el examen.",
        "translation": "They should study for the exam."
      },
      {
        "rank": 620,
        "spanish": "libro",
        "english": "book",
        "exampleSentence": "Estoy leyendo un buen libro.",
        "translation": "I'm reading a good book."
      },
      {
        "rank": 621,
        "spanish": "calle",
        "english": "street",
        "exampleSentence": "Vivo en esta calle.",
        "translation": "I live on this street."
      },
      {
        "rank": 622,
        "spanish": "café",
        "english": "coffee",
        "exampleSentence": "Necesito un café por la mañana.",
        "translation": "I need coffee in the morning."
      },
      {
        "rank": 623,
        "spanish": "piensas",
        "english": "you think (from 'pensar')",
        "exampleSentence": "¿Qué piensas de este plan?",
        "translation": "What do you think of this plan?"
      },
      {
        "rank": 624,
        "spanish": "hacemos",
        "english": "we do, make (from 'hacer')",
        "exampleSentence": "Hacemos todo lo posible.",
        "translation": "We do everything we can."
      },
      {
        "rank": 625,
        "spanish": "especial",
        "english": "special",
        "exampleSentence": "Hoy es un día especial.",
        "translation": "Today is a special day."
      },
      {
        "rank": 626,
        "spanish": "queremos",
        "english": "we want (from 'querer')",
        "exampleSentence": "Queremos ser felices.",
        "translation": "We want to be happy."
      },
      {
        "rank": 627,
        "spanish": "irme",
        "english": "to go away (from 'irse')",
        "exampleSentence": "Me voy a irme temprano.",
        "translation": "I'm going to go away early."
      },
      {
        "rank": 628,
        "spanish": "perfecto",
        "english": "perfect",
        "exampleSentence": "Todo salió perfecto.",
        "translation": "Everything went perfectly."
      },
      {
        "rank": 629,
        "spanish": "buscar",
        "english": "to search, look for",
        "exampleSentence": "Voy a buscar mis llaves.",
        "translation": "I'm going to look for my keys."
      },
      {
        "rank": 630,
        "spanish": "odio",
        "english": "I hate (from 'odiar')",
        "exampleSentence": "Odio las arañas.",
        "translation": "I hate spiders."
      },
      {
        "rank": 631,
        "spanish": "piensa",
        "english": "he/she thinks (from 'pensar')",
        "exampleSentence": "Él piensa que es posible.",
        "translation": "He thinks it's possible."
      },
      {
        "rank": 632,
        "spanish": "oficina",
        "english": "office",
        "exampleSentence": "Trabajo en una oficina.",
        "translation": "I work in an office."
      },
      {
        "rank": 633,
        "spanish": "hablas",
        "english": "you talk, speak (from 'hablar')",
        "exampleSentence": "¿Hablas inglés?",
        "translation": "Do you speak English?"
      },
      {
        "rank": 634,
        "spanish": "libre",
        "english": "free",
        "exampleSentence": "El tiempo libre es importante.",
        "translation": "Free time is important."
      },
      {
        "rank": 635,
        "spanish": "agente",
        "english": "agent",
        "exampleSentence": "El agente de bienes raíces mostró la casa.",
        "translation": "The real estate agent showed the house."
      },
      {
        "rank": 636,
        "spanish": "york",
        "english": "New York",
        "exampleSentence": "Nueva York es una ciudad grande.",
        "translation": "New York is a big city."
      },
      {
        "rank": 637,
        "spanish": "llamar",
        "english": "to call",
        "exampleSentence": "Voy a llamar a mi amigo.",
        "translation": "I'm going to call my friend."
      },
      {
        "rank": 638,
        "spanish": "mala",
        "english": "bad (feminine)",
        "exampleSentence": "Esa es una idea mala.",
        "translation": "That's a bad idea."
      },
      {
        "rank": 639,
        "spanish": "detrás",
        "english": "behind",
        "exampleSentence": "Estoy detrás de ti.",
        "translation": "I'm behind you."
      },
      {
        "rank": 640,
        "spanish": "viste",
        "english": "you saw (from 'ver')",
        "exampleSentence": "Viste lo que pasó.",
        "translation": "You saw what happened."
      },
      {
        "rank": 641,
        "spanish": "dile",
        "english": "tell him/her (from 'decir')",
        "exampleSentence": "Dile que venga aquí.",
        "translation": "Tell him/her to come here."
      },
      {
        "rank": 642,
        "spanish": "grandes",
        "english": "big, large (plural of 'grande')",
        "exampleSentence": "Tienen planes grandes para el futuro.",
        "translation": "They have big plans for the future."
      },
      {
        "rank": 643,
        "spanish": "recuerdas",
        "english": "you remember (from 'recordar')",
        "exampleSentence": "Recuerdas nuestro primer encuentro.",
        "translation": "You remember our first encounter."
      },
      {
        "rank": 644,
        "spanish": "real",
        "english": "real",
        "exampleSentence": "Este diamante es real.",
        "translation": "This diamond is real."
      },
      {
        "rank": 645,
        "spanish": "estaban",
        "english": "they were (from 'estar')",
        "exampleSentence": "Ellos estaban felices.",
        "translation": "They were happy."
      },
      {
        "rank": 646,
        "spanish": "mía",
        "english": "mine (feminine)",
        "exampleSentence": "Esta casa es mía.",
        "translation": "This house is mine."
      },
      {
        "rank": 647,
        "spanish": "frente",
        "english": "in front of",
        "exampleSentence": "Estamos frente al mar.",
        "translation": "We are in front of the sea."
      },
      {
        "rank": 648,
        "spanish": "perdido",
        "english": "lost (past participle of 'perder')",
        "exampleSentence": "He perdido mis llaves.",
        "translation": "I have lost my keys."
      },
      {
        "rank": 649,
        "spanish": "llamo",
        "english": "I call (from 'llamar')",
        "exampleSentence": "Me llamo Ana.",
        "translation": "My name is Ana."
      },
      {
        "rank": 650,
        "spanish": "muertos",
        "english": "dead (plural of 'muerto')",
        "exampleSentence": "Los muertos no pueden hablar.",
        "translation": "The dead cannot speak."
      },
      {
        "rank": 651,
        "spanish": "millones",
        "english": "millions",
        "exampleSentence": "Hay millones de estrellas en el cielo.",
        "translation": "There are millions of stars in the sky."
      },
      {
        "rank": 652,
        "spanish": "asesino",
        "english": "killer, murderer",
        "exampleSentence": "El asesino fue arrestado.",
        "translation": "The murderer was arrested."
      },
      {
        "rank": 653,
        "spanish": "sueño",
        "english": "dream, sleep",
        "exampleSentence": "Tuve un sueño extraño anoche.",
        "translation": "I had a strange dream last night."
      },
      {
        "rank": 654,
        "spanish": "quisiera",
        "english": "I would like (from 'querer')",
        "exampleSentence": "Quisiera una taza de café, por favor.",
        "translation": "I would like a cup of coffee, please."
      },
      {
        "rank": 655,
        "spanish": "habría",
        "english": "there would be (conditional of 'haber')",
        "exampleSentence": "Habría más paz en el mundo si todos se entendieran.",
        "translation": "There would be more peace in the world if everyone understood each other."
      },
      {
        "rank": 656,
        "spanish": "hará",
        "english": "he/she/it will do, make (future of 'hacer')",
        "exampleSentence": "Ella hará todo lo posible por ayudarte.",
        "translation": "She will do everything she can to help you."
      },
      {
        "rank": 657,
        "spanish": "viaje",
        "english": "trip, journey",
        "exampleSentence": "Voy a hacer un viaje a la playa.",
        "translation": "I'm going on a trip to the beach."
      },
      {
        "rank": 658,
        "spanish": "probablemente",
        "english": "probably, likely",
        "exampleSentence": "Probablemente llueva mañana.",
        "translation": "It will probably rain tomorrow."
      },
      {
        "rank": 659,
        "spanish": "resto",
        "english": "rest, remainder",
        "exampleSentence": "El resto de la comida está en la nevera.",
        "translation": "The rest of the food is in the fridge."
      },
      {
        "rank": 660,
        "spanish": "estaré",
        "english": "I will be (future of 'estar')",
        "exampleSentence": "Estaré en casa más tarde.",
        "translation": "I will be home later."
      },
      {
        "rank": 661,
        "spanish": "maldición",
        "english": "curse",
        "exampleSentence": "Le lanzó una maldición al enemigo.",
        "translation": "He cast a curse on the enemy."
      },
      {
        "rank": 662,
        "spanish": "lamento",
        "english": "I regret, I'm sorry (from 'lamentar')",
        "exampleSentence": "Lamento haberte herido.",
        "translation": "I'm sorry I hurt you."
      },
      {
        "rank": 663,
        "spanish": "muchacho",
        "english": "boy",
        "exampleSentence": "Ese muchacho es muy inteligente.",
        "translation": "That boy is very intelligent."
      },
      {
        "rank": 664,
        "spanish": "avión",
        "english": "airplane",
        "exampleSentence": "El avión despegará en media hora.",
        "translation": "The airplane will take off in half an hour."
      },
      {
        "rank": 665,
        "spanish": "ropa",
        "english": "clothing, clothes",
        "exampleSentence": "Necesito comprar ropa nueva.",
        "translation": "I need to buy new clothes."
      },
      {
        "rank": 666,
        "spanish": "fuerza",
        "english": "strength, force",
        "exampleSentence": "La fuerza de voluntad es importante.",
        "translation": "Willpower is important."
      },
      {
        "rank": 667,
        "spanish": "llamado",
        "english": "called, named (past participle of 'llamar')",
        "exampleSentence": "El libro se llama 'Cien Años de Soledad'.",
        "translation": "The book is called 'One Hundred Years of Solitude'."
      },
      {
        "rank": 668,
        "spanish": "oído",
        "english": "ear",
        "exampleSentence": "Tengo un dolor de oído.",
        "translation": "I have an earache."
      },
      {
        "rank": 669,
        "spanish": "dado",
        "english": "given, dice (past participle of 'dar' and singular of 'dados')",
        "exampleSentence": "Dado que no podía asistir, cancelaron la reunión.",
        "translation": "Given that he couldn't attend, they canceled the meeting."
      },
      {
        "rank": 670,
        "spanish": "encima",
        "english": "on top of, above",
        "exampleSentence": "El libro está encima de la mesa.",
        "translation": "The book is on top of the table."
      },
      {
        "rank": 671,
        "spanish": "negro",
        "english": "black",
        "exampleSentence": "El vestido es negro.",
        "translation": "The dress is black."
      },
      {
        "rank": 672,
        "spanish": "usar",
        "english": "to use",
        "exampleSentence": "Puedes usar mi computadora si quieres.",
        "translation": "You can use my computer if you want."
      },
      {
        "rank": 673,
        "spanish": "información",
        "english": "information",
        "exampleSentence": "Necesito más información sobre este tema.",
        "translation": "I need more information on this topic."
      },
      {
        "rank": 674,
        "spanish": "uds",
        "english": "you all, formal (abbreviation of 'ustedes')",
        "exampleSentence": "¿Uds. van a la fiesta esta noche?",
        "translation": "Are you all going to the party tonight?"
      },
      {
        "rank": 675,
        "spanish": "preguntas",
        "english": "questions (plural of 'pregunta')",
        "exampleSentence": "Si tienes preguntas, por favor pregúntame.",
        "translation": "If you have questions, please ask me."
      },
      {
        "rank": 676,
        "spanish": "tuvo",
        "english": "he/she/it had (past of 'tener')",
        "exampleSentence": "Ella tuvo una idea brillante.",
        "translation": "She had a brilliant idea."
      },
      {
        "rank": 677,
        "spanish": "secreto",
        "english": "secret",
        "exampleSentence": "No puedo revelar ese secreto.",
        "translation": "I can't reveal that secret."
      },
      {
        "rank": 678,
        "spanish": "vuelve",
        "english": "he/she/it returns (present of 'volver')",
        "exampleSentence": "Él vuelve a casa después del trabajo.",
        "translation": "He returns home after work."
      },
      {
        "rank": 679,
        "spanish": "miren",
        "english": "look (plural of 'mirar')",
        "exampleSentence": "Miren ese hermoso paisaje.",
        "translation": "Look at that beautiful landscape."
      },
      {
        "rank": 680,
        "spanish": "quieras",
        "english": "you want (from 'querer')",
        "exampleSentence": "Puedes tomarlo si quieres.",
        "translation": "You can take it if you want."
      },
      {
        "rank": 681,
        "spanish": "haría",
        "english": "he/she/it would do, make (conditional of 'hacer')",
        "exampleSentence": "Haría cualquier cosa por ti.",
        "translation": "I would do anything for you."
      },
      {
        "rank": 682,
        "spanish": "acaba",
        "english": "it ends, finishes (from 'acabar')",
        "exampleSentence": "El concierto acaba a las 10 de la noche.",
        "translation": "The concert ends at 10 o'clock at night."
      },
      {
        "rank": 683,
        "spanish": "otras",
        "english": "other, another (feminine plural of 'otro')",
        "exampleSentence": "Hay otras opciones disponibles.",
        "translation": "There are other options available."
      },
      {
        "rank": 684,
        "spanish": "incluso",
        "english": "even",
        "exampleSentence": "Llegaron incluso antes de lo esperado.",
        "translation": "They arrived even earlier than expected."
      },
      {
        "rank": 685,
        "spanish": "sientes",
        "english": "you feel (from 'sentir')",
        "exampleSentence": "¿Cómo te sientes hoy?",
        "translation": "How do you feel today?"
      },
      {
        "rank": 686,
        "spanish": "deberíamos",
        "english": "we should (from 'deber')",
        "exampleSentence": "Deberíamos estudiar más.",
        "translation": "We should study more."
      },
      {
        "rank": 687,
        "spanish": "haz",
        "english": "do, make (imperative form of 'hacer')",
        "exampleSentence": "Haz tu tarea antes de jugar.",
        "translation": "Do your homework before playing."
      },
      {
        "rank": 688,
        "spanish": "decirte",
        "english": "to tell you (from 'decir')",
        "exampleSentence": "Quería decirte algo importante.",
        "translation": "I wanted to tell you something important."
      },
      {
        "rank": 689,
        "spanish": "boca",
        "english": "mouth",
        "exampleSentence": "No hables con la boca llena.",
        "translation": "Don't talk with your mouth full."
      },
      {
        "rank": 690,
        "spanish": "dolor",
        "english": "pain",
        "exampleSentence": "Tengo un dolor de cabeza.",
        "translation": "I have a headache."
      },
      {
        "rank": 691,
        "spanish": "baño",
        "english": "bathroom, bath",
        "exampleSentence": "El baño está al final del pasillo.",
        "translation": "The bathroom is at the end of the hallway."
      },
      {
        "rank": 692,
        "spanish": "adentro",
        "english": "inside",
        "exampleSentence": "Está adentro de la casa.",
        "translation": "He's inside the house."
      },
      {
        "rank": 693,
        "spanish": "profesor",
        "english": "teacher, professor",
        "exampleSentence": "Mi profesor de matemáticas es muy inteligente.",
        "translation": "My math teacher is very intelligent."
      },
      {
        "rank": 694,
        "spanish": "habitación",
        "english": "room",
        "exampleSentence": "Mi habitación es pequeña pero acogedora.",
        "translation": "My room is small but cozy."
      },
      {
        "rank": 695,
        "spanish": "daño",
        "english": "harm, damage",
        "exampleSentence": "No quiero causarte daño.",
        "translation": "I don't want to cause you harm."
      },
      {
        "rank": 696,
        "spanish": "tuyo",
        "english": "yours (singular masculine)",
        "exampleSentence": "Este libro es tuyo.",
        "translation": "This book is yours."
      },
      {
        "rank": 697,
        "spanish": "seas",
        "english": "you are (subjunctive of 'ser')",
        "exampleSentence": "Espero que seas feliz.",
        "translation": "I hope you are happy."
      },
      {
        "rank": 698,
        "spanish": "noticias",
        "english": "news",
        "exampleSentence": "Las noticias son importantes para estar informado.",
        "translation": "The news is important to stay informed."
      },
      {
        "rank": 699,
        "spanish": "demás",
        "english": "others, the rest",
        "exampleSentence": "Los demás ya llegaron.",
        "translation": "The others have already arrived."
      },
      {
        "rank": 700,
        "spanish": "querido",
        "english": "dear, beloved",
        "exampleSentence": "Querido amigo, te extraño mucho.",
        "translation": "Dear friend, I miss you very much."
      },
      {
        "rank": 700,
        "spanish": "querido",
        "english": "dear, beloved",
        "exampleSentence": "Mi querido amigo siempre está allí para mí.",
        "translation": "My dear friend is always there for me."
      },
      {
        "rank": 701,
        "spanish": "duro",
        "english": "hard, tough",
        "exampleSentence": "Este trabajo es muy duro.",
        "translation": "This job is very tough."
      },
      {
        "rank": 702,
        "spanish": "poner",
        "english": "to put, place",
        "exampleSentence": "Voy a poner el libro en la mesa.",
        "translation": "I'm going to put the book on the table."
      },
      {
        "rank": 703,
        "spanish": "prueba",
        "english": "test, trial",
        "exampleSentence": "Mañana tengo una prueba importante.",
        "translation": "I have an important test tomorrow."
      },
      {
        "rank": 704,
        "spanish": "mire",
        "english": "look (imperative form of 'mirar')",
        "exampleSentence": "Por favor, mire esta hermosa vista.",
        "translation": "Please look at this beautiful view."
      },
      {
        "rank": 705,
        "spanish": "tonto",
        "english": "silly, foolish",
        "exampleSentence": "Esa fue una idea tonta.",
        "translation": "That was a silly idea."
      },
      {
        "rank": 706,
        "spanish": "campo",
        "english": "field, countryside",
        "exampleSentence": "Me encanta pasear por el campo.",
        "translation": "I love to walk in the countryside."
      },
      {
        "rank": 707,
        "spanish": "siendo",
        "english": "being (present participle of 'ser' or 'estar')",
        "exampleSentence": "Estamos siendo observados.",
        "translation": "We are being observed."
      },
      {
        "rank": 708,
        "spanish": "diez",
        "english": "ten",
        "exampleSentence": "Tengo diez manzanas.",
        "translation": "I have ten apples."
      },
      {
        "rank": 709,
        "spanish": "ése",
        "english": "that (masculine) (demonstrative pronoun)",
        "exampleSentence": "Ese coche es muy rápido.",
        "translation": "That car is very fast."
      },
      {
        "rank": 710,
        "spanish": "tranquilo",
        "english": "calm, quiet",
        "exampleSentence": "Por favor, mantente tranquilo durante la conferencia.",
        "translation": "Please remain calm during the conference."
      },
      {
        "rank": 711,
        "spanish": "asunto",
        "english": "matter, issue",
        "exampleSentence": "Este asunto es muy importante.",
        "translation": "This matter is very important."
      },
      {
        "rank": 712,
        "spanish": "acabó",
        "english": "it's over, finished (past of 'acabar')",
        "exampleSentence": "La película ya acabó.",
        "translation": "The movie has already finished."
      },
      {
        "rank": 713,
        "spanish": "quédate",
        "english": "stay, remain",
        "exampleSentence": "Por favor, quédate conmigo esta noche.",
        "translation": "Please stay with me tonight."
      },
      {
        "rank": 714,
        "spanish": "derecho",
        "english": "right, straight",
        "exampleSentence": "Sigue derecho por esta carretera.",
        "translation": "Keep going straight on this road."
      },
      {
        "rank": 715,
        "spanish": "placer",
        "english": "pleasure",
        "exampleSentence": "Es un placer conocerte.",
        "translation": "It's a pleasure to meet you."
      },
      {
        "rank": 716,
        "spanish": "recuerda",
        "english": "remember (imperative form of 'recordar')",
        "exampleSentence": "Recuerda traer el paraguas.",
        "translation": "Remember to bring the umbrella."
      },
      {
        "rank": 717,
        "spanish": "estuve",
        "english": "I was (past of 'estar')",
        "exampleSentence": "Estuve en casa todo el día.",
        "translation": "I was at home all day."
      },
      {
        "rank": 718,
        "spanish": "tratando",
        "english": "trying, attempting (present participle of 'tratar')",
        "exampleSentence": "Estuve tratando de arreglarlo.",
        "translation": "I was trying to fix it."
      },
      {
        "rank": 719,
        "spanish": "ejército",
        "english": "army",
        "exampleSentence": "Mi hermano se unió al ejército.",
        "translation": "My brother joined the army."
      },
      {
        "rank": 720,
        "spanish": "futuro",
        "english": "future",
        "exampleSentence": "El futuro es incierto.",
        "translation": "The future is uncertain."
      },
      {
        "rank": 721,
        "spanish": "llevar",
        "english": "to carry, to take",
        "exampleSentence": "Voy a llevar estas bolsas al coche.",
        "translation": "I'm going to take these bags to the car."
      },
      {
        "rank": 722,
        "spanish": "compañía",
        "english": "company, companion",
        "exampleSentence": "Trabajo en una gran compañía.",
        "translation": "I work at a big company."
      },
      {
        "rank": 723,
        "spanish": "venido",
        "english": "come (past participle of 'venir')",
        "exampleSentence": "He venido a visitarte.",
        "translation": "I've come to visit you."
      },
      {
        "rank": 724,
        "spanish": "listos",
        "english": "ready",
        "exampleSentence": "Estamos listos para comenzar.",
        "translation": "We are ready to start."
      },
      {
        "rank": 725,
        "spanish": "haremos",
        "english": "we will do (future of 'hacer')",
        "exampleSentence": "Mañana haremos un picnic.",
        "translation": "Tomorrow we will have a picnic."
      },
      {
        "rank": 726,
        "spanish": "sitio",
        "english": "place, site",
        "exampleSentence": "Este es un hermoso sitio para acampar.",
        "translation": "This is a beautiful place to camp."
      },
      {
        "rank": 727,
        "spanish": "verlo",
        "english": "see it (ver + lo)",
        "exampleSentence": "Quiero verlo ahora mismo.",
        "translation": "I want to see it right now."
      },
      {
        "rank": 728,
        "spanish": "puesto",
        "english": "position, post",
        "exampleSentence": "Obtuvo el primer puesto en la competencia.",
        "translation": "He got the first position in the competition."
      },
      {
        "rank": 729,
        "spanish": "atención",
        "english": "attention",
        "exampleSentence": "Presta atención a las instrucciones.",
        "translation": "Pay attention to the instructions."
      },
      {
        "rank": 730,
        "spanish": "sino",
        "english": "but, except",
        "exampleSentence": "No solo es inteligente sino también creativo.",
        "translation": "He is not only intelligent but also creative."
      },
      {
        "rank": 731,
        "spanish": "cambiar",
        "english": "to change",
        "exampleSentence": "Necesitamos cambiar nuestro enfoque.",
        "translation": "We need to change our approach."
      },
      {
        "rank": 732,
        "spanish": "error",
        "english": "error, mistake",
        "exampleSentence": "Cometí un error en el informe.",
        "translation": "I made a mistake in the report."
      },
      {
        "rank": 733,
        "spanish": "blanco",
        "english": "white",
        "exampleSentence": "El vestido es blanco como la nieve.",
        "translation": "The dress is white as snow."
      },
      {
        "rank": 734,
        "spanish": "raro",
        "english": "rare, strange",
        "exampleSentence": "Eso es muy raro.",
        "translation": "That is very strange."
      },
      {
        "rank": 735,
        "spanish": "palabras",
        "english": "spanishs",
        "exampleSentence": "Sus palabras me inspiraron.",
        "translation": "His spanishs inspired me."
      },
      {
        "rank": 736,
        "spanish": "llegó",
        "english": "arrived (past of 'llegar')",
        "exampleSentence": "Llegó a la fiesta tarde.",
        "translation": "He arrived at the party late."
      },
      {
        "rank": 737,
        "spanish": "sal",
        "english": "salt",
        "exampleSentence": "Añade un poco de sal a la comida.",
        "translation": "Add some salt to the food."
      },
      {
        "rank": 738,
        "spanish": "pase",
        "english": "walk, stroll (noun)",
        "exampleSentence": "Dar un paseo por el parque es relajante.",
        "translation": "Taking a walk in the park is relaxing."
      },
      {
        "rank": 739,
        "spanish": "mente",
        "english": "mind",
        "exampleSentence": "Tienes una mente brillante.",
        "translation": "You have a brilliant mind."
      },
      {
        "rank": 740,
        "spanish": "sistema",
        "english": "system",
        "exampleSentence": "El sistema operativo es fácil de usar.",
        "translation": "The operating system is easy to use."
      },
      {
        "rank": 741,
        "spanish": "película",
        "english": "movie, film",
        "exampleSentence": "Vamos a ver una película esta noche.",
        "translation": "We're going to watch a movie tonight."
      },
      {
        "rank": 742,
        "spanish": "anda",
        "english": "walks, goes (third person singular of 'andar')",
        "exampleSentence": "Ella anda por el parque todas las mañanas.",
        "translation": "She walks in the park every morning."
      },
      {
        "rank": 743,
        "spanish": "ello",
        "english": "it",
        "exampleSentence": "No entiendo por qué hizo ello.",
        "translation": "I don't understand why he did it."
      },
      {
        "rank": 744,
        "spanish": "negocio",
        "english": "business",
        "exampleSentence": "Mi padre tiene un negocio exitoso.",
        "translation": "My father has a successful business."
      },
      {
        "rank": 745,
        "spanish": "novia",
        "english": "girlfriend, bride",
        "exampleSentence": "Ella es mi novia desde hace tres años.",
        "translation": "She has been my girlfriend for three years."
      },
      {
        "rank": 746,
        "spanish": "permiso",
        "english": "permission",
        "exampleSentence": "Necesitas permiso para entrar aquí.",
        "translation": "You need permission to enter here."
      },
      {
        "rank": 747,
        "spanish": "creí",
        "english": "I believed (past of 'creer')",
        "exampleSentence": "Creí en su palabra.",
        "translation": "I believed in his spanish."
      },
      {
        "rank": 748,
        "spanish": "suena",
        "english": "it sounds (present of 'sonar')",
        "exampleSentence": "Eso suena interesante.",
        "translation": "That sounds interesting."
      },
      {
        "rank": 749,
        "spanish": "ocurre",
        "english": "it happens (present of 'ocurrir')",
        "exampleSentence": "No sé por qué eso ocurre.",
        "translation": "I don't know why that happens."
      },
      {
        "rank": 750,
        "spanish": "oficial",
        "english": "official",
        "exampleSentence": "El presidente es el oficial más importante del país.",
        "translation": "The president is the most important official in the country."
      },
      {
        "rank": 751,
        "spanish": "espere",
        "english": "wait (imperative form of 'esperar')",
        "exampleSentence": "Por favor, espere un momento.",
        "translation": "Please wait for a moment."
      },
      {
        "rank": 752,
        "spanish": "aire",
        "english": "air",
        "exampleSentence": "El aire fresco es bueno para la salud.",
        "translation": "Fresh air is good for health."
      },
    {
        "rank": 753,
        "spanish": "mató",
        "english": "he/she/it killed (past of 'matar')",
        "exampleSentence": "El asesino mató a dos personas.",
        "translation": "The murderer killed two people."
      },
      {
        "rank": 754,
        "spanish": "regresar",
        "english": "to return, go back",
        "exampleSentence": "Voy a regresar a casa pronto.",
        "translation": "I'm going to return home soon."
      },
      {
        "rank": 755,
        "spanish": "vio",
        "english": "he/she/it saw (past of 'ver')",
        "exampleSentence": "Ella lo vio en el parque.",
        "translation": "She saw him in the park."
      },
      {
        "rank": 756,
        "spanish": "hazlo",
        "english": "do it (imperative form of 'hacer')",
        "exampleSentence": "No lo pienses más, ¡hazlo!",
        "translation": "Don't think about it anymore, do it!"
      },
      {
        "rank": 757,
        "spanish": "trasero",
        "english": "rear, buttocks",
        "exampleSentence": "Siéntate en el asiento trasero.",
        "translation": "Sit in the rear seat."
      },
      {
        "rank": 758,
        "spanish": "grupo",
        "english": "group",
        "exampleSentence": "Trabajamos en grupo en este proyecto.",
        "translation": "We work as a group on this project."
      },
      {
        "rank": 759,
        "spanish": "entendido",
        "english": "understood (past participle of 'entender')",
        "exampleSentence": "Entendido, seguiré tus instrucciones.",
        "translation": "Understood, I'll follow your instructions."
      },
      {
        "rank": 760,
        "spanish": "señorita",
        "english": "miss, young lady",
        "exampleSentence": "La señorita López es la profesora de música.",
        "translation": "Miss Lopez is the music teacher."
      },
      {
        "rank": 761,
        "spanish": "música",
        "english": "music",
        "exampleSentence": "Me encanta escuchar música clásica.",
        "translation": "I love listening to classical music."
      },
      {
        "rank": 762,
        "spanish": "perra",
        "english": "female dog, bitch",
        "exampleSentence": "Tengo una perra llamada Luna.",
        "translation": "I have a female dog named Luna."
      },
      {
        "rank": 763,
        "spanish": "conoce",
        "english": "he/she/it knows (present of 'conocer')",
        "exampleSentence": "Ella conoce a muchas personas famosas.",
        "translation": "She knows many famous people."
      },
      {
        "rank": 764,
        "spanish": "empezar",
        "english": "to begin, start",
        "exampleSentence": "Vamos a empezar la reunión.",
        "translation": "Let's begin the meeting."
      },
      {
        "rank": 765,
        "spanish": "siente",
        "english": "he/she/it feels (present of 'sentir')",
        "exampleSentence": "Él se siente feliz hoy.",
        "translation": "He feels happy today."
      },
      {
        "rank": 766,
        "spanish": "acabo",
        "english": "I just finished (past of 'acabar')",
        "exampleSentence": "Acabo de terminar mi tarea.",
        "translation": "I just finished my homework."
      },
      {
        "rank": 767,
        "spanish": "estúpido",
        "english": "stupid",
        "exampleSentence": "Esa fue una respuesta estúpida.",
        "translation": "That was a stupid response."
      },
      {
        "rank": 768,
        "spanish": "diferente",
        "english": "different",
        "exampleSentence": "Este lugar es muy diferente de casa.",
        "translation": "This place is very different from home."
      },
      {
        "rank": 769,
        "spanish": "traje",
        "english": "suit",
        "exampleSentence": "Viste un traje elegante para la boda.",
        "translation": "He wore a stylish suit for the wedding."
      },
      {
        "rank": 770,
        "spanish": "modo",
        "english": "mode, way",
        "exampleSentence": "Puedes cambiar el modo de juego.",
        "translation": "You can change the game mode."
      },
      {
        "rank": 771,
        "spanish": "encontré",
        "english": "I found (past of 'encontrar')",
        "exampleSentence": "Encontré mi llave perdida.",
        "translation": "I found my lost key."
      },
      {
        "rank": 772,
        "spanish": "mensaje",
        "english": "message",
        "exampleSentence": "Tienes un mensaje en tu buzón de voz.",
        "translation": "You have a message in your voicemail."
      },
      {
        "rank": 773,
        "spanish": "llamada",
        "english": "call, phone call",
        "exampleSentence": "Recibí una llamada importante esta mañana.",
        "translation": "I received an important phone call this morning."
      },
      {
        "rank": 774,
        "spanish": "navidad",
        "english": "Christmas",
        "exampleSentence": "La Navidad es una época especial del año.",
        "translation": "Christmas is a special time of the year."
      },
      {
        "rank": 775,
        "spanish": "eras",
        "english": "you were (past of 'ser')",
        "exampleSentence": "Tú eras muy joven en ese entonces.",
        "translation": "You were very young back then."
      },
      {
        "rank": 776,
        "spanish": "pena",
        "english": "sorrow, pity",
        "exampleSentence": "Su muerte fue una gran pena para todos nosotros.",
        "translation": "Her death was a great sorrow to all of us."
      },
      {
        "rank": 777,
        "spanish": "largo",
        "english": "long",
        "exampleSentence": "Este camino es muy largo.",
        "translation": "This road is very long."
      },
      {
        "rank": 778,
        "spanish": "entra",
        "english": "enter (imperative form of 'entrar')",
        "exampleSentence": "Por favor, entra y siéntate.",
        "translation": "Please enter and have a seat."
      },
      {
        "rank": 779,
        "spanish": "piso",
        "english": "floor, story",
        "exampleSentence": "Mi oficina está en el quinto piso.",
        "translation": "My office is on the fifth floor."
      },
      {
        "rank": 780,
        "spanish": "foto",
        "english": "photo, picture",
        "exampleSentence": "Tomé una foto hermosa del paisaje.",
        "translation": "I took a beautiful photo of the landscape."
      },
      {
        "rank": 781,
        "spanish": "dijeron",
        "english": "they said (past of 'decir')",
        "exampleSentence": "Ellos dijeron que llegarían a tiempo.",
        "translation": "They said they would arrive on time."
      },
      {
        "rank": 782,
        "spanish": "médico",
        "english": "doctor, physician",
        "exampleSentence": "El médico le recetó medicamentos.",
        "translation": "The doctor prescribed medication for him."
      },
      {
        "rank": 783,
        "spanish": "accidente",
        "english": "accident",
        "exampleSentence": "Hubo un accidente en la carretera.",
        "translation": "There was an accident on the road."
      },
      {
        "rank": 784,
        "spanish": "fuiste",
        "english": "you went (past of 'ir')",
        "exampleSentence": "Tú fuiste al supermercado ayer.",
        "translation": "You went to the supermarket yesterday."
      },
      {
        "rank": 785,
        "spanish": "imposible",
        "english": "impossible",
        "exampleSentence": "Eso parece imposible de lograr.",
        "translation": "That seems impossible to achieve."
      },
      {
        "rank": 786,
        "spanish": "podríamos",
        "english": "we could (conditional of 'poder')",
        "exampleSentence": "Podríamos visitar a nuestros abuelos el fin de semana.",
        "translation": "We could visit our grandparents on the weekend."
      },
      {
        "rank": 787,
        "spanish": "línea",
        "english": "line",
        "exampleSentence": "Por favor, espera en la línea.",
        "translation": "Please wait on the line."
      },
      {
        "rank": 788,
        "spanish": "propia",
        "english": "own",
        "exampleSentence": "Tiene su propia empresa de tecnología.",
        "translation": "He has his own technology company."
      },
      {
        "rank": 789,
        "spanish": "barco",
        "english": "ship, boat",
        "exampleSentence": "El barco zarpó al amanecer.",
        "translation": "The ship sailed at dawn."
      },
      {
        "rank": 790,
        "spanish": "ganar",
        "english": "to win, earn",
        "exampleSentence": "Espero ganar el concurso de baile.",
        "translation": "I hope to win the dance contest."
      },
      {
        "rank": 791,
        "spanish": "normal",
        "english": "normal",
        "exampleSentence": "Todo está funcionando con normalidad.",
        "translation": "Everything is functioning normally."
      },
      {
        "rank": 792,
        "spanish": "segundos",
        "english": "seconds",
        "exampleSentence": "El cronómetro marcó 30 segundos.",
        "translation": "The stopwatch read 30 seconds."
      },
      {
        "rank": 793,
        "spanish": "vive",
        "english": "he/she/it lives (present of 'vivir')",
        "exampleSentence": "Mi abuela vive en el campo.",
        "translation": "My grandmother lives in the countryside."
      },
      {
        "rank": 794,
        "spanish": "mitad",
        "english": "half",
        "exampleSentence": "Corta la manzana en mitades.",
        "translation": "Cut the apple in half."
      },
      {
        "rank": 795,
        "spanish": "quiera",
        "english": "he/she/it wants (present subjunctive of 'querer')",
        "exampleSentence": "Deseo que él quiera venir con nosotros.",
        "translation": "I hope he wants to come with us."
      },
      {
        "rank": 796,
        "spanish": "tras",
        "english": "after",
        "exampleSentence": "Tomaré una siesta tras el almuerzo.",
        "translation": "I'll take a nap after lunch."
      },
      {
        "rank": 797,
        "spanish": "decirle",
        "english": "to tell him/her (infinitive of 'decir')",
        "exampleSentence": "Voy a decirle la verdad.",
        "translation": "I'm going to tell him/her the truth."
      },
      {
        "rank": 798,
        "spanish": "lindo",
        "english": "cute, lovely",
        "exampleSentence": "Esa cachorro es muy lindo.",
        "translation": "That puppy is very cute."
      },
      {
        "rank": 799,
        "spanish": "funciona",
        "english": "it works (present of 'funcionar')",
        "exampleSentence": "La máquina funciona correctamente.",
        "translation": "The machine works correctly."
      },
      {
        "rank": 800,
        "spanish": "programa",
        "english": "program",
        "exampleSentence": "Voy a ver mi programa de televisión favorito.",
        "translation": "I'm going to watch my favorite TV program."
      },
      {
        "rank": 801,
        "spanish": "vine",
        "english": "I came (past of 'venir')",
        "exampleSentence": "Vine a visitar a mi familia.",
        "translation": "I came to visit my family."
      },
      {
        "rank": 802,
        "spanish": "abre",
        "english": "open (imperative form of 'abrir')",
        "exampleSentence": "Por favor, abre la puerta.",
        "translation": "Please open the door."
      },
      {
        "rank": 803,
        "spanish": "sean",
        "english": "they are (present of 'ser')",
        "exampleSentence": "Ellos sean buenos amigos.",
        "translation": "They are good friends."
      },
      {
        "rank": 804,
        "spanish": "pagar",
        "english": "to pay",
        "exampleSentence": "Debes pagar la factura hoy.",
        "translation": "You must pay the bill today."
      },
      {
        "rank": 805,
        "spanish": "fotos",
        "english": "photos",
        "exampleSentence": "Tomé muchas fotos durante el viaje.",
        "translation": "I took many photos during the trip."
      },
      {
        "rank": 806,
        "spanish": "centro",
        "english": "center",
        "exampleSentence": "El centro de la ciudad es animado.",
        "translation": "The city center is lively."
      },
      {
        "rank": 807,
        "spanish": "supone",
        "english": "it supposes, it assumes (present of 'suponer')",
        "exampleSentence": "Eso supone un problema.",
        "translation": "That assumes a problem."
      },
      {
        "rank": 808,
        "spanish": "basura",
        "english": "garbage, trash",
        "exampleSentence": "Deben desechar la basura correctamente.",
        "translation": "They should dispose of trash properly."
      },
      {
        "rank": 809,
        "spanish": "situación",
        "english": "situation",
        "exampleSentence": "Esta es una situación complicada.",
        "translation": "This is a complicated situation."
      },
      {
        "rank": 810,
        "spanish": "mejores",
        "english": "better (plural of 'mejor')",
        "exampleSentence": "Queremos un futuro mejores para nuestros hijos.",
        "translation": "We want a better future for our children."
      },
      {
        "rank": 811,
        "spanish": "vienen",
        "english": "they come (present of 'venir')",
        "exampleSentence": "Ellos vienen a la fiesta esta noche.",
        "translation": "They are coming to the party tonight."
      },
      {
        "rank": 812,
        "spanish": "encanta",
        "english": "I love (present of 'encantar')",
        "exampleSentence": "Me encanta la música clásica.",
        "translation": "I love classical music."
      },
      {
        "rank": 813,
        "spanish": "marido",
        "english": "husband",
        "exampleSentence": "Mi marido es muy cariñoso.",
        "translation": "My husband is very affectionate."
      },
      {
        "rank": 814,
        "spanish": "personal",
        "english": "personal",
        "exampleSentence": "Tenemos asuntos personales que discutir.",
        "translation": "We have personal matters to discuss."
      },
      {
        "rank": 815,
        "spanish": "maestro",
        "english": "teacher, master",
        "exampleSentence": "Mi maestro de música es excelente.",
        "translation": "My music teacher is excellent."
      },
      {
        "rank": 816,
        "spanish": "hambre",
        "english": "hunger",
        "exampleSentence": "Tengo mucha hambre después de correr.",
        "translation": "I'm very hungry after running."
      },
      {
        "rank": 817,
        "spanish": "ataque",
        "english": "attack",
        "exampleSentence": "El país sufrió un ataque sorpresa.",
        "translation": "The country suffered a surprise attack."
      },
      {
        "rank": 818,
        "spanish": "culo",
        "english": "butt, ass (vulgar)",
        "exampleSentence": "Esa silla es incómoda para el culo.",
        "translation": "That chair is uncomfortable for the butt."
      },
      {
        "rank": 819,
        "spanish": "dale",
        "english": "give it to him/her (dar + le)",
        "exampleSentence": "Dale el libro a Juan.",
        "translation": "Give the book to Juan."
      },
      {
        "rank": 820,
        "spanish": "pie",
        "english": "foot",
        "exampleSentence": "Tengo un dolor en el pie derecho.",
        "translation": "I have pain in my right foot."
      },
      {
        "rank": 821,
        "spanish": "conseguir",
        "english": "to get, to obtain",
        "exampleSentence": "Voy a conseguir un nuevo trabajo.",
        "translation": "I'm going to get a new job."
      },
      {
        "rank": 822,
        "spanish": "trabajando",
        "english": "working (present participle of 'trabajar')",
        "exampleSentence": "Estoy trabajando en un proyecto importante.",
        "translation": "I'm working on an important project."
      },
      {
        "rank": 823,
        "spanish": "gracioso",
        "english": "funny, amusing",
        "exampleSentence": "Ese chiste es muy gracioso.",
        "translation": "That joke is very funny."
      },
      {
        "rank": 824,
        "spanish": "dejó",
        "english": "he/she left (past of 'dejar')",
        "exampleSentence": "Él me dejó una nota antes de irse.",
        "translation": "He left me a note before leaving."
      },
      {
        "rank": 825,
        "spanish": "pudo",
        "english": "he/she could (past of 'poder')",
        "exampleSentence": "Ella pudo resolver el problema.",
        "translation": "She could solve the problem."
      },
      {
        "rank": 826,
        "spanish": "derecha",
        "english": "right (direction)",
        "exampleSentence": "Gira a la derecha en la próxima calle.",
        "translation": "Turn right at the next street."
      },
      {
        "rank": 827,
        "spanish": "izquierda",
        "english": "left (direction)",
        "exampleSentence": "La tienda está a la izquierda de la carretera.",
        "translation": "The store is on the left side of the road."
      },
      {
        "rank": 828,
        "spanish": "próxima",
        "english": "next (feminine of 'próximo')",
        "exampleSentence": "La reunión será la semana próxima.",
        "translation": "The meeting will be next week."
      },
      {
        "rank": 829,
        "spanish": "pobre",
        "english": "poor",
        "exampleSentence": "Ayudemos a los más pobres.",
        "translation": "Let's help the poorest ones."
      },
      {
        "rank": 830,
        "spanish": "respuesta",
        "english": "response, answer",
        "exampleSentence": "Espero una respuesta pronto.",
        "translation": "I hope for a response soon."
      },
      {
        "rank": 831,
        "spanish": "tipos",
        "english": "types",
        "exampleSentence": "Hay muchos tipos de flores en el jardín.",
        "translation": "There are many types of flowers in the garden."
      },
      {
        "rank": 832,
        "spanish": "sentir",
        "english": "to feel",
        "exampleSentence": "Siento una gran alegría en mi corazón.",
        "translation": "I feel great joy in my heart."
      },
      {
        "rank": 833,
        "spanish": "tenías",
        "english": "you had (past of 'tener')",
        "exampleSentence": "¿Qué tenías en la mano?",
        "translation": "What did you have in your hand?"
      },
      {
        "rank": 834,
        "spanish": "pude",
        "english": "I could (past of 'poder')",
        "exampleSentence": "Finalmente, pude resolver el enigma.",
        "translation": "Finally, I could solve the puzzle."
      },
      {
        "rank": 835,
        "spanish": "darle",
        "english": "give it to him/her (dar + le)",
        "exampleSentence": "Voy a darle el regalo a María.",
        "translation": "I'm going to give the gift to María."
      },
      {
        "rank": 836,
        "spanish": "voz",
        "english": "voice",
        "exampleSentence": "Tiene una voz hermosa para cantar.",
        "translation": "She has a beautiful voice for singing."
      },
      {
        "rank": 837,
        "spanish": "amiga",
        "english": "friend (female)",
        "exampleSentence": "Ella es mi mejor amiga.",
        "translation": "She is my best friend."
      },
      {
        "rank": 838,
        "spanish": "gustan",
        "english": "like (third person plural of 'gustar')",
        "exampleSentence": "A ellos les gustan los deportes.",
        "translation": "They like sports."
      },
      {
        "rank": 839,
        "spanish": "vista",
        "english": "sight, view",
        "exampleSentence": "Desde aquí, tenemos una hermosa vista del mar.",
        "translation": "From here, we have a beautiful view of the sea."
      },
      {
        "rank": 840,
        "spanish": "salvo",
        "english": "except, safe (excepto, a salvo)",
        "exampleSentence": "Todos están a salvo después del accidente.",
        "translation": "Everyone is safe after the accident."
      },
      {
        "rank": 841,
        "spanish": "loca",
        "english": "crazy (feminine of 'loco')",
        "exampleSentence": "Esa idea suena loca.",
        "translation": "That idea sounds crazy."
      },
      {
        "rank": 842,
        "spanish": "hotel",
        "english": "hotel",
        "exampleSentence": "Nos alojaremos en un hotel de lujo.",
        "translation": "We will stay in a luxury hotel."
      },
      {
        "rank": 843,
        "spanish": "hicieron",
        "english": "they did (past of 'hacer')",
        "exampleSentence": "Ellos hicieron un gran trabajo.",
        "translation": "They did a great job."
      },
      {
        "rank": 844,
        "spanish": "ten",
        "english": "have (present of 'tener')",
        "exampleSentence": "Ten paciencia en situaciones difíciles.",
        "translation": "Have patience in difficult situations."
      },
      {
        "rank": 845,
        "spanish": "temo",
        "english": "I fear",
        "exampleSentence": "Temo lo que pueda pasar después.",
        "translation": "I fear what might happen next."
      },
      {
        "rank": 846,
        "spanish": "señal",
        "english": "signal, sign",
        "exampleSentence": "Sigue la señal hasta llegar al destino.",
        "translation": "Follow the sign until you reach the destination."
      },
      {
        "rank": 847,
        "spanish": "pelo",
        "english": "hair",
        "exampleSentence": "Ella tiene el pelo largo y rubio.",
        "translation": "She has long, blonde hair."
      },
      {
        "rank": 848,
        "spanish": "llevo",
        "english": "I wear (present of 'llevar')",
        "exampleSentence": "Hoy llevo un vestido rojo.",
        "translation": "Today I wear a red dress."
      },
      {
        "rank": 849,
        "spanish": "ayer",
        "english": "yesterday",
        "exampleSentence": "Fuimos al cine ayer por la noche.",
        "translation": "We went to the cinema last night."
      },
      {
        "rank": 850,
        "spanish": "das",
        "english": "you give (present of 'dar')",
        "exampleSentence": "Das consejos útiles a tus amigos.",
        "translation": "You give helpful advice to your friends."
      },
      {
        "rank": 851,
        "spanish": "nena",
        "english": "baby girl, babe",
        "exampleSentence": "Mi nena está durmiendo en la cuna.",
        "translation": "My baby girl is sleeping in the crib."
      },
      {
        "rank": 852,
        "spanish": "servicio",
        "english": "service",
        "exampleSentence": "El servicio en este restaurante es excelente.",
        "translation": "The service in this restaurant is excellent."
      },
      {
        "rank": 853,
        "spanish": "tren",
        "english": "train",
        "exampleSentence": "Tomaré el tren de las 9 de la mañana.",
        "translation": "I will take the 9 AM train."
      },
      {
        "rank": 854,
        "spanish": "bonito",
        "english": "nice, beautiful",
        "exampleSentence": "Este lugar tiene un paisaje muy bonito.",
        "translation": "This place has a very beautiful landscape."
      },
      {
        "rank": 855,
        "spanish": "mes",
        "english": "month",
        "exampleSentence": "Cumpliré años el próximo mes.",
        "translation": "I will have my birthday next month."
      },
      {
        "rank": 856,
        "spanish": "tendrá",
        "english": "he/she/it will have (future of 'tener')",
        "exampleSentence": "El año que viene tendrá más éxito.",
        "translation": "Next year, he/she will have more success."
      },
      {
        "rank": 857,
        "spanish": "tendrás",
        "english": "you will have (future of 'tener')",
        "exampleSentence": "Tendrás que estudiar mucho para aprobar.",
        "translation": "You will have to study a lot to pass."
      },
      {
        "rank": 858,
        "spanish": "edad",
        "english": "age",
        "exampleSentence": "Mi abuela tiene 90 años de edad.",
        "translation": "My grandmother is 90 years old."
      },
      {
        "rank": 859,
        "spanish": "ellas",
        "english": "they (feminine)",
        "exampleSentence": "Ellas están esperando en el parque.",
        "translation": "They (feminine) are waiting in the park."
      },
      {
        "rank": 860,
        "spanish": "hermosa",
        "english": "beautiful (feminine of 'hermoso')",
        "exampleSentence": "La puesta de sol es hermosa.",
        "translation": "The sunset is beautiful."
      },
      {
        "rank": 861,
        "spanish": "honor",
        "english": "honor",
        "exampleSentence": "Es un honor conocerte.",
        "translation": "It's an honor to meet you."
      },
      {
        "rank": 862,
        "spanish": "simplemente",
        "english": "simply",
        "exampleSentence": "Simplemente no puedo entenderlo.",
        "translation": "I simply can't understand it."
      },
      {
        "rank": 863,
        "spanish": "llamas",
        "english": "you call (present of 'llamar')",
        "exampleSentence": "Cuando necesites ayuda, me llamas.",
        "translation": "When you need help, you call me."
      },
      {
        "rank": 864,
        "spanish": "tengas",
        "english": "you have (present subjunctive of 'tener')",
        "exampleSentence": "Espero que tengas un buen día.",
        "translation": "I hope you have a good day."
      },
      {
        "rank": 865,
        "spanish": "corre",
        "english": "run (imperative form of 'correr')",
        "exampleSentence": "¡Corre, el perro nos persigue!",
        "translation": "Run, the dog is chasing us!"
      },
      {
        "rank": 866,
        "spanish": "baja",
        "english": "low, down",
        "exampleSentence": "La temperatura está muy baja hoy.",
        "translation": "The temperature is very low today."
      },
      {
        "rank": 867,
        "spanish": "sol",
        "english": "sun",
        "exampleSentence": "Disfrutemos del sol en la playa.",
        "translation": "Let's enjoy the sun at the beach."
      },
      {
        "rank": 868,
        "spanish": "siéntate",
        "english": "sit down (imperative form of 'sentarse')",
        "exampleSentence": "Por favor, siéntate y descansa.",
        "translation": "Please, sit down and rest."
      },
      {
        "rank": 869,
        "spanish": "dan",
        "english": "they give (present of 'dar')",
        "exampleSentence": "Ellos dan regalos en Navidad.",
        "translation": "They give gifts on Christmas."
      },
      {
        "rank": 870,
        "spanish": "humano",
        "english": "human",
        "exampleSentence": "El respeto por la vida humana es importante.",
        "translation": "Respect for human life is important."
      },
      {
        "rank": 871,
        "spanish": "divertido",
        "english": "funny, fun",
        "exampleSentence": "Esa película es muy divertida.",
        "translation": "That movie is very funny."
      },
      {
        "rank": 872,
        "spanish": "sexo",
        "english": "sex",
        "exampleSentence": "El sexo seguro es fundamental.",
        "translation": "Safe sex is crucial."
      },
      {
        "rank": 873,
        "spanish": "vuelto",
        "english": "change, coins (in the context of money)",
        "exampleSentence": "No tengo vuelto para el autobús.",
        "translation": "I don't have change for the bus."
      },
      {
        "rank": 874,
        "spanish": "peligro",
        "english": "danger",
        "exampleSentence": "Hay peligro de tormenta.",
        "translation": "There is a danger of a storm."
      },
      {
        "rank": 875,
        "spanish": "mesa",
        "english": "table",
        "exampleSentence": "Vamos a sentarnos a la mesa.",
        "translation": "Let's sit at the table."
      },
      {
        "rank": 876,
        "spanish": "siguiente",
        "english": "next",
        "exampleSentence": "La semana siguiente estaremos de vacaciones.",
        "translation": "We will be on vacation next week."
      },
      {
        "rank": 877,
        "spanish": "hablo",
        "english": "I speak (present of 'hablar')",
        "exampleSentence": "Hablo varios idiomas.",
        "translation": "I speak several languages."
      },
      {
        "rank": 878,
        "spanish": "disculpa",
        "english": "apology, excuse",
        "exampleSentence": "Ofrezco mis disculpas por llegar tarde.",
        "translation": "I offer my apologies for arriving late."
      },
      {
        "rank": 879,
        "spanish": "decirme",
        "english": "tell me (decir + me)",
        "exampleSentence": "Por favor, decírme lo que piensas.",
        "translation": "Please, tell me what you think."
      },
      {
        "rank": 880,
        "spanish": "caja",
        "english": "box",
        "exampleSentence": "Guarda tus juguetes en la caja.",
        "translation": "Put your toys in the box."
      },
      {
        "rank": 881,
        "spanish": "negocios",
        "english": "business",
        "exampleSentence": "Mi padre tiene su propio negocio.",
        "translation": "My father has his own business."
      },
      {
        "rank": 882,
        "spanish": "misión",
        "english": "mission",
        "exampleSentence": "Nuestra misión es ayudar a los necesitados.",
        "translation": "Our mission is to help the needy."
      },
      {
        "rank": 883,
        "spanish": "silencio",
        "english": "silence",
        "exampleSentence": "El silencio en la noche es tranquilizador.",
        "translation": "The silence at night is comforting."
      },
      {
        "rank": 884,
        "spanish": "sale",
        "english": "he/she/it goes out (present of 'salir')",
        "exampleSentence": "Ella sale con sus amigos esta noche.",
        "translation": "She is going out with her friends tonight."
      },
      {
        "rank": 885,
        "spanish": "llegado",
        "english": "arrived (past participle of 'llegar')",
        "exampleSentence": "Hemos llegado a nuestro destino.",
        "translation": "We have arrived at our destination."
      },
      {
        "rank": 886,
        "spanish": "estaría",
        "english": "I would be (conditional of 'estar')",
        "exampleSentence": "Estaría encantado de ayudarte.",
        "translation": "I would be delighted to help you."
      },
      {
        "rank": 887,
        "spanish": "regreso",
        "english": "return, comeback",
        "exampleSentence": "Espero tu regreso pronto.",
        "translation": "I hope for your return soon."
      },
      {
        "rank": 888,
        "spanish": "media",
        "english": "half",
        "exampleSentence": "Tomaré media taza de café.",
        "translation": "I will have half a cup of coffee."
      },
      {
        "rank": 889,
        "spanish": "estan",
        "english": "they are (misspelled, should be 'están')",
        "exampleSentence": "Ellos están en casa ahora.",
        "translation": "They are at home now."
      },
      {
        "rank": 890,
        "spanish": "propio",
        "english": "own",
        "exampleSentence": "Tiene su propio negocio.",
        "translation": "He/she has his/her own business."
      },
      {
        "rank": 891,
        "spanish": "oro",
        "english": "gold",
        "exampleSentence": "El anillo está hecho de oro.",
        "translation": "The ring is made of gold."
      },
      {
        "rank": 892,
        "spanish": "enseguida",
        "english": "right away, immediately",
        "exampleSentence": "Voy a hacerlo enseguida.",
        "translation": "I'm going to do it right away."
      },
      {
        "rank": 893,
        "spanish": "linda",
        "english": "cute, pretty (feminine of 'lindo')",
        "exampleSentence": "Esa gatita es tan linda.",
        "translation": "That kitten is so cute."
      },
      {
        "rank": 894,
        "spanish": "prometo",
        "english": "I promise",
        "exampleSentence": "Prometo que estaré allí a tiempo.",
        "translation": "I promise I will be there on time."
      },
      {
        "rank": 895,
        "spanish": "esposo",
        "english": "husband",
        "exampleSentence": "Mi esposo y yo celebramos nuestro aniversario.",
        "translation": "My husband and I celebrate our anniversary."
      },
      {
        "rank": 896,
        "spanish": "norte",
        "english": "north",
        "exampleSentence": "El norte es la dirección opuesta al sur.",
        "translation": "The north is the opposite direction of the south."
      },
      {
        "rank": 897,
        "spanish": "hubo",
        "english": "there was/were (past of 'haber')",
        "exampleSentence": "Hubo una gran tormenta anoche.",
        "translation": "There was a big storm last night."
      },
      {
        "rank": 898,
        "spanish": "juro",
        "english": "I swear",
        "exampleSentence": "Te juro que decir la verdad.",
        "translation": "I swear to tell the truth."
      },
      {
        "rank": 899,
        "spanish": "muerta",
        "english": "dead (feminine of 'muerto')",
        "exampleSentence": "La planta está muerta por falta de agua.",
        "translation": "The plant is dead due to lack of water."
      },
      {
        "rank": 900,
        "spanish": "interesante",
        "english": "interesting",
        "exampleSentence": "Esa película es muy interesante.",
        "translation": "That movie is very interesting."
      },
      {
        "rank": 901,
        "spanish": "pensaba",
        "english": "I was thinking",
        "exampleSentence": "Pensaba en ti todo el día.",
        "translation": "I was thinking about you all day."
        },
        {
        "rank": 902,
        "spanish": "busca",
        "english": "he/she/it looks for (present of 'buscar')",
        "exampleSentence": "Ella busca su teléfono.",
        "translation": "She is looking for her phone."
        },
        {
        "rank": 903,
        "spanish": "terminar",
        "english": "to finish, end",
        "exampleSentence": "Voy a terminar este libro hoy.",
        "translation": "I'm going to finish this book today."
        },
        {
        "rank": 904,
        "spanish": "tendré",
        "english": "I will have (future of 'tener')",
        "exampleSentence": "Mañana tendré una reunión importante.",
        "translation": "Tomorrow I will have an important meeting."
        },
        {
        "rank": 905,
        "spanish": "completamente",
        "english": "completely",
        "exampleSentence": "Estoy de acuerdo contigo completamente.",
        "translation": "I completely agree with you."
        },
        {
        "rank": 906,
        "spanish": "cita",
        "english": "appointment, date",
        "exampleSentence": "Tengo una cita con el médico mañana.",
        "translation": "I have a doctor's appointment tomorrow."
        },
        {
        "rank": 907,
        "spanish": "siete",
        "english": "seven",
        "exampleSentence": "Son las siete de la mañana.",
        "translation": "It's seven in the morning."
        },
        {
        "rank": 908,
        "spanish": "cumpleaños",
        "english": "birthday",
        "exampleSentence": "Hoy es mi cumpleaños.",
        "translation": "Today is my birthday."
        },
        {
        "rank": 909,
        "spanish": "abogado",
        "english": "lawyer",
        "exampleSentence": "Mi hermana es abogada.",
        "translation": "My sister is a lawyer."
        },
        {
        "rank": 910,
        "spanish": "alrededor",
        "english": "around",
        "exampleSentence": "Hay muchas tiendas alrededor.",
        "translation": "There are many shops around."
        },
        {
        "rank": 911,
        "spanish": "cerebro",
        "english": "brain",
        "exampleSentence": "El cerebro humano es asombroso.",
        "translation": "The human brain is amazing."
        },
        {
        "rank": 912,
        "spanish": "porqué",
        "english": "reason, cause (noun)",
        "exampleSentence": "No entiendo el porqué de su enojo.",
        "translation": "I don't understand the reason for his anger."
        },
        {
        "rank": 913,
        "spanish": "llave",
        "english": "key",
        "exampleSentence": "No puedo encontrar la llave de mi coche.",
        "translation": "I can't find the key to my car."
        },
        {
        "rank": 914,
        "spanish": "santo",
        "english": "saint",
        "exampleSentence": "San Francisco de Asís es un santo famoso.",
        "translation": "Saint Francis of Assisi is a famous saint."
        },
        {
        "rank": 915,
        "spanish": "hermoso",
        "english": "beautiful, handsome (masculine)",
        "exampleSentence": "El atardecer en la playa es hermoso.",
        "translation": "The sunset at the beach is beautiful."
        },
        {
        "rank": 916,
        "spanish": "necesario",
        "english": "necessary",
        "exampleSentence": "Es necesario estudiar para el examen.",
        "translation": "Studying for the exam is necessary."
        },
        {
        "rank": 917,
        "spanish": "edificio",
        "english": "building",
        "exampleSentence": "Ese edificio es muy alto.",
        "translation": "That building is very tall."
        },
        {
        "rank": 918,
        "spanish": "irnos",
        "english": "let's go (us) (imperative of 'irse')",
        "exampleSentence": "Es tarde, mejor irnos.",
        "translation": "It's late, let's go."
        },
        {
        "rank": 919,
        "spanish": "aun",
        "english": "even, still",
        "exampleSentence": "Aun no he terminado mi tarea.",
        "translation": "I haven't finished my homework yet."
        },
        {
        "rank": 920,
        "spanish": "tendremos",
        "english": "we will have (future of 'tener')",
        "exampleSentence": "Tendremos una fiesta el fin de semana.",
        "translation": "We will have a party on the weekend."
        },
        {
        "rank": 921,
        "spanish": "vayas",
        "english": "you go (present subjunctive of 'ir')",
        "exampleSentence": "Espero que vayas a la boda.",
        "translation": "I hope you go to the wedding."
        },
        {
        "rank": 922,
        "spanish": "doy",
        "english": "I give (present of 'dar')",
        "exampleSentence": "Te doy las gracias por tu ayuda.",
        "translation": "I thank you for your help."
        },
        {
        "rank": 923,
        "spanish": "trae",
        "english": "he/she/it brings (present of 'traer')",
        "exampleSentence": "Él siempre trae regalos.",
        "translation": "He always brings gifts."
        },
        {
        "rank": 924,
        "spanish": "salió",
        "english": "he/she/it left (past of 'salir')",
        "exampleSentence": "Ella salió temprano esta mañana.",
        "translation": "She left early this morning."
        },
        {
        "rank": 925,
        "spanish": "ley",
        "english": "law",
        "exampleSentence": "Es importante obedecer la ley.",
        "translation": "It's important to obey the law."
        },
        {
        "rank": 926,
        "spanish": "ahi",
        "english": "there",
        "exampleSentence": "El restaurante está justo ahí.",
        "translation": "The restaurant is right there."
        },
        {
        "rank": 927,
        "spanish": "verdadero",
        "english": "true, real",
        "exampleSentence": "La amistad verdadera es invaluable.",
        "translation": "True friendship is priceless."
        },
        {
        "rank": 928,
        "spanish": "pelea",
        "english": "fight",
        "exampleSentence": "Hubo una pelea en la escuela hoy.",
        "translation": "There was a fight at school today."
        },
        {
        "rank": 929,
        "spanish": "banco",
        "english": "bank",
        "exampleSentence": "Voy al banco a hacer un depósito.",
        "translation": "I'm going to the bank to make a deposit."
        },
        {
        "rank": 930,
        "spanish": "terrible",
        "english": "terrible",
        "exampleSentence": "Eso fue una noticia terrible.",
        "translation": "That was terrible news."
        },
        {
        "rank": 931,
        "spanish": "calma",
        "english": "calm, calmness",
        "exampleSentence": "Necesito un poco de calma en mi vida.",
        "translation": "I need some calmness in my life."
        },
        {
        "rank": 932,
        "spanish": "cena",
        "english": "dinner",
        "exampleSentence": "Vamos a cenar en ese restaurante.",
        "translation": "We're going to have dinner at that restaurant."
        },
        {
        "rank": 933,
        "spanish": "daré",
        "english": "I will give (future of 'dar')",
        "exampleSentence": "Te daré un regalo sorpresa.",
        "translation": "I will give you a surprise gift."
        },
        {
        "rank": 934,
        "spanish": "gobierno",
        "english": "government",
        "exampleSentence": "El gobierno está implementando nuevas leyes.",
        "translation": "The government is implementing new laws."
        },
        {
        "rank": 935,
        "spanish": "comprar",
        "english": "to buy",
        "exampleSentence": "Voy a comprar un coche nuevo.",
        "translation": "I'm going to buy a new car."
        },
        {
        "rank": 936,
        "spanish": "creen",
        "english": "they believe (present of 'creer')",
        "exampleSentence": "Ellos creen en la magia.",
        "translation": "They believe in magic."
        },
        {
        "rank": 937,
        "spanish": "sargento",
        "english": "sergeant",
        "exampleSentence": "El sargento dio órdenes a los soldados.",
        "translation": "The sergeant gave orders to the soldiers."
        },
        {
        "rank": 938,
        "spanish": "destino",
        "english": "destiny",
        "exampleSentence": "Nuestro destino está en nuestras manos.",
        "translation": "Our destiny is in our hands."
        },
        {
        "rank": 939,
        "spanish": "existe",
        "english": "exists",
        "exampleSentence": "La vida en otros planetas podría existir.",
        "translation": "Life on other planets could exist."
        },
        {
        "rank": 940,
        "spanish": "hacía",
        "english": "he/she/it did (past of 'hacer')",
        "exampleSentence": "Hacía frío en la montaña.",
        "translation": "It was cold in the mountains."
        },
        {
        "rank": 941,
        "spanish": "novio",
        "english": "boyfriend",
        "exampleSentence": "Ella está feliz con su nuevo novio.",
        "translation": "She's happy with her new boyfriend."
        },
        {
        "rank": 942,
        "spanish": "sala",
        "english": "room, living room",
        "exampleSentence": "Vamos a decorar la sala.",
        "translation": "We're going to decorate the living room."
        },
        {
        "rank": 943,
        "spanish": "través",
        "english": "through",
        "exampleSentence": "Caminamos a través del bosque.",
        "translation": "We walked through the forest."
        },
        {
        "rank": 944,
        "spanish": "regalo",
        "english": "gift",
        "exampleSentence": "Le compré un regalo de cumpleaños.",
        "translation": "I bought her a birthday gift."
        },
        {
        "rank": 945,
        "spanish": "iglesia",
        "english": "church",
        "exampleSentence": "Vamos a la iglesia el domingo.",
        "translation": "We're going to church on Sunday."
        },
        {
        "rank": 946,
        "spanish": "decía",
        "english": "he/she/it said (past of 'decir')",
        "exampleSentence": "Ella decía la verdad.",
        "translation": "She was telling the truth."
        },
        {
        "rank": 947,
        "spanish": "cualquiera",
        "english": "anyone, anybody",
        "exampleSentence": "Puede hacerlo cualquiera.",
        "translation": "Anyone can do it."
        },
        {
        "rank": 948,
        "spanish": "excelente",
        "english": "excellent",
        "exampleSentence": "Fue una película excelente.",
        "translation": "It was an excellent movie."
        },
        {
        "rank": 949,
        "spanish": "esperen",
        "english": "they wait (present subjunctive of 'esperar')",
        "exampleSentence": "Esperen aquí mientras regreso.",
        "translation": "Wait here while I come back."
        },
        {
        "rank": 950,
        "spanish": "deseo",
        "english": "wish, desire",
        "exampleSentence": "Mi deseo es viajar por el mundo.",
        "translation": "My wish is to travel the world."
        },
        {
            "rank": 951,
            "spanish": "alma",
            "english": "soul",
            "exampleSentence": "Mi alma está en paz.",
            "translation": "My soul is at peace."
        },
        {
            "rank": 952,
            "spanish": "diablo",
            "english": "devil",
            "exampleSentence": "El diablo es un símbolo del mal en muchas culturas.",
            "translation": "The devil is a symbol of evil in many cultures."
        },
        {
            "rank": 953,
            "spanish": "deje",
            "english": "he/she/it left (past of 'dejar')",
            "exampleSentence": "Ella deje su bolsa en el coche.",
            "translation": "She left her bag in the car."
        },
        {
            "rank": 954,
            "spanish": "cuántos",
            "english": "how many",
            "exampleSentence": "¿Cuántos años tienes?",
            "translation": "How many years old are you?"
        },
        {
            "rank": 955,
            "spanish": "espada",
            "english": "sspanish",
            "exampleSentence": "El caballero desenvainó su espada.",
            "translation": "The knight drew his sspanish."
        },
        {
            "rank": 956,
            "spanish": "estábamos",
            "english": "we were (past of 'estar')",
            "exampleSentence": "Estábamos cansados después del viaje largo.",
            "translation": "We were tired after the long trip."
        },
        {
            "rank": 957,
            "spanish": "carne",
            "english": "meat",
            "exampleSentence": "Me encanta la carne asada.",
            "translation": "I love grilled meat."
        },
        {
            "rank": 958,
            "spanish": "maravilloso",
            "english": "wonderful, marvelous",
            "exampleSentence": "Fue un día maravilloso en la playa.",
            "translation": "It was a wonderful day at the beach."
        },
        {
            "rank": 959,
            "spanish": "vidas",
            "english": "lives",
            "exampleSentence": "Salvamos vidas con esta medicina.",
            "translation": "We save lives with this medicine."
        },
        {
            "rank": 960,
            "spanish": "sucedió",
            "english": "it happened (past of 'suceder')",
            "exampleSentence": "¿Qué sucedió después?",
            "translation": "What happened next?"
        },
        {
            "rank": 961,
            "spanish": "oí",
            "english": "I heard (past of 'oír')",
            "exampleSentence": "Oí una canción hermosa anoche.",
            "translation": "I heard a beautiful song last night."
        },
        {
            "rank": 962,
            "spanish": "peligroso",
            "english": "dangerous",
            "exampleSentence": "Ese camino es peligroso de noche.",
            "translation": "That road is dangerous at night."
        },
        {
            "rank": 963,
            "spanish": "dirección",
            "english": "direction, address",
            "exampleSentence": "Dame tu dirección, y te enviaré una carta.",
            "translation": "Give me your address, and I will send you a letter."
        },
        {
            "rank": 964,
            "spanish": "libertad",
            "english": "freedom",
            "exampleSentence": "La libertad es un derecho humano fundamental.",
            "translation": "Freedom is a fundamental human right."
        },
        {
            "rank": 965,
            "spanish": "jesús",
            "english": "Jesus",
            "exampleSentence": "Jesús es una figura importante en el cristianismo.",
            "translation": "Jesus is an important figure in Christianity."
        },
        {
            "rank": 966,
            "spanish": "ocurrió",
            "english": "it occurred (past of 'ocurrir')",
            "exampleSentence": "¿Alguna vez te preguntaste cómo ocurrió esto?",
            "translation": "Have you ever wondered how this happened?"
        },
        {
            "rank": 967,
            "spanish": "veré",
            "english": "I will see (future of 'ver')",
            "exampleSentence": "Te veré mañana en la fiesta.",
            "translation": "I will see you at the party tomorrow."
        },
        {
            "rank": 968,
            "spanish": "sueños",
            "english": "dreams",
            "exampleSentence": "Los sueños pueden hacerse realidad.",
            "translation": "Dreams can come true."
        },
        {
            "rank": 969,
            "spanish": "pudiera",
            "english": "he/she could (past subjunctive of 'poder')",
            "exampleSentence": "Si pudiera, viajaría por el mundo.",
            "translation": "If I could, I would travel the world."
        },
        {
            "rank": 970,
            "spanish": "detective",
            "english": "detective",
            "exampleSentence": "El detective está investigando el caso.",
            "translation": "The detective is investigating the case."
        },
        {
            "rank": 971,
            "spanish": "sorpresa",
            "english": "surprise",
            "exampleSentence": "Le preparé una sorpresa de cumpleaños.",
            "translation": "I prepared a birthday surprise for him/her."
        },
        {
            "rank": 972,
            "spanish": "tuya",
            "english": "yours (feminine)",
            "exampleSentence": "Esta casa es tuya.",
            "translation": "This house is yours."
        },
        {
            "rank": 973,
            "spanish": "pies",
            "english": "feet",
            "exampleSentence": "Mis pies están cansados después de caminar todo el día.",
            "translation": "My feet are tired after walking all day."
        },
        {
            "rank": 974,
            "spanish": "club",
            "english": "club",
            "exampleSentence": "Soy miembro de un club de lectura.",
            "translation": "I'm a member of a book club."
        },
        {
            "rank": 975,
            "spanish": "terminado",
            "english": "finished (past participle of 'terminar')",
            "exampleSentence": "Hemos terminado el proyecto.",
            "translation": "We have finished the project."
        },
        {
            "rank": 976,
            "spanish": "infierno",
            "english": "hell",
            "exampleSentence": "Algunas culturas creen en el infierno como un lugar de castigo.",
            "translation": "Some cultures believe in hell as a place of punishment."
        },
        {
            "rank": 977,
            "spanish": "creía",
            "english": "he/she believed (past of 'creer')",
            "exampleSentence": "Ella creía en la magia.",
            "translation": "She believed in magic."
        },
        {
            "rank": 978,
            "spanish": "luna",
            "english": "moon",
            "exampleSentence": "La luna brilla en el cielo nocturno.",
            "translation": "The moon shines in the night sky."
        },
        {
            "rank": 979,
            "spanish": "salvar",
            "english": "to save",
            "exampleSentence": "Los bomberos trabajan para salvar vidas.",
            "translation": "Firefighters work to save lives."
        },
        {
            "rank": 980,
            "spanish": "carta",
            "english": "letter",
            "exampleSentence": "Recibí una carta de mi amigo ayer.",
            "translation": "I received a letter from my friend yesterday."
        },
        {
            "rank": 981,
            "spanish": "estés",
            "english": "you are (subjunctive of 'estar')",
            "exampleSentence": "Espero que estés bien.",
            "translation": "I hope you are well."
        },
        {
            "rank": 982,
            "spanish": "cielos",
            "english": "heavens",
            "exampleSentence": "¡Dios mío, cielos!",
            "translation": "Oh my God, heavens!"
        },
        {
            "rank": 983,
            "spanish": "teniente",
            "english": "lieutenant",
            "exampleSentence": "El teniente lideró la operación militar.",
            "translation": "The lieutenant led the military operation."
        },
        {
            "rank": 984,
            "spanish": "encuentra",
            "english": "finds (present of 'encontrar')",
            "exampleSentence": "Él la encuentra en el parque.",
            "translation": "He finds her in the park."
        },
        {
            "rank": 985,
            "spanish": "veamos",
            "english": "let's see (present subjunctive of 'ver')",
            "exampleSentence": "Veamos qué sucede después.",
            "translation": "Let's see what happens next."
        },
        {
            "rank": 986,
            "spanish": "quise",
            "english": "I wanted (past of 'querer')",
            "exampleSentence": "Quise ayudar, pero no pude.",
            "translation": "I wanted to help, but I couldn't."
        },
        {
            "rank": 987,
            "spanish": "escúchame",
            "english": "listen to me",
            "exampleSentence": "Por favor, escúchame atentamente.",
            "translation": "Please, listen to me carefully."
        },
        {
            "rank": 988,
            "spanish": "necesitan",
            "english": "they need",
            "exampleSentence": "Ellos necesitan tu ayuda.",
            "translation": "They need your help."
        },
        {
            "rank": 989,
            "spanish": "ambos",
            "english": "both",
            "exampleSentence": "Ambos estaban contentos con el resultado.",
            "translation": "Both were happy with the outcome."
        },
        {
            "rank": 990,
            "spanish": "decisión",
            "english": "decision",
            "exampleSentence": "Tomar una decisión importante no es fácil.",
            "translation": "Making an important decision is not easy."
        },
        {
            "rank": 991,
            "spanish": "enemigo",
            "english": "enemy",
            "exampleSentence": "El enemigo se acerca.",
            "translation": "The enemy is approaching."
        },
        {
            "rank": 992,
            "spanish": "hicimos",
            "english": "we did (past of 'hacer')",
            "exampleSentence": "Hicimos todo lo que pudimos.",
            "translation": "We did everything we could."
        },
        {
            "rank": 993,
            "spanish": "dulce",
            "english": "sweet",
            "exampleSentence": "Me encanta el sabor de lo dulce.",
            "translation": "I love the taste of sweet things."
        },
        {
            "rank": 994,
            "spanish": "pruebas",
            "english": "tests",
            "exampleSentence": "Necesitamos hacer pruebas antes de lanzar el producto.",
            "translation": "We need to run tests before launching the product."
        },
        {
            "rank": 995,
            "spanish": "querías",
            "english": "you wanted (past of 'querer')",
            "exampleSentence": "¿Qué querías decir con eso?",
            "translation": "What did you want to say with that?"
        },
        {
            "rank": 996,
            "spanish": "abuelo",
            "english": "grandfather",
            "exampleSentence": "Mi abuelo solía contarme historias.",
            "translation": "My grandfather used to tell me stories."
        },
        {
            "rank": 997,
            "spanish": "totalmente",
            "english": "totally",
            "exampleSentence": "Estoy de acuerdo contigo, totalmente.",
            "translation": "I agree with you, totally."
        },
        {
            "rank": 998,
            "spanish": "mirando",
            "english": "looking",
            "exampleSentence": "Estaba mirando las estrellas en la noche.",
            "translation": "I was looking at the stars at night."
        },
        {
            "rank": 999,
            "spanish": "vayan",
            "english": "they go (present subjunctive of 'ir')",
            "exampleSentence": "Espero que vayan a la fiesta esta noche.",
            "translation": "I hope they go to the party tonight."
        },
        {
            "rank": 1000,
            "spanish": "carrera",
            "english": "career",
            "exampleSentence": "Está construyendo una carrera exitosa.",
            "translation": "He/she is building a successful career."
        }    
    
  ]


  


  
