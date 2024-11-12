import useSound from "use-sound";

function soundEffect(sound) {
  const [playSwitch] = useSound(sound);
  return playSwitch;
}

export default soundEffect;
