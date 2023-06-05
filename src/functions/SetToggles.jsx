/* pra esconder alguma elemento com display,
precisa usar o useRef() e pôr como primeiro parametro*/
// only close é autoexplicativo, se for true, só vai esconder o elemento
export function SetDisplayToggle(ref, toggle) {
  const style = ref.current.style;
  toggle ? (style.display = "flex") : (style.display = "");
}

// a msm coisa do acima, mas mexe com a pacidade
export function SetOpacityToggle(ref, toggle) {
  const style = ref.current.style;
  toggle ? (style.opacity = 1) : (style.opacity = "");
}
