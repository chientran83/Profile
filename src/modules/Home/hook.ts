import { FC, useState } from "react";

import Project from "../../assets/images/thiennhien.jpg";

export type ReceivedProps = Record<string, any>;
type StepType = {
  title: string;
  description: string;
  content: string;
};

const useHome = (props: ReceivedProps) => {
  const steps = [
    {
      title: "2020",
      description: "Khởi đầu hành trình",
      content: "desc khoi dau",
    },
    {
      title: "2021",
      description: "Biết tới lập trình",
      content: "desc 2020",
    },
    {
      title: "2022",
      description: "Biết tới laravel",
      content: "desc 2021",
    },
    {
      title: "2023",
      description: "Biết tới ReactJs",
      content: "desc 2023",
    },
  ];
  const projectInitial = [
    {
      name: "Tiki Clone",
      image: Project,
      content:
        "Ứng dụng cho phép người dùng xem danh sách và chi tiết sản phẩm, search , thêm,sửa, xóa sản phẩm trong giỏ hàng và danh sách yêu thích, xem và sửa thông tin người dùng , đăng nhập ,đăng ký tài khoản.",
    },
    {
      name: "Tiki Clone",
      image: Project,
      content:
        "Ứng dụng cho phép người dùng xem danh sách và chi tiết sản phẩm, search , thêm,sửa, xóa sản phẩm trong giỏ hàng và danh sách yêu thích, xem và sửa thông tin người dùng , đăng nhập ,đăng ký tài khoản.",
    },
    {
      name: "Tiki Clone",
      image: Project,
      content:
        "Ứng dụng cho phép người dùng xem danh sách và chi tiết sản phẩm, search , thêm,sửa, xóa sản phẩm trong giỏ hàng và danh sách yêu thích, xem và sửa thông tin người dùng , đăng nhập ,đăng ký tài khoản.",
    },
    {
      name: "Tiki Clone",
      image: Project,
      content:
        "Ứng dụng cho phép người dùng xem danh sách và chi tiết sản phẩm, search , thêm,sửa, xóa sản phẩm trong giỏ hàng và danh sách yêu thích, xem và sửa thông tin người dùng , đăng nhập ,đăng ký tài khoản.",
    },
    {
      name: "Tiki Clone",
      image: Project,
      content:
        "Ứng dụng cho phép người dùng xem danh sách và chi tiết sản phẩm, search , thêm,sửa, xóa sản phẩm trong giỏ hàng và danh sách yêu thích, xem và sửa thông tin người dùng , đăng nhập ,đăng ký tài khoản.",
    },
  ];
  const [stepCurrent, setStepCurrent] = useState(0);
  const [stepActive, setStepActive] = useState<null | StepType>(steps[0]);
  const [projects, setProjects] = useState(projectInitial);
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
  };
};

export type Props = ReturnType<typeof useHome>;
export default useHome;
