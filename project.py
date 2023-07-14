def find_and_print(messages):
    keyWord = ["18 years old","college student","legal age","vote"]
    print(keyWord)
    conversation = list(messages.values())
    fullName = list(messages.keys())
    for index in range(len(conversation)):
        for key in range(len(keyWord)):
            if(keyWord[key] in conversation[index]):
                print('%s'%fullName[index])
            
find_and_print({
"Bob":"My name is Bob. I'm 18 years old.",
"Mary":"Hello, glad to meet you.",
"Copper":"I'm a college student. Nice to meet you.",
"Leslie":"I am of legal age in Taiwan.",
"Vivian":"I will vote for Donald Trump next week",
"Jenny":"Good morning."
})

def calculate_sum_of_bonus(data):
    employee = data["employees"]
    bonus = 0
    for index in range(len(employee)):
        salary = str(employee[index]["salary"])
        performance = employee[index]["performance"]
        if "USD" in salary:
            salary = int(salary.replace("USD",""))*30
        else:
            salary = int(''.join(filter(str.isdigit,salary)))
        if performance == "above average":
            bonus += salary*0.1
        elif performance == "average":
            bonus += salary*0.05
    print(int(bonus))
calculate_sum_of_bonus({
"employees":[
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
]
}) 

def func(*data):
    secondWord = []
    for index in range(len(data)):#取得data[index]
        fullName = data[index]
        secondWord.append(fullName[1])
    result = "false"
    for num in range(len(secondWord)):
        if secondWord.count(secondWord[num])>=2:
            continue
        else:
            result = data[num]
    if result == "false":
        result = "沒有"
    print(result)        
            
func("彭⼤牆", "王明雅", "吳明") 
func("郭靜雅", "王立強", "林靜宜", "郭立恆", "林花花") 
func("郭宣雅", "林靜宜", "郭宣恆", "林靜花")

def get_number(index):
    if(index % 2 == 1):
        print(int(((index+1)/2)*3+1))
    else:
        print(int((index/2)*3))
get_number(1) 
get_number(5) 
get_number(10) 
