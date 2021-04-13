let contentGrid = document.getElementById("contentGrid");

let jsonDatabase = [
  {
    title: "The Originals",
    description:
      "centers on three of the original vampire siblings. over time, new and old friendships are formed, love is in the air, death surrounds them, and the originals learn more about their own family past.",
    genre: "horror, supernatural",
    // "basedOff": ,
    status: "completed",
    seasons: "5",
    imdb: "8.6/10",
    color: "#eae4e9",
    image: "https://upload.wikimedia.org/wikipedia/en/b/ba/TO_cast.jpeg"
  },

  {
    title: "One Tree Hill",
    description:
      "set in the fictional town of Tree Hill in North Carolina and initially follows the lives of two half-brothers and the drama that ensues from the brothers' and their friends' lives.",
    genre: "romance, drama",
    // "basedOff": ,
    status: "completed",
    seasons: "9",
    imdb: "7.7/10",
    color: "#fff1e6",
    image:
      "https://img4.hulu.com/user/v3/artwork/0fbd443f-25a6-4053-8dcb-a512e175583e?base_image_bucket_name=image_manager&base_image=816f9d51-9984-49e4-a250-35fc79729b1f&size=1200x630&format=jpeg"
  },

  {
    title: "Imposters",
    description:
      "follows con artist Maddie, who gets involved in relationships with men and women before leaving them used and robbed of everything – including their hearts.",
    genre: "dark comedy",
    // "basedOff": ,
    status: "completed",
    seasons: "2",
    imdb: "7.8/10",
    color: "#fde2e4",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/A1XUpilOvsL._RI_.jpg"
  },

  {
    title: "Being Human",
    description:
      "a vampire and werewolf move into a new house together to try and live normal lives. they didn't however know that they would end up with a third supernatural roommate as well.",
    genre: "drama, supernatural",
    // "basedOff": ,
    status: "completed",
    seasons: "4",
    imdb: "7.8/10",
    color: "#fad2e1",
    image:
      "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABeRfgqAq4igl7vUtE81Sst14idxgEB2R0prNMyZSyIUq_q-YPNgJQK8sR18d23OmRLdowmOhyGQny4mvr8liWCzCyzWZyurQ35uP9QzwtDOOtT9waxGDgqeiRJpeOr0uSNWJqmPtqNE.jpg"
  },

  {
    title: "Shameless",
    description:
      "the story of a family of six kids who need to steal food and steal money to live while their father takes everything and offers nothing...meet the dysfunctional Gallagher family.",
    genre: "comedy-drama",
    // "basedOff": ,
    status: "ongoing",
    seasons: "11",
    imdb: "8.6/10",
    color: "#e2ece9",
    image:
      "https://www.tvinsider.com/wp-content/uploads/2021/04/shameless-cast-season-10-gallery-1014x570.jpg"
  },

  {
    title: "Merli",
    description:
      "focuses on the lives of a philosophy professor, Merli, in Barcelona and the students in his class which funnily include his own teenage son and the drama that surrounds them.",
    genre: "drama, comedy-drama",
    // "basedOff": ,
    status: "completed",
    seasons: "3",
    imdb: "8.6/10",
    color: "#bee1e6",
    image:
      "https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcuupCl89uWN8FFU9Cwpb2kiPakAfCvsBmxGtfYTLDmqts_vBqNHsV78cSQLvrdD8BjRLStehryUx-nd6hJLco4pweeM.jpg?r=6b1"
  },

  {
    title: "How to Get Away with Murder",
    description:
      "a legal thriller about a group of ambitious law students and their mysterious criminal defense professor.",
    genre: "thriller, crime, legal drama, mystery",
    // "basedOff": ,
    status: "completed",
    seasons: "6",
    imdb: "8.1/10",
    color: "#f0efeb",
    image:
      "https://variety.com/wp-content/uploads/2015/09/how-to-get-away-with-murder-season-2.jpg?w=681&h=383&crop=1"
  },

  {
    title: "21 Thunder",
    description:
      "the story of the Montreal Thunder U21 team, following star players on and off the field and how the coaches unite as family in the whirlwind of life, one step away from the pros.",
    genre: "sports, drama",
    // "basedOff": ,
    status: "completed",
    seasons: "1",
    imdb: "6.2/10",
    color: "#dfe7fd",
    image: "https://i.ytimg.com/vi/A-E6lwUFiQI/maxresdefault.jpg"
  },

  {
    title: "Sex Education",
    description:
      "A teenage boy with a sex therapist mother teams up with his high school classmates to set up an underground sex therapy clinic at school using what he thinks he's learned.",
    genre: "comedy-drama",
    // "basedOff": ,
    status: "ongoing",
    seasons: "2",
    imdb: "8.3/10",
    color: "#cddafd",
    link: "https://www.facebook.com",
    image:
      "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0NDg3OTIzMDY2OTM4NzI4/shows-like-sex-education.jpg"
  }
];

function createElement(incomingJSON) {
  //create box
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add("item");
  newContentElement.style.background = incomingJSON["color"];

  //title of show
  let newContentTitle = document.createElement("H3");
  newContentTitle.innerText = incomingJSON["title"];
  newContentElement.appendChild(newContentTitle);

  //container for details
  let newContentDetails = document.createElement("DIV");
  newContentDetails.classList.add("details");

  //description
  let newContentDescription = document.createElement("P");
  newContentDescription.innerText = "About: " + incomingJSON["description"];
  newContentElement.appendChild(newContentDescription);

  //genre
  let newContentGenre = document.createElement("H4");
  newContentGenre.innerText = "Genre: " + incomingJSON["genre"];
  newContentDetails.appendChild(newContentGenre);

  //status of show
  let newContentStatus= document.createElement("H4");
  newContentStatus.innerText = "Status: " + incomingJSON["status"];
  newContentDetails.appendChild(newContentStatus);

  //imdb rating
  let newContentRating = document.createElement("H4");
  newContentRating.innerText = "Rating: " + incomingJSON["imdb"];
  newContentDetails.appendChild(newContentRating);

  //add each item
  newContentElement.appendChild(newContentDetails);

  //picture of show
  let newContentImage = document.createElement("IMG");
  newContentImage.src = incomingJSON["image"];
  newContentElement.appendChild(newContentImage);
  let link=incomingJSON["link"];
  newContentImage.onclick="location.href=link;"

  contentGrid.appendChild(newContentElement);
}

//iterate through all show items
for (var i = 0; i < 9; i++) {
  createElement(jsonDatabase[i]);
}
