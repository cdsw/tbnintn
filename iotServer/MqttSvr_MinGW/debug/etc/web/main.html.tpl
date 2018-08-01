<html>
<body>
Air Conditioning Controller <br />
Your session id = {sessId} <br />

<table>
<tr>
<td>AC Power</td>
<td><span id="varPowerStat">OFF</span></td>
</tr>

<tr>
<td>Temperature</td>
<td><span id="varTemperature">25</span> deg C</td>
</tr>

<tr>
<td>Temp Preset</td>
<td><span id="varTempPreset">25</span> deg C</td>
</tr>

<tr>
<td>Engine Current</td>
<td><span id="varCurrent">5</span> Amp</td>
</tr>

</table>

<button type="button" onclick="onBtnTempUp();">UP</button>
<button type="button" onclick="onBtnTempDn();">DN</button>
<button type="button" onclick="onBtnPwrOn();">ON</button>
<button type="button" onclick="onBtnPwrOff();">OFF</button>


<script>
setInterval(
	function()
	{
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			    var readValue;
				eval(this.responseText);
				document.getElementById("varPowerStat").innerHTML = readValue.varPowerStat;
				document.getElementById("varTemperature").innerHTML = readValue.varTemperature;
				document.getElementById("varCurrent").innerHTML = readValue.varCurrent;
				document.getElementById("varTempPreset").innerHTML = readValue.varTempPreset;
			}
		};
		xhttp.open("GET", "cmdRead", true);
		xhttp.send();
	},
	1000
);

function onBtnTempUp()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
	xhttp.open("GET", "cmdBtnUp", true);
	xhttp.send();
}

function onBtnTempDn()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
	xhttp.open("GET", "cmdBtnDn", true);
	xhttp.send();
}

function onBtnPwrOn()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
	xhttp.open("GET", "cmdBtnOn", true);
	xhttp.send();
}

function onBtnPwrOff()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
	xhttp.open("GET", "cmdBtnOff", true);
	xhttp.send();
}

</script>

</body>
</html>
