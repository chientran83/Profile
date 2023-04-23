import Project from "../assets/images/thiennhien.jpg";
import WebForm1 from "../assets/images/webform1.png";
import WebForm2 from "../assets/images/webform2.png";
import WebSale1 from "../assets/images/websale1.png";
import WebSale2 from "../assets/images/websale2.png";
import WebSale3 from "../assets/images/websale3.png";
import WebSale4 from "../assets/images/websale4.png";
import WebSale5 from "../assets/images/websale5.png";
import WebSale6 from "../assets/images/websale6.png";
import WebSale7 from "../assets/images/websale7.png";
import WebSale8 from "../assets/images/websale8.png";
import WebSale9 from "../assets/images/websale9.png";
import WebSale10 from "../assets/images/websale10.png";
import WebElecshop1 from "../assets/images/elecshop1.png";
import WebElecshop2 from "../assets/images/elecshop2.png";
import WebElecshop3 from "../assets/images/elecshop3.png";
import WebElecshop4 from "../assets/images/elecshop4.png";
import WebElecshop5 from "../assets/images/elecshop5.png";
import WebElecshop6 from "../assets/images/elecshop6.png";
import WebElecshop7 from "../assets/images/elecshop7.png";
import WebElecshop8 from "../assets/images/elecshop8.png";

export const initStateProject: any = [
  {
    id: "1",
    name: "Tiki Clone",
    images: [
      WebSale1,
      WebSale2,
      WebSale3,
      WebSale4,
      WebSale5,
      WebSale6,
      WebSale7,
      WebSale8,
      WebSale9,
      WebSale10,
    ],
    content:
      "Ứng dụng cho phép người dùng xem danh sách và chi tiết sản phẩm, search , thêm,sửa, xóa sản phẩm trong giỏ hàng và danh sách yêu thích, xem và sửa thông tin người dùng , đăng nhập ,đăng ký tài khoản.",
    linkDemo: "https://tiki-shop-clone.vercel.app/",
    linkGit: "https://github.com/chientran83/tiki-shop-clone",
    technology: [
      "JS(ReactJS)",
      "redux ",
      "tookit",
      "thunk",
      "react hook form",
      "yup",
      "react selecter",
      "chakra-ui",
      "antd",
      "router dom",
      "styled component.",
    ],
    features: [
      "Xem danh sách và chi tiết sản phẩm",
      "Tìm kiếm sản phẩm",
      "Thêm,sửa, xóa sản phẩm trong giỏ hàng và danh sách yêu thích",
      "Xem và sửa thông tin người dùng",
      "Đăng nhập ,đăng ký tài khoản.",
    ],
  },
  {
    id: "2",
    name: "Web form",
    images: [WebForm1, WebForm2],
    content:
      "Ứng dụng cho phép người dùng kéo thả các field để tạo thành các form tùy ý, có thế inport, export form, validate cho các field.",
    linkDemo: "https://task-drag-input-fx525zfzr-chientran83.vercel.app/",
    linkGit: "https://github.com/chientran83/task-drag-input",
    technology: [
      "JS(ReactJS)",
      "React beautiful dnd",
      "yup",
      "React hook form.",
    ],
    features: [
      "Tạo form tùy ý bằng cách kéo thả",
      "Import, export form",
      "Validate cho các field.",
      "Submit form hiện có.",
    ],
  },
  {
    id: "3",
    name: "Web sales (Elecshop)",
    images: [
      WebElecshop1,
      WebElecshop2,
      WebElecshop3,
      WebElecshop4,
      WebElecshop5,
      WebElecshop6,
      WebElecshop7,
      WebElecshop8,
    ],
    content:
      "Ứng dụng Website cho phép người dùng mua các sản phẩm công nghệ như điện thoại, tai nghe,...quản lý khách hàng, người bán hàng , doanh thu,...",
    linkDemo: null,
    linkGit: "https://github.com/chientran83/elecshop_sever",
    technology: ["PHP(Laravel)", " JS(Vue). "],
    features: [
      "Đăng nhập tài khoản",
      "Thống kê doanh thu ,ngừời dùng",
      "Quản lý hóa đơn, Thể loại, sản phẩm, người dùng, mã giảm giá, roles, permisstion.",
    ],
  },
];

const ProjectReducer = (state: any, action: any) => {
  switch (action.type) {
  }
};
export default ProjectReducer;
