import React, { Component } from "react";
import doctorsData from "./DoctorsData";

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: "",
      gender: "",
      category: "",
      academicDegree: "",
      rating: "",
      numberOfReviews: "",
      admissionType: "",
      filteredDoctors: doctorsData,
    };
  }

  filterDoctors = () => {
    const {
      experience,
      gender,
      category,
      academicDegree,
      rating,
      numberOfReviews,
      admissionType,
    } = this.state;

    const filteredDoctors = doctorsData.filter((doctor) => {
      return (
        (experience === "" || doctor.experience === experience) &&
        (gender === "" || doctor.gender === gender) &&
        (category === "" || doctor.category === category) &&
        (academicDegree === "" || doctor.academicDegree === academicDegree) &&
        (rating === "" || doctor.rating >= parseFloat(rating)) &&
        (numberOfReviews === "" ||
          doctor.numberOfReviews >= parseInt(numberOfReviews)) &&
        (admissionType === "" || doctor.admissionType === admissionType)
      );
    });

    this.setState({ filteredDoctors });
  };

  handleFilterChange = () => {
    this.filterDoctors();
  };

  // Добавьте обработчики событий для изменения параметров фильтрации

  render() {
    return (
      <div>
        <label>
          Стаж:
          <select
            value={this.state.experience}
            onChange={(e) => this.setState({ experience: e.target.value })}
          >
            <option value="">Любой</option>
            <option value="1 год">1 год</option>
            <option value="2 года">2 года</option>
            {/* Добавьте другие варианты стажа */}
          </select>
        </label>

        <label>
          Пол:
          <input
            type="radio"
            name="gender"
            value="Мужской"
            checked={this.state.gender === "Мужской"}
            onChange={(e) => this.setState({ gender: e.target.value })}
          />{" "}
          Мужской
          <input
            type="radio"
            name="gender"
            value="Женский"
            checked={this.state.gender === "Женский"}
            onChange={(e) => this.setState({ gender: e.target.value })}
          />{" "}
          Женский
        </label>

        <label>
          Категория:
          <select
            value={this.state.category}
            onChange={(e) => this.setState({ category: e.target.value })}
          >
            <option value="">Любая</option>
            <option value="Первая">Первая</option>
            <option value="Вторая">Вторая</option>
            <option value="Высшая">Высшая</option>
            {/* Добавьте другие варианты категории */}
          </select>
        </label>

        <label>
          Ученая степень:
          <select
            value={this.state.degree}
            onChange={(e) => this.setState({ academicDegree: e.target.value })}
          >
            <option value="">Любая</option>
            <option value="Бакалавр">Бакалавр</option>
            <option value="Магистр">Магистр</option>
            <option value="Доктор наук">Доктор наук</option>
            {/* Добавьте другие варианты ученой степени */}
          </select>
        </label>

        <label>
          Оценка:
          <select
            value={this.state.rating}
            onChange={(e) => this.setState({ rating: e.target.value })}
          >
            <option value="">Любая</option>
            <option value="5 звезд">5 звезд</option>
            <option value="4 звезды">4 звезды</option>
            <option value="3 звезды">3 звезды</option>
            {/* Добавьте другие варианты оценки */}
          </select>
        </label>

        <label>
          Количество отзывов:
          <select
            value={this.state.reviews}
            onChange={(e) => this.setState({ numberOfReviews: e.target.value })}
          >
            <option value="">Любое</option>
            <option value="Меньше 50">Меньше 50</option>
            <option value="50-100">50-100</option>
            <option value="Больше 100">Больше 100</option>
            {/* Добавьте другие варианты количества отзывов */}
          </select>
        </label>

        <label>
          Тип приема:
          <select
            value={this.state.type}
            onChange={(e) => this.setState({ admissionType: e.target.value })}
          >
            <option value="">Любой</option>
            <option value="Очное">Очное</option>
            <option value="Заочное">Заочное</option>
            <option value="Дистанционное">Дистанционное</option>
            {/* Добавьте другие варианты типа приема */}
          </select>
        </label>

        <button onClick={this.handleFilterChange}>Применить фильтр</button>

        {/* Отображение результатов фильтрации */}
        <div>
          {this.state.filteredDoctors.map((doctor) => (
            <div key={doctor.id}>
              <p>Имя: {doctor.name}</p>
              <p>Стаж: {doctor.experience}</p>
              <p>Пол: {doctor.gender}</p>
              <p>Категория: {doctor.category}</p>
              <p>Ученая степень: {doctor.academicDegree}</p>
              <p>Оценка: {doctor.rating}</p>
              <p>Количество отзывов: {doctor.numberOfReviews}</p>
              <p>Тип приема: {doctor.admissionType}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterComponent;
