function Scroll() {
	this.aDiv = document.querySelectorAll(".part");
	this.aLi = document.querySelectorAll(".btnBox>li");
	this.oToTop = document.getElementById("toTop");
	//可视区域的高度
	this.clientHeight = window.innerHeight || document.documentElement.clientHeight;
	//一个div的高度
	this.flDivHeight = this.aDiv[0].offsetHeight;
	this.addEvent();
}

Scroll.prototype.addEvent = function() {
	var that = this;
	window.onscroll = function() {
		//滚上去的高度
		var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		//中线的高度
		var midLine = _scrollTop + that.clientHeight / 2;
		for(var i = 0; i < that.aDiv.length; i++) {
			if(midLine > that.aDiv[i].offsetTop && midLine < that.aDiv[i].offsetTop + that.flDivHeight) {
				that.aLi[i].style.border = "5px solid green";
			} else {
				that.aLi[i].style.border = "none";
			}
		}

	}
	for(var i = 0; i < that.aDiv.length; i++) {
		that.aLi[i].index = i;
		that.aLi[i].onclick = function() {
			document.documentElement.scrollTop = this.index * that.flDivHeight + that.aDiv[0].offsetTop;
			document.body.scrollTop = this.index * that.flDivHeight + that.aDiv[0].offsetTop;
		}
	}
	this.oToTop.onclick = function() {
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}
}