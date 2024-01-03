import Canvas from './components/Canvas';
import Layout from './components/Layout';
import LeftPanel from './components/LeftPanel';
import OutputPanel from './components/OutputPanel';

export default function App() {
  return (
    <Layout>
      <div className="flex h-full">
        <LeftPanel />
        <Canvas />
      </div>
      {/* <OutputPanel /> */}
    </Layout>
  );
}
