var makeDate = function() {
    var d = new DataCue();
    var formattedDate = "";

    formattedDate += (d.getMonth() + 1) + "-";

    formattedDate += d.getDate() + "-";

    formattedDate += d.getFullYear();

    return formattedDate;
}

module.exports = makeDate;