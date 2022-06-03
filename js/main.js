

var submit = document.querySelector('.submit');

var rating_state = document.querySelector('.rating-state');

var thank_state = document.querySelector('.thank-you-state');

var rate_steps = document.querySelectorAll('.rate-step');  

var rate_value = document.querySelector('.user-rate-value');

var user_rate = 0;

async function submit_func() {
	rating_state.style.display = 'none';
	thank_state.style.display = 'flex'
}

async function step_func(){

	var active = document.querySelectorAll('.rating-row .active');

	for (var i = 0; i < active.length; i++) {
		active[i].classList.remove('active');
	}

	if (this) {
		this.classList.add('active');
		user_rate = this.innerText;
		rate_value.innerText = user_rate;
	}else{return}

	for (var i = 0; i < rate_steps.length; i++) {
		if (parseInt(rate_steps[i].innerText) < parseInt(this.innerText)) {
			rate_steps[i].classList.add('active');
		}
	}
}
submit.addEventListener('click', submit_func);

for (var i = 0; i < rate_steps.length; i++) {

	rate_steps[i].addEventListener('click', step_func);
}

for (var i = 0; i < rate_steps.length; i++) {

	rate_steps[i].addEventListener('mouseenter', function (){

	var active = document.querySelectorAll('.rating-row .active-primary');

	for (var i = 0; i < active.length; i++) {
		
			active[i].classList.remove('active-primary');
		}

	this.addEventListener('mouseout', function (){

		for (var i = 0; i < active.length; i++) {
		
			active[i].classList.remove('active-primary');
		}
	});

	if (this) {
		this.classList.add('active-primary');
	}

	for (var i = 0; i < rate_steps.length; i++) {
	
		if (parseInt(rate_steps[i].innerText) < parseInt(this.innerText)) {
			rate_steps[i].classList.add('active-primary');
		}
	}
});
}