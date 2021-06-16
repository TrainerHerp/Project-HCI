/* Characters */
var lightBtn = document.getElementById("light_button");
var darkBtn = document.getElementById("dark_button");
var lightDiv = document.getElementById("light");
var darkDiv = document.getElementById("dark");

var isLight = true;

darkBtn.onclick = function(){
    darkDiv.classList.remove('char_inactive');
    darkDiv.classList.add('char_active');
    lightDiv.classList.remove('char_active');
    lightDiv.classList.add('char_inactive');
    document.getElementById("characters_body").style.backgroundImage = "url('../assets/dark-background.jpg')";
    isLight = false;
    mediaScreen(x); 
    checkCategory();
};

lightBtn.onclick = function(){
    lightDiv.classList.remove('char_inactive');
    lightDiv.classList.add('char_active');
    darkDiv.classList.remove('char_active');
    darkDiv.classList.add('char_inactive');
    document.getElementById("characters_body").style.backgroundImage = "url('../assets/light-background.jpg')";
    isLight = true;
    mediaScreen(x); 
    checkCategory();
};

var modalBg = document.querySelector('.modal-bg');

$('.albedo_modal').click(function() {  
    modalBg.classList.add('bg-active');
    document.getElementById("modal").style.backgroundImage = "url('../assets/light_modal_background.jpg')";
    $("#name_modal").text("Albedo")
    $("#img_modal").attr("src","../Assets/albedo_modal.png");
    $("#story_modal").text("An alchemist based in Mondstadt, in the service of the Knights of Favonius.\"Genius,\" \"Kreideprinz,\" or \"Captain of the Investigation Team\"... Such titles and honors are of no consequence to him when there is so much more research to conduct.The pursuit of fortune and connections cannot hold a candle to his heart's desire — acquiring the limitless, obscure knowledge left behind by previous generations of scholars.");
});

$('.jean_modal').click(function() {  
    modalBg.classList.add('bg-active');
    document.getElementById("modal").style.backgroundImage = "url('../assets/light_modal_background.jpg')";
    $("#name_modal").text("Jean")
    $("#img_modal").attr("src","../Assets/jean_modal.png");
    $("#story_modal").text("As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt. She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.");
});

$('.amber_modal').click(function() {  
    modalBg.classList.add('bg-active');
    document.getElementById("modal").style.backgroundImage = "url('../assets/light_modal_background.jpg')";
    $("#name_modal").text("Amber")
    $("#img_modal").attr("src","../Assets/amber_modal.png");
    $("#story_modal").text("A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Championship in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.");
});

$('.bennett_modal').click(function() {  
    modalBg.classList.add('bg-active');
    document.getElementById("modal").style.backgroundImage = "url('../assets/light_modal_background.jpg')";
    $("#name_modal").text("Bennett")
    $("#img_modal").attr("src","../Assets/bennett_modal.png");
    $("#story_modal").text("The few young adventurers that the Mondstadt Adventurers' Guild has always found themselves tangled up in baffling bouts of bad luck. He is the only active member of his own adventure group, known as \"Benny's Adventure Team,\" after all the other members decided to \"take leave\" following a series of unfortunate incidents. As a result, the team is currently on the verge of being dissolved. ");
});

$('.chongyun_modal').click(function() {  
    modalBg.classList.add('bg-active');
    document.getElementById("modal").style.backgroundImage = "url('../assets/light_modal_background.jpg')";
    $("#name_modal").text("Chongyun")
    $("#img_modal").attr("src","../Assets/chongyun_modal.png");
    $("#story_modal").text("An exorcist who roams the land with Liyue as his base of operations, evil spirits fleeing wherever he goes. As the heir to a clan of exorcists, he has always possessed abilities superior to most. However, these abilities are not the result of training, but of an inborn trait - a pure yang spirit.");
});

$('.xiao_modal').click(function() {  
    modalBg.classList.add('bg-active');
    document.getElementById("modal").style.backgroundImage = "url('../assets/dark_modal_background.jpg')";
    $("#name_modal").text("Xiao")
    $("#img_modal").attr("src","../Assets/xiao_modal.png");
    $("#story_modal").text("One of the mighty and illuminated adepti guarding Liyue, also heralded as the \"Vigilant Yaksha.\"Despite his youthful appearance, tales of his exploits have been documented for millennia.He is especially fond of Wangshu Inn's Almond Tofu.This is because it tastes just like the sweet dreams he used to devour.");
});

$('.beldou_modal').click(function() {  
    modalBg.classList.add('bg-active');
    document.getElementById("modal").style.backgroundImage = "url('../assets/dark_modal_background.jpg')";
    $("#name_modal").text("Beldou")
    $("#img_modal").attr("src","../Assets/beldou_modal.png");
    $("#story_modal").text("Captain of the Crux, with quite the reputation in Liyue. There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her. For those not from Liyue, it may sound like a hearty joke, but those that have sailed with her will say—\"No matter what sea beasts there may be, Beidou will be sure to split them all in two.\"");
});

$('.diluc_modal').click(function() {  
    modalBg.classList.add('bg-active');
    document.getElementById("modal").style.backgroundImage = "url('../assets/dark_modal_background.jpg')";
    $("#name_modal").text("Diluc")
    $("#img_modal").attr("src","../Assets/diluc_modal.png");
    $("#story_modal").text("As the wealthiest gentleman in Mondstadt, the ever-dapper Diluc always presents himself as the epitome of perfection. But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all who threaten his city.");
});

$('.fischl_modal').click(function() {  
    modalBg.classList.add('bg-active');
    document.getElementById("modal").style.backgroundImage = "url('../assets/dark_modal_background.jpg')";
    $("#name_modal").text("Fischl")
    $("#img_modal").attr("src","../Assets/fischl_modal.png");
    $("#story_modal").text("A mysterious girl who calls herself \"Prinzessin der Verurteilung\" and travels with a night raven named Oz. Currently serves as an investigator in the Adventurers' Guild. Through her unique abilities, eccentric character, and (while she would never admit it herself) hard work, Fischl has become a rising star among the Adventurers' Guild's investigators, earning the recognition of all.");
});

$('.mona_modal').click(function() {  
    modalBg.classList.add('bg-active');
    document.getElementById("modal").style.backgroundImage = "url('../assets/dark_modal_background.jpg')";
    $("#name_modal").text("Mona")
    $("#img_modal").attr("src","../Assets/mona_modal.png");
    $("#story_modal").text("A mysterious young astrologer who proclaims herself to be \"Astrologist Mona Megistus,\" and who possesses abilities to match the title. Erudite, but prideful. Though she is often strapped for cash and lives a life of thrift, she is resolved to never use astrology for profit... It is this very resolution that has caused her to constantly fret about money.");
});

window.onclick = function(event) {
    if (event.target == modalBg) {
        modalBg.classList.remove('bg-active');
    }
}

$("#close_modal_btn").click (function(){
    modalBg.classList.remove('bg-active');
});

function mediaScreen(x) {
    if (x.matches) { 
        if(isLight){
            $("#light").appendTo($("#content_hidden"));
            $("#light_responsive_container").appendTo($("#characters_icon")); 
            $("#dark").appendTo($("#content_hidden"));
            $("#dark_responsive_container").appendTo($("#content_hidden"));  
        } else {
            $("#dark").appendTo($("#content_hidden"));
            $("#dark_responsive_container").appendTo($("#characters_icon")); 
            $("#light").appendTo($("#content_hidden"));
            $("#light_responsive_container").appendTo($("#content_hidden"));
        }
      
    } else {
        if(isLight){
            $("#light").appendTo($("#characters_icon")); 
            $("#light_responsive_container").appendTo($("#content_hidden"));
             
        } else {
            $("#dark_responsive_container").appendTo($("#content_hidden"));
            $("#dark").appendTo($("#characters_icon"));
        }
    }
}
  
  var x = window.matchMedia("(max-width: 800px)")
  mediaScreen(x) 
  x.addListener(mediaScreen) 



var lightSlider = $(".char_light_slider")
lightSlider.each(function(){
    $(this).hide()
});

var indexLight = 0;
$(lightSlider[indexLight]).show();

$("#next_light").click(function(){
    $(lightSlider[indexLight]).hide();
    if(indexLight + 1 >= lightSlider.length){
        indexLight = 0;
    } else {
        indexLight++
    }
    $(lightSlider[indexLight]).show();
})

$("#prev_light").click(function(){
    $(lightSlider[indexLight]).hide();
    if(indexLight - 1 < 0){
        indexLight = lightSlider.length-1;
    } else {
        indexLight--
    }
    $(lightSlider[indexLight]).show();
})

var darkSlider = $(".char_dark_slider")
darkSlider.each(function(){
    $(this).hide()
});

var indexDark = 0;
$(darkSlider[indexDark]).show();

$("#next_dark").click(function(){
    $(darkSlider[indexDark]).hide();
    if(indexDark + 1 >= darkSlider.length){
        indexDark = 0;
    } else {
        indexDark++
    }
    $(darkSlider[indexDark]).show();
})

$("#prev_dark").click(function(){
    $(darkSlider[indexDark]).hide();
    if(indexDark - 1 < 0){
        indexDark = darkSlider.length-1;
    } else {
        indexDark--
    }
    $(darkSlider[indexDark]).show();
})

function checkCategory(){
    if(isLight){
        $("#light_button").css("background-color", "rgba(250,250,250,0.8)");
        $("#dark_button").css("background-color", "rgba(250,250,250,0.2)");
    } else {
        $("#dark_button").css("background-color", "rgba(250,250,250,0.8)");
        $("#light_button").css("background-color", "rgba(250,250,250,0.2)");
    }
}

/* Characters End */