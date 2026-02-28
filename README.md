# 🎓 Hệ Thống Thi Trắc Nghiệm Trực Tuyến (Phòng CTSV)

![Laravel](https://img.shields.io/badge/Laravel-12.x-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

Hệ thống thi trắc nghiệm trực tuyến được phát triển dành cho Phòng Công tác Sinh viên. Dự án được xây dựng theo kiến trúc API-first, tách biệt hoàn toàn giữa Frontend và Backend, đồng thời được tối ưu hóa để chịu tải cao.

---

## 👥 Nhóm Thực Hiện: Nhóm 15

| STT | Họ và Tên | Mã Sinh Viên | Vai trò |
| :--- | :--- | :--- | :--- |
| 1 | [Tên thành viên 1] | [MSSV 1] | Leader / Backend Dev |
| 2 | [Tên thành viên 2] | [MSSV 2] | Frontend Dev |
| 3 | [Tên thành viên 3] | [MSSV 3] | Database & Tester |

---

## 🚀 Tính Năng Nổi Bật

* **Kiến trúc API RESTful:** Giao tiếp mượt mà giữa Frontend (React) và Backend (Laravel).
* **Hiệu suất cao (Concurrency):** Hệ thống được thiết kế và kiểm thử để đáp ứng **300 sinh viên truy cập và thi cùng lúc** mà không bị nghẽn (Sử dụng kịch bản test JMeter/k6).
* **Giao diện đáp ứng (Responsive):** Sử dụng thuần Bootstrap 5, tối ưu hiển thị trên cả máy tính và thiết bị di động.
* **Quản lý kỳ thi:** Admin có thể tạo đề thi, nạp ngân hàng câu hỏi, thiết lập thời gian thi.
* **Bảo mật:** Sử dụng Laravel Sanctum để xác thực người dùng qua API Token.

---

## 🛠 Yêu Cầu Cài Đặt (Prerequisites)

Để chạy dự án này trên máy tính cá nhân, bạn cần cài đặt sẵn:
* [PHP](https://windows.php.net/download/) (Phiên bản >= 8.2)
* [Composer](https://getcomposer.org/)
* [Node.js](https://nodejs.org/) (Phiên bản >= 18.x) & npm
* [MySQL](https://www.mysql.com/) (Thông qua XAMPP, Laragon, v.v.)
* Git

---

## ⚙️ Hướng Dẫn Cài Đặt (Local Development)

Dự án được chia thành 2 thư mục độc lập: `backend` và `frontend`. Cần mở 2 terminal riêng biệt để chạy song song.

### 1. Cài đặt Backend (Laravel)

```bash
# Di chuyển vào thư mục backend
cd backend

# Cài đặt các thư viện PHP
composer install

# Copy file cấu hình môi trường
cp .env.example .env

# Tạo application key
php artisan key:generate
