import Canvas from './components/Canvas';
import Layout from './components/Layout';
import LeftPanel from './components/LeftPanel';
import OutputPanel from './components/OutputPanel';

export default function App() {
  return (
    <Layout>
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
    </Layout>
  );
}
