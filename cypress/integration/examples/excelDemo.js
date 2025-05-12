const ExcelJs = require("exceljs");

async function writeExcelTest(searchText, replaceText, change, filePath) {

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet("Sheet1");
    const output = await readExcelTest(worksheet, searchText);

    const cell = worksheet.getCell(output.row, output.column + change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath)
}

async function readExcelTest(worksheet, searchText) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rownumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output.row = rownumber;
                output.column = colNumber;
            }
        });
    });
    return output;
}

writeExcelTest("Mango", 360, {rowChange: 0, colChange: 2}, "cypress/downloads/excelDownloadTest.xlsx");
