var getS=new Array();
    {getS[0]=new Array();
        getS[0][0]="乾卦：問卦者剛強獨立<br>跟對象可能會有意見不合的情況<br>最忌高傲、頑固，適當低頭有助於感情發展。";
        getS[0][1]="否卦：雙方不協調<br>陷入無法溝通或是交流的境地<br>感情方面諸事不宜，有可能被拒絕。";
        getS[0][2]="履卦：感情如履薄冰<br>需要審視情況，量力而為<br>最好謹守禮節，可得小亨。";
        getS[0][3]="遯卦：落花有意，流水無情<br>很可能被牽扯進不必要的是非<br>適當的給自己一點空間，逃離當下情況。";
        getS[0][4]="同人卦：跟對象有默契<br>或是在工作環境找到同道合的伴侶<br>可能會在與人合作中增進感情。";
        getS[0][5]="訟卦：和對象有爭執<br>感情中陷入是非<br>能放下堅持，退一步則海闊天空。";
        getS[0][6]="無妄卦：會受到無妄之災<br>做白日夢，想法有點不切實際<br>談感情很有可能受到傷害。";
        getS[0][7]="姤卦：感情無法長久，婚姻不宜<br>有對象不貞的情況<br>感情只是一場邂逅。";
        
        getS[1]=new Array();
        getS[1][0]="泰卦：與對象感情融洽<br>有良好的溝通<br>屬於情投意合的狀態，可以好好把握。";
        getS[1][1]="坤卦：不應過於主動或積極進取<br>需要持之以恒，才可以成功<br>有主動付出的傾象，會較為辛苦。";
        getS[1][2]="臨卦：再觀察一段時間<br>得失心不要太重<br>切記過於急躁，慢慢等待有機會成功。";
        getS[1][3]="謙卦：需要謙卑自牧<br>保持修養，能有精神上的獲得<br>追求持之以恒，日久見人心。";
        getS[1][4]="明夷卦：陷入黑暗的狀態<br>受傷很深，看不到未來<br>很有可能被對方拋棄。";
        getS[1][5]="師卦：多重視對方想法<br>他是有魅力的人，會從他身上學到很多<br>不過可能有花心的傾向，需要多注意。";
        getS[1][6]="復卦：同樣的情況反覆出現<br>容易分分合合，吵架的內容都是類似的<br>若要相處需要雙方互相包容";
        getS[1][7]="升卦：感情緩慢成長<br>切記急躁，需要步步為營<br>若有朋友幫助，感情可以升溫。";

        getS[2]=new Array();
        getS[2][0]="夬卦：果斷解決<br>公開而強硬的手段固然明快，但會招來危險。<br>要多使用手腕，溫和處理，才能長保安康";
        getS[2][1]="萃卦：萬物薈萃<br>利於匯聚眾人之力，集中人氣。排場盛大為宜。<br>凡事應隆重舉行以表達誠意，不應吝嗇";
        getS[2][2]="兌卦：喜悅滋潤<br>以喜悅來驅動人，則冒死犯難在所不辭。<br>施比受者有福，凡事守正可以亨通";
        getS[2][3]="咸卦：心有靈犀<br>感情大吉，男女心心相映，婚姻幸福。<br>諸事多虛心傾聽，同情心待人；若問身體，小心受傷、重病";
        getS[2][4]="革卦：洗心革面<br>真心改革去舊，才能重新取得威信。<br>若是守舊不變，則是自取滅亡";
        getS[2][5]="困卦：山窮水盡<br>注意操守，謹慎言語，得以窮中求通。<br>空口說白話，於事無補，還會自取其辱";
        getS[2][6]="隨卦：順其自然<br>得失無常，以不變應萬變。<br>一切船到橋頭自然直";
        getS[2][7]="大過卦：棟樑不穩。<br>有將無兵，事情難成。<br>長遠之計，另求去處。若問身體，慎防滅頂之災";

        getS[3]=new Array();
        getS[3][0]="大畜卦：畜勢待發<br>大膽前往可以功成名就，實力會受到肯定。<br>但家庭難以兼顧，可能離鄉背景";
        getS[3][1]="剝卦：陽氣剝盡<br>有山倒屋塌的危險，諸事不宜。<br>凡事以避難為優先";
        getS[3][2]="損卦：犧牲短利<br>犧牲小我完成大我，放棄短利可以獲取長遠利益。<br>只要把眼光放遠，短暫的損失都是值得的";
        getS[3][3]="艮卦：重山阻隔<br>諸事不成，尋人不著，凡事只能求得平安不犯錯。<br>深居簡出為吉，躁動則凶";
        getS[3][4]="賁卦：矜持裝飾<br>小事吉，大事凶；婚姻有小插曲但可成。<br>事業要等人主動挖掘，凡事過程會有疑慮";
        getS[3][5]="蒙卦：蒙昧無知<br>能力不足以應付危險。<br>求教於有智慧、有經驗的長者是最好的策略";
        getS[3][6]="頤卦：修身養性<br>節制飲食，謹言慎行，閉關修練。<br>守靜為吉，躁動為凶。慎防口舌之災";
        getS[3][7]="蠱卦：蠱惑敗壞<br>亡羊補牢，為時未晚。<br>努力挽救，仍有可為。<br>若放任不管，則萬劫不復";

        getS[4]=new Array();
        getS[4][0]="大有卦：富有天下<br>如日中天，勢不可當。<br>遏惡揚善，豐富大業，萬事亨通";
        getS[4][1]="晉卦：步步高陞<br>人才得以出人頭地，發揮所長，受到重用。<br>有連升三級，得財受祿之象";
        getS[4][2]="睽卦：孤獨乖離<br>人與人感情不睦，彼此見外，各行其是。<br>小事可成，但大事則有人事違和的問題";
        getS[4][3]="旅卦：客居他鄉<br>行旅在外，形勢比人強，身邊可信的人很少。<br>小事可，大事凶，事情應多看少做";
        getS[4][4]="離卦：過度聰明美麗<br>聰明太過反被聰明誤，美麗過盛則浮華不實。<br>最需要的是中庸與柔順";
        getS[4][5]="未濟卦：陰陽失序<br>美麗外表下藏著危險，無利可圖。<br>任何行動之前務必謹慎明辨，多方觀察";
        getS[4][6]="噬嗑卦：懲惡除奸<br>凡事都能夠小有獲得。<br>但要明辨是非，明察秋毫，以免因得而惹禍";
        getS[4][7]="鼎卦：表面看似平穩<br>有第三者插足的跡象。<br>需要多留意對方的情況";

        getS[5]=new Array();
        getS[5][0]="需卦：等待時機<br>坎險阻隔，龍困淺灘。<br>退守靜待時機可以以逸代勞，強渡將遇險難";
        getS[5][1]="比卦：親近比附<br>輔佐、親近君王，應該當仁不讓，<br>不落人後，則前途無量";
        getS[5][2]="節卦：節制制止<br>適可而止，可以小亨通，不知節制則凶。<br>但節制也不可太過，否則辛苦而無法持久";
        getS[5][3]="蹇卦：知難而退<br>危險在前不宜前進，當止則止。<br>既然諸事不宜，退守而閉關修養不失為良策";
        getS[5][4]="既濟卦：水火調和<br>守成不易，凡事應防患未然。<br>事情處於最完美的高峰，應力圖減緩衰退";
        getS[5][5]="坎卦：進退都是危險<br>習慣於危險，仍然可以險中求通。<br>若是自亂陣腳，則凶險更甚";
        getS[5][6]="屯卦：囤積實力<br>面對「凡事起頭難」的挑戰。<br>努力建立基礎，累積實力，<br>為未來的成功做準備";
        getS[5][7]="井卦：修德以聚民<br>壞掉的水井將它修好，人就自然群聚而來。<br>若只急欲取水，不知未雨綢繆，則災難將至";

        getS[6]=new Array();
        getS[6][0]="大壯卦：理直氣壯<br>氣勢過於強盛，容易與人衝突。<br>應冷靜多加審察情勢，避免莽撞造成錯誤";
        getS[6][1]="豫卦：快樂春吶<br>春臨大地，萬物振奮。<br>用心傾聽、體會與享受，但不要沉溺與貪戀";
        getS[6][2]="歸妹卦：少女嫁人<br>婚姻、結盟可成，但長遠恐有後遺症。<br>其餘諸事，出征、行動都大凶";
        getS[6][3]="小過卦：小心渡過<br>宜於靜止不動，往下走為吉，往上飛則凶。<br>小事可成，大事大凶，凡事退守、居靜為吉";
        getS[6][4]="豐卦：豐富盛大<br>諸事大吉，有貴人蒞臨共襄盛舉之象。<br>凡事不用擔憂，宜打鐵趁熱";
        getS[6][5]="解卦：解除危險<br>積極面對問題，可以化險為夷。<br>凡事應當盡早行動為宜，拖延則凶";
        getS[6][6]="震卦：當頭棒喝<br>事情變動來得突然，如果因此戒慎恐懼，將能有福。<br>若是繼續怠慢，則招來災禍";
        getS[6][7]="恒卦：穩定恒久<br>家庭穩定幸福，夫妻白頭偕老。<br>安穩平靜，利於守成，不宜創新";

        getS[7]=new Array();
        getS[7][0]="小畜卦：滿天疑雲<br>君子為小人所養，男人靠女人吃飯。<br>懷才不遇，前途不明";
        getS[7][1]="觀卦：觀摩學習<br>多看少說，多學少做。<br>用心觀看與學習，可以有所獲得<br>";
        getS[7][2]="中孚卦：誠實感人<br>諸事難成，暗藏危險。<br>虛心誠實，以信譽來說服人，則可渡過危險";
        getS[7][3]="漸卦：循序漸進<br>鴻鳥飛行，井然有序，女子嫁人大吉。<br>凡事只要循序漸進，自然可成";
        getS[7][4]="家人卦：管好家事<br>女子諸事大吉，可以旺夫。<br>凡事反躬自省，管好份內之事，則一切水道渠成";
        getS[7][5]="渙卦：危險退散<br>化險為夷之卦，但人心過於渙散需要整治。<br>雖然可以濟險，但諸事難成";
        getS[7][6]="益卦：良緣天定<br>感情相輔相成<br>可以考慮關係更進一步。";
        getS[7][7]="巽卦：柔順而漸進<br>小事可亨通，柔順慢慢來，諸事皆可成。<br>凡事記得再三叮嚀，有市利三倍之象";
        }


function submit(){
    var str = document.getElementById("n1").value;
    var res = str.split(" ", 6);
    document.write(res+"<br>");

    var yau1=res[5];
    var a = Math.floor(yau1/100);
    var b = Math.floor((yau1-a*100)/10);
    var c = Math.floor(yau1-a*100-b*10);
    var d= a+b+c;
    var e = Math.floor(d/10);
    var f = Math.floor(d-e*10);
    var g = e+f;
    var changeNum1;
    var yautop1;
    var yauCtop1;
   if  (g%2===0){
       if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3 ){
        yautop1=2;yauCtop1=1;changeNum1=1;
        document.write("<img src='yinchange.jpg' />"+"<br>");}
    
       else if (a%2+b%2+c%2===1 ||a%2+b%2+c%2===2  ){
        yautop1=2;yauCtop1=2;changeNum1=0;
        document.write("<img src='yin.jpg' />"+"<br>");}
    
       else{
        yautop1=2;yauCtop1=2;changeNum1=0;
        document.write("<img src='yin.jpg' />"+"<br>");}
   }
   else if (g%2===1){
    if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3 ){
        yautop1=1;yauCtop1=2;changeNum1=1;
        document.write("<img src='yanchange.jpg' />"+"<br>");}
       else if (a%2+b%2+c%2===1 ||a%2+b%2+c%2===2  ){
        yautop1=1;yauCtop1=2;changeNum1=1;
        document.write("<img src='yanchange.jpg' />"+"<br>");}
 
       else{
        yautop1=1;yauCtop1=1;changeNum1=0;
        document.write("<img src='yan.jpg' />"+"<br>");}
    }
    else{
        yautop1=1;yauCtop1=1;changeNum1=0;
        document.write("<img src='yan.jpg' />"+"<br>");
    }
    document.write("<br />");
    var yau2=res[4];
    var a = Math.floor(yau2/100);
    var b = Math.floor((yau2-a*100)/10);
    var c = Math.floor(yau2-a*100-b*10);
    var d= a+b+c;
    var e = Math.floor(d/10);
    var f = Math.floor(d-e*10);
    var g = e+f;
    var changeNum2;
    var yautop2;
    var yauCtop2;
    if  (g%2===0){
        if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3 ){
        yautop2=2;yauCtop2=1;changeNum2=1;
         document.write("<img src='yinchange.jpg' />"+"<br>");}
 
        else if (a%2+b%2+c%2===1 || a%2+b%2+c%2===2 ){
            yautop2=2;yauCtop2=2;changeNum2=0;
         document.write("<img src='yin.jpg' />"+"<br>");}
        else{
            yautop2=2;yauCtop2=2;changeNum2=0;
         document.write("<img src='yin.jpg' />"+"<br>");}
    }
    else {
     if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3 ){
        yautop2=1;yauCtop2=2;changeNum2=1;
        document.write("<img src='yanchange.jpg' />"+"<br>");}

        else if (a%2+b%2+c%2===1 || a%2+b%2+c%2===2 ){
            yautop2=1;yauCtop2=1;changeNum2=0;
         document.write("<img src='yan.jpg' />"+"<br>");}
        else{
            yautop2=1;yauCtop2=1;changeNum2=0;
         document.write("<img src='yan.jpg' />"+"<br>");}
     }
    document.write("<br />");
    var yau3=res[3];
    var a = Math.floor(yau3/100);
    var b = Math.floor((yau3-a*100)/10);
    var c = Math.floor(yau3-a*100-b*10);
    var d= a+b+c;
    var e = Math.floor(d/10);
    var f = Math.floor(d-e*10);
    var g = e+f;
    var changeNum3;
    var yautop3;
    var yauCtop3;

    if  (g%2===0){
        if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3 ){
            yautop3=2;yauCtop3=1;changeNum3=1;
         document.write("<img src='yinchange.jpg' />"+"<br>");}
 
        else if (a%2+b%2+c%2===1 || a%2+b%2+c%2===2 ){
            yautop3=2;yauCtop3=2;changeNum3=0;
         document.write("<img src='yin.jpg' />"+"<br>");}
        else{
            yautop3=2;yauCtop3=2;changeNum3=0;
         document.write("<img src='yin.jpg' />"+"<br>");}
    }
    else {
     if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3){
        yautop3=1;yauCtop3=2;changeNum3=1;
        document.write("<img src='yanchange.jpg' />"+"<br>");}

        else if (a%2+b%2+c%2===1 || a%2+b%2+c%2===2){
            yautop3=1;yauCtop3=1;changeNum3=0;
         document.write("<img src='yan.jpg' />"+"<br>");}
        else{
            yautop3=1;yauCtop3=1;changeNum3=0;
         document.write("<img src='yan.jpg' />"+"<br>");}
     }
    document.write("<br />");
    var yau4=res[2];
    var a = Math.floor(yau4/100);
    var b = Math.floor((yau4-a*100)/10);
    var c = Math.floor(yau4-a*100-b*10);
    var d= a+b+c;
    var e = Math.floor(d/10);
    var f = Math.floor(d-e*10);
    var g = e+f;
    var changeNum4;var yaudown1;var yauCdown1;
    if  (g%2===0){
        if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3){
            yaudown1=2;yauCdown1=1;changeNum4=1;
         document.write("<img src='yinchange.jpg' />"+"<br>");}

        else if (a%2+b%2+c%2===1 || a%2+b%2+c%2===2){
            yaudown1=2;yauCdown1=2;changeNum4=0;
         document.write("<img src='yin.jpg' />"+"<br>");}
        else{
            yaudown1=2;yauCdown1=2;changeNum4=0;
         document.write("<img src='yin.jpg' />"+"<br>");}
    }
    else {
     if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3){
        yaudown1=1;yauCdown1=2;changeNum4=1;
        document.write("<img src='yanchange.jpg' />"+"<br>");}

        else if (a%2+b%2+c%2===1 || a%2+b%2+c%2===2){
            yaudown1=1;yauCdown1=1;changeNum4=0;
         document.write("<img src='yan.jpg' />"+"<br>");}
        else{
            yaudown1=1;yauCdown1=1;changeNum4=0;
         document.write("<img src='yan.jpg' />"+"<br>");}
     }
    document.write("<br />");
    var yau5=res[1];
    var a = Math.floor(yau5/100);
    var b = Math.floor((yau5-a*100)/10);
    var c = Math.floor(yau5-a*100-b*10);
    var d= a+b+c;
    var e = Math.floor(d/10);
    var f = Math.floor(d-e*10);
    var g = e+f;
    var changeNum5;var yaudown2;var yauCdown2;
    if  (g%2===0){
        if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3){
            yaudown2=2;yauCdown2=1;changeNum5=1;
         document.write("<img src='yinchange.jpg' />"+"<br>");}

        else if (a%2+b%2+c%2===1 || a%2+b%2+c%2===2){
            yaudown2=2;yauCdown2=2;changeNum5=0;
         document.write("<img src='yin.jpg' />"+"<br>");}
        else{
            yaudown2=2;yauCdown2=2;changeNum5=0;
         document.write("<img src='yin.jpg' />"+"<br>");}
    }
    else {
     if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3){
        yaudown2=1;yauCdown2=2;changeNum5=1;
        document.write("<img src='yanchange.jpg' />"+"<br>");}
 
        else if (a%2+b%2+c%2===1 || a%2+b%2+c%2===2){
            yaudown2=1;yauCdown2=1;changeNum5=0;
         document.write("<img src='yan.jpg' />"+"<br>");}
        else{
            yaudown2=1;yauCdown2=1;changeNum5=0;
         document.write("<img src='yan.jpg' />"+"<br>");}
     }
    document.write("<br />");
    var yau6=res[0];
    var a = Math.floor(yau6/100);
    var b = Math.floor((yau6-a*100)/10);
    var c = Math.floor(yau6-a*100-b*10);
    var d= a+b+c;
    var e = Math.floor(d/10);
    var f = Math.floor(d-e*10);
    var g = e+f;
    var changeNum6;var yaudown3;var yauCdown3;
    if  (g%2===0){
        if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3){
            yaudown3=2;yauCdown3=1;changeNum6=1;
         document.write("<img src='yinchange.jpg' />"+"<br>");}
 
        else if (a%2+b%2+c%2===1 || a%2+b%2+c%2===2){
            yaudown3=2;yauCdown3=2;changeNum6=0;
         document.write("<img src='yin.jpg' />"+"<br>");}
        else{
            yaudown3=2;yauCdown3=2;changeNum6=0;
         document.write("<img src='yin.jpg' />"+"<br>");}
    }
    else {
     if (a%2+b%2+c%2===0 || a%2+b%2+c%2===3){
        yaudown3=1;yauCdown3=2;changeNum6=1;
        document.write("<img src='yanchange.jpg' />"+"<br>");}
 
        else if (a%2+b%2+c%2===1 || a%2+b%2+c%2===2){
            yaudown3=1;yauCdown3=1;changeNum6=0;
         document.write("<img src='yan.jpg' />"+"<br>");}
        else{
            yaudown3=1;yauCdown3=1;changeNum6=0;
         document.write("<img src='yan.jpg' />"+"<br>");}
     }

     var mainguaTop=yautop1*100+yautop2*10+yautop3;
     var mainguaDown=yaudown1*100+yaudown2*10+yaudown3;
     var chguaUp=yauCtop1*100+yauCtop2*10+yauCtop3;
     var chguaDown=yauCdown1*100+yauCdown2*10+yauCdown3;
     var changeNum=changeNum1+changeNum2+changeNum3+changeNum4+changeNum5+changeNum6;
     var upNum1;var downNum1;var upNum2;var downNum2;
     switch(mainguaTop){
         case 111:upNum1=0;break;case 222:upNum1=1;break;case 211:upNum1=2;break;case 122:upNum1=3;break;
         case 121:upNum1=4;break;case 212:upNum1=5;break;case 221:upNum1=6;break;case 112:upNum1=7;break;
     }
     switch(mainguaDown){
         case 111:downNum1=0;break;case 222:downNum1=1;break;case 211:downNum1=2;break;case 122:downNum1=3;break;
         case 121:downNum1=4;break;case 212:downNum1=5;break;case 221:downNum1=6;break;case 112:downNum1=7;break;
     }
     switch(chguaUp){
         case 111:upNum2=0;break;case 222:upNum2=1;break;case 211:upNum2=2;break;case 122:upNum2=3;break;
         case 121:upNum2=4;break;case 212:upNum2=5;break;case 221:upNum2=6;break;case 112:upNum2=7;break;
     }
     switch(chguaDown){
         case 111:downNum2=0;break;case 222:downNum2=1;break;case 211:downNum2=2;break;case 122:downNum2=3;break;
         case 121:downNum2=4;break;case 212:downNum2=5;break;case 221:downNum2=6;break;case 112:downNum2=7;break;
     }
     var getGua=new Array();
     {getGua[0]=new Array();getGua[0][0]="乾  ";getGua[0][1]="否  ";getGua[0][2]="履  ";getGua[0][3]="遯  ";getGua[0][4]="同人";getGua[0][5]="訟  ";getGua[0][6]="無妄";getGua[0][7]="姤  ";
     getGua[1]=new Array();getGua[1][0]="泰  ";getGua[1][1]="坤  ";getGua[1][2]="臨  ";getGua[1][3]="謙  ";getGua[1][4]="明夷";getGua[1][5]="師  ";getGua[1][6]="復  ";getGua[1][7]="升  ";
     getGua[2]=new Array();getGua[2][0]="夬  ";getGua[2][1]="萃  ";getGua[2][2]="兌  ";getGua[2][3]="咸  ";getGua[2][4]="革  ";getGua[2][5]="困  ";getGua[2][6]="隨  ";getGua[2][7]="大過";
     getGua[3]=new Array();getGua[3][0]="大畜";getGua[3][1]="剝  ";getGua[3][2]="損  ";getGua[3][3]="艮  ";getGua[3][4]="賁  ";getGua[3][5]="蒙  ";getGua[3][6]="頤  ";getGua[3][7]="蠱  ";
     getGua[4]=new Array();getGua[4][0]="大有";getGua[4][1]="晉  ";getGua[4][2]="睽  ";getGua[4][3]="旅  ";getGua[4][4]="離  ";getGua[4][5]="未濟";getGua[4][6]="噬嗑";getGua[4][7]="鼎  ";
     getGua[5]=new Array();getGua[5][0]="需  ";getGua[5][1]="比  ";getGua[5][2]="節  ";getGua[5][3]="蹇  ";getGua[5][4]="既濟";getGua[5][5]="坎  ";getGua[5][6]="屯  ";getGua[5][7]="井  ";
     getGua[6]=new Array();getGua[6][0]="大壯";getGua[6][1]="豫  ";getGua[6][2]="歸妹";getGua[6][3]="小過";getGua[6][4]="豐  ";getGua[6][5]="解  ";getGua[6][6]="震  ";getGua[6][7]="恒  ";
     getGua[7]=new Array();getGua[7][0]="小畜";getGua[7][1]="觀  ";getGua[7][2]="中孚";getGua[7][3]="漸  ";getGua[7][4]="家人";getGua[7][5]="渙  ";getGua[7][6]="益  ";getGua[7][7]="巽  ";
     }
     
     {document.write("<br><font size=5><b>"+getGua[upNum1][downNum1]+"卦　　變　　");
     document.write(getGua[upNum2][downNum2]+"卦</font></b><br>");
     }
     
     if(getGua[upNum1][downNum1]==getGua[upNum2][downNum2]){
         document.write("<br><font size=4>"+getS[upNum1][downNum1]+"</font></b>");
     }
     else{
         document.write("<br />");
         document.write("<br><font size=4>"+getS[upNum1][downNum1]+"</font></b>");
         document.write("<br />");
         document.write("<br><font size=4>"+getS[upNum2][downNum2]+"</font></b>");
     }
 
}