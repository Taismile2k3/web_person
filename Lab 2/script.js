document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
      if (username === '1' && password === '1') {
        alert('Đăng nhập thành công!');
        window.location.href = 'dashboard.html';
      } else {
        alert('Sai tên đăng nhập hoặc mật khẩu!');
      }
    });
    }
    
    if (window.location.pathname.includes('dashboard.html')) {
    const exercises = [ 
    { title: 'Cộng hai số', description: 'Viết chương trình cộng hai số.', language: 'python', difficulty: 'Dễ', status: 'Chưa bắt đầu'},
    { title: 'Tính giai thừa', description: 'Tính giai thừa của một số.', language: 'c', difficulty: 'Trung bình', status: 'Đang thực hiện' },
    { title: 'Kiểm tra Palindrome', description: 'Kiểm tra chuỗi có phải Palindrome.', language: 'java', difficulty: 'Khó', status: 'Hoàn thành' },
    ];
    
    const exerciseList = document.querySelector('.exercise-list');
    const filterLanguage = document.getElementById('filter-language');
    const searchKeyword = document.getElementById('search-keyword');
    
    function renderExercises(filter = 'all', keyword = '') {
      exerciseList.innerHTML = '';
      const filteredExercises = exercises.filter(ex => (filter === 'all' || ex.language === filter) && ex.title.includes(keyword));
      filteredExercises.forEach(ex => {
        const item = document.createElement('div');
        item.className = 'exercise-item';
        item.innerHTML = `<h3>${ex.title}</h3><p>${ex.description}</p>`;
        exerciseList.appendChild(item);
      });
    }
    
    renderExercises();
    filterLanguage.addEventListener('change', () => renderExercises(filterLanguage.value, searchKeyword.value));
    searchKeyword.addEventListener('input', () => renderExercises(filterLanguage.value, searchKeyword.value));
    }
    });
    