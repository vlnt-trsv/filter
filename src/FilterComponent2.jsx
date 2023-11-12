import React, { useEffect, useState } from "react";
import doctorsData from "./DoctorsData";

export const FilterComponent2 = () => {
  const [filter, setFilter] = useState({
    experience: "",
    gender: "",
    category: "",
    academicDegree: "",
    rating: "",
    numberOfReviews: "",
    admissionType: "",
    filteredDoctor: doctorsData,
  });

  // POPUP
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const popup = document.getElementById("popup");
    popup.style.display = isPopupOpen ? "block" : "none";
  }, [isPopupOpen]);
  // END POPUP

  // Чистка фильтров
  const clearFilter = () => {
    setFilter({
      experience: "",
      gender: "",
      category: "",
      academicDegree: "",
      rating: "",
      numberOfReviews: "",
      admissionType: "",
      filteredDoctor: doctorsData,
    });
  };
  // END Чистка фильтров

  // Параметры фильтрация
  const filterDoctors = () => {
    const filteredDoctors = doctorsData.filter((doctor) => {
      const isExperienceMatch =
        filter.experience === "" ||
        (filter.experience === "Не более 5 лет" && doctor.experience < 5) ||
        (filter.experience === "От 5 до 10 лет" &&
          doctor.experience >= 5 &&
          doctor.experience <= 10) ||
        (filter.experience === "От 10 до 20 лет" &&
          doctor.experience >= 10 &&
          doctor.experience <= 20) ||
        (filter.experience === "Свыше 20 лет" && doctor.experience > 20);

      const isGenderMatch =
        filter.gender === "" || doctor.gender === filter.gender;
      const isCategoryMatch =
        filter.category === "" || doctor.category === filter.category;
      const isAcademicDegreeMatch =
        filter.academicDegree === "" ||
        doctor.academicDegree === filter.academicDegree;
      const isRatingMatch =
        filter.rating === "" || doctor.rating >= parseFloat(filter.rating);

      const isNumberOfReviewsMatch =
        filter.numberOfReviews === "" ||
        (filter.numberOfReviews === "Меньше 50" &&
          doctor.numberOfReviews < 50) ||
        (filter.numberOfReviews === "50-100" &&
          doctor.numberOfReviews >= 50 &&
          doctor.numberOfReviews <= 100) ||
        (filter.numberOfReviews === "Больше 100" &&
          doctor.numberOfReviews > 100);

      const isAdmissionTypeMatch =
        filter.admissionType === "" ||
        doctor.admissionType === filter.admissionType;

      return (
        isExperienceMatch &&
        isGenderMatch &&
        isCategoryMatch &&
        isAcademicDegreeMatch &&
        isRatingMatch &&
        isNumberOfReviewsMatch &&
        isAdmissionTypeMatch
      );
    });

    setFilter({ ...filter, filteredDoctors });
  };
  // END Параметры фильтрация

  const handleFilterChange = () => {
    filterDoctors(); // Применение параметров фильтрации
    togglePopup(); // Кнопка переключения показа popup'a
  };

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

  return (
    <section className="filter">
      <div className="filter__container container">
        <h2 className="filter__title title-h2">Рейтинг хирургов</h2>
        <div className="filter__button">
          <button>Фильтр</button>
          <button>Дата</button>
          <button>Сортировка</button>
          <button>Показать на карте</button>
        </div>
      </div>
      <h1>Количество отфильтрованных врачей: {filter.filteredDoctor.length}</h1>
      <button onClick={togglePopup}>Click</button>
      <div id="popup">POPUP</div>
    </section>
  );
};

export default FilterComponent2;
