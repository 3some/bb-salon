var btype = 'code128';/* ean8,ean13,upc,std25,int25,code11,code39,code93,code128,codabar,msi,datamatrix */

var defaultsettings = {
    bgColor: '#fff',
    color: '#000',
    barWidth: '2',
    barHeight: '50',
    moduleSize: '5',
    fontSize: '12',
    showHRI: true,
    marginHRI: '5',
    posX: '0',
    posY: '0',
    addQuietZone: '1'
};

var settings;

function GenerateListHrvBarcode(listBarcode) {

    var i = 0;
    for (i = 0; i < listBarcode.length; i++) {

        GenerateHrvBarcode(listBarcode[i])
    }
}

function GenerateHrvBarcode(Barcode, codeType) {
    //Set Default Setting
    settings = JSON.parse(JSON.stringify(defaultsettings));

    if (Barcode.isShowCode == false) {
        settings.showHRI = false;
    }

    switch (codeType) {
        case 1: {
            btype = 'code128';
            break;
        }
        case 2: {
            btype = 'ean13';
            break;
        }
        case 3: {
            btype = 'upc';
            break;
        }
        default: {
            btype = 'code128';
            break;
        }
    }

    render_barcode(Barcode.id, Barcode.code, 'css');
}
