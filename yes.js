const febHolidays = [
    "Lieber Schatz, bitte fühle es",
"Bitte, das ist der Kreislauf der Liebe, fühle es richtig",
"Du bist mein Freund, du bist meine Liebe 😊",
"Du bist einer, und du bist tausend 🤩",
"In Kummer du, in Freude du 🤨",
"Du bist genug für die Reise des Lebens ❤",
"Ich habe dich mit voller Hingabe geliebt, ich liebe dich ❤️",
"Du bist mein Ein und Alles ✔",
"Du bist meine Seelenverwandte ✨💕",
"Und natürlich... warte, Baby.....",
"Meine zukünftige Frau 🤭",
"Ich werde immer für dich da sein",
"Egal wie weit wir voneinander entfernt sind 🥰",
"Ich verspreche, ich werde dich niemals betrügen",
"Du bist die schönste, süßeste, lustigste,",
"liebste Frau der Welt. 🤞✍",
"Mit einem Wort, du bist einfach perfekt. 😍",
"Ich bin der glücklichste Mann der Welt 🥰",
"Ich bin so dankbar, dass ich dich getroffen habe ❤️",
"Ich werde immer mein Bestes tun, um dich glücklich zu machen 🥺",
"Ich bin immer bei dir 🤞✔",
"Denk niemals, dass du alleine bist 💓",
"Du bist die besonderste Person in meinem Leben 🥰",
"Ich will dich nicht verlieren 😒",
"Und glaub mir, ich will niemand anderen 🥰",
"Es gibt niemanden besseres als dich ❤️",
"Du bist die Beste, Baby!! 💖",
"Oder sollte ich sagen, ich vermisse dich, wenn",
"etwas wirklich Schönes passiert 🤨",
"Ich liebe die Momente, die ich mit dir verbracht habe,",
"sowohl virtuell als auch offline 💓",
"Es gab einige Schwierigkeiten 😢,",
"aber wir haben die meisten überwunden 🥰",
"und es hat mir gezeigt, wie",
"wichtig du in meinem Leben bist ❤️",
"Dieser ganze Liebeskreislauf ist nur für dich 😘,",
"meine bedingungslose Liebe, meine private Variable 💖",
"Bitte kümmere dich um die Liebe, die dich wirklich liebt ❤",
"Ich bin binär in der Liebe; du bist die einzige '1' in meinem Leben",
"Danke an Gott, dass er uns geholfen hat, uns zu finden 🙏",
"Du bist die Liebe meines Lebens,",
"Ich liebe dich so sehr ❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
