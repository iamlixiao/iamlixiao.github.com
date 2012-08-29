var P = new Array(60, 0, 0, 0, 0), Ip = new Array(), N = navigator.appName != 'Microsoft Internet Explorer', Ls = 100, Ln = 60, Ab = new Array(), Ags = new Array(), Btb, Opa = new Array(), Tlm = 0, Tln = 0;
function l() {
	var i, agr = new Array();
	Ab = gC('c2', 'td');
	agr = gC('g2', 'td');
	for (i = 0; i < agr.length; i++)
		if (agr[i].firstChild.tagName == 'A')
			Ags.push(agr[i]);
	var ta = '<div style="background:url(\'../i/g', tb = '.png\');">&nbsp;</div>';
	for (i = 0; i < 3; i++)
		document.getElementById('pld').innerHTML += ta + i + 'h' + tb + ta + i
				+ 'g' + tb;
	setTimeout('document.getElementById("pld").style.visibility="hidden";', 500);
}
function gC(a, b) {
	if (document.getElementsByClassName)
		return document.getElementsByClassName(a);
	else {
		var t = document.getElementsByTagName(b), tc = new Array(), tt, i = 0;
		for (i = 0; i < t.length; i++) {
			if (t[i].className == a)
				tc.push(t[i]);
		}
		return tc;
	}
}
/* Opa的结构：[类型][模式]有效、初始、目标、步进、延迟、数据） */
function Op(a, b, c) {
	if (Opa[a][b][1] < Opa[a][b][2] && Opa[a][b][0] == c) {
		Opa[a][b][1] += Opa[a][b][3];
		if (Opa[a][b][1] > Opa[a][b][2])
			Opa[a][b][1] = Opa[a][b][2];
		setTimeout('tlm(' + Opa[a][b][2] + ')', Opa[a][b][4]);
		// setTimeout('Op("' + a + '","' + b + '")', Opa[a][b][4]);
	} else if (Opa[a][b][1] > Opa[a][b][2] && Opa[a][b][0] == c) {
		Opa[a][b][1] += Opa[a][b][3];
		if (Opa[a][b][1] < Opa[a][b][2])
			Opa[a][b][1] = Opa[a][b][2];
		setTimeout('tlm(' + Opa[a][b][2] + ')', Opa[a][b][4]);
		// setTimeout('Op("' + a + '","' + b + '")', Opa[a][b][4]);
	} else {
		delete Opa[a][b];
		return 0;
	}
	for ( var i = 5; i < Opa[a][b].length; i++)
		if (N) {
			if (b == 'a')
				Opa[a][b][i].style.opacity = Opa[a][b][1] / 100;
			else
				Opa[a][b][i].style.backgroundColor = 'rgba(0,0,0,' + Opa[a][1]
						/ 100 + ')';
		} else {
			Opa[a][b][i].style.filter = 'alpha(opacity=' + Opa[a][b][1] + ')';
		}
}
function opa(a, b, c) {
	/*
	 * var i, k, p; if (Opa[a][1] == b) { k = Opa[a][2]; Opa[a][0] = 0; } else {
	 * k = c; } for (i = 0; i < Opa.length + 1; i++) { if (!Opa[i]) { break; }
	 * else if (!Opa[i][2]) { break; } } Opa[i] = new Array('1', k); p = new
	 * Array(i, k); return p;
	 */
	if (Opa[a] == null)
		return 0;
}
function bgb(a, b) {
	var cm;
	if (a) {
		cm = Ab[a - 1];
		if (N) {
			cm.style.backgroundColor = 'rgba(0,0,0,' + P[a] / 100 + ')';
		} else {
			cm.firstChild.style.filter = 'alpha(opacity=' + (50 + P[a] / 3)
					+ ')';
		}
		if (b) {
			if (P[a] > 0)
				P[a] -= 5;
		} else {
			if (P[a] < 75)
				P[a] += 5;
		}
	} else {
		cm = document.getElementById('cm').style;
		if (N) {
			cm.opacity = P[0] / 100;
		} else {
			cm.filter = 'alpha(opacity=' + P[0] + ')';
		}
		if (b) {
			if (P[0] > 60)
				P[0] -= 5;
		} else {
			if (P[a] < 95)
				P[0] += 5;
		}
	}
}
function ib(a, b) {
	if (a) {
		clearInterval(Ip[2 * a + 1 - b]);
		Ip[2 * a + b] = setInterval('bgb(' + a + ',' + b + ')', 15);
	} else {
		clearInterval(Ip[1 - b]);
		Ip[b] = setInterval('bgb(0,' + b + ')', 30);
	}
}
function lm() {
	var ts = new Array(), x, y;
	for (x = 0, ts = gC('gs', 'td'); x < ts.length; x++) {
		var tp = ts[x].getElementsByTagName('p');
		for (y = 0; y < tp.length; y++)
			if (N)
				tp[y].style.opacity = Ls / 100;
			else
				tp[y].style.filter = 'alpha(opacity=' + Ls + ')';
	}
	document.getElementById('e').getElementsByTagName('b')[0].innerHTML = Ls;
}
function lb() {
	var ts = new Array(), x;
	for (x = 0, ts = gC('gs', 'td'); x < ts.length; x++) {
		if (N)
			ts[x].style.background = 'rgba(0,0,0,' + Ln / 100 + ')';
		else {
			ts[x].style.background = 'url("../i/gs' + Ln + '.png")';
		}
	}
	document.getElementById('e').getElementsByTagName('b')[1].innerHTML = Ln;
}
function tlm(a) {
	if (Opa['Tlm'] == undefined) {
		b = Ls;
		Opa['Tlm'] = new Array();
	} else if (Opa['Tlm']['a'] == undefined) {
		b = Ls;
	} else {
		b = Opa['Tlm']['a'][1];
		delete Opa['Tlm']['a'];
	}
	if (arguments[1] == Opa['Tlm']['a'][0])
		return 0;
	if (a > 100)
		a = 100;
	if (a < 5)
		a = 5;
	var b, s, e, i, j, gc, gp, p;
	s = parseInt((a - b) / 5);
	if (!s)
		s = 2 * (a > b) - 1;
	Opa['Tlm']['a'] = new Array(1, b, a, s, 40);
	Ls = a;
	for (i = 0, gc = gC('gs', 'td'); i < gc.length; i++) {
		for (j = 0, gp = gc[i].getElementsByTagName('p'); j < gp.length; j++) {
			Opa['Tlm']['a'].push(gp[j]);
		}
	}
	Op('Tlm', 'a');
	document.getElementById('e').getElementsByTagName('b')[0].innerHTML = parseInt(Ls / 10);
}
function tln(a) {
	if (a > 100)
		a = 100;
	if (a < 0)
		a = 0;
	var s, e, i, j, ts, p;
	if (N) {
		p = opa(Tln, 'tln', Ln);
		if (a == p[1])
			return;
		Tln = p[0];
		e = a > p[1];
		s = parseInt((a - p[1]) / 7);
		Ln = a;
		if (!s)
			s = 2 * e - 1;
		for (i = 0, ts = gC('gs', 'td'); i < ts.length; i++) {
			Opa[Tln].push(ts[i]);
		}
		Opa[Tln].push('tln');
		Op(Tln, a, s, 40, 0);
	} else {
		Ln = a;
		if (Ln < 10 && Ln > 0)
			s = 'url("../i/gs' + Ln + '.png")';
		else if (Ln == 100)
			s = '#000';
		else if (Ln == 0)
			s = 'none';
		for (i = 0, ts = gC('gs', 'td'); i < ts.length; i++) {
			ts[i].style.background = s;
		}
	}
	document.getElementById('e').getElementsByTagName('b')[1].innerHTML = parseInt(Ln / 10);
}

/*
 * if (a > 0 && Ln < 100) { if (N) { for (var i = 0; i < a; i++) { Ln++; if (Ln >
 * 100) Ln = 100; lb(); } } else { Ln += 10; if (Ln > 100) Ln = 100; lb(); } }
 * else if (a < 0 && Ln > 5) { if (N) { for (var i = 0; i < -a; i++) { Ln--; if
 * (Ln < 5) Ln = 5; lb(); } } else { Ln -= 10; if (Ln < 5) Ln = 5; lb(); } } }
 */
function bta(a, b) {
	var i = 0;
	Btb = a;
	if (a)
		btc('h', b);
	else {
		btc('g', b);
		setTimeout('if(!Btb)btc("",' + b + ')', 280);
	}
}
function btc(a, b) {
	var i;
	for (i = 0; i < 3; i += 2) {
		Ags[b].parentNode.childNodes[i].firstChild.style.backgroundImage = 'url("../i/g'
				+ (i + 1) + a + '.png")';
		Ags[b].style.backgroundImage = 'url("../i/g2' + a + '.png")';
	}
}