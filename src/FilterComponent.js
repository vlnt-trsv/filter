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
      isFilterOpen: false,
    };
  }

  toggleFilter = () => {
    const filterElement = document.getElementById("filter");

    if (filterElement) {
      // Если фильтр открыт, закрываем его, и наоборот
      if (this.state.isFilterOpen) {
        filterElement.style.display = "flex";
      } else {
        filterElement.style.display = "none";
      }

      // Инвертируем состояние фильтра
      this.setState({ isFilterOpen: !this.state.isFilterOpen });
    }
  };

  clearFilter = () => {
    // Очистить все параметры фильтрации и обновить состояние
    this.setState({
      experience: "",
      gender: "",
      category: "",
      academicDegree: "",
      rating: "",
      numberOfReviews: "",
      admissionType: "",
    });
  };

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

    // Параметры фильтрации

    const filteredDoctors = doctorsData.filter((doctor) => {
      return (
        (experience === "" ||
          (experience === "Не более 5 лет" && doctor.experience < 5) ||
          (experience === "От 5 до 10 лет" &&
            doctor.experience >= 5 &&
            doctor.experience <= 10) ||
          (experience === "От 10 до 20 лет" &&
            doctor.experience >= 10 &&
            doctor.experience <= 20) ||
          (experience === "Свыше 20 лет" && doctor.experience > 20)) &&
        (gender === "" || doctor.gender === gender) &&
        (category === "" || doctor.category === category) &&
        (academicDegree === "" || doctor.academicDegree === academicDegree) &&
        (rating === "" || doctor.rating >= parseFloat(rating)) &&
        (numberOfReviews === "" ||
          (numberOfReviews === "Меньше 50" && doctor.numberOfReviews < 50) ||
          (numberOfReviews === "50-100" &&
            doctor.numberOfReviews >= 50 &&
            doctor.numberOfReviews <= 100) ||
          (numberOfReviews === "Больше 100" && doctor.numberOfReviews > 100)) &&
        (admissionType === "" || doctor.admissionType === admissionType)
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
      gender: ["Все", "Мужской", "Женский"],
      category: ["Все", "Первая", "Вторая", "Высшая"],
      academicDegree: [
        "Все",
        "Кандидат медицинских наук",
        "Доктор медицинских наук",
        "Профессор",
      ],
      rating: ["Все", "4.5", "4"],
      numberOfReviews: ["Все", "Меньше 50", "50-100", "Больше 100"],
      admissionType: ["Все", "Клиника", "Онлайн", "На дому"],
    };

    const countFilteredDoctors = () => {
      return this.state.filteredDoctors.length;
    };

    return (
      <div className="container">
        <div className="button-container">
          <button
            className="filter-toggle"
            type="button"
            onClick={this.toggleFilter}
          >
            {this.state.isFilterOpen ? "Открыть фильтр" : "Закрыть фильтр"}
          </button>
        </div>
        <div className="wrapper-container">
          <div className="wrapper" id="filter">
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
                  className="select-css"
                  placeholder="Все"
                  value={this.state[key]}
                  onChange={(e) =>
                    this.setState({
                      [key]: e.target.value === "Все" ? "" : e.target.value,
                    })
                  }
                >
                  {commonOptions[key].map((option) => (
                    <option selected key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ))}
            <button type="button" onClick={this.handleFilterChange}>
              Применить фильтр
            </button>
            <button type="button" onClick={this.clearFilter}>
              Сбросить фильтры
            </button>
          </div>

          {/* Отображение результатов фильтрации */}
          <div className="wrapper-card">
            <h1>Всего врачей: {countFilteredDoctors()}</h1>
            {this.state.filteredDoctors.map((doctor) => (
              <div className="cards" key={doctor.id}>
                <div className="cards-info">
                  <img
                    src={process.env.PUBLIC_URL + "/" + doctor.photoPath}
                    alt={doctor.name}
                  />
                  <div className="information">
                    <p>Имя: {doctor.name}</p>
                    <p>
                      Стаж:{" "}
                      {doctor.experience >= 5
                        ? `${doctor.experience} лет`
                        : `${doctor.experience} года`}
                    </p>
                    <p>Пол: {doctor.gender}</p>
                    <p>Категория: {doctor.category}</p>
                    <p>Ученая степень: {doctor.academicDegree}</p>
                    <p>Оценка: {doctor.rating}</p>
                    <p>Количество отзывов: {doctor.numberOfReviews}</p>
                    <p>Тип приема: {doctor.admissionType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FilterComponent;
