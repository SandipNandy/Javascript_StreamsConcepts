
    const filePath = FILEPATH;

    //const workbookHeaders = XLSX.readFile(filePath, { sheetRows: 1 });

    let cvt = function (n) { return (String.fromCharCode(n + 'A'.charCodeAt(0) - 1)) }

    const workbookHeaders = XLSX.readFile(filePath);
    let HeaderRow;
    let ColumnHeaderNames = [];
    const sheetList = workbookHeaders.SheetNames;
    console.log(sheetList.toString());
    let sheetposition = 0;
    for (let j = 0; j < sheetList.length; j++) {
        // console.log('sheetlist',sheetList[j].includes('Input File-'));
        if (sheetList[j].includes('Input File-')) {
            console.log('j',j);
            sheetposition = j;
        }
        
    }
    //console.log('sheetposition',sheetposition);
    //console.log('sheetList : ',sheetList[sheetposition]);

    var sheet = workbookHeaders.Sheets['' + sheetList[sheetposition] + '']
    for (let i = 1; i <= 10000; i++) {
        if (sheet['A' + i] !== null && (sheet['B' + i] == null || sheet['C' + i] == null)) {

            continue;
        }
        if (sheet['A' + i] == null || sheet['B' + i] == null || sheet['C' + i] == null) {

            continue;
        }
        if (sheet['A' + i] !== null || sheet['B' + i] !== null || sheet['C' + i] !== null) {
            console.log('i', i);
            HeaderRow = i - 1;
            break;
        }

    }
    for (let h = 1; h <= Columns; h++) {
        let Cell = cvt(h) + (HeaderRow + 1);
        console.log(sheet[Cell].v);
        ColumnHeaderNames.push(sheet[Cell].v);

    }
    //return ColumnHeaderNames;
