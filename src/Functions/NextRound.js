export function ToRound2(s1, s2,navigate,where) {
  localStorage.setItem("ScoreJ1", s1);
  localStorage.setItem("ScoreJ2", s2);
  navigate(where);
}