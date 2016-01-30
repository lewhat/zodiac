var zodiac=[
{
	sign: "aries",
	meaning:"Aries people are creative, adaptive, and insightful. They can also be strong-willed and spontaneous (sometimes to a fault).",
	image:"img/aries.png"
},
{
	sign: "taurus",
	meaning:"Taurus zodiac signs and meanings, like the animal that represents them, is all about strength, stamina and will. Stubborn by nature, the Taurus will stand his/her ground to the bitter end (sometimes even irrationally so).",
	image:"img/tarus.png"
},
{
	sign: "gemini",
	meaning:"Flexibility, balance and adaptability are the keywords for the Gemini. They are quick to grasp the meaning of a situation and act on it, often with positive effects.",
	image:"img/gemini.png"
},
{
	sign: "cancer",
	meaning:"Cancerians love home-life, family and domestic settings. They are traditionalists, and enjoy operating on a fundamental level. They love history, and are fascinated with the beginnings of things (heraldry, ancestry, etc.).",
	image:"img/cancer.png"
},
{
	sign: "leo",
	meaning:"The zodiac signs and meanings of Leo is about expanse, power and exuberance. Leo's are natural born leaders, and they will let you know it as they have a tendency to be high-minded and vocal about their opinions.",
	image: "img/leo.png"
},
{
	sign:"virgo",
	meaning:"Virgo's have keen minds, and are delightful to chat with, often convincing others of outlandish tales with ease and charm. Virgo's are inquisitive and are very skilled at drawing information from people. This trait also makes them naturally intuitive.",
	image:"img/virgo.png"
},
{
	sign:"libra",
	meaning:"As their zodiac signs and meanings would indicate, Libra's are all about balance, justice, equanimity and stability. They easily surround themselves with harmony and beauty, but sometimes go to extremes to do so if their goals are unreasonable or unhealthy.",
	image:"img/libra.png"
},
{
	sign:"scorpio",
	meaning:"The Scorpio is often misunderstood. These personalities are bold and are capable of executing massive enterprises with cool control and confidence. They can surmount seemingly all obstacles when they put their mind to the task, and they have unshakable focus when the situation calls for it.",
	image:"img/scorpio.png"
},
{
	sign:"sagittarius",
	meaning:"Here we have the philosopher among the zodiac signs and meanings. Like the Scorpio, they have great ability for focus, and can be very intense. However, they must channel their energy or they will waste time and wear themselves out going in too many directions at once.",
	image:"img/sagittarius.png"
},
{
	sign:"capricorn",
	meaning:"Capricorn's are also philosophical signs and are highly intelligent too. They apply their knowledge to practical matters, and strive to maintain stability and order. They are good organizers, and they achieve their goals by purposeful, systematic means. They are very intuitive, although they don't share this trait with others freely.",
	image:"img/capricorn.png"
},
{
	sign:"aquarius",
	meaning:"Often simple and unassuming, the Aquarian goes about accomplishing goals in a quiet, often unorthodox ways. Although their methods may be unorthodox, the results for achievement are surprisingly effective. Aquarian's will take up any cause, and are humanitarians of the zodiac.",
	image:"img/aquarius.png"
},
{
	sign:"pisces",
	meaning:"Also unassuming, the Pisces zodiac signs and meanings deal with acquiring vast amounts of knowledge, but you would never know it. They keep an extremely low profile compared to others in the zodiac. They are honest, unselfish, trustworthy and often have quiet dispositions.",
	image:"img/pisces.png"
}
]

function horoscope() {
	var sign = document.getElementById("sign").value.toLowerCase()

	for (i=0; i < zodiac.length; i++){
		if (sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("picture").src = zodiac[i].image
			document.getElementById("fortune").innerHTML = zodiac[i].meaning
			return
		}else{
			document.getElementById("yourSign").innerHTML = "That's not a valid horoscope sign. Try again"

		}
	}
}

$('button').click(function(){
	$('#picture').fadeIn({speed:3000});
	$('#yourSign').fadeInLeft({speed:3000});
	$("#fortune").fadeInRight({speed:3000});
});