import React from "react"
import { FaCode, FaReact, FaCog } from "react-icons/fa"
const ServicesData = [
  {
    id: 1,
    icon: <FaReact className="service__icon" />,
    title: "Создание сайтов и приложений",
    text: `Разработка по готовому техническому заданию, помощь в его составлении, поддержка и консультирование после сдачи проекта.`,
  },
  {
    id: 2,
    icon: <FaCog className="service__icon" />,
    title: "Оптимизация и улучшение ",
    text: `Оптимизация структуры сайта для повышения скорости загрузки страницы, увеличения посещаемости и улучшения обработки поисковыми системами.`,
  },
  {
    id: 3,
    icon: <FaCode className="service__icon" />,
    title: "Доработка front-end",
    text: `Разработка новых модулей интерфейса или доработка уже существующих, исправление верстки, адаптация под разные разрешения экрана.`,
  },
];

const ServicesItems = () => {
  return <>
    <ul className="service__list">{
      ServicesData.map(service => {
      const { id, icon, title, text } = service;

      return (
        <li key={id} className="service__item bg-grey">
            {icon}
            <h3 className="service__title">{title}</h3>
            <p>{text}</p>
        </li>
      )
    })
  }
  </ul>
  </>
}

export default ServicesItems