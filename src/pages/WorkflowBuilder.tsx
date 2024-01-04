import LeftPanel from '../components/LeftPanel';
import Canvas from '../components/Canvas';
import OutputPanel from '../components/OutputPanel';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setEdges, setNodes } from '../redux/slices/workflow';

const WorkflowBuilder = () => {
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const workflowName = pathname.slice(1, pathname.length);

    const data = localStorage.getItem('workflowbuilder');

    if (data) {
      const localStorageData = JSON.parse(data);
      const currentWorkflowData = localStorageData.find(
        (item: any) => item.name === workflowName
      );

      console.log(currentWorkflowData.edges);

      dispatch(setNodes(currentWorkflowData.nodes));
      dispatch(setEdges(currentWorkflowData.edges));
    }
  }, [pathname]);

  return (
    <>
      <div
        className="flex h-full resizable-pane"
        style={{
          minHeight: '30%',
          maxHeight: '70%', //change to 90%
          resize: 'vertical',
          overflow: 'hidden',
        }}
      >
        <LeftPanel />
        <Canvas />
      </div>
      <OutputPanel />
    </>
  );
};

export default WorkflowBuilder;
