import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; - не будем импортировать index.css который предоставляет шаблон проекта по умолчанию
//import App from './App'; - не будем импортировать App который предоставляет шаблон проекта по умолчанию
import reportWebVitals from './reportWebVitals';


// Создадим компонент Book со свойствами название, год, цена, которые будем хранить в объекте props
const Book = (props) => {
// Создадим блок div, с карточкой книги, содержимое представим в виде массива встроеных компонентов: название, год, цена, которые будем хранить в объекте props
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("p", {}, props.year),
        React.createElement("p", {}, props.price),
        // Сделал компонент заготовку, в котоорую при отрисовке буду подставлять нужные данные
      ])
    }
// В компонент App добавлю - компонент Book столько раз сколько мне потребуется и каждый раз буду задавать новые данные
// Заменил старый компонент новым, который сделан на JSX
const App = () => {
    return <div>      
      <Book name="HTML5" year="2020" price="450" />
      <Book name="CSS3" year="2021" price="450"/>
      <Book name="JS" year="2022" price="450" />
      <Book name="React" year="2022" price="650" />
    </div>

  // Вариант App который создали в примере 002 на чистом React без JSX
  // Закоментировал старый код - он больше не нужен
  /*React.createElement("div", {}, [
    // Компонен заголовок h1
    React.createElement("h1", { id: 'hello', classname: 'class1' }, 'Книжный магазин'),
    // Компонент Book с подстановкой актуальных данных
    React.createElement(Book, { name: 'HTML5', year: 2020, price: c }),
    // Компонент Book с подстановкой актуальных данных
    React.createElement(Book, { name: 'CSS3', year: 2021, price: 450 }),
    // Компонент Book с подстановкой актуальных данных
    React.createElement(Book, { name: 'JS', year: 2022, price: 450 }),
    // Компонент Book с подстановкой актуальных данных
    React.createElement(Book, { name: 'React', year: 2022, price: 650 }),
  ])
  */
  }

// Отрисовываем приложение App с компонентами React: h1, Book которые мы создали внутри него
// отрисовку проводим в блоке div с id 'root'
ReactDOM.render(React.createElement(App), document.getElementById('root'));

// Вариант App, который используется в шаблоне по умолчанию
ReactDOM.render(
  // StrictMode - использовать строгий режим в React
  // Вызов приложения App с помощью фигурных скобок - это уже разметка JSX
  // В разметке JSX всегда используется закрывающий тег />
  <React.StrictMode>    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
