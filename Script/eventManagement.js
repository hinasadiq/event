


var rowNumber = 1, indexNumber = 0;
var eventId;
showEventCard();

function showEventCard() {

    for (i = indexNumber; i < Events.length; i++) {

        if (rowNumber <= 4) {

            eventId = Events[i].id;

            singleEventCard(eventId);

            rowNumber += 1;
            indexNumber = i;
        }

    }

    indexNumber += 1;
    
    
}


function viewMore() {

    showEventCard();
    rowNumber = 1;
}


function singleEventCard(eventId) {

    Events.map((item) => {

        if (item.id == eventId) { 
            let eventCardDiv = document.getElementById('eventCardDiv');

            let newDivCard = document.createElement('div');

            newDivCard.innerHTML = `
                    <div class="row mt-5">
                        <div class="col-lg-5 col-md-12 p-0">
                            <img src="${item.thumbnail}" width="100%">
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div>
                                <h6>${item.category}</h6>
                                <h6>Sponsored : ${item.sponsors[0].name}</h6>
                            </div>
                            <h2>${item.eventName}</h2>
                            <div>
                                <p>🗓 ${item.date.split('T')[0]}</p>
                                <p>${item.location.city}</p>
                            </div>
                            <button>View Details</button>
                        </div>
                    </div>
        `;

            eventCardDiv.appendChild(newDivCard);

        }

    })
}

caurosalItems()
function caurosalItems() {


    Events.sort((b, a) => new Date(b.date) - new Date(a.date));

    let caurosalDiv = document.getElementById('caurosalDiv');


    for (i = 0; i < 6; i++) {

        let caurosalSingleDiv = document.createElement('div');
        caurosalSingleDiv.className = 'item';
        caurosalSingleDiv.style.backgroundImage = `url(${Events[i].imgUrls[1]})`;
        caurosalSingleDiv.style.backgroundPosition = 'center';
        caurosalSingleDiv.style.backgroundSize = 'cover';

        caurosalSingleDiv.innerHTML = `<div>
                                <h3>Upcoming...</h3>
                                <h3>${Events[i].eventName}</h3>
                                <h6>${Events[i].date.split('T')[0]}</h6>
                                <h6>${Events[i].location.city}</h6>
                                <button>Details</button>
                            </div>`;

        caurosalDiv.appendChild(caurosalSingleDiv);

    }


}