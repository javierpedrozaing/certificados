/*global jQuery, $, ga, dataLayer, FastClick*/
'use strict';

var isMobile = function() {
	return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));
};
var getScrollTop = function() {
	return $('html').scrollTop() || $('body').scrollTop() || $(window).scrollTop();
};
var getOffset = function(elem) {
	return elem instanceof jQuery ? elem[0].getBoundingClientRect() : elem.getBoundingClientRect();
};

$('document').ready(function() {
	
});

var app = {
	device: {
		isMobile: navigator.userAgent.match(/Android/i)
			|| navigator.userAgent.match(/webOS/i)
			|| navigator.userAgent.match(/iPhone/i)
			|| navigator.userAgent.match(/iPad/i)
			|| navigator.userAgent.match(/iPod/i)
			|| navigator.userAgent.match(/BlackBerry/i)
			|| navigator.userAgent.match(/Windows Phone/i)
	},
	utils: {
		getScrollTop: function() {
			return $('html').scrollTop() || $('body').scrollTop() || $(window).scrollTop();
		},
		getOffset: function(elem) {
			console.log(elem);
			return elem instanceof jQuery ? elem[0].getBoundingClientRect() : elem.getBoundingClientRect();
		}
	},
	layout: {
		init: function() {

		}
	},
	calculate: function(options) {
		options = options || {};
		var self = this;
		this.$elem = $('.calculate');
		this.$numbers = this.$elem.find('.numbers');
		this.$arrows = this.$elem.find('.arrows');
		this.$progressBar = this.$elem.find('.progress .bar');
		this.$form = this.$elem.find('form');
		this.$questions = this.$elem.find('.questions');
		this.$questionsList = this.$questions.children();
		this.$price = $('header .price span');
		this.priceAnimation = null;
		this.lastPrice = 0;
		this.price = 0;
		
		this.type = options.type || {};
		this.questions = options.questions || [];
		this.tracking = options.tracking || false;
		this.preview = options.preview || null;
		
		this.trackingUrl = options.trackingUrl || '';
		this.trackingQueue = [];
		this._tracking = false;
		
		this.active = options.active || 1;
		this.total = this.$questionsList.length;
		this.scrollY = 0;
		this.lastTouches = [];
		
		Object.defineProperties(this, {
			'$active': {
				get: function() {
					return this.$questionsList.eq(this.active-1);
				}
			}
		});
		
		this.setup = function() {
			//bind events
			this.$form.find('input').on('input change', function() {
				if ($(this).attr('type') !== 'text') {
					self.validateOption($(this).parents('.option'));
					//self.updatePrice();
				} else {
					self.validateInput($(this));
				}
			}).filter('[type="text"]').trigger('change');
			
			/*this.$form.find("input[type=\"radio\"]").click(function() {
				if (!$(this).parents(".options-radio").length) {
					return;
				}
				
				if ($(this).data("checked")) {
					$(this).prop("checked", false);
				} else {
					$(this).data("checked", false);
				}

				$(this).data("checked", $(this).prop("checked"));
				
				self.validateOption($(this).parents('.option'));
			});*/
			
			this.$questions.find('.next a').click(function() {
				self.go(1);
				
				return false;
			});
			
			this.$arrows.find('.prev,.next').click(function() {
				self.go($(this).hasClass('prev') ? -1 : 1);
				
				return false;
			});
			
			this.$questionsList.eq(-1).find('.next a span').text('Submit');
			
			//bind keys
			$(document).on('keydown', function(e) {
				self.handleKey(e, e.keyCode);
			})
			
			.on("touchstart", function(event) {
				self.lastTouches = event.originalEvent.touches[0];
			});
			
			$(window).on('resize', function() {
				self.updateTooltips();
			});
			
			this.updateTooltips();
			
			if (this.preview) {
				this.$questions.addClass('preview');
				
				var i;
				
				for (i = 0; i < this.preview.questions.length; i++) {
					this.$questionsList.filter('[data-id="' + this.preview.questions[i] + '"]').addClass('seen');
				}
				for (i = 0; i < this.preview.options.length; i++) {
					this.$questions.find('.option[data-id="' + this.preview.options[i] + '"] input').attr('checked', true).change();
				}
				
				this.$form.find('.option').addClass('disabled');
				this.$form.find('input').attr('disabled', true);
				
				this.$questionsList.eq(-1).find('.next').hide();
			}
		};
		
		//reload
		this.updateUI = function() {
			this.$numbers.find('.total').text(this.total);
			this.$progressBar.find('.tooltip .total').text(this.total);
			
			this.updateState();
		};
		
		this.updateState = function() {
			this.$numbers.find('.current').text(this.active);
			this.$progressBar.find('.tooltip .current').text(this.active);
			
			this.$questionsList.removeClass('active');
			this.$active.addClass('active').removeClass('previous')
			.prevAll().addClass('previous');
			this.$active.nextAll().removeClass('previous');
			
			var activeTop = app.utils.getOffset(this.$active).top;
			var formTop = app.utils.getOffset(this.$form).top;
			
			this.scrollY = Math.abs(app.utils.getOffset(this.$questions).top - activeTop);
			
			var transform = 'translate3d(0, -' + this.scrollY + 'px, 0)';
			
			this.$questions.css({
				transform: transform,
				'-webkit-transform': transform
			});
			
			this.$progressBar.css({
				width: (this.active / this.total * 100) + '%'
			});
			
			this.$progressBar[(this.active / this.total * window.innerHeight) > (window.innerHeight-50) ? 'addClass' : 'removeClass']('at-end');
			
			this.validateQuestion(this.$active);
			
			this.track('open', this.$active.attr('data-id'));
			ga('send', 'event', 'Questions', 'open', this.$active.find('h2').text());
			
			dataLayer.push({
				"event": "question" + this.active
			});
		};
		
		this.validateOption = function($optionCurrent) {
			$optionCurrent.parent().children().each(function() {
				var $option = $(this);
				
				var filled = $option.find('input:checked').length ? true : false;
			
				$option[filled ? 'addClass' : 'removeClass']('filled');
			});
			
			this.validateQuestion($optionCurrent.parents('.question'));
			
			this.track('answer', $optionCurrent.parents('.question').attr('data-id'), $optionCurrent);
			ga('send', 'event', 'Questions', 'answer', $optionCurrent.find('.name').text());
			
			dataLayer.push({
				"event": "ec.checkout",
				"ecommerce": {
					"checkout": {
						"actionField": {
							"step": this.active,
							"option": $optionCurrent.find('.name').text()
						},
						"products": [{
							"name": this.type.label
						}]
					}
				}
			});
		};
		
		this.validateInput = function($input) {
			var filled = $input.val().trim() ? true : false;
			
			if ($input.attr('data-filter') === 'email') {
				filled = $input.val().match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/);
			}
			
			$input[filled ? 'addClass' : 'removeClass']('filled');
			
			this.validateQuestion($input.parents('.question'));
		};
		
		this.validateQuestion = function($question) {
			var completed = $question.find('input:checked,input.filled').length ? true : false;
			var required = $question.hasClass('required');
			
			// $question[completed ? 'addClass' : 'removeClass']('filled');
			$question[$question.next().length ? (completed ? "addClass" : "removeClass") : "addClass"]("filled");
			$question[!required || completed ? 'addClass' : 'removeClass']('completed');
			
			if (!required) {
				// $question.find('.next a span').text(completed ? ($question.next().length ? 'Next question' : 'Submit') : 'Not required');
				
				$question.find(".next a span").text($question.next().length ? (completed ? "Próxima pregunta" : "No requerido") : "Submit");
			}
			
			this.$arrows.find('.prev')[this.active > 1 ? 'addClass' : 'removeClass']('active')
			.end().find('.next')[this.active < this.total && this.$active.hasClass('completed') ? 'addClass' : 'removeClass']('active');
		};
		
		this.updateTooltips = function() {
			this.$questionsList.find('.option .description').each(function() {
				$(this).css({
					left: $(this).parent().find('label span').width() + 60
				});
			});
		};
		
		this.setTrackingUrl = function(value) {
			this.trackingUrl = value;
		};
		
		this.track = function(type, questionId, $option) {
			if (!this.tracking || !questionId) {
				return;
			}
			
			var action = null;
			
			if ($option) {
				action = 'set';
				
				if ($option.find('input').attr('type') == 'checkbox') {
					action = $option.find('input').is(':checked') ? 'add' : 'remove';
				}
			}
			
			this.trackingQueue.push({
				type: type,
				question: questionId,
				option: $option ? $option.attr('data-id') : null,
				eaction: action
			});
			
			this.trackSend();
		};
		
		this.trackSend = function() {
			if (this._tracking || !this.trackingQueue.length) {
				return;
			}
			
			this._tracking = true;
			var self = this;
			
			var event = this.trackingQueue.shift();
			
			$.ajax({
				type: 'GET',
				url: this.trackingUrl,
				data: event
			}).done(function(payload) {
				self._tracking = false;
				self.trackSend();
			}).fail(function() {
				self._tracking = false;
				self.trackSend();
			});
		};
		
		this.getSection = function(id) {
			return this.sections.filter(function(row) {
				return row.id == id;
			})[0];
		};
		
		this.handleKey = function(e, keyCode) {
			switch (keyCode) {
				case 13:
					e.preventDefault();
					this.go(1);
				break;
				
				case 38:
					e.preventDefault();
					this.go(-1);
				break;
				
				case 40:
					e.preventDefault();
					this.go(1, true);
				break;
				
				case 37:
				case 39:
					e.preventDefault();
				break;
			}
		};
		
		this._lastDelta = 0;
		this._canWheel = true;
		
		
		this.go = function(by, soft) {
			if (by > 0 && !this.$active.hasClass('completed')) {
				return;
			}
			
			var goTo = this.active + by;
			
			if (goTo < 1) {
				return;
			}
			
			if (goTo > this.total) {
				if (!soft && !this.preview) {
					ga('send', 'event', 'Calculation', 'submit', null, this.price);
					
					this.$form.addClass('sending').submit();
				}
				
				return;
			}
			
			this.active = goTo;
			this.updateState();
		};
		
		this.setup();
		this.updateUI();
	},
	estimate: function(id, uid, price, type) {
		var self = this;
		
		this.$elem = $('.estimate');
		this.$send = $('.estimate form');
		this.$modal = $(".estimate-modal");
		this.id = id;
		this.uid = uid;
		this.price = price;
		this.type = type;
		
		this._updatingName = false;
		this._updateNameAfter = false;
		
		this.setup = function() {
			this.$elem.find('textarea').each(function () {
				this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
			}).on('input', function () {
				this.style.height = 'auto';
				this.style.height = (this.scrollHeight) + 'px';
			});
			
			if (this.$elem.find('.project-name').val()) {
				this.$elem.find('.project-name').addClass('filled');
			}
			
			this.$elem.find('.project-name').on('input change', function() {
				if (self._updatingName) {
					self._updateNameAfter = true;
					return;
				}
				
				var val = $(this).val().trim();
				
				$(this)[val ? 'addClass' : 'removeClass']('filled');
				
				if (val === $(this).attr('data-last')) {
					return;
				}
				
				$(this).attr('data-last', val);
				
				self._updatingName = true;
				self._updateNameAfter = false;
				
				$.ajax({
					url: $(this).attr('data-action'),
					type: 'POST',
					data: {
						id: self.id,
						uid: self.uid,
						name: val
					},
					success: function(payload) {
						self._updatingName = false;
						
						if (self._updateNameAfter) {
							self.$elem.find('.project-name').change();
						}
						
						if (payload.status === 'success') {
							window.history.replaceState({}, document.title, payload.url);
						}
					}
				});
			});
			
			this.$send.on('submit', this.onSend.bind(this));
		};
		
		this.onSend = function() {
			if (this.$send.hasClass('sending')) {
				return;
			}
			
			this.$send.addClass('sending');
			this.$send.find('.error').text('');
			
			$.ajax({
				type: "POST",
				url: this.$send.attr('action'),
				data: new FormData(this.$send[0]),
				cache: false,
				contentType: false,
				processData: false,
			}).then(function(payload) {
				self.$send.removeClass('sending');
				
				if (payload.status === 'success') {
					self.$send.addClass('disabled')
					.find('button').text('Request sent');
					
					if (payload.redirect) {
						window.location.href = payload.redirect;
					}
				} else if (payload.status === 'error') {
					if (payload.message) {
						self.$send.find('.error').text(payload.message);
					}
					
					if (payload.errors) {
						for (var i in payload.errors) {
							self.$send.find(':input[name="' + i + '"]')
							.addClass('errorinput')
							.on('input.error change.error', function() {
								$(this).off('input.error change.error').removeClass('errorinput');
							});
						}
					}
				}
			});
			
			return false;
		};
		
		this.modal = function() {
			if (!this.$modal.length) {
				return;
			}
			
			setTimeout(function() {
				$(document.body).addClass("blur-estimate");
				
				self.$modal.addClass("show");
			}, 1000);
			
			this.$modal.on("click", ".mask", function() {
				$(this).parent().addClass("bounce").delay(100).queue(function() {
					$(this).dequeue().removeClass("bounce");
				});
			});
			
			this.$modal.on("submit", "form", function() {
				if (!self.modalValidate()) {
					return false;
				}
				
				ga('send', 'event', 'Estimate Modal', 'submit', null, this.price);
				
				dataLayer.push({
					"ecommerce": {
						"purchase": {
							"actionField": {
								"id": self.uid
							},
							"products": [{
								"name": self.type
							}]
						}
					}
				});
			});
		};
		
		this.modalValidate = function() {
			var hasError = false;
				
			this.$modal.find("form input").each(function() {
				var name = $(this).attr("name"),
					val = $(this).val(),
					error = false;
				
				if (name == "firstname" || name =="lastname") {
					error = val.length <= 2;
				} else if (name == "email") {
					error = !/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(val);
				}
				
				$(this)[error ? "addClass" : "removeClass"]("error");
				
				if (error) {
					hasError = true;
				}
			});
			
			return !hasError;
		};
		
		this.setup();
		this.modal();
	}
};

$(function() {
	app.layout.init();
});

  