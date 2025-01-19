// Lưu trữ khóa học
const courseForm = document.getElementById('courseForm');
const courseNameInput = document.getElementById('courseName');
const courseDescriptionInput = document.getElementById('courseDescription');
const createdByInput = document.getElementById('createdBy');
const saveButton = document.getElementById('saveBtn');
const courseListTableBody = document.querySelector('#courseList tbody');

// Tạo danh sách khóa học trong localStorage
let courses = JSON.parse(localStorage.getItem('courses')) || [];

// Hàm lưu khóa học
function saveCourse(event) {
  event.preventDefault(); // Ngăn chặn reload trang

  // Lấy dữ liệu từ form
  const courseName = courseNameInput.value.trim();
  const courseDescription = courseDescriptionInput.value.trim();
  const createdBy = createdByInput.value;

  // Kiểm tra dữ liệu hợp lệ
  if (!courseName || !createdBy) {
    alert('Vui lòng nhập đầy đủ thông tin bắt buộc!');
    return;
  }

  // Tạo đối tượng khóa học
  const newCourse = {
    id: Date.now(), // Tạo ID duy nhất
    name: courseName,
    description: courseDescription,
    createdBy: createdBy,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
  };

  // Lưu khóa học vào danh sách
  courses.push(newCourse);
  localStorage.setItem('courses', JSON.stringify(courses));

  // Reset form
  courseForm.reset();

  // Cập nhật danh sách hiển thị
  displayCourses();

  alert('Khóa học đã được lưu thành công!');
}

// Hàm hiển thị danh sách khóa học
function displayCourses() {
  // Xóa nội dung cũ
  courseListTableBody.innerHTML = '';

  // Duyệt qua danh sách khóa học và thêm vào bảng
  courses.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${course.id}</td>
      <td>${course.name}</td>
      <td>${course.description || 'Không có mô tả'}</td>
      <td>${course.createdBy}</td>
      <td>${course.createdAt}</td>
      <td>${course.updatedAt}</td>
    `;
    courseListTableBody.appendChild(row);
  });
}

// Xử lý sự kiện lưu khóa học
saveButton.addEventListener('click', saveCourse);

// Hiển thị danh sách khóa học khi tải trang
displayCourses();