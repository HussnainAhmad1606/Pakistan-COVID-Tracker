fetch("https://api.covid19api.com/summary")
  .then((response) => {
    // console.log(response)
    return response.json();
  })
  .then((data) => {
    let updatesBtn = document.querySelector("#updatesBtn");
    updatesBtn.addEventListener("click", showUpdates);

    function showUpdates() {

setTimeout(() => {
	document.querySelector("#data").innerHTML = `<center> 
	<button style='margin-top: 40vh' class="btn btn-primary" type="button" disabled>
			Please Wait... 
			<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
		  </button>
		  </center>`;
}, 1000);

setTimeout(() => {
	document.querySelector("#error").innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>DONE!</strong> You can see the COVID-19 Details Below
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`;



	console.log(data.Countries[129]);
	  console.log(data.Countries[129].length)

      let country = data.Countries[129].Country;
      let newCases = data.Countries[129].NewConfirmed;
      let newDeaths = data.Countries[129].NewDeaths;
	  let newRecovered = data.Countries[129].NewRecovered;
	  let totalConfirmCases = data.Countries[129].TotalConfirmed;
	  let totalDeaths = data.Countries[129].TotalDeaths; 
	  let totalRecovered = data.Countries[129].TotalRecovered; 




      let dateObj = data.Countries[129].Date;
      let date = dateObj.slice(0, 10);
      let year = date.slice(0, 4);
      let month = date.slice(5, 7);
      let originalDate = date.slice(8, 10);

      let time = dateObj.slice(11, 19);
      let fullDate = originalDate + "-" + month + "-" + year;
      let dataDiv = document.querySelector("#data");


	dataDiv.innerHTML =  `<div class="jumbotron my-3">
          <h2 class="display-4">Corona Virus Update: </h2>
          <p class="lead">
		<b class="display-5">Update On:</b> ${fullDate} at ${time}<br>
        <b class="display-5">Country:</b> ${country}<br>
		<b class="display-5">New Cases:</b> ${newCases}<br>
		<b class="display-5">New Deaths:</b> ${newDeaths}<br>
		<b class="display-5">New Recovered:</b> ${newRecovered}<br>
		<b class="display-5">Confirm Cases:</b> ${totalConfirmCases}<br>
		<b class="display-5">Total Deaths:</b> ${totalDeaths}<br>
		<b class="display-5">Total Recovered:</b> ${totalRecovered}<br>
          </p>
        </div>`;
}, 3000);
	  
    }
  })
  .catch((error) => {
    if(error='TypeError: NetworkError when attempting to fetch resource.'){
    	document.querySelector("#error").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>ERROR!</strong> You are not Connected to the Internet
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`;
    }
  });
