console.log("XXX");
//d81e79207fee41e9a862b96b92e82e21  https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d81e79207fee41e9a862b96b92e82e21
//https://gnews.io/api/v4/top-headlines?lang=mr&country=in&token=5b35849eaced6edb9927432501cf4499 ***marathi news api***
let newsAccordion = document.getElementById('newsAccordion');
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?lang=mr&country=in&token=5b35849eaced6edb9927432501cf4499`, true);


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]} ${element["name"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

//https://gnews.io/api/v4/top-headlines?lang=mr&country=in&max=1&token=5b35849eaced6edb9927432501cf4499