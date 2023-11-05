class Doctor {
  constructor(id, name, experience, gender, category, academicDegree, rating, numberOfReviews, admissionType, photoPath) {
    this.id = id;
    this.name = name;
    this.experience = experience;
    this.gender = gender;
    this.category = category;
    this.academicDegree = academicDegree;
    this.rating = rating;
    this.numberOfReviews = numberOfReviews;
    this.admissionType = admissionType;
    this.photoPath = photoPath; // Путь к фотографии в папке public/images
  }
}

const doctorsData = [
  new Doctor(1, "Иванова Мария Давидовна", "Не более 5 лет", "Мужской", "Первая", "Кандидат медицинских наук", 4.8, 56, "Очное", "../images/ivanov.jpg"),
  new Doctor(2, "Чатинян Гарик Артурович", "От 5 до 10 лет", "Женский", "Вторая", "Доктор медицинских наук", 5, 24, "Заочное", "../images/ivanov.jpg"),
  new Doctor(3, "Доктор Анна", "От 5 до 10 лет", "Женский", "Вторая", "Доктор медицинских наук", 2.4, 72, "Заочное", "../images/ivanov.jpg"),
  new Doctor(4, "Доктор Алексей", "Свыше 20 лет", "Мужской", "Первая", "Доктор медицинских наук", 3, 101, "Заочное", "../images/ivanov.jpg"),
  // Добавьте других врачей с аналогичными данными
];

export default doctorsData;