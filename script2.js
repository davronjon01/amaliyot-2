
("use strick");

const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
};

for(let i = 0; i < 2; i++){
    const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
    b = prompt("Unga qancha baho bergan bo'lardingiz?");
    
    if(a != null && b != null && a !="" && b != "" && a.length < 50){
        personalNewsDB.news[a] = b;
        console.log("tayyor");
    } else {
        console.log("Error");
        i--;
    }
}
if(personalNewsDB.count < 10){
    console.log("Juda oz sonli malumot ko'rilibdi");
} else if(personalNewsDB.count >= 10 && personalNewsDB.count < 30){
    console.log("Siz klassik tomoshabinsiz");
} else if (personalNewsDB.count >= 30){
    console.log("Siz yangilklar ishqibozisiz");
} else {
    console.log("Xatolik yuz berdi");
}    

    console.log(personalNewsDB);











    