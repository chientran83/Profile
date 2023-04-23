import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/hook";

export type ReceivedProps = Record<string, any>;

const useProject = (props: ReceivedProps) => {
  const { themes, project: projectContext } = useStore();
  const [project, setProject] = useState<any>(null);
  const [projects, setProjects] = useState<any>(null);
  let { projectId } = useParams();

  useEffect(() => {
    const projectSingle = projectContext.state.find((projectItem: any) => {
      return projectItem.id === projectId;
    });
    setProject(projectSingle);

    const projectsOther = projectContext.state.filter((projectItem: any) => {
      return projectItem.id !== projectId;
    });
    setProjects(projectsOther);
  }, [projectId]);

  return {
    ...props,
    themeCurrent: themes.state,
    project,
    projects,
  };
};
export type Props = ReturnType<typeof useProject>;

export default useProject;
