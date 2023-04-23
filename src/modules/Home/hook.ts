import { FC, useEffect, useState } from "react";

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

const useHome = (props: ReceivedProps) => {
  const [stepCurrent, setStepCurrent] = useState(0);
  const [stepActive, setStepActive] = useState<null | StepType>(steps[0]);
  const [projects, setProjects] = useState<any>(null);
  const { themes, project } = useStore();

  const onChangeStep = (value: number) => {
    setStepCurrent(value);
    setStepActive(steps[value]);
  };
  useEffect(() => {
    setProjects(project.state);
  }, []);
  return {
    ...props,
    onChangeStep,
    stepCurrent,
    steps,
    stepActive,
    projects,
    themeCurrent: themes.state,
  };
};

export type Props = ReturnType<typeof useHome>;
export default useHome;
