/* pra esconder alguma elemento com display,
precisa usar o useRef() e pôr como primeiro parametro*/
// only close é autoexplicativo, se for true, só vai esconder o elemento
export function SetDisplayToggle(ref, onlyClose) {
  const style = ref.current.style;
  onlyClose === "true"
    ? (style.display = "")
    : style.display === "flex"
    ? (style.display = "")
    : (style.display = "flex");
}
