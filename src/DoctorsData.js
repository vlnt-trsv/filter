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
  new Doctor(1, "Иванова Мария Давидовна", 3, "Женский", "Высшая", "Кандидат медицинских наук", 4.8, 56, "Клиника", "../images/ivanov.jpg"),
  new Doctor(2, "Чатинян Гарик Артурович", 15, "Мужской", "Вторая", "Доктор медицинских наук", 5, 24, "Онлайн", "../images/ivanov.jpg"),
  new Doctor(3, "Доктор Анна", 9, "Женский", "Вторая", "Доктор медицинских наук", 2.4, 72, "На дому", "../images/ivanov.jpg"),
  new Doctor(4, "Доктор Алексей", 21, "Мужской", "Первая", "Доктор медицинских наук", 3, 101, "Клиника", "../images/ivanov.jpg"),
  // Добавьте других врачей с аналогичными данными
];

export default doctorsData;