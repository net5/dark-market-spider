(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('清流县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350423","properties":{"name":"清流县","cp":[116.816909,26.177796],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@B@@A@A@@AA@@A@@@A@@B@@@@@BB@A@@@@@@@@@@AAAAA@@A@@B@@A@@@@B@AA@@@@A@@AA@@A@A@@@AAA@CAA@A@AA@@A@@@A@@@A@@@A@@B@@@@AD@@@@AA@@@@@@@AA@A@A@@@A@@BA@@BC@A@@@@@BBB@@B@@BB@@@B@BA@@@CBC@@BAAA@@@ACAA@@@@A@@@AB@@@@@D@@@@ABA@BB@@@@D@@@BB@@AB@@A@EA@@@@@B@@@B@@@BA@@@@BABABA@@BC@A@@@@@@@AB@@@B@@@@ADA@@@C@@BA@@@@BA@CB@@A@CDCH@B@@CD@BAB@@A@ABA@@@@BBD@BBBBDBDBB@B@B@BB@@@BB@@AB@B@B@@BB@BB@@B@B@@@BBDDD@B@BB@B@@B@BBB@@@@@BA@A@@BCD@@@BBB@@AB@@CBCDB@D@D@@@@A@A@@@@BAB@@@BAB@@@@B@@@@A@@@@BABBB@@@B@B@@A@A@@@@@AA@@C@@@A@C@C@@@AB@AA@@BA@@B@@@@@@A@@@@A@@@@@@A@@@A@@@@@A@@@A@@@B@@@@@BB@@A@A@@@A@A@@A@A@@AC@@@A@@AAA@CCAA@@@C@@@@@A@A@A@AAA@@@AAAA@@@@@ABADA@@BA@A@@B@@CBCB@@ABA@@@A@@@@BABABA@AB@@@@@BAB@BA@@B@@@@BD@B@B@@@B@@@B@BC@@BA@@@A@@B@@@@BB@B@@@B@B@@B@@@@@@B@B@BB@@B@@@BAF@@AB@@@@BB@@@B@BFFBF@@@B@D@BBBB@@@BB@@@BBB@@@@BD@@@@@@C@A@A@A@@@A@A@@@CAA@@@A@A@A@@@@@A@@@@@@BA@@@A@@BA@@@A@A@@@@@@@BBB@@@ABA@@@@A@@AB@@@@@B@@@@A@@BA@@@@@A@@B@@A@@@A@@BA@@A@AABAA@@@@A@AA@B@AA@@@@BAA@B@@@@A@@@@@A@@@A@@@A@@@@B@@A@@@@B@@A@@@@@@@BB@@@@@@@@AB@B@@@B@@@@ABA@@B@@@@B@@D@B@@A@@B@@@@A@@@@B@@@@A@@@A@@@AB@@@@@@@B@@@B@AA@@@@@AB@@CA@@@@@@AB@B@@A@AB@@B@@@A@@B@@@@@@@@@BA@@@A@@B@BA@@@@BAB@B@@@@A@@@@@ABA@@BAAAB@AA@@@A@@A@@A@@@AAA@@@@BADA@@@A@@@A@A@@@A@ABAAA@A@@@@@CDABA@AB@@@DAD@B@BBB@B@BA@@BA@C@A@AB@@A@A@A@AAA@CACA@AEAC@@AA@@B@BAB@DAB@@@@BD@B@@@BCB@B@@@B@B@B@B@B@@DB@@@@@BAB@B@@B@@B@B@B@B@DBB@B@@@@ABA@@@A@@@A@@B@BA@@B@@@@A@A@@@@B@@@B@BB@@B@BB@@B@@@@AB@A@@@AAB@@AB@D@BA@@B@@@B@@@@A@@B@@B@B@B@@@@@B@@B@@B@@BB@@@BBB@@@@@BD@@AB@@@@@BAB@@@@AB@B@@A@@B@@@@@B@@@B@@@BB@@@@@@B@@B@@@@@@@B@@B@@@@@B@@@@B@@BBB@@@@@BAB@B@@@@BBB@@BDAB@@A@@@@@ABA@@@A@@A@A@A@A@@@@@@@@ABA@@B@@ABB@@BABAD@B@B@@B@@@B@B@@@B@BB@D@@@@B@@AB@@A@@@@@@@@@A@@@@B@@B@@@@@@B@@@@@B@@A@@B@@A@@B@@@@@BA@@@B@@@@@BBA@@@@@@B@BAB@@@@B@@@BBB@@@@@@@@B@@A@A@A@@@@B@@BB@@@@@BA@@@@@@@@B@@@@@B@@@BA@@@@B@@A@B@@@A@@@@@BB@@@@@B@B@@@@@@@@@@@B@@@@B@@@@B@@@B@@@BB@@BBD@@BB@B@BBBB@@D@@BBB@@@DDBB@@B@DB@@B@@@B@B@@A@A@@B@@@B@BB@AB@B@B@BAB@B@@@B@B@@@B@@@@@@AB@@A@@@@@@B@@@@@BA@@@A@@B@B@@@B@@@@@@A@@@A@@@ABB@@@@@@@@@@@@@@B@@B@@@@@@@@@A@@@@@BB@@@@ABBBA@B@@@@@@B@B@@@@@B@@@@@B@@B@B@@@B@@@@@@@@B@@@B@@A@ABA@@@@BBABB@B@@@@B@@@BBBBB@@B@@@@BBB@@B@@@@A@A@@@A@@BA@@B@@@BB@@A@@@BBBB@B@D@BAB@@BB@B@@BA@BB@@BB@@@@@FJB@@@BBB@D@@AB@B@B@@@B@B@@BB@@@FA@@B@@@DAB@D@@@B@@ABA@CB@@ABAB@BBB@@@BBBBB@@@BADC@@@AB@@A@AB@@@B@B@@@BBBBB@@@@FCB@@BB@@B@@@@B@@BB@@@@BBDB@@@@@B@@@BBBB@BBBB@BB@BABB@@@@BBB@BB@@B@B@B@@B@@@BBAB@@@@BB@@BBB@@BBBBBB@@@A@@@A@@@AB@@BB@BD@@@@@@BB@B@@B@@BBB@@B@@@@A@@AA@@@@@AB@B@B@DAF@@@@A@@@@@@A@A@@@A@@@AAA@@@AA@@@@B@DA@@B@@@@@BBDB@@@BBDBB@BB@@B@@B@B@@AB@BAB@@@@AB@@@B@@@@@B@@@@B@@BB@@@@@B@@B@BB@@@AB@@@@@@B@@@@@@@@ABABABABA@AB@B@@B@BB@@@B@@BBDB@@B@AB@@A@A@A@ADAF@@CB@B@@C@ABA@A@A@@A@@A@@@@@@BB@@BBBBDBB@@@B@@ABA@@B@@A@@@@AAC@@@@CB@BB@@@A@@@ABCAA@ABA@@BA@@B@B@@@@DBB@@@@@@@@D@B@B@@DB@BB@@B@@@B@@AF@@B@@@@B@@@BBB@BBB@@@B@@@D@@@B@DBB@@@B@BAB@@@@BBB@B@B@BB@@B@@B@@@DB@@@AB@B@BAB@@@@@BB@@AB@BAB@@@BB@@@@@@@BC@EF@@@@@B@@B@@@@@BABB@AB@@@B@@@@@B@@@@B@B@@@B@BA@@B@@A@@BA@@B@@A@@@@@@@A@ABABA@@BAAA@A@AAA@@@A@C@AAEA@@ABAA@BA@AA@@@A@@AAA@@A@@AA@AA@@@AB@@@BCD@@A@@B@B@@@B@@@B@@@B@@@B@@AD@BA@@BA@@@@@AD@@@@@BB@AB@B@@BBA@B@@B@@AB@@A@@BC@A@A@@@AB@@@@AB@@@@@@@@BB@B@@@BB@B@B@@@@B@BA@@@A@A@A@@@CB@@AB@@@@@BB@@@@@B@@@@@@BAB@@C@@BA@A@@@ABADA@@@A@@@C@@@AB@@@B@BBBBBD@BB@@@B@BBDAB@@@BAB@@@BBB@@@BBB@BB@@BB@@@@B@B@@@B@@B@@B@@D@@@@@BD@@@BB@B@B@A@@@BBB@@@@B@BAB@BB@B@@BB@@B@@AB@DAB@@A@@@@B@B@@A@@BA@@@A@@@@@@@AB@@A@@@@B@B@@@B@@ABAB@@@@@A@@@A@@@AA@A@@@AB@@@B@B@@CDAB@B@@B@BBB@@B@@@@@B@BAB@@@@@@@B@B@D@B@@@BBB@BB@@@@B@BB@@B@@BB@@@B@@B@@@@BB@B@BB@@@B@@@@@B@BB@@B@B@@@BD@BAB@BB@@@B@@BB@B@@B@BBBB@@B@@@B@@@@B@@@@@B@@B@@@@A@@@@@@BB@A@@@@B@B@@@@@BB@@B@D@@@BBBB@B@@BB@@@@B@@B@@B@@A@@B@@@@@BB@@@AB@@@@@@@@@@A@@BAB@B@@@@@@@B@@@A@@@B@B@@BB@D@FBB@@@@@@@@B@B@@BB@@@@BBBB@@BB@B@D@BBDBD@B@@@B@D@@B@@B@B@@@B@BAB@B@@AB@@@B@BAB@B@@@@DD@BBB@@A@@@B@@B@@BB@@BB@BBD@B@BBB@@B@@@B@@BBB@BB@BAB@DB@AB@BA@@@@@@@@@@BB@@@@@@BB@B@AB@BAB@B@@@B@BB@@D@@AB@DA@@@@@B@@A@@B@B@@@@@@BBB@@@@@DA@@@BB@@AB@@@@BDA@@BA@@@CAA@@BC@@@@D@B@BB@@B@B@B@D@B@B@@@@A@A@C@@@@BA@@@@B@@@@B@@B@@@B@@@B@@@@A@@A@@@CA@@@AAA@@@@B@B@@@B@@BB@BB@@BAB@@@@BB@@ABA@@@@@B@BBB@B@B@@B@BBB@DBB@BBBBB@BD@@@@D@BB@@BB@@@@ADAB@B@B@BDDBB@@@@B@B@DA@@BA@@B@@@@@BABA@@@A@@@@D@BA@@BC@@@@D@D@@@BBD@B@BBB@@@@@AB@@AB@BCB@B@@@BBB@B@@@@@@DA@@BBB@@B@B@@B@B@@DABABAB@B@@@BB@BB@@BB@B@@B@B@@@D@BB@@BB@@@@@B@@B@@@@@B@@ABA@@B@BAB@BC@@B@BA@@@A@@DAB@@@@AB@@@D@@@B@B@B@@B@@@@@@B@@@@BAB@B@@BD@@@BAD@B@BAFBB@D@B@@B@B@D@DB@@BAB@@@BCBCBADE@A@@@AAC@E@AAA@A@A@A@@BA@ABABA@A@@@C@A@@@A@ABA@@@AB@HDBAB@B@B@D@B@@@@@@BBBB@BBB@B@D@@@BAB@@@BBB@B@BB@BBBDBBBBB@BBB@@@@BBB@DBB@@@@@@C@@@AB@@@@A@A@AA@BAA@B@@A@A@@A@@A@@@A@@B@@@@@@@DB@BB@@@@@BA@@@AB@@@@B@BDF@@B@@@@AB@B@BAB@@@@@BBB@@AB@BABABAFC@@@A@AB@@@@BB@@B@@@@@B@@@BABAB@B@B@B@@@B@B@@B@B@B@@@B@@@BAB@BB@@@@@@@AB@@@@@B@@@@DB@AB@DBB@@BA@@@@@@B@@A@@A@@A@@B@A@BA@AB@@A@A@@@@B@@@AA@@@A@@BAB@@@@BB@@B@@BBB@BB@B@@B@@A@@@@B@@DBBB@@@AD@@@@@@B@@BB@B@B@@BB@D@B@@@@@@@@B@@@B@@A@C@CC@@A@A@@@A@@@A@AB@@A@@BB@BD@BBB@@BB@B@BDFBD@B@@D@F@B@@@DDBBB@B@B@@@B@@A@@B@@@B@DBDA@@BBB@@BB@@@B@@@@@BBB@@@@@@@@A@@B@@@D@@@@@@AB@AA@@@AA@@A@@@A@@B@@@@BBAB@BABABA@A@@@@B@@@B@D@@@@@B@BABBD@B@@@B@B@@@@B@F@BBD@@BB@@BB@@@@BB@@A@@BA@@@@B@B@@@B@B@@@BBB@@@D@B@D@@@B@B@@AB@@@@@@@BB@@@DABBB@@A@@@@B@@@B@DC@@@A@@@@BC@@@@@A@@@@@A@@@@B@@@DA@A@@@@@AB@BA@@BC@@@A@@A@@AA@@@@A@@DA@ADCBC@@B@B@@ABABA@@B@B@B@B@@@DA@@@@@@@A@@@A@@@@BABAB@B@@@@ABA@@@ABA@@@@BA@A@AA@@AB@@A@@@A@AA@@@@@@A@@BA@@B@FAB@BAB@B@@AB@B@@AB@BA@@@A@@@@@A@@@AA@AA@@@@BA@@@E@@D@@@HC@AB@@A@ABC@@BA@AB@@AA@@C@C@@BA@@BA@@BA@@@A@@BA@@@A@A@@@A@@@AB@@C@@BA@@@@@@@@BAAA@A@@B@@A@AAAAAB@@@B@@@@@D@BA@@BBB@B@@@@@B@@@BA@@@AB@@@@A@@@AA@BA@@CA@@A@@A@AAA@@@@AA@A@@@@AA@@A@A@@AA@@A@@A@AA@AAA@A@@AA@@@@AA@@A@AAB@@@AAAA@A@@@AB@B@@@B@@@@@AA@@@@BAB@@@B@@@@@@@@@@A@A@AB@@@BABAB@BAB@@A@A@A@@@@@@B@B@@@B@BA@@B@BAB@@@@@AC@A@A@@@AA@AA@@@A@AB@@A@@@A@@B@@@B@B@B@@@D@@@@AB@@@B@B@B@BAB@@AB@@AB@@AB@BA@@@@B@B@B@BA@@DB@@B@@@@@BA@@@@B@@@@B@@@@@@BBBB@@@B@@@@@DB@@@@AB@@@B@@@@@B@@@@@@@@BB@@@BA@@B@@@B@@@@@BBB@@A@C@@A@@AB@@@@@@A@@B@BA@AB@B@@CAE@A@@AA@@EA@@CA@@@ABA@A@A@@AA@A@ABA@A@@@@BA@A@@@@AA@@B@@AB@@@@C@@@A@A@@@A@@@@@@@A@A@@BA@@@B@@@@@A@@B@@@@@@A@@@@@A@A@A@@BA@@@@E@@AA@@AA@@@@AAAA@@@@AA@A@@A@@A@@A@@@A@@BACA@@B@AAB@@A@@@@@AB@@@@@AAAA@@@@AA@@AA@@@@@A@@BAB@@@@@BA@@@AB@@@BA@@@A@@B@@@AA@A@A@@@@@A@@@@@C@@@A@@@AB@@A@A@@A@@A@@@A@@@A@@A@AAA@@@A@C@B@AA@A@@@AB@BAB@BA@@B@@@BAD@@@BAB@@@@AB@@A@@B@B@@@@@@AAABC@@A@@@AAA@@@A@@@@@A@@@AA@@AA@@AA@@A@@AC@@@A@@A@@AAA@A@AA@@A@@@A@@@@@A@ABA@A@@@C@@@A@AA@@@AA@@@AA@AAACC@A@A@@A@AA@@A@AAA@@@AAAA@A@BA@@@@AE@A@@@C@A@@@@B@B@@C@@BA@@BA@@@A@@B@@A@ABABA@E@A@C@A@A@AA@@CAA@@@A@A@@@A@A@AAA@@@A@@@ABC@C@C@A@A@CAA@CAACAA@@C@A@@AA@@AA@A@A@@AAAAA@A@@@A@@@A@@@A@@AA@@@@@AB@@AAA@@@AECAAA@C@A@@@AAA@@@AB@@A@@@AAA@@@@@@A@A@A@@@A@AAA@@@@A@@ACCA@@CA@@AA@@@AB@@@@@@@A@A@@BC@E@@B@@ABA@@@@@A@ABA@A@A@@@AA@@@@AAA@ABCA@@AAA@@@A@@@ADAB@@A@CB@@A@A@@AAA@A@AACB@ACC@AAA@@A@AA@@@AEC@@@@@AB@@@@@B@@@@AD@DAB@@ABA@@@AA@AAA@@@A@A@@BA@EB@@A@C@@A@@@A@@AA@AC@AA@@@ABA@AA@AA@C@@@@@A@@BBB@BA@BB@B@@B@B@@B@@@BAFAB@BAB@B@DA@@B@B@B@BB@@B@@@B@@@@C@@BE@@A@A@@@CA@@@@@@@@@A@A@@@A@@@@@@A@A@@@A@@@@@A@@BC@C@C@A@AAA@@AAA@@@@B@D@B@J@D@@@@AAAAAA@AAA@@@A@@A@@@@BABAA@@AAAA@@AA@A@A@@@@@@AAA@@AA@@@ABA@C@@@AB@@A@@@A@C@A@@@AB@@AD@@ABAB@@@@ABAB@@@BA@AB@BC@A@@@AECAA@A@@B@BA@@BBB@DBB@B@DB@@B@BAB@BABA@@@BD@DB@@B@@AB@@AA@@@A@GCAAA@@A@ABA@A@ABAA@@AA@@BA@@@A@@@EBAB@@ABABC@@BA@@@AB@@@BABAB@@@B@@@A@@A@BA@@@@@@@AAA@AB@BABA@@@ABADA@@@@AA@@@AB@@@@@@@@AA@@@AB@BA@ABA@A@CCEA@@A@@BA@AAAB@@@A@@A@@@AA@@@ABABCB@AAA@A@@@A@@@BB@@ABAB@@CB@@A@CAE@@@CB@@@@AAAA@CAEAEAA@ABA@A@@AA@@@A@@C@@@AA@@AACA@@A@A@@BCBGBABA@ABA@A@@BA@@BAB@B@@ABA@A@AB@@@@A@@@A@@@C@@@@@@AA@ABA@@@A@@@@@@BA@@@CAC@@AA@@@A@@BA@CA@@A@@@A@A@@BA@@AA@@@@@ABA@@@@@AB@@A@A@AB@@A@@@AAC@CAAB@A@@AA@@A@@A@@AA@AAA@@A@@A@@AA@AAA@@BA@A@@@AA@BAA@@@@A@A@@B@@@BA@@@@@@@@@AB@@ABA@@@@B@@@BA@@@AB@@@@@@AB@@ABC@@B@@@@A@@@@@@@A@@@@BA@@@A@@@@BA@@BAA@@@@@@BA@@@AA@@@A@AA@@AAA@@@A@@@A@A@@@@@@BAAA@CCCAAA@@@A@@@@AA@@A@@AAAA@@@A@A@A@E@@@@@A@@@A@@@AAEAC@@@A@C@@AAAC@A@@BAB@@@@A@@AC@A@@B@@@BA@@@A@@A@@A@@BA@@@AA@@AA@AAA@@A@@@A@C@A@C@C@ABC@@AAAACAA@AAA@@@@@A@@@A@A@@AA@A@A@BC@@@AA@AAACACAA@A@@@AAAAA@@AE@@@AA@C@C@A@A@A@CBA@AAEA@BA@@B@@A@A@@@AB@@AB@@AA@@AA@AA@AAAA@AAA@AA@EAA@C@@@AA@@AAAB@AC@CCAC@@A@A@A@A@@AA@CB@A@C@@@@@@@A@@@@AABAA@AAB@B@@@@@B@@BB@@B@@BB@@@@@A@@AE@@@@A@@AA@@AAA@@@A@@AA@A@@AA@A@A@@BA@@AAA@@@A@@@@@AAA@@@A@@A@@A@@@@@@A@@A@AAA@A@@@@AA@@@A@@B@@@B@@AA@@A@@@A@@@@@A@@@@@@ABA@@BC@A@@@A@@@C@AA@AA@@@A@@@ABA@A@AA@@A@@@A@@@AA@@AAA@@@@A@AAEAC@AA@@@AA@@@C@AB@@@@@@A@@@@@@@@@@@A@A@@@@@@@@@@@A@@@A@@@@@@@@@A@@@@A@BAA@A@@A@@@@@A@@A@@A@@@@A@@A@@@A@@@@A@A@@B@@BB@@@@B@@@@B@B@B@@@@A@A@@@AA@@AA@@@@@A@@@@@AB@@A@@A@@A@@@A@"],"encodeOffsets":[[119649,26406]]}}],"UTF8Encoding":true});}));