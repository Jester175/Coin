import { Form } from "../../../components/Form/Form";
import "./authform.scss";

export const AuthForm = () => {
  const form = Form();
  form.classList.add('form');
  return form;
};
