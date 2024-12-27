import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow';

import './App.css';

function App() {
  const [nodes, setNodes] = useState([
    {
      id: '1',
      type: 'default',
      data: { label: 'Node 1' },
      position: { x: 150, y: 150 },
    },
  ]);

  const [edges, setEdges] = useState([]);

  const onConnect = (params) => setEdges((eds) => [...eds, params]);

  return (
    <div className="App">
      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            fitView
            style={{ width: '100%', height: '100%' }}
          >
            <MiniMap />
            <Controls />
          </ReactFlow>
        </div>

        <div
          style={{
            width: '250px',
            backgroundColor: '#f0f0f0',
            padding: '10px',
            overflowY: 'auto',
          }}
        >
          <h2>Sidebar</h2>
          <button
            onClick={() => {
              const newNode = {
                id: String(nodes.length + 1),
                type: 'default',
                data: { label: `Node ${nodes.length + 1}` },
                position: { x: Math.random() * 300, y: Math.random() * 300 },
              };
              setNodes((prev) => [...prev, newNode]);
            }}
          >
            Add Node
          </button>
          <button
            onClick={() => {
              if (nodes.length > 1) {
                const newEdge = {
                  id: `e${nodes[0].id}-${nodes[1].id}`,
                  source: nodes[0].id,
                  target: nodes[1].id,
                  animated: true,
                };
                setEdges((prev) => [...prev, newEdge]);
              }
            }}
          >
            Add Edge
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
