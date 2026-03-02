function computing_fare(isDiscounted) {

    let baseFare = 50;
    let perKMrate = 15;
    let baseKM = 2;

    let pickup = document.getElementById("pickup").selectedIndex;
    let dropoff = document.getElementById("dropoff").selectedIndex;

    if (pickup === 0 || dropoff === 0) {
        alert("Please select both locations.");
        return;
    }

    let totalDistance = Math.abs(dropoff - pickup);

    let totalFare;

    if (totalDistance <= baseKM) {
        totalFare = baseFare;
    } else {
        totalFare = baseFare +
            (totalDistance - baseKM) * perKMrate;
    }

    if (isDiscounted) {
        totalFare *= 0.80;
    }

    document.getElementById("fareDisplay").innerHTML =
        totalFare.toFixed(2);
}


function previewimage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('preview');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}


