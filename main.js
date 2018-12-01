$(document).ready(function() {
	// Transition effect for navbar
	$(window).scroll(function() {
		// checks if window is scrolled more than an amount of px, adds/removes solid class
		if ($(this).scrollTop() > 600) {
			$('.nav').addClass('solid');
		} else {
			$('.nav').removeClass('solid');
		}
	});
});

//greeting text
$(document).ready(function() {
	// typing animation
	(function($) {
		$.fn.writeText = function(content) {
			var contentArray = content.split(''),
				current = 0,
				elem = this;
			setInterval(function() {
				if (current < contentArray.length) {
					elem.text(elem.text() + contentArray[current++]);
				}
			}, 80);
		};
	})(jQuery);

	// input text for typing animation
	$('#holder').writeText('WEB DESIGNER + FRONT-END DEVELOPER');
});

//CANVAS
/* ---- particles.js config ---- */

/* ---- particles.js config ---- */

particlesJS('particles-js', {
	particles     : {
		number      : {
			value   : 130,
			density : {
				enable     : true,
				value_area : 800
			}
		},
		color       : {
			value : '#ffffff'
		},
		shape       : {
			type    : 'circle',
			stroke  : {
				width : 0,
				color : '#000000'
			},
			polygon : {
				nb_sides : 5
			}
		},
		opacity     : {
			value  : 0.5,
			random : false,
			anim   : {
				enable      : false,
				speed       : 1,
				opacity_min : 0.1,
				sync        : false
			}
		},
		size        : {
			value  : 3,
			random : true,
			anim   : {
				enable   : false,
				speed    : 40,
				size_min : 0.1,
				sync     : false
			}
		},
		line_linked : {
			enable   : true,
			distance : 150,
			color    : '#ffffff',
			opacity  : 0.4,
			width    : 1
		},
		move        : {
			enable    : true,
			speed     : 6,
			direction : 'none',
			random    : false,
			straight  : false,
			out_mode  : 'out',
			bounce    : false,
			attract   : {
				enable  : false,
				rotateX : 600,
				rotateY : 1200
			}
		}
	},
	interactivity : {
		detect_on : 'canvas',
		events    : {
			onhover : {
				enable : true,
				mode   : 'grab'
			},
			onclick : {
				enable : true,
				mode   : 'push'
			},
			resize  : true
		},
		modes     : {
			grab    : {
				distance    : 140,
				line_linked : {
					opacity : 1
				}
			},
			bubble  : {
				distance : 400,
				size     : 40,
				duration : 2,
				opacity  : 8,
				speed    : 3
			},
			repulse : {
				distance : 200,
				duration : 0.4
			},
			push    : {
				particles_nb : 4
			},
			remove  : {
				particles_nb : 2
			}
		}
	},
	retina_detect : true
});

//contact form

// Initialize Firebase
var config = {
	apiKey            : 'AIzaSyDhwBY3FXtMQYTkqY4YulB1kvio92WArGY',
	authDomain        : 'portfolio-contact-ee267.firebaseapp.com',
	databaseURL       : 'https://portfolio-contact-ee267.firebaseio.com',
	projectId         : 'portfolio-contact-ee267',
	storageBucket     : 'portfolio-contact-ee267.appspot.com',
	messagingSenderId : '672292324054'
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
	e.preventDefault();

	//Get value
	var name = getInputVal('name');
	var email = getInputVal('email');
	var message = getInputVal('message');

	// Save message
	saveMessage(name, email, message);

	// Show alert
	document.querySelector('.alert').style.display = 'block';

	// Hide alert after 3 seconds
	setTimeout(function() {
		document.querySelector('.alert').style.display = 'none';
	}, 3000);

	// Clear form
	document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id) {
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name    : name,
		email   : email,
		message : message
	});
}