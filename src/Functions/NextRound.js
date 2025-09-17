export function ToRound2(s1, s2,navigate) {
  localStorage.setItem("ScoreJ1", s1);
  localStorage.setItem("ScoreJ2", s2);
  navigate("/RoundTwo");
}