import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TinTucService {
  TinTuc: any = [
    {
      id:1,
      title: "SPIDER-MAN: FAR FROM HOME HỨA HẸN SẼ TRỞ THÀNH BOM TẤN THÚ VỊ NHẤT NĂM 2019",
      content: "SPIDER-MAN: FAR FROM HOME CÀNG ĐƯỢC ĐÁNH GIÁ HOÀNH TRÁNG HƠN SAU BUỔI CÔNG CHIẾU TẠI MỸ VỪA QUA",
      img: "../../../assets/image/uuDaiTinTuc/tinTuc/1.jpg",
      status: true,
    },
    {
      id:2,
      title: "TUYỂN DUNG NHÂN VIÊN PHỤC VỤ KHÁCH HÀNG",
      content: "Môi trường trẻ trung, năng động, nhiều nam thanh nữ tú độc thân vui tính",
      img: "../../../assets/image/uuDaiTinTuc/tinTuc/5.jpg",
      status: false,
    },
    {
      id:3,
      title: "ANNABELLE: ÁC QUỶ ĐÃ TRỞ LẠI MỘT LẦN NỮA",
      content: "Vụ trụ điện ảnh kinh dị Conjuring tiếp tục mở rộng với phần phim thứ 3 của Annabelle. Con búp bê ma gieo rắc nỗi kinh hoàng cho nhiều ngôi nhà và lần này sẽ là gia đình Warren.",
      img: "../../../assets/image/uuDaiTinTuc/tinTuc/2.jpg",
      status: false,
    },
    {
      id:4,
      title: "NHÂN VIÊN MARKETING TẠI HUẾ",
      content: "Cùng tham gia vào đội ngũ Marketing nói riêng, nhân viên hệ thống cụm rạp chiếu phim Cinestar Cinema nói chung.",
      img: "../../../assets/image/uuDaiTinTuc/tinTuc/6.jpg",
      status: true,
    },
    {
      id:5,
      title: "ĐẲNG CẤP THÚ CƯNG 2 - BỘ MẶT THẬT CỦA PET NHÀ BẠN !!!",
      content: "Phim hoạt hình thứ 10 đến từ Illumination, Đẳng Cấp Thú Cưng 2, là phần tiếp theo của bom tấn hài – hoạt hình được phát hành năm 2016 với thành tích doanh thu cuối tuần mở màn cao nhất từ trước đến nay cho một thương hiệu hoạt hình gốc.",
      img: "../../../assets/image/uuDaiTinTuc/tinTuc/3.jpg",
      status: true,
    },
    {
      id:6,
      title: "ĐẶC VỤ ÁO ĐEN MỘT LẦN TRỞ LẠI ĐỂ CỨU THẾ GIỚI !!",
      content: "Sau 7 năm chờ đợi, người hâm mộ cuối cùng cũng có thể gặp lại những Đặc vụ Áo Đen siêu ngầu trong ‘Men in Black: International’. Lần này, khán giả sẽ được đến phân đội của tổ chức MIB ở nước Anh với vô số vũ khí, công nghệ hiện đại ấn tượng cùng dàn diễn viên trẻ trung, ăn khách như “Thần Sấm” Chris Hemsworth và Tessa Thompson.",
      img: "../../../assets/image/uuDaiTinTuc/tinTuc/7.jpg",
      status: false,
    },
    {
      id:7,
      title: "TUYỂN NHÂN VIÊN PHỤC VỤ KHÁCH HÀNG ",
      content: "Cinestar chào đón những nhân viên trẻ trung, năng động, tài năng, ham học hỏi, nhiều hoài bão và mong muốn thể hiện tài năng gia nhập đội ngũ của chúng tôi. ",
      img: "../../../assets/image/uuDaiTinTuc/tinTuc/4.jpg",
      status: false,
    },
    {
      id:8,
      title: "“TAN CHẢY” VỚI HÌNH ẢNH SIÊU BỒ CÂU CỰC KỲ ĐÁNG YÊU CỦA SPIES IN DISGUISE.",
      content: "Sau hàng loạt thành công với các bom tấn hoạt hình như loạt Ice Age, Rio hay Ferdinand (2017), hãng Blue Sky sẽ tiếp tục trình làng Spies in Disguise (Tựa Việt: Điệp Viên Ẩn Danh) trong năm 2019 tới đây. Bộ phim hứa hẹn sẽ mang đến cho người xem những phút giây giải trí sảng khoái cùng nhiều bài học ý nghĩa.",
      img: "../../../assets/image/uuDaiTinTuc/tinTuc/8.jpg",
      status: true,
    },
  ] 
  constructor() { }
  layTinTuc(){
    return this.TinTuc
  }
}
