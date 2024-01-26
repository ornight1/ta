const { Client, Intents } = require("discord.js-selfbot-v13");
const Discord = require("discord.js-selfbot-v13");
const readline = require("readline-sync");
const m = require("moment-duration-format");
const exp = require("express");
const s = exp();

const client = new Client({
  checkUpdate: false,
});

s.all("parisut.tech/online", (req, res) => {
  res.send("Ready Dek");
});

s.listen(8080, () => {
  console.log("Port : 8080");
});

client.on("ready", async () => {
  if (global.dataWeather && global.dataWeather.current_weather) {
    global.temp = global.dataWeather.current_weather.temperature;
    global.wind = global.dataWeather.current_weather.windspeed;
  } else {
    global.temp = 25;
    global.wind = 3.5;
  }

  const num = parseFloat(
    (Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1),
  );
  const operator = Math.random() < 0.3 ? "+" : "-";

  setInterval(() => {
    const moment = require("moment");
    const created = moment().format("YYYY-MM-DD HH:mm:ss ");
    const change = [
      "https://cdn.discordapp.com/attachments/1068455072784199720/1192710624183058513/2bd15599b81fe5a41ca2c616cefe290b.jpg",
      "https://cdn.discordapp.com/attachments/1068455072784199720/1192710624950624256/09b735ac15018a592ba97eea6a564256.jpg",
      "https://cdn.discordapp.com/attachments/1068455072784199720/1192710625193898035/99bbeeaa49269caeb6775ee1cc33aed5.jpg",
      "https://cdn.discordapp.com/attachments/1068455072784199720/1192710625525235722/0567b67341660cc670af9c7c5b58ad62.jpg",
      "https://cdn.discordapp.com/attachments/1068455072784199720/1192710625810460803/764dfe5e51ea8eb53111063fddb7eaaf.jpg",
      "https://cdn.discordapp.com/attachments/1068455072784199720/1192710626036940891/9384e7ba9dda4faa4c9b832079b84340.jpg",
      "https://cdn.discordapp.com/attachments/1068455072784199720/1192710626317967441/b53e6f78c5389daca5c5b6986af54795.jpg",
      "https://cdn.discordapp.com/attachments/1068455072784199720/1192710626687070219/e4acf5e9a1bcc2ff6fd87d841dfa1552.jpg",
      "https://cdn.discordapp.com/attachments/1068455072784199720/1192710626926133380/e319a5ce8db04b73204114793de5cf16.jpg",
      "https://cdn.discordapp.com/attachments/1068455072784199720/1192710627144245299/f79073e619f2db8c819a86905d458a6f.jpg",
    ]; //รูปใหญ่
    const poop = [
      "https://cdn.discordapp.com/attachments/1114551993499918438/1122462459710681170/1095697715238797403.gif",
      "https://cdn.discordapp.com/attachments/1114551993499918438/1122462460817977395/1095697740543049819.gif",
      "https://cdn.discordapp.com/attachments/1114551993499918438/1122462460125921341/1095697719189844048.gif",
      "https://cdn.discordapp.com/attachments/1114551993499918438/1116029023957561425/1110570045454696509.gif",
    ]; // รูปเล็ก
    const change2 = [
      "- anmpuré # kon ;",
      "` o/n hr # ;",
      "- Люцифер топ $ ;",
      "- JasenSexhod $ ;",
    ]; // ชื่อสลับ
    const iooi = ["instagram", "instagram", "instagram", "instagram"]; // ชื่อ button1
    const iiio = [
      "https://www.instagram.com/dvdghx_x/",
      "https://www.instagram.com/dvdghx_x/",
      "https://www.instagram.com/dvdghx_x/",
      "https://www.instagram.com/dvdghx_x/",
    ]; // ลิ้ง button1

    const yyyt = ["@1 - tag purs", "- hard ; # hr", "/$/", "`ta ; luv"]; // ชื่อ button 2
    const ddds = [
      "https://www.youtube.com/watch?v=koso_NTIDK4",
      "https://www.youtube.com/watch?v=l58R_jiL6wM",
      "https://www.youtube.com/watch?v=c1O8LaOt7yU",
      "https://www.youtube.com/watch?v=c1O8LaOt7yU",
    ]; // ลิ้ง button 2
    const tyyy = yyyt[Math.floor(Math.random() * yyyt.length)]; // ชื่อ button 2
    const sddd = ddds[Math.floor(Math.random() * ddds.length)]; // ลิ้ง button 2
    const oooi = iiio[Math.floor(Math.random() * iiio.length)]; // button 1 ใส่ลิ้ง
    const ioii = iooi[Math.floor(Math.random() * iooi.length)]; // button 1 ใส่ชื่อ
    const popp = poop[Math.floor(Math.random() * poop.length)]; // รูปเล็ก
    const ssss = change[Math.floor(Math.random() * change.length)]; // รูปใหญ่
    const dwada = change2[Math.floor(Math.random() * change2.length)]; // ชื่อสลับคำ
    const r = new Discord.RichPresence()
      .setApplicationId("1112701450150232085")
      .setType("STREAMING")
      .setURL("https://www.youtube.com/watch?v=RMW98gOKGZs")
      .setState(`${dwada}`)
      .setName(`Youtube`)
      .setDetails(
        `〈 ${getTime()} 〉 ${moment().format("•〈 DD / MM / YYYY 〉")}`,
      )
      .setAssetsSmallImage(`${popp}`)
      .setAssetsLargeImage(`${ssss}`)
      .setAssetsLargeText(
        `🌡️ ${
          operator === "+"
            ? (global.temp + num).toFixed(1)
            : (global.temp - num).toFixed(1)
        } °C | 🍃 ${
          operator === "+"
            ? (global.wind + num).toFixed(1)
            : (global.wind - num).toFixed(1)
        } m/s`,
      )
      .setAssetsSmallText(`ping : ${Math.round(client.ws.ping)}`)
      //.addButton(`${ioii}`,`${oooi}`)

      .addButton(`${tyyy}`, `${sddd}`)
      .setStartTimestamp("1672545600" || Date.now())
      .setEndTimestamp("1704077999" || Date.now());
    client.user.setActivity(r);
  }, 7 * 1000); // อัพเดท ทุกๆ 7 วินาที
  console.log(`${client.user.username} Is Ready!`);
});

client.login(process.env.token);

let endTime = new Date().setHours(24 + 6, 0, 0, 0), //nextMidnight
  today = new Date().setHours(0, 0, 0, 0), //lastMidnight
  dayCount = Math.floor(
    (today - new Date(2023, 0).getTime()) / (24 * 60 * 60 * 1000),
  );

var date =
  new Date().getDate() +
  "/" +
  (new Date().getMonth() + 1) +
  "/" +
  new Date().getFullYear();
var time = new Date().getHours() + ":" + new Date().getMinutes();

let options = {
  timeZone: "Asia/Bangkok",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
};

function getDate() {
  return new Date()
    .toLocaleString([], options)
    .split(" ")[0]
    .replaceAll(",", "");
}
function getTime() {
  return new Date()
    .toLocaleString([], options)
    .split(" ")[1]
    .replaceAll(",", "");
}
