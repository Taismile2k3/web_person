function viewMaterials(subject) {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('lessonPage').style.display = 'flex';
  }
  
  function goBack() {
    document.querySelector('.container').style.display = 'block';
    document.getElementById('lessonPage').style.display = 'none';
  }
  
  function loadContent(topic) {
    const content = {
      'Introduction': `
        <h2>Introduction to Django</h2>
        <p>Django là một framework web mạnh mẽ được viết bằng Python. Nó giúp phát triển các ứng dụng web nhanh chóng và dễ dàng.</p>
        <h3>Ưu điểm của Django:</h3>
        <ul>
          <li><strong>Nhanh chóng:</strong> Django được thiết kế để tăng tốc độ phát triển với các công cụ sẵn có.</li>
          <li><strong>Bảo mật:</strong> Django giúp bảo vệ ứng dụng khỏi các lỗ hổng phổ biến như SQL Injection, XSS.</li>
          <li><strong>Mã nguồn mở:</strong> Django miễn phí và có cộng đồng lớn hỗ trợ.</li>
        </ul>
        <h3>Ví dụ thực tế:</h3>
        <p>Instagram là một trong những ứng dụng lớn được xây dựng bằng Django, với khả năng xử lý hàng triệu người dùng mỗi ngày.</p>
      `,
      'Environment': `
        <h2>Setting Up the Development Environment</h2>
        <p>Để bắt đầu làm việc với Django, bạn cần thiết lập môi trường phát triển:</p>
        <h3>Các bước thực hiện:</h3>
        <ol>
          <li><strong>Cài đặt Python:</strong> Tải Python từ <a href="https://www.python.org/" target="_blank">python.org</a> và cài đặt.</li>
          <li><strong>Tạo môi trường ảo:</strong> Sử dụng <code>virtualenv</code> hoặc <code>venv</code> để cô lập môi trường làm việc.</li>
          <li><strong>Cài đặt Django:</strong> Chạy lệnh <code>pip install django</code> để cài đặt Django.</li>
          <li><strong>Khởi tạo dự án:</strong> Tạo một dự án mới bằng lệnh <code>django-admin startproject myproject</code>.</li>
        </ol>
        <h3>Mã minh họa:</h3>
        <pre>
          <code>
          # Cài đặt môi trường ảo
          python -m venv myenv
          source myenv/bin/activate  # Trên Linux/Mac
          myenv\\Scripts\\activate   # Trên Windows
  
          # Cài đặt Django
          pip install django
  
          # Tạo dự án
          django-admin startproject myproject
          </code>
        </pre>
      `,
      'DjangoBasic': `
        <h2>Django Basics</h2>
        <p>Trong phần này, bạn sẽ học các khái niệm cơ bản về Django:</p>
        <h3>Views:</h3>
        <p>Views là nơi xử lý logic ứng dụng và trả về dữ liệu cho người dùng.</p>
        <h3>Mã minh họa:</h3>
        <pre>
          <code>
          # views.py
          from django.http import HttpResponse
  
          def hello_world(request):
              return HttpResponse("Hello, World!")
          </code>
        </pre>
        <h3>URLs:</h3>
        <p>URLs định tuyến các yêu cầu đến views tương ứng.</p>
        <h3>Mã minh họa:</h3>
        <pre>
          <code>
          # urls.py
          from django.urls import path
          from . import views
  
          urlpatterns = [
              path('hello/', views.hello_world),
          ]
          </code>
        </pre>
        <h3>Templates:</h3>
        <p>Templates được sử dụng để hiển thị giao diện người dùng.</p>
        <h3>Mã minh họa:</h3>
        <pre>
          <code>
          # views.py
          from django.shortcuts import render
  
          def home(request):
              return render(request, 'home.html', {'message': 'Welcome to Django!'})
  
          # home.html
          <!DOCTYPE html>
          <html>
          <head>
              <title>Home</title>
          </head>
          <body>
              <h1>{{ message }}</h1>
          </body>
          </html>
          </code>
        </pre>
      `,
      'DjangoAdvanced': `
        <h2>Django Advanced Concepts</h2>
        <p>Tiến xa hơn với Django với các khái niệm nâng cao:</p>
        <h3>ORM (Object-Relational Mapping):</h3>
        <p>ORM giúp làm việc với cơ sở dữ liệu mà không cần viết SQL.</p>
        <h3>Mã minh họa:</h3>
        <pre>
          <code>
          # models.py
          from django.db import models
  
          class Post(models.Model):
              title = models.CharField(max_length=100)
              content = models.TextField()
              created_at = models.DateTimeField(auto_now_add=True)
          </code>
        </pre>
        <h3>Admin Interface:</h3>
        <p>Giao diện quản trị cho phép quản lý dữ liệu dễ dàng.</p>
        <h3>Mã minh họa:</h3>
        <pre>
          <code>
          # admin.py
          from django.contrib import admin
          from .models import Post
  
          admin.site.register(Post)
          </code>
        </pre>
      `,
      'Deploying': `
        <h2>Deploying Django Applications</h2>
        <p>Hướng dẫn triển khai ứng dụng Django:</p>
        <h3>Bước 1: Chuẩn bị môi trường:</h3>
        <p>Cấu hình tệp <code>settings.py</code> cho môi trường production.</p>
        <h3>Bước 2: Sử dụng dịch vụ triển khai:</h3>
        <p>Sử dụng PythonAnywhere hoặc Heroku để triển khai ứng dụng.</p>
        <h3>Mã minh họa:</h3>
        <pre>
          <code>
          # settings.py
          DEBUG = False
          ALLOWED_HOSTS = ['yourdomain.com']
          </code>
        </pre>
      `,
      'Extra': `
        <h2>Django Extra Features</h2>
        <p>Một số tính năng bổ sung của Django:</p>
        <h3>Django REST Framework:</h3>
        <p>Xây dựng API mạnh mẽ với Django REST Framework.</p>
        <h3>Mã minh họa:</h3>
        <pre>
          <code>
          # Install Django REST Framework
          pip install djangorestframework
  
          # settings.py
          INSTALLED_APPS += ['rest_framework']
          </code>
        </pre>
      `
    };
  
    // Load the content into the #lessonContent div
    document.getElementById('lessonContent').innerHTML = content[topic] || `<p>Topic not found.</p>`;
  }
  function viewMaterials(subject) {
    document.querySelector('.container').style.display = 'none';
    const lessonPage = document.getElementById('lessonPage');
    lessonPage.style.display = 'flex';
    lessonPage.classList.add('fade-in'); // Thêm hiệu ứng
  
    // Xóa hiệu ứng sau khi hoàn tất
    setTimeout(() => lessonPage.classList.remove('fade-in'), 500);
  }
  document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);
  
      const rect = this.getBoundingClientRect();
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
  
      setTimeout(() => ripple.remove(), 600);
    });
  });