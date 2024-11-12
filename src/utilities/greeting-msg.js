function getGreetingMsg(hour) {
  let greetingMsg = "Good Evening 🌙";

  switch (true) {
    case hour > -1 && hour < 12:
      greetingMsg = "Good Morning ☕";
      break;
    case hour > 12 && hour < 18:
      greetingMsg = "Good Afternoon ☀️";
      break;
    default:
      break;
  }

  return greetingMsg;
}

export default getGreetingMsg;
