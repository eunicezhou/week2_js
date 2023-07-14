function findAndPrint(messages){
    // 將條件關鍵字列出來
    const keyWords = ["18 years old","college student","legal age","vote"];
    // 抓出參數的鍵名
    var keys = Object.keys(messages);
    // 抓出參數的鍵值
    var values = Object.values(messages);
    // 設定一個空陣列
    var line = [];

    // 以for迴圈遍歷參數鍵值是否與關鍵字match
    for(var i=0;i<=values.length-1;i++){
        for(var j=0;j<=keyWords.length-1;j++){
            if(values[i].match(keyWords[j])){
                // 若參數鍵值與關鍵字相合，就可將其相對應的鍵名放入空陣列中
                line.push(keys[i]);
                break;
            }else
                continue;
        } 
        continue;
    }
    console.log(String(line));
}
findAndPrint({
    "Bob":"My name is Bob. I'm 18 years old.",
    "Mary":"Hello, glad to meet you.",
    "Copper":"I'm a college student. Nice to meet you.",
    "Leslie":"I am of legal age in Taiwan.",
    "Vivian":"I will vote for Donald Trump next week",
    "Jenny":"Good morning."
});

function calculateSumOfBonus(data){
    var d = data["employees"];
    var bonus = 0;
    for (let i = 0 ; i < d.length ; i++){
        // 先將salary的值全部轉成字串
        var salary = String(d[i].salary);
        // 判斷salary字串中是否有"USD"，若有就將其乘以30。最後所有的salary都會被轉為數值
        if(salary.includes('USD')){
            newSalary = Number(salary.replace("USD",'')) * 30;
        }else{
            newSalary = Number(salary.replace(',',''));
        }
        var performance = d[i].performance;
        // 判斷員工表現，依照表現及薪資計算津貼
        if(performance == "above average"){
            bonus += newSalary * 0.1;
        }else if(performance == "average"){
            bonus += newSalary * 0.05;
        }
    }
    console.log(bonus);
}
calculateSumOfBonus({"employees":[
    {
    "name":"John",
    "salary":"1000USD",
    "performance":"above average",
    "role":"Engineer"
    },
    {
    "name":"Bob",
    "salary":60000,
    "performance":"average",
    "role":"CEO"
    },
    {
    "name":"Jenny",
    "salary":"50,000",
    "performance":"below average",
    "role":"Sales"
    }
    ]}); 

function func(...data){
    // 建立空陣列
    var sentance = [];
    var fullName;
    var secondWord;
    // 遍歷函式參數中每個字符串
    for (var i = 0;i<=data.length-1;i++){
        fullName = data[i].split();
        splitName = data[i].split("");
        // 取得字符串中的第二個字
        secondWord = splitName[1];
        if(secondWord){
            sentance.push(secondWord);
        } 
    }
    // 計算sentance中每個字符出現的次數
    var word = {};
    for (var j = 0;j<=sentance.length-1;j++){
        key = sentance[j];
            if(word[key]){
                // 假設word中有該字符
                word[key]++;
            }else{
                word[key]=1;
            }
    }
    
    for(var m = 0;m<Object.values(word).length;m++){
        // 取參數中每個名字的第二個字出現次數
        times = Object.values(word);
        keyWord =Object.keys(word);
        // 若出現次數不等於1直接跳回迴圈頂端，次數等於1者，繼續下面的for迴圈
        if(times[m]!==1){
            continue;
        }
        // 找出出現次數為1的對應參數名子
        var res = false;
        for(var a=0;a<data.length;a++){
            if(data[a].includes(keyWord[m])){
                res = data[a];
            }
        }  
    }
    if(!res){
        res = "沒有";
    }
    console.log(res);   
}
func("彭⼤牆", "王明雅", "吳明");
func("郭靜雅", "王立強", "林靜宜", "郭立恆", "林花花");
func("郭宣雅", "林靜宜", "郭宣恆", "林靜花")

function getNumber(index){
    if(index % 2 == 1){
        console.log(((index+1)/2)*3+1);
    }else{
        console.log((index/2)*3);
    }
}
getNumber(1);
getNumber(5);
getNumber(10);
    
    