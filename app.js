// While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
// let a = 22;
// let b = 5;
// while (a >= b) {
//   a = a - b;
//   console.log(a);
// }

// While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
// let a = 40;
// let b = 5;
// let hisob = 0;
// while (a >= b) {
//   a = a - b;
//   hisob++;
// }
// console.log(hisob);

// While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.
// let n = 9;
// let power = 1;
// while (power < n) {
//   power = power * 3;
// }
// if (power === n) {
//   console.log("3 - ning darajasi");
// } else {
//   console.log("3 - ning darajasi emas!");
// }

// While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.
// let n = 23;
// let m = 5;
// let butunQism = 0;
// while (n >= m) {
//   n = n - m;
//   butunQism++;
// }
// let qoldiq = n;
// console.log("Butun qism:", butunQism);
// console.log("Qoldiq:", qoldiq);

// While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.
// let son = 1234;
// let reverse = 0;
// while (son > 0) {
//   reverse = reverse * 10 + (son % 10);
//   son = Math.trunc(son / 10);
// }
// console.log(reverse);

// While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.
// let son = 1239;
// let reverse = 0;
// while (son > 0) {
//   reverse += son % 10;
//   son = Math.trunc(son / 10);
// }
// console.log(reverse);

// While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.
// let son = 1412939;
// while (son > 0) {
//   const y = son % 10;
//   if (y == 2) {
//     console.log(true);
//     break;
//   }
//   son = Math.trunc(son / 10);
// }

// While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.
// let son = 8888881;
// while (son > 0) {
//   const y = son % 10;
//   if (y % 2 == 1) {
//     console.log(true);
//     break;
//   }
//   son = Math.trunc(son / 10);
// }

// While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
// Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan 1345431, 45788754
// let son = 1221;
// let son1 = son;
// let reverse = 0;
// while (son > 0) {
//   reverse = reverse * 10 + (son % 10);
//   son = Math.trunc(son / 10);
// }
// console.log(reverse == son1);

// While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
// let n = 4;
// let isPrime = true;
// let i = 2;
// while (i * i <= n) {
//   if (n % i === 0) {
//     isPrime = false;
//     break;
//   }
//   i++;
// }
// if (isPrime) {
//   console.log(" soni tub son.");
// } else {
//   console.log(" soni tub emas.");
// }

// Switch
// Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.
// let k = +prompt("Raqam kiriting.");
// switch (k) {
//   case 1:
//     console.log("yomon");
//     break;
//   case 2:
//     console.log("qoniqarsiz");
//     break;
//   case 3:
//     console.log("qoniqarli");
//     break;
//   case 4:
//     console.log("yahshi");
//     break;
//   case 5:
//     console.log("a'lo");
//     break;

//   default:
//     console.log("xato");
//     break;
// }

// Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")
// let oy = +prompt("Oyning raqamini kiriting.");
// let fasl;

// switch (oy) {
//   case 12:
//   case 1:
//   case 2:
//     fasl = "qish";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     fasl = "bahor";
//     break;
//   case 6:
//   case 7:
//   case 8:
//     fasl = "yoz";
//     break;
//   case 9:
//   case 10:
//   case 11:
//     fasl = "kuz";
//     break;
//   default:
//     fasl = "Noto'g'ri oy raqami! (1 dan 12 gacha bo'lishi kerak)";
// }
// console.log(oy + "-oy " + fasl + " fasliga tegishli.");

// Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.
// let oy = +prompt("Bu yerda 1 dan 12 gacha bo'lgan oy raqami.");
// let kunlar;

// switch (oy) {
//   case 1: // Yanvar
//   case 3: // Mart
//   case 5: // May
//   case 7: // Iyul
//   case 8: // Avgust
//   case 10: // Oktabr
//   case 12: // Dekabr
//     kunlar = 31;
//     break;
//   case 4: // Aprel
//   case 6: // Iyun
//   case 9: // Sentabr
//   case 11: // Noyabr
//     kunlar = 30;
//     break;
//   case 2: // Fevral
//     kunlar = 28;
//     break;
//   default:
//     kunlar = -1; // noto‘g‘ri oy raqami
// }

// if (kunlar === -1) {
//   console.log("Noto'g'ri oy raqami! (1 dan 12 gacha bo'lishi kerak)");
// } else {
//   console.log(oy + "-oyda " + kunlar + " kun bor.");
// }

// Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.
// let birlik = 2;
// let uzunlik = 2.5;

// switch (birlik) {
//   case 1:
//     console.log(`${uzunlik / 10} metr (desimetr)`);
//     break;
//   case 2:
//     console.log(`${uzunlik * 1000} metr (kilometr)`);
//     break;
//   case 3:
//     console.log(`${uzunlik} metr`);
//     break;
//   case 4:
//     console.log(`${uzunlik / 1000} metr (millimetr)`);
//     break;
//   case 5:
//     console.log(`${uzunlik / 100} metr (santimetr)`);
//     break;
//   default:
//     console.log("Noto'g'ri birlik raqami! 1 dan 5 gacha bo'lishi kerak.");
// }

// Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu birlikdagi og`irlik qiymati berilgan. Og`irlikni kilogramda ifodalofchi programma tuzilsin.
// let birlik = 1;
// let ogirlik = 2.5;

// switch (birlik) {
//   case 1:
//     console.log(`${ogirlik} kilogramm.`);
//     break;
//   case 2:
//     console.log(`${ogirlik / 1_000_000} kilogramm (milligramm).`);
//     break;
//   case 3:
//     console.log(`${ogirlik / 1000} kilogramm (gramm).`);
//     break;
//   case 4:
//     console.log(`${ogirlik * 1000} kilogramm (tonna).`);
//     break;
//   case 5:
//     console.log(`${ogirlik * 100} kilogramm (sentner).`);
//     break;
//   default:
//     console.log("Noto'g'ri birlik raqami! 1 dan 5 gacha bo'lishi kerak.");
// }

// Case6. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin. Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.
// let D = 20;
// let M = 2;

// let oyNomi = "";
// let maxKun = 0;

// switch (M) {
//   case 1:
//     oyNomi = "Yanvar";
//     maxKun = 31;
//     break;
//   case 2:
//     oyNomi = "Fevral";
//     maxKun = 28;
//     break;
//   case 3:
//     oyNomi = "Mart";
//     maxKun = 31;
//     break;
//   case 4:
//     oyNomi = "Aprel";
//     maxKun = 30;
//     break;
//   case 5:
//     oyNomi = "May";
//     maxKun = 31;
//     break;
//   case 6:
//     oyNomi = "Iyun";
//     maxKun = 30;
//     break;
//   case 7:
//     oyNomi = "Iyul";
//     maxKun = 31;
//     break;
//   case 8:
//     oyNomi = "Avgust";
//     maxKun = 31;
//     break;
//   case 9:
//     oyNomi = "Sentabr";
//     maxKun = 30;
//     break;
//   case 10:
//     oyNomi = "Oktabr";
//     maxKun = 31;
//     break;
//   case 11:
//     oyNomi = "Noyabr";
//     maxKun = 30;
//     break;
//   case 12:
//     oyNomi = "Dekabr";
//     maxKun = 31;
//     break;
//   default:
//     oyNomi = "Noto'g'ri oy";
//     maxKun = -1;
// }

// if (maxKun === -1) {
//   console.log("Oy raqami noto'g'ri! 1 dan 12 gacha bo'lishi kerak.");
// } else if (D < 1 || D > maxKun) {
//   console.log(
//     `${oyNomi} oyida ${maxKun} kun bor. Siz noto‘g‘ri kun kiritdingiz.`
//   );
// } else {
//   console.log(`${D} - ${oyNomi}`);
// }

// Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.
// let D = 4;
// let M = 4;

// let maxKun = 0;
// let keyingiKun = 1;
// let keyingiOy = M + 1;

// switch (M) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     maxKun = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     maxKun = 30;
//     break;
//   case 2:
//     maxKun = 28;
//     break;
//   default:
//     maxKun = -1;
// }

// if (maxKun === -1) {
//   console.log("Noto'g'ri oy raqami!");
// } else if (D < 1 || D > maxKun) {
//   console.log(`Noto'g'ri kun! ${M}-oyda maksimal ${maxKun} kun bor.`);
// } else {
//   if (D === maxKun) {
//     keyingiKun = 1;
//     keyingiOy = M === 12 ? 1 : M + 1;
//   } else {
//     keyingiKun = D + 1;
//     keyingiOy = M;
//   }
//   console.log(`${keyingiKun} - ${keyingiOy}`);
// }

// Case8. Robot faqat to`rtta tomonga ko`cha oladi ("s"-shimol, "j"-janub, "q"-sharq, "g"-g'arb) va uchta raqamli kamanda: 0-harakni davom ettir, 1-chapga buril, 2-o`ngga buril. Y - robot yo`nalishi va K - kamanda berilgan. Berilgan kamanda bajarilgandan keying robot holatini aniqlovchi programma tuzilsin.
// let Y = "s";
// let K = "102";

// for (let i = 0; i < K.length; i++) {
//   let cmd = K[i];

//   if (cmd !== "0") {
//     switch (Y) {
//       case "s":
//         Y = cmd === "1" ? "g" : "q";
//         break;
//       case "j":
//         Y = cmd === "1" ? "q" : "g";
//         break;
//       case "q":
//         Y = cmd === "1" ? "s" : "j";
//         break;
//       case "g":
//         Y = cmd === "1" ? "j" : "s";
//         break;
//     }
//   }
// }

// console.log("Robotning yangi yo'nalishi:", Y);

// Case9. O'yin kartasi turlari berilgan 1-g`isht, 2-olma, 3-chillak, 4-qarg`a. 10 lik kartadan katta kartalar quyidagi qiymatlarni o`zlashtirgan: 11-valet, 12-dama, 13-qirol, 14-tuz. Ikkita butun son berilgan N-karta qiymati (6≤ N ≤14), M-karta turi(1≤M ≤4) kiritilganda karta nomlarini (masalan: "olti qarg`a”) chiqarib beruvchi programma tuzilsin
// let N = 12;
// let M = 2;

// let valueName;
// let suitName;

// switch (N) {
//   case 6:
//     valueName = "olti";
//     break;
//   case 7:
//     valueName = "yetti";
//     break;
//   case 8:
//     valueName = "sakkiz";
//     break;
//   case 9:
//     valueName = "to'qqiz";
//     break;
//   case 10:
//     valueName = "o'n";
//     break;
//   case 11:
//     valueName = "valet";
//     break;
//   case 12:
//     valueName = "dama";
//     break;
//   case 13:
//     valueName = "qirol";
//     break;
//   case 14:
//     valueName = "tuz";
//     break;
//   default:
//     valueName = null;
// }

// switch (M) {
//   case 1:
//     suitName = "g'isht";
//     break;
//   case 2:
//     suitName = "olma";
//     break;
//   case 3:
//     suitName = "chillak";
//     break;
//   case 4:
//     suitName = "qarg'a";
//     break;
//   default:
//     suitName = null;
// }

// if (valueName === null || suitName === null) {
//   console.log("Karta qiymati yoki turi noto'g'ri kiritilgan!");
// } else {
//   console.log(valueName + " " + suitName);
// }

// Case10. O`quv masalalarini aniqlovchi 10-40 gacha butun son berilgan. Son kiritilganda unga mos so`zlarda ifodalovchi programma tuzilsin. ("yigirmata masala", "o`n uchta masala" va h.k.)
// let n = 23;

// let tens = "";
// let units = "";
// let result = "";

// switch (n) {
//   case 10:
//     result = "o'n";
//     break;
//   case 11:
//     result = "o'n bir";
//     break;
//   case 12:
//     result = "o'n ikki";
//     break;
//   case 13:
//     result = "o'n uch";
//     break;
//   case 14:
//     result = "o'n to'rt";
//     break;
//   case 15:
//     result = "o'n besh";
//     break;
//   case 16:
//     result = "o'n olti";
//     break;
//   case 17:
//     result = "o'n yetti";
//     break;
//   case 18:
//     result = "o'n sakkiz";
//     break;
//   case 19:
//     result = "o'n to'qqiz";
//     break;
// }

// if (n < 10 || n > 19) {
//   switch (Math.floor(n / 10)) {
//     case 2:
//       tens = "yigirma";
//       break;
//     case 3:
//       tens = "o'ttiz";
//       break;
//     case 4:
//       tens = "qirq";
//       break;
//   }

//   switch (n % 10) {
//     case 1:
//       units = "bir";
//       break;
//     case 2:
//       units = "ikki";
//       break;
//     case 3:
//       units = "uch";
//       break;
//     case 4:
//       units = "to'rt";
//       break;
//     case 5:
//       units = "besh";
//       break;
//     case 6:
//       units = "olti";
//       break;
//     case 7:
//       units = "yetti";
//       break;
//     case 8:
//       units = "sakkiz";
//       break;
//     case 9:
//       units = "to'qqiz";
//       break;
//   }

//   if (units === "") {
//     result = tens;
//   } else {
//     result = tens + " " + units;
//   }
// }

// console.log(result + " ta masala");

// Case11. 100-999 gacha oraliqdagi sonlarni so'zlarda ifodalovchi programma tuzilsin. (masalan: 123- "bir yuz yigirma uch").
// let n = 123;

// let hundreds = "";
// let tens = "";
// let units = "";
// let result = "";

// switch (Math.floor(n / 100)) {
//   case 1:
//     hundreds = "bir yuz";
//     break;
//   case 2:
//     hundreds = "ikki yuz";
//     break;
//   case 3:
//     hundreds = "uch yuz";
//     break;
//   case 4:
//     hundreds = "to'rt yuz";
//     break;
//   case 5:
//     hundreds = "besh yuz";
//     break;
//   case 6:
//     hundreds = "olti yuz";
//     break;
//   case 7:
//     hundreds = "yetti yuz";
//     break;
//   case 8:
//     hundreds = "sakkiz yuz";
//     break;
//   case 9:
//     hundreds = "to'qqiz yuz";
//     break;
// }

// let lastTwo = n % 100;

// switch (lastTwo) {
//   case 10:
//     tens = "o'n";
//     units = "";
//     break;
//   case 11:
//     tens = "o'n bir";
//     units = "";
//     break;
//   case 12:
//     tens = "o'n ikki";
//     units = "";
//     break;
//   case 13:
//     tens = "o'n uch";
//     units = "";
//     break;
//   case 14:
//     tens = "o'n to'rt";
//     units = "";
//     break;
//   case 15:
//     tens = "o'n besh";
//     units = "";
//     break;
//   case 16:
//     tens = "o'n olti";
//     units = "";
//     break;
//   case 17:
//     tens = "o'n yetti";
//     units = "";
//     break;
//   case 18:
//     tens = "o'n sakkiz";
//     units = "";
//     break;
//   case 19:
//     tens = "o'n to'qqiz";
//     units = "";
//     break;
// }

// if (lastTwo < 10 || lastTwo > 19) {
//   switch (Math.floor(lastTwo / 10)) {
//     case 2:
//       tens = "yigirma";
//       break;
//     case 3:
//       tens = "o'ttiz";
//       break;
//     case 4:
//       tens = "qirq";
//       break;
//     case 5:
//       tens = "ellik";
//       break;
//     case 6:
//       tens = "oltmish";
//       break;
//     case 7:
//       tens = "yetmish";
//       break;
//     case 8:
//       tens = "sakson";
//       break;
//     case 9:
//       tens = "to'qson";
//       break;
//     default:
//       tens = "";
//   }

//   switch (lastTwo % 10) {
//     case 1:
//       units = "bir";
//       break;
//     case 2:
//       units = "ikki";
//       break;
//     case 3:
//       units = "uch";
//       break;
//     case 4:
//       units = "to'rt";
//       break;
//     case 5:
//       units = "besh";
//       break;
//     case 6:
//       units = "olti";
//       break;
//     case 7:
//       units = "yetti";
//       break;
//     case 8:
//       units = "sakkiz";
//       break;
//     case 9:
//       units = "to'qqiz";
//       break;
//     default:
//       units = "";
//   }
// }

// result = hundreds;
// if (tens !== "") {
//   result += " " + tens;
// }
// if (units !== "") {
//   result += " " + units;
// }

// console.log(result);

// Case12. Sharq kalendarida 60 yillik davr qabul qilingan. Yil muchali 5 ta rang (yashil, qizil, sariq, oq va qora) va 12 ta hayvon (sichqon, sigir, yo'lbars, quyon, ajdar, ilon, ot, qo`y, maymun, tovuq, it va to’ngizlardan) nomlarining kombinatsiyasidan kelib chiqadi. Yilning raqamiga qarab uning muchalini aniqlovchi programma tuzilsin. 1984-davr boshi: "Yashil sichqon yili".
// let year = 2007;

// let diff = year - 1984;

// let colorIndex = diff % 5;
// if (colorIndex < 0) colorIndex += 5;

// let animalIndex = diff % 12;
// if (animalIndex < 0) animalIndex += 12;

// let colorName = "";
// switch (colorIndex) {
//   case 0:
//     colorName = "yashil";
//     break;
//   case 1:
//     colorName = "qizil";
//     break;
//   case 2:
//     colorName = "sariq";
//     break;
//   case 3:
//     colorName = "oq";
//     break;
//   case 4:
//     colorName = "qora";
//     break;
// }

// let animalName = "";
// switch (animalIndex) {
//   case 0:
//     animalName = "sichqon";
//     break;
//   case 1:
//     animalName = "sigir";
//     break;
//   case 2:
//     animalName = "yo'lbars";
//     break;
//   case 3:
//     animalName = "quyon";
//     break;
//   case 4:
//     animalName = "ajdar";
//     break;
//   case 5:
//     animalName = "ilon";
//     break;
//   case 6:
//     animalName = "ot";
//     break;
//   case 7:
//     animalName = "qo'y";
//     break;
//   case 8:
//     animalName = "maymun";
//     break;
//   case 9:
//     animalName = "tovuq";
//     break;
//   case 10:
//     animalName = "it";
//     break;
//   case 11:
//     animalName = "to'ng'iz";
//     break;
// }

// console.log(year + " - yil: " + colorName + " " + animalName + " yili.");

// if else
// if1. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda o`zgartirilmasin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let son = 10;
// if (0 < son) {
//   son++;
//   console.log(son);
// } else {
//   console.log(son);
// }
