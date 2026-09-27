# Cinema Booking API

Backend REST API cho hệ thống đặt vé xem phim. Ứng dụng được xây dựng bằng Node.js và Express, sử dụng MongoDB thông qua Mongoose, hỗ trợ quản lý nội dung rạp chiếu, đặt vé và tích hợp các cổng thanh toán.

## Nội dung

- [Tính năng](#tính-năng)
- [Công nghệ](#công-nghệ)
- [Cấu trúc mã nguồn](#cấu-trúc-mã-nguồn)
- [Yêu cầu](#yêu-cầu)
- [Cài đặt và chạy](#cài-đặt-và-chạy)
- [API chính](#api-chính)
- [Cấu hình và bảo mật](#cấu-hình-và-bảo-mật)
- [Kiểm thử](#kiểm-thử)
- [Giấy phép](#giấy-phép)

## Tính năng

- Đăng ký, đăng nhập và xác thực người dùng bằng JSON Web Token.
- Quản lý chi nhánh, rạp, phim, thể loại, lịch chiếu, ghế và ghế theo suất chiếu.
- Đặt vé, tạo đơn hàng và xem đơn hàng/vé của người dùng.
- Quản lý tin tức và dịch vụ tại rạp.
- Tích hợp thanh toán VNPay, PayPal và Braintree.
- Phân quyền quản trị viên cho các thao tác quản lý nội dung.

## Công nghệ

- Node.js, Express 5
- MongoDB, Mongoose
- JWT và bcrypt
- VNPay, PayPal Checkout, Braintree

## Cấu trúc mã nguồn

```text
.
├── app.js                  # Khởi tạo Express, middleware và router
├── index.js                # Kết nối cấu hình và khởi chạy HTTP server
├── src/
│   ├── configs/            # Cấu hình cơ sở dữ liệu và thanh toán
│   ├── controllers/        # Xử lý request và response
│   ├── middlewares/        # Xác thực token và phân quyền
│   ├── models/             # Các mô hình dữ liệu Mongoose
│   ├── routers/            # Khai báo endpoint API
│   └── services/           # Nghiệp vụ và tích hợp dịch vụ ngoài
├── package.json
└── package-lock.json
```

## Yêu cầu

- Node.js LTS và npm.
- MongoDB Atlas hoặc MongoDB có thể truy cập từ môi trường chạy ứng dụng.
- Thông tin sandbox tương ứng nếu cần thử nghiệm PayPal hoặc Braintree.

Kiểm tra phiên bản:

```bash
node --version
npm --version
```

## Cài đặt và chạy

```bash
npm ci
npm run dev
```

Chạy ứng dụng theo chế độ thông thường:

```bash
npm start
```

Server mặc định lắng nghe tại `http://localhost:3000`. Có thể thay đổi cổng bằng biến môi trường `PORT`. Endpoint `GET /` hiện trả về `Hello World` để kiểm tra server.

## API chính

Các route được khai báo trực tiếp trong những file thuộc `src/routers/`. Một số endpoint tiêu biểu:

| Nhóm | Endpoint mẫu | Mô tả |
| --- | --- | --- |
| Tài khoản | `POST /registration`, `POST /login` | Đăng ký và đăng nhập |
| Phim | `GET /movie/getall`, `GET /movie/getbyid/:id` | Tra cứu phim |
| Lịch chiếu | `GET /schedule/by-movie/:movieId` | Tra cứu lịch theo phim |
| Ghế | `GET /api/seats/getbycinema/:cinemaId` | Tra cứu ghế theo rạp |
| Đơn hàng | `POST /order/create`, `GET /order/my-orders` | Tạo và xem đơn hàng; yêu cầu JWT |
| VNPay | `POST /api/payment/create` | Tạo yêu cầu thanh toán |
| PayPal | `POST /api/paypal/create-order` | Tạo đơn thanh toán |
| Braintree | `GET /api/braintree/client-token` | Lấy client token |

Các thao tác quản trị yêu cầu JWT với vai trò admin. Xem router và controller tương ứng để biết đầy đủ endpoint, dữ liệu đầu vào và quyền truy cập.

## Cấu hình và bảo mật

`PORT` được đọc từ biến môi trường. PayPal sử dụng `PAYPAL_CLIENT_ID` và `PAYPAL_CLIENT_SECRET`; Braintree sử dụng `BRAINTREE_MERCHANT_ID`, `BRAINTREE_PUBLIC_KEY` và `BRAINTREE_PRIVATE_KEY`. Các biến của cổng thanh toán phải có sẵn trong môi trường tiến trình khi ứng dụng khởi động.

**Lưu ý bảo mật:** cấu hình hiện tại đang chứa thông tin truy cập MongoDB Atlas, khóa VNPay và JWT signing secret trực tiếp trong mã nguồn. Không chia sẻ hoặc triển khai ứng dụng với cấu hình này. Hãy thu hồi/luân chuyển các thông tin đã lộ, chuyển chúng sang biến môi trường hoặc secret manager, và chỉ sử dụng thông tin sandbox trong môi trường phát triển. Các khóa không được đưa vào README, log hoặc hệ thống quản lý mã nguồn.

## Kiểm thử

Repository hiện chưa có bộ kiểm thử được cấu hình. Script `npm test` trong `package.json` chỉ trả về thông báo chưa có test và kết thúc với lỗi; chưa có script lint.

## Giấy phép

`package.json` khai báo giấy phép ISC. Tham khảo tệp giấy phép của repository nếu cần xác định đầy đủ điều khoản phân phối.
