const coundown = () => {
  const countDate = new Date("Jan 31 , 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //   //how the work
  const second = 1000;
  const minut = second * 60;
  const hour = minut * 60;
  const day = hour * 24;

  //   calculator
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minut);
  const textSecond = Math.floor((gap % minut) / second);
  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
  document.querySelector(".second").innerHTML = textSecond;
};
coundown();
