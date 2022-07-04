$(function() {
	$('a').attr('target', '_blank')
	$('#ping').attr('target', '_self')

})

window.onload = function() {

	var now = new Date();
	var year = now.getFullYear();
	var mounth = now.getMonth() + 1;
	var day = now.getDate();

	var years = document.getElementById('year');
	var mounths = document.getElementById('mounth');
	var days = document.getElementById('day');

	years.innerText = year;
	if(mounth < 10) {
		mounths.innerText = '0' + mounth;
	} else {
		mounths.innerText = mounth;
	}

	if(day < 10) {
		days.innerText = '0' + day;
	} else {
		days.innerText = day;
	}

	var canvas = document.getElementById('canvas');
	var cxt = canvas.getContext('2d');
	//画布
	canvas.width = 158;
	canvas.height = 158;

	var r = canvas.width / 2;
	var rem = canvas.width / 150;

	function draw() {
		cxt.save();
		cxt.translate(r, r);
		cxt.strokeStyle = '#c18a49';
		cxt.lineWidth = 3;
		cxt.beginPath();
		//表盘
		cxt.arc(0, 0, r - 10 / 2, 0, 2 * Math.PI, false);
		cxt.stroke();
		//时间数字
		var hourNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
		cxt.font = 18 + 'px Arial';
		cxt.textAlign = 'center';
		cxt.textBaseline = 'middle';
		/*hourNumber.forEach(function (number,i) {
		    var rad = 2 *Math.PI/12 * i;
		    var x = Math.cos(rad) * (r - 30*rem);
		    var y = Math.sin(rad) * (r - 30*rem);
		    cxt.fillText(number,x,y);
		});*/
		//时间点
		for(var i = 0; i < 60; i++) {
			var rad = 2 * Math.PI / 60 * i;

			var x = Math.cos(rad) * (r - 10);
			var y = Math.sin(rad) * (r - 10);
			cxt.beginPath();
			if(i % 5 === 0) {
				cxt.fillStyle = '#c18a49';

				cxt.arc(x, y, 2, 0, 2 * Math.PI, false);
			} else {
				/* cxt.fillStyle = '#ccc';
				 cxt.arc(x,y,2,0,2*Math.PI,false);*/
			}
			cxt.fill();
		}
	}
	//时针
	function drawHour(hour, minute) {
		cxt.save();
		cxt.beginPath();
		cxt.lineWidth = 4;
		cxt.lineCap = 'round';
		var rad = 2 * Math.PI / 12 * hour;
		var mrad = 2 * Math.PI / 12 / 60 * minute;
		cxt.rotate(rad + mrad);
		cxt.moveTo(0, 10);
		cxt.lineTo(0, -r / 2);
		cxt.stroke();
		cxt.restore();
	}
	//分针
	function drawMinute(minute) {
		cxt.save();
		cxt.beginPath();
		cxt.lineWidth = 3;
		cxt.lineCap = 'round';
		var rad = 2 * Math.PI / 60 * minute;
		cxt.rotate(rad);
		cxt.moveTo(0, 15);
		cxt.lineTo(0, -r + 20);
		cxt.stroke();
		cxt.restore();
	}
	//秒针
	function drawSecond(second) {
		cxt.save();
		cxt.beginPath();
		cxt.lineWidth = 3;
		cxt.fillStyle = 'red';
		cxt.lineCap = 'round';
		var rad = 2 * Math.PI / 60 * second;
		cxt.rotate(rad);
		cxt.moveTo(-2, 15);
		cxt.lineTo(2, 15);
		cxt.lineTo(1, -r + 15);
		cxt.lineTo(-1, -r + 15);
		cxt.fill();
		cxt.restore();
	}
	//中心点
	function drawDot() {
		cxt.beginPath();
		cxt.fillStyle = '#fff';
		cxt.arc(0, 0, 3, 0, 2 * Math.PI, false);
		cxt.fill();
	}

	function draw2() {
		cxt.clearRect(0, 0, canvas.width, canvas.height);
		var now = new Date();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		draw();
		drawHour(hour, minute);
		drawMinute(minute);
		drawSecond(second);
		drawDot();
		cxt.restore();
	}
	//
	setInterval(draw2, 500);

}