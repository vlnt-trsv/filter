import React, { Component } from "react";

export class Сategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        // Здесь вы можете хранить параметры фильтрации
        {
          key: "all",
          name: "Все",
        },
        {
          key: "experience",
          name: "Стаж",
        },
        {
          key: "gender",
          name: "Пол",
        },
        {
          key: "category",
          name: "Категория",
        },
        {
          key: "degree",
          name: "Ученая степень",
        },
        {
          key: "rating",
          name: "Отзывы",
        },
        {
          key: "reviews",
          name: "Количество отзывов",
        },
        {
          key: "type",
          name: "Тип приёма",
        },
      ],
    };
  }
  render() {
    return <div>Сategories</div>;
  }
}

export default Сategories;
