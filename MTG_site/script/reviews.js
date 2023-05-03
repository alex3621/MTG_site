var reviewList = window.reviews;

{/* <div class="card border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

var container = document.querySelector(".container1");

loadReview();

function loadReview()
{
    for (var i=0;i<reviewList.length;i++)
    {
        var outerclass=document.createElement("div");
        var header = document.createElement('div');
        var innerclass=document.createElement('div');
        var cardName=document.createElement('h5');
        var cardReview=document.createElement("p");
        var time = document.createElement('time');
        var stars = document.createElement("p");
        header.className="card-header";
        outerclass.className="card text-white bg-dark card-wrap";
        time.innerHTML="Date: " + reviewList[i].date; 
        header.appendChild(time);
        innerclass.className="card-body";
        cardName.className="card-title";
        cardName.innerHTML="Name: " + reviewList[i].name;
        cardReview.className="card-text";
        cardReview.innerHTML=reviewList[i].text;
        stars.className="stars";
        for(var t=0;t<reviewList[i].rating;t++)
        {
            stars.innerHTML+= "⭐";
        }
        innerclass.appendChild(cardName);
        innerclass.appendChild(cardReview);
        innerclass.appendChild(stars);
        outerclass.appendChild(header);
        outerclass.appendChild(innerclass);   
        container.appendChild(outerclass);
    }

}

var form = document.getElementById('review_form');

form.addEventListener('submit', (e)=>{
    var errormsg = document.getElementById('error');
    var formname= document.getElementById('form_name').value.trim();
    var rating= document.getElementById('form_rating').value.trim();
    var review= document.getElementById('form_review').value.trim();
     e.preventDefault();
    if(formname.length>0 && review.length>0)
    {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear(); 
        submission_date= year +','+month+','+day;   
        var newObject = {};
        newObject.name=formname;
        newObject.rating=rating;
        newObject.date=submission_date;
        newObject.text=review;
        reviewList.push(newObject);
        document.querySelector('.container1').innerHTML='';
        loadReview();
        document.getElementById('review_form').reset();
        return true;
    }else{
        errormsg.innerHTML="please fill out the form properly!";
        return false;
    }
})

