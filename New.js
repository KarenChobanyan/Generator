
let questionList = [{ "Հարց 1\nՈ՞րն է Ռուսաստանի Դաշնության մայրաքաղաքը։\na)Մինսկ       b) Մոսկվա \nc)Կիև            d)Սանկտ-Պետերբուրգ": "b" }];
questionList.push({ "Հարց 2 \nՆշվածներից ո՞ր ֆիլմն է նկարահանվել Գյուրիում։\na)Մենք ենք մեր սարերը          b)Երջանկության մեխանիկա\nc)Մեր մանկության տանգոն     d)Ռեմբո 2": "c" });
questionList.push({ "Հարց 3\nՆշվածներից ո՞րի հեղինակը չէ՜ Հ.Թումանյանը։\na)`Գիքոր`                    b)`Աբու Լալա Մահարի`\nc)`Թմբկաբերդի առումը`         d)`Շունն ու կատուն`": "b" });
questionList.push({ "Հարց 4\n Ե՞րբ է հռչակվել Հայաստանի առաջին հանրապետությունը։\na)1920թ Նոյեմբերի 7-ին     b)1991թ սեպտեմբերի 21-ին\nc)Մ.Թ.Ա 3րդ դար                d)1918թ Մայիսի 28-ին": "d" })
questionList.push({ "Հարց 5 \nՆշված կենդանիներից ո՞րն ունի ամենաերկար լեզուն։\na)Արջ              b)Վագր\nc)Ընձուղտ       d)Աքլոր": "c" });
questionList.push({ "Հարց 6\nԻ՞նչ անունով է ավեի շատ հայտնի «Պոլիգրաֆ» կոչվող սարքը։\na)Քսերոքս      b)Ստի դետեկոր\n c)Ռադար        d)Գծագրական գործիք": "b" });
questionList.push({ "Հարց 7 \nՆշվածներից ո՞րը ծրագրավորման լեզու չէ։\na)PHP      b)Java Script\nc)CSS      d)C#": "c" });
questionList.push({ "Հարց 8\nՈ՞ր հանքանյութի անունն է ծագել հունարեն 'գրում եմ' բառից։\na)Ասբեստ      b)Ագաթ\nc)Գրաֆիտ      d)նռնաքար": "c" });
questionList.push({ "Հարց 9 \nՈ՞ր երկիրն է կոչվում «հազար լճերի երկիր»։\n a)Շվեդիա        b)Ֆինլանդիա\nc)Նորվեգիա      d)Իսլանդիա": "b" });
questionList.push({ "Հարց 10 \nԱյս գրողներից ո՞վ է մասնակցել առաջին համաշխարհային պատերազմին։\na)Լև Տոլստոյ        b)Մարկ Տվեն\nc)Էռնեստ Հեմիգուեյ  d)Չարլզ Դիքենս": "c" });
questionList.push({ "Հարց 11  \nԻտալերենից թարգմանաբար «վերմիշել» նշանակում է...։\na)Ծղոտներ        b)Թելեր\nc)Լարեր           d)Որդեր": "d" });


const rightAnswers = new Array
rightAnswers.push("`b)Մոսկվա`", `c)Մենք ենք մեր սարերը`, `b)"Աբու Լալա Մահարի"`, `d)1918թ Մայիսի 28-ին`, `c)Ընձուղտ`, ` b)Ստի դետեկոր`, `c)CSS`, `c)Գրաֆիտ`, `b)Ֆինլանդիա`, `c)Էռնեստ Հեմիգուեյ`, `d)Որդեր`)
currentPoint = [1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
const helpTypes = ["50/50", "call", "hall"]
const answersFiftyFifty = [[`a)Մինսկ`, `b) Մոսկվա`], [`a)Մենք ենք մեր սարերը`, `c)Մեր մանկության տանգոն`], [`b)"Աբու Լալա Մահարի"`, `d)"Շունն ու կատուն"`], ["a)1920թ Նոյեմբերի 7-ին ", "d)1918թ Մայիսի 28-ին"],
[" b)Վագր", "c)Ընձուղտ"], [" b)Ստի դետեկոր", "d)Գծագրական գործիք"], ["c)CSS", "d)C#"], ["b)Ագաթ", "c)Գրաֆիտ"], [" b)Ֆինլանդիա", "d)Իսլանդիա"], ["a)Լև Տոլստոյ", "c)Էռնեստ Հեմիգուեյ"], ["a)Ծղոտներ", "d)Որդեր"]]


function* questions() {
    while (true) {
        yield prompt(Object.keys(questionList[0]))
    }
};

function* useFiftyFifty() {
    while (helpTypes.includes("50/50")) {
        let currentString = Object.keys(questionList[0]).toString().slice(0, Object.keys(questionList[0]).toString().indexOf("a"))
        yield prompt(currentString + `\n${answersFiftyFifty[0].join("     ")}`)
    }
};

function* chooseHelp() {
    while (true) {
        yield prompt(`Դոուք ունեք օգնության հետևյալ հնարավորություններըշ\n` + helpTypes.join("    "))
    }
}
function* hallHelp() {
    while (helpTypes.includes("hall")) {
        let index = 0
        let arr = []
        let options = ["a", "b", "c", "d"]
        while (index < 100) {
            arr.push(parseInt(Math.random() * 4))
            index++
        }
        let newArray = []
        let forConsole = []
        newArray.push(arr.filter(el => el == 0))
        newArray.push(arr.filter(el => el == 1))
        newArray.push(arr.filter(el => el == 2))
        newArray.push(arr.filter(el => el == 3))
        newArray.sort((a, b) => b.length - a.length)
        options.splice(options.indexOf(Object.values(questionList[0]).toString()), 1)
        forConsole.push(Object.values(questionList[0]).toString() + `)${newArray[0].length}% `)
        let num = Math.floor(Math.random() * options.length)
        forConsole.push(`${options[num]}) ${newArray[1].length}%`)
        options.splice(num, 1)
        num = Math.floor(Math.random() * options.length)
        forConsole.push(`${options[num]}) ${newArray[2].length}%`)
        options.splice(num, 1)
        forConsole.push(`${options[0]}) ${newArray[3].length}%`)
        forConsole.sort()
        yield alert(`Դահլիճի պատասխանն է՝\n` + forConsole[0] + "        " + forConsole[1] + "\n" + forConsole[2] + "       " + forConsole[3])

    }
};

function* callFriend() {
    while (helpTypes.includes("call")) {
        yield alert("Ձեր ընկերոջ պատասխանն է՝ " + "\n              " + answersFiftyFifty[0].find(el => el.startsWith(Object.values(questionList[0])))
        )
    }
};

function getRightAnswer(a) {
    alert(`Ո՜չ,դուք սխալվեցիք և ճիշտ պատասխանն է ${a}`)
};

let sum = 0
let untouchable = 0
//let inGame = true
let askQuestion = questions()
let currentQuestion = null
let helpMe = null

alert("Բարի գալուստ ով է ուզում դառնալ միլիոնատեր ինտելեկտուալ խաղ\nխաղի կանոններն են՝\n*Յուրաքանչյուր փուլում դու ունես հնարավորություն դադարեցնել խաղը և տանալ ընթացիկ միավորը՝մուտքագրելով ՝pass՝ տեքստը\n*Խաղի ընթացքում դու կարող ես օգտվել օգնության հնարավորություններից մուտքագրելով ՝help՝\n*Յուրաքանչյուր փուլում հնարավոր է օգտագօրծել օգնության հնարավորություններից միայն մեկը\n*Հարցերին կարող ես պատասխանել a,b,c,d տարբերակով")


while (questionList[0] !== undefined) {
    currentQuestion = askQuestion.next()
    if (currentQuestion.value == Object.values(questionList[0])) {
        sum = currentPoint[0]
        questionList.shift([0])
        rightAnswers.shift([0])
        currentPoint.shift([0])
        answersFiftyFifty.shift([0])
        if (sum == 32000 || sum == 125000 || sum == 1000000) {
            untouchable = sum
        }
        alert(`Շնորհավոր:
    Դուք վաստակեցիք ${sum} միավոր`)
    }
    else if (currentQuestion.value == "help") {
        helpMe = chooseHelp()
        currentQuestion = helpMe.next()
        if (currentQuestion.value == "50/50") {
            helpMe = useFiftyFifty()
            currentQuestion = helpMe.next()
            helpTypes.splice(helpTypes.indexOf("50/50"), 1)
            if (currentQuestion.value == Object.values(questionList[0])) {
                sum = currentPoint[0]
                questionList.shift([0])
                rightAnswers.shift([0])
                currentPoint.shift([0])
                answersFiftyFifty.shift([0])
                if (sum == 32000 || sum == 125000 || sum == 1000000) {
                    untouchable = sum
                }
                alert(`Շնորհավոր:
            Դուք վաստակեցիք ${sum} միավոր`)
            } else {
                questionList[0] = undefined
                getRightAnswer(rightAnswers[0])
            }
        } else if (currentQuestion.value == "hall") {
            helpMe = hallHelp()
            helpMe.next()
            helpTypes.splice(helpTypes.indexOf("hall"), 1)
        } else if (currentQuestion.value == "call") {
            helpMe = callFriend()
            helpMe.next()
            helpTypes.splice(helpTypes.indexOf("call"), 1)
        }
    } else if(currentQuestion.value == "pass"){
        untouchable=sum
        questionList[0] = undefined
    }else {
        questionList[0] = undefined
        getRightAnswer(rightAnswers[0])
    }
}

alert(`Խաղն ավարտվեց \n Դուք վաստակեցիք ${untouchable} միավոր`)

console.log("GAME OVER");

































