import './App.css';
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import mail from '../src/img/mail.svg';
import password from '../src/img/password.svg';
  
const LoginSchema = Yup.object().shape({
  email: Yup.string().required(
    <div className="required">Обьязательное поле</div>
  ).email(' '),
  password: Yup.string().required(
    <div className="required">Обьязательное поле</div>
  ).min(6, 'Пароль слишком короткий — минимум 6 символов.'),
});
  
const App = () => {
  // //------------------Task-№1-------------------------//

  // const arr = [1, 2, 3, 1, 2];
  // const removeDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);
  // console.log(removeDuplicates(arr))

  // //------------------Task-№2-------------------------//

  // const findDuplicate = (...arrays) => {
  //   const result = arrays[0].filter((el) => arrays[1].indexOf(el) >= 0 && el);
  //   arrays.length > 2 && findDuplicate(result, ...arrays.slice(2, arrays.length))
  //   return Array.from(new Set(result));
  // };

  // console.log(findDuplicate([1,2], [2,3]))

  // //------------------Task-№3-------------------------//

  // const isEmpty = (obj) => {
  //   if(typeof obj === 'boolean'){
  //     return !obj;
  //   }
  //   else if(typeof obj === 'number'){
  //     return false;
  //   }
  //   else if(typeof obj === 'object') {
  //     return Object.keys(obj).every(x => {
  //       if(['object', 'boolean', 'number'].includes(typeof obj[x])) {
  //         return isEmpty(obj[x]);
  //       }
  //       return isEmpty(obj[x]);
  //     })
  //   }
  //   return !obj;
  // };
  
  // const firstTest = {};
  // const secontTest = { a: { b: undefined } };
  // const thirdTest = { a: { b: [] } };

  // console.log(isEmpty(firstTest));
  // console.log(isEmpty(secontTest));
  // console.log(isEmpty(thirdTest));

  return (
    <div>
      <Formik
        initialValues={{ 
          email: "", 
          password: "" 
        }}
        validationSchema={LoginSchema}
      >
        {({ touched, errors, isSubmitting, values }) => !isSubmitting 
         ? (
            <Form className="form">
              <h4 className="welcome">Welcome</h4>
              <h2 className="title">Join The Community</h2>

              <div  className="form-group">
                <label className="label" htmlFor="email">E-Mail</label>
                <Field style={{
                  backgroundImage: `url(${mail})`,
                  backgroundRepeat:'no-repeat',
                  backgroundPosition:'14px',
                }} 
                  className={
                    touched.email && (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email))
                      ? "wrongInputField"
                      : (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)) ? "successInputField"
                      : "inputField"
                  }
                  
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  autocomplete="off" />
                  <div className="invalid-feedback-email">
                    <ErrorMessage name="email" />
                  </div>
              </div>

              <div className="form-group">
                <label className="label" htmlFor="password">Password</label>
                <Field style={{
                    backgroundImage: `url(${password})`,
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'14px',
                  }} 
                  className={
                    values.password?.length >= 6 
                      ? "successInputField"
                      : touched.password && values.password?.length <= 6 ? "wrongInputField"
                      : "inputField"
                  }
                  type="password" 
                  name="password" 
                  placeholder="Enter your password" />
                <div className="invalid-feedback-password">
                  <ErrorMessage name="password"/>
                </div>
              </div>

              <button className="signBtn" type="submit">Sign Up</button>
            </Form>
           ) 
           : (
              <div className="formSuccess">
              <h1>Успех</h1>
                <div className="thank">Спасибо, что связались с нами! </div>
                <div>
                  <span>Email: {values.email}<br/></span>
                  <span>Password: {values.password}</span>
                  </div>
              </div>
            )
        }
      </Formik>
    </div>
  );
}
  
export default App;