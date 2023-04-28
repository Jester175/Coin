import './mylabel.scss'


export const MyLabel = (title) => {
  const label = document.createElement('label');
  label.textContent = title;
  label.classList.add('label')

  return label;
}
