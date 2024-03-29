import React from "react";

const LandingPage = () =>
   <div className="jumbotron bg-white ml-3 mr-5">
      <h1 className="display-4">Horologium - медецинское веб-приложение.</h1>
      <p className="lead">Тестовое задание для компании "Инреко-ЛАН"</p>
      <hr className="my-4"/>
      <p>Задание следующее - создать небольшое веб-приложение на тему "Больница":</p>
      <p>1) При заходе в первый раздел веб-приложения, пользователь попадает на страницу, на которой представлен список
         специальностей врачей больницы.
         При нажатии на специалиста, происходит переход на вторую страницу, на которой представлена информация о врачах,
         работающих по данной специальности (ФИО, специальность).
         При нажатии на врача, происходит переход на страницу информации об этом враче (ФИО, категория,
         специальность).</p>
      <p>2) При заходе во второй раздел веб-приложения, пользователь попадает на страницу, на которой представлена
         информация о всех врачах больницы (идентификационный номер, ФИО, специальность, категория).
         Количество записей в таблице врачей – 10000 (нагенерировать скриптом / java-кодом).
         Над таблицей находится фильтр с кнопкой "Фильтровать" и полями: "специальность" (выпадающий список со всеми
         специальностями) и "ФИО" (текстовое поле).
         При заполнении полей и нажатии кнопки должна выполняться фильтрация таблицы по заданным критериям и переход на
         первую страницу таблицы.</p>
      <p>Все таблицы должны иметь пагинатор, количество записей на странице - 10.
         Данные в таблицах должны подгружаться по 10 строк при переходе по страницам.</p>
      <p>Технологии:
         БД - MySQL / PostgreSQL (на выбор)
         Фреймворки и технологии: Java, Spring, ReactJS.</p>
   </div>;

export default LandingPage;