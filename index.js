var onlineBooks;
var onlineBooksAdded;

fetch("https://api.apispreadsheets.com/data/13947/").then(res=>{
	if (res.status === 200){
		// SUCCESS
		res.json().then(data=>{
			onlineBooks = data;
            console.log(onlineBooks.data[1].BookTitle);
            
            for (var i = 0; i < onlineBooks.data.length; i++){
                
                $(".books").append('<div class="col details col-lg-4 col-md-6 col-sm-12"></div>');
                $(".col:last-of-type").append('<img src="' + onlineBooks.data[i].url + '" alt="Book" class="book-cover">')
                $(".col:last-of-type").append('<p class="summary">' + onlineBooks.data[i].Summary + '</p>');
                $(".col:last-of-type").append('<h1 class="title">' + onlineBooks.data[i].BookTitle + '</h1>');
                $(".col:last-of-type").append('<h2 class="author">By ' + onlineBooks.data[i].Author + '</h2>');
                $(".col:last-of-type").append('<button class="btn btn-lg btn-success read-this">Read This</button>');   
            }

        
		}).catch(err => console.log(err))
	}
	else{
		alert("Could not connect online");
	}
})




var authors = ["Jhumpa Lahiri", "Arundhati Roy", "Fatima Farheen Mirza", "Aravind Adiga","Mohsin Hamid", "Mindy Kaling", "Vikram Seth", "Rohinton Mistry", "Mohsin Hamid"];
var books = ["Interpreter of Maladies", "The God of Small Things", "A Place for Us", "The White Tiger", "How to Get Filthy Rich in Rising Asia", "Is Everyone Hanging Out Without Me?", "A Suitable Boy", "A Fine Balance", "The Reluctant Fundamentalist"];
var summaries = ["Navigating between the Indian traditions they've inherited and the baffling new world, the characters in Jhumpa Lahiri's elegant, touching stories seek love beyond the barriers of culture and generations. In \"A Temporary Matter,\" published in The New Yorker, a young Indian-American couple faces the heartbreak of a stillborn birth while their Boston neighborhood copes with a nightly blackout. In the title story, an interpreter guides an American family through the India of their ancestors and hears an astonishing confession. Lahiri writes with deft cultural insight reminiscent of Anita Desai and a nuanced depth that recalls Mavis Gallant",

"The God of Small Things is the debut novel of Indian writer Arundhati Roy. It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the \"Love Laws\" that lay down \"who should be loved, and how.",

"As an Indian wedding gathers a family back together, parents Rafiq and Layla must reckon with the choices their children have made. There is Hadia: their headstrong, eldest daughter, whose marriage is a match of love and not tradition. Huda, the middle child, determined to follow in her sister’s footsteps. And lastly, their estranged son, Amar, who returns to the family fold for the first time in three years to take his place as brother of the bride. What secrets and betrayals have caused this close-knit family to fracture? Can Amar find his way back to the people who know and love him best?",

"Balram Halwai is a complicated man. Servant. Philosopher. Entrepreneur. Murderer. Over the course of seven nights, by the scattered light of a preposterous chandelier, Balram tells us the terrible and transfixing story of how he came to be a success in life—having nothing but his own wits to help him along.",

"How to Get Filthy Rich in Rising Asia is an astonishing and riveting tale of a man’s journey from impoverished rural boy to corporate tycoon, it steals its shape from the business self-help books devoured by ambitious youths all over “rising Asia.” It follows its nameless hero to the sprawling metropolis where he begins to amass an empire built on that most fluid, and increasingly scarce, of goods: water. Yet his heart remains set on something else, on the pretty girl whose star rises along with his, their paths crossing and recrossing, a lifelong affair sparked and snuffed and sparked again by the forces that careen their fates along.",

"In Is Everyone Hanging Out Without Me?, Mindy invites readers on a tour of her life and her unscientific observations on romance, friendship, and Hollywood, with several conveniently placed stopping points for you to run errands and make phone calls. Mindy Kaling really is just a Girl Next Door - not so much literally anywhere in the continental United States, but definitely if you live in India or Sri Lanka.",

"A Suitable Boy is set in a newly post-independence, post-partition India. The novel follows four families during 18 months, and centres on Mrs. Rupa Mehra's efforts to arrange the marriage of her younger daughter, Lata, to a \"suitable boy\". Lata is a 19-year-old university student who refuses to be influenced by her domineering mother or opinionated brother, Arun. Her story revolves around the choice she is forced to make between her suitors Kabir, Haresh, and Amit.",

"The time is 1975. The place is an unnamed city by the sea. The government has just declared a State of Emergency, in whose upheavals four strangers--a spirited widow, a young student uprooted from his idyllic hill station, and two tailors who have fled the caste violence of their native village--will be thrust together, forced to share one cramped apartment and an uncertain future.",

"The Reluctant Fundamentalist is the story of Changez, a young, Princeton-educated Pakistani who goes on to work at a prestigious financial analysis firm in New York City and falls in love with a woman from the upper echelons of New York society. He seems to have achieved the American dream--until 9/11 devastates the city. As the woman and city he loves suffer from new wounds and old scars, Changez finds that his place in society had shifted. With the world seemingly crumbling in front of him, Changez must decide where his true loyalties lie--with his adopted country or his homeland."];

var urls = ["https://i0.wp.com/mookseandgripes.com/reviews/wp-content/uploads/2009/04/interpreter-of-maladies.jpg?resize=356%2C530",
"https://images-na.ssl-images-amazon.com/images/I/91EFcae8moL.jpg",
"https://images-na.ssl-images-amazon.com/images/I/91UyhOOZ6HL.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71M8ABydLfL.jpg",
"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361651053l/17410533.jpg",
"https://images-na.ssl-images-amazon.com/images/I/91O9rRofL6L.jpg",
"https://images-na.ssl-images-amazon.com/images/I/51F36p4GAZL._AC_UL600_SR399,600_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/81+ayPZnayL.jpg",
"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532715321l/40961543.jpg"]

var userAuthors = [];
var userBooks = [];
var userSummaries = [];
var userUrls = [];


for (var i = 0; i < authors.length; i++){

    $(".books").append('<div class="col details col-lg-4 col-md-6 col-sm-12"></div>');
    $(".col:last-of-type").append('<img src="' + urls[i] + '" alt="Book" class="book-cover">')
    $(".col:last-of-type").append('<p class="summary">' + summaries[i] + '</p>');
    $(".col:last-of-type").append('<h1 class="title">' + books[i] + '</h1>');
    $(".col:last-of-type").append('<h2 class="author">By ' + authors[i] + '</h2>');
    $(".col:last-of-type").append('<button class="btn btn-lg btn-success read-this">Read This</button>');
    
    
}



$(".book-cover").on("mouseenter", function(){
    $(this).parent().children(".summary").addClass("hidden");
    console.log("bing");
}, function() {
    $(this).parent().children(".summary").removeClass("hidden");
});

$('.books').on("mouseenter", ".col .book-cover", function() {
    $(this).parent().children(".summary").addClass("hidden");
});

$('.books').on("mouseleave", ".col .book-cover", function() {
    $(this).parent().children(".summary").removeClass("hidden");
});




$('.books').on("click", ".col .read-this", function() {
    $(".user-books:last-of-type").append('<div class="col user-choice col-lg-2"></div>');

    $(".user-choice:last-of-type").append('<img src="' + $(this).parent().children(".book-cover").attr("src") + '" alt="Book" class="user-book-cover">');

    $(this).parent().remove();
});


$(".add-book-button").click(function (){
    window.location.href = "addBook.html";
});


