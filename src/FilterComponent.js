import React, { Component } from "react";
import doctorsData from "./DoctorsData";
import "./select.css";

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

    // Параметры филтрации

    const filteredDoctors = doctorsData.filter((doctor) => {
      return (
        (experience === "Все" || doctor.experience === experience) && // Фильтр по стажу
        (gender === "" || doctor.gender === gender) && // Фильтр по полу
        (category === "" || doctor.category === category) && // Фильтр по категории
        (academicDegree === "" || doctor.academicDegree === academicDegree) && // Фильтр по ученой степени
        (rating === "" || doctor.rating >= parseFloat(rating)) && // Фильтр по оценке
        (numberOfReviews === "" || // Фильтр по количеству отзывов
          (numberOfReviews === "Меньше 50" && doctor.numberOfReviews < 50) ||
          (numberOfReviews === "50-100" &&
            doctor.numberOfReviews >= 50 &&
            doctor.numberOfReviews <= 100) ||
          (numberOfReviews === "Больше 100" && doctor.numberOfReviews > 100)) &&
        (admissionType === "" || doctor.admissionType === admissionType) // Фильтр по типу приема
      );
    });

    this.setState({ filteredDoctors });
  };

  handleFilterChange = () => {
    this.filterDoctors();
  };

  render() {
    const commonOptions = {
      experience: [
        "Все",
        "Не более 5 лет",
        "От 5 до 10 лет",
        "От 10 до 20 лет",
        "Свыше 20 лет",
      ],
      gender: ["", "Мужской", "Женский"],
      category: ["", "Первая", "Вторая", "Высшая"],
      academicDegree: ["", "Кандидат медицинских наук", "Доктор медицинских наук", "Профессор"],
      rating: ["", "4.5", "4"],
      numberOfReviews: ["", "Меньше 50", "50-100", "Больше 100"],
      admissionType: ["", "Очное", "Заочное", "Дистанционное"],
    };

    const countFilteredDoctors = () => {
      return this.state.filteredDoctors.length;
    };

    return (
      <div className="container">
        <div className="wrapper">
          {Object.keys(commonOptions).map((key) => (
            <label key={key}>
              {key === "experience"
                ? "Стаж:"
                : key === "gender"
                ? "Пол:"
                : key === "category"
                ? "Категория:"
                : key === "academicDegree"
                ? "Ученая степень:"
                : key === "rating"
                ? "Оценка:"
                : key === "numberOfReviews"
                ? "Количество отзывов:"
                : "Тип приёма"}
              <select
                value={this.state[key]}
                onChange={(e) => this.setState({ [key]: e.target.value })}
              >
                {commonOptions[key].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button type="button" onClick={this.handleFilterChange}>
            Применить фильтр
          </button>
        </div>

        {/* Отображение результатов фильтрации */}
        <div className="card">
          <h1>Всего врачей: {countFilteredDoctors()}</h1>
          {this.state.filteredDoctors.map((doctor) => (
            <div className="card2" key={doctor.id}>
              <div>
                <p>Имя: {doctor.name}</p>
                <p>Стаж: {doctor.experience}</p>
                <p>Пол: {doctor.gender}</p>
                <p>Категория: {doctor.category}</p>
                <p>Ученая степень: {doctor.academicDegree}</p>
                <p>Оценка: {doctor.rating}</p>
                <p>Количество отзывов: {doctor.numberOfReviews}</p>
                <p>Тип приема: {doctor.admissionType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterComponent;
