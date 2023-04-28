import './spinner.scss'

export const Spinner = () => {
  const spinner = document.createElement('div');
  const wrapper = document.createElement('div');

  spinner.classList.add('lds-dual-ring');
  wrapper.classList.add('wrapper-ring');

  wrapper.append(spinner)

  return wrapper;
}
