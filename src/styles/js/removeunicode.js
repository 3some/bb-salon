var RemoveUnicode = function() {
    var   get_html_translation_table
        , html_entity_decode
        , nv_EncString
        , change_alias
        , removeAccentsApi
        , replaceArray;
    get_html_translation_table = function (table, quote_style) {
        //  discuss at: http://phpjs.org/functions/get_html_translation_table/
        // original by: Philip Peterson
        //  revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // bugfixed by: noname
        // bugfixed by: Alex
        // bugfixed by: Marco
        // bugfixed by: madipta
        // bugfixed by: Brett Zamir (http://brett-zamir.me)
        // bugfixed by: T.Wild
        // improved by: KELAN
        // improved by: Brett Zamir (http://brett-zamir.me)
        //    input by: Frank Forte
        //    input by: Ratheous
        //        note: It has been decided that we're not going to add global
        //        note: dependencies to php.js, meaning the constants are not
        //        note: real constants, but strings instead. Integers are also supported if someone
        //        note: chooses to create the constants themselves.
        //   example 1: get_html_translation_table('HTML_SPECIALCHARS');
        //   returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}

        var entities = {},
            hash_map = {},
            decimal;
        var constMappingTable = {},
            constMappingQuoteStyle = {};
        var useTable = {},
            useQuoteStyle = {};

        // Translate arguments
        constMappingTable[0] = 'HTML_SPECIALCHARS';
        constMappingTable[1] = 'HTML_ENTITIES';
        constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
        constMappingQuoteStyle[2] = 'ENT_COMPAT';
        constMappingQuoteStyle[3] = 'ENT_QUOTES';

        useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
        useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() :
            'ENT_COMPAT';

        if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
            throw new Error('Table: ' + useTable + ' not supported');
            // return false;
        }

        entities['38'] = '&amp;';
        if (useTable === 'HTML_ENTITIES') {
            entities['160'] = '&nbsp;';
            entities['161'] = '&iexcl;';
            entities['162'] = '&cent;';
            entities['163'] = '&pound;';
            entities['164'] = '&curren;';
            entities['165'] = '&yen;';
            entities['166'] = '&brvbar;';
            entities['167'] = '&sect;';
            entities['168'] = '&uml;';
            entities['169'] = '&copy;';
            entities['170'] = '&ordf;';
            entities['171'] = '&laquo;';
            entities['172'] = '&not;';
            entities['173'] = '&shy;';
            entities['174'] = '&reg;';
            entities['175'] = '&macr;';
            entities['176'] = '&deg;';
            entities['177'] = '&plusmn;';
            entities['178'] = '&sup2;';
            entities['179'] = '&sup3;';
            entities['180'] = '&acute;';
            entities['181'] = '&micro;';
            entities['182'] = '&para;';
            entities['183'] = '&middot;';
            entities['184'] = '&cedil;';
            entities['185'] = '&sup1;';
            entities['186'] = '&ordm;';
            entities['187'] = '&raquo;';
            entities['188'] = '&frac14;';
            entities['189'] = '&frac12;';
            entities['190'] = '&frac34;';
            entities['191'] = '&iquest;';
            entities['192'] = '&Agrave;';
            entities['193'] = '&Aacute;';
            entities['194'] = '&Acirc;';
            entities['195'] = '&Atilde;';
            entities['196'] = '&Auml;';
            entities['197'] = '&Aring;';
            entities['198'] = '&AElig;';
            entities['199'] = '&Ccedil;';
            entities['200'] = '&Egrave;';
            entities['201'] = '&Eacute;';
            entities['202'] = '&Ecirc;';
            entities['203'] = '&Euml;';
            entities['204'] = '&Igrave;';
            entities['205'] = '&Iacute;';
            entities['206'] = '&Icirc;';
            entities['207'] = '&Iuml;';
            entities['208'] = '&ETH;';
            entities['209'] = '&Ntilde;';
            entities['210'] = '&Ograve;';
            entities['211'] = '&Oacute;';
            entities['212'] = '&Ocirc;';
            entities['213'] = '&Otilde;';
            entities['214'] = '&Ouml;';
            entities['215'] = '&times;';
            entities['216'] = '&Oslash;';
            entities['217'] = '&Ugrave;';
            entities['218'] = '&Uacute;';
            entities['219'] = '&Ucirc;';
            entities['220'] = '&Uuml;';
            entities['221'] = '&Yacute;';
            entities['222'] = '&THORN;';
            entities['223'] = '&szlig;';
            entities['224'] = '&agrave;';
            entities['225'] = '&aacute;';
            entities['226'] = '&acirc;';
            entities['227'] = '&atilde;';
            entities['228'] = '&auml;';
            entities['229'] = '&aring;';
            entities['230'] = '&aelig;';
            entities['231'] = '&ccedil;';
            entities['232'] = '&egrave;';
            entities['233'] = '&eacute;';
            entities['234'] = '&ecirc;';
            entities['235'] = '&euml;';
            entities['236'] = '&igrave;';
            entities['237'] = '&iacute;';
            entities['238'] = '&icirc;';
            entities['239'] = '&iuml;';
            entities['240'] = '&eth;';
            entities['241'] = '&ntilde;';
            entities['242'] = '&ograve;';
            entities['243'] = '&oacute;';
            entities['244'] = '&ocirc;';
            entities['245'] = '&otilde;';
            entities['246'] = '&ouml;';
            entities['247'] = '&divide;';
            entities['248'] = '&oslash;';
            entities['249'] = '&ugrave;';
            entities['250'] = '&uacute;';
            entities['251'] = '&ucirc;';
            entities['252'] = '&uuml;';
            entities['253'] = '&yacute;';
            entities['254'] = '&thorn;';
            entities['255'] = '&yuml;';
        }

        if (useQuoteStyle !== 'ENT_NOQUOTES') {
            entities['34'] = '&quot;';
        }
        if (useQuoteStyle === 'ENT_QUOTES') {
            entities['39'] = '&#39;';
        }
        entities['60'] = '&lt;';
        entities['62'] = '&gt;';

        // ascii decimals to real symbols
        for (decimal in entities) {
            if (entities.hasOwnProperty(decimal)) {
                hash_map[String.fromCharCode(decimal)] = entities[decimal];
            }
        }

        return hash_map;
    };

    html_entity_decode = function (string, quote_style) {
        //  discuss at: http://phpjs.org/functions/html_entity_decode/
        // original by: john (http://www.jd-tech.net)
        //    input by: ger
        //    input by: Ratheous
        //    input by: Nick Kolosov (http://sammy.ru)
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // improved by: marc andreu
        //  revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        //  revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // bugfixed by: Onno Marsman
        // bugfixed by: Brett Zamir (http://brett-zamir.me)
        // bugfixed by: Fox
        //  depends on: get_html_translation_table
        //   example 1: html_entity_decode('Kevin &amp; van Zonneveld');
        //   returns 1: 'Kevin & van Zonneveld'
        //   example 2: html_entity_decode('&amp;lt;');
        //   returns 2: '&lt;'

        var hash_map = {},
            symbol = '',
            tmp_str = '',
            entity = '';
        tmp_str = string.toString();

        if (false === (hash_map = get_html_translation_table('HTML_ENTITIES', quote_style))) {
            return false;
        }

        // fix &amp; problem
        // http://phpjs.org/functions/get_html_translation_table:416#comment_97660
        delete(hash_map['&']);
        hash_map['&'] = '&amp;';

        for (symbol in hash_map) {
            entity = hash_map[symbol];
            tmp_str = tmp_str.split(entity)
                .join(symbol);
        }
        tmp_str = tmp_str.split('&#039;')
            .join("'");

        return tmp_str;
    };

    /**
     * EncString()
     *
     * @param mixed strtext
     * @return
     */
    nv_EncString = function (strtext){
        strtext = html_entity_decode(strtext);
        //thay thế chữ thuong
        strtext = strtext.replace(/(å|ä|ā|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä|ą)/g, 'a');
        strtext = strtext.replace(/(ß|ḃ)/g, 'b');
        strtext = strtext.replace(/(ç|ć|č|ĉ|ċ|¢|©)/g, 'c');
        strtext = strtext.replace(/(đ|ď|ḋ|đ)/g, 'd');
        strtext = strtext.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ę|ë|ě|ė)/g, 'e');
        strtext = strtext.replace(/(ḟ|ƒ)/g, 'f');
        strtext = strtext.replace("ķ", 'k');
        strtext = strtext.replace(/(ħ|ĥ)/g, 'h');
        strtext = strtext.replace(/(ì|í|î|ị|ỉ|ĩ|ï|î|ī|¡|į)/g, 'i');
        strtext = strtext.replace("ĵ", 'j');
        strtext = strtext.replace("ṁ", 'm');

        strtext = strtext.replace(/(ö|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ö|ø|ō)/g, 'o');
        strtext = strtext.replace("ṗ", 'p');
        strtext = strtext.replace(/(ġ|ģ|ğ|ĝ)/g, 'g');
        strtext = strtext.replace(/(ü|ù|ú|ū|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ü|ų|ů)/g, 'u');
        strtext = strtext.replace(/(ỳ|ý|ỵ|ỷ|ỹ|ÿ)/g, 'y');
        strtext = strtext.replace(/(ń|ñ|ň|ņ)/g, 'n');
        strtext = strtext.replace(/(ŝ|š|ś|ṡ|ș|ş|³)/g, 's');
        strtext = strtext.replace(/(ř|ŗ|ŕ)/g, 'r');
        strtext = strtext.replace(/(ṫ|ť|ț|ŧ|ţ)/g, 't');

        strtext = strtext.replace(/(ź|ż|ž)/g, 'z');
        strtext = strtext.replace(/(ł|ĺ|ļ|ľ)/g, "l");
        strtext = strtext.replace(/(ẃ|ẅ)/g,  "w");

        strtext = strtext.replace("æ", "ae");
        strtext = strtext.replace("þ", "th");
        strtext = strtext.replace("ð", "dh");
        strtext = strtext.replace("£", "pound");
        strtext = strtext.replace("¥", "yen");

        strtext = strtext.replace("ª", "2");
        strtext = strtext.replace("º", "0");
        strtext = strtext.replace("¿", "?");

        strtext = strtext.replace("µ", "mu");
        strtext = strtext.replace("®", "r");

        //thay thế chữ hoa
        strtext = strtext.replace(/(Ä|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|Ą|Å|Ā)/g, 'A');
        strtext = strtext.replace(/(Ḃ|B)/g, 'B');
        strtext = strtext.replace(/(Ç|Ć|Ċ|Ĉ|Č)/g, 'C');
        strtext = strtext.replace(/(Đ|Ď|Ḋ)/g, 'D');
        strtext = strtext.replace(/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ę|Ë|Ě|Ė|Ē)/g, 'E');
        strtext = strtext.replace(/(Ḟ|Ƒ)/g, "F");
        strtext = strtext.replace(/(Ì|Í|Ị|Ỉ|Ĩ|Ï|Į)/g, 'I');
        strtext = strtext.replace(/(Ĵ|J)/g, "J");

        strtext = strtext.replace(/(Ö|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ø)/g, 'O');
        strtext = strtext.replace(/(Ü|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ū|Ų|Ů)/g, 'U');
        strtext = strtext.replace(/(Ỳ|Ý|Ỵ|Ỷ|Ỹ|Ÿ)/g, 'Y');

        strtext = strtext.replace("Ł", "L");
        strtext = strtext.replace("Þ", "Th");
        strtext = strtext.replace("Ṁ", "M");

        strtext = strtext.replace(/(Ń|Ñ|Ň|Ņ)/g, "N");
        strtext = strtext.replace(/(Ś|Š|Ŝ|Ṡ|Ș|Ş)/g, "S");
        strtext = strtext.replace("Æ", "AE");
        strtext = strtext.replace(/(Ź|Ż|Ž)/g, 'Z');

        strtext = strtext.replace(/(Ř|R|Ŗ)/g, 'R');
        strtext = strtext.replace(/(Ț|Ţ|T|Ť)/g, 'T');
        strtext = strtext.replace(/(Ķ|K)/g, 'K');
        strtext = strtext.replace(/(Ĺ|Ł|Ļ|Ľ)/g, 'L');

        strtext = strtext.replace(/(Ħ|Ĥ)/g, 'H');
        strtext = strtext.replace(/(Ṗ|P)/g, 'P');
        strtext = strtext.replace(/(Ẁ|Ŵ|Ẃ|Ẅ)/g, 'W');
        strtext = strtext.replace(/(Ģ|G|Ğ|Ĝ|Ġ)/g, 'G');
        strtext = strtext.replace(/(Ŧ|Ṫ)/g, 'T');

        return strtext;
    };

    replaceArray = function  (replaceString, find, replace) {
        for (var i = 0; i < find.length; i++) {
            // global replacement
            var pos = replaceString.indexOf(find[i]);
            while (pos > -1) {
                if(replace[i]){
                    var strrep = replace[i];
                }else{
                    var strrep = replace[0];
                }
                replaceString = replaceString.replace(find[i], strrep);
                pos = replaceString.indexOf(find[i]);
            }
        }
        return replaceString;
    };

    change_alias = function ( alias ) {
        alias = nv_EncString( alias );

        //thêm trường hợp các kí tự đặc biệt
        alias = alias.replace( /(!|\"|#|$|%|'|̣)/g, '');
        alias = alias.replace( /(̀|́|̉|$|>)/g, '');
        alias = alias.replace( /<[\/\!]*?[^<>]*?>/gi, "");

        alias = alias.replace( "----", " ");
        alias = alias.replace( "---", " ");
        alias = alias.replace( "--", " ");

        alias = alias.replace( /(\W+)/gi, '-');

        alias = replaceArray(alias, ['-8220-', '-8221-', '-7776-'],['-']);

        alias = alias.replace( /[^a-zA-Z0-9\-]+/gi, '');

        alias = replaceArray(alias, ['dAg', 'DAg', 'uA', 'iA', 'yA', 'dA', '--', '-8230'],
            ['dong', 'Dong', 'uon', 'ien', 'yen', 'don', '-', '']);

        alias = alias.replace( /(\-)$/g, '');
        alias = alias.replace( /^(\-)/g, '');
        return alias;
    };

    removeAccentsApi = function (accstring) {
        accstring = change_alias(accstring);
        accstring = accstring.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        accstring = accstring.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        accstring = accstring.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        accstring = accstring.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        accstring = accstring.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        accstring = accstring.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        accstring = accstring.replace(/(đ)/g, 'd');
        accstring = accstring.replace(/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/g, 'A');
        accstring = accstring.replace(/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/g, 'E');
        accstring = accstring.replace(/(Ì|Í|Ị|Ỉ|Ĩ)/g, 'I');
        accstring = accstring.replace(/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/g, 'O');
        accstring = accstring.replace(/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/g, 'U');
        accstring = accstring.replace(/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/g, 'Y');
        accstring = accstring.replace(/(Đ)/g, 'D');
        accstring = accstring.replace(/ /g, '');
        accstring = accstring.toLowerCase();
        accstring = accstring.replace(/[^a-z0-9]/gi, '');
        return accstring;
    }

    return {
        get_html_translation_table: get_html_translation_table
        , html_entity_decode: html_entity_decode
        , nv_EncString: nv_EncString
        , change_alias: change_alias
        , removeAccentsApi: removeAccentsApi
        , replaceArray: replaceArray
    };

};
