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
      isPopupOpen: false, // Добавляем состояние для открытия/закрытия попапа
    };
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      isPopupOpen: !prevState.isPopupOpen,
    }));
    const popup = document.getElementById("popup");
    popup.style.display = this.state.isPopupOpen ? "none" : "block";
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
    this.togglePopup();
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
        <h1>Рейтинг хирургов</h1>
        <div className="button-container">
          <div className="button-container-left">
            <button
              className="filter-toggle"
              type="button"
              onClick={this.togglePopup} // Добавляем обработчик для открытия/закрытия попапа
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 34 30"
                fill="none"
              >
                <path
                  d="M1.46802 3.71453C1.46802 2.86119 1.46802 2.43451 1.6537 2.10858C1.81706 1.82188 2.07769 1.58879 2.39826 1.44269C2.7627 1.27663 3.23978 1.27663 4.19394 1.27663H29.4088C30.363 1.27663 30.84 1.27663 31.2045 1.44269C31.5251 1.58879 31.7856 1.82188 31.949 2.10858C32.1347 2.43451 32.1347 2.86119 32.1347 3.71453V6.36158C32.1347 6.73426 32.1347 6.9206 32.0877 7.09596C32.0459 7.25143 31.9771 7.40006 31.8836 7.53638C31.7783 7.69015 31.6309 7.82192 31.3363 8.08544L21.0071 17.3232C20.7125 17.5867 20.5652 17.7185 20.4599 17.8722C20.3663 18.0086 20.2975 18.1572 20.2558 18.3127C20.2088 18.4881 20.2088 18.6744 20.2088 19.047V22.6083L13.3939 28.7031V19.047C13.3939 18.6744 13.3939 18.4881 13.3469 18.3127C13.3051 18.1572 13.2363 18.0086 13.1429 17.8722C13.0375 17.7185 12.8902 17.5867 12.5955 17.3232L2.26642 8.08544C1.97177 7.82192 1.82443 7.69015 1.71908 7.53638C1.62566 7.40006 1.55683 7.25143 1.51509 7.09596C1.46802 6.9206 1.46802 6.73426 1.46802 6.36158V3.71453Z"
                  stroke="#5D88A8"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Фильтр
            </button>
            <button className="filter-toggle" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M34.7448 17.3617V12.2553C34.7448 10.3752 33.2207 8.85104 31.3405 8.85104H10.915C9.03488 8.85104 7.51074 10.3752 7.51074 12.2553V17.3617M34.7448 17.3617V32.6808C34.7448 34.561 33.2207 36.0851 31.3405 36.0851H10.915C9.03488 36.0851 7.51074 34.561 7.51074 32.6808V17.3617M34.7448 17.3617H7.51074M14.3193 5.44678V12.2553M27.9363 5.44678V12.2553"
                  stroke="#5D88A8"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M15.1704 20.7659H11.7661C11.2961 20.7659 10.915 21.147 10.915 21.617V25.0212C10.915 25.4913 11.2961 25.8723 11.7661 25.8723H15.1704C15.6404 25.8723 16.0214 25.4913 16.0214 25.0212V21.617C16.0214 21.147 15.6404 20.7659 15.1704 20.7659Z"
                  fill="#5D88A8"
                />
                <path
                  d="M22.8298 20.7659H19.4255C18.9555 20.7659 18.5745 21.147 18.5745 21.617V25.0212C18.5745 25.4913 18.9555 25.8723 19.4255 25.8723H22.8298C23.2998 25.8723 23.6808 25.4913 23.6808 25.0212V21.617C23.6808 21.147 23.2998 20.7659 22.8298 20.7659Z"
                  fill="#5D88A8"
                />
                <path
                  d="M30.4894 20.7659H27.0852C26.6152 20.7659 26.2341 21.147 26.2341 21.617V25.0212C26.2341 25.4913 26.6152 25.8723 27.0852 25.8723H30.4894C30.9595 25.8723 31.3405 25.4913 31.3405 25.0212V21.617C31.3405 21.147 30.9595 20.7659 30.4894 20.7659Z"
                  fill="#5D88A8"
                />
              </svg>
              Дата
            </button>
            <button className="filter-toggle" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 35 19"
                fill="none"
              >
                <path
                  d="M19.2885 9.33268H33.5107M19.2885 2.97292H33.5107M19.2885 15.6924H33.5107M6.84408 1.38298V17.2824M6.84408 1.38298L1.51074 6.1528M6.84408 1.38298L12.1774 6.1528"
                  stroke="#5D88A8"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Сортировка
            </button>
          </div>
          <div className="button-container-right">
            <button className="filter-toggle" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M8.54807 21.7128C6.15508 22.6252 4.67041 23.8965 4.67041 25.3027C4.67041 28.0792 10.4574 30.3298 17.5959 30.3298C24.7346 30.3298 30.5215 28.0792 30.5215 25.3027C30.5215 23.8965 29.0368 22.6252 26.6438 21.7128M17.5959 13.0957H17.6103M26.213 13.0957C26.213 18.9319 19.7502 21.7128 17.5959 26.0213C15.4417 21.7128 8.97892 18.9319 8.97892 13.0957C8.97892 8.33668 12.8369 4.47871 17.5959 4.47871C22.355 4.47871 26.213 8.33668 26.213 13.0957ZM19.0321 13.0957C19.0321 13.8889 18.3891 14.5319 17.5959 14.5319C16.8027 14.5319 16.1598 13.8889 16.1598 13.0957C16.1598 12.3026 16.8027 11.6596 17.5959 11.6596C18.3891 11.6596 19.0321 12.3026 19.0321 13.0957Z"
                  stroke="#5D88A8"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Показать на карте
            </button>
          </div>
        </div>
        <div className="wrapper-container">
          <div className="popup" id="popup">
            <div className="popup-content">
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
              <button type="button" onClick={this.clearFilter}>
                Сбросить фильтры
              </button>
            </div>
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
