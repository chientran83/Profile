import { FC, useState } from "react";

import Project from "../../assets/images/thiennhien.jpg";
import WebForm1 from "../../assets/images/webform1.png";
import WebForm2 from "../../assets/images/webform2.png";
import WebSale1 from "../../assets/images/websale1.png";
import WebSale2 from "../../assets/images/websale2.png";
import WebSale3 from "../../assets/images/websale3.png";
import WebSale4 from "../../assets/images/websale4.png";
import WebSale5 from "../../assets/images/websale5.png";
import WebSale6 from "../../assets/images/websale6.png";
import WebSale7 from "../../assets/images/websale7.png";
import WebSale8 from "../../assets/images/websale8.png";
import WebSale9 from "../../assets/images/websale9.png";
import WebSale10 from "../../assets/images/websale10.png";
import { useStore } from "../../store/hook";

export type ReceivedProps = Record<string, any>;
type StepType = {
  title: string;
  description: string;
  content: string;
};
const steps = [
  {
    title: "2020",
    description: "Khởi đầu hành trình",
    content:
      "Bắt đầu học tại cao đẳng quốc tế BTEC FPT, ban đầu được học qua 4 kỳ tiếng anh,  và đuợc làm quen với lập trình qua C/C# thông qua các bài tập quản lý thư viện, sinh viên,...và sau đó học môn Networking , Programming, Database design, Website design, Professional practice .",
  },
  {
    title: "2021",
    description: "Biết tới lập trình",
    content:
      "Vào năm 2 đại học bắt đầu chú tâm tìm hiểu mày mò về công việc thực tế mình sẽ làm, lên youtobe học HTML, CSS, JS. Anh cùng phòng trọ hướng mình học backend và tìm hiểu về PHP (Laravel). Cuối cùng làm ra được website bán hàng đầu tay với Laravel là E-Shoper. trong năm nay mình cũng đã được học về Managing a successful computing project, Security, Software development life cycle, Business intelligence, Cloud computing,	Data structures & algorithms,	Advance programming, Application development, Internet of things.",
  },
  {
    title: "2022",
    description: "Biết tới ReactJs",
    content: `Bắt đầu tìm hiểu về React và biết đến kênh anh Sơn F8 sau khi hoc khóa trên này mình đã lắm được những kiến thức cơ bản về React và đọc tài liệu và các thư viện để có thế code trang web hoàn chỉnh. Và sau đó thực hiện một số project cá nhân như Web bán hàng , Web quản lý nhân viên,...
    Sau đó mình được nhận vào ReactPlus với vị trí Intern ReactJs, làm 3 tháng thì vào học kì chính nên ngừng làm việc tại đây.`,
  },
  {
    title: "2023",
    description: "Work",
    content: "loading...",
  },
];
const projectInitial = [
  {
    name: "Tiki Clone",
    image: [
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
    Technology: [
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
    Features: [
      "Xem danh sách và chi tiết sản phẩm",
      "Tìm kiếm sản phẩm",
      "Thêm,sửa, xóa sản phẩm trong giỏ hàng và danh sách yêu thích",
      "Xem và sửa thông tin người dùng",
      "Đăng nhập ,đăng ký tài khoản.",
    ],
  },
  {
    name: "Web form",
    image: [WebForm1, WebForm2],
    content:
      "Ứng dụng cho phép người dùng kéo thả các field để tạo thành các form tùy ý, có thế inport, export form, validate cho các field.",
    linkDemo: "https://task-drag-input-fx525zfzr-chientran83.vercel.app/",
    linkGit: "https://github.com/chientran83/task-drag-input",
    Technology: [
      "JS(ReactJS)",
      "React beautiful dnd",
      "yup",
      "React hook form.",
    ],
    Features: [
      "Tạo form tùy ý bằng cách kéo thả",
      "Import, export form",
      "Validate cho các field.",
      "Submit form hiện có.",
    ],
  },
  {
    name: "Web sales (Elecshop)",
    image: [Project],
    content:
      "Ứng dụng Website cho phép người dùng mua các sản phẩm công nghệ như điện thoại, tai nghe,...quản lý khách hàng, người bán hàng , doanh thu,...",
    linkDemo: null,
    linkGit: "https://github.com/chientran83/elecshop_sever",
    Technology: ["PHP(Laravel)", " JS(Vue). "],
    Features: [],
  },
];

const useHome = (props: ReceivedProps) => {
  const [stepCurrent, setStepCurrent] = useState(0);
  const [stepActive, setStepActive] = useState<null | StepType>(steps[0]);
  const [projects, setProjects] = useState(projectInitial);
  const [state, dispatch] = useStore();

  const onChangeStep = (value: number) => {
    setStepCurrent(value);
    setStepActive(steps[value]);
  };
  return {
    ...props,
    onChangeStep,
    stepCurrent,
    steps,
    stepActive,
    projects,
    themeCurrent: state,
  };
};

export type Props = ReturnType<typeof useHome>;
export default useHome;
