app.service("csvConvertor" , function(){
    // return {
    // }
    
    function CSVToArray(strData, strDelimiter) {
        var arrData = [[]];
        if(isEmpty(strData)){
            return (arrData);
        }
        strDelimiter = (strDelimiter || ",");
        var objPattern = new RegExp(("(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" + "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
        arrData = [[]];
        var arrMatches = null;
        while (arrMatches = objPattern.exec(strData)) {
            var strMatchedDelimiter = arrMatches[1],strMatchedValue;
            var arr0 = arrData[0]; 
            var curr = arrData[arrData.length - 1];
            if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter) && arr0.length == curr.length) {
                arrData.push([]);
            }
            if (arrMatches[2]) {
                strMatchedValue = arrMatches[2].replace(
                new RegExp("\"\"", "g"), "\"");
            } else {
                strMatchedValue = arrMatches[3];
            }
            if(!isEmpty(strMatchedValue)){
                arrData[arrData.length - 1].push(strMatchedValue.trim());
            }
        }
        return (arrData);
    };
    this.csvConvertor = function CSV2JSON(csv) {
        var array = CSVToArray(csv);
        //console.log(array);
        var objArray = [];
        for (var i = 1; i < array.length-1; i++) {
            objArray[i - 1] = {};
            for (var k = 0; k < array[0].length && k < array[i].length; k++) {
                var key = (array[0][k]).replace(/ /g, '');
                objArray[i - 1][key] = array[i][k]
            }
        }
        return objArray;
    }
    return this;
});
